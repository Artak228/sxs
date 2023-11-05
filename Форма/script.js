//JS 


function fun(){
   let pass = document.getElementById('pass');
   let name = document.getElementById('name');
   var mail = document.getElementById('email');
   let select = document.getElementById('select');
   

   function fun1(){
    console.log(`Имя: ${name.value}`);
    console.log(`Пароль: ${pass.value}`);
    console.log(`Email: ${email.value}`);
    console.log(`Язык: ${select.value}`);
    console.log('----------------------');
    
   }

   var a = email.value;
   

   switch(select.value){ 
    case "error": alert("Выберите язык программирования"); break;
    case "C#": fun1(); break;
    case "C++": fun1(); break;
    case "JavaScript": fun1(); break;
    case "HTML": fun1(); break;
    case "Python": fun1(); break;
   }
   //var a = name.value;
   //console.log(a.length);
   
}