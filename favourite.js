const taskList = document.getElementById('list');

var a = localStorage.getItem("superhero");
var myArray = a.split(",");
URLs();
function URLs() {


    for (let i = 0; i < myArray.length; i++) {

        let name1 = "";
        let img1 = "";
        let img2 = "";
        let ts = 1;
        let pbl = "745977a758749048615536465e90343b";
        let pvt = "b779789baebe989f3ccc5c1c9aae0921ba79e395";
        let st = "";
        let a = st.concat(ts, pvt, pbl);
        let encrypt = (CryptoJS.MD5(a).toString());

        const url = "https://gateway.marvel.com:443/v1/public/characters/" + myArray[i] + "?&ts=" + ts + "&apikey=" + pbl + "&hash=" + encrypt;
        fetch(url)
            .then(
                response => {
                    val = response.json();
                    return val;
                }
            ).then(function (val) {
                name1 = val.data.results[0].name;
                img1 = val.data.results[0].thumbnail.path;
                img2 = val.data.results[0].thumbnail.extension;
                img1 = img1 + "." + img2;
                name1 = name1.replace(/ *\([^)]*\) */g, "");
                const li = document.createElement('li');

                li.innerHTML =
                    `
                        <label id="name"  for="list">${name1}</label>
                        <img id="favImg" src=${img1} alt="">
                         <button class="del"  id="${myArray[i]}"  onClick="reply_click(this.id)" > Delete From Favourite </button>

                        `
                taskList.append(li);

            }).catch(error => console.error('Error:', error));


    }

}


function reply_click(clicked_id) {
    myArray = myArray.filter((x) => {
        return clicked_id != x;
    });
    localStorage.setItem("superhero", myArray);
    window.location.reload();
}

