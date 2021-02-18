const layout = require("./layout");

module.exports = ({ products }) => {
  return layout({
    content: `
    <div class="container" style="text-align: center;  display: flex;
      align-items: center; height: 90vh; justify-content:center;
      flex-direction:column"
    >
      <h2 class="title is-1">Your order is confirmed!</h2>
      <h2 class="subtitle is-3">Thank you for shopping with us, do visit us next time 😄</h2>
    </div>
    `
  })
}