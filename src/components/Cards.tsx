import Card from "@/components/ui/Card";

import { ApiResponse } from "@/types/places";

export default function Carts({ places }: { places: ApiResponse }) {
  return (
    <>
      {places.map((place) => (
        <Card place={place} key={place.id}></Card>
      ))}
    </>
  );
}
