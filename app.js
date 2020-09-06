console.log('this is project 4 ');

const name = document.getElementById('name')
const email = document.getElementById('email')
const number = document.getElementById('number')

validName=false
validEmail=false
validNumber=false

$('#success').hide()
$('#failure ').hide()



// console.log(name, email,number);

name.addEventListener('blur',()=>{
    console.log('name is blured');
    regex=/^[a-zA-z][0-92a-zA-Z]{2,10}$/
    let str=name.value
    if (regex.test(str)) {
        console.log('Your name is valid');
        name.classList.remove("is-invalid")
        validName=true
        
    }
    else{
        console.log('Your name not is valid');
        name.classList.add("is-invalid")
        validName=false
        
    }
    
})

email.addEventListener('blur',()=>{
    console.log('email is blured');

    regex=/^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/
    let str=email.value
    if (regex.test(str)) {
        console.log('Your email is valid');
        email.classList.remove("is-invalid")
        validEmail=true

        
    }
    else{
        console.log('Your email not is valid');
        email.classList.add("is-invalid")
        validEmail=false

        
    }
})

number.addEventListener('blur',()=>{
    console.log('number is blured');
    
    regex=/^([0-9]){10}/
    let str=number.value
    if (regex.test(str)) {
        console.log('Your number is valid');
        number.classList.remove("is-invalid")
        validNumber=true

    }
    else{
        console.log('Your number is not valid');
        number.classList.add("is-invalid")
        validNumber=false

    }
})

let success = document.getElementById('submit')
success.addEventListener('click',(e)=>{
    e.preventDefault()
    console.log('submit is triggred');
    
 if (validName && validEmail && validNumber) {
     console.log("everything is valid")
     let success= document.getElementById('success')
     let failure= document.getElementById('failure')
     success.classList.add('show')
     failure.classList.remove('show')
     $('#failure').hide()
     $('#success').show()
 }
 else{
    console.log("everything is not valid")
    let failure= document.getElementById('failure')
    success.classList.remove('show')
    failure.classList.add('show')
    $('#failure').show()
    $('#success').hide()
 }
})
