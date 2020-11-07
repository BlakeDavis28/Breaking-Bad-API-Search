import { getSuggestedQuery } from '@testing-library/react'
import React, {useState} from 'react'

export default function Search( { getQuery } ) {
    const [text, setText] = useState('')

    const onChange = (q) => {
        setText(q)
        getQuery(q)
    }
    return (
        <section className='search'>
            <form>
                <input 
                type="text" 
                className='form-control' 
                placeholder='Search characters' 
                value={text} 
                onChange={(event) => onChange(event.target.value)}
                autoFocus
                />
            </form>
        </section>
    )
}
