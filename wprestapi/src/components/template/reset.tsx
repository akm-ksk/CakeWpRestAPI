import { memo, VFC } from "react";
import { MenuCard } from "../atoms/MenuCard";
import styled from "styled-components";

type Props = {
  menuType: string;
  menus: any;
};

export const MenuArea: VFC<Props> = memo((props) => {
  const { menuType, menus } = props;
  console.log(menus);
  return (
    <Menu>
      <TitleH2>{menuType}</TitleH2>
      <List>
        {menus.map(
          (menu: any, index: number) =>
            menu.acf["noSale"] === false && (
              <MenuCard
                key={index}
                img={menu.acf["img"]}
                name={menu.title["rendered"]}
                price={menu.acf["price"]}
              />
            )
        )}
      </List>
    </Menu>
  );
});

const Menu = styled.section`
  margin: 0 auto 80px;
  max-width: 800px;
  width: 96%;
`;

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`;

const TitleH2 = styled.h2`
  margin: 0 0 50px;
  font-size: 24px;
  text-align: center;
`;
