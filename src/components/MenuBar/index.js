import React from "react"

import IconsSideBar from "./icons"
import * as S from "./styled"



const MenuBar = () => (

  <S.MenuBarWrapper>
    <S.MenuBarGroup>
      <S.MenuBarLink to="/" title="Voltar para home" >
        <S.MenuBarIten><IconsSideBar.Home/></S.MenuBarIten>
      </S.MenuBarLink>
      <S.MenuBarLink to="/" title="Voltar para home" >
        <S.MenuBarIten><IconsSideBar.Search/></S.MenuBarIten>
      </S.MenuBarLink>
    </S.MenuBarGroup>
    <S.MenuBarGroup>
      <S.MenuBarIten title="Mudar o Tema"><IconsSideBar.Light/></S.MenuBarIten>
      <S.MenuBarIten title="Mudar Visualização"><IconsSideBar.Grid/></S.MenuBarIten>
      <S.MenuBarIten title="ir para o topo"><IconsSideBar.Arrow/></S.MenuBarIten>
    </S.MenuBarGroup>
    
  </S.MenuBarWrapper>

)

export default MenuBar