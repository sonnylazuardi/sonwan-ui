import * as React from "react";
import { motion, useAnimation } from "framer-motion";
import Arrow from "@/icons/Arrow";

interface Swipe {
  onSwipeFinish?: Function;
  title: string;
}

const Swipe = (props: Swipe) => {
  const controls = useAnimation();
  const controlBg = useAnimation();
  return (
    <div className="relative mb-4">
      <div className="p-5 rounded-full bg-purple text-white flex items-center justify-center tracking-widest text-sm font-semibold ">
        {props.title}
      </div>
      <motion.div
        className="rounded-full h-11 bg-white absolute top-2 left-2 flex items-center justify-center"
        style={{ width: 44 }}
        animate={controlBg}
      ></motion.div>
      <motion.div
        className="rounded-full w-11 h-11 bg-white absolute top-2 left-2 flex items-center justify-center cursor-pointer"
        drag="x"
        dragConstraints={{ left: 0, right: 250 }}
        dragMomentum={false}
        dragElastic={0}
        animate={controls}
        onDrag={(_, info) => {
          let value = info.offset.x + 44;
          if (value > 294) value = 294;
          if (value < 44) value = 44;
          controlBg.set({ width: value });
        }}
        onDragEnd={(_, info) => {
          if (info.offset.x > 240) {
            props.onSwipeFinish && props.onSwipeFinish();
          }
          controls.start({ x: 0 });
          controlBg.start({ width: 44 });
        }}
      >
        <Arrow />
      </motion.div>
    </div>
  );
};

export default Swipe;
