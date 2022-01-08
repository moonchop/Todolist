import React from 'react';
import "./head.css"


function Head(){
    return(
        <div className="head">
            <h1>2021년 02월 03일</h1>
            <div className="day">수요일</div>
            <div className="tasks-left">할 일 2개 남음</div>
        </div>
    )
}

export default Head;