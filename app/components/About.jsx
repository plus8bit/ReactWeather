var React = require('react');

var About = (props) => {
  return(
    <div>
    <h1 className="text-center page-title">About</h1>
    <p>This is Weather Application Build on React.</p>
    <p>Here are some of the tools app used: </p>
    <ul>
      <li>
        <a target="_blank" href="https://facebook.github.io/react">React</a> - This was the JavaScript framework used.
      </li>

      <li>
        <a target="_blank" href="http://openweathermap.org">Open Weather Map</a> - App used Open Weather Map to search for weather data by city name.
      </li>
    </ul>
  </div>
  );
};

module.exports = About;
