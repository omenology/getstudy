import React, { useState, useRef } from "react";
import { useTransition, animated, config, useChain } from "react-spring";
import { Grid } from "@material-ui/core";

import classes from "./Animation.module.css";

const slides = [
  { id: 0, url: "photo-1544511916-0148ccdeb877?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1901&q=80i", title: "judul 1" },
  { id: 1, url: "photo-1544572571-ab94fd872ce4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1534&q=80", title: "judul 2 " },
  { id: 2, url: "reserve/bnW1TuTV2YGcoh1HyWNQ_IMG_0207.JPG?ixlib=rb-1.2.1&w=1534&q=80", title: "judul 3" },
  { id: 3, url: "photo-1540206395-68808572332f?ixlib=rb-1.2.1&w=1181&q=80", title: "judul 4" },
];

export default (props) => {
  const [index, set] = useState(0);
  const bgimage = useRef();
  const transitions = useTransition(slides[index], (item) => item.id, {
    ref: bgimage,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { ...config.molasses, duration: 2000 },
  });
  const refText = useRef();
  const textTrans = useTransition(slides[index], (item) => item.id, {
    ref: refText,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });
  useChain([bgimage, refText]);
  return (
    <Grid container>
      <Grid item xs={12}>
        <div className={classes.slide} onClick={() => set((state) => (state + 1) % 4)}>
          {textTrans.map(({ item, props, key }) => (
            <animated.div key={key} style={{ ...props }}>
              {item.title}
            </animated.div>
          ))}
          {transitions.map(({ item, props, key }) => (
            <animated.div
              key={key}
              className={classes.img}
              style={{ ...props, backgroundImage: `url(https://images.unsplash.com/${item.url}&auto=format&fit=crop)` }}
            />
          ))}
        </div>
      </Grid>
    </Grid>
  );
};
