import React, {useState} from "react";


function CategoryFilter({categories}) {
  // console.log(categories)
  const catArr = []
  categories.forEach(category => {
    let obj = {name: category, selected: '', key: categories.indexOf(category)}
    catArr.push(obj)
  })

  // console.log(catArr)

  const [currentArr, setSelected] = useState(catArr)
  let newArr = [...currentArr]
  function handleClick(e) {
    // console.log(e.target.id, currentArr)
    newArr = [...catArr]
    newArr[e.target.id].selected = 'selected'
    console.log(newArr)
    setSelected(newArr)
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {newArr.map(category => {
        return <button id={newArr.indexOf(category)} className={category.selected} key={category.key} onClick={handleClick}>{category.name}</button>
      })}
    </div>
  );
}

export default CategoryFilter;
