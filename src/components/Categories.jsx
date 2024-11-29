const Categories=({categories,filterItemsByCategory})=>{
    return <div className="btn-container"> 
        {categories.map(category=>{
            return <button type="button" className="btn" key={category} onClick={()=>filterItemsByCategory(category)}>{category}</button>
        })}
    </div>
}

export default Categories;