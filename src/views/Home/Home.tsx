import React from "react";
import Input from "../../components/Input/Input";
import styled from "styled-components";
import Button from "../../components/Button/Button";
import Colors from "../../styles/Colors";
import { Link } from "react-router-dom";

const InputRow = styled.div`
  margin-bottom: 0.5rem;
`;

const Home = () => (
  <>
    <InputRow>
      <span>People: </span>
      <Input type="number" defaultValue={20} />
    </InputRow>
    <InputRow>
      <span>Vegetarians: </span>
      <Input type="number" defaultValue={20} />
    </InputRow>
    <InputRow>
      <span>Vegan : </span>
      <Input type="number" defaultValue={20} />
    </InputRow>
    <InputRow>
      <span>Gluten: </span>
      <Input type="number" defaultValue={20} />
    </InputRow>
    <InputRow>
      <span>Lactose: </span>
      <Input type="number" defaultValue={20} />
    </InputRow>

    <Link to="/shoplist">
      <Button backgroundColor={Colors.chateauGreen} textColor={Colors.white}>
        Continue
      </Button>
    </Link>
  </>
);

export default Home;
