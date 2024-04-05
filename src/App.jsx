import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import LandingPage from './pages/LandingPage'
import { Col, Row } from 'react-bootstrap'





function App() {

  return (

    <>
      <div className="container-fluid">
        <Row>
          <Col xs={1}>
            <Header />
          </Col>
          <Col xs={11}>
            <Routes>
              <Route path='/' element={<LandingPage />} />
            </Routes>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default App
