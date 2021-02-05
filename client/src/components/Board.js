import React, { useState, useEffect } from 'react'
import apiService from '../services/api'
import './Board.css'

const Board = () => {

  const [ lists, setLists ] = useState([])

  useEffect(() => {
    apiService.get('/lists')
    .then(response => {
      setLists(response.data)
    })
  }, [])

  return (
    <div className="board">
      <h2 className="board-title">Board Title</h2>
      <div className="lists">

        {lists.map(list => {
          return (
            <div className="list">
              <h3 className="list-title">{list.title}</h3>
              <div className="cards">
                <div className="card">
                  <h4 className="card-title">Card Title</h4>
                  <div className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste eaque quisquam ex obcaecati nulla! Accusantium quod dolorum commodi deleniti, laborum. Illum accusantium minima, eligendi, obcaecati facere optio numquam voluptatibus repudiandae!</div>
                </div>
                <div className="card">
                  <h4 className="card-title">Card Title</h4>
                  <div className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste eaque quisquam ex obcaecati nulla! Accusantium quod dolorum commodi deleniti, laborum. Illum accusantium minima, eligendi, obcaecati facere optio numquam voluptatibus repudiandae!</div>
                </div>
                <div className="card">
                  <h4 className="card-title">Card Title</h4>
                  <div className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste eaque quisquam ex obcaecati nulla! Accusantium quod dolorum commodi deleniti, laborum. Illum accusantium minima, eligendi, obcaecati facere optio numquam voluptatibus repudiandae!</div>
                </div>
              </div>
            </div>
          )
        })}



      </div>
    </div>
  )
}

export default Board
