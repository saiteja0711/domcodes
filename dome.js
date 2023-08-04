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


//var items=document.getElementsByClassName('list-group-item');
// //console.log(items);
// // items[1].textContent="Hello";
// // items[1].style.fontWeight='bold';
// items[2].style.backgroundColor='green';
// for(var i=0;i<items.length;i++)
// {
    
//     items[i].style.fontWeight='bold';
// }
// //we cannot update new ithem with items 


// //li  works same as items from above
// var li=document.getElementsByTagName('li');
// li[1].textContent="Hello";
// li[4].style.fontWeight='bold';//new item can be updated here


//quorySelector
// var header=document.querySelector('#main-header');
// header.style.borderBottom='solid 4px #000';

// var inp=document.querySelector('input');
// inp.value='Hello World';

// var inpB=document.querySelector('input[type="Submit"]');
// inpB.value='Send';

// var li=document.querySelector('.list-group-item');
// li.style.color="red";

// var lst=document.querySelector('.list-group-item:nth-child(2)');
// lst.style.color="green";

// var lst=document.querySelector('.list-group-item:nth-child(3)');
// lst.style.display='none';

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

//var itemsList= document.querySelector('#items');
//parent Node
// console.log(itemsList.parentNode);
// itemsList.parentNode.style.backgroundColor='#ccc';
// console.log(itemsList.parentNode.parentNode);

// parentElement
// console.log(itemsList.parentElement);
// itemsList.parentElement.style.backgroundColor='#ccc';
// console.log(itemsList.parentElement.parentElement);

//childNodes it counts nodes with space as text so it better to not to use it.

// childNodes
// console.log(itemsList.children);
// console.log(itemsList.children[1]);
// itemsList.children[1].style.backgroundColor='yellow';

// //FirstChild it counts line break as text

// //firstelementchild
// console.log(itemsList.firstElementChild);
// itemsList.firstElementChild.textContent='Hello 1';
 
// //lastChild it counts line break as text

// //lastelementchild
// //console.log(itemsList.lastElementChild);
// itemsList.lastElementChild.textContent='Hello 4';

// // nextSibilings it counts line breaks as text so it better to not to use it.

// //nextElementsibiling
// //console.log(itemsList.nextElementSibling);

// //previousSibiling it counts line breaks as text so it better to not to use it.

// //previousElementSibiling
// // console.log(itemsList.previousElementSibling);
// itemsList.previousElementSibling.style.color='green';

// // createElement

// //create a div
// var newDiv= document.createElement('div');

// //add class
//  newDiv.className='hello';

//  //add attribute
//  newDiv.setAttribute('title','Hello Div');

//  //Create text node
//  var newDevtext=document.createTextNode('Hello World');

//  //add text to div
//  newDiv.appendChild(newDevtext);

//  var container=document.querySelector('header .container');
//  var h1=document.querySelector('header h1');

// console.log(newDiv);
// newDiv.style.fontSize= '30px';
// container.insertBefore(newDiv,h1);

// var anotherNewDiv=document.createElement('div');
// var anotherNewDevText=document.createTextNode('HEllo world');
// anotherNewDiv.appendChild(anotherNewDevText);
 
// var item=document.querySelector('#items');
// var first=document.querySelector('.list-group-item:nth-child(1)');

// item.insertBefore(anotherNewDiv,first);
// console.log(anotherNewDiv);

var form = document.getElementById('addForm');
var itemsList=document.getElementById('items')

form.addEventListener('submit',addItem);

itemsList.addEventListener('click',removeItem);
 function addItem(e){
    e.preventDefault();
    var newItem=document.getElementById('item').value;
     var li=document.createElement('li');
     li.className="list-group-item";
     li.appendChild(document.createTextNode(newItem));
     var deleteBtn=document.createElement('button');
     deleteBtn.className='btn btn-danger btn-sm float-right delete';
     deleteBtn.appendChild(document.createTextNode('X'));
     li.appendChild(deleteBtn);

     //add editbutton
     var editBtn=document.createElement('button')
     editBtn.className='btn btn-primary btn-sm float-right';
     editBtn.appendChild(document.createTextNode('Edit'));
     li.appendChild(editBtn);

     itemsList.appendChild(li);

 }
 function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?'))
        {
            var li=e.target.parentElement;
            itemsList.removeChild(li);
        }
    }

 }