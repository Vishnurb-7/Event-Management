import React, { useState,useRef, useEffect } from 'react'
import { FcGoogle} from 'react-icons/fc'
import { useNavigate } from 'react-router-dom'
import axios from '../utils/axios'

import setUpRecaptcha from '../UserAuth'

const EMAIL_REGEX =   /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const MOBILE_REGEX = /^[0-9]{10}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const MOBILE_URL = "/mobileExist"
const SIGNUP_URL = '/signup'


const Signup = () => {
  
  const emailRef = useRef()
  
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  
  const [mobile, setMobile] = useState("");
  const [validMobile, setValidMobile] = useState(true);
  
  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);

  const [confirm,setConfirm] = useState('')

  const [otp,setOtp] = useState('')


  const [success,setSuccess] = useState(false)

  const [err,setErr] = useState('')
  
  const navigate = useNavigate()

  useEffect(()=>{
    emailRef.current.focus()
  },[]);

  useEffect(()=>{
    setErr('')
  },[email,mobile,pwd])

  useEffect(() => {
    const result = EMAIL_REGEX.test(email);
    console.log(result);
    console.log(email)
    setValidEmail(result);
  }, [email]);

  useEffect(() => {
    const result = MOBILE_REGEX.test(mobile);
    console.log(result);
    console.log(mobile);
    setValidMobile(result);
  }, [mobile]);

  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    console.log(result);
    console.log(pwd);
    setValidPwd(result);
  }, [pwd]);



  const loginHandle = ()=>{
    navigate("/login")
  }

  const handleSignUp = async () =>{
    const v1 = EMAIL_REGEX.test(email);
    const v2 = MOBILE_REGEX.test(mobile);
    const v3 = PWD_REGEX.test(pwd);

    if(!v1 || !v2 || !v3){
      setErr('invalid entry')
      return;
    }

    try {
        await axios.post(MOBILE_URL,JSON.stringify({mobile}), {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      console.log(mobile)
      const otpResponse = await setUpRecaptcha("+91" + mobile);
      setConfirm(otpResponse);
      setSuccess(true);
    } catch (error) {
      console.log(error.code )
      console.log(error.message)
      if(error.code === "auth/argument-error"){
        setErr("Mobile Number you entered isn't available")
      } else if(error.response?.status === 409) {
        setErr("mobile already taken");
      } else{
        setErr('complete captcha');
      }
    }
  }

  const handleOTP = async () => {
    if (!otp) {
      setErr("Invalid OTP");
      return;
    }
    try {
      await confirm.confirm(otp).then(async () => {
        await axios.post(SIGNUP_URL,JSON.stringify({ email: email, mobile, password: pwd }),
          {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
          }
        );
        setEmail("");
        setMobile("");
        setPwd("");
        navigate("/login");
      });
    } catch (error) {
      console.log(error.message);
      if("Firebase: Error (auth/invalid-verification-code)."=== error.message){
        setErr('Invalid OTP')
      }
      else if (!error?.response) {
        setErr("no server response");
      } else if (error.response?.status === 409) {
        setErr("Mobile already registered");
      } else {
        setErr("registration failed");
      }
    }
  };

  return (
    <div>
      <div className='w-full h-[1007px] grid lg:grid-cols-3 md:grid-cols-5 bg-white'>
      {!success ? (
        <div className='md:col-span-2 lg:col-span-1 flex flex-col items-center justify-center'>
        <h1 className='font-Viaoda text-7xl mb-8'>Signup</h1>
        {err && <p className='text-red-600 font-semibold text-2xl'>{err}</p>}
        <input ref={emailRef} onChange={e=>setEmail(e.target.value)} type="email" name='email' value={email} placeholder='Email' className='w-[90%] h-20 mt-10 text-3xl border-2 border-black rounded-2xl text-center' />
        {!validEmail && email && <p className='text-red-600 italic text-2xl'>type valid email</p>}
        <input onChange={e=>setMobile(e.target.value)} type="number" name='Phone' autoComplete='off' value={mobile} placeholder='Phone' className='w-[90%] h-20 mt-10 text-3xl border-2 border-black rounded-2xl text-center'/>
        {!validMobile && mobile && <p className='text-red-600 italic text-2xl'>type valid mobile</p>}
        <input onChange={e=>setPwd(e.target.value)} type="password" name='password' value={pwd} placeholder='Password' className='w-[90%] h-20 mt-10 text-3xl border-2 border-black rounded-2xl text-center '/>
        {!validPwd && pwd && <p className='text-red-600 italic text-2xl'>type valid password</p>}
        <div id='recaptcha-container'></div>
        <button onClick={handleSignUp} className='w-[60%] h-20 mt-10 text-3xl font-semibold border-2 border-black rounded-3xl text-center '>Signup</button>
        <p className='mt-5'>Already a member?<a className='text-blue-900 font-semibold cursor-pointer' onClick={loginHandle}>Login</a></p>
        <button className='w-[60%] h-20 mt-10 flex flex-row items-center pl-3 text-2xl font-medium border-2 border-black rounded-2xl text-center'><span className='w-[20%] h-20 flex items-center justify-center'><FcGoogle/></span>Login with google</button>
    </div>
      ) : (
        <div className='md:col-span-2 lg:col-span-1 flex flex-col items-center justify-center'>
        <h1 className='font-Viaoda text-7xl mb-8'>ENTER YOUR OTP</h1>
          {err && <p className='text-red-600 font-semibold text-2xl'>{err}</p>}
          <input type='number' value={otp} onChange={e=>setOtp(e.target.value)} name='otp' placeholder='enter your OTP' className='w-[90%] h-20 mt-10 text-3xl border-2 border-black rounded-2xl text-center'  />
          <button onClick={handleOTP} className='w-[60%] h-20 mt-10 text-3xl font-semibold border-2 border-black rounded-3xl text-center uppercase'>confirm</button>
          </div>
      ) }
   
    <div className='hidden md:flex items-center flex-col md:col-span-3 lg:col-span-2'>
        <img src="../../public/logi.jpg" alt="LOGIN" className='w-[75%]' />
        <h1 className='font-Viaoda text-7xl text-black-500 absolute top-2/3'>Make everything easy</h1>
    </div>


</div>
    </div>
  )
}

export default Signup