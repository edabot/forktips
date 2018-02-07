import React, { Component } from "react";
import firebase from "../firebase";
import { Link } from "react-router-dom";

class RecipeView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: null,
      id: null
    };
  }

  componentDidMount() {
    let id = window.location.pathname.substring(1);
    const itemsRef = firebase.database().ref(`recipes/${id}`);
    itemsRef.once("value").then(snapshot => {
      let recipe = snapshot.val();
      this.setState({ recipe, id });
    });
  }

  displayMods = () => {
    const { mods } = this.state.recipe;
    if (mods) {
      const keys = Object.keys(mods);
      for (let key in keys) {
        const recipe = mods[key];
        return (
          <div>
            Mods: <Link to={`/${recipe.id}`}>{recipe.title}</Link>
          </div>
        );
      }
    }
  };

  displaySource = () => {
    const { source } = this.state.recipe;
    if (source) {
      return (
        <div>
          This recipe is based on:
          <Link to={`/${source.id}`}>{source.title}</Link>
        </div>
      );
    }
  };

  render() {
    const { recipe } = this.state;
    return (
      <div>
        {recipe && (
          <div>
            <div>Title: {recipe.title}</div>
            <div>Author: {recipe.author}</div>
            <div>Ingredients: {recipe.ingredients}</div>
            <div>Instructions: {recipe.instructions}</div>
            {this.displayMods()}
            {this.displaySource()}
            {this.props.userId === recipe.authorId && (
              <Link to={`/${this.state.id}/edit`}>edit</Link>
            )}
            <Link to={`/${this.state.id}/mod`}>modify this recipe</Link>
          </div>
        )}
      </div>
    );
  }
}

export default RecipeView;
