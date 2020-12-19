import {Link} from 'react-router-dom'

function Register({chat, google, facebook}) {
    return(
        <>
            <div className='container'>
                    <img src={chat} alt="icon"/>
                    <h1 className='tcenter'>Sign Up</h1>
                    <form className='tcenter' >
                        <fieldset>
                            <input type="email" name="email" id="email" placeholder='Enter your email' className='tcenter inputs'/>
                        </fieldset>
                        
                        <fieldset>
                            <input type="password" name="password" id="password" placeholder='Enter your password' className='tcenter inputs'/>
                            <input type="password" name="password" id="password" placeholder='Confirm your password' className='tcenter inputs'/>
                        </fieldset>  
                        <input type="button" value="Sign In" className='login noneOutline'/>
                    </form>
                    <div className='twoColumns'>
                        <button className='signWithe noneOutline'><img src={google} alt="icon-google"  className='pngGoogle'/>Sign in Google</button>
                        <button className='signWithe noneOutline'><img src={facebook} alt="icon-google"  className='pngGoogle'/>Sign in facebook</button>
                    </div>
                    <div className='twoColumns tcenter'>
                    <Link to='/'>Already have an account? Sign in</Link>
                </div>
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
        </>
    )
}
export default Register