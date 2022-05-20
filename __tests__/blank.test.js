import Human from './../src/js/human.js';

describe('Human',()=> { 

  test('should correctly cread a human object with Earth years and the user inputted age', ()=> {
    const human = new Human(34);
    expect(human.earthYears).toEqual(34);
  });

  test('should calculate Earth years into the other planet years; mercury, venus, mars, jupiter', ()=> {
    const human = new Human(34);
    expect(human.mercuryYears).toEqual(141);
    expect(human.venusYears).toEqual(54);
    expect(human.marsYears).toEqual(18);
    expect(human.jupiterYears).toEqual(2);
  });

});