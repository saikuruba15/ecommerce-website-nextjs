import React from "react";
import HomeFooter from "@/components/home-footer";
import "../home.css";
import Clients from "@/components/clients";
import HomeFeatureTwo from "@/components/home-feature-two";
import HomeFeatureSix from "@/components/home-feature-six";
import HomeFeatureSeven from "@/components/home-feature-seven";
import HomeFeatureEight from "@/components/home-feature-eight";
import HomeAwards from "@/components/home-awards";
import HomeHeroOne from "@/components/home-hero-1";
import HomeNavbarOne from "@/components/home-navbar-one";
import SectionGridTwo from "@/components/section-grid-two";
import HomeFeatureFour from "@/components/home-feature-four";
import HomeCta from "@/components/home-cta";
import HomeFeatureFive from "@/components/home-feature-five";
import HomeFeatureOne from "@/components/home-feature-one";
import IntegrationsOne from "@/components/integrations-one";
import HomeTemplates from "@/components/home-templates";
import Tickets from "@/components/home-tickets";
import HomeAutomation from "@/components/home-automation";
import HomeFeatureThree from "@/components/home-feature-three";
export default function Example() {
  return (
    <>
      <HomeNavbarOne />
      <HomeHeroOne />
      <Clients />
      <HomeFeatureFour />
      <HomeFeatureThree />
      <HomeAutomation />
      <Tickets />
      <HomeTemplates />
      <HomeFeatureSeven />
      <HomeFeatureOne />
      <HomeFeatureFive />
      <IntegrationsOne />
      <SectionGridTwo />
      <HomeFeatureSix />
      <HomeFeatureEight />
      <HomeAwards />
      <HomeFeatureTwo />
      <HomeCta />
      <HomeFooter />
    </>
  );
}
