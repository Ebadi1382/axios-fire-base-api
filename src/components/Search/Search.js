import React from 'react'
import Card from '../Ui/Card/Card'
import "./Search.css"

const Search = ({searchInputHandler,search,inputRef}) => {
  return (
    <div>
      <Card>
      <form className="form-search">
        <label className="label-search" htmlFor="input-search">جست و جو</label>
        <input onChange={searchInputHandler} type="text" className="input-search" id="input-search" value={search} ref={inputRef}/>
      </form>
      </Card>
    </div>
  )
}

export default Search