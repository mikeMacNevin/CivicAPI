const data = require('./testing.json')

let repArr = []


//create reps arr
function createRepArr(resData) {
  let obj ={};

  // offices
  for (i = 0; i < resData.offices.length; i++) {
    // add name of office
    obj.officeName = resData.offices[i].name
    // add the level of the office
    obj.level = resData.offices[i].levels[0]
    // duplicate office if 'office indices' greater than one
    resData.offices[i].officialIndices.forEach(e => {
      repArr.push(obj)
    })
    // clear obj object
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


    // add rep name
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



  }) 
}

//officials



createRepArr(data)
console.log(repArr)

// let country = "ocd-division/country"