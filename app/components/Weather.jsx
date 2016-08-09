var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false
    }
  },
  handleSearch: function (city) {
    var self = this;

    this.setState({isLoading: true});

    openWeatherMap.getTemp(city).then(function (temp) {
      self.setState({
        city: city,
        temp: temp,
        isLoading: false
      })
    }, function (errorMessage) {
      self.setState({
        isLoading: false
      });
      alert(errorMessage);
    });
  },
  render: function () {
    var {isLoading, city, temp} = this.state;

    function renderMessage () {
      if (isLoading) {
        return <h3>Fetching weather ...</h3>;
      } else if (temp && city) {
        return <WeatherMessage city={city} temp={temp}/>
      }
    }

    return (
      <div>
        <h1>Get Weather </h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;
