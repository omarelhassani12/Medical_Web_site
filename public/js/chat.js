async function getDisc(args) {

    document.getElementById('nameReceiver').innerText = args[2]
    document.getElementById('imgDisc').style.display = 'none';
    document.getElementById('containerMsg').style.display = 'block';
    document.getElementById('idReceiver').value = args[0];
    var listMessages = document.getElementById('listMessages');

    try {

        var res = await fetch('/Chat/disc/'+args[0]+'/'+args[1] , {
 
            method : 'GET',
        }) ; 
        const response = await res.json() ;
        listMessages.innerHTML = " ";
        
        if (res.status === 200) {
            console.log(response)
            if (response.length > 0) {
               response.forEach(element => {
                
                    const date = new Date(element.dateMessage);
                    const localDate = new Date(date.getTime() - (date.getTimezoneOffset() * 60000));
                    const dateHumain = localDate.toLocaleString();

                    if (element.idReceiver == parseInt(args[0])) {
                    var messageUI = "<div class='d-flex flex-row justify-content-end'><div><p class='small p-2 me-3 mb-1 text-white rounded-3 bg-primary'>"+ element.content +"</p><p class='small me-3 mb-3 rounded-3 text-muted'>"+ dateHumain +"</p></div><img src='user_profile.png'alt='avatar 1' style='width: 45px; height: 100%;'></div>"
                    listMessages.innerHTML += messageUI;
                }else if(element.idSender == parseInt(args[0])) {
                    var messageUI = "<div class='d-flex flex-row justify-content-start'><img src='user_profile.png'alt='avatar 1' style='width: 45px; height: 100%;'><div><p class='small p-2 ms-3 mb-1 rounded-3' style='background-color: #f5f6f7;'>"+ element.content +"<p class='small ms-3 mb-3 rounded-3 text-muted float-end'>" +dateHumain+ "</p></div></div>"
                    listMessages.innerHTML += messageUI;
                }

            });
            scrollToBottom()
            }

        }
    } catch (error) {
        console.error(error)
    }
}

 async function sendMessageDB(event , idSender) {
    event.preventDefault(); // Prevent the default behavior of the link/button
    var listMessages = document.getElementById('listMessages');
    var idReceiver = document.getElementById('idReceiver').value;
    var content = document.getElementById('content').value;
    const date = new Date();

    // Perform any additional logic or operations with the obtained values
  
    try {
       var res = await fetch('/Chat/sendMessage', {
            body : JSON.stringify({
                idSender : idSender ,
                content : content ,
                idReceiver : idReceiver
            }) ,
            method : 'POST',
            headers : { 'Content-Type': 'application/json'},
        });

        if (res.status === 200) {
            var messageUI = "<div class='d-flex flex-row justify-content-end'><div><p class='small p-2 me-3 mb-1 text-white rounded-3 bg-primary'>"+ content +"</p><p class='small me-3 mb-3 rounded-3 text-muted'>"+ date.toLocaleTimeString() +"</p></div><img src='user_profile.png'alt='avatar 1' style='width: 45px; height: 100%;'></div>"
            listMessages.innerHTML += messageUI;
            scrollToBottom()

        } else {
            console.log('errrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr')
        }
    } catch (error) {
        console.log(error)
    }
  
    // Clear the input field
    document.getElementById('content').value = '';
  }

  function scrollToBottom() {
    var listMessages = document.getElementById('listMessages');

    listMessages.scrollTo({
      top: listMessages.scrollHeight,
      behavior: "smooth"
    });
  }
  

 
  