// JavaScript Document

/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

var button = document.querySelector("button");
var hide = document.querySelector('.hide');

function appear(){
   hide.classList.toggle("hide");
}

button.addEventListener("click", appear);