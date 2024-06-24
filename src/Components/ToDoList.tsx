import ToDo from "../Model/ToDo";

type Props = {
    items: ToDo[]
}
//React.Fragment
const ToDoList = (props: Props) => {
    const items =  props.items.map(item => <p>{item.name}</p>)
    return (
       <div> {items} </div>
    )
}

export default ToDoList
