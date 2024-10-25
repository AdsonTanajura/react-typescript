import Task from "../Task/Task";

const TaskList = ({ tasks, onDeleteTask }) => { // Corrigido de 'task' para 'tasks'
  return (
    <ul>
      {tasks.map((task) => (
        <Task key={task.id} task={task} onDelete={() => onDeleteTask(task.id)} />
      ))}
    </ul>
  );
};

export default TaskList;