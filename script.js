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

function Col()
{
    if(rowNum === 0)
    {
        alert("no rows to add columns too")
    }
    else{
        let count = 0
        
        let everyTable = document.querySelectorAll("tr");
        
        for(let i = 0; i<rowNum; i++)
        {
            let cell = document.createElement("td");
            everyTable[count].appendChild(cell)
            count++
        }
    }
    colNum++;
}