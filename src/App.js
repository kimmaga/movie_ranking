import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';



class App extends Component {
//Render : componentWillMount() -> render()
//Update componentWillReceiveProps() ->shouldComponentUpdate() == true -> componentWillUpdate()->render()=>componentDidWillUpdate()
//stateㄱ가 바뀔때마다 render()를 다시한다.
//state 는 컴포넌트를 로드하는 방법이고, default state와 함께
//state 를 변경할때는 setState로  state가 변경되면 render가 다시 작동한다.//(새로운 state와 함께)

state={}
componentDidMount(){
  this._getMovies();
}
_renderMovies = () => {
  const movies = this.state.movies.map(movie=>{
    return <Movie title={movie.title_english} 
    poster = {movie.medium_cover_image}
    genres={movie.genres}
    synopsis={movie.synopsis} 
    key={movie.id}/>
  })
 return movies
}
  //await _callApi()기능이 끝나는것을 기다리는것.
  //끝나기를 기다리는것, 성공적으로 수행이 끝나기를 기다리는것이 아니라
  //return value가 무엇이든 관계없이
_getMovies = async () => {
  const movies = await this._callApi()
  this.setState({
    movies
  })
}

_callApi=()=>{
  return fetch('https://yts.am/api/v2/list_movies.json?sort_by=download_count')
  .then(response => response.json())
  .then(json => json.data.movies)
  .catch(err=>console.log(err))
}

  render() {
    const {movies} = this.state;
    return (
      <div className={movies?"App":"APP--loading"}>
        {this.state.movies ? this._renderMovies():'Loading'}
      </div>
    );
  }
}

export default App;
