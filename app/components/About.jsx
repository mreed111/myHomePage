var React = require('react');
var {Link} = require('react-router');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center">About</h1>
      <p>
        Welcome to the my React Weather application!  I live in
        <Link to='/?city=Vallejo'> Vallejo, CA</Link>. I grew up in
        <Link to='/?city=Eureka'> Eureka, CA</Link>.
      </p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a> - JavaScript Framework.
        </li>
        <li>
          <a href="https://facebook.github.io/react">Open Weather Maps</a> - Weather Service
            app used to search for Weather data.
        </li>
        <li>
          <a href="https://foundation.zurb.com/">Foundation</a> - Front-end framework tool
          (<a href="https://foundation.zurb.com/apps/docs/#!/">docs</a>)  
        </li>
      </ul>
    </div>
  )
};

module.exports = About;
