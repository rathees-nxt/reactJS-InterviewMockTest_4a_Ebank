import {Component} from 'react'
import {Redirect} from 'react-router-dom'

import Cookies from 'js-cookie'

import './index.css'

class LoginForm extends Component {
  state = {userId: '', userPassword: '', isError: false, errorMsg: ''}

  onEnterUserId = event => {
    this.setState({userId: event.target.value})
  }

  onEnterUserPassword = event => {
    this.setState({userPassword: event.target.value})
  }

  success = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30, path: '/'})
    history.replace('/')
  }

  failure = err => {
    this.setState({errorMsg: err, isError: true})
  }

  eBankLogin = async event => {
    event.preventDefault()
    const {userId, userPassword} = this.state
    const userDetails = {user_id: userId, pin: userPassword}
    const url = 'https://apis.ccbp.in/ebank/login'
    const options = {method: 'post', body: JSON.stringify(userDetails)}
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
      this.success(data.jwt_token)
    } else {
      this.failure(data.error_msg)
    }
  }

  render() {
    const {userId, userPassword, isError, errorMsg} = this.state
    const token = Cookies.get('jwt_token')
    if (token !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div className="app-container">
        <div className="main-container">
          <div className="img-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/ebank-login-img.png"
              alt="website login"
              className="login-img"
            />
          </div>
          <form className="form-container" onSubmit={this.eBankLogin}>
            <h1 className="login-heading">Welcome Back!</h1>
            <div className="label-input">
              <label className="label" htmlFor="userId">
                User Id
              </label>
              <input
                onChange={this.onEnterUserId}
                value={userId}
                className="input"
                placeholder="Enter User ID"
                id="userId"
                type="text"
              />
            </div>
            <div className="label-input">
              <label className="label" htmlFor="pin">
                PIN
              </label>
              <input
                onChange={this.onEnterUserPassword}
                value={userPassword}
                className="input"
                placeholder="Enter PIN"
                id="pin"
                type="password"
              />
            </div>
            <button className="login-btn" type="submit">
              Login
            </button>
            <div className="err-content">
              {isError && <p className="err">{errorMsg}</p>}
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm
