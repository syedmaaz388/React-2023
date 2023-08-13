import './App.css';
import { useEffect } from 'react';
import { useState } from 'react';


function App() {
  const [movies,setmovies] = useState([]);

  const [searchTerm, setsearchTerm] = useState('');

  const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=b2d401d4";

  const searchMovies = async(title) => {
   const response = await fetch(`${API_URL}&s=${title}`);
   const data = await response.json();
   setmovies(data.Search)
  }

  useEffect(() => {
    searchMovies('Batman');
  },[])

  return (
    <>
<div className="main">
        <div className="box">
            <input className="inp" type="text" placeholder="Search for Movies Here" value={searchTerm} onChange={(e) => setsearchTerm(e.target.value)}/>
            <i onClick={() => searchMovies(searchTerm)} className="ri-search-line btn"></i>
        </div>

        <div className="cards">
       
          {movies.map((movie) => (
            <div className="card">
              <img src={movie.Poster !== "N/A" ? movie.Poster : "https://img.freepik.com/free-vector/page-found-concept-illustration_114360-1869.jpg?w=2000"} alt=""/>
              <p className="movie-year">{movie.Year}</p>
              <h3 className="movie-title">{movie.Title}</h3>
              <p className="Type">{movie.Type}</p>
         </div>
          ))} 
       

      
        </div>



    </div>

    </>
    
      
  );
}

export default App;
