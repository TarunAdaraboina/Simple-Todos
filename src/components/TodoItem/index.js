// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoDetails, onDeleteTodo} = props
  const {title, id} = todoDetails
  const onDelete = () => {
    onDeleteTodo(id)
  }
  return (
    <li className="list-item-container">
      <p className="title">{title}</p>
      <button className="button" type="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
