import {React, useRef,useState} from 'react';
import Moment from 'react-moment';
import 'moment/locale/ko';
import './list.css'
import Time from '../time/Time';

function List(props){


    
    const [text, setText]=useState('');
    const [todo,setTodo]=useState([]);
    const [done,setDone]=useState([]);
    const [end,setEnd]=useState(0);
    let check_date; //check할 때, 해당하는 항목의 남은 시간을 저장하는 변수 
    // Time에서 받아온 endData
    const endDate=(number)=>{
        if(number!==0) {
            setEnd(number)
          
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
            date:end
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
        
        setTodo(todo.filter(todo => {
            if(todo.id===id) check_date=todo.date;
            return todo.id!==id
        })) //List layout에서 click한 li빼고 나타냄
        if(todo.map(todo =>todo.id===id)){ //done layout에 나타내기 위해 done usestate에 값 삽입
            setDone([...done,
                {
                    id:id,
                    text:text,
                    date:check_date,


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
        setDone(done.filter(done => {
            if(done.id===id) check_date=done.date;
            return done.id!==id
        })) //done layout에서 click한 li빼고 나타냄
        if(done.map(done =>done.id===id)){ //todo usestate에 값 삽입
            setTodo([...todo,
                {
                    id:id,
                    text:text,
                    date:check_date,

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
                            <li key={i} className="listForms">
                                <div className="listForm">
                                    <button id="chkBtn" onClick={()=>onCheck(text.id,text.text)}>✔</button>
                                    <b id="list">{text.text}</b>
                                    <button id="delBtn" onClick={()=>onDelete(text.id)}>❌</button>
                                </div>
                                <div className="moment">
                                    <div className="endDate">마감시한 : {text.date.getYear()+1900}-{text.date.getMonth()+1}-{text.date.getDate()} 까지</div>
                                    <div className='leftDate'>
                                        <div>남은시간 :</div>
                                        <Moment duration={new Date()} date={text.date}></Moment>(<div>{'접수중'}</div>)
                                    </div>
                                </div>
                            </li>
                            
                            
                            )
                        })}   

                    </ul>
                </div>

                
                <div className="Done">
                    <ul>
                        {done.map((text,i)=>{
                            return (
                                <li key={i} className="listForms">
                                <div className="listForm">
                                    <button id="chkBtn" onClick={()=>onCheck_done(text.id,text.text)}>✔</button>
                                    <b id="list">{text.text}</b>
                                    <button id="delBtn" onClick={()=>onDelete_done(text.id)}>❌</button>
                                </div>
                                <div className="moment">
                                    <div className="endDate">마감시한 : {text.date.getYear()+1900}-{text.date.getMonth()+1}-{text.date.getDate()} 까지</div>
                                </div>
                            </li>
                            )
                        })}   

                    </ul>
              
                </div>
            </div>

            
        </div>
    )
}

export default List;