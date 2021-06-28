const { createStatementData } = require('./createStatementData')

function statement() {
  return renderPlainText(createStatementData());
}
function htmlStatement() {
  return renderHtml(createStatementData());
}

function renderPlainText(data) {
  let result = `청구 내역 (고객명: ${data.customer})\n`
  for(let perf of data.performances) {
    result += `${perf.play.name}: ${usd(perf.amount)} ${perf.audience}석\n`
  }

  result += `총액: ${usd(totalAmount(data))}\n`;
  result += `적립 포인트: ${totalVolumeCredits(data)}점\n`;

  function totalAmount(data) {
    return data.performances.reduce((total, p) => total + p.amount, 0);
  }

  function totalVolumeCredits(data) {
    return data.performances.reduce((total, p) => total + p.volumeCredits, 0);
  }

  return result;
}

function renderHtml(data) {
  let result = `<h1>Statement for ${data.customer}</h1>\n`;
  result += "<table>\n";
  result += "<tr><th>play</th><th>seats</th><th>cost</th></tr>";
  for (let perf of data.performances) {
    result += `  <tr><td>${perf.play.name}</td><td>${perf.audience}</td>`;
    result += `<td>${usd(perf.amount)}</td></tr>\n`;
  }
  result += "</table>\n";
  result += `<p>Amount owed is <em>${usd(data.totalAmount)}</em></p>\n`;
  result += `<p>You earned <em>${data.totalVolumeCredits}</em> credits</p>\n`;
  return result;
}

function usd(aNumber) {
  return new Intl.NumberFormat("en-us", {
    style: "currency", currency: "USD", minimumFractionDigits: 2
  }).format(aNumber/100);
}

console.log(statement())
console.log(htmlStatement())
