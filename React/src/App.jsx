import React, { Component } from 'react';
import UsersList from './UsersList.jsx';
import Pagination from './Pagination.jsx';

/* 
1. show login by default
2. after login Click - show spinner
3. show logout
4. after logout click - show login
*/

class App extends Component {
  state = {
    pageNumber: 1,
  };

  users = [
    { id: 1, name: 'Bob', age: 21 },
    { id: 2, name: 'Sam', age: 45 },
    { id: 3, name: 'Con', age: 22 },
    { id: 4, name: 'Man', age: 55 },
    { id: 5, name: 'Boy', age: 55 },
    { id: 6, name: 'Her', age: 31 },
    { id: 7, name: 'Boy', age: 55 },
    { id: 8, name: 'Her', age: 31 },
  ];

  prevBtnHandler = () => {
    this.setState({
      pageNumber: this.state.pageNumber - 1,
    });
  };

  nextBtnHandler = () => {
    this.setState({
      pageNumber: this.state.pageNumber + 1,
    });
  };

  render() {
    const { pageNumber } = this.state;
    const itemsPerPage = 3;
    const startIndex = (pageNumber - 1) * itemsPerPage;

    const endIndex = startIndex + itemsPerPage;

    const userToRender = this.users.slice(startIndex, endIndex);
    return (
      <>
        <Pagination
          pageNumber={this.state.pageNumber}
          prev={this.prevBtnHandler}
          next={this.nextBtnHandler}
          usersCount={this.users.length}
          itemsPerPage={itemsPerPage}
        />
        <UsersList users={userToRender} />
      </>
    );
  }
}

export default App;
