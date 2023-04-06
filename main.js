let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style ="color: #f68b7b;">Estudiante de Ingenieria Robotica.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
