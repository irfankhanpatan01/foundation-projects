let itemInput=document.getElementById("itemInput");
console.log(itemInput);
let myList=document.getElementById("myList");
console.log(myList);
let addBtn=document.getElementById("addBtn")
console.log(addBtn);
let removeBtn=document.getElementById("removeBtn")
console.log(removeBtn);

addBtn.addEventListener("click", ()=>{
    if(itemInput.value.trim()===""){
        alert("Please add the item before adding")
        return
    }
    let newLi=document.createElement("li");
    newLi.textContent=itemInput.value;
    myList.append(newLi);
    itemInput.value=""
});
removeBtn.addEventListener("click", ()=>{
    let lastItem=myList.lastElementChild
    if(lastItem){
        lastItem.remove()
        console.log("item removed sucessfully");
    }else
    console.log("no items left to remove");
})
