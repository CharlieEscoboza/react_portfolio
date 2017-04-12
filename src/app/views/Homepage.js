const React = require('react');
const DefaultLayout = require('./layouts/DefaultLayout');

class Homepage extends React.Component {
  render() {

    return (
      <DefaultLayout title="Homepage">
        <div>Hello World from {this.props.name}</div>
      </DefaultLayout>
    );
  }
}

module.exports = Homepage;
