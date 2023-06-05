

// const formregister = document.getElementById('submitForm');
// const lastName = document.getElementsByClassName('lastName');
// const email = document.getElementsByClassName('email');
// const password = document.getElementsByClassName('password');
// const address = document.getElementsByClassName('address');
// const phone = document.getElementsByClassName('phone');
// const firstName = document.getElementsByClassName('firstName');
// const cin = document.getElementsByClassName('cin');

// formregister.addEventListener('onclick' ,async  (e) =>{
//     e.preventDefault();

//     const res = await fetch('/register' , {
//         body : JSON.stringify({
//             lastName : lastName,
//             email : email,
//             password : password,
//             address : address,
//             phone : phone,
//             cin : cin,
//             firstName : firstName,
//         }) ,
//         method : 'POST' ,
//         headers : {
//             'Content-Type' : 'application/json'
//         }
//     }) ;
//     const data = await res.json();
//     console.log(data);
// })
