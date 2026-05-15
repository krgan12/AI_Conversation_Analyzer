import Container from "@/components/Container";
import Examples from "@/components/Examples";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HomeBanner from "@/components/HomeBanner";
import Pricing from "@/components/Pricing";
import Reviews from "@/components/Reviews";
import StartComponent from "@/components/StartComponent";
import Steps from "@/components/Steps";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
  <div>
    <HomeBanner />
     <div id="features">
      <Features />
    </div>
    
    <div id="examples">
      <Examples />
    </div>
    {/* TODO: As soon as everything else is done */}
    {/* <div id="steps">
      <Steps />
    </div> */}
    <div id="pricing">
      <Pricing />
    </div>
    <div id="reviews">
      <Reviews />
    </div>
    <StartComponent />
   <Container>
    <div></div>
    
    
   </Container>

  </div>
  );
}
