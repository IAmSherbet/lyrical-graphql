import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class SongList extends Component {
  renderSongs() {
    return this.props.data.songs.map(song => {
      return (
        <li key={ song.id } className="collection-item">
          { song.title }
        </li>
      );
    });
  }

  render() {
    if (this.props.data.loading) {
      return <div>Loading ... </div>
    } else {
      return (
        <ul className="collection">
          { this.renderSongs() }
        </ul>
      );
    }
  }
}

const query = gql`
  {
    songs {
      id
      title
    }
  }
`;

export default graphql(query)(SongList);
// This is valid javascript, it calls a function with query as the
// first argument then runs a second time once the query completes
// with SongList as an argument
