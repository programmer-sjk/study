/** tmp, retVal을 피하라.
 * Bad
 * tmp, retVal 같은 이름은 너무 쓰레기 같은 이름이다.
 *
 * Good
 * tmp_file, tmp_file_path..
 */

/** 구체적인 이름을 선호하라
 * Bad
 * ServerCanStart()
 *
 * Good
 * CanListenOnPort()
 */

/** 추가적인 정보를 이름에 표현하기
 * Bad
 * string id; // hex 값인 경우
 *
 * Good
 * string hex_id;
 */

/** 단위를 포함하는 변수
 * Bad
 * var start = (new Date()).getTime();
 *
 * Good
 * var startMs = (new Date()).getTime();
 */

/**
 * 이름은 얼마나 길어야 하는가?
 ** 좁은 범위에서는 짧은 이름도 괜찮다.
 ** 불 필요한 단어 제거하기
 *** convertToString() -> toString() 이여도 실질적인 의미는 사라지지 않는다.
 *** DoServerLoop() -> ServerLoop() 여도 실질적인 의미는 사라지지 않는다.
 ***
 */
