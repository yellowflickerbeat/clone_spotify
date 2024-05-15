import React from 'react';
import './Login.css';
import { loginUrl } from "./spotify";




function Login() {
    return(
    <div className="login">
        <img src="https://e1.pxfuel.com/desktop-wallpaper/729/905/desktop-wallpaper-spotify-neon-icon-spotify-logo.jpg" 
        alt="my alternative"/>
        
        <a href={loginUrl}>LOGIN</a>
        
    </div>
    );
}

export default Login;