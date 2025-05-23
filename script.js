// array, vetor
const items = []

function addItem(){
    const itemName = document.querySelector("#item").value

    //objeto
    const item ={
        name: itemName,
        checked: false
    }

    items.push(item)

    document.querySelector("#item").value = ""

    showItemsList()
}

function showItemsList(){
    const sectionList = document.querySelector(".list")

    sectionList.innerHTML = ""
    
    items.sort((itemA, itemB) => Number(itemA.checked) - Number(itemB.checked))

    items.map((item, index) => {
        sectionList.innerHTML += `
            <div class="item">
                <div>
                    <input type="checkbox" name="list" id="item-${index}">
                    <div class="custom-checkbox">
                        <img src="./assets/checked (1).svg" alt="checked">
                    </div>
                    <label for="item-${index}">${item.name}</label>
                </div>
                <button>
                    <img src="./assets/trash-icon (1).svg" alt="trash icon">
                </button>
            </div>
        `
    })
}

function checkItem(itemName){
    const item = items.find((item) => item.name === itemName)
    item.checked = !item.checked
    showItemsList()
}