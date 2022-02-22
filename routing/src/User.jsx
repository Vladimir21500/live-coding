import React from 'react';

class User extends React.Component {
  state = {
    avatar_url: null,
    name: null,
    location: null,
  };

  fetchUserInfo = (userId) => {
    return fetch(`https://api.github.com/users/${userId}`)
      .then((response) => response.json())
      .then((userInfo) => {
        this.setState({
          avatar_url: userInfo.avatar_url,
          name: userInfo.name,
          location: userInfo.location,
        });
      });
  };

  componentDidMount() {
    this.fetchUserInfo(this.props.match.params.userId);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.userId !== this.props.match.params.userId) {
      this.fetchUserInfo(this.props.match.params.userId);
    }
  }

  render() {
    const { avatar_url, name, location } = this.state;
    return (
      <div className='user'>
        <img alt='User Avatar' src={avatar_url} className='user__avatar' />
        <div className='user__info'>
          <span className='user__name'>{name}</span>
          <span className='user__location'>{location}</span>
        </div>
      </div>
    );
  }
}

export default User;

// get userId from match
// fetch in didMount
// add data to store
