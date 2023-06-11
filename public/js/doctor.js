// Add Doctor

const form = document.getElementById('FormAddDoctor');

form.addEventListener('submit', async function(event) {
  event.preventDefault(); // Prevent form submission

  const myModal = document.getElementById('Ajouter');
  
  const formData = new FormData(form);

  // Convert FormData to JSON object
  const jsonObject = {};
  for (const [key, value] of formData.entries()) {
    jsonObject[key] = value;
  }
  
  try {
    // Send a POST request to the server
    const response = await fetch('../admin-add-doctor', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(jsonObject)
    });
    
    const res = await response.json();
    if (response.status === 200) {
      const modalInstance = mdb.Modal.getInstance(myModal);
      if (modalInstance) {
        modalInstance.hide(); // Hide the modal using MDB's hide method
      } 
      // Display success message using izitoast
      iziToast.success({
        title: 'Success',
        message: 'Doctor added successfully',
        position: 'topRight'
      });

      // Clear the form fields (optional)
      form.reset();
    } else {
      const error = Object.values(res.error).filter(field => field !== '');
 
      // Display error message using izitoast
      iziToast.error({
        title: 'Error',
        message: error.shift(),
        position: 'topRight'
      });
    }
  } catch (error) {
    // Handle any errors that occur during the fetch request
    console.error('Error:', error);
  }
});




// remove Doctor 

   const  removeDoctor =async (id) =>{
   var response = await fetch('/API/Doctor/removeDoctor/'+ id  , {
    method : 'DELETE' ,
    headers: {
      'Content-Type': 'application/json'
    },
  }) ;
  var res = await response.json();

  if (response.status === 200) {
    var element = document.getElementById(id);
    element.parentNode.removeChild(element);
    iziToast.success({
      title: 'Success',
      message: 'Doctor Deleted successfully',
      position: 'bottomRight',
      messageSize: '20px'
    });
  }else {
    iziToast.error({
      title: 'Error',
      message: 'Error deleting doctor',
      position: 'bottomRight',
      messageSize: '20px'
    });
  }



}

// Function to open the edit modal and set doctor values
const openEditModal = (id, modalId) => {
  const doctor =JSON.parse(modalId);
  // Retrieve the doctor details from the row using the id
  // const doctor = doctors.find((doctor) => doctor.id === id);

  // Populate the modal with the doctor details
  const modal = document.getElementById(id);
  modal.querySelector('#input-name').value = doctor.lastName;
  modal.querySelector('#input-prenom').value = doctor.firstName;
  modal.querySelector('#input-tele').value = doctor.telephone;
  modal.querySelector('#input-cni').value = doctor.cni;
  modal.querySelector('#input-email').value = doctor.email;
  modal.querySelector('#input-address').value = doctor.address;
  modal.querySelector('#idDoctor').value = doctor.id;

  const form = modal.querySelector('#EdiDoctor');


   const modalInstance = mdb.Modal.getInstance(modal);
    if (modalInstance) {
      modalInstance.show();
    }

   // Add event listener to the form submit event
   form.addEventListener('submit', async event => {
    event.preventDefault();

    // Retrieve the form data
    const formData = new FormData(form);
    const doctorData = Object.fromEntries(formData.entries());

    try {
      // Send the doctor data to the server using an API
      const response = await fetch(`/API/Doctor/edit/${doctor.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(doctorData),
      });

      if (response.status === 200) {

      // Display success message using izitoast
      iziToast.success({
        title: 'Success',
        message: 'Doctor Modify successfully',
        position: 'topRight'
      });
        // Close the modal if needed
        const modalInstance = mdb.Modal.getInstance(modal);
        if (modalInstance) {
          modalInstance.hide();
        }
      } else {
        const res = await response.json();

        const error = Object.values(res.error).filter(field => field !== '');
 
        // Display error message using izitoast
        iziToast.error({
          title: 'Error',
          message: error.shift(),
          position: 'topRight'
        });      
      }
    } catch (error) {
      console.error('Error updating doctor:', error);
    }
  });
};



$(document).ready(function () {
  const mydataTable = $("#example1").DataTable({
    "responsive": true,
    "lengthChange": false,
    "autoWidth": false,
    "buttons": ["copy", "csv", "excel", "pdf", "print"] ,
    "columnDefs": [
      { "orderable": false, "targets": 4 } // Disable sorting for the fifth (index 4) column
    ],
    "language": {
      "info": "Showing _START_ to _END_ of _TOTAL_ entries"
    }
  });
});