import axios from 'axios'

export default async function proPublica(resData) {
    let finalResult;
    // PRO PUBLICA
    let returnValue = []

    let newurl = 'https://api.propublica.org/congress/v1/116/senate/members.json';

    let resProPublica = await axios.get(newurl,
        { 
        headers: { 
            'X-API-Key': 'xehBDsPnNx2F4CKjwq9spiSC6QZDZ5AWH7m9UQpM'
        }
    }).then(resp => {
        // console.log("Da pro: " + JSON.stringify(resp))
        returnValue = filterPro(resp, resData)
        // console.log("and thennnn: " + JSON.stringify(filterPro(resp, resData))) 
    })
    console.log("returnValue: " + JSON.stringify(returnValue))
    return returnValue

} 
    
var filterPro = function(data, googleData) {
    var members = data.data.results[0].members;
    var googleReps = googleData.officials
    var googleState = googleData.normalizedInput.state

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
                   console.log("senator")
                }

            })
        })
        return googleReps
    }  


