import React, { Component } from "react";
import MovieRow from "./MovieRow";
import UserContext from "./userContext";

class MovieList extends Component {
  static contextType = UserContext;
  componentDidMount() {
    console.log(this.context);
  }
  render() {
    return (
      <UserContext.Consumer>
        {(userContest) => (
          <div>
            Movie List {userContest.name} <MovieRow />
          </div>
        )}
      </UserContext.Consumer>
    );
  }
}

// MovieList.contextType = UserContext;

export default MovieList;
