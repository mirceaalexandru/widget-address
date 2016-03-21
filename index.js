'use strict';

var React = require('react')

module.exports = {

  onAddressInput: function(e) {
    this.props.user.office_address = e.target.value
    console.log(this.props.user)
  },

  render: function () {
    return React.DOM.div(
      {
        className:"row"
      },
      React.DOM.div(
        {
          className:"col-xs-12 col-sm-6"
        },
        React.DOM.input({
          type: 'text',
          placeholder: 'Your office address here',
          className:"input-large",
          onInput: this.onAddressInput,
          value: this.props.user.office_address
        })
      ),
      React.DOM.div(
        {
          className:"col-xs-12 col-sm-6"
        },
        React.DOM.input({
          type: 'text',
          placeholder: 'Your office phone here',
          className:"input-large"
        })
      )
    )
  }
}