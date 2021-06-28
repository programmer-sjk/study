const { invoices } = require('./invoices')
const { plays } = require('./plays')

function statement() {
  let result = `청구 내역 (고객명: ${invoices.customer})\n`
  for(let perf of invoices.performances) {
    result += `${playFor(perf).name}: ${usd(amountFor(perf))} ${perf.audience}석\n`
  }

  function totalAmount() {
    let result = 0;
    for(let perf of invoices.performances) {
      result += amountFor(perf);
    }
    return result;
  }

  function totalVolumeCredits() {
    let result = 0;
    for(let perf of invoices.performances) {
      result += volumeCreditsFor(perf)
    }
    return result
  }

  result += `총액: ${usd(totalAmount())}\n`;
  result += `적립 포인트: ${totalVolumeCredits()}점\n`;

  function volumeCreditsFor(aPerformance) {
    let result = 0;
    result += Math.max(aPerformance.audience - 30, 0);
    if("comedy" === playFor(aPerformance).type)
      result += Math.floor(aPerformance.audience / 5);
    return result;
  }

  function usd(aNumber) {
    return new Intl.NumberFormat("en-us", {
      style: "currency", currency: "USD", minimumFractionDigits: 2
    }).format(aNumber/100);
  }

  function amountFor(aPerformance) {
    let result = 0;

    switch(playFor(aPerformance).type) {
      case "tragedy":
        result = 40000;
        if (aPerformance.audience > 30) {
          result += 10000 + 500 * (aPerformance.audience - 30)
        }
        break;
      case "comedy":
        result = 30000;
        if (aPerformance.audience > 20) {
          result += 10000 + 500 * (aPerformance.audience - 20)
        }
        result += 300 * aPerformance.audience;
        break;
      default:
        throw new Error(`알 수 없는 장르: ${playFor(aPerformance).type}`)
    }
    return result;
  }


  function playFor(aPerformance) {
    return plays[aPerformance.playID];
  }

  return result;
}

console.log(statement())
