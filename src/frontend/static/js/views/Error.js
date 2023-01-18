import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Error");

    let script = document.getElementById("client");
    if (script) {
      this.removeScript();
    }
  }

  async getHtml() {
    return `
    <div>
  <link rel="stylesheet" href="/static/css/error.css">

  <main>
    <div class="error">
      <div>
        <img src="https://cdn.glitch.global/12ac786b-aa53-4184-abe1-9b60c62a498a/sad.jpg?v=1673942507012" alt="sad" />
        <div class="text">
          <p>Sorry! Your request is not granted.</p>
          <p id="message"></p>
        </div>
      </div>
    </div>
  </main>

  <footer>
    <a href="/" class="nav__link" data-link><button>Back to Home</button></a>
  </footer>
</div>
        `;
  }
}
