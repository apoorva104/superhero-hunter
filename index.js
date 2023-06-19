const taskList = document.getElementById('list');
    document.getElementById("searc").addEventListener("click", returnURL);
    console.log(localStorage.length);


if(localStorage.length>0)
{
  var a=localStorage.getItem("superhero");
   var myArray = a.split(",");
}
else
{
  var myArray=[];
}


    
  function returnURL(){
 
   
    let inp=document.getElementById("inp");
      let ts=1;
      let pbl="745977a758749048615536465e90343b";
      let  pvt="b779789baebe989f3ccc5c1c9aae0921ba79e395";
      let st="";
      let a=st.concat(ts,pvt,pbl);
      let encrypt=(CryptoJS.MD5(a).toString());
      const url="https://gateway.marvel.com:443/v1/public/characters?nameStartsWith="+inp.value+"&ts="+ts+"&apikey="+pbl+"&hash="+encrypt;
      let xhrRequest= new XMLHttpRequest();
      xhrRequest.open('get',url);
      xhrRequest.send();
      xhrRequest.onload= function(){
      var val =JSON.parse(xhrRequest.response)
        var len=val.data.results;
        console.log(len.length);
        for(var a=0;a<len.length;a++)
        {
         
          var b=val.data.results[0].id;
         // console.log(b);
        const li=document.createElement('li');
        li.innerHTML=" ";
          li.innerHTML=
          `<a  id="name" href="details.html?key1=${val.data.results[0].id}">${val.data.results[a].name}</a>
          
           <button id="add-to-fav" onclick="addToFav(${val.data.results[a].id})"><img id="favImg" src="add_box_FILL1_wght700_GRAD0_opsz48.png" alt=""></button>
          
          `
          taskList.append(li);
      
        }
  };
}


  function addToFav(id)
{  var flag=true;
  if(myArray.length>0)
    {
      for(var j=0;j<myArray.length;j++)
    {
      if(myArray[j]!=id)
      {
        flag=true;
      }
      else{
        flag=false;
      }
    }
    if(flag==true)
    {
      myArray.push(id);
      const kew_name="superhero";
      localStorage.setItem(kew_name,myArray);
      alert(" SuperHero Added Succesfully");
  
    }
    else
    {
     
      alert(" SuperHero Already Added ");

    }
    }
    else
    {
      
        myArray.push(id);
        const kew_name="superhero";
        localStorage.setItem(kew_name,myArray);
        alert(" SuperHero Added Succesfully");
  
      
    }
   
  

}







