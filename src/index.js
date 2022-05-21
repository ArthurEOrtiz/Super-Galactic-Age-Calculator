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
    
    $("#planetAge").show(100);
    $("#mercuryAge").text(human.mercuryYears);
    $("#venusAge").text(human.venusYears);
    $("#earthAge").text(human.earthYears);
    $("#marsAge").text(human.marsYears);
    $("#jupiterAge").text(human.jupiterYears);

  

    if ( human.deathAge > human.earthYears ) {
      $("#planetDeath").show(100);
      $("#planetPassedDeath").hide(100);
      human.deathClock();

      $("#expectedMercuryDeath").text(human.expectedMercuryDeath);
      $("#expectedVenusDeath").text(human.expectedVenusDeath);
      $("#expectedEarthDeath").text(human.expectedEarthDeath);
      $("#expectedMarsDeath").text(human.expectedMarsDeath);
      $("#expectedJupiterDeath").text(human.expectedJupiterDeath);
      
    } else {
      $("#planetPassedDeath").show(100);
      $("#planetDeath").hide(100);
      human.lifeClock();

      $("#lifeAfterMercuryDeath").text(human.lifeAfterMercuryDeath);
      $("#lifeAfterVenusDeath").text(human.lifeAfterVenusDeath);
      $("#lifeAfterEarthDeath").text(human.lifeAfterEarthDeath);
      $("#lifeAfterMarsDeath").text(human.lifeAfterMarsDeath);
      $("#lifeAfterJupiterDeath").text(human.lifeAfterJupiterDeath);

    }
    
  });
});