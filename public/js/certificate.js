

    //  add Certificate

    const form = document.getElementById('AddCertificate');
    const dateForPicker = document.querySelector('input[type=date]');

    var date ;
    flatpickr(dateForPicker , {
        dateFormat: 'Y-m-d',
    }
    ) 
    form.addEventListener('submit', async(event) => {
        event.preventDefault();
         const formData = new FormData(form);

        var res = await fetch('/API/AddCertficate' , {
            body : JSON.stringify(Object.fromEntries(formData.entries())),
            method : 'POST',
            headers : {
                'Content-Type': 'application/json',
            }
            
        }) ;
        
         if (res.status === 200) {
 
            iziToast.success({
                title: 'Success',
                message: 'Diploma added successfully',
                position: 'topRight'
              });
              
              // Delay for 3 seconds (3000 milliseconds)
              setTimeout(() => {
                form.reset();
                location.reload();
              }, 3000);
              
        } else {
            iziToast.error({
                title: 'Error',
                message: 'Error adding Deploma',
                position: 'topRight'
              });
        }
        
    })

    async function removeCertficate(id) {
        
        console.log(id);
        var res = await fetch(`/delete/Certficate/${id}` , {
            headers : {
                'Content-Type': 'application/json'
            } ,
            method : 'DELETE'
        })
        if (res.status === 200) {
            iziToast.success({
                title: 'Success',
                message: 'Diploma Has been Deleted',
                position: 'topRight'
              });
              const row = document.getElementById(id);
              row.parentNode.removeChild(row);
        } else {
            iziToast.error({
                title: 'Error',
                message: 'Error Delete Deploma',
                position: 'topRight'
              });
        }
    }
    

        // DataTables initialization code

        $('#example1').DataTable(
            {
                columnDefs : [{
                    targets: 3, // Column number (zero-based index)
                    orderable: false
                }]
            }
        );


 