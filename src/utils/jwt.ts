import {
  HMACSHA256,
  base64UrlEncode,
  base64UrlDecode,
} from '../utils/crypto';

/**
 * 生成jwt
 */
export const JWTEncode = (
  payload: string,
  key?: string,
  algorithm?: string
): string => {
  if (algorithm === undefined) {
    algorithm = 'HS256';
  }
  let header = `{"alg":"${algorithm}","typ":"JWT"}`;
  let content = base64UrlEncode(header) + '.' + base64UrlEncode(payload);
  let encoded = '';
  switch (algorithm) {
    case 'HS256':
      encoded = content + '.' + HMACSHA256(content, key);
      break;
    default:
      console.log('Algorithm is not supported.');
  }
  return encoded;
};

/**
 * 解析jwt
 *
 * 如校验成功，返回payload(string),否则返回空字符串
 */
export const JWTDecode = (token: string, key?: string): string => {
  if (checkToken(token, key) === true) {
    let payload = token.split('.')[1];
    return base64UrlDecode(payload);
  } else {
    return '';
  }
};
/**
 * 校验token
 */
export const checkToken = (token: string, key?: string): boolean => {
  let [header, payload, signature] = token.split('.');
  if (signature === HMACSHA256(header + '.' + payload, key)) {
    return true;
  }
  return false;
};
