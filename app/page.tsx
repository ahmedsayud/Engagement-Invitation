"use client";

import { useState } from "react";
import StarCanvas from "@/components/StarCanvas";
import AudioPlayer from "@/components/AudioPlayer";
import GateEnvelope from "@/components/GateEnvelope";
import HeroSection from "@/components/HeroSection";
import DetailsCard from "@/components/DetailsCard";
import GallerySection from "@/components/GallerySection";
import LocationSection from "@/components/LocationSection";
import RSVPSection from "@/components/RSVPSection";
import ClosingSection from "@/components/ClosingSection";

export default function Home() {
  const [hasOpened, setHasOpened] = useState(false);

  return (
    <main className="relative min-h-screen">
      {/* Interactive 3D Envelope Gate */}
      <GateEnvelope onOpen={() => setHasOpened(true)} />

      {/* Floating Ambient Audio Player */}
      <AudioPlayer autoPlayTrigger={hasOpened} />

      {/* Background Starry Canvas */}
      <StarCanvas />

      {/* Main Content Scenes */}
      <div className="scenes">
        <HeroSection />
        <DetailsCard />
        <GallerySection />
        <LocationSection />
        <RSVPSection />
        <ClosingSection />
      </div>
    </main>
  );
}
