const form  = document.getElementById('AddExperiance');


form.addEventListener('submit', async (event) => {

    event.preventDefault();
    const myModal = document.getElementById('Ajouter');

    const formdata = new FormData(form);
    try {
        var res = await fetch('/API/AddExper' , {
        method: 'POST',
        headers : { 'Content-Type': 'application/json'},
        body : JSON.stringify(Object.fromEntries((formdata)))
    })

    if (res.status === 200) {
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
      location.reload();
    } else {
        iziToast.error({
            title: 'Error',
            message: 'Error adding Experiance',
            position: 'topRight'
          });
    }
    } catch (error) {
        console.error(error);
    }

 })


 const DeleteExperiance = async ( id) => {

    try {
       var res =  await fetch('/DELETE/experiences/' + id , {
            method : 'DELETE' ,
            headers : { 'Content-Type': 'application/json'},

        })

        if (res.status === 200) {
            const elementDeleted = document.getElementById(id)
            elementDeleted.parentNode.removeChild(elementDeleted);
            iziToast.success({
                title: 'Success',
                message: 'EXperiance has been deleted successfully',
                position: 'topRight'
              });
        
        } else {
            iziToast.error({
                title: 'Error',
                message: 'Error deleting',
                position: 'topRight'
              });
        }
    } catch (error) {
        
    }

 }