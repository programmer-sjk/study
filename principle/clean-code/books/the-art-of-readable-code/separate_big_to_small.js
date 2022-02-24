/**
 * 8장. 거대한 표현을 잘게 쪼개기
 */

// bad
const request = { user: { id: 1 } }
const document = { user: { id: 1 } }

if (request.user.id === document.user.id) {
  //  사용자가 이 문서를 수정할 수 있다...
}

// good
const userOwnsDocument = request.user.id === document.user.id;

if(userOwnsDocument) {
  // 사용자가 이 문서를 수정할 수 있다...
}
