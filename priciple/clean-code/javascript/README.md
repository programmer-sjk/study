# clean-code-javascript

## Introduction
* 이 글은 clean-code-javascript를 단순히 보는 것보다는 정리하는게 저 자신에게 좋다고 판단하여 만든 것입니다.
* 이 글의 [영어 원문](https://github.com/ryanmcdermott/clean-code-javascript) 과 [한글 번역](https://github.com/qkraudghgh/clean-code-javascript-ko) 을 기반으로 합니다.
* 원문 양식에서 저에게 불 필요한 부분을 생략하고 필요한 부분만 정리합니다.

## 목차
  1. [변수(Variables)](#변수variables)
  2. [함수(Functions)](#함수functions)
  

## **변수(Variables)**
### 의미있고 발음하기 쉬운 변수 이름을 사용하세요.
**Bad:** 
```javascript
const yyyymmdstr = moment().format('YYYY/MM/DD');
```

**Good:** 
```javascript
const currentDate = moment().format("YYYY/MM/DD");
```

### 동일한 유형의 변수에 동일한 어휘를 사용하세요
**Bad:** 
```javascript
getUserInfo();
getClientData();
getCustomerRecord();
```

**Good:** 
```javascript
getUser();
```

### 검색 가능한 이름을 사용하세요

코드를 작성하는 것보다 더 많은 코드를 읽을 겁니다. 코드를 읽기 쉽고 검색하기 쉽게 만드는것은 매우 중요합니다. 
변수 이름을 의미있고 이해하기 쉽게 작성하지 않으면 이 코드를 읽는 개발자가 열받을 겁니다. 변수 이름을 검색 가능하게 만드세요.

**Bad:** 
```javascript
// What the heck is 86400000 for?
setTimeout(blastOff, 86400000);
```

**Good:** 
```javascript
// Declare them as capitalized named constants.
const MILLISECONDS_IN_A_DAY = 86_400_000;

setTimeout(blastOff, MILLISECONDS_IN_A_DAY);
```

### 의도를 나타내는 변수들을 사용하세요
**Bad:** 
```javascript
const address = "One Infinite Loop, Cupertino 95014";
const cityZipCodeRegex = /^[^,\\]+[,\\\s]+(.+?)\s*(\d{5})?$/;
saveCityZipCode(
  address.match(cityZipCodeRegex)[1],
  address.match(cityZipCodeRegex)[2]
);
```

**Good:** 
```javascript
const address = "One Infinite Loop, Cupertino 95014";
const cityZipCodeRegex = /^[^,\\]+[,\\\s]+(.+?)\s*(\d{5})?$/;
const [_, city, zipCode] = address.match(cityZipCodeRegex) || [];
saveCityZipCode(city, zipCode);
```

### 자신만 알아볼 수 있는 변수명은 피하세요
명시적인게 암시적인 것 보다 좋습니다. 

**Bad:** 
```javascript
const locations = ["Austin", "New York", "San Francisco"];
locations.forEach(l => {
  doStuff();
  doSomeOtherStuff();
  // ...
  // ...
  // ...
  // Wait, what is `l` for again?
  dispatch(l);
});
```

**Good:** 
```javascript
const locations = ["Austin", "New York", "San Francisco"];
locations.forEach(location => {
  doStuff();
  doSomeOtherStuff();
  // ...
  // ...
  // ...
  dispatch(location);
});
```

### 불 필요한 문맥(Context)을 넣지 마세요
class/object 이름에 의미가 있다면, 변수 이름에 반복하지 마세요.

**Bad:** 
```javascript
const Car = {
  carMake: "Honda",
  carModel: "Accord",
  carColor: "Blue"
};

function paintCar(car) {
  car.carColor = "Red";
}
```

**Good:** 
```javascript
const Car = {
  make: "Honda",
  model: "Accord",
  color: "Blue"
};

function paintCar(car) {
  car.color = "Red";
}
```

### 기본 매개변수가 short circuiting 트릭이나 조건문 보다 깔끔합니다
기본 매개변수는 보통 short circuiting 보다 깔끔합니다. 만약 함수에 기본 매개변수를 사용한다면 `undefined` 인자에 대해서만 기본 매개변수가 제공됩니다. `''`, `""`, `false`, `null`, `0`, `NaN` 같은 `falsy`한 값들은 기본 매개변수가 적용되지 않습니다.

**Bad:** 
```javascript
function createMicrobrewery(name) {
  const breweryName = name || "Hipster Brew Co.";
  // ...
}
```

**Good:** 
```javascript
function createMicrobrewery(name = "Hipster Brew Co.") {
  // ...
}
```

## **함수(Functions)**
### 함수 인자는 2개 이하가 이상적입니다.
함수 인자 개수를 제한하는 것은 test를 쉽게 만들기 때문에 매우 중요합니다. 만약 매개변수가 3개 이상일 경우엔 테스트 해야하는 경우의 수가 많아지고 각기 다른 인수들로 여러 사례들을 테스트 해야합니다.

1개나 2개의 인자를 가지고 있는 것이 가장 이상적인 케이스입니다. 그리고 3개의 인자는 가능한 피해야합니다. 그것보다 더 많다면 통합되어야합니다. 만약 당신이 2개 이상의 인자를 가진 함수를 사용한다면 그 함수에게 너무 많은 역할을 하게 만든 것입니다. 그렇지 않은 경우라면 대부분의 경우 상위 객체는 1개의 인자만으로 충분합니다.

JavaScript를 사용할 때 많은 보일러플레이트 없이 바로 객체를 만들 수 있습니다. 그러므로 당신이 만약 많은 인자들을 사용해야 한다면 객체를 이용할 수 있습니다.

함수가 기대하는 속성을 좀더 명확히 하기 위해서 es6의 비구조화(destructuring) 구문을 사용할 수 있고 이 구문에는 몇가지 장점이 있습니다.
1. 어떤 사람이 그 함수의 시그니쳐(인자의 타입, 반환되는 값의 타입 등)를 볼 때 어떤 속성이 사용되는지
즉시 알 수 있습니다.
2. 또한 비구조화는 함수에 전달된 인수 객체의 지정된 기본타입 값을 복제하며 이는 사이드이펙트가
일어나는 것을 방지합니다. 참고로 인수 객체로부터 비구조화된 객체와 배열은 복제되지 않습니다.
3. Linter를 사용하면 사용하지않는 인자에 대해 경고해주거나 비구조화 없이 코드를 짤 수 없게 할 수 있습니다.

**Bad:** 
```javascript
function createMenu(title, body, buttonText, cancellable) {
  // ...
}

createMenu("Foo", "Bar", "Baz", true);
```

**Good:** 
```javascript
function createMenu({ title, body, buttonText, cancellable }) {
  // ...
}

createMenu({
  title: "Foo",
  body: "Bar",
  buttonText: "Baz",
  cancellable: true
});
```

## 함수는 하나의 작업만 해야 합니다.
이것은 소프트웨어 엔지니어링에서 가장 중요한 규칙입니다. 함수가 1개 이상의 행동을 한다면 작성하는 것도, 테스트하는 것도, 이해하는 것도 어려워집니다. 당신이 하나의 함수에 하나의 행동을 정의하는 것이 가능해진다면 함수는 좀 더 고치기 쉬워지고 코드들은 읽기 쉬워질 것입니다. 많은 원칙들 중 이것만 알아간다 하더라도 당신은 많은 개발자들을 앞설 수 있습니다.

**Bad:** 
```javascript
function emailClients(clients) {
  clients.forEach(client => {
    const clientRecord = database.lookup(client);
    if (clientRecord.isActive()) {
      email(client);
    }
  });
}
```

**Good:** 
```javascript
function emailActiveClients(clients) {
  clients.filter(isActiveClient).forEach(email);
}

function isActiveClient(client) {
  const clientRecord = database.lookup(client);
  return clientRecord.isActive();
}
```
