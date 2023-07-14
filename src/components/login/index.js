import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import {
  BgContainer,
  LoginCard,
  ImageItem,
  InputCard,
  Label,
  CheckBoxCard,
  Button,
  ErrorMsg,
} from './styledcomponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    error: '',
    showError: false,
    showPassword: false,
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = token => {
    Cookies.set('jwt_token', token, {expires: 30})
    const {history} = this.props
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({error: errorMsg, showError: true})
  }

  onChangeCheckBox = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    if (response.ok) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    console.log(jwtToken)

    const {showError, error, showPassword} = this.state
    const type = showPassword ? 'text' : 'password'
    return (
      <BgContainer>
        <LoginCard onSubmit={this.onSubmitForm}>
          <ImageItem
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="logo"
          />
          <InputCard>
            <Label htmlFor="input1">USERNAME</Label>
            <input
              type="text"
              placeholder="Username"
              id="input1"
              onChange={this.onChangeUsername}
            />
          </InputCard>
          <InputCard>
            <Label htmlFor="input2">PASSWORD</Label>
            <input
              type={type}
              placeholder="Password"
              id="input2"
              onChange={this.onChangePassword}
            />
          </InputCard>
          <CheckBoxCard>
            <input
              type="Checkbox"
              id="input3"
              onChange={this.onChangeCheckBox}
            />
            <Label htmlFor="input3">Show Password</Label>
          </CheckBoxCard>
          <Button type="submit">Login</Button>
          {showError && <ErrorMsg>*{error}</ErrorMsg>}
        </LoginCard>
      </BgContainer>
    )
  }
}

export default Login
