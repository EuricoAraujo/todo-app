import React from 'react'
import {connect} from 'react-redux'
import IconButton from '../template/iconButton'
import {bindActionCreators} from 'redux'
import {markAsDone, markAsPending, remove} from '../todo/todoActions'


const TodoList = props =>{
   const renderRows = () =>{
    const list = props.list || []
    return list.map(todo =>(
        <tr key={todo._id}>
            <td className={todo.done ? 'markedAsDone':''}>{todo.description}</td>
            <td>
                <IconButton 
                onClick={() => props.markAsDone(todo)}
                 hide={todo.done} 
                 estilo='success' 
                 icon='check' />
                <IconButton 
                onClick={() => props.markAsPending(todo)} 
                estilo='warning'
                icon='undo' 
                hide={!todo.done}
                />
                <IconButton 
                 onClick={() => props.remove(todo)}
                 estilo='danger' 
                 icon='trash-o' 
                 hide={!todo.done}
                 />
            </td>
        </tr>
    ))
    }


    return(
        <table className='table'>
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th className='tableActions'>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}

const mapStateToProps = state => ({list:state.todo.list})
const mapDispachToProps = dispatch => bindActionCreators({markAsDone,markAsPending,remove}, dispatch)
export default connect(mapStateToProps, mapDispachToProps)(TodoList)