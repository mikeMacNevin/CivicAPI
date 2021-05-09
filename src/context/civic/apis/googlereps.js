import proPublica  from "./propublica";

export default function repTest(resData) {

    var repArr = []
    let obj ={}
    let i;
    let officesCount = 0
    
    // console.log("GoogleCivicState resData: " + JSON.stringify(resData))
    console.log('reeeeepppp tteeeessstttt')

    if (resData.offices && resData.officials) {
        // offices
        for (i = 0; i < resData.offices.length; i++) {
            // *add name* 
            obj.officeName = resData.offices[i].name
            // *add  level* 
            obj.level = resData.offices[i].levels[0]
            // *duplicate office if 'office indices' greater than one - kind of hacky right now*
            resData.offices[i].officialIndices.forEach(e => {
                obj = {}
                obj.officeName = resData.offices[i].name
                obj.level = resData.offices[i].levels[0]

                //stateId for Open Secrets API
                obj.stateId = resData.normalizedInput.state
                repArr.push(obj)
            })
            // clear obj 
            obj = {}
        };

        // officials
        for (let j = 0; j < resData.officials.length; j++) {
            // *add social media channels*
            if (resData.officials[j].channels) {
                repArr[j].channels = []
                resData.officials[j].channels.forEach( (f, k) => {
                    if (f['id']) {
                        repArr[j].channels.push({"type" :`${f.type}.com/${f.id}` })
                    }
            })
            }
            // *add name*
            repArr[j].name = resData.officials[j].name
            // *add address if exists*
            if (resData.officials[j].address) {
                repArr[j].line1 = resData.officials[j].address[0].line1;
                repArr[j].line1 = resData.officials[j].address[0].city;
                repArr[j].line1 = resData.officials[j].address[0].state;
                repArr[j].line1 = resData.officials[j].address[0].zip;

            }
            // *add political party*
            repArr[j].party = resData.officials[j].party
            // *add phone if exists*
            if (resData.officials[j].phones) {
                if (resData.officials[j].phones[0].length > 0) {
                    repArr[j].phone = resData.officials[j].phones[0]
                }
            }
            // *add website url*
            if(resData.officials[j].urls) {
                repArr[j].url = resData.officials[j].urls[0]
            }
            if (resData.officials[j].photoUrl) {
            repArr[j].photoUrl = resData.officials[j].photoUrl
            }
        } 
        
        // let newRepArr = []
        // proPublica(resData).then(resp => {
        //     console.log("da resp: " + JSON.stringify(resp))
        //     newRepArr.push(resp);

        //     console.log("inner newRepArr: " + JSON.stringify(newRepArr))

        // })
        // console.log("mikes newRepArr: " + newRepArr)
        // console.log("mikes repArr array? " + Array.isArray(newRepArr))
        // // return newRepArr;
        // console.log("proPublica: " + proPublica(resData))

        // console.log("final repArr: " + JSON.stringify(repArr))
        return repArr
        }
    }

