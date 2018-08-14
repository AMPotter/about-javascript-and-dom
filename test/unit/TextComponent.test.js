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

    const textComp2 = new TextComponent();
    const textNode2 = document.createTextNode('');

    expect(textComp2.render()).toEqual(textNode2);
  });

  it('Update method correctly updates originally rendered text node', () => {
    const textComp = new TextComponent('howdy');
    const textNode = document.createTextNode('howdy');
    const newNode = document.createTextNode('doody');

    expect(textComp.render()).toEqual(textNode);
    textComp.update('doody');
    expect(textComp.text).toEqual('doody');
    expect(textComp.render()).toEqual(newNode);
  });
});