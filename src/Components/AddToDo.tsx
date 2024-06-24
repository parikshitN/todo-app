import ToDo from "../Model/ToDo";
import {useState} from "react";

const AddToDo = (props: {addToDo: (todo: ToDo) => void}) => {
    const [name, setName] = useState('')
    return (<div>
            <input value={name} onChange={e => setName(e.target.value)}/>
            <button onClick={() => {
                props.addToDo({name});
                setName('');
            }
            }>Add</button>
        </div>
    )
}

export default AddToDo
