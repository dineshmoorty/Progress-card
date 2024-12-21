document.addEventListener('DOMContentLoaded', function() {
    const table = document.querySelector('table');
    
    table.addEventListener('click', function(event) {
        if (event.target.classList.contains('edit')) {
            const row = event.target.closest('tr');
            const columns = row.querySelectorAll('td');

            columns.forEach((cell, index) => {
                if (index === 0 || index >= columns.length - 2) 
                    return; // Skip subject name and action buttons

                const cellValue = cell.innerText;
                cell.innerHTML = `<input type="text" value="${cellValue}" class="input-marks">`;
            });

            row.querySelector('.edit').style.display = 'none';
            row.querySelector('.save').style.display = 'inline';
        }

        if (event.target.classList.contains('save')) {
            const row = event.target.closest('tr');
            const columns = row.querySelectorAll('td');

            columns.forEach((cell, index) => {
                if (index === 0 || index >= columns.length - 2) 
                    return; 

                const input = cell.querySelector('input');
                if (input) {
                    const inputValue = input.value;
                    cell.innerHTML = inputValue;

                    // Calculate grade based on marks
                    const gradeCell = columns[2];
                    gradeCell.innerHTML = calculateGrade(inputValue);
                }
            });

            row.querySelector('.edit').style.display = 'inline';
            row.querySelector('.save').style.display = 'none';

            // Update the total marks
            updateTotalMarks();
        }
    });

    function calculateGrade(marks) {
        const mark = parseInt(marks);
        if (mark > 100) return 'Invalid Entry';
        if (mark >= 90) return 'A+';
        if (mark >= 80) return 'A';
        if (mark >= 70) return 'B+';
        if (mark >= 60) return 'B';
        if (mark >= 50) return 'C+';
        if (mark >= 35) return 'C';
        return 'F';
    }

    function updateTotalMarks() {
        const rows = document.querySelectorAll('.table tbody tr');
        let totalMarks = 0;
        
        rows.forEach((row, index) => {
            if (index < rows.length - 1) { // Exclude the "Total" row
                const marksCell = row.querySelector('td:nth-child(2)');
                if (marksCell && marksCell.classList.contains('fw-bold')) {
                    const marks = parseFloat(marksCell.innerText) || 0;
                    totalMarks += marks;
                }
            }
        });
        const totalRow = rows[rows.length - 1];
        totalRow.querySelector('td:nth-child(2)').innerText = totalMarks;
    }
});
