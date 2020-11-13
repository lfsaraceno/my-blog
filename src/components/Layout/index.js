import React from "react";
import PropTypes from "prop-types";


import GlobalStyles from "../styles/global";
import Sidebar from "../Sidebar";
import MenuBar from "../MenuBar"


import * as S from "./styled";



const Layout = ({ children }) => {
  return (
    <S.LayoutWrapper>
      <GlobalStyles/>
      <Sidebar/>
      <S.Layoutmain>{children}</S.Layoutmain>
      <MenuBar/>
    </S.LayoutWrapper>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;