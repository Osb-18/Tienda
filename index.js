import { ajax } from "./ajax.js"
import { saveTask ,getTask,updateTask,codigo,nombre,precio,cantidad, pagar,pagar1, form,agregar, reset,NuevoP, total1,res} from "./firabase.js"
import { prueba } from "./prueba.js"
import { general } from "./prueba2.js"


// const d={nombre:{apellido:"santamria"},name:{last:"osbert"}}
// d.forEach(e=>{
//     console.log(e)
// })

codigo.focus()





NuevoP.addEventListener("click",(e)=>{
    e.preventDefault()
    saveTask(codigo.value,nombre.value,precio.value,cantidad.value)
    form.codigo.value=""
    form.nombre.value=""
    form.precio.value=""
    form.cantidad.value=""
    form.total.value=""
})


form.addEventListener("submit",(e)=>{
    e.preventDefault()
     console.log("click")
     

    reset.focus()
    
   
  })
  

// let cant=0
// let total = 0

// let cobrar=0


let canti=0


codigo.addEventListener("blur", async () => {

 
agregar.dataset.ident=0
const data = await getTask()

console.log(data)
data.forEach( element => {


if (form.codigo.value ==="7750106002615" && element.data().codigo ==="7750106002615") {

canti++


              
ajax(canti,{element,data:element.data()})

guardar.addEventListener("click",async (e)=>{
    e.preventDefault()

   let edward= await prueba({id:agregar.dataset.ident,data:element.data(),codigo:"7750106002615",precio: 2.5,nombre: "rellenitas",cant:canti})
   console.log(edward)
//    pagar1.textContent=edward
 
    canti=0


})


            }
    
    
        

    
  if (form.codigo.value ==="7613035196902" && element.data().codigo ==="7613035196902") {
              
       canti++
       ajax(canti,{element,data:element.data()})

   guardar.addEventListener("click",async (e)=>{
       e.preventDefault()

       let edward=await prueba({id:agregar.dataset.ident,data:element.data(),codigo:"7613035196902",precio: 1.5,nombre: "soda",cant:canti})
    //    pagar.textContent=edward
 
       canti=0

   })



            
               
                 
          }


         




    //          if (form.codigo.value.startsWith("56") && element.data().codigo.startsWith("56")) {
              
    //             cant++
               
   
    //             form.nombre.value = element.data().nombre
    //            form.precio.value = element.data().precio
    //            form.cantidad.value = cant
              
    //            total=cant*element.data().precio
    //            form.total.value = total
   
    //            agregar.dataset.ident=element.id
   
    //             guardar.addEventListener("click",(e)=>{
    //                e.preventDefault()
    //                updateTask(agregar.dataset.ident,{
    //                     cantidad:Number(element.data().cantidad)+cant,
    //                     total:(Number(element.data().cantidad)+cant)*element.data().precio,
    //                     codigo: "5678",
    //                     precio: 3.5,
    //                     nombre: "pera"})
    //            })
                
    //         }



    else{
  
        return
    }


        });
    


    
    })
    


    form.addEventListener("reset", (e) => {

        e.preventDefault()
       
        codigo.select()
        form.codigo.value=codigo.value
        codigo.focus()
        reset.focus()
       
      
        
    })
    
    res.addEventListener("click",()=>{
        form.codigo.value=""
        form.nombre.value=""
        form.precio.value=""
        form.cantidad.value=""
        form.total.value=""
        codigo.focus()
 canti = 0
         console.log("reste")
         

    })