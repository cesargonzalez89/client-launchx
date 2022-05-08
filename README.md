# vue-3-crud

# Descripcion

Esta es una app de front creada en Vue JS version 3, dicha aplicacion se conecta a una api rest y tiene la funcionalidad para un CRUD de Explorers:
![image](https://user-images.githubusercontent.com/99153503/167313700-1fa81e62-f7e5-4e24-920e-2ce4d5cbc4d0.png)

# Dependencias:
- `Axios`. Nos permite realizar las peticiones HTTP al server. Referencias: https://github.com/axios/axios
- `bootstrap`. Es una libreria para estilos, nos permite agregar los estilos a los controles de las paginas simplemente usando sus clases.  https://getbootstrap.com/
- `Linter`. Es una herramienta para ayudarnos a cuidar la legibilidad en nuestro código. Para correr la revision usamos el comando `npm run lint`. Para revisar sus reglas puedes verificar el sitio https://eslint.org/docs/rules/

# Diagrama

La aplicacion tiene una estructura como se muestra a continuacion:
![image](https://user-images.githubusercontent.com/99153503/167314441-e0664744-6b59-4251-84d7-fb8b72ca59e0.png)

# Nuevo Feature Fullstack

`missionCommander`
| Campo | Tipo |
|---|---|
| id | Integer (autogenerado) |
| name | String |
| username | String |
| mainStack | String |
| currentEnrollment | Boolean |
| hasAzureCertification | Boolean |

1. En la pantalla inicial del front, consulta todos los registros de esta tabla y muéstralos.
2. Agrega la posibilidad de agregar uno nuevo.
3. Agrega la posibilidad de editar el `mainStack`.
4. Agrega la posibilidad de eliminar el registro.

# Ejecucion

1. Crea un fork para tener una copia del proyeto. 
2. Clona esta copia en tu entorno local.
3. Descarga las dependencias, dentro de este proyecto ejecuta: `npm install`
4. Ejecuta tu app con el comando: `npm run serve`, con esto podrás entrar a la url: `http://localhost:8081/`

# Resultado
Probamos el crud de la tabla missionCommander:
![May-08-2022 3-19-48 p m](https://user-images.githubusercontent.com/99153503/167314378-1b2c77f8-f80f-45f5-be62-30f3a138d529.gif)
