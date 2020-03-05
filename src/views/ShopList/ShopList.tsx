import React, { FC, useState } from "react";
import ShopListItem from "../../components/ShopListItem/ShopListItem";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import Colors from "../../styles/Colors";

const ShopListResponse: ShopListItem[] = [
  {
    name: "Bread",
    amount: 1,
    unit: "piece",
    tolerance: ["v", "vg", "l"],
    checked: true
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
  checked?: boolean;
}

interface CheckedItems {
  [key: string]: boolean;
}

const ShopList: FC = () => {
  const [checkedItems, setCheckedItems] = useState<CheckedItems>({});

  const handleClick = (name: string) => {
    // TODO: handle Checked items
    setCheckedItems({ ...checkedItems, [name]: !checkedItems[name] });
  };

  return (
    <>
      {ShopListResponse.map((item: ShopListItem) => (
        <ShopListItem
          {...item}
          key={item.name}
          onClick={handleClick}
          checked={checkedItems[item.name]}
        ></ShopListItem>
      ))}

      <Link to="/shoplist">
        <Button backgroundColor={Colors.chateauGreen} textColor={Colors.white}>
          Continue
        </Button>
      </Link>
    </>
  );
};

export default ShopList;
