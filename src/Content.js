import {useState} from 'react';
import { FaTrashAlt } from 'react-icons/fa';

let Content = () => {
    const [items, setItems] = useState([
        {
            id: 1,
            checked: false,
            item: "One half pound bag of Cocoa Covered Almonds Unsalted"
        },
        {
            id: 2,
            checked: false,
            item: "Item 2"
        },
        {
            id: 3,
            checked: false,
            item: "Item 3"
        }
    ]);

    const handleCheck = (id)=>{
        const listItems = items.map((item)=> item.id === id ? {...item, checked: !item.checked} : item);
        setItems(listItems);
        localStorage.setItem('shoppinglist',JSON.stringify(listItems));
    }

    const handleDelete = (id) => {
        const listItems = items.filter((item)=>{
            return (item.id != id)
        });
        setItems(listItems);
        localStorage.setItem('shoppinglist',JSON.stringify(listItems));

    }


    return (
        <main>
            {items.length ? (
            <ul>
                {items.map((item)=> (
                    <li className="item" key={item.id}>
                        <input
                            type="checkbox" 
                            checked={item.checked}
                            onChange={()=>{handleCheck(item.id)}}
                        />
                        <label
                            onDoubleClick={()=>{handleCheck(item.id)}}
                            style={(item.checked) ? {textDecoration: "line-through"} : null}>{item.item}</label>
                        <FaTrashAlt
                            role="button"
                            tabIndex="0"
                            onClick={()=>{handleDelete(item.id)}}
                        />
                    </li>
                ))}
            </ul>
            ) : 
            (<p>Your list is empty me broski</p>)
            }
        </main>

    )
}

export default Content;