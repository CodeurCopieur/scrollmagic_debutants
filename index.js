$(document).ready(function () {

  //Init ScrollMagic
  var controller = new ScrollMagic.Controller();
  
  //build a scene
  var ourScene = new ScrollMagic.Scene({
    triggerElement: '#projet-01'
  })
  //ajouter la class 'fade-in' sur #projet-01
  .setClassToggle('#projet-01', 'fade-in')
  .addIndicators({
    name: 'fade scene',
    colorTrigger: 'black',
    indent: 200,
    colorStart: '#75C695'
  })
  .addTo(controller);
})