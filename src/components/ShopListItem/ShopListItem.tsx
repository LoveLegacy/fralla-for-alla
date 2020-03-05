import React, { FC, useState } from "react";
import { ShopListItem as ShopListItemT } from "../../views/ShopList/ShopList";
import styled from "styled-components";
import Colors from "../../styles/Colors";

interface ShopListItemProps extends ShopListItemT {
  onClick: (name: string) => void;
}

interface CheckboxProps {
  isChecked?: boolean;
}

const Checkbox = styled.div<CheckboxProps>`
  width: 3rem;
  height: 3rem;
  background-color: ${({ isChecked }) =>
    isChecked ? Colors.yellowGreen : Colors.cosmos};
  margin-right: 0.5rem;
`;

const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  border: 1px solid ${Colors.mantis};
  cursor: pointer;
`;

const ToleranceItem = styled.span`
  margin-left: 0.25rem;
  font-size: 0.75rem;
`;

const ShopListItem: FC<ShopListItemProps> = ({
  name,
  amount,
  unit,
  tolerance,
  checked,
  onClick
}) => {
  const handleClick = () => {
    onClick(name);
  };
  return (
    <ItemWrapper onClick={handleClick}>
      <Checkbox isChecked={checked} />
      <span>
        {amount} {unit} {name}
      </span>
      <span>
        {" "}
        {tolerance.map(t => (
          <ToleranceItem>[{t}]</ToleranceItem>
        ))}
      </span>
    </ItemWrapper>
  );
};

export default ShopListItem;
