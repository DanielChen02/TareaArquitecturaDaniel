import { initializeApp } from "firebase/app";
import 'firebase/storage';
import { createUserWithEmailAndPassword, getAuth,signInWithEmailAndPassword } from "firebase/auth";
import { collection, deleteDoc, doc, getDocs, getFirestore, setDoc } from "firebase/firestore";
import 'firebase/auth';
import { uuid } from 'uuidv4';
  // Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const  firebaseConfig = {
  apiKey: "AIzaSyDmTGNbKYSGiaEAnztUiJIzZyjcb2Bs5rQ",
  authDomain: "basedatosdesign.firebaseapp.com",
  projectId: "basedatosdesign",
  storageBucket: "basedatosdesign.appspot.com",
  messagingSenderId: "522174750350",
  appId: "1:522174750350:web:7f92fa8a393d83b071f3df"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const auth = getAuth();

export function firebaseRegistrarUsuario(email, password) {
  return createUserWithEmailAndPassword(auth, email, password)
}

debugger;
export async function firebaseIniciarSesion(email, password) {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    debugger;

  } catch (e) {
    return false;
  }
  return true;
}

export async function firebaseBuscar(coleccionABuscar) {
  let listado = [];
  let consulta = collection(getFirestore(), coleccionABuscar);
  let resultado = await getDocs(consulta);
  resultado.forEach(documento => {
    let objeto = documento.data();
    objeto.id = documento.id;
    listado.push(objeto);
  });
  return listado;
}

export function firebaseCrear(coleccion, objeto) {
  objeto.id = uuid();
  let referencia = doc(getFirestore(), coleccion, objeto.id);
  setDoc(referencia, objeto);
}

export async function firebaseEliminar(coleccion, id) {
  debugger
  await deleteDoc(doc(getFirestore(), coleccion, id));
}
