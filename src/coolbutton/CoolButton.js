import React from 'react'
import 'bulma/css/bulma.css';

const CoolButton = (props)=>{
    let myClass=''
    if (props.isDanger){
        myClass = myClass + 'is-danger' + ' '
    }
    if(props.className){
        myClass = myClass + props.className + ' '
    }
    if(props.isSmall){
        myClass = myClass+ 'is-small'+' '
    }

    if (props.isSuccess){
        myClass = myClass + 'is-success'+ ' '
    }

    return(
        <div>
            <button className={`button ${myClass}`}>{props.children}</button>
        </div>
    )
}

export default CoolButton