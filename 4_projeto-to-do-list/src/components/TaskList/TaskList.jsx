import Task from "../Task/Task";

const TaskList = ({ tasks, onDeleteTask, onToggleTaskDone }) => { // Corrigido de 'task' para 'tasks'
  return (
    <ul>
      {tasks.map((task) => (
        <Task key={task.id} task={task} onDelete={() => onDeleteTask(task.id)} onToggleDone={() => onToggleTaskDone(task.id)} />
      ))}
    </ul>
  );
};

export default TaskList;