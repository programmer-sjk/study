/**
 * 핵심은 본인이 지은 이름을 다른 사람들이 해석할 수 있을까? 질문을 던져보며 철저하게 확인해야 한다.
 */

/**
 * 경계값을 포함하는 한계값을 다룰 때는 min, max 를 사용하라.
 */
// bad
const CART_TOO_BIG_LIMIT = 10;
if([1,2,3].length > CART_TOO_BIG_LIMIT) {
  console.error('err')
}

// good
const MAX_ITEM_IN_CART = 10;
if([1,2,3].length > MAX_ITEM_IN_CART) {
  console.error('err')
}

/**
 * boolean 변수명
 */
// 일반적으로 is, has, can, should 같은 단어를 붙이면 명확하다.
// bad
const disable_ssl = false;

// good
const use_ssl = true;
