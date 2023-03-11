import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Card } from 'semantic-ui-react'

const RecipeListItem = ({recipe}) => {
  return (
  <>
    <Card>
        <img src={recipe.image_url} alt="ss" style={{ height : 170}} />
        <Card.Content>
          <Card.Header  content={recipe.title}/>
          <Card.Description>
            <h1>{recipe.publisher}</h1>
          </Card.Description>
        </Card.Content>
        <Card.Content>
          <Button
          as={Link}
          to={`/recipes/${recipe.recipe_id}`}
            content="Details"
            size="tiny"
            color="blue"
          />
          <Button
          href={recipe.source_url}
          target="_blank"
            content="Recipe URL"
            size="tiny"
            color="green"
          />
        </Card.Content>
    </Card>
  </>
  )
}

export default RecipeListItem