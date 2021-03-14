import React, { useState, useContext } from 'react'
import GoogleCivicContext from '../../context/civic/googleCivicContext'
import GoogleCivicState from '../../context/civic/GoogleCivicState'
import './Rep.scss';

const AddressForm = () => {

    const googleCivicContext = useContext(GoogleCivicContext)
    
    const [text, setText] = useState('')
    
    //
    const onSubmit = e => {
        e.preventDefault()
        if (text === '') {
            console.log('no text entered')
        } else {
            googleCivicContext.searchAddress(text)
            setText('')
            console.log("AddressForm: Address Input Submitted")

        }
    }

    // change the state of 'text' from text input bar
    const onChange = e => setText(e.target.value)

 
    return (
        <form onSubmit={onSubmit} className="form">
            <input 
                type="text" 
                className="form-control" 
                id="addressInput"
                placeholder="123 your street, state" 
                value={text}
                onChange={onChange} 
            />
            <button className="btn btn-primary mb-2">
            <input
                type='submit'
                value='Search'
            />
            </button>
        </form>
    )
}

export default AddressForm;