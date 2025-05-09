import React from "react";
import HomeFooter from "@/components/home-footer";
import "../home.css";
import HomeHero from "@/components/home-hero";
import HomeCta from "@/components/home-cta";
import HomeIntegrations from "@/components/home-integrations";
import HomeTemplates from "@/components/home-templates";
import HomeAutomation from "@/components/home-automation";
import AppOverview from "@/components/app-overview";

export default function Example() {
  return (
    <>
      <HomeHero />
      <AppOverview />
      <HomeTemplates />
      <HomeAutomation />
      <HomeIntegrations />
      <HomeCta />
      <HomeFooter />
    </>
  );
}
