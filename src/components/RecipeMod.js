import React, { Component } from 'react';
import firebase from '../firebase';
import { Redirect } from 'react-router-dom';
import SubmitButton from './SubmitButton';
import TitleEntry from './TitleEntry';
import ContentEntry from './ContentEntry';

class RecipeMod extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: null,
      redirect: null,
      id: window.location.pathname.split('/')[1]
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

  componentDidMount() {
    const itemsRef = firebase.database().ref(`recipes/${this.state.id}`);
    itemsRef.once('value').then(snapshot => {
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

  componentWillReceiveProps(nextProps) {
    if (nextProps.user) {
      this.setState({
        author: nextProps.user.displayName,
        authorId: nextProps.userId
      });
    }
  }

  saveRecipeMod(e) {
    e.preventDefault();
    const { authorId, author, title, ingredients, instructions } = this.state;
    var postData = {
      authorId,
      author,
      title,
      ingredients,
      instructions,
      timeCreated: Date.now(),
      sourceId: this.state.id
    };

    // Get a key for a new Post.
    var recipeUrl = title.toLowerCase().replace(/\s/g, '-');

    var modData = {
      id: recipeUrl,
      title,
      author,
      authorId
    };

    // Write the new post's data simultaneously in the posts list and the user's post list.
    var updates = {};
    updates[`/recipes/${recipeUrl}`] = postData;
    updates[`/users/${authorId}/recipes/${recipeUrl}`] = true;
    updates[`/recipes/${this.state.id}/mods/${recipeUrl}`] = modData;

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
  }

  render() {
    const { title, ingredients, instructions } = this.state;
    return (
      <div>
        {this.state.recipe && (
          <div>
            <form onSubmit={this.saveRecipeMod.bind(this)}>
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
        )}
      </div>
    );
  }
}

export default RecipeMod;
