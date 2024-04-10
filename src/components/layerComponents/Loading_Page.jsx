import React from "react";
import ContentLoader from "react-content-loader";

export default function Loading_Page() {
  return (
    <>
      <div className="loader">
        <div>
          <ContentLoader height={"150px"} width={500} speed={1}>
            {/* Only SVG shapes */}

            <rect x="90" y="40" rx="5" ry="5" width="100" height="15" />
            <rect x="90" y="60" rx="5" ry="5" width="150" height="15" />
            <rect x="90" y="80" rx="5" ry="8" width="100" height="15" />
            <circle cx="100" cy="120" r="10" />
            <circle cx="130" cy="120" r="10" />
          </ContentLoader>
        </div>
        <div>
          <ContentLoader height={"250px"} width={500} speed={1}>
            {/* Only SVG shapes */}

            <rect x="65" y="20" rx="5" ry="5" width="300" height="200" />
          </ContentLoader>
        </div>
      </div>
    </>
  );
}
