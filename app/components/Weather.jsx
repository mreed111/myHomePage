var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var ErrorModal = require('ErrorModal');
var openWeatherMap = require('openWeatherMap');
var {Link, IndexLink} = require('react-router');

var Weather = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false
    }
  },
  handleSearch: function (city) {
    var self = this;

    this.setState({
      isLoading: true,
      errorMessage: undefined,
      city: undefined,
      temp: undefined
    });

    openWeatherMap.getTemp(city).then(function (temp) {
      self.setState({
        city: city,
        temp: temp,
        isLoading: false
      })
    }, function (e) {
      self.setState({
        isLoading: false,
        errorMessage: e.message
      });
    });
  },
  componentDidMount: function () {
    var city=this.props.location.query.city;
    console.log("Weather::componentDidMount:::"+city);

    if (city && city.length > 0) {
      this.handleSearch(city);
      window.location.hash = '#/';
    }
  },
  componentWillReceiveProps: function (newProps) {
    var city=newProps.location.query.city;
    
    if (city && city.length > 0) {
      this.handleSearch(city);
      window.location.hash = '#/';
    }
  },

  render: function () {
    var {isLoading, city, temp, errorMessage} = this.state;

    function renderMessage () {
      if (isLoading) {
        return <h3 className="text-center">Fetching weather ...</h3>;
      } else if (temp && city) {
        return <WeatherMessage city={city} temp={temp}/>
      }
    }

    function renderError () {
      if (typeof errorMessage === 'string') {
        return (
          <ErrorModal message={errorMessage}/>
        )
      }

    }

    return (
      <div>
        <h1 className="text-center page-title">Get Weather </h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderError()}
      </div>
    );
  }
});

module.exports = Weather;
