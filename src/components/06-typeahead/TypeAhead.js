import React from 'react'
import { setComponentClass } from '../../utils'

import Result from './Result'

import './css/typeahead.scss'

class TypeAhead extends React.Component {
  searchRef = React.createRef()
  endpointUrl = "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/" +
                "raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json"

  state = {
    isLoading: true,
    cities: [],
    results: [],
    searchTerm: null
  }

  componentDidMount() {
    setComponentClass("day-06-typeahead")

    fetch(this.endpointUrl).then((data) => {
      return data.json()
    }).then((data) => {
      const cities = this.state.cities
      cities.push(...data)
      this.setState({ cities: cities, isLoading: false })
    })
  }

  search = (e) => {
    const searchTerm = this.searchRef.current.value
    const cities = this.state.cities
    const regex = new RegExp(searchTerm, 'gi');

    const filteredCities = cities.filter((city) => {
      return city.city.match(regex) || city.state.match(regex)
    })
    this.setState({ results: filteredCities, searchTerm: searchTerm })
  }

  render() {
    return (
      <form className="search-form">
        {this.state.isLoading && <p>Loading...</p>}
        {!this.state.isLoading &&
          <React.Fragment>
            <input type="text" ref={this.searchRef} className="search" placeholder="City or State" onChange={this.search} />
            <ul className="suggestions">
              {this.state.results.length === 0 &&
                <React.Fragment>
                  <li>Filter for a city</li>
                  <li>or a state</li>
                </React.Fragment>
              }
              {this.state.results.length !== 0 &&
                <React.Fragment>
                  {this.state.results.map((city, i) => (
                    <Result key={i} searchTerm={this.state.searchTerm} city={city} />
                  ))}
                </React.Fragment>
              }
            </ul>
          </React.Fragment>
        }
      </form>
    )
  }
}

export default TypeAhead
