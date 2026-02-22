type Category = "GROCERY" | "HOUSEHOLD" | "BEAUTY" | "KIDS" | "DEFAULT";

const CategoryMap: Record<Category, string> = {
  GROCERY: "식품",
  HOUSEHOLD: "생활용품",
  BEAUTY: "뷰티",
  KIDS: "출산/육아",
  DEFAULT: "카테고리",
};

export type { Category };
export { CategoryMap };
