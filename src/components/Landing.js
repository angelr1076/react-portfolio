import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'
import './Landing.css'

class Landing extends Component {
  render () {
    return (
      <div className='landing-body'>
        <Grid className='landing-grid'>
          <Cell col={6} xs={12} sm={6}>
            <div className='banner-text'>
              <h1 className='name-header'>Angel Rodriguez</h1>
              <h3 className='dev-header'>Front-End Web Developer</h3>
              <h3 className='location-header'>Philadelphia, PA</h3>
            </div>
            <div className='social-links'>
              {/* LinkedIn */}
              <a
                href='https://www.linkedin.com/in/angelrodriguezlead/'
                rel='noopener noreferrer'
                target='_blank'>
                <i className='fa fa-linkedin-square' aria-hidden='true' />
              </a>

              {/* Github */}
              <a
                href='https://github.com/angelr1076'
                rel='noopener noreferrer'
                target='_blank'>
                <i className='fa fa-github-square' aria-hidden='true' />
              </a>

              {/* Twitter */}
              <a
                href='https://twitter.com/AngelRoddy7'
                rel='noopener noreferrer'
                target='_blank'>
                <i className='fa fa-twitter-square' aria-hidden='true' />
              </a>
            </div>

            <hr />

            <div className='devicons'>
              <i className='devicon-javascript-plain' />
              <i className='devicon-jquery-plain-wordmark' />
              <i className='devicon-react-original-wordmark' />
              <i className='devicon-ruby-plain-wordmark' />
              <i className='devicon-rails-plain-wordmark' />
              <i className='devicon-bootstrap-plain-wordmark' />
              <i className='devicon-html5-plain-wordmark' />
              <i className='devicon-css3-plain-wordmark' />
              <i className='devicon-visualstudio-plain' />
              <i className='devicon-nodejs-plain' />
              <i className='devicon-heroku-original-wordmark' />
              <i className='devicon-github-plain-wordmark' />
            </div>
          </Cell>

          <Cell col={6} xs={12} sm={6}>
            <div className='landing-bio'>
              <p style={{ width: '75%', margin: '5%' }}>
                Hi, and thanks for checking out my site! I'm a web developer
                that's passionate about growth and learning new things! In fact,
                since I've been programming, I can say there hasn't been a day
                that I haven't had the opportunity to learn something new. I
                chose coding as a way to solve problems and bring my ideas to
                life.
              </p>

              <p style={{ width: '75%', margin: '5%' }}>
                Prior to learning to code, I had so many ideas that I wanted to
                bring to life, but I had no clue about where or how to begin. As
                soon as I started learning programming, I realized I could
                challenge myself, and others to materialize thoughts by writing
                code.{' '}
              </p>

              <p style={{ width: '75%', margin: '5%' }}>
                When I have an idea that I'm able to sketch out, plan and bring
                to life to view and interact with, it is like no other feeling
                I've experienced in my prior work. It's such a gratifying
                feeling to create, break, and improve your own projects through
                code, and also learn from that in the process.
              </p>

              <p style={{ width: '75%', margin: '5%' }}>
                I would love the opportunity to speak with you if you have
                questions about my background or if you'd like to interview me
                and talk tech, or maybe even food!
              </p>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing
