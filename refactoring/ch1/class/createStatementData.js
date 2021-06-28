const { invoices } = require('./invoices')
const { plays } = require('./plays')

function createPerformanceCalculator(aPerformance, aPlay) {
  switch(aPlay.type) {
    case "tragedy": return new TragedyCalculator(aPerformance, aPlay);
    case "comedy": return new ComedyCalculator(aPerformance, aPlay);
    default:
      throw new Erorr(`알수 없는 장르 ${aPlay.type}`)
  }
}

class PerformanceCalculator {
  constructor(aPerformance, aPlay) {
    this.performance = aPerformance;
    this.play = aPlay;
  }

  get amount() {
    throw new Error("서브 클래스에서 처리하도록 설계됨.")
  }

  get volumeCredits() {
    return Math.max(this.performance.audience - 30, 0);
  }
}

class TragedyCalculator extends PerformanceCalculator {
  get amount() {
    let result = 40000;
    if (this.performance.audience > 30) {
      result += 10000 + 500 * (this.performance.audience - 30)
    }
    return result;
  }
}
class ComedyCalculator extends PerformanceCalculator {
  get amount() {
    let result = 30000;
    if (this.performance.audience > 20) {
      result += 10000 + 500 * (this.performance.audience - 20)
    }
    result += 300 * this.performance.audience;
    return result;
  }

  get volumeCredits() {
    return Math.floor(this.performance.audience / 5);
  }
}

module.exports.createStatementData = () =>  {
  const statementData = {};
  statementData.customer = invoices.customer;
  statementData.performances = invoices.performances.map(enrichPerformance);
  statementData.totalAmount = totalAmount(statementData)
  statementData.totalVolumeCredits = totalVolumeCredits(statementData)
  return statementData;


  function enrichPerformance(aPerformance) {
    const calculator = createPerformanceCalculator(aPerformance, playFor(aPerformance))
    const result = Object.assign({}, aPerformance);
    result.play = calculator.play;
    result.amount = calculator.amount
    result.volumeCredits = calculator.volumeCredits;
    return result;
  }

  function playFor(aPerformance) {
    return plays[aPerformance.playID];
  }s

  function totalAmount(data) {
    let result = 0;
    for(let perf of data.performances) {
      result += perf.amount;
    }
    return result;
  }

  function totalVolumeCredits(data) {
    let result = 0;
    for(let perf of data.performances) {
      result += perf.volumeCredits
    }
    return result
  }
}

function renderPlainText(data) {
  let result = `청구 내역 (고객명: ${data.customer})\n`
  for(let perf of data.performances) {
    result += `${perf.play.name}: ${usd(perf.amount)} ${perf.audience}석\n`
  }

  result += `총액: ${usd(totalAmount(data))}\n`;
  result += `적립 포인트: ${totalVolumeCredits(data)}점\n`;

  function usd(aNumber) {
    return new Intl.NumberFormat("en-us", {
      style: "currency", currency: "USD", minimumFractionDigits: 2
    }).format(aNumber/100);
  }

  function totalAmount(data) {
    return data.performances.reduce((total, p) => total + p.amount, 0);
  }

  function totalVolumeCredits(data) {
    return data.performances.reduce((total, p) => total + p.volumeCredits, 0);
  }

  return result;
}
