
let count = 0;
const allBtn = document.getElementsByClassName('kbd');


for (const btn of allBtn) {
  btn.addEventListener('click', function () {

    if (count >= 4) {
      return alert('Maximum selected!!!!');
    }
    btn.style.backgroundColor = 'green';
    count += 1;
    const seatUpdated = document.getElementById('seat-update');
    seatUpdated.innerText = count;
    const seatDecrease = document.getElementById('seat-decrease');
    seatDecrease.innerText = 4 - count;


    const ticketInfo = document.getElementById('ticket-info');
    const tr = document.createElement('tr');
    tr.classList.add('row');
    const td1 = document.createElement('td');
    td1.innerText = btn.innerText;
    tr.appendChild(td1);

    const td2 = document.createElement('td');
    td2.innerText = 'Economy';
    tr.appendChild(td2);

    const td3 = document.createElement('td');
    td3.innerText = 550;
    tr.appendChild(td3);
    ticketInfo.appendChild(tr);
    const ticketPrice = ticketInfo.childNodes[1].childNodes[2].innerText;  // ticketPrice=string
   

   
    updatedTotalCost(ticketPrice);
    GrandTotal();
  });
}


function GrandTotal(status) {
  const totalCost = getConvertedValue("total-cost");

 
if(status == undefined) {
 
  document.getElementById("grand-total").innerText=totalCost;
} 
else{
     const couponCode = document.getElementById("coupon-code").value;

   if( couponCode == "NEW15" ){
     const  discounted = totalCost * 0.15;
     document.getElementById("grand-total").innerText = totalCost - discounted;
   } 
  else if( couponCode == "Couple 20" ){
     const  discounted = totalCost * 0.2;
     document.getElementById("grand-total").innerText = totalCost - discounted;
   } 
  
   else{
    alert("Invalid coupon code");
   }
 }  
}

function updatedTotalCost(price){
  const totalCost=getConvertedValue('total-cost');
  const convertedPrice=parseInt(price);
  const sum=totalCost + convertedPrice;
  document.getElementById('total-cost').innerText=sum;
}

function getConvertedValue(id) {
  const price=document.getElementById(id).innerText;
  const convertPrice=parseInt(price);
  return convertPrice;
}





























