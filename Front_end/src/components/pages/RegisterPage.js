import React from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'

export const RegisterPage = () => {

    return (
        <div className="text-center m-5-auto loginStyle">
            <h5 style={{margin:'auto'}}>Create your personal account</h5>
            <form action="/home">
                <p>
                    <label>Username</label><br/>
                    <input type="text" name="first_name" required />
                </p>
                <p>
                    <label>Email address</label><br/>
                    <input type="email" name="email" required />
                </p>
                <p>
                    <label>Password</label><br/>
                    <input type="password" name="password" requiredc />
                </p>
                <p>
                    <input type="checkbox" name="checkbox" id="checkbox" style={{width:'auto'}} required /> <span>I agree to all statements in <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms of service.</a></span>
                </p>
                <p>
                    <button className='buttonStyle' id="sub_btn" type="submit">Sign Up</button>
                </p>
            </form>
            <footer>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
    )

}
