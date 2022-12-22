import { Page1 } from "../Page1";
import { Page1DetailA } from "../page1DetailA";
import { Page1DetailB } from "../page1DetailB";

export const Page1routes = [
  {
    path: "",
    exact: true,
    children: <Page1 />
  },
  {
    path: "/detailA",
    exact: true,
    children: <Page1DetailA />
  },
  {
    path: "/detailB",
    exact: true,
    children: <Page1DetailB />
  }
];
