import React, { Component } from "react";
import firebase from "../../firebase";
import { Link } from "react-router-dom";
import Recipe from "./components/Recipe";
import ModButton from "./components/ModButton";
import EditButton from "./components/EditButton";

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

  componentWillReceiveProps(nextProps) {
    debugger;
  }

  displayMods = () => {
    const { mods } = this.state.recipe;
    if (mods) {
      const keys = Object.keys(mods);
      for (let key of keys) {
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
    const { sourceId } = this.state.recipe;
    if (sourceId) {
      return (
        <div>
          This recipe is based on:
          <Link to={`/${sourceId}`}>{sourceId}</Link>
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
            <Recipe recipe={recipe} />
            {this.displayMods()}
            {this.displaySource()}
            {this.props.userId === recipe.authorId && (
              <EditButton link={`/${this.state.id}/edit`} />
            )}
            <ModButton link={`/${this.state.id}/mod`} />
          </div>
        )}
      </div>
    );
  }
}

export default RecipeView;
