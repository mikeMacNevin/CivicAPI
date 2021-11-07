import './AddressForm.scss';

import React, { useState, useContext } from 'react'
import GoogleCivicContext from '../../context/civic/googleCivicContext'


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
        <div className="address-form">
            <form onSubmit={onSubmit} className="form form-inline">
                        <div className="form-group">
                            <input 
                                type="text" 
                                className="form-control" 
                                id="addressInput"
                                placeholder="home address" 
                                value={text}
                                onChange={onChange} 
                            />
                        </div>
                        <div className="form-group form-group-two">
                            <button className="btn btn-primary">   
                                <input
                                    type='submit'
                                    value='Search'
                                />
                            </button>
                        </div>
                        <div className="form-group-small d-none">
                            <button className="btn btn-primary mt-0">   
                                <input
                                    type='submit'
                                    value='Search'
                                />
                            </button>
                        </div>
                    </form>
        </div>
    )
}

export default AddressForm;