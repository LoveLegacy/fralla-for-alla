import React, { FC } from "react";
import { ShopListItem as ShopListItemProps } from "../../views/ShopList/ShopList";

const ShopListItem: FC<ShopListItemProps> = ({
  name,
  amount,
  unit,
  tolerance
}) => (
  <div>
    <span>
      {amount} {unit} {name}
    </span>
  </div>
);

export default ShopListItem;
