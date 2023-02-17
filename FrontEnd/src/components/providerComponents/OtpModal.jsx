import React from 'react'
import { AiFillCloseCircle } from 'react-icons/ai';
import OtpInput from "react18-input-otp";


const OtpModal = ({ visible, onClose }) => {

    const handleOnClose = (e) => {
        if(e.target.id ==="container") onClose()
     };
 
     if (!visible) return null;
 
 
     const [otp, setOtp] = useState("");
     
   const handleChange = (enteredOtp) => {
     setOtp(enteredOtp);
   };
   const [error, setError] = useState(false);
   const otpSentButtonHandler = () => {
     if (otp.length < 4) {
       console.log("invalid otp");
       setError(true);
     } else {
       setError(false);
       console.log("it is working with otp", otp);
     //   navigate(-1);
     }
   };
 
   const otpResendHandler = () => {
     console.log(userData);
   };

  return (
    <div id='container' onClick={handleOnClose} className='fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center'>

              <div className='bg-white w-[500px] h-[500px] flex flex-col rounded-3xl m-2'>
                  <div className='flex flex-row-reverse text-4xl p-4 border-b-2 border-black'>
                      <button onClick={onClose} ><AiFillCloseCircle/></button>
              </div>
              <div className='h-full w-full flex items-center justify-center flex-col'>
                  <h1 className='text-3xl font-medium mb-8'>Enter OTP</h1>
                  <OtpInput
                       value={otp}
                       onChange={handleChange}
                       separator={<span className="p-4 shadow-2xl"> </span>}
                       inputStyle="md:text-7xl text-4xl shadow-2xl border-2   rounded-xl"
                       numInputs={4}
                       isInputNum={true}
                  >

                  </OtpInput>
                  {error && <p className="text-red-600 text-xl pt-5">invalid otp</p>}
                  <p
        className="text-xl text-right w-[65%] cursor-pointer underline mt-5"
        onClick={otpResendHandler}
      >
        Resend Otp ?
      </p>
                  <button  onClick={otpSentButtonHandler} className='bg-green-500 hover:bg-green-600 rounded-3xl h-16 w-[60%] text-lg font-medium mt-6 p-4 uppercase'>done</button>
              </div>
              </div>


    </div>
  )
}

export default OtpModal