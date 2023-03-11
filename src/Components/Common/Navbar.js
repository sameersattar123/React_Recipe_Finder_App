import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'
import { logo } from '../../Constants/Constant'

const Navbar = () => {
  return (
    <>
    <Menu  borderless fixed="top">
    <Menu.Item>
        <img src={logo} alt="" style={{ width: 150 }} />
    </Menu.Item>
        <Menu.Item as={Link} to="/">
            Home
        </Menu.Item>
        <Menu.Item as={Link} to="/recipes"> 
            Recipes
        </Menu.Item>
    </Menu>
    </>
  )
}

export default Navbar