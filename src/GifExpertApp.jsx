import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
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
          categories.map((category) => {
            return <li key={category}>{category}</li>

          })
        }
      </ol>
    </>
  )
}
