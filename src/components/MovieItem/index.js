import Popup from 'reactjs-popup'
import React from 'react'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'

const MovieItem = props => {
  const {movie} = props
  const {thumbnailUrl, videoUrl} = movie

  return (
    <div>
      <Popup
        modal
        trigger={
          <button type="button" className="trigger-button">
            <img alt="thumbnail" src={thumbnailUrl} />
          </button>
        }
      >
        {close => (
          <div>
            <button
              data-testid="closeButton"
              type="button"
              className="trigger-button"
              onClick={() => close()}
            >
              .<IoMdClose />
            </button>
            <ReactPlayer url={videoUrl} />
          </div>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem
