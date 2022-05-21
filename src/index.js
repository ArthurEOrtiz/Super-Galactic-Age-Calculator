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

    console.log(stress);
    console.log(activity);
    let human = new Human(userAge);

    human.solarAgeCalc();

    $("#mercuryAge").text(human.mercuryYears);
    $("#venusAge").text(human.venusYears);
    $("#earthAge").text(human.earthYears);
    $("#marsAge").text(human.marsYears);
    $("#jupiterAge").text(human.jupiterYears);


    
    
  });
});