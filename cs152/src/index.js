import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import ReactDOM from 'react-dom'

import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom'
import AskableOne from './Components/AskableOne';
import AskableTwo from './Components/AskableTwo';
import AskableThree from './Components/AskableThree';
import AskableFour from './Components/AskableFour';
import AskableFive from './Components/AskableFive';
import AskableSix from './Components/AskableSix';
import AskableSeven from './Components/AskableSeven';
import AskableEight from './Components/AskableEight';
import Result from './Components/Result';
import {Container} from 'react-bootstrap'

function App () {

    return (
        <Router>
          <Container className = "d-flex align-item-center justify-content-center" style = {{minHeight:"100vh"}}>
          <div className='w-100' style = {{maxWidth: "400vh"}}>
            <Routes>
                <Route exact path="/" element={<AskableOne/>}/>
                <Route exact path="/secondQ" element={<AskableTwo/>}/>
                <Route exact path="/thirdQ" element={<AskableThree/>}/>
                <Route exact path="/fourthQ" element={<AskableFour/>}/>
                <Route exact path="/fifthQ" element={<AskableFive/>}/>
                <Route exact path="/sixthQ" element={<AskableSix/>}/>
                <Route exact path="/seventhQ" element={<AskableSeven/>}/>
                <Route exact path="/eighthQ" element={<AskableEight/>}/>
                <Route exact path="/result" element={<Result/>}/>
      
      
            </Routes>
          </div>
          </Container>
        </Router>
    )
}

ReactDOM.render(<App/>,document.getElementById('root'))