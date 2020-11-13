import React from "react";
import { useStaticQuery, graphql} from "gatsby";
import Avatar from "../Avatar";
import * as S from "./styled";


const Profile = () => {
  const {
    site: {
      siteMetadata: { title, position, description, author },
    },
  } = useStaticQuery(graphql`
    query MySiteMetadata {
      site {
        siteMetadata {
          title
          position
          description
          author
        }
      }
    }
  `);
  
  return(
    <S.ProfileWrapper>
      <S.ProfileLink>
        <Avatar/>
        <S.ProfileAutor>{title}
          <S.ProfilePosition>{position}</S.ProfilePosition>
        </S.ProfileAutor>
      </S.ProfileLink>
      <S.ProfileDescripion>
        {description}
        <br/>
        {author}
      </S.ProfileDescripion>
      
    </S.ProfileWrapper>
  );
};
export default Profile;