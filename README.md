# student-service
Api rest, hecha con node, express y mongodb, que permite el manejo de la información de un grupo de alumnos pertenecientes al mismo curso. La aplicaión se ejecuta por el puerto 8081.
Es importante realizar el cambio de la conexión a la base de datos. El archivo se encuentra en app\config\db.config.js.

# Métodos
## crreate
Este método registra un nuevo estudiante a la base de datos. La petición se ejecuta mediante un POST usando las url "http://localhost:8081/api/students" y enviando en el cuerpo un JSON con el siguiente formato:
```json
{
	"id": "1037667018",
	"firstName": "Cristian David",
	"lastName": "Vargas Bermúdez",
	"note": 4,
	"career": "Ingeniería de sistemas"
}
```
## findAll
Este método devulve todos los documentos guardados en la base de datos. Se usa la petición GET y la url es "http://localhost:8081/api/students"

## findOne
Este método regresa un documento, buscándolo por el id. Se usa la petición GET y la url es "http://localhost:8081/api/students/:id"

## findByCareer
Busca todos los documentos que conicidan en la búsqueda de una carrera determinada. Se usa la petición GET y la url es "http://localhost:8081/api/students/career/:career"

## update
Actualiza la información de un documento, buscandolo por el id y enviando los datos a actualizar en el cuerpo de la apetición. Se usa la petición PUT, la url es "http://localhost:8081/api/students/:id" y el cuerpo debe envíar un JSON.

## updateByCareer
Actualiza la información de todos los documentos que coincidan con la carrera buscada. Se usa la petición PUT, la url es "http://localhost:8081/api/students/career/:career" y el cuerpo debe envíar un JSON.

## delete
Elimina un documendo de acuerdo a un id enviado. Se usa la petición DELETE y la url es "http://localhost:8081/api/students/:id"

## deleteAll
Elimina todos los documentos guardados en la base de datos. Se usa la petición DELETE y la url es "http://localhost:8081/api/students"

## average
Calcula y retorna la nota promedio de todos los estudiantes guardados en la base de datos. Se usa la petición GET y la url es "http://localhost:8081/api/students/average"
