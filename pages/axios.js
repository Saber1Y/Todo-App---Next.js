import axios from "axios";


const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
});

export const getTodos = async () => {
    try {
        const response = await api.get('./todos');
        return response.data;
    } catch (error) {
        console.error('error fetching todos', error)
        throw error;
    }
}
export const addTodo = async (addedTodo) => {
    try {
        const response = await api.post('./todos', addedTodo)
        return response.data;
    } catch (error) {
        console.error('error fetching todos', error)
        throw error;
    }
}
export const updateTodo = async (id, updateTodo) => {
    try {
        const response = await api.put(`./todos/${id}`, updateTodo)
        return response.data;
    } catch (error) {
        console.error('error updating todo', error)
        throw error;
    }
}

export const deletedTodo = async (id) => {
    try {
        const response = await api.delete(`./todos/${id}`)
        return response.data;
    } catch (error) {
        console.error('error deleting todo', error)
        throw error;
    }
}