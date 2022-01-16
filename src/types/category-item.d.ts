export type categoryItem = {
  categoryId: number;
  categoryName: string;
  categoryLevel: number;
  categoryImg?: string;
  categoryChildren?: categoryItem[];
};
