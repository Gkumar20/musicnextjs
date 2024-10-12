"use client";

import WavyBackground from "./ui/WavyBackground";
import AnimationTooltip from "./ui/AnimationTooltipList";

function Instructors() {
  return (
    <WavyBackground>
      <h2 className="text-4xl font-bold">Meet Our Instructors</h2>
      <p className="text-lg mt-4">Discover the talented professionals who will guide your musical journey.</p>
      <div className="m-12 h-40 flex items-center justify-center">
        <AnimationTooltip />
      </div>
    </WavyBackground>
  );
}

export default Instructors;
