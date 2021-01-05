const fs = require('fs');
const path =  require('path');
const { title } = require('process');

const jsFile = path.join(__dirname, 'movi.json');

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const router = express.Router();


 
function readFile(fileName){
   return new Promise((resolve, reject)=>{
        fs.readFile(fileName, "utf-8", (error, data)=>{
              resolve(data);
        });
   });
}



function TitleYear(data){
 const titleYear = objData.reduce((obj, cv)=>{         
        if(obj[cv.Title]){
            obj[cv.Title] = cv.Year ;
        }else{
            obj[cv.Title] = cv.Year ;            
        }

    return obj;
  }, {});

return titleYear; 
}



function moviesEarning(data){
const titleEarning = objData.reduce((obj, curObj)=>{
        if(obj[curObj.Title]){
            obj[curObj.Title] = curObj.Gross_Earning_in_Mil;
        }else{
            obj[curObj.Title] = curObj.Gross_Earning_in_Mil;
        }     
  return obj;
}, {});  

return titleEarning;
}


function moviesDirector(data){
    const titleDirector = objData.reduce((obj, curObj)=>{
        if(obj[curObj.Title]){
          obj[curObj.Title] = curObj.Director;
        }else{
          obj[curObj.Title] = curObj.Director;
        }
    return obj;
  }, {});

return titleDirector;
}


function moviesActor(data){
    const titleActor = objData.reduce((obj, curObj)=>{
        if(obj[curObj.Title]){
            obj[curObj.Title] = curObj.Actor;
          }else{
            obj[curObj.Title] = curObj.Actor;
          }
      return obj;  
    });
 return titleActor;    
}


function moviesRank(data){
    const titleRank = objData.reduce((obj, curObj)=>{
        if(!obj[curObj.Rank]){
            obj[curObj.Rank] = curObj.Title;
          }
    
      return obj;     
    }, {});
 
    return titleRank;    
}

readFile(jsFile).then((data)=>{
    objData = JSON.parse(data);
   
app.get('/', (req, res)=>{
         res.json(TitleYear(objData));
   });
 
app.get('/moviesEarning', (req, res)=>{
    res.json(moviesEarning(objData));
    });

 
app.get('/moviesDirector', (req, res)=>{
   res.json(moviesDirector(objData));
});    
    
    
app.get('/moviesActor', (req, res)=>{
     res.json(moviesActor(objData));
});

app.get('/moviesRank', (req, res)=>{
   res.json(moviesRank(objData));
});

});




app.listen(PORT, ()=>{
  console.log(`server is running on http://localhost:${PORT}`);
});
