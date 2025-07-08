import { email, minLength, nonEmpty, object, pipe, string } from "valibot";

export const UsuarioLoginSchema = object({
    email: pipe(string(), nonEmpty('Ingrese un email.'), email('Ingrese un correo valido')),
    password: pipe(string(), nonEmpty('Ingrese una contraseña'), minLength(6, 'La contraseña debe tener minimo 6 caracteres'))
})

export const UsuarioPasswordFormSchema = object({
    password: pipe(string(),nonEmpty('Ingrese una contraseña'), minLength(6, 'La contraseña debe tener minimo 6 caracteres'))
})

