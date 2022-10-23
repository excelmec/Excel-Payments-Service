import React, { useState } from "react"
import Drawer from "@mui/material/Drawer"
import { IoMenu, IoClose } from "react-icons/io5"
import { NavHashLink as NavLink } from "react-router-hash-link"
import { useScrollPosition } from "../../hooks/useScrollPosition"

import "./Navbar.css"
import finnextLogo from "../../assets/logo/FinNext.png"

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
    background: scrollPosition > 300 ? "#111111" : "rgba(17, 17, 17, 0.1)",
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
          <img src={finnextLogo} alt="" />
          </NavLink>
        </div>
        <div className="nav_contents">
          <NavLink
            to="/#home"
            className="nav__link"
          >
            Home
          </NavLink>
          <NavLink
            to="/#about"
            className="nav__link"
          >
            About
          </NavLink>
          <NavLink
            to="/#speakers"
            className="nav__link"
          >
            Speakers
          </NavLink>
          <NavLink
            to="/#panelists"
            className="nav__link"
          >
            Panelists
          </NavLink>
          <NavLink
            to="/#schedule"
            className="nav__link"
          >
            Schedule
          </NavLink>
          <NavLink
            to="/#sponsors"
            className="nav__link"
          >
            Sponsors
          </NavLink>
          <NavLink
            to="/#contact"
            className="nav__link"
          >
            Contact Us
          </NavLink>
        </div>

        <button className="nav_btn">Register</button>

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
              to="/#home"
              onClick={handleDrawerClose}
              className="navmob__link"
            >
              Home
            </NavLink>
            <NavLink
              to="/#about"
              onClick={handleDrawerClose}
              className="navmob__link"
            >
              About
            </NavLink>
            <NavLink
              to="/#speakers"
              onClick={handleDrawerClose}
              className="navmob__link"
            >
              Speakers
            </NavLink>
            <NavLink
              to="/#panelists"
              onClick={handleDrawerClose}
              className="navmob__link"
            >
              Panelists
            </NavLink>
            <NavLink
              to="/#schedule"
              onClick={handleDrawerClose}
              className="navmob__link"
            >
              Schedule
            </NavLink>
            <NavLink
              to="/#sponsors"
              onClick={handleDrawerClose}
              className="navmob__link"
            >
              Sponsors
            </NavLink>
            <NavLink
              to="/#contact"
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
