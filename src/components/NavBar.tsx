import { Switch } from "./ui/switch";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type PossibleStays = "All" | "Norway" | "Finland" | "Sweden" | "Switzerland";
type PropertyType = "Appartment" | "House" | "Rent";

export default function NavBar({
  changeCountry,
  toggleSuperhost,
  setPropertyType,
}: {
  changeCountry: (country: PossibleStays) => void;
  toggleSuperhost: () => void;
  setPropertyType: (property: PropertyType) => void;
}) {
  return (
    <div className="flex flex-col lg:flex-row items-center bg-customBlack/95 rounded-2xl border border-customGray backdrop-blur-[4px] py-8 px-10 space-y-6 lg:space-y-0 lg:justify-between w-full">
      <div className="flex shrink-0 flex-wrap gap-3 justify-center">
        <button
          onClick={() => changeCountry("All")}
          className="px-4 py-2 rounded-lg hover:bg-customGray text-md-regular text-customWhite cursor-pointer"
        >
          All Stays
        </button>
        <button
          onClick={() => changeCountry("Norway")}
          className="px-4 py-2 rounded-lg hover:bg-customGray text-md-regular text-customWhite cursor-pointer"
        >
          Norway
        </button>
        <button
          onClick={() => changeCountry("Finland")}
          className="px-4 py-2 rounded-lg hover:bg-customGray text-md-regular text-customWhite cursor-pointer"
        >
          Finland
        </button>
        <button
          onClick={() => changeCountry("Sweden")}
          className="px-4 py-2 rounded-lg hover:bg-customGray text-md-regular text-customWhite cursor-pointer"
        >
          Sweden
        </button>
        <button
          onClick={() => changeCountry("Switzerland")}
          className="px-4 py-2 rounded-lg hover:bg-customGray text-md-regular text-customWhite cursor-pointer"
        >
          Switzerland
        </button>
      </div>
      <div className="flex flex-col lg:flex-row gap-5 items-center">
        <div className="flex flex-col md:flex-row gap-5 items-center">
          <div className="flex gap-2">
            <Switch
              className="cursor-pointer data-[state=checked]:bg-red-800 data-[state=unchecked]:bg-gray-400"
              onClick={toggleSuperhost}
            ></Switch>
            <span className="text-sm-regular text-customWhite">Superhost</span>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger
              asChild
              className="group data-[state=open]:bg-customOrange"
            >
              <button className="py-3 px-6 flex gap-2.5 items-center border-2 border-customGray rounded-[12px]">
                <span className="text-customWhite text-md-regular group-data-[state=open]:text-customBlack">
                  Property type
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="group-data-[state=open]:rotate-180 transition ease-in-out duration-500"
                >
                  <path d="M18 9L12 15L6 9" stroke="#F2F9FE" strokeWidth="2" />
                </svg>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Type</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={() => setPropertyType("Appartment")}
                className="cursor-pointer"
              >
                Appartment
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => setPropertyType("House")}
                className="cursor-pointer"
              >
                House
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => setPropertyType("Rent")}
                className="cursor-pointer"
              >
                Rent
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}
