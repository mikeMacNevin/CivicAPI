import React, {useContext, useDebugValue, useEffect, useState, Fragment} from 'react'
import GoogleCivicContext from '../../../context/civic/googleCivicContext'





 const Twitter = ( props ) => {

    console.log(props.twitter)
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://platform.twitter.com/widgets.js";
        document.getElementsByClassName("twitter-embed")[0].appendChild(script);
      }, []);
    
      return (
        <section className="twitterContainer mt-3 pt-3">
          <div className="twitter-embed">
            <a
              className="twitter-timeline"
              data-theme="light"
              data-tweet-limit="5"
              data-chrome="noheader nofooter noborders"
              href={props.twitter}
            >
            </a>
          </div>
        </section>
      )

 }


 export default Twitter;