"use client";

import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";

import { useQuery } from "@tanstack/react-query";
import { getPlaces } from "@/lib/fetchFunctions";
import Carts from "@/components/Cards";
import { Reuleaux } from "ldrs/react";
import "ldrs/react/Reuleaux.css";
import { useMemo, useState } from "react";

type PossibleStays = "All" | "Norway" | "Finland" | "Sweden" | "Switzerland";
type PropertyType = "All" | "1" | "2";

export default function Home() {
  const [country, setCountry] = useState<PossibleStays>("All");
  const [superhostIsActive, setSuperhostIsActive] = useState<boolean>(false);
  const [property, setProperty] = useState<PropertyType>("All");

  const { data, error, isLoading, isError } = useQuery({
    queryKey: ["properties"],
    queryFn: getPlaces,
  });

  //mehrere useMemo's wäre besser, aber calculation time eh niedrig -> übersichtlicher.
  const filteredData = useMemo(() => {
    if (!data) return [];

    const filteredByPlace = data.filter(
      (elem) => country === "All" || elem.location === country
    );

    const filteredBySuperhost = filteredByPlace.filter(
      (elem) => !superhostIsActive || elem.superhost
    );

    const filteredByPropertyType = filteredBySuperhost.filter(
      (elem) =>
        property === "All" || property === elem.capacity.bedroom.toString()
    );

    return filteredByPropertyType;
  }, [data, country, superhostIsActive, property]);

  function handleChoseCountry(country: PossibleStays) {
    setCountry(country);
  }

  function handleToggleSuperhostIsActive() {
    setSuperhostIsActive((prevState) => !prevState);
  }

  function handleSetPropertyType(type: PropertyType) {
    setProperty(type);
  }

  return (
    <>
      <Hero></Hero>
      <div className="px-10 relative bottom-8">
        <NavBar
          changeCountry={handleChoseCountry}
          toggleSuperhost={handleToggleSuperhostIsActive}
          setPropertyType={handleSetPropertyType}
        ></NavBar>
      </div>
      <h1 className="text-xl-regular text-customWhite px-10 mb-8">
        Over 200 stays
      </h1>
      <div className="w-fit mb-10 mx-auto grid grid-cols-1 gap-y-[72px] gap-x-8 min-[800px]:grid-cols-2 min-[1280px]:grid-cols-3 min-[1550px]:grid-cols-4 justify-center items-center max-h-[1000px] overflow-y-auto scroll-smooth overflow-x-hidden scrollbar-hidden">
        {isLoading && (
          <Reuleaux
            size="37"
            stroke="5"
            strokeLength="0.15"
            bgOpacity="0.1"
            speed="1.2"
            color="black"
          />
        )}
        {isError && <p>{error.message}</p>}
        {data != undefined && <Carts places={filteredData}></Carts>}
      </div>
    </>
  );
}
