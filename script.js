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
        let count = 0
        
        let allRows = document.querySelectorAll("tr");
        
        for(let i = 0; i<rowNum; i++)
        {
            let cell = document.createElement("td");
            allRows[count].appendChild(cell)
            count++
        }
    }
    colNum++;
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

function goodbyeCol()
{if(colNum === 0)
    {
        alert("col # = 0")
    }
    else{
        let count = 0
        
        let allRows = document.querySelectorAll("tr");
        for(let i = 0; i<rowNum; i++)
        {
            allRows[count].removeChild(allRows[count].lastChild);

            count++;
        }
        numCol--;
}
}




