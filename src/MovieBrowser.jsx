import React, { useEffect, useState } from 'react'
import MovieListCard from './MovieListCard';

export default function MovieBrowser() {
    let [array, setArray] = useState([]);
    let [type,setType] = useState("popular");


    function getAllMovies() {
      const url = 'https://api.themoviedb.org/3/movie/' + type;
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNzlkYzlhMjA2MzdmZjY0YWIwOGQ3MmU4NzZkZTM4MCIsIm5iZiI6MTcyMjYwODI1Ni42NzQ4NTIsInN1YiI6IjY1NTMyMDY4NjdiNjEzNDVjY2FkZTEyMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AMF5QZd8Kr1syCPiLNAqu0EQovWNRgNtY-OW4yzQIEM'
        }
      };
  
      fetch(url, options)
        .then(res => res.json())
        .then(json => {
          // this is our json response 
          setArray(json.results)
        })
        .catch(err => console.error('error:' + err));
    }
  
    useEffect(()=>{
      // this code  will get executed as soon as the page is loaded
      // as well as when ever "type" variable is changed
      getAllMovies();
    },[type])
  
    return (
      <div className="App">
        <button onClick={()=>setType("popular")}>Popular</button>
        <button onClick={()=>setType("upcoming")}>Upcoming</button>
        <button onClick={()=>setType("top_rated")}>Top Rated</button>
        <br/>
        <br/>
        <br/>
        <hr/>
        {
          array.map(x => <MovieListCard
            id={x.id}
            title={x.title}
            release_date={x.release_date}
            poster_path={x.poster_path}
          />)
        }
      </div>
    );
}
