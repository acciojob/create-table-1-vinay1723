function insert_Row() {
    //Write your code here
	let table = document.getElementById('sampleTable');
    let new_row = document.createElement('tr');
	let new_cell1 = document.createElement('td');
	let new_cell2 = document.createElement('td');
	
	new_cell1.textContent = "New Cell1";
	new_cell2.textContent = "New Cell2";
	
	new_row.appendChild(new_cell1);
	new_row.appendChild(new_cell2);

	table.prepend(new_row);
  
}
