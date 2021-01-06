module.exports = ({ content }) => {
  return `
    <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>the modern walk</title>
        
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css" rel="stylesheet">
        <link href="/css/main.css" rel="stylesheet">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css"></link>
      </head>
      <body>
        <header>
          <nav class="navbar navbar-top">
            <div class="container navbar-container">
              <div>
                <ul class="social">
                  <li>
                   <div class="w3-container">
                    <a href="/">
                    
                        <h2> MODERN WALK</h2</a>
                    </div>
                    
                  </li>
                </ul>
              </div>
              <div>
                <div class="navbar-item">
                   <div class="navbar-buttons">
                    <div>
                     <ul class="social">
                     <li><i class="fa fa-star"></i><a href="/sellers">Sellers</a></li>
                     <li><a href="/cart"><i class="fa fa-shopping-cart"></i> Cart</a></li>
                     <li> <a href="/user/signin"><i class="fa fa-user"></i> Log out</a></li>
                    </div>
                </div>
              </div>
              </div>
            </div>
          </nav>
        </header>
        <div class="body-container" style="min-height: 80vh;">
        ${content}
        </div>
        <div class="content has-text-centered" id="footer">
        <footer class="footer">
    <p>
      <strong>E-Commerce</strong> web application. Built by <strong>Sumukha, Varun</strong> .
    </p>
    </footer>
  </div>
      </body>
    </html>
  `;
};
