import React, { useState, useEffect } from 'react'
import List from './List'
import apiService from '../services/api'
import './Board.css'

const Board = () => {

  const [ lists, setLists ] = useState([])

  useEffect(() => {
    apiService.get('/lists?include=cards')
    .then(response => {
      setLists(response.data)
    })
  }, [])

  return (
    <div className="board">
      <h2 className="board-title">Board Title</h2>
      <div className="lists">

        {lists.map(list => <List list={list} key={list.id} />)}

      </div>
    </div>
  )
}

export default Board
