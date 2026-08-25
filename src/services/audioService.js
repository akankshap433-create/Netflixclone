// ==========================================
// TUDUM CINEMATIC AUDIO SYNTHESIZER
// Uses Web Audio API for zero-latency, 100% reliable Netflix sound
// ==========================================

export class TudumAudioService {
  constructor() {
    this.ctx = null;
  }

  getAudioContext() {
    if (!this.ctx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        this.ctx = new AudioContextClass();
      }
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume().catch(() => {});
    }
    return this.ctx;
  }

  playTudum() {
    try {
      const ctx = this.getAudioContext();
      if (!ctx) return;

      const now = ctx.currentTime + 0.05;

      // Master gain for warmth and headroom
      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.85, now);
      masterGain.connect(ctx.destination);

      // Lowpass filter for cinematic warmth
      const filter = ctx.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(450, now);
      filter.frequency.exponentialRampToValueAtTime(120, now + 2.2);
      filter.connect(masterGain);

      // --- 1. First "TU" Punch (Deep Sub Thud) ---
      const oscTu = ctx.createOscillator();
      const gainTu = ctx.createGain();
      oscTu.type = "sine";
      oscTu.frequency.setValueAtTime(80, now);
      oscTu.frequency.exponentialRampToValueAtTime(38, now + 0.18);

      gainTu.gain.setValueAtTime(0.9, now);
      gainTu.gain.exponentialRampToValueAtTime(0.001, now + 0.22);

      oscTu.connect(gainTu);
      gainTu.connect(filter);
      oscTu.start(now);
      oscTu.stop(now + 0.25);

      // --- 2. Heavy Cinematic "DUMMM..." Impact (Second Hit at +0.18s) ---
      const dumTime = now + 0.16;

      // Deep Sub Bass
      const oscDumSub = ctx.createOscillator();
      const gainDumSub = ctx.createGain();
      oscDumSub.type = "triangle";
      oscDumSub.frequency.setValueAtTime(65, dumTime);
      oscDumSub.frequency.exponentialRampToValueAtTime(32, dumTime + 1.8);

      gainDumSub.gain.setValueAtTime(0.95, dumTime);
      gainDumSub.gain.exponentialRampToValueAtTime(0.001, dumTime + 2.0);

      oscDumSub.connect(gainDumSub);
      gainDumSub.connect(filter);
      oscDumSub.start(dumTime);
      oscDumSub.stop(dumTime + 2.1);

      // Resonant Synth Body (D Minor chord tones: D2, A2, D3, F3)
      const frequencies = [73.42, 110.00, 146.83, 174.61];
      frequencies.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        
        osc.type = idx % 2 === 0 ? "sawtooth" : "triangle";
        osc.frequency.setValueAtTime(freq, dumTime);
        osc.frequency.exponentialRampToValueAtTime(freq * 0.98, dumTime + 2.0);

        const initialVol = 0.28 / (idx + 1);
        gain.gain.setValueAtTime(initialVol, dumTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, dumTime + 2.2);

        osc.connect(gain);
        gain.connect(filter);
        osc.start(dumTime);
        osc.stop(dumTime + 2.3);
      });

      // Metallic Sheen / Ribbon Texture
      const noiseBuffer = ctx.createBuffer(1, ctx.sampleRate * 0.4, ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      for (let i = 0; i < noiseBuffer.length; i++) {
        output[i] = (Math.random() * 2 - 1) * 0.05;
      }
      const whiteNoise = ctx.createBufferSource();
      whiteNoise.buffer = noiseBuffer;

      const noiseFilter = ctx.createBiquadFilter();
      noiseFilter.type = "bandpass";
      noiseFilter.frequency.setValueAtTime(1200, dumTime);
      noiseFilter.Q.setValueAtTime(3, dumTime);

      const noiseGain = ctx.createGain();
      noiseGain.gain.setValueAtTime(0.2, dumTime);
      noiseGain.gain.exponentialRampToValueAtTime(0.001, dumTime + 0.35);

      whiteNoise.connect(noiseFilter);
      noiseFilter.connect(noiseGain);
      noiseGain.connect(masterGain);

      whiteNoise.start(dumTime);
      whiteNoise.stop(dumTime + 0.4);

    } catch (e) {
      console.warn("Audio autoplay blocked or unsupported:", e);
    }
  }
}

export const tudumAudio = new TudumAudioService();
