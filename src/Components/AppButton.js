import { Link } from "react-router-dom";

function AppButton(props) {
  const Tag = props?.type === "link" ? Link : "button";

  return (
    <Tag
      {...props.attr}
      className={`min-w-36 px-4 py-2 bg-purple-600 text-white rounded shadow ${props?.attr?.className}`}
    >
      {props.children}
    </Tag>
  );
}

export default AppButton;
