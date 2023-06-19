
    var namelist = document.getElementById('namelist');
    var comicslist = document.getElementById('comicslist');
    var serieslist = document.getElementById('serieslist');
    var storieslist = document.getElementById('storieslist');
    var eventlist = document.getElementById('eventlist');

    fetchURL();
    function fetchURL(){
        var s= window.location.href;
        const myArray = s.split("=");
        id=myArray[1]; 
        URLs(id);
    }

    function URLs(id)
    { 
        
        let name1="";
        let img1="";
        let img2="",title="",creators="",character="",page="";
    //  let price=0;

        let ts=1;
        let pbl="745977a758749048615536465e90343b";
        let  pvt="b779789baebe989f3ccc5c1c9aae0921ba79e395";
        let st="";
        let a=st.concat(ts,pvt,pbl);
        let encrypt=(CryptoJS.MD5(a).toString());
        var nameurl="https://gateway.marvel.com:443/v1/public/characters/"+id+"?&ts="+ts+"&apikey="+pbl+"&hash="+encrypt;
        var comicsurl="https://gateway.marvel.com:443/v1/public/characters/"+id+"/comics?&ts="+ts+"&apikey="+pbl+"&hash="+encrypt;
        var seriesurl="https://gateway.marvel.com:443/v1/public/characters/"+id+"/series?&ts="+ts+"&apikey="+pbl+"&hash="+encrypt;
        var storiesurl="https://gateway.marvel.com:443/v1/public/characters/"+id+"/stories?&ts="+ts+"&apikey="+pbl+"&hash="+encrypt;
        var eventsurl="https://gateway.marvel.com:443/v1/public/characters/"+id+"/events?&ts="+ts+"&apikey="+pbl+"&hash="+encrypt;
    // NAME+IMG          
        fetch (nameurl)
        .then(
            response =>
            {
                val=response.json();
           
                return val;
            }
            ).then(function(val)
                {
                    name1=val.data.results[0].name;
                    img1=val.data.results[0].thumbnail.path;
                    img2=val.data.results[0].thumbnail.extension;
                    img1=img1+"."+img2;
                    // console.log(name1);
                    var li=document.createElement('li');
                    li.innerHTML=
                    `
                    <label id="name" for="list"> <h3>NAME</h3>${name1}</label><br><br>
                    <img id="img" src=${img1} alt="">

                    `
                    namelist.append(li);
                }).catch(error => console.error('Error:', error)
            ); 
    //COMICS

            fetch (comicsurl)
        .then(
            response =>
            {
                val=response.json();
            // console.log(val);   
                return val;
            }
            ).then(function(val)
                {
                    if(val.data.count>0)
                    {
                        for(let i=0;i<val.data.count;i++)
                            {  console.log(val);
                                var title=val.data.results[i].title;
                            var  price=val.data.results[i].prices[0].price;
                                //console.log(price);
                                page=val.data.results[i].pageCount;
                                character=val.data.results[i].characters.available;
                                var li=document.createElement('li');
                                li.innerHTML=
                                `
                                <label id="" for="list"> <b>Title - </b>${title}</label><br>
                                <label id="" for="list"><b>Price - </b>${price}</label><br>
                                <label id="" for="list"><b>Page Count - </b>${page}</label><br>
                                <label id="" for="list"><b>No Of Chatacter - </b>${character}</label><br>
                                <p>----------------------------------------------------------------------------------------------</p>

                                `
                                comicslist.append(li);
                            }
                    }
                    else
                    {
                        var li=document.createElement('li');
                        li.innerHTML=
                        `
                        <p>No Comics Found</p>

                        `
                        comicslist.append(li);
                    }
                    
                    
                    }).catch(error => console.error('Error:', error)
                    ); 
                

    //SERIES
    fetch (seriesurl)
    .then(
    response =>
    {
        val=response.json();
    // console.log(val);   
        return val;
    }
    ).then(function(val)
        {
            if(val.data.count>0)
            {
                for(let i=0;i<val.data.count;i++)
            {
                title=val.data.results[i].title;
                creators=val.data.results[i].creators.items[i].name;
                character=val.data.results[i].characters.available;
                var li=document.createElement('li');
                li.innerHTML=
                `
                <label id="name" for="list"><b>Title - </b>${title}</label><br>
                <label id="name" for="list"><b>Creator - </b>${creators}</label><br>
                <label id="name" for="list"><b>No Of Chatacter - </b>${character}</label><br>
                <p>----------------------------------------------------------------------------------------------</p>

                `
                serieslist.append(li);
            }
            }
            else
            {
                var li=document.createElement('li');
                li.innerHTML=
                `
                <p>No Series Found</p>

                `
                serieslist.append(li);
            }
            
            
            }).catch(error => console.error('Error:', error)
            ); 
        
            

    //STORIES


    fetch (storiesurl)
    .then(
    response =>
    {
        val=response.json();
    // console.log(val);   
        return val;
    }
    ).then(function(val)
        {
            if(val.data.count>0)
                {
                    for(let i=0;i<val.data.count;i++)
                        {
                            title=val.data.results[i].title;
                            creators=val.data.results[i].creators.items[i].name;
                            character=val.data.results[i].characters.available;
                            var li=document.createElement('li');
                            li.innerHTML=
                            `
                            <label id="name" for="list"><b>Title - </b>${title}</label><br>
                            <label id="name" for="list"><b>CREATORS - </b>${creators}</label><br>
                            <label id="name" for="list"><b>No. OF CHARACTORS - </b>${character}</label>
                            <p>----------------------------------------------------------------------------------------------</p>

                            `
                            storieslist.append(li);
                        }

                }
            else
                {
                    var li=document.createElement('li');
                    li.innerHTML=
                    `
                    <p>No Stories Found</p>

                    `
                    storieslist.append(li);
                }
            
            }).catch(error => console.error('Error:', error)
            ); 
        
            


    //EVENTS


    fetch (eventsurl)
    .then(
    response =>
    {
        val=response.json();
    // console.log(val);   
        return val;
    }
    ).then(function(val)
        {
            if(val.data.count>0)
            {
                for(let i=0;i<val.data.count;i++)
                    {
                        title=val.data.results[i].title;
                        creators=val.data.results[i].creators.items[i].name;
                        character=val.data.results[i].characters.available;
                        var li=document.createElement('li');
                        li.innerHTML=
                        `
                        <label id="name" for="list"><b>Title -</b>${title}</label><br>
                        <label id="name" for="list"><b>CREATORS</b>${creators}</label><br>
                        <label id="name" for="list"><b>No. OF CHARACTORS</b>${character}</label><br>
                        <p>----------------------------------------------------------------------------------------------</p>
                    

                        `
                        eventlist.append(li);
                    }
            }
            

            else
            {
                var li=document.createElement('li');
                li.innerHTML=
                `
                <p>No Events Found</p>

                `
                eventlist.append(li);
            }
            
            }).catch(error => console.error('Error:', error)
            ); 
        
            

            
            

    }

    function myFunction() {
        var x = document.getElementById("comics");
        if (x.style.display === "none") {
        x.style.display = "block";
        } else {
        x.style.display = "none";
        }
    }