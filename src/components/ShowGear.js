import React from "react";
import { useSpring, animated } from "react-spring";
import Fade from "react-reveal/Fade";
import { gear } from "./gear";

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

export default function ShowGear() {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 }
  }));

  let gearList = gear.items.map(item => {
    return (
      <Fade bottom key={item.id}>
        <animated.div
          className="card"
          key={item.id}
          onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
          onMouseLeave={() => set({ xys: [0, 0, 1] })}
          style={{ transform: props.xys.interpolate(trans) }}
        >
          <img className="card-image" src={item.img} alt={item.title} />
          <span className="card-title">{item.title}</span>
        </animated.div>
      </Fade>
    );
  });

  return <div className="container">{gearList}</div>;
}
