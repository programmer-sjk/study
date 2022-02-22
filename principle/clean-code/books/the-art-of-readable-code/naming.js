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
