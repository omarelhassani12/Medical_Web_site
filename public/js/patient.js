

// remove Patient 

const  removepatient = async (id) =>{
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

 async function handleRemovePatients() {


      try {

        var selectedCheckboxes = document.querySelectorAll('input[type=checkbox]:checked');
         var arrayIDS = [] ;
        selectedCheckboxes.forEach(function(checkbox) {
             arrayIDS.push(checkbox.dataset.id);
           });

          if (arrayIDS.length === 0) {
            iziToast.warning({
              title: 'Warning',
              message: 'No patients selected for removal.',
              position: 'topRight'
            });
            return;
          }
      
          // Disable the button during the removal process
          const deleteButton = document.getElementById('deleteButton');
          deleteButton.disabled = true;


         // Send the DELETE request
        const response = await fetch('/API/Patients/ManyPatients', {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ ids: arrayIDS })
        });
  
        if (response.status === 200) {
          selectedCheckboxes.forEach(function(checkbox) {
            checkbox.parentNode.parentNode.remove();
          });
          iziToast.success({
            title: 'Success',
            message: 'Patients successfully removed.',
            position: 'topRight'
          });
        } else {
          iziToast.error({
            title: 'Error',
            message: 'Failed to remove patients.',
            position: 'topRight'
          });
        }
      } catch (error) {
        iziToast.error({
          title: 'Error',
          message: 'An error occurred while removing patients.',
          position: 'topRight'
        });
       }
    }
  