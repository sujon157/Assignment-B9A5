
let count=0;
const allBtn=document.getElementsByClassName('kbd');


for(const btn of allBtn){
    btn.addEventListener('click',function(){
     
      
      if(count>=4){
        return alert('Enough!');
      }
      
      btn.style.backgroundColor='green';
      count+=1;  
      const seatUpdated=document.getElementById('seat-update');
      seatUpdated.innerText=count;

      const seatDecrease=document.getElementById('seat-decrease');
      seatDecrease.innerText=4-count;
 
    //  const Seat=document.getElementById('seat');
    //  Seat.innerText=btn.innerText;
    //  const Class=document.getElementById('class');
    //  Class.innerText='economy';
    //  const amount=document.getElementById('amount');
    //  amount.innerText=650;

      
      const ticketInfo=document.getElementById('ticket-info');
      const tr=document.createElement('tr');

      const td1=document.createElement('td');
      td1.innerText=btn.innerText;
      tr.appendChild(td1);

      const td2=document.createElement('td');
      td2.innerText='Economy';
      tr.appendChild(td2);

      const td3=document.createElement('td');
      td3.innerText=550;
      tr.appendChild(td3);

     
      ticketInfo.appendChild(tr);

    




        
    })
}





