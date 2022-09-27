let getReceipe = async()=>{

    try{
    
    
        let url=`https://www.themealdb.com/api/json/v1/1/random.php`;
    
        let res = await fetch(url);
    
        let data = await res.json();
        
        console.log(data.meals);
    
        appendReceipe(data.meals[0]);
    
    } catch(error){
        console.log('error : ',error)
    }
}

getReceipe();

let appendReceipe = (data) =>{    
    
    let results = document.getElementById("results");

    
        let div = document.createElement('div');
    
        let mealImg = document.createElement('img');
        mealImg.src = data.strMealThumb;
    
        let mealName = document.createElement('h2');
        mealName.innerText = data.strMeal;
    
        let mealCategory = document.createElement('h3');
        mealCategory.innerText = data.strCategory;

        let mealArea = document.createElement('h3');
        mealArea.innerHTML = data.strArea;
    
        let instruction = document.createElement('p');
        instruction.innerText = data.strInstructions;

    
        div.append(mealImg, mealName, mealCategory, mealArea, instruction)
        results.append(div)
       
    
    }
    
    

