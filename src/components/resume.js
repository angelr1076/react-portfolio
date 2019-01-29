import React, { Component } from 'react'
import './Resume.css'

class Resume extends Component {
  render () {
    return (
      <div>
        <div className='resume-template'>
          <img
            src='https://res.cloudinary.com/angelrodriguez/image/upload/v1548725111/rodriguez_angel_resume.png'
            alt='resume'
            style={{ width: '60%', height: '70%' }}
          />
        </div>
      </div>
    )
  }
}

export default Resume
