import React, { PropTypes as T } from 'react'
import { Link } from 'react-router'

const ShowCard = React.createClass({
  propyTypes: {
    poster: T.string.isRequired,
    title: T.string.isRequired,
    year: T.string.isRequired,
    description: T.string.isRequired,
    imdbID: T.string.isRequired
  },
  render () {
    const { poster, title, year, description, imdbID } = this.props
    return (
      <Link to={`/details/${imdbID}`}>
        <div className='show-card'>
          <img src={`/public/img/posters/${poster}`} />
          <div>
            <h3>{title}</h3>
            <h4>({year})</h4>
            <p>{description}</p>
          </div>
        </div>
      </Link>
    )
  }
})

export default ShowCard
