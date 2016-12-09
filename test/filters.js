module.exports = {
  filters: {
    stylus: function (str, opts) {
      let ret
      str = str.replace(/\\n/g, '')
      const styl = require('stylus')
      styl(str, opts).render(function (err, css) {
        if (err) throw err
        ret = css.replace(/\n/g, '')
      })
      return '<style>' + ret + '</style>'
    }
  }
}
