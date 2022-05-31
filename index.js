import { ajax } from "./ajax.js"
import { saveTask ,getTask,updateTask,codigo,nombre,precio,cantidad, pagar,pagar1} from "./firabase.js"
import { prueba } from "./prueba.js"
import { general } from "./prueba2.js"

codigo.focus()

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    saveTask(codigo.value,nombre.value,precio.value,cantidad.value)
    form.codigo.value=""
    form.nombre.value=""
    form.precio.value=""
    form.cantidad.value=""
    form.total.value=""
    codigo.focus()
  })
  

// let cant=0
// let total = 0

// let cobrar=0

let cantidades=[]
let canti=0

let sumatotal=0


codigo.addEventListener("input", async (e) => {

agregar.dataset.ident=0
const data = await getTask()
console.log(data)
data.forEach( element => {


if (form.codigo.value.startsWith("234") && element.data().codigo.startsWith("234")) {

canti++


              
ajax(canti,{element,data:element.data()})

guardar.addEventListener("click",async (e)=>{
    e.preventDefault()
    
console.log(canti)
   let edward= await prueba({id:agregar.dataset.ident,data:element.data(),codigo:"234576767",precio: 4,nombre: "galleta",cant:canti})
   console.log(edward)
   

//    if(pagar1.textContent==="") pagar1.textContent=edward
//    else { pagar1.textContent+=`+ ${edward}`
//                    }

  

    canti=0


})









            }
    
    
           



    
















    

    
             if (form.codigo.value.startsWith("55") && element.data().codigo.startsWith("55")) {
              
        canti++
        ajax(canti,{element,data:element.data()})

    guardar.addEventListener("click",async (e)=>{
        e.preventDefault()

        let edward=await prueba({id:agregar.dataset.ident,data:element.data(),codigo:"55123444",precio: 1.5,nombre: "soda",cant:canti})
        if(pagar1.textContent==="") pagar1.textContent=edward
        else  pagar1.textContent+=`+ ${edward}`
 
        canti=0

    })



            
               
                 
             }


         




             if (form.codigo.value.startsWith("56") && element.data().codigo.startsWith("56")) {
              
                cant++
               
   
                form.nombre.value = element.data().nombre
               form.precio.value = element.data().precio
               form.cantidad.value = cant
              
               total=cant*element.data().precio
               form.total.value = total
   
               agregar.dataset.ident=element.id
   
                guardar.addEventListener("click",(e)=>{
                   e.preventDefault()
                   updateTask(agregar.dataset.ident,{
                        cantidad:Number(element.data().cantidad)+cant,
                        total:(Number(element.data().cantidad)+cant)*element.data().precio,
                        codigo: "5678",
                        precio: 3.5,
                        nombre: "pera"})
               })
                
            }












    
    // console.log(total)
    
        });
    


    
    })
    
    

    form.addEventListener("reset", () => {
        canti = 0
        let uno=pagar1.textContent.split("+")
        console.log(uno)
        console.log("reste")
    })
    