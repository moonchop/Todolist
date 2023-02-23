import React, { useEffect, useRef, useState } from "react";
import "moment/locale/ko";
import "./list.css";
import Time from "../time/Time";
import Head from "../head/Head";
import { FiCheckCircle } from "@react-icons/all-files/fi/FiCheckCircle";
import Item from "../../pages/item/Item";
import { useMemo } from "react";
export interface TodoType {
  id: number;
  text: string;
  date?: number;
}
function List() {
  const [text, setText] = useState("");
  const [todo, setTodo] = useState<TodoType[]>([]);
  const [done, setDone] = useState<TodoType[]>([]);
  const [end, setEnd] = useState(0);
  let check_date: any; //check할 때, 해당하는 항목의 남은 시간을 저장하는 변수
  // Time에서 받아온 endData
  const endDate = (number: number) => {
    if (number !== 0) {
      setEnd(number);
    }
  };
  const num = useRef(1);
  const onChange = (e: any) => {
    setText(e.target.value);
  };
  //List 추가
  const onAdd = () => {
    if (!text || end === 0) return;
    setTodo([
      ...todo,
      {
        id: num.current++,
        text,
        date: end,
      },
    ]);
    setText("");
  };
  //List 삭제
  const onDelete = (id: number) => {
    setTodo(todo.filter((todo) => todo.id !== id));
  };
  //List Check 기능

  const onCheck = ({ id, text }: TodoType) => {
    setTodo(
      todo.filter((todo) => {
        if (todo.id === id) check_date = todo.date;
        return todo.id !== id;
      })
    ); //List layout에서 click한 li빼고 나타냄
    if (todo.map((todo) => todo.id === id)) {
      //done layout에 나타내기 위해 done usestate에 값 삽입
      setDone([
        ...done,
        {
          id: id,
          text: text,
          date: check_date,
        },
      ]);
    }
  };

  //Done layout 의 Delete
  const onDelete_done = (id: number) => {
    setDone(done.filter((done) => done.id !== id));
  };
  //Done layout 의 check : List layout으로 되돌아감.
  const onCheck_done = ({ id, text }: TodoType) => {
    setDone(
      done.filter((done) => {
        if (done.id === id) check_date = done.date;
        return done.id !== id;
      })
    ); //done layout에서 click한 li빼고 나타냄
    if (done.map((done) => done.id === id)) {
      //todo usestate에 값 삽입
      setTodo([
        ...todo,
        {
          id: id,
          text: text,
          date: check_date,
        },
      ]);
    }
  };

  const todoList = useMemo(
    () => (
      <ul>
        {todo.map((text) => {
          return (
            <Item
              text={text}
              onCheck={onCheck}
              onDelete={onDelete}
              key={text.id}
            />
          );
        })}
      </ul>
    ),
    [todo]
  );
  const doneList = useMemo(
    () => (
      <ul>
        {done.map((text) => {
          return (
            <Item
              text={text}
              onCheck={onCheck_done}
              onDelete={onDelete_done}
              key={text.id}
            />
          );
        })}
      </ul>
    ),
    [done]
  );
  return (
    <div className="List">
      <Head leftList={todo.length}></Head>
      <div className="input">
        <input
          id="text-input"
          type="text"
          placeholder="입력하세요"
          value={text}
          onChange={onChange}
          onKeyDown={(e) => {
            if (e.key === "Enter") onAdd();
          }}
        />
        <div id="select-date">
          <Time getDate={endDate} />
        </div>
        <div id="set-btn" className="buttons" onClick={onAdd}>
          <FiCheckCircle
            size={30}
            style={{
              stroke: "black",
              strokeWidth: "1",
            }}
          />
        </div>
      </div>

      <div className="container">
        <div className="Todo">
          <span className="formTitle">Todo</span>
          {todoList}
        </div>
        <div className="Done">
          <span className="formTitle">Done</span>
          {doneList}
        </div>
      </div>
    </div>
  );
}

export default List;
