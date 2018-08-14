const TextComponent = require('../../lib/models/TextComponent');

describe('TextComponent tests', () => {
  it('Text property defaults to empty string', () => {
    const textComp = new TextComponent();

    expect(textComp.text).toBe('');
  });

  it('Text property constructs properly', () => {
    const textComp = new TextComponent('howdy');

    expect(textComp.text).toBe('howdy');
  });

  it('Render method returns text node with correct value', () => {
    const textComp = new TextComponent('howdy');
    const textNode = document.createTextNode('howdy');

    expect(textComp.render()).toEqual(textNode);
  });

  it('Update method correctly updates originally rendered text node', () => {
    const textComp = new TextComponent('howdy');
    const textNode = document.createTextNode('howdy');

    expect(textComp.render()).toEqual(textNode);

    const newNode = document.createTextNode('doody');

    textComp.update('doody');

    expect(textComp.text).toEqual('doody');
    expect(textComp.render()).toEqual(newNode);
  });
});