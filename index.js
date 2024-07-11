const expenseForm = document.getElementById('Expenseform');
const expenseList = document.getElementById('Expenselist');

expenseForm.addEventListener('submit',function(event){
    event.preventDefault();
    
    const desc = document.getElementById('description').value;
    const sel = document.getElementById('category').value;
    const amt = document.getElementById('amount').value;

    if(document && sel && !isNaN(amt)){
        const newrow = document.createElement('tr');

        newrow.innerHTML = `<td>${desc}</td>
            <td>${sel}</td>
            <td>${amt}</td>`;

        expenseList.appendChild(newrow);
        
        document.getElementById('description').value = '';
        document.getElementById('category').value = '';
        document.getElementById('amount').value = '';
    }
    else{
        alert('Please fill out all fields with valid data');
    }
    
})