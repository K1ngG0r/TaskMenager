import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Task } from "./Task.jsx";
import { renderCard } from "./RenderCard.jsx";

function App() {
  const tasks = 
  [
    new Task("Помыть пол", "В процессе", "Быт"),
    new Task("Помыть посуду", "Готово", "Быт"),
    new Task("Понять react", "В планах", "Учеба"),
    new Task("Доделать SpiderMsg", "Готово", "Учеба")
  ];

  const [filter, setFilter] = useState(
    {
      Status: "Любой",
      Category: "Любой"
    });

  return (
    <div className="app-container">
      <div className="filters">
        <select
          name='Статус'
          value={filter.Status}
          onChange={setFilter}
        >
          <option value="Любой">Любой</option>
          <option value="Готово">Готово</option>
          <option value="В процессе">В процессе</option>
          <option value="В планах">В планах</option>
        </select>
        <select
          name='Категория'
          value={filter.Category}
          onChange={setFilter}
        >
          <option value="Любой">Любой</option>
          <option value="Готово">Готово</option>
          <option value="В процессе">В процессе</option>
          <option value="В планах">В планах</option>
        </select>
      </div>

      <div className="task-grid">
        {tasks.map((task, index) => renderCard(task, index, filter.Status, filter.Category))}
      </div>
    </div>
  )
}

export default App
