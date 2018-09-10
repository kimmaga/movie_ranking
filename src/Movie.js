import React from 'react';
import propTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis'
import './Movie.css';

function Movie({title,poster,genres,synopsis}){
    return(
        <div className="Movie">
            <div className="Movie__Columns">
                <MoviePoster poster={poster} alt={title}/>
            </div>
            <div className="Movie__Columns">    
                <h1>제목 : {title}</h1>
                <div className="Movie__Genres">
                장르 : 
                    {genres.map((genre,index) => <MovieGenre genre={genre} key={index}/>) }
                </div>
                <p className="Movie__Synopsis">
                    <LinesEllipsis
                        text={synopsis}
                        maxLine='3'
                        ellipsis=' ...'
                        trimRight
                        basedOn='letters'
                        />
                </p>
            </div>
        </div>
    )
}

function MoviePoster({poster,alt}){
    return(
        <img src={poster} alt={alt} title={alt} className="Movie__Poster"/>
    )
}

function MovieGenre({genre}){
    return(
        <span className="Movie__Genre">{genre} </span>
    )
}

// function MovieSynopsis({synopsis}){
//     return(
//         <p className="Movie__synopsis">줄거리 : {synopsis}</p>
//     )
// }

Movie.propTyeps={
    title:propTypes.string.isRequired7s,
    poster:propTypes.string.isRequired,
    genres:propTypes.array.isRequired,
    sysnopsis:propTypes.string.isRequired
}

MoviePoster.propTypes={
    poster:propTypes.string.isRequired,
    alt:propTypes.string.isRequired
}

MovieGenre.propTypes={
    genre:propTypes.string.isRequired
}

// MovieSynopsis.propTyeps={
//     synopsis:propTypes.string.isRequired
// }
export default Movie;
