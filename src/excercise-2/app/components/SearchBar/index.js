import React, { useContext } from 'react'
import GlobalContext from '../Global/context'
import FilterSelect from '../FilterSelect'
import FilterByTypes from '../FilterByTypes'
import SearchInput from '../SearchInput'
import ClearFilters from '../ClearFilters'

const SearchBar = () => {
  const { state } = useContext(GlobalContext)
  // Returns array with name and value
  const categories = Object.entries(state.categories)
  // Dynamic menu based on media categories
  // Can expand without code push
  return (
    <>
      <section className='ma_row ma_search-bar'>
        <ul className='ma_menu ma_column ma_column_col--6'>
          {categories.map((category, index) => {
            return (
              <FilterSelect type={category[0]} categories={category[1]} key={category[0] + index} />
            )
          })}
        </ul>
        <div className='ma_column ma_column_col--3'>
          <SearchInput />
          <ClearFilters />
        </div>
      </section>
      <div>
        <FilterByTypes types={['movie', 'book']} />
      </div>
    </>
  )
}

export default SearchBar
