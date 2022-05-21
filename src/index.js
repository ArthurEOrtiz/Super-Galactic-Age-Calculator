import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Human from '../src/js/human.js';

$(document).ready(function(){
  $('#userInputForm').submit(function(event){
    event.preventDefault();
    const userAge = parseInt($('#userAge').val());
    const stress = $("#stress").val();
    const activity = $("#activity").val();

    let human = new Human(userAge);

    human.lifeFactors(stress,activity);
    human.solarAgeCalc();
    human.deathClock();

    console.log(stress);
    console.log(activity);
    console.log (human);
    $("#mercuryAge").text(human.mercuryYears);
    $("#venusAge").text(human.venusYears);
    $("#earthAge").text(human.earthYears);
    $("#marsAge").text(human.marsYears);
    $("#jupiterAge").text(human.jupiterYears);

    $("#expectedMercuryDeath").text(human.expectedMercuryDeath);
    $("#expectedVenusDeath").text(human.expectedVenusDeath);
    $("#expectedEarthDeath").text(human.expectedEarthDeath);
    $("#expectedMarsDeath").text(human.expectedMarsDeath);
    $("#expectedJupiterDeath").text(human.expectedJupiterDeath);

    
  });
});