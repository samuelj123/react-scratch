

const List = ({ list }: any) => {
    const listtext = list.map((x: any) => <li>{x.task}</li>);
    return (
        <>
            <ul>
                {listtext}
            </ul>
        </>

    );
}

export default List;
