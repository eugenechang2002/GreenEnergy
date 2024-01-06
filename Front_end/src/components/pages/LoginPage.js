import React, {useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import MyToast from '../MyToast'
import '../../styles/LoginPage.css'
// import '../../App.css'

export const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [showToast, setShowToast] = useState(false)
    const [toastText, setToastText] = useState('')

    const validEmail = (email) => {
        const regexEmail = /^\w+([\.-]?\w+)+@\w+([\.:]?\w+)+(\.[a-zA-Z0-9]{2,3})+$/
    
        return regexEmail.test(email)
      }

    const login = (e) =>
    {
        e.preventDefault();
        if (!email || !password) {
            setShowToast(true)
            setToastText('Please enter both fields')
          }
          else if (!validEmail(email)) {
            setShowToast(true)
            setToastText('Please enter email correctly')
          }
          else{
            axios.post("http://localhost:3001/api/auth/login",{email: email, password: password}).then(async (res) => {
            localStorage.setItem("email", JSON.stringify(email));
            if (res.status === 200) {
              if (res) {
                
                //localStorage.setItem("name", res?.data?.user?.foundUser?.name);
                localStorage.setItem("email", res?.data?.user?.foundUser?.email);
                localStorage.setItem("id", res?.data?.user?.foundUser?._id);
                if(email === "admin@gmail.com") navigate('/admin')
                    else navigate('/home')
              }
            
            }
          }).catch((err) => {
            console.log(err)
            setShowToast(true)
            setToastText('Invalid email/password')
          });
          }
        
    }

    return (
        <div className="text-center m-5-auto loginStyle">
            <h2 style={{marginLeft: "3em"}}>Sign in to us</h2>
            <form>
                <p>
                    <label style={{color: "teal"}}>Enter your email address</label><br/>
                    <input type="email" name="email" required onChange={(e) => { setEmail(e.target.value); }} />
                </p>
                <p>
                    <label style={{color: "teal"}}>Password</label>
                    <br/>
                    <input type="password" name="password" required onChange={(e) => { setPassword(e.target.value); }}/>
                </p>
                <p>
                    <button className='buttonStyle' id="sub_btn" type="submit" onClick={login}>Login</button>
                </p>
                <p>
                  <a href="/register">Sign Up</a>
                </p>
            </form>
            <MyToast show={showToast} handleClose={() => setShowToast(false)} text={toastText} />

        </div>
    )
}