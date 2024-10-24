const TaskList = ({tasks}) => {
    if(!tasks) {
        return (
            <h1>Nâo a tarefa a mostras :c</h1>
        )
    }
  return (
    <div>
      <ul>
        {tasks.map(({task, id}) => (
            <li key={id}>{task}</li>
        ))}
      </ul>
    </div>
  )
}

export default TaskList
