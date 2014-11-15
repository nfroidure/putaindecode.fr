var React = require("react/addons")

var App = React.createClass({
  render() {
    return (
      <html lang="fr">
        <head>
          <meta charSet="utf8" />
          <link ref="stylesheet" href="/assets/stylesheets/index.css" />
          <title>{this.props.title}</title>
        </head>
        <body>
          <div id="App" />
          <script src="bundle.js"></script>
        </body>
      </html>
    )
  }
})

module.exports = App