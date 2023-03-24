import React, { useEffect, useState } from 'react'
import ApiGetService from '../../Services/ApiGetService'
import "./Form.css"
import { FiSave } from "react-icons/fi";


function Form() {
    
console.log(ApiGetService("get"))
    let [item, setItem] = useState({url: ''})

    function handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let temp_item = item
        temp_item[name] = value
        setItem(temp_item)
    }

    function handleSubmit(event) {
        event.preventDefault();
        ApiGetService("post")(item)
    }
  return (
    <div className='FormPage-Form'>
        <form onSubmit={handleSubmit} action="" method="post">
            <button><FiSave /></button>
            <div className='Form-row'>
                <label>URL de la imágen:</label>
                <input type="text" name="url" onChange={handleChange} autoComplete="off" placeholder="Url de la Imagén" />
            </div>
            <div className='Form-row'>
                <label>Título:</label>
                <input type="text" name="title" onChange={handleChange} id="" placeholder="Título" />
            </div>
            <div className='Form-row'>
                <label>Género:</label>
                <input list="generos" type="text" name="genre" onChange={handleChange} id="" placeholder="Género"/>
                <datalist id="generos">
                    <option value="Romántico heterosexual"/>
                    <option value="Romántico homosexual"/>
                    <option value="Elegía"/>
                    <option value="Epigrama"/>
                    <option value="Fantasía"/>
                </datalist>
            </div>
            <div className='Form-row'>
                <label>Autor:</label>
                <input type="text" name="author" onChange={handleChange} id="" placeholder="Autor"/>
            </div>
            <div className='Form-ta'>
                <label>Tu Poema:</label>
                <textarea rows="8" type="text" name="poem" id="" />
            </div>
            
        </form>
    </div>
  )
}

export default Form