import React from 'react'

export const TextInput = ({searchValue, handleChange}) => {
    return (
        <input className='text-input'
            onChange={this.handleChange}
            value={searchValue}
            type="search" 
            placeholder='Procurar'/>
    )
}
