import React, { PropTypes as T } from 'react'
import { connect } from 'react-redux'
import { setSearchTerm } from './actionCreators'
import { pure } from 'recompose'
import { Link } from 'react-router'

export const renderHeader = ({
   moduleName = 'Header',
   title = 'svideo',
   showSearch = false,
   handleSearchTermChange,
   searchTerm
} = {}) => {
  let utilSpace
  if (showSearch) {
    utilSpace = <input
      onChange={handleSearchTermChange}
      value={searchTerm}
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

const mapStateToProps = (state) => {
  return {
    searchTerm: state.searchTerm
  }
}

const mapDispatchToProps = (dispatch) => ({
  handleSearchTermChange: (event) => {
    dispatch(setSearchTerm(event.target.value))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
