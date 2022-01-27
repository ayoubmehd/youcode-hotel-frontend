import { Link } from "react-router-dom";


function AppButton(props) {

    const Tag = props.type === "link" ? Link : "button";

    const propsCopy = { ...props };

    delete propsCopy.type;

    return (
        <Tag {...propsCopy} className="min-w-36 px-4 py-2 bg-purple-600 text-white rounded shadow">
            {props.children}
        </Tag>
    );
}

export default AppButton;