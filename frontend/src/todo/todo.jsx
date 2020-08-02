import React, {Component} from 'react'

import PageHeader from '../template/pagereader'
import TodoForm from '../todo/todoForm'
import TodoList from '../todo/todoList'

export default props => (
<div>
    <PageHeader name='Tarefas' small='Cadastro'></PageHeader>
    <TodoForm></TodoForm>
    <TodoList></TodoList>
</div>
)
