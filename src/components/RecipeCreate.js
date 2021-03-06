import React, { Component } from 'react';
import firebase from '../firebase';
import { Redirect } from 'react-router-dom';
import SubmitButton from './SubmitButton';
import TitleEntry from './TitleEntry';
import ContentEntry from './ContentEntry';

class RecipeCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authorId: '',
      author: '',
      title: '',
      ingredients: '',
      instructions: '',
      redirect: null
    };
  }

  componentWillMount() {
    if (this.props.userId) {
      this.setState({
        authorId: this.props.userId,
        author: this.props.user.displayName
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.user) {
      this.setState({
        author: nextProps.user.displayName,
        authorId: nextProps.userId
      });
    }
  }

  handleChange = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  saveNewRecipe = e => {
    e.preventDefault();
    const { authorId, author, title, ingredients, instructions } = this.state;
    var postData = {
      authorId,
      author,
      title,
      ingredients,
      instructions,
      timeCreated: Date.now()
    };

    // Get a key for a new Post.
    var recipeUrl = title.toLowerCase().replace(/\s/g, '-');

    // Write the new post's data simultaneously in the posts list and the user's post list.
    var updates = {};
    updates[`/recipes/${recipeUrl}`] = postData;
    updates[`/users/${authorId}/recipes/${recipeUrl}`] = true;

    return firebase
      .database()
      .ref()
      .update(updates)
      .then(err => {
        if (err) {
          console.log('did not save recipe');
        } else {
          this.setState({ redirect: recipeUrl });
        }
      });
  };

  render() {
    const { title, ingredients, instructions } = this.state;
    return (
      <div>
        <form onSubmit={this.saveNewRecipe}>
          <TitleEntry handleChange={this.handleChange} value={title} />
          <ContentEntry
            handleChange={this.handleChange}
            value={ingredients}
            h2={'Ingredients'}
            type={'ingredients'}
          />
          <ContentEntry
            handleChange={this.handleChange}
            value={instructions}
            h2={'Instructions'}
            type={'instructions'}
          />
          <SubmitButton />
        </form>
        {this.state.redirect && (
          <Redirect
            to={{
              pathname: `/${this.state.redirect}`
            }}
          />
        )}
      </div>
    );
  }
}

export default RecipeCreate;
