import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

  const onAddCategory = (newCategory) => {
    setCategories([...categories, newCategory]);
  }

  return (
    <>
      {/* Titulo */}
      <div>GifExpertApp</div>

      {/* Input */}
      <AddCategory onNewCategory={onAddCategory} />

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
