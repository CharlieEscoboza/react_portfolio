const React = require('react');
const ReactDOM = require('react-dom');

class HelloWorld extends React.Component {
  render() {
    return <div>Hello World from React</div>;
  }
}

ReactDOM.render(<HelloWorld/>, document.getElementById('react-app'));
