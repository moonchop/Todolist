import React from "react";
import "./template.css";
function Template(props: any) {
  return <div className="square-form">{props.children}</div>;
}
export default Template;
