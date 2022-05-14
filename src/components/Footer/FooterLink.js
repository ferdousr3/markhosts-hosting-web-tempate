import React from "react";
import { Link, useNavigate } from "react-router-dom";

const FooterLink = ({linkTitle,path,linkTitle1,path1, linkTitle2,path2 ,linkTitle3,path3, linkTitle4,path4,linkTitle5,path5}) => {
  const navigate = useNavigate();
  return (
    <div>
      <ul>
        <li className="mb-3">
          <Link className="text-five hover:text-white text-sm" to={`/${path}`} >{linkTitle}</Link>
        </li>
        <li className="mb-3" >
          <Link className="text-five hover:text-white text-sm" to={`/${path1}`} >{linkTitle1}</Link>
        </li>
        <li className="mb-3" >
          <Link className="text-five hover:text-white text-sm" to={`/${path2}`} >{linkTitle2}</Link>
        </li>
        <li className="mb-3" >
          <Link className="text-five hover:text-white text-sm" to={`/${path3}`} >{linkTitle3}</Link>
        </li>
        <li className="mb-3" >
          <Link className="text-five hover:text-white text-sm" to={`/${path4}`} >{linkTitle4}</Link>
        </li>
        <li className="mb-3" >
          <Link className="text-five hover:text-white text-sm" to={`/${path5}`} >{linkTitle5}</Link>
        </li>
      </ul>
    </div>
  );
};

export default FooterLink;
