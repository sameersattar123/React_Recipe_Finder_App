import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'
import Header from '../Components/Common/Header'

const Home = () => {
  return (
    <Header title="Our Recipes" bgClass="bg-image">
        <Button content="Search for Recipes" color="primary" as={Link}  to="/recipes" size="big"/> 
    </Header>
  )
}

export default Home