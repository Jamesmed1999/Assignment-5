let rowNum = document.getElementById("table").childElementCount
let colNum = 1

    
function Row()
{

    let newRows = document.createElement("tr")
    let table = document.getElementById("table")
    
    
    
    for(let i = 0; i<colNum; i++)
    {
        let cell = document.createElement("td")
        newRows.appendChild(cell)
    }
    table.appendChild(newRows)
    
    rowNum++
    
}
