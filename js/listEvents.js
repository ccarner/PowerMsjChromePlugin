
function main(){
    console.log("executing JS");
    console.log(document.getElementsByClassName("pgAidKits")[0]);
    var table = document.getElementsByClassName("pgAidKits")[0]

    var row;
    for (var i=1; i < table.rows.length; i++){
        row = table.rows[i]
        //iterate through rows
        //rows would be accessed using the "row" variable assigned in the for loop
        console.log("row", row)
        console.log("textontent",row.cells[0].textContent)
        console.log("row0 text",row.cells[0].textContent)
        if (!(["QUOTED","COMPLETED"].includes(row.cells[4].textContent))){
            console.log("text: ",row.cells[4].textContent);
            row.cells[7].innerHTML += "| ⚡ <a href = 'https://ssl.stjohnvic.com.au/msj/event/roster.jsp?action=submiteoi&event_id=" + row.cells[0].textContent + "'>Submit EOI </a>"
        }
    }
}

main();