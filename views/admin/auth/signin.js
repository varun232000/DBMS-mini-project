const layout = require('../layout');
const { getError } = require('../../helpers');

module.exports = ({ errors }) => {
  return layout({
    content: `
    
      <div class="container">
        <div class="columns is-centered">
        <div>
                
        <h4 class="title">"What you wear is how you present yourself to the world, especially today, when human contacts are so quick. Fashion is instant language." —Miuccia Prada</h4>
      
    </div>
          <div class="column is-one-quarter">
            <form method="POST">
              <h1 class="title"> Sign In</h1>
              <div class="field">
                <label class="label">Email</label>
                <input required class="input" placeholder="Email" name="email" />
                <p class="help is-danger">${getError(errors, 'email')}</p>
              </div>
              <div class="field">
                <label class="label">Password</label>
                <input required class="input" placeholder="Password" name="password" type="password" />
                <p class="help is-danger">${getError(errors, 'password')}</p>
              </div>
              <button class="button is-primary">Submit</button>
            </form>
            <a href="/user/signup">Need an account? Sign Up</a>
          </div>
        </div>
        <h1 class="title">Wanna Go Back Home?</h1>
        <ul><a href="/"><button class="button is-primary" input type="submit">Take Me Home</button></a><ul>
      </div>
      
     
    `
  });
};
