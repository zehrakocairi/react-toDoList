import "./CSS/TodoItems.css"

export const TodoItems = ({no, display, text}) => {
  return (
    <div className="todoitems">
      <div className="todoitems-container"></div>
      <div>{text}</div>
    </div>
  )
}

export default TodoItems;