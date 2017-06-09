import React, { PropTypes as T } from 'react'
import { pure } from 'recompose'
import { Link } from 'react-router'

export const renderHeader = ({
 moduleName = 'Header',
 title = 'svideo',
 showSearch = false,
 ...otherProps
} = {}) => {
  let utilSpace
  if (showSearch) {
    utilSpace = <input
      onChange={otherProps.handleSearchTermChange}
      value={otherProps.searchTerm}
      type='text'
      placeholder='Search'
    />
  } else {
    utilSpace = (
      <h2>
        <Link to='/search'>
          Back
        </Link>
      </h2>
    )
  }
  return (
    <header>
      <h1>
        <Link to='/'>
          {title}
        </Link>
      </h1>
      {utilSpace}
    </header>
  )
}

const Header = pure(renderHeader)

Header.propTypes = {
  handleSearchTermChange: T.func,
  showSearch: T.bool,
  searchTerm: T.string,
  title: T.string
}

export default Header
