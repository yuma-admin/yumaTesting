import React, { useEffect } from 'react'
// import {useParams} from 'react-router-dom'
// import {useHistory} from 'react-router-dom'

function DeepLink() {
    // const {id} = useParams()
    // useEffect(() => {

    

    const script = document.createElement("script");

    script.src = `https://api.iheartjane.com/v1/stores/3456/embed.js`;
    script.async = true;

    const deepLinkScript = document.createElement("script");

    deepLinkScript.src = `var getParams = function (url) {
        var params = {};
        var parser = document.createElement('a');
        parser.href = url;
        var query = parser.search.substring(1);
        var vars = query.split('&');
        params['path'] = '';
        for (var i = 0; i < vars.length; i++) {
            console.log(vars[i]);
            vars[i] = vars[i].replace("%3D","=");
            vars[i] = vars[i].replace("%3F","?");
            vars[i] = vars[i].replace("%2F","/").replace("%2F","/");
            if(vars[i].includes("path=") || vars[i].includes("refinementList") || vars[i].includes("query"))
            {   console.log(params['path']);        
                var pair = vars[i].split('=');
                if(pair.length == 3) {
                    params['path'] += pair[0] + '=' + pair[1] + '=' + pair[2];
                }
                else if(pair.length == 2){
                    if(!vars[i].includes("path=")) {
                        params['path'] += pair[0] + '=' + pair[1];
                    }
                    else {
                    params['path'] += pair[1];
                    }
                }
                else {
                    params['path'] += pair[1];
                }
                params['path'] += '&'
            }
        }
        return params;
    };
    var baseURL = "https://www.iheartjane.com/embed/stores/3456/";
    var params = getParams(window.location.href);
    if(params['path']){
        console.log(params);
        var newSrc = baseURL + params['path'];
        document.getElementById('jane-menu').src = newSrc;
    }`;
    deepLinkScript.async = true;

    document.body.appendChild(script);


    // });

    return(
        <>
        <div className="container-fluid">
          {/* <div onClick={backClick} className="menuBackButtonBar">Back</div> */}
    
          <div class="test" id="jane-frame-script"></div>
        </div>
        </>
      )

  };



export default DeepLink
