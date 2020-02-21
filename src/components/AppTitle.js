import React from "react";
import { useSpring, animated } from "react-spring";

const interp = i => r =>
  `translate3d(0, ${5 * Math.sin(r + (i * 2 * Math.PI) / 1.6)}px, 0)`;

export default function AppTitle() {
  const { radians } = useSpring({
    to: async next => {
      while (1) await next({ radians: 2 * Math.PI });
    },
    from: { radians: 0 },
    config: { duration: 3500 },
    reset: true
  });
  return (
    <animated.div
      className="App-header"
      style={{ transform: radians.interpolate(interp(1)) }}
    >
      RECORDING GEAR
    </animated.div>
  );
}
