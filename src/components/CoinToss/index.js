// Write your code here
import {Component} from 'react'

import Home from '../Home'

import Resume from '../Resume'

import Contact from '../Contact'

import './index.css'

class CoinToss extends Component {
  state = {
    homeContent: 'display-content',
    resumeContent: 'no-display-content',
    contactContent: 'no-display-content',
  }

  onHome = () => {
    this.setState({
      homeContent: 'display-content',
      resumeContent: 'no-display-content',
      contactContent: 'no-display-content',
    })
  }

  onResume = () => {
    this.setState({
      homeContent: 'no-display-content',
      resumeContent: 'display-content',
      contactContent: 'no-display-content',
    })
  }

  onContact = () => {
    this.setState({
      homeContent: 'no-display-content',
      resumeContent: 'no-display-content',
      contactContent: 'display-content',
    })
  }

  render() {
    const {homeContent, resumeContent, contactContent} = this.state
    return (
      <div>
        <div className="header-container">
          <div className="header-details">
            <h1 className="main-heading">SAI SHARATH TRIVEDI NAMBURI</h1>
            <p className="description">An Aspiring Full Stack Developer</p>
          </div>
          <div className="header-description">
            <button
              className="btn-nav-section"
              type="button"
              onClick={this.onHome}
            >
              Home
            </button>
            <button
              className="btn-nav-section"
              type="button"
              onClick={this.onResume}
            >
              Resume
            </button>
            <button
              className="btn-nav-section"
              type="button"
              onClick={this.onContact}
            >
              Contact
            </button>
          </div>
        </div>
        <Home
          homeContent={homeContent}
          onHome={this.onHome}
          onResume={this.onResume}
          onContact={this.onContact}
        />
        <Resume resumeContent={resumeContent} onResume={this.onResume} />
        <Contact contactContent={contactContent} onContact={this.onContact} />
      </div>
    )
  }
}
export default CoinToss
