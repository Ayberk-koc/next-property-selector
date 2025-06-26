import { DropdownMenu } from "./ui/dropdown-menu";
import { Switch } from "./ui/switch";

export default function NavBar() {
  return (
    <div className="flex flex-col lg:flex-row items-center bg-customBlack/95 rounded-2xl border border-customGray backdrop-blur-[4px] py-8 px-10 space-y-6 lg:space-y-0">
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
      <div className="flex flex-col lg:flex-row gap-5 flex-1 items-center">
        <div className="flex gap-2 items-center">
          <Switch className="cursor-pointer"></Switch>
          <span className="text-sm-regular text-customWhite">Superhost</span>
          {/* <DropdownMenu></DropdownMenu> */}
        </div>
      </div>
    </div>
  );
}
