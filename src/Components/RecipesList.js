import React from 'react'
import { Container, Grid, Header } from 'semantic-ui-react'
import RecipeListItem from './RecipeListItem'

const RecipesList = ({recipes , searchQuery}) => {
  return (
    <>
      <Container>
        <Header textAlign='center' size="huge" content={`RECIPES LIST FOR ${searchQuery}`} />

            <Grid columns={4} doubling>
              {
                recipes && recipes.map((recipe) =>{
                  return (
                  <Grid.Column>
                      <RecipeListItem recipe={recipe}/>
                  </Grid.Column>
                  )
                } 
                )
              }
            </Grid>
      </Container>
    </>
  )
}

export default RecipesList