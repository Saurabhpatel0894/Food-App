let searchFood = async()=>{

    try{
    
        let q = document.getElementById('query').value;
    
        let url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${q}`;
    
        let res = await fetch(url);
    
        let data = await res.json();
        let x= data.meals;
        // console.log(x);
    
        appendFood(x);
    
    } catch(error){
        console.log('error : ',error)
    }
    
    }
    
    // searchFood();
    
    let appendFood = (data) =>{    
    
        let results = document.getElementById("results");
        
    
    data.forEach(function(el){
    
        // results.innerHTML=null;
    
        let p = document.createElement("p");
    
        p.innerHTML = el.strMeal;
    
        results.append(p);
    
        // console.log(el.strMeal)
    
    })
    
    }
    let id;

    let debouncing = (searchFood,delay) =>
    {
        if(id)
        {
            clearTimeout(id);
        }
        id=setTimeout(function()
        {
            searchFood()
        },delay)
    }
    