import Human from './../src/js/human.js';

describe('Human',()=> { 

  test('should correctly create a human object with Earth years and the user inputted age', ()=> {
    const human = new Human(34);
    expect(human.earthYears).toEqual(34);
  });

  test('should calculate Earth years into the other planet years; mercury, venus, mars, jupiter', ()=> {
    const human = new Human(34);
    human.solarAgeCalc();
    expect(human.mercuryYears).toEqual(141);
    expect(human.venusYears).toEqual(54);
    expect(human.marsYears).toEqual(18);
    expect(human.jupiterYears).toEqual(2);
  });

  test('should return the stress levels from collected from user input; low, med, high', ()=>{
    const human = new Human(34);
    human.stressLevel("low");
    expect(human.stressLevel).toEqual("low");

  });



});