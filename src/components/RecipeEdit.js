import React, { Component } from "react";
import firebase from "../firebase";
import { Redirect } from "react-router-dom";

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
    e.preventDefault();
    const { title, ingredients, instructions } = this.state;
    var postData = {
      title,
      ingredients,
      instructions,
      lastUpdated: Date.now()
    };

    var updates = {};
    updates[`/recipes/${this.state.id}`] = postData;
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

  render() {
    const { title, ingredients, instructions } = this.state;
    return (
      <div>
        {this.state.recipe && (
          <div>
            <form onSubmit={this.submitRecipe}>
              <div>
                Title:{" "}
                <input
                  type="text"
                  name="title"
                  onChange={this.handleChange}
                  value={title}
                />
              </div>
              <div>
                Ingredients:{" "}
                <input
                  type="text"
                  name="ingredients"
                  onChange={this.handleChange}
                  value={ingredients}
                />
              </div>
              <div>
                Instructions:{" "}
                <input
                  type="text"
                  name="instructions"
                  onChange={this.handleChange}
                  value={instructions}
                />
              </div>
              <button>submit</button>
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
