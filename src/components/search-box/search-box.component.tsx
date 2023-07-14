import React, { ChangeEvent } from 'react'
import './search-box.styles.css'

type SearchBoxProps = {
    placeholder?: string,
    onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void
}

export const SearchBox = ({placeholder,onChangeHandler}: SearchBoxProps) => (
    <input 
        onChange={onChangeHandler}
        type='search' 
        placeholder={placeholder}
        className='search'
    />
)
