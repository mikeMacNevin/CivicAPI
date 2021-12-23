
import './Documents.scss'
import { Outlet } from 'react-router-dom';

import Constitution from './constitution';

import DocNav from './nav/DocNav';
import DocumentPage from './DocumentPage';
const Documents = () => {
    return (
        <div className="documents">
            <h2>Documentss</h2>
            <DocNav></DocNav>
            <Outlet></Outlet>
        </div>
    )
}

export default Documents;