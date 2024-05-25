import React, { useState } from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Checkbox, Button, TextField, IconButton, FormControl, Select, MenuItem
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState({ text: '', status: 'ongoing' });
  const [filter, setFilter] = useState('all');

  const handleAddTodo = () => {
    if (newTodo.text.trim()) {
      setTodos([...todos, { text: newTodo.text, completed: newTodo.status === 'completed' }]);
      setNewTodo({ text: '', status: 'ongoing' });
    }
  };

  const handleDeleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const handleToggleComplete = (index) => {
    setTodos(todos.map((todo, i) => (
      i === index ? { ...todo, completed: !todo.completed } : todo
    )));
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'completed') return todo.completed;
    if (filter === 'incomplete') return !todo.completed;
    return true;
  });

  return (
    <div style={{ margin: '10% 20% 10% 20%', border:'10px red'}}>
      <h1 style={{textAlign:'center'}}>Todo List</h1>
      <FormControl style={{ marginBottom: '20px' }}>
        <Select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <MenuItem value="all">All</MenuItem>
          <MenuItem value="completed">Completed</MenuItem>
          <MenuItem value="incomplete">Incomplete</MenuItem>
        </Select>
      </FormControl>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Description</TableCell>
              <TableCell>Completed</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredTodos.map((todo, index) => (
              <TableRow key={index}>
                <TableCell>{todo.text}</TableCell>
                <TableCell>
                  <Checkbox
                    checked={todo.completed}
                    onChange={() => handleToggleComplete(index)}
                  />
                </TableCell>
                <TableCell>
                  <IconButton onClick={() => handleDeleteTodo(index)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div style={{ marginTop: '20px', display: 'flex', alignItems: 'center' }}>
        <TextField
          value={newTodo.text}
          onChange={(e) => setNewTodo({ ...newTodo, text: e.target.value })}
          label="New Todo"
          style={{ marginRight: '10px' }}
        />
        <FormControl style={{ marginRight: '10px' }}>
          <Select
            value={newTodo.status}
            onChange={(e) => setNewTodo({ ...newTodo, status: e.target.value })}
          >
            <MenuItem value="ongoing">Ongoing</MenuItem>
            <MenuItem value="completed">Completed</MenuItem>
          </Select>
        </FormControl>
        <Button onClick={handleAddTodo} variant="contained" color="primary">
          Add
        </Button>
      </div>
    </div>
  );
};

export default Todo;
