import React from 'react'

const RepNav = ( {rep } ) => {


    return (
        <ul class="nav nav-tabs justify-content-center" id="myTab" role="tablist">
            <li class="nav-item">
                <a class="nav-link active" id="national-tab" data-toggle="tab" href="#national" role="tab" aria-controls="national" aria-selected="true">National</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="state-tab" data-toggle="tab" href="#state" role="tab" aria-controls="state" aria-selected="false">State</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="local-tab" data-toggle="tab" href="#local" role="tab" aria-controls="local" aria-selected="false">Local</a>
            </li>
        </ul>
    )
}

export default RepNav;