import '../App.css';
import { useEffect, useRef} from 'react';

const Intro = ( ) => {
  const canvasRef = useRef(null);

  useEffect(() => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      const birdImg = new Image();
      birdImg.src = '../resources/isderalogo.png'; // Ensure the correct path

      let bird = {
          x: canvas.width / 2 - 50,
          y: canvas.height - 100,
          width: 100,
          height: 100,
          velocityY: -2,
      };

      function update() {
          bird.y += bird.velocityY;
          if (bird.y + bird.height < 0) {
              bird.y = canvas.height;
          }
      }

      function draw() {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(birdImg, bird.x, bird.y, bird.width, bird.height);
      }

      function animate() {
          update();
          draw();
          requestAnimationFrame(animate);
      }

      birdImg.onload = () => {
          animate();
      };
  }, []);

  return <canvas ref={canvasRef} width={500} height={500} />;
}

export default Intro
