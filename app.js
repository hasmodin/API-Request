

// let url = "https://api.thecatapi.com/v1/images/search?limit=10";


// fetch(url)
// .then((res) => {
//     console.log(res);
//     return res.json();
// })
// .then((data) => {
//     console.log(data);
//     return fetch(url)
// })
// .then((res1) => {
//     console.log(res1);
//     return res1.json();
// })
// .then((data1) => {
//     console.log(data1);
// })
// .catch((err) => {
//     console.log(err);
// })


//API request using async and await keyword

let url = "https://dog.ceo/api/breeds/image/random";

async function demo() {
    let res =  await fetch(url);
    let data = await res.json();
    console.log(res);
    console.log(data);


    let res1 =  await fetch(url);
    let data1 = await res1.json();
    console.log(res1);
    console.log(data1);


    let res2 =  await fetch(url);
    let data2 = await res2.json();
    console.log(res2);
    console.log(data2);
}

demo();