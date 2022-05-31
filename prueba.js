import { updateTask, form } from "./firabase.js"

const codigo1 = document.getElementById("codigo")

export const prueba= async(obj)=>{
let{id,data,codigo,precio,nombre,cant}=obj

    const dd=await updateTask(id,{
        cantidad:Number(data.cantidad)+cant,
        total:(Number(data.cantidad)+cant)*data.precio,
        codigo,
        precio,
        nombre})
        form.codigo.value=""
        form.nombre.value=""
        form.precio.value=""
        form.cantidad.value=""
        form.total.value=""
        codigo1.focus()
        console.log(cant)
return cant*data.precio



}