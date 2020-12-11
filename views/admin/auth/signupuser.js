const layout = require("../userlayout");
const { getError } = require("../../helpers");

module.exports = ({ req, errors }) => {
  return layout({
    content: `
      <div class="container">
        <div class="columns is-centered">
        <div>
                
        <h4 class="title">"Fashion you can buy, but style you possess. The key to style is learning who you are, which takes years. There's no how-to road map to style. It's about self expression and, above all, attitude." —Iris Apfel</h4>
      
    </div>
          <div class="column is-one-quarter">
            <form method="POST" action="/user/signup">
              <h1 class="title"> Sign Up</h1>
              <div class="field">

              <label class="label">First Name</label>
                <input class="input" placeholder="first name" name="fname" type="text" />

                <label class="label">Last Name</label>
                <input class="input" placeholder="last name" name="lname" type="text"/>

                <label class="label">Email</label>
                <input class="input" placeholder="Email" name="email" type="email" />
                <p class="help is-danger">${getError(errors, "email")}</p>
              </div>
              <div class="field">
                <label class="label">Password</label>
                <input class="input" placeholder="Password" name="password" type="password" />
                <p class="help is-danger">${getError(errors, "password")}</p>
              </div>
              <div class="field">
                <label class="label">Password Confirmation</label>
                <input class="input" placeholder="Password Confirmation" name="passwordConfirmation" type="password" />
                <p class="help is-danger">${errors || ""}</p>

                <label class="label">Phone Number</label>
                <input class="input" placeholder="phone no" name="u_phone_no" type="tel"/>

                <label class="label">Gender</label>
                <input class="input" placeholder="gender" name="gender" type="text" />

                <label class="label">House No</label>
                <input class="input" placeholder="House No" name="house_no" type="number" />

                <label class="label">Street</label>
                <input class="input" placeholder="Street Name" name="street" type="text" />

                <label class="label">City</label>
                <input class="input" placeholder="City" name="city" type="text"/>

                <label class="label">Zip code</label>
                <input class="input" placeholder="zip Code" name="zip" type="number"/>
              </div>
              <button class="button is-primary" input type="submit">Submit</button>
            </form>
            <a href="/user/signin">Have an account? Sign In</a>
          </div>
        </div>
        <h1 class="title">Wanna Go Back Home?</h1>
        <ul><a href="/"><button class="button is-primary" input type="submit">Take Me Home</button></a><ul>
      </div>
      
    `,
  });
};
