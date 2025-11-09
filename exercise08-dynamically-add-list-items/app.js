let itemInput=document.getElementById("itemInput");
console.log(itemInput);
let myList=document.getElementById("myList");
console.log(myList);
let addBtn=document.getElementById("addBtn")
console.log(addBtn);
let removeBtn=document.getElementById("removeBtn")
console.log(removeBtn);
let errorMsg=document.getElementById("errorMsg")

addBtn.addEventListener("click", ()=>{
    if(itemInput.value.trim()===""){
        itemInput.classList.add("error");
        errorMsg.textContent ="Please add an item!";
        errorMsg.style.display="block"
        return;
    }
    itemInput.classList.remove("error");
    errorMsg.style.display="none"
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
