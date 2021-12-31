
import './Documents.scss'
import { Outlet } from 'react-router-dom';


import DocNav from './nav/DocNav';
import DocumentPage from './DocumentPage';
const Documents = () => {
    return (
        <div className="documents text-center">
            <h2>Documentss</h2>
            <DocNav></DocNav>
            <Outlet></Outlet>
        </div>
    )
}

export default Documents;   