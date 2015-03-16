const {component, dom} = require('deku')

const title = component()
module.exports = document.registerElement('landing-title', {
  extends: 'section',
  prototype: title
})

title.prototype.render = function () {
  return dom('landing-title', [
    dom('h1', {class: 'landing-title-heading'}, ['Fin.sh']),
    dom('h1', {class: 'landing-title-heading'}, ['Visualize CSV']),
    dom('h2', {class: 'landing-title-subheading'}, ['Create charts in a few steps']),
    dom('h3', {class: 'landing-title-quote'}, ['"A brilliant utility" — Yoshua Wuyts'])
  ])
}
