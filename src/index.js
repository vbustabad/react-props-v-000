import React from 'react';
import ReactDOM from 'react-dom';

class MovieCard extends React.Component {
  render() {
    return (
      <div className="movie-card">
        <img src="http://image.tmdb.org/t/p/w342/kqjL17yufvn9OVLyXYpvtyrFfak.jpg" alt="Mad Max: Fury Road" />
        <h2>Mad Max: Fury Road</h2>
        <small>Genres: Action, Adventure, Science Fiction, Thriller</small>
      </div>
    );
  }
}

class MovieCard extends React.Component {
  render() {
    return (
      <div className="movie-card">
        <img  
          src={this.props.poster} 
          alt={this.props.title} 
        />
        <h2>{this.props.title}</h2>
        <small>Genres: {this.props.genres.join(', ')}</small>
      </div>
    );
  }
}