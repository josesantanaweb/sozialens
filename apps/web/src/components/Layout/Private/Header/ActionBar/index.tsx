import SearchBar from "./SearchBar";
import Notification from "./Notification";
import ButtonSwitchSelectMode from "./ButtonSwitchSelectMode";

const ActionBar = () => {
    return (
        <div className="flex gap-3">
            <SearchBar />
            <Notification />
            <ButtonSwitchSelectMode />
        </div>
    );
};

export default ActionBar;
