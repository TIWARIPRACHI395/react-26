import React from'react'
import Prachi from "../components/prachi.png"
function First(props){
    return(
    <div className='first'>
        <h1 id="tittle">{props.name}</h1>
        <img  id="img"   srrc={Prachi} alt="Prachi"></img>
        <p id="desc">{props.desc} </p>
    </div>
    )
}
export default First;