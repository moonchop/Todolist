import { React } from "react";
import "./item.css";
import Moment from "react-moment";
function Item({ text, onCheck, onDelete }) {
  return (
    <div className="Item">
      <li className="listForms" key={text.id}>
        <div className="listForm">
          <button id="chkBtn" onClick={() => onCheck(text.id, text.text)}>
            ✔
          </button>
          <b id="list">{text.text}</b>
          <button id="delBtn" onClick={() => onDelete(text.id)}>
            ❌
          </button>
        </div>
        <div className="moment">
          <div className="endDate">
            마감시한 : {text.date.getYear() + 1900}-{text.date.getMonth() + 1}-
            {text.date.getDate()} 까지
          </div>
          <div className="leftDate">
            <div>남은시간 : </div>
            <Moment duration={new Date()} date={text.date}></Moment>
          </div>
        </div>
      </li>
    </div>
  );
}

export default Item;
