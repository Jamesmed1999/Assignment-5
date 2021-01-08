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
    if(rowNum === 0)
    {
        alert("no rows to add columns too")
    }
    else{

    
    let newcol = document.createElement("td")
    document.getElementById("col").appendChild(newcol)
    colNum++
    console.log(document.getElementById("col"))
    }
}

function goodbyeRow()
{if(rowNum === 0)
    {
        alert("row # = 0")
    }
    else{
    let table = document.getElementById("table")
    table.deleteRow(rowNum-1)
    rowNum--;
}
}