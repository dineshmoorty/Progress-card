document.addEventListener('DOMContentLoaded', function(){

  const getDetailsButton = document.querySelector('.Get');

  getDetailsButton.addEventListener('click', function() {
  
    const studentName = document.querySelector('.student').value;
    const rollnumber = document.querySelector('.rollnumber').value;
    const selectClass = document.getElementById('class-detail').value;
    const selectSection = document.getElementById('section-detail').value;
    const progressCard = document.getElementById('progress-card').value;
  
    //console.log(studentName , rollnumber , selectClass , selectSection, progressCard);
  
    const tableRows = document.querySelectorAll('.student-table tbody tr');
    //console.log(tableRows);
  
    tableRows[0].querySelector('td:nth-child(2)').innerText = studentName;
    tableRows[1].querySelector('td:nth-child(2)').innerText = rollnumber;
    tableRows[2].querySelector('td:nth-child(2)').innerText = selectClass;
    tableRows[3].querySelector('td:nth-child(2)').innerText = selectSection;
    tableRows[4].querySelector('td:nth-child(2)').innerText = progressCard;
  });
});
