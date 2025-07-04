"use client";

import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import Card from "@/components/ui/Card";

export default function Home() {
  return (
    <>
      <Hero></Hero>
      <div className="px-10 relative bottom-8">
        <NavBar></NavBar>
      </div>
      <h1 className="text-xl-regular text-customWhite px-10 mb-8">
        Over 200 stays
      </h1>
      <div className="w-fit mb-10 mx-auto grid grid-cols-1 gap-y-[72px] gap-x-8 min-[800px]:grid-cols-2 min-[1280px]:grid-cols-3 min-[1550px]:grid-cols-4 justify-center items-center max-h-[1000px] overflow-y-auto scroll-smooth overflow-x-hidden scrollbar-hidden">
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
    </>
  );
}
