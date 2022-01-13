import {React,useState,useEffect} from 'react';
import "./head.css"


function Head(){
    const [clock,setClock]=useState([]);
    const test=()=>{
        const date=new Date();
        const day=date.getSeconds();
        setClock(day);
    }
    

    setInterval(test,1000)
    return(
        <div className="head">
            <h1> {clock} </h1>
            <div className="day">수요일</div>
            <div className="tasks-left">할 일 2개 남음</div>
        </div>
    )
}

export default Head;