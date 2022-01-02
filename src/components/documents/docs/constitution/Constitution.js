import React, { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Pills from './Pills'
import Content from './Content'
const Constitution = () => {

    const [usConstitution, setUsConstition] = useState({})

    return (
        <div className="Constitution">
            <hr />

            <div class="row mt-4">

                <div class="col-12 col-sm-3">
                </div>
                <div class="col-12 col-sm-9">
                <h2>United States Constitution</h2>
                </div>

                <div class="col-12 col-sm-3">
                   <Pills />
                </div>
                <div class="col-12 col-sm-9">

                <Content />
  
                </div>
            </div>
        </div>
    )
}

export default Constitution;