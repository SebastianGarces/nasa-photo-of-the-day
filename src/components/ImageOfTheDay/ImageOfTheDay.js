import React from 'react'

import './ImageOfTheDay.styles.scss'

const ImageOfTheDay = ({
  data: { hdurl, title, explanation, media_type, url },
}) => {
  console.log(hdurl)

  if (media_type === 'video') {
    return (
      <div className="video-container">
        <iframe
          width="1280"
          height="720"
          src={`${url}&autoplay=1&loop=1&controls=1`}
          title="Video of the Day"
        ></iframe>
        <h1 className="title">{title}</h1>
        <h2>{`Description: `}</h2>
        <p>{explanation}</p>
      </div>
    )
  }

  return (
    <div
      className="image-container"
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)), url(${hdurl}) `,
      }}
    >
      <h1 className="title">{title}</h1>
      <h2>{`Description: `}</h2>
      <p>{explanation}</p>
    </div>
  )
}

export default ImageOfTheDay
