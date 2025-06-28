// src/components/AlphaVoxLanding.jsx

import { useState } from "react";

export default function AlphaVoxLanding({ onInitialize }) {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && onInitialize) {
      onInitialize(name);
    }
    // Optional: you can also POST to /api/initialize or similar here
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[#080c18]">
      <div className="bg-gradient-to-b from-[#1b263b] to-[#111828] rounded-2xl p-8 shadow-2xl w-full max-w-lg border border-[#21304a]">
        <h1 className="text-4xl md:text-5xl font-orbitron text-[#37c8ff] drop-shadow-lg mb-4 tracking-widest">
          AlphaVox
        </h1>
        <p className="font-mono text-[#b5e6ff] text-lg mb-6">
          Multi-modal, neurodiverse-inclusive,<br />
          <span className="text-[#b5e6ff] font-semibold">speech-generating</span> AI communication system
        </p>
        <p className="text-[#fff] text-lg font-semibold mb-8">
          <span className="text-[#ffffffcc]">AlphaVox empowers expression, enhances social connection,<br />and promotes dignity through technology that listens, learns, and adapts.</span>
        </p>
        {/* Features row */}
        <div className="flex justify-between items-center gap-6 mb-10 text-[#34d2f3]">
          <div className="flex flex-col items-center">
            <span className="text-3xl">🖐️</span>
            <span className="mt-2 text-sm font-mono">Gestures</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl">👁️</span>
            <span className="mt-2 text-sm font-mono">Eye Tracking</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl">🔊</span>
            <span className="mt-2 text-sm font-mono">Vocalizations</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl">🟦</span>
            <span className="mt-2 text-sm font-mono">Symbol Boards</span>
          </div>
        </div>
        {/* Login Panel */}
        <div className="bg-[#1d253a] rounded-lg p-5 shadow-lg border border-[#253b53]">
          <h2 className="text-xl font-bold mb-2 text-[#a2f0fc] tracking-wider">
            Initialize Communication System
          </h2>
          <div className="mb-2 text-[#35e4b9] font-mono">User Identification</div>
          <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
            <div className="flex items-center border rounded px-3 py-2 bg-[#142035] border-[#253b53]">
              <span className="mr-2 text-[#38c3e5]">👤</span>
              <input
                type="text"
                className="bg-transparent text-white outline-none flex-1"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="mt-2 w-full py-2 rounded bg-gradient-to-r from-[#28a6f5] to-[#2b6cff] text-xl font-bold tracking-wider text-white shadow transition hover:from-[#00d4ff] hover:to-[#00aaff] focus:outline-none"
            >
              <span className="mr-2">⏻</span> Initialize System
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

