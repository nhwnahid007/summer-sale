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
 

