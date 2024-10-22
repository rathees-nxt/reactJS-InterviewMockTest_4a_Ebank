import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

import './index.css'

const Header = props => {
  const logOutBtn = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/ebank/login')
  }
  console.log(props)
  return (
    <nav className="header-container">
      <Link to="/">
        <img
          src="https://assets.ccbp.in/frontend/react-js/ebank-logo-img.png"
          alt="website logo"
          className="web-img"
        />
      </Link>
      <button className="logout-btn" type="button" onClick={logOutBtn}>
        Logout
      </button>
    </nav>
  )
}

export default withRouter(Header)
