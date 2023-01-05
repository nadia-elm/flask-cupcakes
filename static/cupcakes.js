
const BASE_URL = "http://localhost:5000/api";

//  $('.add_btn'). click(addCupcake)
   
$("#new_cupcake").on("submit", async function(evt)){
    evt.preventDefault();

    let flavor =$('#flavor').val();
    let size = $('#size').val();
    let rating = $('#rating').val();
    let image = $('#image').val();

const res = await axios.post(`{BASE_URL}/ cupcakes`, {
    flavor,
    rating,
    size,
    image
});
$("#new_cupcake").trigger("reset");
}

//  async function addCupcake(){
//   await axios.post(`BASE_URL/{cupcakes}`,{
//     flavor :$('#flavor').val(),
//     size : $('#size').val(),
//     rating : $('#rating'),
//     image : $('#image')
//   }) 
//  }