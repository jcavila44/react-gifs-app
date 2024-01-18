import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

  return (
    <>
      {/* Titulo */}
      <div>GifExpertApp</div>

      {/* Input */}
      <AddCategory setCategories={setCategories} />

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
