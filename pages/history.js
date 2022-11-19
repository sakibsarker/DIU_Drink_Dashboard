import React from 'react'
import style from '../styles/History.module.css'
const history = () => {
  return (
    <div>
      <div>
        <table className={style.container}>
          <thead>
            <tr>
              <th>Teacher name</th>
              <th>Order List</th>
              <th>Time & Date</th>
              <th>Total Order</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Your Name</td>
              <td>Tea</td>
              <td>22 November 2022</td>
              <td>122</td>
            </tr>
            
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default history