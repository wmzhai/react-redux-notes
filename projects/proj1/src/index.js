import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCrsUUKgGOrOAQXVu0y6c5sImWrPUwPt98';

const App = function() {
  return ( 
    <div>
      <SearchBar />
    </div>
  );
}

ReactDOM.render( <App />, document.querySelector('.container'));