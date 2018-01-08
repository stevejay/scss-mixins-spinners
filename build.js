var sass = require('node-sass')
var fs = require('fs')

sass.render(
  {
    file: './example/scss/example.scss'
  },
  function (err, result) {
    if (err) {
      console.error(err.status, err.column, err.message, err.line)
    } else {
      fs.writeFile('./example/example.css', result.css, function (err) {
        if (err) {
          console.error(err.status, err.column, err.message, err.line)
        }
      })
    }
  }
)
