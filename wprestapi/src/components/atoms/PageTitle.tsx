import { memo } from "react";
import styled from "styled-components";

export const PageTitle = memo(() => {
  return <Title>Cake Cafe Online Menu </Title>;
});

const Title = styled.h1`
  margin: 0 0 80px;
  font-size: 30px;
  text-align: center;
`;
