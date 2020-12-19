import './style.css'
import Header from './header/Header'

function Chat({chat}) {

    

    return(
        <div className='chat'>
        <Header chat={chat}/>
        Hola
        </div>
    )
}
export default Chat