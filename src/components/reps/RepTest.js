const RepTest = (resData) => {

    var repArr = []

    let obj ={}
    let i;
    let officesCount = 0
    resData.offices.forEach( (a) => {
        officeCount += a.officialIndices.length
    })
    console.log(officeCount)
    // offices
    for (i = 0; i < officeCount; i++) {
        // add name 
        obj.officeName = resData.offices[i].name
        // add  level 
        obj.level = resData.offices[i].levels[0]
        // duplicate office if 'office indices' greater than one
        resData.offices[i].officialIndices.forEach(e => {
            repArr.push(obj)
        })
        // clear obj 
        obj = {}
    };

    // officials
    resData.officials.forEach( (e, j) => {
        // add social media channels
        if (e.channels) {
            repArr[j].channels = []
            e.channels.forEach( (f, k) => {
            if (f['id']) {
                repArr[j].channels.push({"type" :`${f.type}.com/${f.id}` })
            }
        })
        }
        // add name
        repArr[j].name = e.name
        // add address if exists
        if (e.address) {
            repArr[j].address = e.address[0]
        }
        // add political party
        repArr[j].party = e.party
        // add phone if exists
        if (e.phones[0].length > 0) {
            repArr[j].phone = e.phones[0]
        }
        // add website url
        if(e.urls[0].length > 0) {
        repArr[j].url = e.urls[0]
        }
        // if photo url
        if (e.photoUrl) {
        repArr[j].photoUrl = e.photoUrl
        }
        return repArr
        }) 


}
export default RepTest
