import React, { Component } from 'react';
import './App.css';
import firebase, { auth, provider } from './firebase';
import Navbar from './components/Navbar';
import RecipeList from './components/RecipeList';
import RecipeView from './components/RecipeView';
import RecipeEdit from './components/RecipeEdit';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      loggedIn: false
    };
  }

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({ user, loggedIn: true });
      }
    });
    const itemsRef = firebase.database().ref('items');
    itemsRef.on('value', snapshot => {
      let items = snapshot.val();
      let newState = [];
      for (let item in items) {
        newState.push({
          id: item,
          title: items[item].title,
          user: items[item].user
        });
      }
      this.setState({ items: newState });
    });
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const itemsRef = firebase.database().ref('items');
    const item = {
      title: this.state.currentItem,
      user: this.state.user.displayName || this.state.user.email
    };
    itemsRef.push(item);
    this.setState({
      currentItem: '',
      username: ''
    });
  };

  removeItem = itemId => {
    const itemRef = firebase.database().ref(`/items/${itemId}`);
    itemRef.remove();
  };

  logIn = () => {
    auth.signInWithPopup(provider).then(res => {
      const user = res.user;
      this.setState({ user, loggedIn: true });
    });
  };

  logOut = () => {
    auth.signOut().then(() => {
      this.setState({
        user: null,
        loggedIn: false
      });
    });
  };

  render() {
    return (
      <Router>
        <div>
          <Navbar
            loggedIn={this.state.loggedIn}
            logIn={this.logIn}
            logOut={this.logOut}
          />
          <Switch>
            <Route exact path="/" component={RecipeList} />
            <Route path="/:id/edit" component={RecipeEdit} />
            <Route path="/:id" component={RecipeView} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
