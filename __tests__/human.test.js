import Human from '../src/js/human.js';

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

  test('should record life factors of stress and activity levels from user input; low, medium, high', ()=>{
    
    const human = new Human(34);
    human.lifeFactors("low","high");
    expect(human.stressLevel).toEqual("low");
    expect(human.activityLevel).toEqual("high");

  });

  test('should assign a death point score according to lifefactors', ()=>{
    
    const userInputs = ["high", "medium", "low"];
    const cases = [[10,15,20],[5,10,15],[0,5,10]];

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
      const human = new Human(34);
      human.lifeFactors(userInputs[i],userInputs[j]);
      expect(human.deathPoints).toEqual(cases[i][j]);
      }
    }
  });

  test('should determing how many years a user has left to live on each planet', ()=>{
      
      const userInputs = ["high", "medium", "low"];
      const cases = [[70,65,60],[75,70,65],[80,75,70]];

      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
        const human = new Human(34);
        human.lifeFactors(userInputs[i],userInputs[j]);
        human.deathClock();
        expect(human.expectedEarthDeath).toEqual(cases[i][j] - human.earthYears);
        expect(human.expectedMercuryDeath).toEqual(Math.floor(cases[i][j] / .24) - human.mercuryYears);
        expect(human.expectedVenusDeath).toEqual(Math.floor(cases[i][j] / .62) - human.venusYears);
        expect(human.expectedMarsDeath).toEqual(Math.floor(cases[i][j] / 1.88) - human.marsYears);
        expect(human.expectedJupiterDeath).toEqual(Math.floor(cases[i][j] / 11.86) - human.jupiterYears);
        }
      }

    });

  test('should return years of life lived after death expectancy', ()=>{
    const userInputs = ["high", "medium", "low"];

    for (let i = 0; i < 3; i++){
      for (let j = 0; j < 3; j++) {
        const human = new Human(34);
        human.lifeFactors(userInputs[i],userInputs[j]);
        human.lifeClock();
        expect(human.lifeAfterEarthDeath).toEqual(human.earthYears - human.deathAge);
        expect(human.lifeAfterMercuryDeath).toEqual(human.mercuryYears - Math.floor(human.deathAge / .24));
        expect(human.lifeAfterVenusDeath).toEqual(human.venusYears - Math.floor(human.deathAge / .62));
        expect(human.lifeAfterMarsDeath).toEqual(human.marsYears - Math.floor(human.deathAge / 1.88));
        expect(human.lifeAfterJupiterDeath).toEqual(human.jupiterYears - Math.floor(human.deathAge / 11.86));
      }
    }


  });



});