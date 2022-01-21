function AppButton(props) {
    return (
        <button className="min-w-36 px-4 py-2 bg-purple-600 text-white rounded shadow">
            {props.children}
        </button>
    );
}

export default AppButton;