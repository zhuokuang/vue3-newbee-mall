import axios from "./axios";
import { ResBaseType, Image } from "./types";

export const getSwipeImg = (): Promise<ResBaseType<Image[]>> =>
  axios.get("/api/home/swipe");
