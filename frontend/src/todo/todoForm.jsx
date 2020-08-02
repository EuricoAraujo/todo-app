import React, {Component} from 'react'
import Grid from '../template/grid'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import {add, changeDescription, search} from './todoActions'

import IconButton from '../template/iconButton'

class TodoForm extends Component{

    componentWillMount(){
        this.props.search()
    }

    render(){
        const {add, search, description} = this.props

        return(
    <div role='form' className='todoForm'>
        <Grid cols='12 9 10' >
            <input id='description' className='form-control'
            placeholder='Adicione uma tarefa'
            onChange={this.props.changeDescription}
            value={this.props.description}></input>
        </Grid>

        <Grid cols='12 3 2'>
            <IconButton estilo='primary' icon='plus' onClick={()=>add(description)}></IconButton>
            <IconButton estilo='info' icon='search'  onClick={()=>search()}></IconButton>
        </Grid>
    </div>
    )
    }
}

const mapStateToProps = state => ({description: state.todo.description})
const mapDispatchToProps = dispach => bindActionCreators({add, changeDescription,search},dispach)
export default connect(mapStateToProps,mapDispatchToProps)(TodoForm)