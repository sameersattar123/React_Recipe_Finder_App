import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button, Grid, Header, Image, Segment } from "semantic-ui-react";
import { getRecipe } from "../Services/Api";

const RecipeDetails = () => {
  const { recipeId } = useParams();

  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    const getData = async () => {
      const result = await getRecipe(recipeId);
      if (result && result.recipe) {
        setRecipe(result.recipe);
      }
    };
    getData();
  }, []);
  return (
    Object.keys(recipe).length > 0? 
    <Grid container stackable columns={2} className="detailsPageContent">
        <Grid.Column>
            <Button as={Link} to="/recipes" content="Back to recipe List"  color="yellow"
                    style={{ marginBottom: 40 }} />
            <Image src={recipe.image_url}/>
        </Grid.Column>
        <Grid.Column>
            <Header size="medium">{recipe.title}</Header>
            <p>Publisher By : {recipe.publisher}</p>
            <Button as={"a"}  target="_blank"  href={recipe.publisher_url} content="Back to recipe List"  color="blue"/>
                    <Button as={"a"} target="_blank"  href={recipe.source_url} content="Back to recipe List"  color="green"/>
                    <Header size="large" content="Ingredients" />
                    <Segment.Group>
                        {
                            recipe.ingredients.map((ingredient)=>{
                                return (
                                <Segment>
                                    <h5>{ingredient}</h5>
                                </Segment>
                                )
                            })
                        }
                    </Segment.Group>
        </Grid.Column>
    </Grid> : null
  )
};

export default RecipeDetails;
