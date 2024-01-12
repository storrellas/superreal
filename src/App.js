import logo from './assets/mediamarkt_white_logo.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';


const AUTHOR = { ME: 'ME', BOT: 'BOT' }
function App() {
  const [message, setMessage] = useState('')
  const [messageList, setMessageList] = useState([])

  const onSend = () => {
    
    setMessage('')
    const messageListLocal = JSON.parse(JSON.stringify(messageList))
    messageListLocal.push({message, author: AUTHOR.ME})
    setMessageList([ ...messageListLocal ])

    // ------------------------------
    // Please add here some code 
    // ------------------------------
    console.log("message ", message)


    console.log("messageListLocal ", messageListLocal)

  }

  console.log("messageList ")
  return (<main style={{ background: '#EEE', height: '100vh', position: 'relative'}}>
            <header className='d-flex justify-content-center align-items-center' 
              style={{ background: '#E3000F', height: '80px', position: 'absolute', width: '100%'}}>
              <img src={logo} alt="123"></img>
            </header>

            <div className='w-100 d-flex justify-content-end' style={{ position: 'absolute', bottom: '200px', width: '100%', height: '300px', padding: '0 5em'}}>
              <div style={{ width: '400px', background: 'white', border: '1px solid #DDD', borderRadius: '10px'}}>
                {messageList.map( (item,idx) => 
                  {
                    return (<div key={idx}>                      
                              <div className='m-1 ps-3 pe-3'>
                                <div>{item.author}:</div>
                                <div>{item.message}</div>
                              </div>
                            </div>)
                  }
                )}
              </div>
            </div>


            <div className='text-center w-100' style={{ position: 'absolute', bottom: '100px', width: '100%', padding: '0 10em'}}>
              <div style={{ position: 'relative'}}>
                <input className="w-100 p-3" type="text" value={message}
                  style={{ background: 'white', borderRadius: '30px', height: '50px', border: '1px solid #DDD'}}
                  onChange={(e) => setMessage(e.target.value)}>
                </input>
                <button style={{ position: 'absolute', right: '10px', top: '10px', height: '30px', borderRadius: '20px', background: '#E3000F', border: '1px solid #DDD'}}
                  onClick={() => onSend()}>
                  <FontAwesomeIcon icon={faCircleArrowRight} style={{ color: '#DDD'}} />
                </button>
              </div>
            </div>

            <footer className='d-flex justify-content-around align-items-center' 
              style={{ background: 'black', color: 'white', height: '80px', position: 'absolute', width: '100%', bottom: '0'}}>
                <div className='fw-bold fst-italic' role='button'>Condiciones de uso web</div>
                <div className='fw-bold fst-italic' role='button'>Politica privacidad</div>
                <div className='fw-bold fst-italic' role='button'>Configuración de cookies</div>
                <div className='fw-bold fst-italic' role='button'>Integridad y cumplimiento</div>
            </footer>


          </main>)
}

export default App;
