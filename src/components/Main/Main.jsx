import React, { useContext } from 'react'
import "./main.css"
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'
const Main = () => {
  const {onSent,recentPrompt,showResult,loading,resultData,setInput,input}=useContext(Context)
  return (
    <div className='main'>
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        {!showResult
        ?<>

        <div className="greet">
          <p>
            <span>Hello, Aman</span>
          </p>
          <p>How can i help you today?</p>
        </div>
        <div className="cards">
          <div className="card">
            <p>Suggest me some great pop songs of 2024</p>
            <img src={assets.compass_icon} alt="" />
          </div>
          <div className="card">
            <p>Explain Penetration Testing</p>
            <img src={assets.bulb_icon} alt="" />
          </div>
          <div className="card">
            <p>Discuss OSI model</p>
            <img src={assets.message_icon} alt="" />
          </div>
          <div className="card">
            <p>Optimized the given code</p>
            <img src={assets.code_icon} alt="" />
          </div>
        </div>
        </>:
        <div className='result'>
          <div className="result-title">
            <img src={assets.user_icon} alt="" />
            <p>{recentPrompt}</p>
          </div>
          <div className="result-data">
            <img src={assets.gemini_icon} alt="" />
            {loading?
            <div className='loader'>
              <hr />
              <hr />
              <hr />
            </div>:
            <p dangerouslySetInnerHTML={{__html:resultData}}>
            </p>
            }
          </div>
        </div>
        }


        <div className="main-bottom">
          <div className="search-box">
            <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder='Enter your prompt here' />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              {input?<img onClick={()=>onSent()} src={assets.send_icon} alt="" />:null}
            </div>
          </div>
          <div className="bottom-info">
            Gemini may display inaccurate info, including about people, so double-checking its responses. Your privacy and Gemini apps
          </div>
        </div>




      </div>
    </div>
  )
}

export default Main
