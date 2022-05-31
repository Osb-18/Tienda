import { form } from "./firabase.js"


let total=0

export const general=(canti,obj)=>{
    total+=total

    let{element,data}=obj


    form.nombre.value = data.nombre
    form.precio.value = data.precio
    form.cantidad.value = canti
   
    total=canti*data.precio
    form.total.value = total

    agregar.dataset.ident=element.id
    return canti


}