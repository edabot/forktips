import React, { Component } from 'react';
import './App.css';
import firebase, { auth, provider } from './firebase';
import Navbar from './components/Navbar';
import RecipeList from './components/RecipeList';
import RecipeView from './components/RecipeView';
import RecipeEdit from './components/RecipeEdit';
import RecipeCreate from './components/RecipeCreate';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const FadingRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => <Component {...props} />} />
);

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
        return firebase
          .database()
          .ref('/users/' + user.uid)
          .once('value')
          .then(snapshot => {
            let userInfo = snapshot.val();
            if (!userInfo) {
              let newUserInfo = {
                email: user.email,
                displayName: user.displayName,
                photoURL: user.photoURL
              };
              let updates = {};
              updates[`/users/${user.uid}`] = newUserInfo;
              this.setState({
                userId: user.uid,
                user: newUserInfo,
                loggedIn: true
              });
              return firebase
                .database()
                .ref()
                .update(updates);
            } else {
              this.setState({
                userId: user.uid,
                user: userInfo,
                loggedIn: true
              });
            }
          });
      }
    });
  }

  logIn = () => {
    auth.signInWithPopup(provider).then(res => {
      const userId = res.user.uid;
      this.setState({ userId, loggedIn: true });
    });
  };

  logOut = () => {
    auth.signOut().then(() => {
      this.setState({
        user: null,
        loggedIn: false,
        userId: null
      });
    });
  };

  render() {
    debugger;
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
            <Route
              exact
              path="/new"
              render={() => (
                <RecipeCreate
                  userId={this.state.userId}
                  user={this.state.user}
                />
              )}
            />
            <Route path="/:id/edit" component={RecipeEdit} />
            <FadingRoute
              path="/:id"
              component={RecipeView}
              userId={this.state.userId}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
