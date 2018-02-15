import React, { Component } from 'react';
import styled from 'styled-components';
import firebase from '../../../firebase';
import { Link } from 'react-router-dom';

const Stub = styled.div`
  a {
    font-weight: 700;
  }
`;

class RecipeStub extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: null,
      id: null
    };
  }

  componentDidMount() {
    let { recipeId } = this.props;
    const itemsRef = firebase.database().ref(`recipes/${recipeId}`);
    itemsRef.once('value').then(snapshot => {
      let recipe = snapshot.val();
      this.setState({ recipe, id: recipeId });
    });
  }
  render() {
    return (
      <Stub>
        {this.state.recipe && (
          <div>
            <Link to={this.state.id}>{this.state.recipe.title}</Link> by{' '}
            {this.state.recipe.author}
          </div>
        )}
      </Stub>
    );
  }
}

export default RecipeStub;
