import LineItem from './lineItem';

const ItemList = ({ items, handleCheck, handleDelete}) => {
    return(
        <ul>
        {items.length ? (items.map((item)=> (
            <LineItem 
                item={item}
                handleCheck={handleCheck}
                handleDelete={handleDelete}
            />

        ))) : (<p>Your list is empty me broski</p>)}
        </ul>
    )
}

export default ItemList;