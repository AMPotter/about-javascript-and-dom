class ElementClasses {
  constructor(element) {
    if(element instanceof HTMLElement) this.element = element;
    else throw 'Invalid or missing element argument!';
  }

  add(className) {
    this.element.classList.add(className);
  }

  remove(className) {
    this.element.classList.remove(className);
  }
}

module.exports = ElementClasses;