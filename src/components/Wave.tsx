/** @format */

import React, { useEffect, useRef, useState } from "react";
import WaveSurfer from "wavesurfer.js";

const WaveformPlayer: React.FC<{ audioUrl: string }> = ({ audioUrl }) => {
  const waveformRef = useRef<HTMLDivElement | null>(null);
  const wavesurferRef = useRef<WaveSurfer | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (waveformRef.current) {
      wavesurferRef.current = WaveSurfer.create({
        container: waveformRef.current,
        waveColor: "#2F2F2F", // cor da onda
        progressColor: "#EF6C00", // cor da parte já tocada
        cursorColor: "#2d3748", // cor do cursor
        height: 60, // altura da wave
        barWidth: 4, // largura das barras
        barGap: 4, // espaçamento entre as barras
        barRadius: 3, // bordas arredondadas
        normalize: true, // normaliza amplitude
      });

      wavesurferRef.current.load(audioUrl);

      return () => {
        wavesurferRef.current?.destroy();
      };
    }
  }, [audioUrl]);

  const togglePlay = () => {
    if (wavesurferRef.current) {
      wavesurferRef.current.playPause();
      setIsPlaying(wavesurferRef.current.isPlaying());
    }
  };

  return (
    <div className="p-4 py-12 gap-3 flex flex-row-reverse ">
      <div ref={waveformRef} className="w-full min-w-46" />

      <div className="w-full flex justify-center">
        <img
          alt="play / pause"
          onClick={togglePlay}
          className="cursor-pointer "
          src={isPlaying ? "assets/icon/pause1.svg" : "assets/icon/play1.svg"}
        />
      </div>
    </div>
  );
};

export default WaveformPlayer;
