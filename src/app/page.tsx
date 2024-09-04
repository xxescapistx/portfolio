'use client'
import Experiences from "@/components/experience/experience";
import Experience from "@/components/experience/experience";
import { experiences } from "@/components/experience/experiences";
import { useEffect, useRef } from "react";

export default function Home() {


  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    let r = 255, g = 0, b = 0;
    let step = 5; // Faster blinking
    const starCount = 100;
    const stars = [];

    // Function to generate random stars
    const createStars = () => {
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2 + 1,
          alpha: Math.random(),
          speed: Math.random() * 1 + 0.5, // Speed of the star
        });
      }
    };

    // Function to draw and move stars
    const drawStars = () => {
      stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
        ctx.fill();

        // Move the star
        star.y += star.speed;

        // Reset star position when it goes off the screen
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }
      });
    };

    createStars();

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw the blinking RGB background
      ctx.fillStyle = `rgb(${r},${g},${b})`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw and move the stars
      drawStars();

      // RGB color transitions
      if (r === 255 && g < 255 && b === 0) {
        g += step;
      } else if (g === 255 && r > 0 && b === 0) {
        r -= step;
      } else if (g === 255 && b < 255 && r === 0) {
        b += step;
      } else if (b === 255 && g > 0 && r === 0) {
        g -= step;
      } else if (b === 255 && r < 255 && g === 0) {
        r += step;
      } else if (r === 255 && b > 0 && g === 0) {
        b -= step;
      }

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

      return (<>
  <div className="hero min-h-screen z-1">
      <div className="hero-content flex-col">
        <h1 className="text-2xl font-semibold text-slate-500 sm:text-5xl">
          Testing
        </h1>
      </div>
    </div>
    <canvas ref={canvasRef} className="fixed top-0 left-0 bg-blue-200 h-full w-full z-[-1]"></canvas>
      </>
  );
}
