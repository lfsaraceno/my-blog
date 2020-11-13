import React from "react";


import Icons from "./Icons";
import links from "./content";

import * as S from "./styled";

const SocialMedia = () => (

  <S.SocialMediaWrapper>
    <S.SocialMediaList>      
      {links.map((link, i) => {
        const Icon = Icons[link.label];
          
        return (
          <S.SocialMediaIten key={i} >
            <S.SocialMediaLink href={link.url} title={link.label} target="_blank" rel="noopener noreferrer" >
              <S.IconWrapper>
                <Icon/>
              </S.IconWrapper>
            </S.SocialMediaLink>

          </S.SocialMediaIten>
        );
      })}
    </S.SocialMediaList>
  </S.SocialMediaWrapper>

);

export default SocialMedia;