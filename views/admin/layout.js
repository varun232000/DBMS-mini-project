module.exports = ({ content }) => {
  return `
    <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Shop</title>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css" rel="stylesheet">
        <link href="/css/main.css" rel="stylesheet">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css"></link>
      </head>

      <body class="admin">
        <header>
          <nav class="navbar navbar-bottom">
            <div class="container navbar-container">
              <div>
                <a href="/admin/products">
                  <h3 class="title">Authentication Panel</h3>
                </a>
              </div>
              <div class="navbar-item">
                <div class="navbar-buttons">
                  <div class="navbar-item">
                    <a href="/admin/products"><i class="fa fa-star"></i> Products</a>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>
        <div class="container">
          ${content}
        </div>
      </body>
      
      <nav class="navbar navbar-top">
            <div class="container navbar-container">
              <div>
                <ul class="social">
                  
                  <li>
                    <ul><h3><a href="/">DEVELOPMENT TEAM</h3></ul>
                    <ul><a href="https://sumukhah.github.io/Blackwater-developers-website/"><i class="fa fa-envelope"></i> Sumukha Hegde</a></ul>
                   <ul><a href="https://varunvs.pythonanywhere.com/"><i class="fa fa-envelope"></i> Varun.V.S</a></ul>
                  </li>
                </ul>
              </div>
              <div>
                <ul class="social">
                   <li><a href="/">Get In Touch: </a></li>
                  <li><a href="https://www.facebook.com/varun.vs.39/"><i class="fab fa-facebook"></i></a></li>
                  <li><a href="https://twitter.com/login?lang=en"><i class="fab fa-twitter"></i></a></li>
                  <li><a href="https://www.linkedin.com/in/varun-v-s-b5643a171/"><i class="fab fa-linkedin"></i></a></li>
                  <li><a href="/"><i class="fab fa-dribbble"></i></a></li>
                  <li><a href="https://mail.google.com/mail/u/0/#inbox"><i class="fab fa-google-plus"></i></a></li>
                </ul>
              </div>
            </div>
            
    </html>
  `;
};
