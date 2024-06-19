import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import MovieItem from '../MovieItem'
// import './index.css'

const MoviesSlider = props => {
  const {moviesList} = props
  const settings = {
    dots: true,
    slidesToShow: 5,
    slidesToScroll: 1,
  }
  console.log(moviesList)
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {moviesList.map(i => (
          <MovieItem movie={i} key={i.id} />
        ))}
      </Slider>
    </div>
  )
}

export default MoviesSlider
