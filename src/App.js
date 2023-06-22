import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logInData } from './actions/index'

const App = () => {
  const allDatas = useSelector((state) => {
    return state.logInSaveData
  });
  const dispatch = useDispatch();
  const [myData, setMyData] = useState([])

  const [fData, setFData] = useState({
    name: '',
    email: '',
  })
  const sefData = (e) => {
    setFData({ ...fData, [e.target.name]: e.target.value })
  }

  const saveData = () => {
    // Validation
    dispatch(logInData(fData))
    // const ss = myData.push(fData);
    // console.log('ss::: ', ss);
    setMyData(myData => [...myData, fData]);
  }

  return (
    <div>
      <center>
        <section style={ { width: "50%", marginTop: "50px" } }>
          <article>
            <div className="card">
              <div>
                <label htmlFor="name">Name</label>
                <input
                  name='name'
                  value={ fData.name }
                  onChange={ sefData }
                  type="text"
                  id='name' />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  name='email'
                  value={ fData.email }
                  onChange={ sefData }
                  type="text"
                  id='email' />
              </div>
              <button onClick={ saveData } style={ { marginTop: "20px" } }>Save</button>
            </div>
          </article>
        </section>
      </center>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {
            myData.map((d, index) => {
              return (
                <tr key={ index }>
                  <td>{ d.name }</td>
                  <td>{ d.email }</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default App
