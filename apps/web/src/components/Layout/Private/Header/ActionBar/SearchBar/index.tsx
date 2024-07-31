import { Icon } from "@sozialens/ui";

const SearchBar = () => {
    return (
        <label className="relative" htmlFor="search-input">
            <input
                id="search-input"
                className="h-[42px] w-[444px] p-3.5 bg-white rounded-xl border border-[#dcdcdd] justify-start items-center gap-[162px] inline-flex text-sm font-normal placeholder-base-400"
                placeholder="Search"
                aria-label="Search"
            />
            <Icon name="search" className="text-lg absolute right-[.875rem] text-primary-100 top-3" />
        </label>
    );
};

export default SearchBar;
