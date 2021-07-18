import React , {useState , useEffect} from 'react';
import styles from '../../styles/Menu.module.css'
import Image from 'next/image'
import Head from 'next/head';

const Menu = () =>{
const[squery, setSquery] = useState("Smoked meat")
const[recepts, setRecepts] = useState([])
const APP_ID = "8171c8dc";
const APP_KEY = "49fb24dbe927d8cf52c183341b1277c5";

const getData = async () =>{
  fetch(`https://api.edamam.com/search?q=${squery}&app_id=${APP_ID}&app_key=${APP_KEY}`)
  .then(response => response.json())
  .then(data => {
    const food = data.hits;
    setRecepts(food);
  });
}

const onChange =  (e) =>{
   setSquery(e.target.value)
}

useEffect(() => {
  getData()
}, [])

  return (
    <>
       <Head>
        <title>HalssonFood | menu</title>
        <meta name="description" content="HalssonFood menu is considered as one of the best delicious menu in the world , we only deliver good food quality " />
        <meta name="keywords" content="HalssonFood , food , canadian food, canada , menu ,  fish , pitza , restaurants, canadian restaurant , pitza, burger, best food website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
       <main>
           <div className={styles.MenuContainer}>
                <div className={styles.MenuItems}>
                    <div className={styles.MenuPhoto}>
                       <Image src="/menu.png" width={128} height={128} alt=" menu logo"/>
                    </div>
                    <hr/>
                    <div className={styles.searchContainer}>
                      <input type="text" placeholder="search menu" onChange={onChange}/> 
                    </div>
                    <div className={styles.item} value="Pitza" onClick={()=> setSquery("Pitza")} >
                        <p>Pitza</p>
                    </div>
                    <div className={styles.item} value="Burger" onClick={()=> setSquery("Burger")}>
                        <p>Burgers</p>
                    </div>
                    <div className={styles.item} value="Chiken" onClick={()=> setSquery("Chiken")}>
                        <p>Chiken</p>
                    </div>
                    <div className={styles.item} value="Fries" onClick={()=> setSquery("Fries")}>
                        <p>Fries</p>
                    </div>
                </div>

                <div className={styles.itemsDetails}>
                    {recepts.map(recept => (
                        <div key={recept.recipe.calories} className={styles.fooditem}> 
                              <img src={recept.recipe.image} alt={recept.recipe.label}  />
                              <h4>{recept.recipe.label}</h4>
                        </div>
                    ))}
                </div>
           </div>
       </main>
    </>
  );
}

export default Menu;