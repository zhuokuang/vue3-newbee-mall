export type categoryItem = {
  categoryId: number;
  categoryName: string;
  categoryLevel: number;
  secondLevelCategoryVOS?: categoryItem[];
};
