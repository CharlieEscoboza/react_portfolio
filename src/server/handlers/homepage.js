const { match, RouterContext } = require('react-router-dom');

const get = function(req, resp){
  resp.render('Homepage', { name: 'Express React Views'});
};

module.exports = { get };