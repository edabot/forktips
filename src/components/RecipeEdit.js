import React, { Component } from "react";
import firebase from "../firebase";
import { Redirect } from "react-router-dom";
import SubmitButton from "./SubmitButton";
import TitleEntry from "./TitleEntry";
import ContentEntry from "./ContentEntry";

class RecipeEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: null,
      redirect: null,
      id: window.location.pathname.split("/")[1]
    };
  }

  componentDidMount() {
    const itemsRef = firebase.database().ref(`recipes/${this.state.id}`);
    itemsRef.once("value").then(snapshot => {
      let recipe = snapshot.val();
      let { title, ingredients, instructions } = recipe;
      this.setState({ recipe, title, ingredients, instructions });
    });
  }

  handleChange = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submitRecipe = e => {
    debugger;
    e.preventDefault();
    const { title, ingredients, instructions } = this.state;

    var updates = {};
    updates[`/recipes/${this.state.id}/title`] = title;
    updates[`/recipes/${this.state.id}/ingredients`] = ingredients;
    updates[`/recipes/${this.state.id}/instructions`] = instructions;
    updates[`/recipes/${this.state.id}/lastUpdated`] = Date.now();
    return firebase
      .database()
      .ref()
      .update(updates)
      .then(err => {
        if (err) {
          console.log("did not save edits");
        } else {
          this.setState({ redirect: true });
        }
      });
  };

  openUploader() {}

  render() {
    const { title, ingredients, instructions } = this.state;
    return (
      <div>
        <div onClick={this.openUploader.bind(this)}>upload</div>
        {this.state.recipe && (
          <div>
            <form onSubmit={this.submitRecipe}>
              <TitleEntry handleChange={this.handleChange} value={title} />
              <ContentEntry
                handleChange={this.handleChange}
                value={ingredients}
                h2={"Ingredients"}
                type={"ingredients"}
              />
              <ContentEntry
                handleChange={this.handleChange}
                value={instructions}
                h2={"Instructions"}
                type={"instructions"}
              />
              <SubmitButton />
            </form>
            {this.props.userId !== undefined &&
              (this.state.redirect ||
                this.props.userId !== this.state.recipe.authorId) && (
                <Redirect
                  to={{
                    pathname: `/${this.state.id}`
                  }}
                />
              )}
          </div>
        )}
      </div>
    );
  }
}

export default RecipeEdit;
