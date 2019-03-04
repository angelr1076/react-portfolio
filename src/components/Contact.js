import React, { Component } from 'react'
import { Grid, Cell, Textfield, Button } from 'react-mdl'
import './Contact.css'
import axios from 'axios'

class Contact extends Component {
  constructor (props) {
    super(props)
    this.state = {
      fullName: '',
      email: '',
      message: ''
    }
  }

  handleForm = e => {
    axios
      .post('https://formcarry.com/s/e6BQqZAa68P', this.state, {
        headers: { Accept: 'application/json' }
      })
      .then(function (response) {
        let successMessage = document.querySelector('.success-message')
        successMessage.innerHTML = JSON.stringify(
          `${response.data.title} Your message was sent!`
        )
      })
      .catch(function (error) {
        let successMessage = document.querySelector('.success-message')
        successMessage.innerHTML =
          'Oops, something went wrong. Please try again.'
      })

    e.preventDefault()
    this.setState({ fullName: '', email: '', message: '' })
  }

  handleFields = e => this.setState({ [e.target.name]: e.target.value })

  render () {
    return (
      <div className='contact-body'>
        <Grid className='contact-grid'>
          <Cell col={6}>
            <h2>Angel Rodriguez</h2>
            <hr />
            <img
              src='https://res.cloudinary.com/angelrodriguez/image/upload/v1528903608/261905_157517620988095_7963288_n.jpg'
              alt='avatar'
              style={{ width: '80%', height: 'auto', padding: '1rem 0 1rem 0' }}
            />
            <hr />
            <p
              className='contact-closing'
              style={{ width: '75%', margin: 'auto', paddingTop: '1rem' }}>
              Front-end web developer with a passion for design and
              problem-solving. Please contact me if you have any questions or
              comments. Aside from programming, I love to spend time with my
              wife, read and cook.
            </p>

            <p
              className='skills'
              style={{ width: '90%', padding: '3px', margin: 'auto' }}>
              <label
                className='tech'
                style={{
                  color: 'rgb(226, 226, 19)',
                  textTransform: 'uppercase'
                }}>
                Programming:
              </label>{' '}
              JavaScript ES6/ES2015, jQuery, React, JSON, SQLite3, Ruby on
              Rails, Sinatra, Flexbox, CSS Grid, HTML5 and CSS3
            </p>
            <p
              className='skills'
              style={{ width: '90%', padding: '3px', margin: 'auto' }}>
              <label
                className='tech'
                style={{
                  color: 'rgb(226, 226, 19)',
                  textTransform: 'uppercase'
                }}>
                Software:
              </label>{' '}
              Heroku, Firebase, Netlify, AWS, Hugo, Bootstrap, Git and Github
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />
            <div style={{ width: '100%' }} className='contact-list'>
              <form onSubmit={this.handleForm}>
                <Cell col={12}>
                  <Textfield
                    type='text'
                    id='fullName'
                    name='fullName'
                    className='full-name'
                    onChange={this.handleFields}
                    value={this.state.fullName}
                    label='Full name'
                    floatingLabel
                    style={{ width: '200px' }}
                  />
                </Cell>
                <Cell col={12}>
                  <Textfield
                    type='email'
                    id='email'
                    name='email'
                    className='email-address'
                    onChange={this.handleFields}
                    value={this.state.email}
                    label='Email address'
                    floatingLabel
                    style={{ width: '200px' }}
                  />
                </Cell>
                <Cell col={12}>
                  <Textfield
                    name='message'
                    id='message'
                    className='text-body'
                    onChange={this.handleFields}
                    value={this.state.message}
                    label='Your message...'
                    rows={10}
                    style={{ width: '400px' }}
                  />
                </Cell>
                <Button raised colored ripple type='submit'>
                  Send
                </Button>
                <div className='success-message'>
                  <label />
                </div>
              </form>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact
