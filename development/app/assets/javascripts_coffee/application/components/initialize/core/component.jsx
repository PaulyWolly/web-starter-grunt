define(function(require){

  var React = require('react');

  function Component() {
    this.AppView = React.createClass({
      render: function () {
        return (
        <div>
        <p>Hello, React!</p>
        </div>
        );
      }
    });
  }

  Component.prototype.init = function () {
    React.renderComponent(<this.AppView />, document.body);
  };

  return Component;

});