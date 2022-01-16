
import constData from '../../../../data/constitution.json'
import Signer from './Signer'
const Signatories = () => {
    
    return (
        <div>
            <h2 className="text-left">Signatories</h2>
        {constData.signatories.map( (signer,i) => {
            return  <Signer signer={signer} />
        })
        }
        </div>
    
    )
}

export default Signatories