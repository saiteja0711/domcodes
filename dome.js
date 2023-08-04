//console.log(document)
// console.log(document.title);
 //document.title="New Title";
//console.log(document.doctype);
//console.log(document.head);
//console.log(document.body);
//console.log(document.all);
//document.all[10].textContent='Hello';

// var header=document.getElementById('main-header');
// header.style.borderBottom='solid 3px #000';


 var items=document.getElementsByClassName('list-group-item');
// //console.log(items);
// // items[1].textContent="Hello";
// // items[1].style.fontWeight='bold';
items[2].style.backgroundColor='green';
for(var i=0;i<items.length;i++)
{
    
    items[i].style.fontWeight='bold';
}

//li  works same as items from above
// var li=document.getElementsByTagName('li');
// li[1].textContent="Hello";

//quorySelector
// var header=document.querySelector('#main-header');
// header.style.borderBottom='solid 4px #000';

// var inp=document.querySelector('input');
// inp.value='Hello World';

// var inpB=document.querySelector('input[type="Submit"]');
// inpB.value='Send';

// var li=document.querySelector('.list-group-item');
// li.style.color="red";

// var lst=document.querySelector('.list-group-item:last-child');
// lst.style.color="blue";

// var lst=document.querySelector('.list-group-item:nth-child(2)');
// lst.style.color="coral";

//query selector all
// var title=document.querySelectorAll('.title');
// title[0].style.fontWeight="bold";
// title[0].style.color='green';

// var odd=document.querySelectorAll('.list-group-item:nth-child(odd)');
// var even=document.querySelectorAll('.list-group-item:nth-child(even)');

// for(var i=0;i<odd.length;i++)
// {
//     odd[i].style.backgroundColor='#f4f4f4';
//     even[i].style.backgroundColor='#f4f';
// }
