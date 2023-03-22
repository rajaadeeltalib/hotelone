"use client";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../../app/datepicker.css";
import { BsCalendar } from "react-icons/bs";

const CheckIn: React.FC = () => {
  const [startDate, setStartDate] = useState<any>(false);

  return (
    <div className="relative flex items-center h-full justify-end">
      {/* icon */}
      <div className="absolute z-10 pr-8">
        <div>
          <BsCalendar className="text-accent text-base"/>
        </div>
      </div>
      <DatePicker className="w-full h-full"
      selected={startDate}
      placeholderText="Check in"
      onChange={(date)=> setStartDate(date)} />
    </div>
  );
};

export default CheckIn;
