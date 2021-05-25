import React, { Fragment} from 'react'

 const RepImage = ( props ) => {
    if(props.photoUrl) {
        return (
            <Fragment>
            <img src={props.photoUrl}/>
            </Fragment>
            )
    }
    else {
        return (
            <Fragment></Fragment>
        )
    }
 }


 export default RepImage;