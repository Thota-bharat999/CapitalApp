import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]
class Capitals extends Component {
  state = {
    capitala: countryAndCapitalsList[0].id,
  }

  onClickCapital = event => {
    this.setState({capitala: event.target.value})
  }

  getCapitals = () => {
    const {capitala} = this.state
    const findCounter = countryAndCapitalsList.find(
      each => each.id === capitala,
    )

    return findCounter.country
  }

  render() {
    const {capitala} = this.state
    const country = this.getCapitals(capitala)
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="Capitals-heading">Countries And Capitals</h1>
          <div className="capitals">
            <select
              className="input"
              onChange={this.onClickCapital}
              value={capitala}
            >
              {countryAndCapitalsList.map(each => (
                <option key={each.id} value={each.id}>
                  {each.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="capital-description1">is capital of which country?</p>
          </div>

          <p className="capital-description1">{country}</p>
        </div>
      </div>
    )
  }
}
export default Capitals
