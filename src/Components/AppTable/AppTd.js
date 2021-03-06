function AppTd(props) {
  return (
    <td
      {...props}
      className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap"
    >
      {props.children}
    </td>
  );
}

export default AppTd;
