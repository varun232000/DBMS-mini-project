const layout = require('../layout');

module.exports = ({ statement }) => {
  return layout({
    content: `
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-one-quarter">

              <h1 class="title">${statement}</h1>
              <div class="field">
              </div>
              <button class="button is-primary"  onclick="location.href = '/admin/products';">Go back</button>
          </div>
        </div>
      </div>
    `
  });
};