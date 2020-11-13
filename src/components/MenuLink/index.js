import React from "react";

import links from "./content";

import * as S from "./styled";

const MenuLink = () => (
  <S.MenuLinkWrapper>
    <S.MenuLinkList>
      {links.map((link, i) => {
        return (
          <S.MenuLinkIten key={i}>
            <S.MenuLinkLink to={link.url} title={link.label} activeClassName="active">
              {link.label}
            </S.MenuLinkLink>

          </S.MenuLinkIten>
        );
      })}
    </S.MenuLinkList>
  </S.MenuLinkWrapper>
);
export default MenuLink;