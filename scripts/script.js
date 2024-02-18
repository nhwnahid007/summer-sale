let count=1;
let totalPrice=0;
const cards=document.querySelectorAll('.card');

for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    // console.log(element);
    card.addEventListener("click",function(){
        // console.log('clicked');
        //get the title

        const title= card.querySelector('h3').innerText;
        // console.log(title.innerText);
        const price = parseFloat(
          card.querySelector("span").innerText.split(" ")[1]
        );
        console.log(typeof price);
        // console.log({title, price});
        // console.log(price);
        // console.log(title);
        const titleContainer= document.getElementById('title-container');
        // console.log(titleContainer);
        const p= document.createElement('p');
        p.innerText=count+ '. ' +title;

        titleContainer.appendChild(p)
        count++;


        totalPrice+= price;

        document.getElementById("totalPrice").innerText = totalPrice.toFixed(2);



    })
    
}
 
const btn = document.getElementById("apply-btn");

btn.addEventListener('click',function(){
    // console.log('clicked');

    //get the value from input
    const couponElement = document.getElementById("input-field").value;
    const couponCode=couponElement.split(' ').join('').toUpperCase();
    
    console.log(couponCode);
    // console.log(couponElement.value);
    if (totalPrice >= 200) {
      if (couponCode === "SELL200") {
        // console.log('milse');
        const discountElement = document.getElementById("discountPrice");
        const discounAmount=totalPrice*0.2;
        discountElement.innerText=discounAmount.toFixed(2);

        //total price
        const restTotal=document.getElementById('total');
        restTotal.innerText=totalPrice- discounAmount.toFixed(2);
        document.getElementById("input-field").value='';

      } else {
        alert("Invalid coupon code");
        document.getElementById("input-field").value = "";
      }
    } else {
      alert("minimum 200$ spend");
      document.getElementById("input-field").value = "";
    }

})
