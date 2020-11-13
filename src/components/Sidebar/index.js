import React from "react";

import Profile from "../Profile";
import SocialMedia from "../SocialMedia";
import MenuLink from "../MenuLink";

import * as S from "./styled";

const Sidebar = () => (
  <S.SidebarWrapper>
    <Profile/>
    <SocialMedia/>
    <MenuLink/>
  </S.SidebarWrapper>
);
export default Sidebar;