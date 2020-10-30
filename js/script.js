window.onload= function() {
  Particles.init({

// normal options
  selector: '.background',
  maxParticles: 450,
// options for breakpoints
  responsive: [
    {
      breakpoint: 768,
      options: {
        maxParticles: 200,
        minDistance: 30,
        color: '#ffffff'
      }
    },
    {
      breakpoint: 425,
      options: {
        maxParticles: 200,
        minDistance: 30,
        color: '#ffffff'
      }
    },
    {
      breakpoint: 320,
      options: {
        maxParticles: 200,
        minDistance: 30,
        color: '#ffffff'
// disables particles.js
      }
    }
  ]
});
};
