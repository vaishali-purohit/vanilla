import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Success");

    let script = document.getElementById("client");
    if (script) {
      this.removeScript();
    }
  }

  async getHtml() {
    return `
    <div>
    <link rel="stylesheet" href="/static/css/success.css">
  
    <!--------left------>
    <div class="success">
      <div class="message">
        <p>Congratutations! Your gift is on it's way. Hurrayyyyy.....</p>
      </div>
    </div>
    <!--------right------>
  
    <footer>
      <a href="/" class="nav__link" data-link><button>Back to Home</button></a>
    </footer>
  </div>
        `;
  }
}
