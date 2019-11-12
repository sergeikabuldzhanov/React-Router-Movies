import React, { useState } from 'react';
import {Route, Link, Switch} from 'react-router-dom';
import MovieList from './Movies/MovieList';
import MovieCard from './Movies/MovieCard';
import Movie from './Movies/Movie';



import SavedList from './Movies/SavedList';

const App = () => {
  const [savedList, setSavedList] = useState( [] );
  const [currentMovie, setCurrentMovie] = useState();

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Route exact path = "/" component = {MovieList}/>
      <Route exact path = "/movies/:id" render = {props=> <Movie {...props} addToSavedList = {addToSavedList}/>}/>
    </div>
  );
};

export default App;
