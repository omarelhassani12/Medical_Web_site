$(document).ready(function () {
    const mydataTable = $("#example1").DataTable({
      "responsive": true,
      "lengthChange": false,
      "autoWidth": false,
      "buttons": ["copy", "csv", "excel", "pdf", "print"],
      "columnDefs": [
        { "orderable": false, "targets": 3 } // Disable sorting for the fifth (index 4) column
      ]
    });

    // Get the length of the DataTable
    const appointmentCount = mydataTable.rows().count();

    // Update the appointment count
    $("#appointmentCount").text(appointmentCount);

    // listen document of delete appointment 

    $("#example1").on("click", ".delete-appointment", function() {
        var appointmentId = $(this).data("doc");
        var row = $(this).closest("tr"); // Get the closest row element

        console.log(appointmentId);
        // Perform AJAX request for edit appointment      

        $.ajax({
            url: '/appointments/' + appointmentId + '/delete',
            method: 'DELETE',
            success: function(response) {
                // Delete operation successful
                if (response.success) {
                  iziToast.success({
                  title: 'Success',
                  message: 'Appointment deleted successfully',
                  position: 'topRight',
                  timeout: 4000,
                  onClosed: function() {
                    // Refresh the page or perform any other action
                    row.remove();
                  }
                });    
                }
              
              },
            error: function(error) {
                // Handle the error if delete operation fails
                iziToast.error({
                  title: 'Error',
                  message: 'Failed to delete appointment',
                  position: 'topRight',
                  timeout: 4000
                });
              }
          });
        });

        
    })

 