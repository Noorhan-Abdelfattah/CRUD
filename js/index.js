
var productNameInput = document.getElementById('productName');
var productPriceInput = document.getElementById('productPrice');
var productCategoryInput = document.getElementById('productCategory');
var productDescInput = document.getElementById('productDesc');


var productsContainer = [];

if(localStorage.getItem('products')!=null)
{
    productsContainer =JSON.parse( localStorage.getItem('products') );
    displayProducts(productsContainer)
}
 function addProduct()
{
    var product = {
        name: productNameInput.value,
        price: productPriceInput.value ,
        category:productCategoryInput.value ,
        desc:productDescInput.value ,
    }
    productsContainer.push(product);
    localStorage.setItem("products",JSON.stringify( productsContainer )  )
    displayProducts(productsContainer)
  clearForm();
}

function clearForm ()
{
    productNameInput.value ="";
    productPriceInput.value ="";
     productCategoryInput.value ="";
    productDescInput.value ="";
}

function displayProducts(list)
{
    var cartona   =''
for( var i=0 ;i < list.length ; i++)
{
    cartona += `<tr>
    <td>${list[i].name}</td>
    <td>${list[i].price}</td>
    <td>${list[i].category}</td>
    <td>${list[i].desc}</td>
    <td><button class="btn btn-outline-warning btn-sm">Update</button></td>
    <td><button onclick="deleteProduct (${i})" class="btn btn-outline-danger btn-sm">Delete</button></td>
</tr>`
}

document.getElementById("tableBody").innerHTML = cartona
}


function deleteProduct (productIndex)
{
    productsContainer.splice(productIndex,1)
    localStorage.setItem("products", JSON.stringify (productsContainer))
    displayProducts(productsContainer);
}

function searchProduct (term)
{
    var matchedProduct = [];
    for(var i=0 ;i < productsContainer.length ; i++ ) 
    {
if(productsContainer[i].name.toLowerCase(). includes (term.toLowerCase()) === true)
{
    matchedProduct.push (productsContainer[i]); 

}
    }
    console.log(matchedProduct)
    displayProducts(matchedProduct);
}








