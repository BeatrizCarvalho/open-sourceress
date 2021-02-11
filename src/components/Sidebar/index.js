import React from "react"
import propTypes from "prop-types"

import Profile from "../Profile"
import SocialLinks from "../SocialLinks"
import MenuLinks from "../MenuLinks"

import * as S from "./styled"

const Sidebar = ({
  site: { title, position, description },
  isMenuOpen,
  setIsMenuOpen,
}) => (
  <S.SidebarWrapper isMenuOpen={isMenuOpen}>
    <Profile
      title={title}
      position={position}
      description={description}
      isMobileHeader={false}
    />
    <S.SidebarLinksContainer>
      <SocialLinks />
      <MenuLinks setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
    </S.SidebarLinksContainer>
  </S.SidebarWrapper>
)

Sidebar.propTypes = {
  site: propTypes.shape({
    title: propTypes.string.isRequired,
    position: propTypes.string.isRequired,
    authorDescription: propTypes.string.isRequired,
  }),
}

export default Sidebar
