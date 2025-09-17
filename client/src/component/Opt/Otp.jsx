import React, { useRef, useState } from "react";


const Otp = () => {
  const [otp, setOtp] = useState(Array(6).fill(''));
  const inputRef = useRef([]);


  const handlechange=(value,index)=>{
    if(!isNaN(value)){
      const newOpt = [...otp];
      newOpt[index] = value;
      setOtp(newOpt);

    }

     if (value && index < otp.length - 1) {
      inputRef.current[index + 1].focus();
      }
  }
  return (
    <div>
      <h1>Otp component</h1>
      {otp.map((digit, index) => {
        return (
          <>
            <input
            value={digit}
            id={`otp-${index}`}
            maxLength="1"
            onChange={(e)=>{handlechange(e.target.value,index)}}
            ref={(el) => (inputRef.current[index] = el)}
            
             type="text"className="w-12 h-12 text-center border rounded-lg text-xl focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          </>
        );
      })}
    </div>
  );
};

export default Otp;
