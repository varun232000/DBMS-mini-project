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
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
        
      </head>

      <body>
        <header>
          <nav class="navbar navbar-top">
            <div class="container navbar-container">
              <div>
                <ul class="social">
                  <li>
                   <div class="w3-container">
                    
                    <span class="w3-tag w3-xlarge w3-padding w3-red" style="transform:rotate(-10deg)">
                    SALE!!
                    </span>
                        
                    <a href="/">THE MODERN WALK</a>
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <div class="navbar-item">
                   <div class="navbar-buttons">
                  
                    <div>
                     <ul class="social">
                   <li> <a href="/"><i class="fa fa-star"></i> Products</a></li>
                    </div>
                  </div>
                  <div class="navbar-item">
                  <div class="navbar-buttons">
                  <div>
                    <ul class="social">
                    <li><a href="/cart"><i class="fa fa-shopping-cart"></i> Cart</a></li>
                    
                    
                  </div>
                  </div>
                  
                </div>
                
              </div>
              
              </div>
              
            </div>
            
            <li><a href="/user/signin"><button class="button is-success" input type="submit">Sign In</button></a></li>
            <li><a href="/sellers"><button class="button is-warning" input type="submit">Sellers</button></a></li>
          </nav>
          <nav class="navbar navbar-bottom">
            <div class="container navbar-container">
              <div>
                
                  <h4 class="title">"Anyone can get dressed up and glamorous, but it is how people dress in their days off that are the most intriguing." —Alexander Wang</h4>
                
              </div>
              
            </div>
          </nav>
        </header>

        ${content}
        
      </body>
    </html>
  `;
};
