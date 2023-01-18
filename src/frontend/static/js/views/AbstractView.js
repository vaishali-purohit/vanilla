export default class {
  constructor(params) {
    this.params = params;
  }

  setTitle(title) {
    document.title = title;
  }

  setScript(src) {
    document.body.appendChild(src);
  }

  removeScript() {
    const scriptList = document.querySelectorAll("script[type='module']")
    const convertedNodeList = Array.from(scriptList)
    const testScript = convertedNodeList.find(script => script.id === "client")
    testScript.parentNode.removeChild(testScript)
  }

  async getHtml() {
    return "";
  }
}
