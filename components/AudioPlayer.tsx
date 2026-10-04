"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

interface AudioPlayerProps {
  autoPlayTrigger?: boolean;
}

export default function AudioPlayer({ autoPlayTrigger }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const isRunningRef = useRef(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startMusic = () => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;

      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioCtx();
      }

      if (audioCtxRef.current.state === "suspended") {
        audioCtxRef.current.resume();
      }

      const ctx = audioCtxRef.current;
      isRunningRef.current = true;
      setIsPlaying(true);

      // Romantic celebratory arpeggio notes (F major / D minor pentatonic: F, A, C, D, E, G)
      const scale = [261.63, 293.66, 329.63, 349.23, 392.0, 440.0, 523.25, 587.33, 659.25];
      let step = 0;

      const playChord = () => {
        if (!isRunningRef.current || !ctx || ctx.state === "closed") return;

        const now = ctx.currentTime;
        // Play gentle bell chime note
        const noteFreq = scale[step % scale.length];
        step = (step + Math.floor(Math.random() * 3) + 1) % scale.length;

        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        const filter = ctx.createBiquadFilter();

        osc.type = "sine";
        osc.frequency.setValueAtTime(noteFreq, now);

        filter.type = "lowpass";
        filter.frequency.setValueAtTime(1200, now);

        gain.gain.setValueAtTime(0, now);
        gain.gain.linearRampToValueAtTime(0.06, now + 0.1);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 2.5);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now);
        osc.stop(now + 2.6);

        // Schedule next note
        const delay = (Math.random() * 400 + 600);
        timerRef.current = setTimeout(playChord, delay);
      };

      playChord();
    } catch (e) {
      console.error("Audio error", e);
    }
  };

  const stopMusic = () => {
    isRunningRef.current = false;
    setIsPlaying(false);
    if (timerRef.current) clearTimeout(timerRef.current);
    if (audioCtxRef.current && audioCtxRef.current.state === "running") {
      audioCtxRef.current.suspend();
    }
  };

  const toggleMusic = () => {
    if (isPlaying) {
      stopMusic();
    } else {
      startMusic();
    }
  };

  useEffect(() => {
    if (autoPlayTrigger && !isPlaying) {
      startMusic();
    }
  }, [autoPlayTrigger]);

  useEffect(() => {
    return () => {
      isRunningRef.current = false;
      if (timerRef.current) clearTimeout(timerRef.current);
      if (audioCtxRef.current) {
        audioCtxRef.current.close().catch(() => {});
      }
    };
  }, []);

  return (
    <button
      onClick={toggleMusic}
      className="audio-toggle"
      aria-label={isPlaying ? "إيقاف الموسيقى" : "تشغيل الموسيقى"}
      title={isPlaying ? "إيقاف الموسيقى" : "تشغيل الموسيقى"}
      id="audio-toggle-btn"
    >
      {isPlaying ? (
        <Volume2 size={22} className="text-amber-300 animate-pulse" />
      ) : (
        <VolumeX size={22} className="opacity-70" />
      )}
    </button>
  );
}
