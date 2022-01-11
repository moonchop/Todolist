import {React, useRef,useState} from 'react';
import './list.css'
import Time from '../time/Time';
function List(props){
    const [text, setText]=useState('');
    const [todo,setTodo]=useState([]);
    const [done,setDone]=useState([]);
    const [end,setEnd]=useState(0);
    // Time에서 받아온 endData
    const endDate=(number)=>{
        if(number!==0) {console.log(number.getDate())
        setEnd(number.getDate())
        }
    }

    const num=useRef(1)
    const onChange=(e)=>{
       setText(e.target.value);

    }
    //List 추가
    const onAdd=()=>{
       if(!text || end===0) return;
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
    //List 삭제
    const onDelete=(id)=>{
        setTodo(todo.filter(todo => (todo.id!==id)))
     
     
    }
    //List Check 기능
    const onCheck=(id,text)=>{
        
        setTodo(todo.filter(todo => todo.id!==id)) //List layout에서 click한 li빼고 나타냄
        if(todo.map(todo =>todo.id===id)){ //done layout에 나타내기 위해 done usestate에 값 삽입
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
    //Done layout 의 Delete
    const onDelete_done=(id)=>{
        
        setDone(done.filter(done => done.id!==id))
    }
     //Done layout 의 check : List layout으로 되돌아감.
    const onCheck_done=(id,text)=>{
        setDone(done.filter(done => done.id!==id)) //done layout에서 click한 li빼고 나타냄
        if(done.map(done =>done.id===id)){ //todo usestate에 값 삽입
            setTodo([...todo,
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
                <Time id="datebtn" getDate={endDate}/>
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
                    <ul>
                        {done.map((text,i)=>{
                            return (
                            <li key={i} className= 'listForm'>
                                <button id="chkBtn" onClick={()=>onCheck_done(text.id,text.text)}>✔</button>
                                <b id="list">{text.text}</b>
                                <button id="delBtn" onClick={()=>onDelete_done(text.id)}>❌</button>
                            </li>)
                        })}   

                    </ul>
              
                </div>
            </div>

            
        </div>
    )
}

export default List;