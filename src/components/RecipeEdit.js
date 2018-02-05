import React, { Component } from "react";
import firebase from "../firebase";

class RecipeEdit extends Component {
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
      let {title, ingredients, instructions} = recipe
      this.setState({ recipe, title, ingredients, instructions });
    });
  }

  handleChange = (e) => {
    e.preventDefault()
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    const {title, ingredients, instructions} = this.state
    return (
      <div>
        {this.state.recipe && (
          <form>
            <div>Title: <input type="text" name="title" onChange={this.handleChange} value={title} /></div>
            <div>Ingredients: <input type="text" name="ingredients" onChange={this.handleChange} value={ingredients} /></div>
            <div>Instructions: <input type="text" name="instructions" onChange={this.handleChange} value={instructions} /></div>
            <button>submit</button>
          </form>
        )}
      </div>
    );
  }
}

export default RecipeEdit;
