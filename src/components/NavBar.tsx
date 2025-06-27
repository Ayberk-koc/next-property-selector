import { Switch } from "./ui/switch";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function NavBar() {
  return (
    <div className="flex flex-col lg:flex-row items-center bg-customBlack/95 rounded-2xl border border-customGray backdrop-blur-[4px] py-8 px-10 space-y-6 lg:space-y-0 lg:justify-between">
      <div className="flex shrink-0 flex-wrap gap-3 justify-center">
        <button className="px-4 py-2 rounded-lg hover:bg-customGray text-md-regular text-customWhite">
          All Stays
        </button>
        <button className="px-4 py-2 rounded-lg hover:bg-customGray text-md-regular text-customWhite">
          Norway
        </button>
        <button className="px-4 py-2 rounded-lg hover:bg-customGray text-md-regular text-customWhite">
          Finland
        </button>
        <button className="px-4 py-2 rounded-lg hover:bg-customGray text-md-regular text-customWhite">
          Sweden
        </button>
        <button className="px-4 py-2 rounded-lg hover:bg-customGray text-md-regular text-customWhite">
          Switzerland
        </button>
      </div>
      <div className="flex flex-col lg:flex-row gap-5 items-center">
        <div className="flex gap-2 items-center">
          <Switch className="cursor-pointer"></Switch>
          <span className="text-sm-regular text-customWhite">Superhost</span>
          <DropdownMenu>
            <DropdownMenuTrigger
              asChild
              className="group data-[state=open]:bg-customOrange "
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
              <DropdownMenuItem>Appartment</DropdownMenuItem>
              <DropdownMenuItem>House</DropdownMenuItem>
              <DropdownMenuItem>Rent</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}
