import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'
import config from './chatBot/config';
import MessageParser from './chatBot/MessageParser';
import ActionProvider from './chatBot/ActionProvider';
import { Routes, Route } from "react-router-dom"
import PageOne from './Pages/Page_One/PageOne'
import PageTwo from './Pages/Page_Two/PageTwo'
import PageThree from './Pages/Page_Three/PageThree'
import './App.css'

function App() {

  return (
    <>
    <div className="app">
      <Routes>
        <Route path="/" element={ <PageOne/> } />
        <Route path="page_two" element={ <PageTwo/> } />
        <Route path="page_three" element={ <PageThree/> } />
      </Routes>
    </div>
       {/* <div>
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div> */}
    </>
  )
}

export default App
