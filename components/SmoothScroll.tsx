"use client";

import Scrollbar from "smooth-scrollbar";
import { useEffect } from "react";
import OverscrollPlugin from "smooth-scrollbar/plugins/overscroll";

const overscrollOptions = {
  enable: true,
  effect: "bounce",
  damping: 0.15,
  maxOverscroll: 150,
};

const options = {
  damping: 0.07,
  alwaysShowTracks: false,
  plugins: {
    overscroll: { ...overscrollOptions },
  },
};

const SmoothScroll = () => {
  useEffect(() => {
    const appElement = document.getElementById("app");

    if (!appElement) return;

    Scrollbar.use(OverscrollPlugin);
    const Scroll = Scrollbar.init(appElement, options);
    Scroll.track.yAxis.element.remove();

    return () => {
      if (Scrollbar) Scrollbar.destroy(appElement);
    };
  }, []);

  return null;
};

export default SmoothScroll;
