$(document).ready(function () {

  //Init ScrollMagic
  var controller = new ScrollMagic.Controller();
  
   //pin the into
   var pinIntroScene = new ScrollMagic.Scene({
    triggerElement: '#intro',
    triggerHook: 0,
    duration: '30%'
  })
  .setPin('#intro', {pushFollowers: false})
  .addTo(controller);


  //pin the into
  var pinIntroScene2 = new ScrollMagic.Scene({
    triggerElement: '#projet-01',
    triggerHook: 0.4
  })
  .setPin('#intro', {pushFollowers: false})
  .addTo(controller);

  var parallaxTl = new TimelineMax();
  parallaxTl
    .from('.content-wrapper', .4, {autoAlpha: 0, ease:Power0.easeNone}, .4)
    .from('.bcg', 2, {y: '-50%', ease:Power0.easeNone}, 0);

  //Parallax scene
  var sliderParallaxScene = new ScrollMagic.Scene({
    triggerElement: '.bcg-parallax',
    triggerHook: 1,
    duration: '200%'
  })
  .setTween(parallaxTl)
  .addTo(controller);

  //build a scene
  var ourScene = new ScrollMagic.Scene({
    triggerElement: '#projet-01 .div-rond',
    //le point final qui va arrêter l'animation
    //duration: '60%',
    //le point départ qui va declencher l'animation
    triggerHook: .9,
    reverse: false
  })

  //ajouter la class 'fade-in' sur #projet-01
  .setClassToggle('#projet-01', 'fade-in')
  .addIndicators({
    name: 'fade scene',
    colorTrigger: 'black',
    //indent: 200,
    colorStart: '#75C695',
    colorEnd: 'pink'
  })
  .addTo(controller);

  //boucle pour chaque élément .project
  $('.projet').each( function(){

    //build a scene
    var ourScene = new ScrollMagic.Scene({
      triggerElement: this.children[0],
      //le point final qui va arrêter l'animation
      duration: '60%',
      //le point départ qui va declencher l'animation
      triggerHook: .5
    })
    //ajouter la class 'fade-in' sur #projet-01
    .setClassToggle(this, 'fade-in')
    .addIndicators({
      name: 'each scene',
      colorTrigger: 'black',
      //indent: 200,
      colorStart: '#75C695',
      colorEnd: 'pink'
    })
    .addTo(controller);
  })
})