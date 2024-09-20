import React from 'react'

export default function MovieListCard({ title, release_date, poster_path, id }) {
    return (
        <a className='movie-card-container' href={'/details/' + id}   >
            <div>
                <img src={'https://media.themoviedb.org/t/p/w300' + poster_path} />
            </div>
            <div className='movie-card-title'>
                <h2>{title}</h2>
                <div>{release_date}</div>
            </div>
        </a>
    )
}
