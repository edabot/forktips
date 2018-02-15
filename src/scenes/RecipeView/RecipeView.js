import React, { Component } from 'react';
import firebase from '../../firebase';
import { Link } from 'react-router-dom';
import Recipe from './components/Recipe';
import ModButton from './components/ModButton';
import EditButton from './components/EditButton';
import RecipeMods from './components/RecipeMods';

class RecipeView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: null,
      id: props.match.params.id
    };
  }

  componentDidMount() {
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
            {recipe.mods && <RecipeMods mods={recipe.mods} />}
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
