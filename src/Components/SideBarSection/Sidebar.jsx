import { MdOutlinePushPin } from "react-icons/md";

import Assignees from "./Assignees";
import Overview from "./Overview";
import {
  sidebarMainStyle,
  containerStyles,
  contentTypeStyles,
  contentDetailsStyles,
  pinIconStyle,
  pinTextStyle,
} from "./SidebarStyles";
import { TYPE_OF_INPUT, CHECKBOX_ID } from "../../Constants";

const Sidebar = () => {
  const pinnedContainer = () => {
    return (
      <div className={containerStyles}>
        <p className="flex gap-2 items-center">
          <MdOutlinePushPin className={pinIconStyle} />
          <span className={pinTextStyle}>Pinned</span>
        </p>
        <div className="toggle-switch">
          <input
            type={TYPE_OF_INPUT}
            id={CHECKBOX_ID}
            className="toggle-input"
          />
          <label htmlFor={CHECKBOX_ID} className="toggle-label"></label>
        </div>
      </div>
    );
  };

  const createdOnContainer = () => {
    return (
      <div className={containerStyles}>
        <p className={contentTypeStyles}>Created On</p>
        <p className={contentDetailsStyles}>17 Oct 2024, 7:12 PM</p>
      </div>
    );
  };

  return (
    <aside className={sidebarMainStyle}>
      {pinnedContainer()}
      {createdOnContainer()}
      <Assignees />
      <Overview />
    </aside>
  );
};

export default Sidebar;
