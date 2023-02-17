
import React, { useState } from 'react'
import { FcGoogle} from 'react-icons/fc'
import { useNavigate } from 'react-router-dom'

import OtpModal from '../../components/providerComponents/OtpModal'


const ProviderSignup = () => {

  const[OtpModal,setOtpModal] = useState(false)
  const addServiceClose = () => setOtpModal(false)

    const navigate = useNavigate()
    const loginHandle = () =>{
        navigate("/providerlogin")
    }

    const [providerData, setProviderData] = useState({
      companyName:"",
      description:"",
      services:"",
      place:"",
      phone:"",
      email:"",
      password:""

    })

    const [image, setImage] = useState("")

    const[validate, setValidate] = useState({
      companyName:{
        status:true,
        message:""
      },
      description:{
        status:true,
        message:""
      },
      services:{
        status:true,
        message:""
      },
      place:{
        status:true,
        message:""
      },
      phone:{
        status:true,
        message:""
      },
      email:{
        status:true,
        message:""
      },
      password:{
        status:true,
        message:""
      },
      signOutError:{
        status:true,
        message:""
      }
      
    })

    const valueSetting = (e)=>{
      setProviderData((prevState )=>({
        ...prevState,
        [e.target.name]: e.target.value
      }));
    };

    const nameCheck = () =>{
      if(providerData.companyName.length < 3) {
        setValidate((prevState)=>({
          ...prevState,
          companyName:{
            value:false,
            message:"name must be more than 3 character"
          }
        }));
        return false
      }else{
        setValidate((prevState) =>({
          ...prevState,
          companyName:{
            value:true,
            message:""
          }
        }))
        return true
      }
    }


    const descriptionCheck = () =>{
      if(providerData.description==""){
        setValidate((prevState) =>({
          ...prevState,
          description:{
            value:false,
            message:"description must be fill"
          }
        }))
        return false
      }else{
        setValidate((prevState) =>({
          ...prevState,
          description:{
            value:true,
            message:""
          }
        }))
        return true
      }
    }

    const servicesCheck = () =>{
      if(providerData.services==''){
        setValidate((prevState)=>({
          ...prevState,
          services:{
            value:false,
            message:"select one category"
          }
        }))
        return false
      }else{
        setValidate((prevState) =>({
          ...prevState,
          services:{
            value:true,
            message:""
          }
        }))
        return true
      }
    }

    const placeCheck = ()=>{
      if(providerData.place==''){
        setValidate((prevState)=>({
          ...prevState,
          place:{
            value:false,
            message:"select one place"
          }
        }))
        return false
      }else{
        setValidate((prevState)=>({
          ...prevState,
          place:{
            value:true,
            message:""
          }
        }))
        return true
      }
    }

    const emailCheck =()=>{
      const validRegex =   /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if(!providerData.email.match(validRegex)){
        setValidate((prevState)=>({
          ...prevState,

          email:{
            value:false,
            message:"is this  a correct email"
          }
        }))
        return false
      }else{
        setValidate((prevState)=>({
          ...prevState,
          email:{
            value:true,
            message:""
          }

        }))
        return true
      }
    }

    const phoneCheck = () =>{
      const Regex = /^(91)?[0-9]{10}$/;
      if(!providerData.phone.match(Regex)){
        setValidate((prevState)=>({
          ...prevState,
          phone:{
            value:false,
            message:"Enter correct phoneNumber"
          }
        }))
        return false
      }else{
        setValidate((prevState)=>({
          ...prevState,
          phone:{
            value:true,
            message:""
          }

        }))
        return true
      }
    }

    const passwordCheck =() =>{
      if(providerData.password.length<8){
        setValidate((prevState)=>({
          ...prevState,
          password:{
            value:false,
            message:"password must be more than 8 character"
          }
        }))
        return false
      }else{
        setValidate((prevState)=>({
          ...prevState,
          password:{
            value:true,
            message:""
          }
        }))
        return true;
      }
    }

  return (
    <div className='w-full h-full grid lg:grid-cols-3 md:grid-cols-5 bg-white'>
    <div className='md:col-span-2 lg:col-span-1 flex flex-col items-center justify-center mb-20'>
        <h1 className='font-Viaoda text-7xl mb-10 mt-20'>Signup</h1>
        <input type="text" name='companyName'  placeholder='Company Name' className='w-[90%] h-20 mt-10 text-3xl border-2 border-black rounded-3xl text-center' />
        <textarea name="description" placeholder='Description' id="" className='w-[90%] max-h-40 mt-10 text-3xl border-2 border-black rounded-3xl text-center show-scrollbar'></textarea>
        <select name="services"  id="" className='w-[90%] h-20 mt-10 text-3xl border-2 border-black rounded-3xl text-center'>
        <option value="">-- Choose a category --</option>
          <option value="">Wedding planning</option>
          <option value="">Travels</option>
          <option value="">Photography</option>
        </select>

        <select name="" id="" className='w-[90%] h-20 mt-10 text-3xl border-2 border-black rounded-3xl text-center'>
          <option value="#">-- Choose your place --</option>
                              <option value="Alappuzha" >Alappuzha</option>
                              <option value="Ernakulam">Ernakulam</option>
                              <option value="Idukki">Idukki</option>
                              <option value="Kannur">Kannur</option>
                              <option value="Kasaragod">Kasaragod</option>
                              <option value="Kollam">Kollam</option>
                              <option value="Kottayam">Kottayam</option>
                              <option value="Kozhikode">Kozhikode</option>
                              <option value="Malappuram">Malappuram</option>
                              <option value="Palakkad">Palakkad</option>
                              <option value="Pathanamthitta">Pathanamthitta</option>
                              <option value="Thiruvananthapuram">Thiruvananthapuram</option>
                              <option value="Thrissur">Thrissur</option>
                              <option value="Wayanad">Wayanad</option>
                          </select>

        <input type="text" name='Phone' value='' placeholder='Phone' className='w-[90%] h-20 mt-10 text-3xl border-2 border-black rounded-3xl text-center'/>
        <input type="email" name='email' value='' placeholder='Email' className='w-[90%] h-20 mt-10 text-3xl border-2 border-black rounded-3xl text-center' />
        <input type="password" name='email' value='' placeholder='Password' className='w-[90%] h-20 mt-10 text-3xl border-2 border-black rounded-3xl text-center' />
        <input type="file" name='certificate' aria-label='Gov.Approved Certificate' className='w-[90%] h-20 mt-10 text-3xl border-2 border-black rounded-3xl text-center' />
        <label htmlFor="file">Gov.Approved Certificate</label>
        <input type="file" name='certificate' placeholder='Gov.Approved Certificate' className='w-[90%] h-20 mt-10 text-3xl border-2 border-black rounded-3xl text-center' />
        <label htmlFor="file">Choose your logo</label>
        <button className='w-[60%] h-20 mt-10 text-3xl font-semibold border-2 border-black rounded-3xl text-center'>Signup</button>
        <p className='mt-5'>Already a member?<a className='text-blue-900 font-semibold cursor-pointer' onClick={loginHandle}>Login</a></p>
        <button className='w-[60%] h-20 mt-10 flex flex-row items-center pl-3 text-2xl font-medium border-2 border-black rounded-3xl text-center'><span className='w-[20%] h-20 flex items-center justify-center'><FcGoogle/></span>Login with google</button>
    </div>
    <div className='hidden md:flex items-center flex-col md:col-span-3 lg:col-span-2 sticky'>
        <img src="plogin.jpg" alt="LOGIN" className='w-[100%] top-1 sticky' />
        <h1 className='font-Viaoda text-7xl text-blank-500  top-2/3  bottom-64 sticky'>Make everything easy</h1>
    </div>


</div>
  )
}

export default ProviderSignup