
// const allBtn = document.getElementsByClassName('add-btn')
// console.log(allBtn);

// let count = 0;
// for (const btn of allBtn) {
//     // console.log(btn);
//     btn.addEventListener('click',function () {
//         // console.log('boss selected korchi');
//         count = count + 1;
//         // console.log(count);
//         document.getElementById('cart-count').innerText = count;
//     })
// }

const allBtn = document.getElementsByClassName('add-btn')
let count = 0;

for (const btn of allBtn) {
    btn.addEventListener('click', function (e) {
        count = count + 1;

        const placeName = e.target.parentNode.childNodes[1].innerText;

        const price = e.target.parentNode.childNodes[3].childNodes[1].innerText;

        const selectedContainer = document.getElementById('selected-place-container');

        const li = document.createElement('li');
        const p = document.createElement('p');
        p.innerText = placeName;
        const p2 = document.createElement('p2');
        p2.innerText = price;

        li.appendChild(p);
        li.appendChild(p2);
        selectedContainer.appendChild(li);


        totalCost('total-cost',parseInt(price));

        grandTotalCost('grand-total',parseInt(price))


        // // Total Cost
        // const totalCost = document.getElementById('total-cost').innerText;
        // const convertedTotalCost = parseInt(totalCost);
        // const sum = convertedTotalCost + parseInt(price);
        // setInnerText('total-cost', sum);

        // // Grand Total
        // const grandTotal = document.getElementById('grand-total').innerText;
        // const convertedGrandTotal = parseInt(grandTotal);
        // const sum2 = convertedGrandTotal + parseInt(price);      
        // setInnerText('grand-total', sum2);  


       setInnerText('cart-count', count)
    })
}

function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
}



function totalCost(id, value) {
    const totalCost = document.getElementById(id).innerText;
    const convertedTotalCost = parseInt(totalCost);
    const sum = convertedTotalCost + parseInt(value);
    // console.log(totalCost);
    setInnerText('total-cost', sum);
}


function grandTotalCost(id, value) {
    const totalCost = document.getElementById(id).innerText;
    const convertedTotalCost = parseInt(totalCost);
    const sum = convertedTotalCost + parseInt(value);
    // console.log(totalCost);
    setInnerText('grand-total', sum);
}