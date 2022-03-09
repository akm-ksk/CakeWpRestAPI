import { useEffect, useState } from "react";
import { PageTitle } from "../atoms/PageTitle";
import { MenuArea } from "../template/reset";

export const MenuPage = () => {
  const [regularMenu, setRegularMenu] = useState([]);
  const [seasonMenu, setSeasonMenu] = useState([]);

  useEffect(() => {
    fetch("https://xs442032.xsrv.jp/cake/wp-json/wp/v2/cake?item=7")
      .then((response) => response.json())
      .then((data) => {
        setRegularMenu(data);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    fetch("https://xs442032.xsrv.jp/cake/wp-json/wp/v2/cake?item=8")
      .then((response) => response.json())
      .then((data) => {
        setSeasonMenu(data);
      })
      .catch(console.error);
  }, []);

  console.log("top");

  return (
    <>
      <PageTitle />
      <MenuArea menuType="Regular Menu" menus={regularMenu} />
      <MenuArea menuType="Season Menu" menus={seasonMenu} />
    </>
  );
};
