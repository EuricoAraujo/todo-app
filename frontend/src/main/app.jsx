import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'
import '../template/custom.css'

import React from 'react'

import Routes from './routers'

import Menu from '../template/menu'
import { Router } from 'react-router'

export default props => (
    <div className="container">
        <Menu></Menu>
        <Routes></Routes>
    </div>
)