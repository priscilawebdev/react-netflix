import React, { PropTypes as T } from 'react'
import { pure } from 'recompose'
import { Link } from 'react-router'

export const renderHeader = ({
 moduleName = 'Header',
 title = 'svideo'
} = {}) =>
  <header>
    <h1>
      <Link to='/'>
        {title}
      </Link>
    </h1>
  </header>

const Header = pure(renderHeader)

Header.propTypes = {
  handleSearchTermChange: T.func,
  showSearch: T.bool,
  searchTerm: T.string,
  title: T.string
}

export default Header
