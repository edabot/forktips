import React, { Component } from "react";
import firebase from "../firebase";
import { Link } from "react-router-dom";

class RecipeView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: null
    };
  }

  componentDidMount() {
    const itemsRef = firebase
      .database()
      .ref(`recipes/${this.props.match.params.id}`);
    itemsRef.on("value", snapshot => {
      let recipe = snapshot.val();
      this.setState({ recipe });
    });
  }

  componentWillReceiveProps(nextProps) {
    const itemsRef = firebase
      .database()
      .ref(`recipes/${nextProps.match.params.id}`);
    itemsRef.on("value", snapshot => {
      let recipe = snapshot.val();
      this.setState({ recipe });
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
    return (
      <div>
        {this.state.recipe && (
          <div>
            <div>Author: {this.state.recipe.author}</div>
            <div>Ingredients: {this.state.recipe.ingredients}</div>
            <div>Instructions: {this.state.recipe.instructions}</div>
            {this.displayMods()}
            {this.displaySource()}
          </div>
        )}
      </div>
    );
  }
}

export default RecipeView;