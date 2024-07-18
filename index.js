let list_item = document.getElementById('list-container')

document.getElementById('add-btn').addEventListener('click', () => {
    let itemName = document.getElementById('item-name')
    let itemPrice = document.getElementById('item-price')
    
     if (itemName.value === "" && itemPrice.value=== "") {
        itemPrice.style.borderColor = "red"
        itemName.style.borderColor = "red"
    }
    else if (itemName.value === "" && itemPrice.value !== "") {
        itemPrice.style.borderColor = ""
        itemName.style.borderColor = "red"
    }
    else if (itemName.value !== "" && itemPrice.value === "") {
        itemName.style.borderColor = ""
        itemPrice.style.borderColor = "red"
    }
    else {
        let currentDate = new Date().toDateString()
        let newTr = document.createElement('tr')
        let td1 = document.createElement('td')
        let td2 = document.createElement('td')
        let td3 = document.createElement('td')
        td1.textContent = itemName.value
        td2.textContent = currentDate
        td3.textContent = itemPrice.value
        newTr.appendChild(td1)
        newTr.appendChild(td2)
        newTr.appendChild(td3)
        list_item.appendChild(newTr)

        let totalPriceSum =document.getElementById('total-price')
        totalPriceSum.value+= parseInt(itemPrice.value);
        itemName.value = ""
        itemPrice.value = ""
        itemName.style.borderColor = ""
        itemPrice.style.borderColor = ""


    }

})
