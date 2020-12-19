import './styleHeader.css'
import DropDown from './DropDown'
import {useState} from 'react'

export default function Header(props) {
    let [showDropDown, setShowDropDown]=useState(false)
    const ShowDropDown = ()=> {
        setShowDropDown(!showDropDown)
    }

    return(
        <div className='header'>
            <div className='titleHeader'><h2 className='Header--h2'>Chat Marc</h2><span><img src={props.chat} alt="chat icon" className='imgTilte'/></span></div>
            <i className='icon-menu' onClick={ShowDropDown}>
                {
                    showDropDown && <DropDown />
                }
            </i>            
        </div>
    )
}