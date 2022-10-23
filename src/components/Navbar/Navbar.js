import React, { useState } from "react"
import Drawer from "@mui/material/Drawer"
import { IoMenu, IoClose } from "react-icons/io5"
import { NavHashLink as NavLink } from "react-router-hash-link"
import { useScrollPosition } from "../../hooks/useScrollPosition"

import "./Navbar.css"

function Navbar() {
  const [drawer, setDrawer] = useState(false)

  const handleDrawerOpen = () => {
    setDrawer(true)
  }

  const handleDrawerClose = () => {
    setDrawer(false)
  }

  const scrollPosition = useScrollPosition()

  const navStyle = {
    background: scrollPosition > 200 ? "#04005e" : "transparent",
    boxShadow:
      scrollPosition > 200 ? "0px 2px 9px rgba(0, 0, 0, 0.11)" : "none",
  }

  return (
    <div className="navbar" style={navStyle}>
      <div className="navbar__main container">
        <div className="nav_logo">
        <NavLink
            to="/#"
          >
          <img src=""alt="" />
          </NavLink>
        </div>
        <div className="nav_contents">
          <NavLink
            to="/#about"
            className="nav__link"
          >
            About
          </NavLink>
          <NavLink
            to="/#highlights"
            className="nav__link"
          >
            Highlights
          </NavLink>
          <NavLink
            to="/#timeline"
            className="nav__link"
          >
            Timeline
          </NavLink>
          <NavLink
            to="/#partners"
            className="nav__link"
          >
            Participating Organizations
          </NavLink>
          <NavLink
            to="/#organizations"
            className="nav__link"
          >
            Organized by
          </NavLink>
          <NavLink
            to="/#team"
            className="nav__link"
          >
            Contacts Us
          </NavLink>
        </div>

        <div className="nav_hamburger" onClick={handleDrawerOpen}>
          <IoMenu className="nam_menu_icon" />
        </div>
      </div>

      <Drawer
        disableScrollLock={true}
        anchor="left"
        open={drawer}
        onClose={handleDrawerClose}
        sx={{
          borderRadius: 20,
          width: "90%",
        }}
      >
        <div className="navbar__mob">
          <div className="navbar_mob_close" onClick={handleDrawerClose}>
            <IoClose />
          </div>
          <div className="navbar__mobcontents">
            <NavLink
              to="/#about"
              onClick={handleDrawerClose}
              className="navmob__link"
            >
              About
            </NavLink>
            <NavLink
              to="/#highlights"
              onClick={handleDrawerClose}
              className="navmob__link"
            >
              Highlights
            </NavLink>
            <NavLink
              to="/#timeline"
              onClick={handleDrawerClose}
              className="navmob__link"
            >
              Timeline
            </NavLink>
            <NavLink
              to="/#partners"
              onClick={handleDrawerClose}
              className="navmob__link"
            >
              Participating Organizations
            </NavLink>
            <NavLink
              to="/#organizations"
              onClick={handleDrawerClose}
              className="navmob__link"
            >
              Organized by
            </NavLink>
            <NavLink
              to="/#team"
              onClick={handleDrawerClose}
              className="navmob__link"
            >
              Contacts Us
            </NavLink>
          </div>
        </div>
      </Drawer>
    </div>
  )
}

export default Navbar
