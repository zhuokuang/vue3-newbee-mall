import axios from "./axios";
import { ResBaseType, Kingkong } from "./types";

export const getKingkong = (): Promise<ResBaseType<Kingkong[]>> =>
  axios.get("/api/home/kingkong");
