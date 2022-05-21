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

  test('should return the stress levels from collected from user input; low, medium, high', ()=>{
    const human = new Human(34);
    human.stressLevel("low");
    expect(human.stressLevel).toEqual("low");
  });

  test('should return the activity levels from collected from user input; low, medium, high', ()=>{
    const human = new Human(34);
    human.activityLevel("medium");
    expect(human.activityLevel).toEqual("medium");
  });

  test('should calculate life expectansy via stress and activity inputs', ()=>{
    
    const userInputs = ["high", "medium", "low"]
    const cases = [[70,65,60],[75,70,65],[80,75,70]];
    

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
      const human = new Human(34);
      human.stressLevel(userInputs[i]);
      human.activityLevel(userInputs[j]);
      human.deathClock();
      expect(human.expectedEarthDeath).toEqual(cases[i][j]);
      }
    }
  });

  test('if the user is older than there life expectancy, if should return the diffrence', ()=>{
    const userInputs = ["high", "medium", "low"];
    const cases = [[20,25,30],[15,20,25],[10,15,20]];
    

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
      const human = new Human(90);
      human.stressLevel(userInputs[i]);
      human.activityLevel(userInputs[j]);
      human.deathClock();
      expect(human.yearsPassedDeath).toEqual(cases[i][j]);
      }
    }
    });


});