const checkBoxes =document.querySelectorAll("[name='color']")


checkBoxes.forEach(checkbox => {
    checkbox.onclick = function(event){
        const checkedColors = [];
     checkBoxes.forEach(input => {    
        if(input.checked === true){
            // console.log(c.getAttribute("data-color"))
            checkedColors.push(input.getAttribute("data-color"));
        }
    })
    console.log(checkedColors)
        axios.post("http://localhost:3000/filter-boxes", {colors: checkedColors}).then(myAPIRes => {
        const filteredBoxes = myAPIRes.data;
   
        const boxLayout = document.querySelector(".d-grid.boxes");
        boxLayout.innerHTML = "";
        filteredBoxes.forEach(box => {
            console.log(box)
            boxLayout.innerHTML += `<div class="box" style="background-color:${box.color}">${box.color}</div>`
        });
        }).catch(err => console.log(err))
   }
})