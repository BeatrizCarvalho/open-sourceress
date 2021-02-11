import React, { useState, useEffect } from "react"

import { Home } from "@styled-icons/boxicons-solid/Home"
import { SearchAlt2 as Search } from "@styled-icons/boxicons-regular/SearchAlt2"
import { UpArrowAlt as Arrow } from "@styled-icons/boxicons-regular/UpArrowAlt"
import { Bulb as Light } from "@styled-icons/boxicons-regular/Bulb"
import { Grid } from "@styled-icons/boxicons-solid/Grid"
import { ThList as List } from "@styled-icons/typicons/ThList"
import { Menu } from "@styled-icons/boxicons-regular/Menu"

import getThemeColor from "../../utils/getThemeColor"

import * as S from "./styled"
import * as GA from "./trackers"

const MenuBar = ({ setIsMenuOpen, isMenuOpen }) => {
  const [theme, setTheme] = useState(null)
  const [display, setDisplay] = useState(null)

  const isDarkMode = theme === "dark"
  const isListMode = display === "list"

  if (theme !== null) {
    GA.themeTracker(theme)
  }

  useEffect(() => {
    setTheme(window.__theme)
    setDisplay(window.__display)

    window.__onThemeChange = () => setTheme(window.__theme)
    window.__onDisplayChange = () => setDisplay(window.__display)
  }, [])

  const openMenu = () => {
    GA.menuTracker()
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <S.MenuBarWrapper>
      <S.MenuBarGroup>
        <S.MenuBarLink
          to="/"
          cover
          direction="right"
          bg={getThemeColor()}
          duration={0.6}
          title="Voltar para Home"
          activeClassName="active"
        >
          <S.MenuBarItem>
            <Home />
          </S.MenuBarItem>
        </S.MenuBarLink>

        <S.MenuBarLink
          to="/search/"
          cover
          direction="right"
          bg={getThemeColor()}
          duration={0.6}
          title="Pesquisar"
          activeClassName="active"
        >
          <S.MenuBarItem onClick={() => GA.searchClickTrack()}>
            <Search />
          </S.MenuBarItem>
        </S.MenuBarLink>
      </S.MenuBarGroup>

      <S.MenuBarGroupMobile>
        <S.MenuBarGroup>
          <S.MenuBarItem title="Abrir Menu" onClick={openMenu}>
            <Menu />
          </S.MenuBarItem>
        </S.MenuBarGroup>
      </S.MenuBarGroupMobile>

      <S.MenuBarGroup>
        <S.MenuBarItem
          title="Mudar o tema"
          onClick={() => {
            window.__setPreferredTheme(isDarkMode ? "light" : "dark")
          }}
          className={theme}
        >
          <Light />
        </S.MenuBarItem>
        <S.MenuBarItem
          title="Mudar visualização"
          onClick={() => {
            GA.displayClickTrack()
            window.__setPreferredDisplay(isListMode ? "grid" : "list")
          }}
          className="display"
        >
          {isListMode ? <Grid /> : <List />}
        </S.MenuBarItem>
        <S.MenuBarItem
          title="Ir para o Topo"
          onClick={() => {
            GA.topClickTrack()
            window.scroll({ top: 0, behavior: "smooth" })
          }}
        >
          <Arrow />
        </S.MenuBarItem>
      </S.MenuBarGroup>
    </S.MenuBarWrapper>
  )
}

export default MenuBar
