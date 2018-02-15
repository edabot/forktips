import React, { Component } from 'react';
import RecipeStub from './RecipeStub';
import styled from 'styled-components';

const RecipeModsList = styled.div`
  h2 {
    font-size: 1.2rem;
    font-weight: 400;
    margin-bottom: 0.5rem;
  }
  margin-bottom: 1rem;
`;

class RecipeMods extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mods: this.props.mods || []
    };
  }

  render() {
    let keys = Object.keys(this.state.mods);
    return (
      <RecipeModsList>
        <h2>Mods:</h2>
        {keys.map(key => (
          <RecipeStub key={key} recipeId={this.state.mods[key].id} />
        ))}
      </RecipeModsList>
    );
  }
}

export default RecipeMods;
