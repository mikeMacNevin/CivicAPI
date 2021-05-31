import axios from 'axios'

export default async function proPublica(googleCivicData) {
    let finalResult;
    // PRO PUBLICA
    let returnValue = []
    console.log("proPublica.js: top of proPublica(googleCivicData): " + JSON.stringify(googleCivicData))
    let newurl = 'https://api.propublica.org/congress/v1/116/senate/members.json';

    let resProPublica = await axios.get(newurl,
        { 
        headers: { 
            // need to change eventually because I'm dumb and left public and is out there on internet somewhere....
            'X-API-Key': 'xehBDsPnNx2F4CKjwq9spiSC6QZDZ5AWH7m9UQpM'
        }
    }).then(resp => {
        console.log("Da pro: " + JSON.stringify(resp))
        returnValue = filterPro(resp, googleCivicData)

        // console.log("and thennnn: " + JSON.stringify(filterPro(resp, resData))) 
    })


    console.log("proPublica right before return: " + JSON.stringify(returnValue))
    return returnValue

} 
    
var filterPro = function(data, googleData) {
    console.log("***data*** " + JSON.stringify(data))
    console.log("***googleData*** " + JSON.stringify(googleData))

    var members = data.data.results[0].members;
    var googleReps = googleData
    var googleState = "VA"
    
    // googleData.normalizedInput.state

    // state matching condition for filter
    function filter_by_state(member) {
        return member.state == googleState
    }

    // filter by state
    var filteredState = members.filter(filter_by_state)


    filteredState.forEach((e, i, arr) => {
            let lastName = e.last_name
            let firstName = e.first_name
           console.log("i: " + i)
    
            googleReps.forEach( (f, j) => {
                let name = f.name
                let senator = e.title.split(',')[0].toLowerCase()
    
    
                if (  (senator == "senator") && (name.includes(firstName)) && (name.includes(lastName)) ) {
                    googleReps[j].missed_votes = filteredState[i].missed_votes
                   console.log("propublica.js: senator")
                }

            })
            console.log("proPublica: googleReps: " + JSON.stringify(googleReps))
        })

        console.log("proPublica.js: googleReps before return: " + JSON.stringify(googleReps))
        return googleReps
    }  






    //////////////////


//     import axios from 'axios'

// export default async function proPublica(googleCivicData) {
//     let finalResult;
//     // PRO PUBLICA
//     let returnValue = []
//     console.log("proPublica.js: top of proPublica(googleCivicData): " + JSON.stringify(googleCivicData))
//     let newurl = 'https://api.propublica.org/congress/v1/116/senate/members.json';

//     let resProPublica = await axios.get(newurl,
//         { 
//         headers: { 
//             // need to change eventually because I'm dumb and left public and is out there on internet somewhere....
//             'X-API-Key': 'xehBDsPnNx2F4CKjwq9spiSC6QZDZ5AWH7m9UQpM'
//         }
//     }).then(resp => {
//         // console.log("Da pro: " + JSON.stringify(resp))
//         returnValue = filterPro(resp, googleCivicData)
//         // console.log("and thennnn: " + JSON.stringify(filterPro(resp, resData))) 
//     })
//     // console.log("returnValue: " + JSON.stringify(returnValue))
//     return returnValue

// } 
    
// var filterPro = function(data, googleData) {
//     console.log("***data*** " + JSON.stringify(data))
//     console.log("***googleData*** " + JSON.stringify(googleData))

//     var members = data.data.results[0].members;
//     var googleReps = googleData.officials
//     var googleState = "VA"
    
//     // googleData.normalizedInput.state

//     // state matching condition for filter
//     function filter_by_state(member) {
//         return member.state == googleState
//     }

//     // filter by state
//     var filteredState = members.filter(filter_by_state)


//     filteredState.forEach((e, i, arr) => {
//             let lastName = e.last_name
//             let firstName = e.first_name
//            console.log("i: " + i)
    
//             googleReps.forEach( (f, j) => {
//                 let name = f.name
//                 let senator = e.title.split(',')[0].toLowerCase()
    
    
//                 if (  (senator == "senator") && (name.includes(firstName)) && (name.includes(lastName)) ) {
//                     googleReps[j].missed_votes = filteredState[i].missed_votes
//                    console.log("propublica.js: senator")
//                 }

//             })
//             console.log("proPublica: googleReps: " + JSON.stringify(googleReps))
//         })

//         console.log("proPublica.js: googleReps before return: " + JSON.stringify(googleReps))
//         return googleReps
//     }  


