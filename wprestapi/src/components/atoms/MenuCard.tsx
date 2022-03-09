import { memo, VFC } from "react";
import styled from "styled-components";

type Props = {
  img: string;
  name: string;
  price: string;
};

export const MenuCard: VFC<Props> = memo((props) => {
  const { img, name, price } = props;
  return (
    <Card>
      <img src={img} alt={name} />
      <Name>{name}</Name>
      <Price>{Number(price).toLocaleString()}円</Price>
    </Card>
  );
});

const Card = styled.li`
  border: 1px solid #000;
  padding: 10px;
  box-shadow: 1px 2px 2px #1f1f1f;
`;

const Name = styled.h3`
  font-size: 18px;
  font-weight: 500;
`;

const Price = styled.p`
  font-size: 14px;
`;
