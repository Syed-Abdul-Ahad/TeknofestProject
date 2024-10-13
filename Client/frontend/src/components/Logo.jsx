import React from "react";
function Logo() {
    let logo="https://www.teknofestpakistan.com/wp-content/uploads/2024/09/AMP.png"

    return(
        <img fetchpriority="high" width="150" height="150" sizes="(max-width: 500px) 100vw, 500px" src={logo} alt="Logo" />
       
    )
}

export default Logo;