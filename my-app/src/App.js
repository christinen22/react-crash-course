import { useState } from 'react'
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Laga mat',
        day: 'Lördag',
        reminder: true,
    },
    {
        id: 2,
        text: 'Köpa ägg',
        day: 'Fredag',
        reminder: true,
    },
])

//Delete task
const deleteTask = (id) => {
  console.log('delete', id)

}

  return (
    <div className="App">
      <Header />
      <Tasks tasks={tasks} onDelete=
      {deleteTask} />
    </div>

  );
}

export default App;
