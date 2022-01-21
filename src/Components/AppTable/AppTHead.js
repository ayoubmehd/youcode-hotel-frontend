function AppTHead(props) {
    return (
        <thead className="border-b">
            <tr>
                {
                    props.headings.map(item => {
                        return (
                            <th scope="col" className="text-sm font-bold text-gray-900 px-6 py-4 text-left" key={item.slug}>
                                {item.text}
                            </th>
                        )
                    })
                }
            </tr>
        </thead>
    );
}

export default AppTHead;