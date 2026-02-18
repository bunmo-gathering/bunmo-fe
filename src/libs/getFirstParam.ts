/**
 * searchParams의 단일 값을 가져오는 유틸리티
 * - 배열인 경우 첫 번째 요소 반환
 * - 값이 없거나 null인 경우 null 반환
 * - 문자열인 경우 그대로 반환
 */
export const getFirstParam = (
  param: string | string[] | undefined,
): string | null => {
  if (Array.isArray(param)) {
    return param[0] ?? null;
  }
  return param ?? null;
};
