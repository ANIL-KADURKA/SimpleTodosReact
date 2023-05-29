// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoItem, onDeleteTodo, uniqueNo} = props
  const {title} = todoItem

  const onDelete = () => {
    onDeleteTodo(uniqueNo)
  }
  return (
    <li>
      <div className="cont">
        <h1 className="head">{title}</h1>
        <button type="button" className="delete-button" onClick={onDelete}>
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoItem
