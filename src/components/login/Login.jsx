import './style.css'
import chat from '../../imagenes/chat.svg'
import google from "../../imagenes/icon-google.png"
import facebook from "../../imagenes/facebook-white.png"
import {Link} from 'react-router-dom'

function Login() {
    return(
        <div className='container'>
            <img src={chat} alt="icon"/>
            <h1 className='tcenter'>Chat Marc</h1>
            <form className='tcenter' >
                <fieldset>
                    <input type="email" name="email" id="email" placeholder='Enter your email' className='tcenter inputs'/>
                </fieldset>
                
                <fieldset>
                    <input type="password" name="password" id="password" placeholder='Enter your password' className='tcenter inputs'/>
                </fieldset>
                <fieldset className='check'>
                    <input type="checkbox" name="remember" id="remember"/>
                    <label htmlFor="remember">remember me</label>
                </fieldset>
                <input type="button" value="login" className='login noneOutline'/>
            </form>
            <button className='signWithe noneOutline'><img src={google} alt="icon-google"  className='pngGoogle'/>Sign in Google</button>
            <button className='signWithe noneOutline'><img src={facebook} alt="icon-google"  className='pngGoogle'/>Sign in facebook</button>
            <div className='tcenter'>
            <Link to='/register' className='block mb10'>Don't have an account? Sign Up</Link>
            <Link to='/register'>Forgot password?</Link>
            </div>
            <footer>
                <div>
                    <a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Licencia de Creative Commons" src="https://i.creativecommons.org/l/by/4.0/88x31.png"/></a>
                </div>
                <div>
                    Este obra está bajo una 
                    <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">licencia de Creative Commons Reconocimiento 4.0 Internacional</a>
                </div>
            </footer>
        </div>
    )
}
export default Login