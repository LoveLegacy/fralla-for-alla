import React, { FC } from "react";
import ShopListItem from "../../components/ShopListItem/ShopListItem";

const ShopListResponse: ShopListItem[] = [
  {
    name: "Bread",
    amount: 1,
    unit: "piece",
    tolerance: ["v", "vg", "l"]
  },
  {
    name: "Cheese",
    amount: 200,
    unit: "g",
    tolerance: ["vg", "g"]
  },
  {
    name: "Juice",
    amount: 5000,
    unit: "ml",
    tolerance: []
  }
];

export interface ShopListItem {
  name: string;
  amount: number;
  unit: string;
  tolerance: string[];
}

const ShopList: FC = () => (
  <>
    {ShopListResponse.map((item: ShopListItem) => (
      <ShopListItem {...item}></ShopListItem>
    ))}
  </>
);

export default ShopList;
