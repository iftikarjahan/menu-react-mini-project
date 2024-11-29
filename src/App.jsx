import Title from "./components/Title";
import menuDataSource from "./data";
import { useState } from "react";
import Menu from "./components/Menu";
import Categories from "./components/Categories";

// Now we need to take out the unique categories from the menuDataSource array
const allCategories=menuDataSource.map(item=>item.category);
const uniqueCategories=new Set(allCategories);
// now convert this set into an array
const uniqueCategoriesArray=["all",...uniqueCategories];





const App = () => {
  const[menuData,setMenuData]=useState(menuDataSource);
  const[categories,setCategories]=useState(uniqueCategoriesArray);

  const filterItems=(category)=>{
    // Now taking this category, I need to filter out the items
    if(category==="all"){
      setMenuData(menuDataSource);
      return;
    }
    const filteredItems=menuDataSource.filter(item=>item.category===category);
    setMenuData(filteredItems);
  }

  return <main>
    <section className="menu">
      <Title text="Our Menu"/>
      <Categories categories={categories} filterItemsByCategory={filterItems}/>
      <Menu menuItems={menuData}/>
    </section>
  </main>
};
export default App;
