/*<!--
Name: Aboubacar S Diakite
Description: Javascript Page
-->*/

const product = [
    {
        id:1,
        title:'product name 1',
        image: 'photos/case1.JPG',
        price: 45
    },
    {
        id:2,
        title:'product name 2',
        image: 'photos/case2.JPG',
        price: 25
    },
    {
        id:3,
        title:'product name 3',
        image: 'photos/case3.JPG',
        price: 45
    },
    {
        id:4,
        title:'product name 4',
        image: 'photos/case4.JPG',
        price: 13
    },
    {
        id:5,
        title:'product name 5',
        image: 'photos/case5.JPG',
        price: 13
    },
    {
        id:6,
        title:'product name 6',
        image: 'photos/case6.JPG',
        price: 63
    },
    {
        id:7,
        title:'product name 7',
        image: 'photos/case7.JPG',
        price: 100
    },
    {
        id:8,
        title:'product name 8',
        image: 'photos/case8.JPG',
        price: 45
    },   
    {
        id:9,
        title:'product name 9',
        image: 'photos/case9.JPG',
        price: 60
    },
    {
        id:10,
        title:'product name 10',
        image: 'photos/case10.JPG',
        price: 60
    },
    // The Gaming products below
    
        {
        id:11,
        title:'product name 11',
        image: 'photos/game1.JPG',
        price: 324
    },
    {
        id:12,
        title:'product name 12',
        image: 'photos/game2.JPG',
        price: 400
    },
    {
        id:13,
        title:'product name 13',
        image: 'photos/game3.JPG',
        price: 90
    },
    {
        id:14,
        title:'product name 14',
        image: 'photos/game4.JPG',
        price: 60
    },
    {
        id:15,
        title:'product name 15',
        image: 'photos/game5.JPG',
        price: 40
    },
    {
        id:16,
        title:'product name 16',
        image: 'photos/game6.JPG',
        price: 20
    },
    {
        id:17,
        title:'product name 17',
        image: 'photos/game7.JPG',
        price: 360
    },
    {
        id:18,
        title:'product name 18',
        image: 'photos/game8.JPG',
        price: 80
    },   
    {
        id:19,
        title:'product name 19',
        image: 'photos/game9.JPG',
        price: 40
    },
    {
        id:20,
        title:'product name 20',
        image: 'photos/game10.JPG',
        price: 395
    },   
    {
        id:21,
        title:'product name 21',
        image: 'photos/game11.JPG',
        price: 205
    },
    {
        id:22,
        title:'product name 22',
        image: 'photos/game12.JPG',
        price: 150
    },
    // tools products below
    {
        id:23,
        title:'product name 23',
        image: 'photos/tool1.JPG',
        price: 250
    },
    {
        id:24,
        title:'product name 24',
        image: 'photos/tool2.JPG',
        price: 65
    },
    {
        id:25,
        title:'product name 25',
        image: 'photos/tool3.JPG',
        price: 66
    },
    {
        id:26,
        title:'product name 26',
        image: 'photos/tool4.JPG',
        price: 30
    },
    {
        id:27,
        title:'product name 27',
        image: 'photos/tool5.JPG',
        price: 130 
    },
    {
        id:28,
        title:'product name 28',
        image: 'photos/tool6.JPG',
        price: 95
    },
    {
        id:29,
        title:'product name 7',
        image: 'photos/tool7.JPG',
        price: 180
    },
    {
        id:30,
        title:'product name 30',
        image: 'photos/tool8.JPG',
        price: 150
    },   
    {
        id:31,
        title:'product name 31',
        image: 'photos/tool9.JPG',
        price: 180
    },
    {
        id:32,
        title:'product name 32',
        image: 'photos/tool10.JPG',
        price: 45
    },
    // electronics' products below
    {
        id:33,
        title:'product name 33',
        image: 'photos/electronic1.JPG',
        price: 90
    },
    {
        id:34,
        title:'product name 34',
        image: 'photos/electronic2.JPG',
        price: 50
    },
    {
        id:35,
        title:'product name 35',
        image: 'photos/electronic3.JPG',
        price: 25
    },
    {
        id:36,
        title:'product name 36',
        image: 'photos/electronic4.JPG',
        price: 19
    },
    {
        id:37,
        title:'product name 37',
        image: 'photos/electronic5.JPG',
        price: 140 
    },
    {
        id:38,
        title:'product name 38',
        image: 'photos/electronic6.JPG',
        price: 45
    },
    {
        id:39,
        title:'product name 39',
        image: 'photos/electronic7.JPG',
        price: 60
    },
    {
        id:40,
        title:'product name 40',
        image: 'photos/electronic8.JPG',
        price: 25
    },   
    {
        id:41,
        title:'product name 41',
        image: 'photos/electronic9.JPG',
        price: 125
    },
    {
        id:42,
        title:'product name 42',
        image: 'photos/electronic10.JPG',
        price: 25
    }
    
    
];
const categories = [...new Set(product.map((item)=>
    {return item; }))];
let i = 0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
            `<div class=box-11>
                <div class="img-box">
                    <img class="images" src=${image}></img>
            </div>
            <div class="bttom">
            <p>${title}</p><h2>$ ${price}.00</h2>`
            + "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
            `</div>
            </div>`                      
    ); 
}).join('');
var cart = [];
function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}
function displaycart(a){
    let j = 0, total=0;
    document.getElementById('count').innerHTML=cart.length;
    
    if(cart.length===0){
        document.getElementById('cartItem').innerHTML = "your cart is empty";
        document.getElementById('total-1').innerHTML="$"+0+".00";
    }
    else {
            document.getElementById('cartItem').innerHTML = cart.map((items)=>{
            var{image, title, price} = items;
            total = total+price;
            document.getElementById('total-1').innerHTML="$"+total+".00";
            return(
                    `<div class="cart-item">
                    <div class="row-img">
                        <img class="rowing" src="${image}"> ${title} $ ${price}                
                    `+ "<i class='bi bi-trash fa-solid fa-trash' onclick='delElement("+(j++) +")'></i></div>"
                ); 
            }).join('');
        }
            
    }

