const ElementClasses = require('../../lib/models/ElementClasses');

describe('ElementClasses tests', () => {
  it('Throws error if argument missing in constructor', () => {
    expect(() => { 
      let classInstance = new ElementClasses(); // eslint-disable-line
    }).toThrow();
  });

  it('Add method adds the className to the element', () => {
    let span = document.createElement('span');
    let instance = new ElementClasses(span);
    instance.add('text');
    expect(instance.element.classList).toContain('text');
  });

  it('Remove method removes the classNAme from the element', () => {
    let span = document.createElement('span');
    let instance = new ElementClasses(span);
    instance.add('text');
    expect(instance.element.classList).toContain('text');
    instance.remove('text');
    expect(instance.element.classList).not.toContain('text');
    expect(instance.remove('notreal')).toBe(undefined);
  });
});