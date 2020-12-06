import React, { Component } from 'react'
import Axios from 'axios'

export class HeaderLoggedOut extends Component {
  constructor() {
    super()

    this.state = {
      username: '',
      password: '',
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault()

    const { username, password } = this.state
    try {
      const response = await Axios.post('http://localhost:8090/login', { username, password })
      if (response.data) {
        console.log(response.data)
      } else {
        console.log('Incorrect username or password')
      }
    } catch (error) {
      console.log('There was a problem', error)
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target

    this.setState({ [name]: value })
  }

  render() {
    const { username, password } = this.state
    return (
      <form className='mb-0 pt-2 pt-md-0' onSubmit={this.handleSubmit}>
        <div className='row align-items-center'>
          <div className='col-md mr-0 pr-md-0 mb-3 mb-md-0'>
            <input name='username' className='form-control form-control-sm input-dark' type='text' placeholder='username' autoComplete='off' value={username} onChange={this.handleChange} />
          </div>
          <div className='col-md mr-0 pr-md-0 mb-3 mb-md-0'>
            <input name='password' className='form-control form-control-sm input-dark' type='password' placeholder='password' value={password} onChange={this.handleChange} />
          </div>
          <div className='col-md-auto'>
            <button className='btn btn-success btn-sm'>Sign In</button>
          </div>
        </div>
      </form>
    )
  }
}

export default HeaderLoggedOut
