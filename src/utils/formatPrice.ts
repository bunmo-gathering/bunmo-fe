export function formatPrice(input: unknown): string {
  // 1. null / undefined 방어
  if (input === null || input === undefined) {
    throw new Error("[formatPrice] 가격 값이 null 또는 undefined입니다.");
  }

  // 2. 문자열로 변환
  const raw = String(input).trim();

  if (raw === "") {
    throw new Error("[formatPrice] 가격 값이 빈 문자열입니다.");
  }

  // 3. 숫자 / 콤마 / 소수점 / 마이너스 제외 전부 제거
  const cleaned = raw.replace(/[^\d.-]/g, "");

  // 4. Number 변환
  const numeric = Number(cleaned);

  // 5. NaN 방어
  if (Number.isNaN(numeric)) {
    throw new Error(`[formatPrice] 숫자 변환 실패: "${input}"`);
  }

  // 6. 정수 / 소수 분리 처리
  const [integerPart, decimalPart] = cleaned.split(".");
  const formattedInt = Number(integerPart).toLocaleString("ko-KR");

  return decimalPart !== undefined
    ? `${formattedInt}.${decimalPart}`
    : formattedInt;
}
