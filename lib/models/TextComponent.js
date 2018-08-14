class TextComponent {
  constructor(text = '') {
    this.text = text;
  }

  render() {
    const textNode = document.createTextNode(this.text);
    return textNode;
  }
  
  update(text) {
    this.text = text;
    this.render();
  }
}

module.exports = TextComponent;