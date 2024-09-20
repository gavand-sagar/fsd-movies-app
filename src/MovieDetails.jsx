import moment from 'moment';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function MovieDetails() {
    let [movie, setMovie] = useState(null)

    let { m_id } = useParams();

    function getMovie() {
        const url = 'https://api.themoviedb.org/3/movie/'+m_id+'?language=en-US';
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNzlkYzlhMjA2MzdmZjY0YWIwOGQ3MmU4NzZkZTM4MCIsIm5iZiI6MTcyMjYwODI1Ni42NzQ4NTIsInN1YiI6IjY1NTMyMDY4NjdiNjEzNDVjY2FkZTEyMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AMF5QZd8Kr1syCPiLNAqu0EQovWNRgNtY-OW4yzQIEM'
            }
        };

        fetch(url, options)
            .then(res => res.json())
            .then(json => setMovie(json))
            .catch(err => console.error('error:' + err));
    }

    useEffect(() => {
        getMovie()
    }, [])



    function getRuntime() {
        if (movie && movie.runtime) {
            let hours = parseInt(movie.runtime / 60);
            let minutes = movie.runtime - (hours * 60);
            return `${hours}h ${minutes}m`
        }
    }

    function getReleaseDate() {
        if (movie && movie.release_date) {
            let date = moment(new Date(movie.release_date));
            return date.format("MMMM DD, yyyy")
        }
    }

    return (
        <div className='movie-details-container'>
            <div>
                <img src={'https://media.themoviedb.org/t/p/w500' + movie?.poster_path} />
            </div>
            <div>
                <h1>{movie?.title}</h1>
                <p>{getReleaseDate()} {movie?.genres?.map(x => x.name).join(",")} {getRuntime()}</p>

                <i>{movie?.tagline}</i>
                <p>{movie?.spoken_languages?.map(x => x.name)}</p>
                <h2>Overview</h2>
                <p>{movie?.overview}</p>
            </div>
        </div>
    )
}
