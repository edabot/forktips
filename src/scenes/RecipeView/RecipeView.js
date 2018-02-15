import React, { Component } from 'react';
import firebase from '../../firebase';
import { Link } from 'react-router-dom';
import Recipe from './components/Recipe';
import ModButton from './components/ModButton';
import EditButton from './components/EditButton';
import RecipeMods from './components/RecipeMods';
import RecipeSource from './components/RecipeSource';

class RecipeView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: null,
      id: props.match.params.id
    };
  }

  componentWillMount() {
    const itemsRef = firebase.database().ref(`recipes/${this.state.id}`);
    itemsRef.once('value').then(snapshot => {
      let recipe = snapshot.val();
      this.setState({ recipe });
    });
  }

  componentWillReceiveProps(nextProps) {
    let newId = nextProps.match.params.id;
    if (newId !== this.state.id) {
      const itemsRef = firebase.database().ref(`recipes/${newId}`);
      itemsRef.once('value').then(snapshot => {
        let recipe = snapshot.val();
        this.setState({ recipe, id: newId });
      });
    }
  }

  render() {
    const { recipe } = this.state;
    return (
      <div>
        {recipe && (
          <div>
            {recipe.sourceId && <RecipeSource id={recipe.sourceId} />}
            <Recipe recipe={recipe} />
            {recipe.mods && <RecipeMods mods={recipe.mods} />}
            {this.props.userId === recipe.authorId && (
              <EditButton link={`/${this.state.id}/edit`} />
            )}
            {this.props.userId && <ModButton link={`/${this.state.id}/mod`} />}
          </div>
        )}
      </div>
    );
  }
}

export default RecipeView;
