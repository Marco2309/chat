import {auth} from '../../../firebase'
import './styleHeader.css'

export default function DropDown() {
    const getOut = ()=> {
        auth.signOut().then(
            console.log('exit succes')
        ).catch(error => console.log(error))
    }
    return(
        <div className='dropDown'>
            <div className='signOut' onClick={getOut}>
                <p>Sign Out</p>
                <i className='icon-exit'/>
            </div>
        </div>
    )
}