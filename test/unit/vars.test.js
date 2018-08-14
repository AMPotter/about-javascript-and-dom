describe('Variables, Arguments, Values, and References', () => {
  it('Reassigning a variable that holds a number changes the value of the variable', () => {
    let num = 1;
    expect(num).toBe(1);

    num = 2;
    expect(num).toBe(2);
  });

  it('Reassigning a variable that holds an object changes the value of the variable', () => {
    let garf = { name: 'garf', sound: 'fuck Mondays' };
    expect(garf).toEqual({ name: 'garf', sound: 'fuck Mondays' });

    garf = { name: 'odie', sound: 'bark woof' };
    expect(garf).toEqual({ name: 'odie', sound: 'bark woof' });
  });

  it('Assigning a value to a property of an object stored in a variable does not change the value of the variable', () => {
    let garf = { name: 'garf', sound: 'fuck Mondays' };
    let obj = garf;
    expect(garf).toBe(obj);

    garf.name = 'odie';
    expect(garf).toBe(obj);
  });

  it('Passing a variable that holds a number as an argument to a function copies the value to the corresponding parameter arguments and reassigning the argument in the function will not alter the original variable value', () => {
    let num = 1;

    function double(arg) {
      arg = arg + arg;
      return arg;
    }

    expect(double(num)).toBe(2);
    double(num);
    expect(num).toBe(1);
  });

  it('Passing a variable that holds an object as an argument to a function copies the object reference to the corresponding parameter arguments and reassigning the argument in the function will not alter the original variable', () => {
    let garf = { name: 'garf' };

    function killGarf(garf) {
      garf = { deadGarf: true };
      return garf;
    }

    expect(killGarf(garf)).toEqual({ deadGarf: true });
    killGarf(garf);
    expect(garf).toEqual({ name: 'garf' });
  });

  it('Passing a variable that holds an object as an argument to a function and then assigning a property to the object inside the function will alter the original object to have the new property value', () => {
    let garf = { name: 'garf' };
    let garfVar = garf;

    function killGarf(garf) {
      garf.deadGarf = true;
      return garf;
    }

    expect(garfVar).toBe(garf);
    
    killGarf(garfVar);
    
    expect(garfVar.deadGarf).toBe(true);
    expect(garfVar).toBe(garf);

  });
});