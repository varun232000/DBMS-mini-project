const layout = require("../layout");

module.exports = ({ products }) => {
  const renderedItems = products
    .map((product) => {
      return `
      <tr>
        <td>
        ${product.title}</div>
        </td>
        <td>${product.quantity}</td>
        <td>${product.price}</td>
        <td>
        <div class="field has-addons ">

            <form method="POST" action="/cart/${product.product_id}/update">
              <input type="hidden" value=${
                product.quantity - 1
              } name="quantity" />
              <button class="button is-white">-</button>
            </form>

            <form method="POST" action="/cart/${product.product_id}/update">
              <input type="hidden" value=${
                product.quantity + 1
              } name="quantity" />
              <button class="button is-white">+</button>
            </form>
            </div>
        </td>
      </tr>
    `;
    })
    .join("");

  return layout({
    content: `
  <div class="container" style="align-items: center; display: flex; flex-direction: column">
  <table class="table container">
    <thead>
      <tr>
        <th>Title</th>
        <th>Quantity</th>
        <th>Price</th>
        <th>Alter</th>
      </tr>
    </thead>
    <tbody>
      ${renderedItems}
    </tbody>
  </table>
    <button class="button is-primary">
      <span class="icon is-small">
      <i class="far fa-credit-card fa-bold"></i>
      </span>
        <span>
          <a href="/order_confirmed">
            Checkout
          </a>
        </span>
    </button>
    </div>
    `,
  });
};
