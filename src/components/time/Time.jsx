import { React, useState, useEffect } from "react";
import "./time.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Time({ getDate }) {
  const [endDate, setEndDate] = useState(0);

  useEffect(() => {
    getDate(endDate);
  }, [endDate]);
  return (
    <div>
      <DatePicker
        selected={endDate}
        onChange={(date) => setEndDate(date)}
        dateFormat="종료일 : yyyy-MM-dd"
        placeholderText="날짜 선택"
        minDate={new Date()}
        className="form"
      />
    </div>
  );
}
export default Time;
