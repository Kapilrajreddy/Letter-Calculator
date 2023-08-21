// Write your code here.

import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {searchInput: ''}

  handleChange = e => {
    this.setState({searchInput: e.target.value})
  }

  render() {
    const {searchInput} = this.state
    const letterLength = searchInput.length
    return (
      <div className="Letter-main-container">
        <div className="Letter-sub-container">
          <div className="Letter-left-container">
            <h1 className="Letter-main-heading">
              Calculate the Letters you enter
            </h1>
            <label className="Letter-label-name" htmlFor="inputText">
              Enter the phrase
            </label>
            <input
              type="text"
              placeholder="Enter the phrase"
              className="Letter-search-input"
              onChange={this.handleChange}
              value={searchInput}
              id="inputText"
            />
            <div className="Letter-count-container">
              <p className="Letter-count">No.of letters: {letterLength}</p>
            </div>
          </div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
              alt="letters calculator"
              className="letter-calculator-logo"
            />
          </div>
        </div>
      </div>
    )
  }
}
export default LettersCalculator

/*
import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {
    inputPhrase: '',
  }

  onChangeInputPhrase = event => {
    const {value} = event.target
    console.log(value)

    this.setState({inputPhrase: value})
  }

  render() {
    const {inputPhrase} = this.state

    return (
      <div className="app-container">
        <div className="letters-calculator-container">
          <div className="calculator-container">
            <h1 className="heading">Calculate the Letters you enter</h1>
            <div className="input-phrase-container">
              <label className="label" htmlFor="phraseText">
                Enter the phrase
              </label>
              <input
                className="letters-input"
                id="phraseText"
                onChange={this.onChangeInputPhrase}
                placeholder="Enter the phrase"
                type="text"
                value={inputPhrase}
              />
            </div>
            <p className="letters-count">No.of letters: {inputPhrase.length}</p>
          </div>
          <img
            alt="letters calculator"
            className="letters-calculator-image"
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
*/
