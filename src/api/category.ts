import axios from "./axios";
import { ResBaseType, categoryItem } from "@/types";

export const getCategories = (): Promise<ResBaseType<categoryItem[]>> =>
  axios.get("/api/category/get-categories");
