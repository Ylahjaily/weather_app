import React from 'react'
import './SearchBar.css'

export const SearchBar = ({ handleSubmit, isLoading }) => (
    <div>
        <form onSubmit={handleSubmit}>
            <input className="search_bar_input"  name ="city" type="text"/>
            <input  className="search_bar_submit" type="submit"  value="go"/>
        </form>
        <div>
            {isLoading && (
                <p>loading...</p>
            )}
        </div>
    </div>
)

      