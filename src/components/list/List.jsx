import { click } from '@testing-library/user-event/dist/click';
import {React, useRef,useState} from 'react'
import './list.css'

function List(){
    const [text, setText]=useState('');
    const [todo,setTodo]=useState([]);
    const [done,setDone]=useState([]);

    const num=useRef(1)
    const onChange=(e)=>{
       setText(e.target.value);
      
    }

    const onAdd=()=>{
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
        
        setTodo(todo.filter(todo => todo.id!==id))
    }
    const onDelete_done=(id)=>{
        
        setDone(done.filter(done => done.id!==id))
    }
    const onCheck=(id,text)=>{
        
        setTodo(todo.filter(todo => todo.id!==id))
        if(todo.map(todo =>todo.id===id)){
            setDone([...done,
                {
                    id:id,
                    text:text,
                    check:true,
                    delete:false
                }]
                )
        }
    }
    return(
        <div className='List'>
            <div className='input'>
                <input id="textinput" type="text" placeholder='입력하세요' value={text} onChange={onChange} onKeyPress={(e)=>{if(e.key==='Enter')onAdd()}}></input>
                <button id="textbtn" onClick={onAdd} className="inputBtn" >✅</button>
            </div>
            <div className="container">
                <div className="Todo">
                    <ul>
                        {todo.map((text,i)=>{
                            return (
                            <li key={i} className='listForm'>
                                <button id="chkBtn" onClick={()=>onCheck(text.id,text.text)}>✔</button>
                                <b id="list">{text.text}</b>
                                <button id="delBtn" onClick={()=>onDelete(text.id)}>❌</button>
                            </li>)
                        })}   

                    </ul>
                </div>

                <div className="Done">
                <div className="Todo2">
                    <ul>
                        {done.map((text,i)=>{
                            return (
                            <li key={i} className= 'listForm'>
                                <button id="chkBtn_done"></button>
                                <b id="list">{text.text}</b>
                                <button id="delBtn" onClick={()=>onDelete_done(text.id)}>❌</button>
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