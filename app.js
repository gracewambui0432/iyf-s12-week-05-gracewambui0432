
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    background: linear-gradient(135deg, #667eea, #764ba2);
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
}

.container {
    background: white;
    width: 100%;
    max-width: 500px;
    padding: 30px;
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.2);
}

h1 {
    text-align: center;
    color: #333;
    margin-bottom: 25px;
}

#todo-form {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
}

#todo-input {
    flex: 1;
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: 6px;
    font-size: 16px;
    outline: none;
}

#todo-input:focus {
    border-color: #667eea;
}

button {
    border: none;
    padding: 10px 16px;
    border-radius: 6px;
    cursor: pointer;
    font-size: 14px;
}

#todo-form button {
    background: #667eea;
    color: white;
}

#todo-form button:hover {
    background: #5266d5;
}

.filters {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-bottom: 20px;
}

.filter {
    background: #eee;
    color: #444;
}

.filter.active {
    background: #667eea;
    color: white;
}

#todo-list {
    list-style: none;
}

.todo-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px;
    border-bottom: 1px solid #eee;
    gap: 10px;
}

.todo-text {
    flex: 1;
    cursor: pointer;
    overflow-wrap: anywhere;
}

.todo-item.completed .todo-text {
    text-decoration: line-through;
    color: #999;
}

.delete-btn {
    background: #ff4d4d;
    color: white;
    opacity: 0;
    transition: opacity 0.2s;
}

.todo-item:hover .delete-btn,
.delete-btn:focus {
    opacity: 1;
}

.edit-input {
    flex: 1;
    padding: 8px;
    border: 1px solid #667eea;
    border-radius: 5px;
    font-size: 15px;
    min-width: 0;
}

.stats {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    color: #555;
    gap: 10px;
}

#clear-completed {
    background: #ff4d4d;
    color: white;
}

#clear-completed:hover {
    background: #e63939;
}

@media (max-width: 480px) {
    .container {
        padding: 20px;
    }

    .filters {
        gap: 5px;
    }

    .filter {
        padding: 9px;
    }

    .stats {
        font-size: 13px;
    }
}

