var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
  return (
    <div>
      <h1 className="text-center">Examples</h1>
      <p>Here are a few example locations</p>
      <ol>
        <li>
          <Link to='/?city=Vallejo'>Vallejo, CA</Link>
        </li>
        <li>
          <Link to='/?city=Paris'>Paris, France</Link>
        </li>
      </ol>
    </div>
  )
};

module.exports = Examples;
