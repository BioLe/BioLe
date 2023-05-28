import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { User, Briefcase, Feather, Smile, GitHub, BookOpen, Award } from 'react-feather'
import { ResumeButton } from "../../common"
import data from "./../../../data/data";
import {NavbarElement, NavbarList, NavbarLogo} from './style'

const Navbar = ({ siteTitle }) => (
  <nav>
    <div className="container">
      <NavbarElement >
          <NavbarLogo >
            <h3>
              <Link to="/">
                <span className="align-middle"> {siteTitle} </span>
              </Link>
            </h3>
          </NavbarLogo> 
          <div className="main-navigation">
            <NavbarList >
              <li><Link to="/" className="lined-link" activeClassName="active"> <User /> <h3> About </h3> </Link></li> 
              {/* <li><Link to="/education" className="lined-link" activeClassName="active"> <BookOpen /> <span> Education </span> </Link></li>   */}
              <li><Link to="/works" className="lined-link" activeClassName="active"> <Briefcase /> <h3> Projects </h3> </Link></li>  
              <li><Link to="/repositories" className="lined-link" activeClassName="active"> <GitHub/> <h3> Github </h3> </Link></li>
              <li><Link className="lined-link" activeClassName="active" href="https://leonardo-melo.github.io/CV_Leonardo_Melo.pdf"> <Award /> <h3> Resume </h3> </Link></li>
              {/* <li><Link className="lined-link" activeClassName="active"  href={`mailto:${data.SiteContact.email}`} target="_blank"> <Award /> <span> Lets talk </span> </Link></li> */}
            </NavbarList>
          </div>
      </NavbarElement>
    </div>
  </nav>
)

Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: ``,
}

export default Navbar
