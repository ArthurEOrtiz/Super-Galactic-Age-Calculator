export default class Human {
  constructor(age) {
    this.earthYears = age;
  }

solarAgeCalc(){
  this.mercuryYears = Math.floor(this.earthYears / .24);
  this.venusYears = Math.floor(this.earthYears / .62);
  this.marsYears = Math.floor(this.earthYears / 1.88);
  this.jupiterYears = Math.floor(this.earthYears / 11.86);
}


lifeFactors(stress, activity){
  this.stressLevel = stress;
  this.activityLevel = activity;

  this.deathPoints = 0;

  if (this.stressLevel === "high") {
    this.deathPoints += 10;
  } else if (this.stressLevel === "medium") {
    this.deathPoints += 5;
  } else {
    this.deathPoints += 0;
  }

  if (this.activityLevel === "low") {
    this.deathPoints += 10;
  } else if (this.activityLevel === "medium") {
    this.deathPoints += 5;
  } else  {
    this.deathPoints += 0;
  }

} 


deathClock(){
  const deathAge = 80 - this.deathPoints;
  this.solarAgeCalc();
  this.lifeFactors();
  
  this.expectedEarthDeath = deathAge - this.earthYears;
  this.expectedMercuryDeath = Math.floor(deathAge / .24) - this.mercuryYears;
  this.expectedVenusDeath = Math.floor(deathAge / .62) - this.venusYears;
  this.expectedMarsDeath = Math.floor(deathAge / 1.88) - this.marsYears;
  this.expectedJupiterDeath = Math.floor(deathAge / 11.86) - this.jupiterYears;

  }

}
