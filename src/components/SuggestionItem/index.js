// Write your code here

import './index.css'

const SuggestionItem = props => {
  const {suggestionsList, searchView} = props
  const {suggestion} = suggestionsList

  const onSearchView = () => {
    searchView(suggestion)
  }
  return (
    <li className="list-item">
      <p>{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png "
        alt="arrow"
        className="arrow"
        onClick={onSearchView}
      />
    </li>
  )
}

export default SuggestionItem
