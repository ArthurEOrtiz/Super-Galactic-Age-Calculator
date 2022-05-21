import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Human from '../src/js/human.js';

$(document).ready(function(){
  $('#userInputForm').submit(function(event){
    event.preventDefault();
    const userAge = parseInt($('#userAge').val());

    let human = new Human(userAge);

    console.log(human);
    
  });
});