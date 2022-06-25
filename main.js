 let boshMassiv = []
$(".usersOl").on("click", () =>{
    $.ajax("https://reqres.in/api/users",{
        type:"GET",
        success:function(ress){
            console.log(ress.data);
            boshMassiv = ress.data
            $(".malumotOl").html(" ")
            
            ress.data.forEach(element => {
                let li = `
            <div class=" col-4 ">
            <li class="m-4">
                <img src="${element.avatar}">
                <div class="userFIO">${element.first_name} ${element.last_name}</div>
                <div>${element.email}</div>
                <div>${element.id}</div>
            </li>
            </div>
                
            `
            $(".malumotOl").append(li)
                
            });
            
        }
    })
})
//========single user =========//
let sanoq = 1
$(".singleUser").on("click", () =>{
    $.ajax(`https://reqres.in/api/users/${sanoq}`, {
        type:"GET",
        success:function(ress){
            console.log(ress.data); 
            boshMassiv = ress.data
            let li = `
            <div class=" col-3">
                <li class="m-4">
                    <img src="${ress.data.avatar}">
                    <div class="userFIO">${ress.data.first_name} ${ress.data.last_name}</div>
                    <div>${ress.data.email}</div>
                    <div>${ress.data.id}</div>  
                </li>
            </div>
            `
            
            $(".malumotOl").append(li)
            console.log(li);
        },
        error:function(err){
            console.log(err);
        }

    })
    sanoq++
    if(sanoq <13){
        sanoq++ 
    }else{
        sanoq = 1
    }
    
})
// ======= delayed user======//
$(".delayedUser").on("click", () =>{
    $.ajax("https://reqres.in/api/users?delay=3", {
        type:"GET",
        beforeSend:function () {
            $(".spinner").toggleClass("d-none")
           },
        complete:function(){
            $(".spinner").toggleClass("d-none")
           },    
        // beforeSend:function () {
        //     $(".spiner").toggleClass("d-none")
        //    },
        // complete:function(){
        //     $(".spiner").toggleClass("d-none")
        //    },    
        success:function(ress){
            console.log(ress.data);
            boshMassiv = ress.data
            boshMassiv.forEach(element => {
                let li = `
            <div class=" col-4 ">
            <li class="m-4">
                <img src="${element.avatar}">
                <div class="userFIO">${element.first_name} ${element.last_name}</div>
                <div>${element.email}</div>
                <div>${element.id}</div>
            </li>
            </div>
                
            `
            $(".malumotOl").append(li)   
          });
        }
    })
})
 
let rasmOlish = ""
function rasmOl(rasm) {
    rasm.src = window.URL.createObjectURL(rasm.files[0])
    let rasmManzili = rasm.src
    rasmOlish = rasmManzili
    console.log(rasmOlish);
}

$(".addItem").on("click", function() {
    
    let text1 = document.querySelector(".first_name").value
    let text2 = document.querySelector(".last_name").value
    let text3 = +document.querySelector(".ID").value
    console.log(text1,text2,text3);
    
     boshMassiv.push({
        // text1:first_name,
        // text2:last_name,
        // text3:id
        avatar:rasmOlish,
        first_name:text1,
        last_name:text2,
        id:text3
     })
     $(".malumotOl").html(" ")
     boshMassiv.forEach(element => {
        let li = `
    <div class=" col-4 ">
    <li class="m-4">
        <img class = "img-fluid" src="${element.avatar}">
        <div class="userFIO">${element.first_name} ${element.last_name}</div>
        <div>${element.email}</div>
        <div>${element.id}</div>
    </li>
    </div>
        
    `
    $(".malumotOl").append(li)
  });
})

// ====== id orqali user chiqarish===========//
// let ID 
// $(".addBtn").on('click', () => {
//     ID = $(".text").val()
//     $.ajax(`https://reqres.in/api/users/${ID}`, {
//         type: "GET",
//         success: function (ress) { 
//             console.log(ress)
//             $(".users").html(" ")
//             let li = `
//                 <li class="m-4">
//                     <img src="${ress.data.avatar}">
//                     <div class="userFIO">${ress.data.first_name} ${ress.data.last_name}</div>
//                     <div>${ress.data.email}</div>
//                     <div>${ress.data.id}</div>
//                 </li>
//             `
//             $(".users").append(li)
//          },
//         error: function (err) {
//             $(".users").html(" ")
//             let status = err.status
//             if(status == 404){
//                 let h1 = `
//                     <h1>Error: Bunday ID ga ega user mavjud emas!</h1>
//                 `
//                 $(".users").append(h1)
//             }
//         }
//     })
// })

// // ========== PUT =============//
// $("form").on("submit", function(event) {
//     event.preventDefault()
//     $.ajax($(this).attr("action") + ID,{
//         type:$(this).attr("method"),
//         data:{
//             "first_name":$(".first_name").val(),
//             "last_name":$(".last_name").val()
//         },
//         success:function(ress){
//             console.log(ress);
//             $(".userFIO").html(ress.first_name + " " + ress.last_name)
//         },
//         error:function(err){
//             console.log(err);
//         }
//     })
        
// })
//=======<h2 POS >========//

// $("form").on("submit"), function(event) {
//     event.preventDefault()
//     $.ajax($(this).attr("action"),{
//         type:$(this).attr("method"),
//         data:$("form").serialize(),
//         data:{
//             "name":$(".name").val(),
//             "job":$(".job").val(),
//             "phone":$(".phone").val(),
//             "hobby":$("Play guitar"),
//             "age":20
//         },
//         success:function(ress){
//             console.log(ress);
//             let col = `
//                 <div class = "col-3">
//                       <div>${ress.createdAt}</div>               
//                       <div>${ress.id}</div>               
//                       <div>${ress.job}</div>               
//                       <div>${ress.name}</div>               
//                       <div>${ress.phone}</div>               
//                 </div>
//             `
//             $(".data").append(col)
//         },
//         error:function(err){
//             console.log(err);
//         }
//     })
    
// }

