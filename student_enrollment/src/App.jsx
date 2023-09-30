
import { Routes, Route } from "react-router-dom"
import PageOne from './Pages/Page_One/PageOne'
import PageTwo from './Pages/Page_Two/PageTwo'
import PageThree from './Pages/Page_Three/PageThree'
import Header from './Pages/Page_One/components/Header'
import { Box, ChakraProvider } from '@chakra-ui/react'
import './App.css'

function App() {

  return (
    <>
    <ChakraProvider>
    <div className="app">
      <Box boxShadow='xl' h='100%'>

      <Header />
      <Routes>
        <Route path="/" element={ <PageOne/> } />
        <Route path="page_two" element={ <PageTwo/> } />
        <Route path="page_three" element={ <PageThree/> } />
      </Routes>
      </Box>

    </div>
    </ChakraProvider>
    </>
  )
}

export default App
