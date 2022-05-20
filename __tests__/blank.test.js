import Human from './../src/js/human.js';

describe('Human',()=> { 

  test('should correctly cread a human object with Earth years and the user inputted age', ()=> {
    const human = new Human(34);
    expect(human.earthYears).toEqual(34);
  });

  test('should calculate Earth years into the other planet years; mercury, venus, mars, jupiter', ()=> {
    const human = new Human(34);
    expect(human.mercuryYears).toEqual(8);
    expect(human.venusYears).toEqual(8);
    expect(human.marsYears).toEqual(8);
    expect(human.jupiterYears).toEqual(8);
  });

});