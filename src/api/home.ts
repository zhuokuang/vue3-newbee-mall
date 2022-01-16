import Axios from "axios";
import axios from "./axios";
import { ResBaseType, GoodsItem, Kingkong, Image } from "@/types";

export const getGoodsList = (type: number): Promise<ResBaseType<GoodsItem[]>> =>
  axios.get("/api/home/goods-list", {
    params: { type },
  });

export const getAllGoodsList = () =>
  Axios.all([getGoodsList(1), getGoodsList(2), getGoodsList(3)]).then((res) =>
    res.map((goodses) => (goodses.code === 0 ? goodses.data : []))
  );

export const getKingkong = (): Promise<ResBaseType<Kingkong[]>> =>
  axios.get("/api/home/kingkong");

export const getSwipeImg = (): Promise<ResBaseType<Image[]>> =>
  axios.get("/api/home/swipe");
