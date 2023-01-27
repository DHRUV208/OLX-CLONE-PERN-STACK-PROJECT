import { RequestHandler } from 'express';
import { Todo } from '../models/todo.js';

const TODOS: Todo[] = [];

export const createTodo: RequestHandler = (req, res, next) => {
    const text = (req.body as {text:string}).text;
    const newTodo = new Todo(Math.random().toString(), text );    
    TODOS.push(newTodo);

    res.status(201).json({message: 'Created the todo', createdTodo: newTodo})
}

export const getTodos: RequestHandler = (req, res, next) => {
    res.json({ todos: TODOS });
}

export const updateTodo: RequestHandler<{id: string}> = (req, res, next) => {
    const todoID = req.params.id;
    const upadtedText = (req.body as { text: string }).text;
    // const todoIndex = TODOS.findIndex()

}