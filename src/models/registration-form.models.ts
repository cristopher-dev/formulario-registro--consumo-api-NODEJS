import { Schema, model } from 'mongoose';

// SCHEME DATABASE
const form = new Schema(
  {
    nombre: { type: String, required: true, minlength: 5, maxlength: 50, trim: true, lowercase: true }, // Nombre
    apellido: { type: String, required: true, minlength: 5, maxlength: 50, trim: true, lowercase: true }, // Apellido
    email: { type: String, required: true, minlength: 5, maxlength: 50, trim: true, index: true }, // Correo Electrónico
    fechaNacimiento: { type: Date, required: true, trim: true, maxlength: 50, default: Date.now }, // Fecha de Nacimiento
    tipoDoc: { type: String, required: true, maxlength: 4, lowercase: true }, // Tipo de documento de identidad
    numeroDoc: { type: String, required: true, maxlength: 30, unique: true }, // Documento de identidad
    movil: { type: String, required: true, minlength: 7 }, // Celular
  },
  { timestamps: true }
);

// EXPORT MODELS
export const formRegistration = model('form-gistration', form);
