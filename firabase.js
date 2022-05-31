// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
import { getFirestore,collection,addDoc,getDocs,updateDoc,doc} from "https://www.gstatic.com/firebasejs/9.8.2/firebase-firestore.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBaMFPB2Wy8Dfw4__EN8grruhYOykiLqsE",
  authDomain: "fir-javascrip-crud-719ef.firebaseapp.com",
  projectId: "fir-javascrip-crud-719ef",
  storageBucket: "fir-javascrip-crud-719ef.appspot.com",
  messagingSenderId: "870234219367",
  appId: "1:870234219367:web:ee665da738ad96678a05c2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db=getFirestore()
export const NuevoP=document.getElementById("nuevoProducto")
export const pagar1=document.getElementById("pagar1")
export const form =document.getElementById("form")
export const codigo = document.getElementById("codigo")
export const agregar = document.getElementById("agregar")
export const reset = document.getElementById("reset")
export const res = document.getElementById("res")
export const guardar = document.getElementById("guardar")
export const total1 = document.getElementById("total")
export const pagar = document.getElementById("pagar")
export const pagar2 = document.getElementById("pagar2")
export const cantidad = document.getElementById("cantidad")
export const nombre = document.getElementById("nombre")
export const precio = document.getElementById("precio")









export const saveTask=(codigo,nombre,precio,cantidad)=>{
   addDoc (collection(db,"Productos"),{codigo,nombre,precio,cantidad})
}

export const getTask=()=>{
return getDocs(collection(db,"Productos"))
}


export const updateTask=(id,newFields)=>{ return updateDoc(doc(db,"Productos",id),newFields)


}











