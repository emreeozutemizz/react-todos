import React, { useState } from 'react';
import './App.css';

function App() {
  // Todo listesi ve yeni todo için state'leri tanımlıyoruz
  const [todos, setTodos] = useState([
    { text: 'JavaScript Öğren', completed: true },
    { text: 'React Öğren', completed: false },
    { text: 'Hayatını Yaşa!', completed: false },
  ]);

  const [newTodo, setNewTodo] = useState('');

  // Yeni todo ekleme işlevi
  const addTodo = (e) => {
    e.preventDefault();
    if (newTodo.trim()) {
      setTodos([...todos, { text: newTodo, completed: false }]);
      setNewTodo('');
    }
  };

  // Todo tamamlama işlevi
  const toggleTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  // Todo silme işlevi
  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="App">
      <section className="todoapp">
        <header className="header">
          <h1>Todos</h1>
          <form onSubmit={addTodo}>
            <input
              className="new-todo"
              placeholder="Ne yapılması gerekiyor?"
              autoFocus
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
            />
          </form>
        </header>
        
        <section className="main">
          <ul className="todo-list">
            {todos.map((todo, index) => (
              <li key={index} className={todo.completed ? 'completed' : ''}>
                <div className="view">
                  <input
                    className="toggle"
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleTodo(index)}
                  />
                  <label>{todo.text}</label>
                  <button className="destroy" onClick={() => deleteTodo(index)}></button>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <footer className="footer">
          <span className="todo-count">
            <strong>{todos.filter(todo => !todo.completed).length}</strong> öğe kaldı
          </span>
        </footer>
      </section>

      <footer className="info">
        <p>Yapılacak bir şeyi düzenlemek için tıklayın</p>
        <p>Yapan <a href="https://d12n.me/">Emre Özütemiz</a></p>
        <p>Bu uygulama <a href="http://todomvc.com">TodoMVC</a> parçasıdır</p>
      </footer>
    </div>
  );
}

export default App;
