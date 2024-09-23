
function adctarefa(){
    let input = document.querySelector("input").value.trim()
    
    
    let li = document.createElement("li")
    li.innerHTML = input + '<span onclick="deletartarefa(this)">❌</span>'

    document.querySelector("ul").appendChild(li)
    document.querySelector("input").value = ""


    inputElement.value = ""


}

function deletartarefa(li){
    li.parentElement.remove()
}

document.querySelector("input").addEventListener("keydown", function(event) {
    if (event.key == "Enter") {
        adctarefa()
    }
})