import ItemList from './itemList';


let Content = ({ items, handleCheck, handleDelete }) => {

    return (
        <main>
            <ItemList
                items={items}
                handleCheck={handleCheck}
                handleDelete={handleDelete}
                />
        </main>

    )
}

export default Content;