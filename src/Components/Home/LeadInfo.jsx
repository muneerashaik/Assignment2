import { Link } from "react-router-dom";

import {
  profileCircleStyle,
  leadDataBlockStyle,
  leadNameStyle,
  commonTypeName,
} from "./HomeStyles";
import { navigateLead } from "../../Constants";

const LeadInfo = ({ leadDetails }) => {
  function extractInitials(name) {
    let words = name.split(" ");
    let initials = words.map((word) => word[0]).join("");
    return initials.toUpperCase();
  }
  const leadInfoBlock = () => {
    return (
      <div className={leadDataBlockStyle}>
        <h2 className={leadNameStyle}>
          <div
            className={`${profileCircleStyle}`}
            style={{
              backgroundColor: leadDetails.color,
              fontSize: "24px",
            }}
          >
            <p>{extractInitials(leadDetails.name)}</p>
          </div>
          {leadDetails.name}
        </h2>
        <p className="text-gray-600 text-sm mb-4">
          <span className={commonTypeName}>Email: </span>
          {leadDetails.email}
        </p>
        <p className="text-blue-600 text-sm">
          <span className={commonTypeName}>Phone: </span>
          {leadDetails.phone}
        </p>
        <p className="text-gray-600 text-sm">
          <span className={commonTypeName}>Company: </span>
          {leadDetails.company}
        </p>
      </div>
    );
  };

  return <Link to={navigateLead(leadDetails.leadId)}>{leadInfoBlock()}</Link>;
};

export default LeadInfo;
