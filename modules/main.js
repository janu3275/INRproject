import alljson from "../data/alldata.json" assert 
{type:'json'}

import jsonOne from "../data/data1.json" assert 
{type:'json'}

import jsonTwo from "../data/data2.json" assert 
{type:'json'}

import jsonThree from "../data/data3.json" assert 
{type:'json'}

import jsonFour from "../data/data4.json" assert 
{type:'json'}

const init=()=>{
console.log(alljson)
alljson.forEach((x)=>addCardToDom(x.number))
// firstpage()
// secondpage()
// thirdpage()
// fourthpage()
document.getElementById("firstpageid").style.borderBottom="0";

document.getElementById("secondpageid").style.borderBottom="0";

document.getElementById("thirdpageid").style.borderBottom="0";

document.getElementById("fourthpageid").style.borderBottom="0";

document.getElementById("all").style.borderBottom="2px solid black";


}

const firstpage = ()=>{
document.getElementById("middle").innerHTML="";    
jsonOne.forEach((x)=>addCardToDom(x.number))

document.getElementById("firstpageid").style.borderBottom="2px solid black";

document.getElementById("secondpageid").style.borderBottom="0";

document.getElementById("thirdpageid").style.borderBottom="0";

document.getElementById("fourthpageid").style.borderBottom="0";

document.getElementById("all").style.borderBottom="0";

}    

const secondpage = ()=>{
    document.getElementById("middle").innerHTML="";  

    jsonTwo.forEach((x)=>addCardToDom(x.number))

    document.getElementById("secondpageid").style.borderBottom="2px solid black";

    document.getElementById("firstpageid").style.borderBottom="0";
    
    document.getElementById("thirdpageid").style.borderBottom="0";

    document.getElementById("fourthpageid").style.borderBottom="0";

    document.getElementById("all").style.borderBottom="0";
} 

const thirdpage = ()=>{
    document.getElementById("middle").innerHTML="";    
    jsonThree.forEach((x)=>addCardToDom(x.number))

    document.getElementById("thirdpageid").style.borderBottom="2px solid black";

    document.getElementById("firstpageid").style.borderBottom="0";

    document.getElementById("secondpageid").style.borderBottom="0";
    
    document.getElementById("fourthpageid").style.borderBottom="0";

    document.getElementById("all").style.borderBottom="0";
} 

const fourthpage = ()=>{
    document.getElementById("middle").innerHTML="";  
    
    jsonFour.forEach((x)=>addCardToDom(x.number))

    document.getElementById("fourthpageid").style.borderBottom="2px solid black";

    document.getElementById("firstpageid").style.borderBottom="0";

    document.getElementById("secondpageid").style.borderBottom="0";

    document.getElementById("thirdpageid").style.borderBottom="0";
    
    document.getElementById("all").style.borderBottom="0";
    
} 


const addCardToDom = (number)=>{
  const cardsview = document.getElementById("middle")
  const trycard = document.createElement("div")
  trycard.className="card"
//   const cards = document.getElementById("card")
  trycard.innerHTML=`<div class="image">
  <img class="medicine" src="./Images/Rectangle 12.png" alt="img">
</div>
<div class="content">
<h2 class="different">Item ${number}</h2>
<p >By Global Xchange </p>
<p>bkjbk hjgjh hjgbjh hjgbjh hjgjh hjgjhgj hjgjhg Read more...</p> 
<div class="stars">
<img src="./Images/Group 11994.png" alt="starimg"> 
<img src="./Images/Group 11994.png" alt="starimg">
<img src="./Images/Group 11994.png" alt="starimg">
<img src="./Images/Group 11994.png" alt="starimg">
<img src="./Images/Group 11994.png" alt="starimg">
</div> 
<div class="rates">
  <div class="rate" >
  <h3 class="hh3" >$5.31 </h3>
  <p class="hh3"> USD</p>
  </div>
  
  <div class="rate">
  <img class="hh3" src="./Images/Group 11995.png" alt="jhgj">
  <img class="hh3" src="./Images/Group.png" alt="jkh">
  </div>
  
</div>

</div>`

cardsview.append(trycard)
// cards.append(trycard)

}

export {init, firstpage, secondpage, thirdpage, fourthpage}