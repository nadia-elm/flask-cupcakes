
const BASE_URL = "http://localhost:5000/api";
const $form = $('#new_cupcake')



$form.on('submit', async function(e){
    e.preventDefault();

     let flavor = $("#flavor").val();
     let size = $("#size").val();
     let rating = $("#rating").val();
     let image = $("#image").val();
    const newCupcake = await axios.post(`${BASE_URL}/cupcakes`,{
        flavor,
         rating,
         size,
         image
    
    });
console.log(newCupcake)
    
})



// async function createCupcake(){
//      axios.defaults.headers.post["Content-Type"] = "application/json";

//     newCupcake = 
    // axios
    //   .post(
    //     "/api/cupcakes",
    //     {
    //       flavor: flavor,
    //       size: size,
    //       rating: rating,
    //       image: image,
    //     },
    //     {
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //     }
    //   )
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((error) => {
    //     console.log(error);
      

//     axios.defaults.headers.post["Content-Type"] = "application/json";

//     newCupcake = await axios({
//       method: 'post',
//       url: "http://localhost:5000/api/cupcakes",
//       headers:{
//        'Content-Type': 'application/json',  
//       },
//       data: {
//         flavor,
//          rating,
//          size,
//          image
//       },
//     });
// console.log(newCupcake)
    





















   

async function getCupcakes(){
    const res = await axios.get("http://localhost:5000/api/cupcakes");
    const ul = document.querySelector('#cupcakes');
    // console.log(res)
    for(let c of res.data.cupcakes){
        // let newCupcake = generateHTML(c)
        const newLI = document.createElement('LI');
        const image = document.createElement('img')
        image.classList.add("photo")
        newLI.innerText = ` A ${c.size} ${c.flavor} Cupcake`;
        image.src=c.image
        ul.append(newLI)
        ul.append(image)
    }
}

getCupcakes()


















































// //  $('.add_btn'). click(addCupcake)
   
// $("#new_cupcake").on("submit", async function(evt)){
//     evt.preventDefault();

//     let flavor =$('#flavor').val();
//     let size = $('#size').val();
//     let rating = $('#rating').val();
//     let image = $('#image').val();

// const res = await axios.post(`{BASE_URL}/ cupcakes`, {
//     flavor,
//     rating,
//     size,
//     image
// });
// $("#new_cupcake").trigger("reset");
// }

// //  async function addCupcake(){
// //   await axios.post(`BASE_URL/{cupcakes}`,{
// //     flavor :$('#flavor').val(),
// //     size : $('#size').val(),
// //     rating : $('#rating'),
// //     image : $('#image')
// //   }) 
// //  }