import React, { Component } from 'react';
import firebase from '../../firebase';
import RecipeListItem from './components/RecipeListItem';

class RecipeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: []
    };
  }

  componentDidMount() {
    const itemsRef = firebase
      .database()
      .ref('recipes')
      .limitToLast(10);
    itemsRef.once('value').then(snapshot => {
      let recipes = snapshot.val();
      let newState = [];
      for (let item in recipes) {
        newState.push({
          id: item,
          title: recipes[item].title,
          author: recipes[item].author
        });
      }
      this.setState({ recipes: newState });
    });
  }
  render() {
    return (
      <div>
        {this.state.recipes.map(recipe => (
          <RecipeListItem recipe={recipe} key={recipe.id} />
        ))}
      </div>
    );
  }
}

export default RecipeList;
