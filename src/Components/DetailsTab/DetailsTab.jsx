import { NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { BsActivity } from "react-icons/bs";
import { TfiWrite } from "react-icons/tfi";
import { IoDocumentText } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { GoHistory } from "react-icons/go";

import {
  detailsLiStyle,
  detailsNavStyle,
  detailsUlStyle,
  detailsIconStyle,
  activeStyle,
} from "./DetailsTabStyles";
import {
  LEAD_DETAILS_PATH,
  ACTIVITIES_PATH,
  REMARK_PATH,
  DOCS_PATH,
  CALL_LOG_PATH,
  HISTORY_PATH,
} from "../../Constants";

const DetailsTab = () => {
  const isActivePathStyle = ({ isActive }) =>
    isActive ? activeStyle : detailsLiStyle;

  const navElements = () => {
    return (
      <ul className={detailsUlStyle}>
        <NavLink to={LEAD_DETAILS_PATH} className={isActivePathStyle}>
          <li>
            <CgProfile className={detailsIconStyle} />
            Lead Details
          </li>
        </NavLink>
        <NavLink to={ACTIVITIES_PATH} className={isActivePathStyle}>
          <li>
            <BsActivity className={detailsIconStyle} />
            Activities
          </li>
        </NavLink>
        <NavLink to={REMARK_PATH} className={isActivePathStyle}>
          <li>
            <TfiWrite className={detailsIconStyle} />
            Remarks
          </li>
        </NavLink>
        <NavLink to={DOCS_PATH} className={isActivePathStyle}>
          <li>
            <IoDocumentText className={detailsIconStyle} />
            Documents
          </li>
        </NavLink>
        <NavLink to={CALL_LOG_PATH} className={isActivePathStyle}>
          <li>
            <IoCallOutline className={detailsIconStyle} />
            Call Log
          </li>
        </NavLink>
        <NavLink to={HISTORY_PATH} className={isActivePathStyle}>
          <li>
            <GoHistory className={detailsIconStyle} />
            History Log
          </li>
        </NavLink>
      </ul>
    );
  };

  return (
    <nav className={detailsNavStyle}>
      {navElements()}
      <hr />
    </nav>
  );
};

export default DetailsTab;
