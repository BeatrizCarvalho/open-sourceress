import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import links from "./content"
import getThemeColor from "../../utils/getThemeColor"

import * as S from "./styled"

const MenuLinks = ({ setIsMenuOpen, isMenuOpen }) => (
  <S.MenuLinksWrapper>
    <S.MenuLinksList>
      {links.map((link, i) => (
        <S.MenuLinksItem key={i}>
          <AniLink
            cover
            direction="left"
            bg={getThemeColor()}
            duration={0.6}
            to={link.url}
            activeClassName="active"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {link.label}
          </AniLink>
        </S.MenuLinksItem>
      ))}
    </S.MenuLinksList>
  </S.MenuLinksWrapper>
)

export default MenuLinks
