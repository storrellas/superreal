import logo from './assets/mediamarkt_white_logo.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowRight, faStar, faArrowRight, faBars, faCommentDots, faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';


const AUTHOR = { ME: 'ME', BOT: 'BOT' }
function App() {
  const [message, setMessage] = useState('')
  const [messageList, setMessageList] = useState([
    {author: AUTHOR.BOT, message: 'hello'},
    {author: AUTHOR.BOT, message: 'hello'},
    {author: AUTHOR.BOT, message: 'hello'},
    {author: AUTHOR.BOT, message: 'hello'},
    {author: AUTHOR.BOT, message: 'hello'},
    {author: AUTHOR.BOT, message: 'hello'},
    {author: AUTHOR.BOT, message: 'hello'},
    {author: AUTHOR.BOT, message: 'hello'},
    {author: AUTHOR.BOT, message: 'hello'},
    {author: AUTHOR.BOT, message: 'hello'},
  ])
  const [showChat, setShowChat] = useState(true)
  const [isWriting, setIsWriting] = useState(false)

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

  const onKeyDownMessage = (e) => {    
    if (e.key === 'Enter') {
      onSend()
    }
  }


  return (<main className='main'>
            <header className='d-flex justify-content-center align-items-center header'>
              <img src={logo} alt="123"></img>
            </header>

            {showChat?  
            <div className='w-100 d-flex justify-content-end message-list-container'>
              <div className='message-list' style={{ overflow: 'auto'}}>
                {messageList.map( (item,idx) => 
                  {
                    const classStr = item.author === AUTHOR.ME?'me-msg':'bot-msg'
                    const classContainerStr = item.author === AUTHOR.ME?'d-flex justify-content-end':'d-flex justify-content-start'
                    return (<div key={idx}>                      
                              <div className={'m-1 ps-3 pe-3 ' + classContainerStr}>
                                <div className={classStr}>
                                  {/* <div className='fw-bold'>{item.author}:</div> */}
                                  <div>{item.message}</div>
                                </div>
                              </div>
                            </div>)
                  }
                )}
                {isWriting||true?
                <div>                      
                  <div className={'m-1 ps-3 pe-3 d-flex justify-content-start'}>
                    <div className={"bot-msg"}>
                      {/* <div className='fw-bold'>{item.author}:</div> */}
                      <div>...</div>
                    </div>
                  </div>
                </div>
                :null}
              </div>
            </div>
            :null}

            <div className="fw-bold d-flex alig-items-center justify-content-center link-contract" role="button">
                <div>
                  <FontAwesomeIcon icon={faStar}/>
                </div>
                <div className="ms-3 me-3">Ir a la contratación</div>
                <div>
                  <FontAwesomeIcon icon={faArrowRight} />
                </div>
            </div>

            <div className='d-flex w-100 justify-content-center align-items-center bottom-controls'>
              <div className='menu-hamburguer'>
                <FontAwesomeIcon icon={faBars} />
              </div>
              <div className="flex-grow-1 ms-5 me-5" style={{ position: 'relative'}}>
                <input className="w-100 p-3" type="text" value={message}
                  style={{ background: 'white', borderRadius: '30px', height: '50px', border: '1px solid #DDD'}}
                  onChange={(e) => setMessage(e.target.value)} onKeyDown={(e) => onKeyDownMessage(e)}>
                </input>
                <button className='send-button' onClick={() => onSend()}>
                  <FontAwesomeIcon icon={faCircleArrowRight} style={{ color: 'white'}} />
                </button>
              </div>
              <div className='d-flex justify-content-center align-items-center chat-control' 
                role="button" onClick={() => setShowChat(!showChat)}>
                <div style={{ background: "#FF0000", borderRadius: '50%', padding: '0.2em 0.5em', boxShadow: "0px 5px 5px grey"  }}>
                  <FontAwesomeIcon icon={faCommentDots} style={{ color: 'white'}} />
                </div>
                <div className="ms-2 me-2 fst-italic fw-bold">Chat</div>
                <div className={showChat?'rotated':''}>
                  <FontAwesomeIcon icon={faAngleDown} />
                </div>
              </div>
            </div>

            <footer className='d-flex justify-content-around align-items-center footer'>
                <div className='fw-bold fst-italic' role='button'>Condiciones de uso web</div>
                <div className='fw-bold fst-italic' role='button'>Politica privacidad</div>
                <div className='fw-bold fst-italic' role='button'>Configuración de cookies</div>
                <div className='fw-bold fst-italic' role='button'>Integridad y cumplimiento</div>
            </footer>


          </main>)
}

export default App;
