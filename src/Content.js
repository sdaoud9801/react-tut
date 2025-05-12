import { FaTrashAlt } from 'react-icons/fa';

let Content = ({ items, handleCheck, handleDelete }) => {

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