import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import Header from '../Header'

import './index.css'

const Home = () => {
  const token = Cookies.get('jwt_token')
  if (token === undefined) {
    return <Redirect to="/ebank/login" />
  }
  return (
    <>
      <div className="home-container">
        <Header />
        <div className="home-content">
          <div className="home-details">
            <h1 className="home-heading">Your flexibility, Our Excellence</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/ebank-digital-card-img.png"
              alt="digital card"
              className="card-img"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
