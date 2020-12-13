const layout = require("../layout");

module.exports = ({ sellers }) => {
  const renderedSellers = sellers
    .map((seller) => {
      return `
      <div class="column is-one-quarter">
        <div class="card product-card">
          <div class="card-content">
            <h3 class="subtitle">${seller.name}</h3>
            <h5>${seller.phone_no}</h5>
            <p>${seller.street}</p>
          <p>${seller.city}</p>
          <p>${seller.zip_code}</p>
          </div>
          <footer class="card-footer">
          
          </footer>
        </div>
      </div>
    `;
    })
    .join("\n");

  return layout({
    content: `
    <section>
      <div class="container">
        <div class="columns">
          <div class="column "></div>
          <div class="column is-four-fifths">
            <div>
              <h2 class="title text-center">Our Trusted Sellers</h2>
              <div class="columns products">
                ${renderedSellers}  
              </div>
            </div>
          </div>
          <div class="column "></div>
        </div>
      </div>
    </section>
  `,
  });
};
