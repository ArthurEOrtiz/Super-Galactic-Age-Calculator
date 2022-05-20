import Human from './../src/js/human.js';

describe('Human',()=> { 

  test('should correctly cread a human object with Earth years and the user inputted age', ()=> {
    const human = new Human(34);
    expect(human.earthYears).toEqual(34);
  });

});