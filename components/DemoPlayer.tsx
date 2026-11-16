"use client";

import { Player, type PlayerRef } from "@remotion/player";
import { useEffect, useRef } from "react";
import { Demo, DEMO_DURATION, DEMO_FPS, DEMO_HEIGHT, DEMO_STILL_FRAME, DEMO_WIDTH } from "@/remotion/Demo";

export function DemoPlayer() {
  const ref = useRef<PlayerRef>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      ref.current?.pause();
      ref.current?.seekTo(DEMO_STILL_FRAME);
    }
  }, []);

  return (
    <Player
      ref={ref}
      component={Demo}
      durationInFrames={DEMO_DURATION}
      fps={DEMO_FPS}
      compositionWidth={DEMO_WIDTH}
      compositionHeight={DEMO_HEIGHT}
      autoPlay
      loop
      initiallyMuted
      controls={false}
      clickToPlay={false}
      acknowledgeRemotionLicense
      style={{ width: "100%", aspectRatio: `${DEMO_WIDTH} / ${DEMO_HEIGHT}` }}
    />
  );
}
