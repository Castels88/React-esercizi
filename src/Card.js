import React from 'react'
import Axios from 'axios'
import './test.css'
import { useState, useEffect } from 'react'

export function Card() {
  const [value, setValue] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    Axios.get(`https://api.punkapi.com/v2/beers`).then((response) => {
      setValue(response.data)
    })
  }, [])

  function handleSearch(event) {
    setSearch(event.target.value)
  }

  function deleteItem(index) {
    value.splice(index, 1)
    setValue([...value])
  }

  return (
    <div>
      <h1>Beer</h1>
      <input
        type="text"
        name="search-beer"
        id="search"
        placeholder="search by name"
        onChange={handleSearch}
      />
      <div className="container">
        {value &&
          value
            .filter((item) => {
              if (setSearch === '') {
                return item
              } else if (
                item.name.toLowerCase().includes(search.toLowerCase())
              ) {
                return item
              }
            })
            .map((item, index) => (
              <div key={index} className="card">
                <div className="header">
                  <div className="profile">
                    <div className="profile-info">
                      <div key={item.name} className="profile-name">
                        {item.name}
                      </div>
                      <div key={item.first_brewed} className="profile-date">
                        {item.first_brewed}
                      </div>
                    </div>
                  </div>
                  <div className="menu">
                    <button
                      onClick={() => deleteItem(index)}
                      type="button"
                      className="delete"
                    >
                      delete
                    </button>
                  </div>
                </div>
                <div className="card-image">
                  <img key={item.image_url} src={item.image_url} alt="" />
                </div>
                <div className="card-description">
                  <p>
                    <strong>About the beer:</strong>
                  </p>
                  <p key={item.description}>{item.description}</p>
                </div>
              </div>
            ))}
      </div>
    </div>
  )
}
