const Animal = require('../../lib/models/Animal');

describe('Animal class tests', () => {
  const garf = new Animal('Garf', 'fuck Mondays');
  const odie = new Animal('Odie', 'woof bark');

  it('Animals share the same prototype', () => {
    expect(garf.constructor.name).toBe('Animal');
    expect(odie.constructor.name).toBe('Animal');
  });

  it('Animals share the same speak method', () => {
    expect(garf.constructor.speak).toBe(odie.constructor.speak);
  });

  it('Animals share the same obj.constructor.name value', () => {
    expect(garf.constructor.name).toBe(odie.constructor.name);
  });

  it('Animals have different results from calling their speak method', () => {
    expect(garf.speak()).not.toBe(odie.speak());
  });

});