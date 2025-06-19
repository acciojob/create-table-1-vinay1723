function insert_Row() {
    //Write your code here
	let table = document.getElementById('sampleTable');
    let new_row = table.insertRow(0);
	let new_cell1 = new_row.insertCell(0);
	let new_cell2 = new_row.insertCell(1);
	
	new_cell1.textContent = "New Cell1";
	new_cell2.textContent = "New Cell2";
	
	

	// table.prepend(new_row);
  
}
