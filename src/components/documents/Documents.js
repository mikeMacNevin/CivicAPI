
import './Documents.scss'
import { Outlet, useParams } from 'react-router-dom';


import DocNav from './nav/DocNav';
import DocumentPage from './DocumentPage';
import { useEffect, useState } from 'react';

const Documents = () => {

    const params = useParams();
    const [currentParam, setCurrentParam] = useState({doc: ''})
    console.log("param: " + params)

    useEffect( () => {
        setCurrentParam(params);

        console.log("param2: " + JSON.stringify(params))
        console.log("currentParam: " + JSON.stringify(currentParam))

    }, [params])


    //need to refactor to check if param past documents/ exists 
    if (currentParam.doc === "constitution") {
        return (
            <div className="documents text-center container">
               <DocNav></DocNav>
                <Outlet></Outlet>
            </div>  
        )
    }

    else {
        return (
            <div className="documents text-center container">
                <h2>US Government Documents</h2>
                <DocNav></DocNav>
                <Outlet></Outlet>
            </div>
        )

    }

}

export default Documents;   