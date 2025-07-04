import { ApiResponse } from "@/types/places";

export async function getPlaces() {
  const response = await fetch(
    "https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/property-listing-data.json"
  );

  if (!response.ok) {
    throw new Error("request to server ass");
  }

  const data: ApiResponse = await response.json();

  return data;
}
