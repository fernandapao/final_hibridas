import express from 'express';
import mongoose from 'mongoose';
import { usersRoutes, novedadesRoutes, funcionesRoutes } from './routes/index.js';
import 'dotenv/config';
import cors from "cors";

const url = process.env.DB_URL;


mongoose.connect(url)
  .then(() => {
    console.log('Conexión con Mongo exitosa!');
  })
  .catch(err => {
    console.error('Error al conectar a MongoDB:', err);
  });


const app = express();


//para error de cors
// const options = {
//     origin: 'final-hibridas-fmps.vercel.app',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     AllowedHeathers: ['Content-Type', 'Authorization'],
//     credentials: true
    
// }

// app.use(cors(options));

const allowedOrigins = ['https://final-hibridas-fmps.vercel.app'];

const corsOptions = {
  origin: function(origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.get('/',(req, res) => {
    res.send("aplihibridas database");
});

app.use('/users', usersRoutes);
app.use('/novedades', novedadesRoutes);
app.use('/funciones', funcionesRoutes);

function verificarRol(rolesAdmitidos) {
    return function(req, res, next){
        const rolUsuario =req.headers['x-rol'];

        if(rolesAdmitidos.includes(rolUsuario)){
            next();
        } else {
            res.status(403).json({mensaje: "Acceso denegado"})
        }
    }
}

app.get("/panel", verificarRol(["admin", "super-admin"]), (req, res) =>{
    res.send("Acceso permitido")
});


const port = process.env.PORT || 3000;
app.listen(port, () => {
console.log(`Conexión con Mongo exitosa!`);
});

