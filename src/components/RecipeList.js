import React, { Component } from 'react';
import firebase from '../firebase';

class RecipeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: []
    };
  }

  componentDidMount() {
    const itemsRef = firebase.database().ref('recipes');
    itemsRef.on('value', snapshot => {
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
    debugger;
    return <div>recipes</div>;
  }
}

export default RecipeList;
