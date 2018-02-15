import React, { Component } from 'react';
import styled from 'styled-components';
import firebase from '../../../firebase';
import { Link } from 'react-router-dom';

const Stub = styled.div`
  a {
    font-weight: 700;
  }
  margin-bottom: 0.3rem;
  font-size: 0.8rem;
  color: #666;
`;

class RecipeSource extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: null,
      id: this.props.id
    };
  }

  componentDidMount() {
    let { id } = this.state;
    const itemsRef = firebase.database().ref(`recipes/${id}`);
    itemsRef.once('value').then(snapshot => {
      let recipe = snapshot.val();
      this.setState({ recipe });
    });
  }
  render() {
    return (
      <Stub>
        {this.state.recipe && (
          <div>
            This recipe is a modification of&nbsp;
            <Link to={this.state.id}>{this.state.recipe.title}</Link> by{' '}
            {this.state.recipe.author}
          </div>
        )}
      </Stub>
    );
  }
}

export default RecipeSource;
