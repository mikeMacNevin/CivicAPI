var proPublica = () => {

    let resProPublica = {};
    // PRO PUBLICA
    let newurl = 'https://api.propublica.org/congress/v1/116/senate/members.json';
    const getProPublicaData = async resData => {

     resProPublica = await axios.get(newurl,
    { 
    headers: { 
        'X-API-Key': 'xehBDsPnNx2F4CKjwq9spiSC6QZDZ5AWH7m9UQpM'
        }
    })
    console.log("ProPublic Context: " + JSON.stringify(resProPublica))
    this.proData = resProPublica;
    } 

}

export default proPublica