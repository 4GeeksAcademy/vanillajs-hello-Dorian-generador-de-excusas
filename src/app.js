/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  function obtenerElQuienAleatorio() {
    const tiposDeQuien = new Array(
      "The dog",
      "My grandma",
      "The mailman",
      "My bird"
    );
    const posicionDelQuienRandom = Math.floor(
      Math.random() * tiposDeQuien.length
    );
    return tiposDeQuien[posicionDelQuienRandom];
  }

  function obtenerElQueHizoAleatorio() {
    const tiposDeQue = new Array("ate", "peed", "crushed", "broke");
    const posicionDelQueRandom = Math.floor(Math.random() * tiposDeQue.length);
    return tiposDeQue[posicionDelQueRandom];
  }

  function obtenerElQueEvitarAleatorio() {
    const tiposDeQueEvitar = new Array("my homework", "my phone", "the car");
    const posicionDelQueEvitarRandom = Math.floor(
      Math.random() * tiposDeQueEvitar.length
    );
    return tiposDeQueEvitar[posicionDelQueEvitarRandom];
  }

  function obtenerElCuandoAleatorio() {
    const tiposDeElCuando = new Array("my homework", "my phone", "the car");
    const posicionDeElCuandoRandom = Math.floor(
      Math.random() * tiposDeElCuando.length
    );
    return tiposDeElCuando[posicionDeElCuandoRandom];
  }

  function generarExcusa(quienEsCulpable, queHizo, queQuieresEvitar, cuando) {
    return `${quienEsCulpable} ${queHizo} ${queQuieresEvitar} ${cuando}`;
  }

  function generadorExcusas() {
    const quienEsCulpable = obtenerElQuienAleatorio();
    const queHizo = obtenerElQueHizoAleatorio();
    const queQuieresEvitar = obtenerElQueEvitarAleatorio();
    const cuando = obtenerElCuandoAleatorio();
    const excusa = generarExcusa(
      quienEsCulpable,
      queHizo,
      queQuieresEvitar,
      cuando
    );
    return excusa;
  }

  document.getElementById("excuse").innerHTML = generadorExcusas();
  console.log("Hello Rigo from the console!");
};
