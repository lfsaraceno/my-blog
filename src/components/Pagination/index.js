import React from "react"
import propTypes from "prop-types"
import { Link } from "gatsby"

import * as S from "./styled"

const Pagination = ({
  isFirst,
  isLast,
  currentPage,
  numPage,
  prevPage,
  nextPage}) => (
  <S.PaginationWrapper>

    {!isFirst ?  <Link to={prevPage}>Página Anterior</Link> : <p className="page-inactive" >Página Anterior</p>}
    <p>
      {currentPage} de {numPage}
    </p>
    {!isLast ? <Link to={nextPage}>Próxima Página</Link> : <p className="page-inactive" >Próxima Página</p> }

  </S.PaginationWrapper>
)

Pagination.propTypes = {
  isFirst: propTypes.bool.isRequired,
  isLast: propTypes.bool.isRequired,
  currentPage: propTypes.number.isRequired,
  numPage: propTypes.number.isRequired,
  prevPage: propTypes.string,
  nextPage: propTypes.string,
}

export default Pagination
