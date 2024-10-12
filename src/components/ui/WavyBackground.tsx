'use client';

import anime from 'animejs';
import { useEffect } from 'react';

const WavyBackground = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    // Create smooth waving effects for each wave path using Anime.js
    anime({
      targets: '.wave-path-1',
      d: [
        {
          value:
            'M0,224L48,197.3C96,171,192,117,288,101.3C384,85,480,107,576,133.3C672,160,768,192,864,186.7C960,181,1056,139,1152,112C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z',
        },
        {
          value:
            'M0,160L48,149.3C96,139,192,117,288,122.7C384,128,480,160,576,186.7C672,213,768,235,864,218.7C960,203,1056,149,1152,122.7C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z',
        },
      ],
      easing: 'easeInOutSine',
      duration: 3000,
      direction: 'alternate',
      loop: true,
    });

    anime({
      targets: '.wave-path-2',
      d: [
        {
          value:
            'M0,224L60,240C120,256,240,288,360,272C480,256,600,192,720,165.3C840,139,960,149,1080,149.3C1200,149,1320,107,1380,85.3L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z',
        },
        {
          value:
            'M0,160L80,176C160,192,320,224,480,224C640,224,800,192,960,186.7C1120,181,1280,203,1360,213.3L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z',
        },
      ],
      easing: 'easeInOutSine',
      duration: 7000,
      direction: 'alternate',
      loop: true,
    });

    anime({
      targets: '.wave-path-3',
      d: [
        {
          value:
            'M0,160L40,149.3C80,139,160,117,240,106.7C320,96,400,96,480,128C560,160,640,224,720,218.7C800,213,880,139,960,101.3C1040,64,1120,64,1200,74.7C1280,85,1360,107,1400,117.3L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z',
        },
        {
          value:
            'M0,224L60,213.3C120,203,240,181,360,165.3C480,149,600,139,720,133.3C840,128,960,128,1080,122.7C1200,117,1320,107,1380,106.7L1440,106.7L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z',
        },
      ],
      easing: 'easeInOutSine',
      duration: 5000,
      direction: 'alternate',
      loop: true,
    });
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black flex items-center justify-center">
      <svg
        className="absolute left-0 w-full h-full filter blur-lg"
        viewBox="0 0 1440 400"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="wave-path-1"
          d="M0,224L48,197.3C96,171,192,117,288,101.3C384,85,480,107,576,133.3C672,160,768,192,864,186.7C960,181,1056,139,1152,112C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          fill="rgba(255, 0, 255, 0.4)"
        />
        <path
          className="wave-path-2"
          d="M0,224L60,240C120,256,240,288,360,272C480,256,600,192,720,165.3C840,139,960,149,1080,149.3C1200,149,1320,107,1380,85.3L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          fill="rgba(0, 0, 0, 0.4)"
        />
        <path
          className="wave-path-3"
          d="M0,160L40,149.3C80,139,160,117,240,106.7C320,96,400,96,480,128C560,160,640,224,720,218.7C800,213,880,139,960,101.3C1040,64,1120,64,1200,74.7C1280,85,1360,107,1400,117.3L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          fill="rgba(0, 0, 255, 0.4)"
        />
      </svg>
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-4">
        {children}
      </div>
    </div>
  );
};

export default WavyBackground;