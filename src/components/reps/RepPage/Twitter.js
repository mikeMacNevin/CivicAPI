import React, {useContext, useDebugValue, useEffect, useState, Fragment} from 'react'
import GoogleCivicContext from '../../../context/civic/googleCivicContext'


 const Twitter = ( props ) => {

    useEffect(() => {
      // let twitter_embed = document.getElementById("twitter-embed")

      // if (
      //   (twitter_embed.getElementsByTagName('script')[0] != null) 
      // && (twitter_embed.getElementsByTagName('iframe')[0] != null)
      //     ){
      //   let twitterTemp = twitter_embed.getElementsByTagName('script')[0]
      //   let twitterIframe = twitter_embed.getElementsByTagName('iframe')[0]
      //   console.log('twitterTemp:' + twitterTemp)

      //   twitter_embed.removeChild(twitterTemp)
      //   twitter_embed.removeChild(twitterIframe)
      // }

      const script = document.createElement("script");
      script.src = "https://platform.twitter.com/widgets.js";
      
      document.getElementById("twitter-embed").appendChild(script);






      }, [props.twitter]);
  
      return (
        <section className="twitterContainer mt-3 pt-3">
          <div id="twitter-embed">
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