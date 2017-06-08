import React, { PropTypes } from 'react'

const ShowCard = React.createClass({
  propyTypes: {
    poster: PropTypes.string,
    title: PropTypes.string,
    year: PropTypes.string,
    description: PropTypes.string
  },
  render () {
    const { poster, title, year, description } = this.props
    return (
      <div className='show-card'>
        <img src={`/public/img/posters/${poster}`} />
        <div>
          <h3>{title}</h3>
          <h4>({year})</h4>
          <p>{description}</p>
        </div>
      </div>
    )
  }
})

export default ShowCard
