import {Component} from 'react'
// import MovieItem from '../MovieItem'
import MoviesSlider from '../MoviesSlider'
import './index.css'

class PrimeVideo extends Component {
  render() {
    const {moviesList} = this.props
    const comedy = moviesList.filter(i => i.categoryId === 'COMEDY')
    const action = moviesList.filter(i => i.categoryId === 'ACTION')

    return (
      <div>
        <img
          alt="prime video"
          src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        />
        <h1>Comedy Movies</h1>
        <MoviesSlider moviesList={[...comedy, ...action]} />
        <h1>Action Movies</h1>
        <MoviesSlider moviesList={[...action, ...comedy]} />
      </div>
    )
  }
}

export default PrimeVideo
