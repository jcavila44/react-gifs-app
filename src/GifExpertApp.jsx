import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

  const onAddCategory = () => {
    setCategories([...categories, ['Dead Note']])
  }


  return (
    <>
      {/* Titulo */}
      <div>GifExpertApp</div>

      {/* Input */}
      <AddCategory />


      {/* Listado de Gif */}
      <button onClick={onAddCategory}>Agregar </button>
      <ol>
        {
          categories.map((category, key) => {
            return <li key={key}>{category}</li>

          })
        }
      </ol>
    </>
  )
}
