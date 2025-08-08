# Books API

Una API REST para gestionar el prestamo y devolucion de una biblioteca de libros.

## 🤔 Preguntas para Reflexionar

### 1. ¿Qué ocurre si dos usuarios intentan prestar el mismo libro al mismo tiempo?

**Problema de concurrencia:** si dos usuarios intentar hacer la peticion al mismo tiempo podria haber un problema en la base de datos.

### 2. ¿Qué buenas prácticas REST estás aplicando en este endpoint?

- **Respuestas JSON consistentes:** Estructura uniforme con `message` y datos
- **Validación de entrada:** Conversión de tipos (string a int para IDs)
- **Manejo de errores:** Respuestas de error apropiadas con throw new Error

### 3. ¿Cómo probarías este endpoint con herramientas como Postman o cURL?

**Con Postman:**

1. **Crear una colección** llamada "books-api"
2. **Configurar variables de entorno:**
   - `baseUrl`: `http://localhost:4000`
3. **Crear requests:**
   - GET `{{baseUrl}}/books/`
   - GET `{{baseUrl}}/books/1`
   - POST `{{baseUrl}}/books/1/borrow`
   - POST `{{baseUrl}}/books/1/return`

**Con cURL (script de prueba):**
```bash
#!/bin/bash

BASE_URL="http://localhost:4000"

echo "=== Testing Books API ==="

echo "1. Getting all books..."
curl -s -X GET "$BASE_URL/books/" | jq '.'

echo -e "\n2. Getting book with ID 1..."
curl -s -X GET "$BASE_URL/books/1" | jq '.'

echo -e "\n3. Borrowing book with ID 1..."
curl -s -X POST "$BASE_URL/books/1/borrow" | jq '.'

echo -e "\n4. Returning book with ID 1..."
curl -s -X POST "$BASE_URL/books/1/return" | jq '.'

echo -e "\n=== Test completed ==="
```
