import {React,useState} from 'react'
import './list.css'

function List(){
    const [text, setText]=useState('');
    const [enter,setEnter]=useState([]);

    const onChange=(e)=>{
       setText(e.target.value);
      
    }

    const onReset=(e)=>{
        setEnter([...enter, text])
        setText('');
    }
    const onDelete=()=>{
        console.log("del");
    }
    return(
        <div className='List'>
            <div className='input'>
                <input id="textinput" type="text" placeholder='입력하세요' value={text} onChange={onChange} onKeyPress={(e)=>{if(e.key==='Enter')onReset()}}></input>
                <button id="textbtn" onClick={onReset} className="inputBtn" >✅</button>
            </div>
            <div className="container">
                <div className="Todo">
                    <ul>
                        {enter.map((text,i)=>{
                            return (
                            <div key={i} className='listForm'>
                                <button id="listBtn" onClick={onDelete}>❌</button>
                                <li id="list">{text}</li>
                            </div>)
                        })}   

                    </ul>
                </div>

                <div className="Done">
                    <h1>Done</h1>
                </div>
            </div>
        </div>
    )
}

export default List;