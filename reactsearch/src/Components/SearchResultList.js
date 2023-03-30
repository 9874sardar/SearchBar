import React from 'react'
import './SearchResultList.css'

const SearchResultList = (props) => {
  return (
    <div className='searchResult' onClick={e => alert(`You Clicked on ${props.result.name}`)}>
      {props.result.name}
    </div>
  )
}

export default SearchResultList
