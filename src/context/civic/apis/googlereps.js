import proPublica  from "./propublica";


export default function repTest(resData) {

    let returnReps = checkReps(resData)

    console.log("googlreps.js returnReps: " + JSON.stringify(returnReps))

    // let finalReturnReps = proPublica(returnReps).then(result => {

    // })
    return returnReps
}

const callbackProPublica = (data) => {
    console.log("googlereps.js: callbackProPublica() called!")
    return data
}

let callProPublica = function(someData) {
    return someData
}

const checkReps = (data) => {
    let repArr = []
    var obj ={}
    let i
    if (data.offices && data.officials) {
        // offices
        obj.normalizedInput = {}
        obj.normalizedInput.state = ''
        obj.normalizedInput.state = data.normalizedInput.state

        console.log("NO: " + JSON.stringify(obj.normalizedInput))
        for (i = 0; i < data.offices.length; i++) {
            // *add name* 
            obj.officeName = data.offices[i].name
            // *add  level* 
            obj.level = data.offices[i].levels[0]
            // *duplicate office if 'office indices' greater than one - kind of hacky right now*
            data.offices[i].officialIndices.forEach(e => {
                obj = {}
                obj.officeName = data.offices[i].name
                obj.level = data.offices[i].levels[0]

                //stateId for Open Secrets API
                obj.stateId = data.normalizedInput.state
                repArr.push(obj)
            })
            // clear obj 
            obj = {}
        };

        // officials
        for (let j = 0; j < data.officials.length; j++) {
            // *add social media channels*
            if (data.officials[j].channels) {
                repArr[j].channels = []
                data.officials[j].channels.forEach( (f, k) => {
                    if (f['id']) {
                        repArr[j].channels.push({"type" :`${f.type}.com/${f.id}` })
                    }
                })
            }
            // *add name*
            repArr[j].name = data.officials[j].name
            // *add address if exists*
            if (data.officials[j].address) {
                repArr[j].line1 = data.officials[j].address[0].line1;
                repArr[j].line1 = data.officials[j].address[0].city;
                repArr[j].line1 = data.officials[j].address[0].state;
                repArr[j].line1 = data.officials[j].address[0].zip;
            }
            // *add political party*
            repArr[j].party = data.officials[j].party
            // *add phone if exists*
            if (data.officials[j].phones) {
                if (data.officials[j].phones[0].length > 0) {
                    repArr[j].phone = data.officials[j].phones[0]
                }
            }
            // *add website url*
            if(data.officials[j].urls) {
                repArr[j].url = data.officials[j].urls[0]
            }
            if (data.officials[j].photoUrl) {
                repArr[j].photoUrl = data.officials[j].photoUrl
            }
            if(j == (data.officials.length - 1) ) {
                console.log("******************************")
                console.log("YESSSS: " + JSON.stringify(repArr))

            }
               
        } //end for
        return repArr



    } //end if

}