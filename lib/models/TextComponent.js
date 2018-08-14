class TextComponent {
  constructor(text = '') {
    this.text = text;
  }

  render() {
    this.node = document.createTextNode(this.text);
    return this.node;
  }
  
  update(text) {
    this.text = text;
    this.node.data = this.text;
  }
}

module.exports = TextComponent;