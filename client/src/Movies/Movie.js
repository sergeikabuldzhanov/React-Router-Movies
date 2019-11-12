import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieList from './MovieList';
import MovieCard from './MovieCard';
import {Route} from 'react-router-dom';

const Movie = (props) => {
  const [movie, setMovie] = useState();

  const id = props.match.params.id;    
  
  useEffect(() => {
    // change ^^^ that line and grab the id from the URL
    // You will NEED to add a dependency array to this effect hook
    fetchMovie();
  },[id]);

  function fetchMovie(){
    axios
    .get(`http://localhost:5000/api/movies/${id}`)
    .then(response => {
      setMovie(response.data);
    })
    .catch(error => {
      console.error(error);
    });
  }
  
  // Uncomment this only when you have moved on to the stretch goals
  const saveMovie = () => {
    const addToSavedList = props.addToSavedList;
    addToSavedList(movie)
  }

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  return (
  <div className = "save-wrapper">
    <MovieCard movie = {movie} key = {movie.id}/>
    <div className = "save-button" onClick = {e=>props.addToSavedList(movie)}>Save</div>
  </div>
  )
}

export default Movie;
