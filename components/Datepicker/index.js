import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";



export default function Datepicker  ({setStartDate, startDate}) {
   return (
    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
  );
};