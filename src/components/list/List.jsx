import { click } from '@testing-library/user-event/dist/click';
import {React, useRef,useState} from 'react'
import './list.css'

function List(){
    const [text, setText]=useState('');
    const [todo,setTodo]=useState([]);

    const num=useRef(1)
    const onChange=(e)=>{
       setText(e.target.value);
      
    }

    const onReset=()=>{
       if(!text) return;
        setTodo([...todo,
            { 
            id:num.current++,
            text,
            check:false,
            delete:false
            }
        ])
        setText('');
    }
    const onDelete=(id)=>{
        console.log(id)
        setTodo(todo.filter(todo => todo.id!==id))
    }
    const onCheck=()=>{
        console.log("check");
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
                        {todo.map((text,i)=>{
                            return (
                            <li key={i} className='listForm'>
                                <button id="chkBtn" onClick={onCheck}>✔</button>
                                <b id="list">{text.text}</b>
                                <button id="delBtn" onClick={()=>onDelete(text.id)}>❌</button>
                            </li>)
                        })}   

                    </ul>
                </div>

                <div className="Done">
                <div className="Todo">
                    <ul>
                        {todo.map((text,i)=>{
                            return (
                            <li key={i} className= {text.check ? "hidden":'listForm'}>
                                <button id="chkBtn" onClick={onCheck}>✔</button>
                                <b id="list">{text.text}</b>
                                <button id="delBtn" onClick={onDelete}>❌</button>
                            </li>)
                        })}   

                    </ul>
                </div>
                </div>
            </div>
        </div>
    )
}

export default List;