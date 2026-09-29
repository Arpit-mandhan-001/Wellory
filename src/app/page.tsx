"use client";

import { useState } from "react";
import HomeControl from "@/components/HomeControl";
import { NaturePowerSection } from "@/components/NaturePowerSection";
import NaturalEnergyShowcase from "@/components/NaturalEnergyShowcase";
import { WhatsInsideSection } from "@/components/WhatsInsideSection";
import { Footer } from "@/components/Footer";
import BackGroundVideo from "@/components/BackGroundVideo";

export default function Home() {

  return (
    <>
      {/* <HeroSection /> */}

      <HomeControl />

      <NaturePowerSection />
      
      <BackGroundVideo />

      <NaturalEnergyShowcase />

      <WhatsInsideSection />

      <Footer />
    </>
  );
}
