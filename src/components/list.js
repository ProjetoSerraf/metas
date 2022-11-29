const List = () => {
    const itens = [
        {
            id: 1,
            name: "Ricardo"
        },
        {
            id: 2,
            name: "Dayana"
        } 
    ];
    return <div>
        {itens.map((item) => (
            <p key={item.id}>
            {item.id} - {item.name}</p>
        ))}
    </div>
}

export default List;