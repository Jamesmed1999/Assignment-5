let rowNum = 1
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
    console.log(rowNum)
}

function Col()
{

    let newcol = document.createElement("td")
    document.getElementById("col").appendChild(newcol)
    colNum++
    console.log(document.getElementById("col"))
}