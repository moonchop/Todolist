import {React,useState,useEffect} from 'react';
import "./head.css"


function Head(){
    const [clock,setClock]=useState("");
    const [fullDate,setFullDate]=useState("")
    

    const date=()=>{
        // const newDay=new Date();
        // const year=newDay.getYear()
        // setFullDate(`${year}`)
        console.log('helo')
    }
    const time=()=>{
        const newDay=new Date();
        const hours=String(newDay.getHours()).padStart(2,"0");
        const minutes=String(newDay.getMinutes()).padStart(2,"0");
        const seconds=String(newDay.getSeconds()).padStart(2,"0");
        console.log('hi')
        setClock(`${hours}:${minutes}:${seconds}`);
    }
    useEffect(() => {
       
        setInterval(time,1000);
        
    }, []);

    
    
    return(
        <div className="head">
            <h1> {clock} </h1>
            <div className="day">{}</div>
            <div className="tasks-left">할 일 2개 남음</div>
        </div>
    )
}

export default Head;