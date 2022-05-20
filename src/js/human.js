export default class Human {
  constructor(age) {
    this.earthYears = age;
    this.mercuryYears = Math.floor(age / .24);
    this.venusYears = Math.floor(age / .62);
    this.marsYears = Math.floor(age / 1.88);
    this.jupiterYears = Math.floor(age / 11.86);

  }

}