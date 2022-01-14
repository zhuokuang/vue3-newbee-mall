import axios from "./axios";
import { ResBaseType, categoryItem } from "@/api/types";

export const getCategories = (): Promise<ResBaseType<categoryItem[]>> =>
  axios.get("/api/category/getCategories");
