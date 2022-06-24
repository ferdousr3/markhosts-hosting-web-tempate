import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import type { LinkProps } from "react-router-dom";

function CustomLink({ children, to, ...props }: LinkProps) {
  //  const [isHovering, setIsHovering] = useState(false);

  //  const handleMouseEnter = () => {
  //    setIsHovering(true);
  //  };

  //  const handleMouseLeave = () => {
  //    setIsHovering(false);
  //  };
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Link
        style={{
          color: match ? "#000645" : "#666a8f",
          textDecoration: "none",
          // color: isHovering ? "#666a8f" : "#000645",
          fontWeight: match ? "800" : "400",
          fontSize:'1rem',
          marginBottom:'1.5rem',
        }}
        // onMouseEnter={handleMouseEnter}
        // onMouseLeave={handleMouseLeave}
        to={to}
        {...props}
      >
        {children}
      </Link>
    </div>
  );
}

export default CustomLink;
