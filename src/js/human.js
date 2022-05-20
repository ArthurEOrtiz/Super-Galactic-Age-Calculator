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

stressLevel(string) {
  this.stressLevel = string;
}

activityLevel(string){
  this.activityLevel = string;
}

}