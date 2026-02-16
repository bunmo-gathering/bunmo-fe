export function formatPrice(input: number): string {
  // 1. null / undefined 방어
  if (input === null || input === undefined) {
    throw new Error("[formatPrice] 가격 값이 null 또는 undefined입니다.");
  }

  // 2. 문자열 변환 및 정제
  const raw = String(input).trim();
  const cleaned = raw.replace(/[^\d.-]/g, "");

  // 3. 숫자 변환
  const numeric = Number(cleaned);

  if (isNaN(numeric)) {
    throw new Error("[formatPrice] 유효하지 않은 숫자입니다.");
  }

  // 4. 억 단위 처리 (100,000,000)
  const EOK = 100_000_000;

  if (Math.abs(numeric) >= EOK) {
    const eokPart = Math.floor(numeric / EOK);
    const remainder = numeric % EOK;

    const formattedRemainder =
      remainder > 0 ? ` ${Math.floor(remainder).toLocaleString("ko-KR")}` : "";

    return `${eokPart}억${formattedRemainder}`;
  }

  // 5. 기본 콤마 처리
  const [integerPart, decimalPart] = cleaned.split(".");
  const formattedInt = Number(integerPart).toLocaleString("ko-KR");

  return decimalPart !== undefined
    ? `${formattedInt}.${decimalPart}`
    : formattedInt;
}
