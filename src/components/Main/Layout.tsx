import { FC } from "react";

import Dropdown from "../Dropdown";
import InformationPart from "../Parts/InformationPart";
import Divider from "../Divider";

import "../../styles/components/Layout.css";

const Layout: FC = () => {
  return (
    <div className="layout-container">
      <div className="item-container">
        <InformationPart />

        <Divider text="Component" />

        <Dropdown />
      </div>

      <div className="footer">Muhammet Furkan Pinarbasi</div>
    </div>
  );
};

export default Layout;
