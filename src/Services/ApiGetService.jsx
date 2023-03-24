import React, { useEffect, useState } from 'react'

function ApiGetService(method) {
  let [data, setData] = useState([''])
  let url = "https://rickandmortyapi.com/api/character/103"

  
    if (method == "get") {
       function get(params) {
      fetch(url)
        .then(response => response.json())
        .then(data => setData(data))
      return data
    }
    return get
    }
    if (method == "post") {
      async function post(item) {
        await fetch('/poems', {
          method: 'POST',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(item),
      });
    }
    return post
    }
    

  // return data
}

export default ApiGetService