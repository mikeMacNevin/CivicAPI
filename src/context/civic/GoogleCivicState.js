import React, {useReducer } from 'react'
import axios from 'axios'
import GoogleCivicContext from './googleCivicContext'
import GoogleCivicReducer from './googleCivicReducer'


import {
    SEARCH_ADDRESS
} from '../types'



const GoogleCivicState = props => {
    const initialState = {
        reps: []
    }

    const [state, dispatch] = useReducer(GoogleCivicReducer, initialState);

    const searchAddress = async text => {
    
    const res = await axios.get(
        `https://www.googleapis.com/civicinfo/v2/representatives?key=AIzaSyA-alrA4NG9OOesuE1PE-Bb4Cpduujf0Hg&address=${text}`
    )

    
   dispatch({
        type: SEARCH_ADDRESS,
        // payload: res.data
        payload: repTest(res.data)
    })
   
    // console.log("GoogleCivicState res.data: " + JSON.stringify(res.data))
}

return (
    
    <GoogleCivicContext.Provider
        value= {{
            searchAddress,
            reps: state.reps
        }}
    >
    {props.children}
    </GoogleCivicContext.Provider>
    )
}

//check resData
var repTest = (resData) => {

    var repArr = []
    let obj ={}
    let i;
    let officesCount = 0

    if (resData.offices && resData.officials) {
        // count how many offices

        // offices
        for (i = 0; i < resData.offices.length; i++) {
            // add name 
            obj.officeName = resData.offices[i].name
            // add  level 
            obj.level = resData.offices[i].levels[0]
            // duplicate office if 'office indices' greater than one - kind of hacky right now
            resData.offices[i].officialIndices.forEach(e => {
                obj = {}
                obj.officeName = resData.offices[i].name
                obj.level = resData.offices[i].levels[0]
                repArr.push(obj)
            })
            // clear obj 
            obj = {}
        };

        // officials
        for (let j = 0; j < resData.officials.length; j++) {
            // add social media channels
            if (resData.officials[j].channels) {
                repArr[j].channels = []
                resData.officials[j].channels.forEach( (f, k) => {
                    if (f['id']) {
                        repArr[j].channels.push({"type" :`${f.type}.com/${f.id}` })
                    }
            })
            }
            // add name
            repArr[j].name = resData.officials[j].name
            // add address if exists
            if (resData.officials[j].address) {
                repArr[j].line1 = resData.officials[j].address[0].line1;
                repArr[j].line1 = resData.officials[j].address[0].city;
                repArr[j].line1 = resData.officials[j].address[0].state;
                repArr[j].line1 = resData.officials[j].address[0].zip;

            }
            // add political party
            repArr[j].party = resData.officials[j].party
            // add phone if exists
            if (resData.officials[j].phones[0].length > 0) {
            repArr[j].phone = resData.officials[j].phones[0]
            }
            // add website url
            if(resData.officials[j].urls) {
                console.log(resData.officials[j].urls[0])
                repArr[j].url = resData.officials[j].urls[0]
            }

            // if photo url
            // if (resData.officials[j].photoUrl) {
            // repArr[j].photoUrl = resData.officials[j].photoUrl
            // }

            

        } 

        // for doing office div name - might not be needed 
        // for (const [value] of Object.entries(resData.divisions)) {
        //     if (value.officeIndices) {
        //     value.officeIndices.forEach( (x, y) => {
        //         console.log(x)
        //         repArr[x].officeDivName = ""
        //         repArr[x].officeDivName = value.name
        //     })
        //     }
        // }

        console.log(repArr)

        return repArr

        }

    }



export default GoogleCivicState;