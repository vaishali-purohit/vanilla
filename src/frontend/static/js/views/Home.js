import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Make A Wish!");

    let script = document.createElement("script");
    script.id = "client";
    script.src = "/static/js/client.js";
    script.type = "module"
    this.setScript(script);
  }

  async getHtml() {
    return `
    <div>
    <link rel="stylesheet" href="/static/css/style.css">
  
    <div id="wish-form">
      <div>
        <p class="bold">Ho ho ho, what you want for christmas?</p>
        <br />
        <form id="post">
          <label class="lable">Who are You?</label>
          <input name="userid" id="username" placeholder="charlie.brown" />
          <p id="userError">*Your name is required.</p>
          <lable class="lable"> What do you want for christmas?</lable>
          <textarea name="wish" id="userwish" rows="10" cols="45" maxlength="100" placeholder="Gifts!"></textarea>
          <p id="wishError">*Please add your wish.</p>
          <button type="submit" id="submit-letter">Send</button>
        </form>
      </div>
    </div>
  </div>
        `;
  }
}
