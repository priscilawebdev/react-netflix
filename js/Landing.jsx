import React from 'react'
import { Link } from 'react-router'
import Header from './Header'

const Landing = React.createClass({
  render () {
    return (
      <div className='landing'>
        <Header />
        <input type='text' placeholder='Search' />
        <Link to='/search'>or Browse All</Link>
      </div>
    )
  }
})

export default Landing
