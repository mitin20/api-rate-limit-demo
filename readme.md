# API Rate Limit Demo 🛡️

Este proyecto demuestra cómo proteger una API en Node.js usando **rate limiting** y cómo simular un ataque masivo con **Artillery**. Todo está configurado para ejecutarse en un entorno controlado con **Docker**.

---

## 🚀 ¿Qué Aprenderás?

- Cómo implementar **rate limiting** en una API de Node.js usando `express-rate-limit`.
- Cómo simular un ataque masivo con **Artillery** para probar la resistencia de tu API.
- Cómo usar **Docker** para crear un entorno reproducible y seguro.

---

## 🛠️ Requisitos

- [Node.js](https://nodejs.org/) (v18 o superior)
- [Docker](https://www.docker.com/) (v20 o superior)
- [Artillery](https://artillery.io/) (opcional, para pruebas de estrés)

---

## 🧑‍💻 Instrucciones

### 1. Clona el Repositorio

```bash
git clone https://github.com/jaimeirazabal1/api-rate-limit-demo.git
cd api-rate-limit-demo
```

### 2. Construye y Levanta el Contenedor Docker

```bash
docker-compose up --build
```

Esto construirá la imagen de Docker y levantará la API en `http://localhost:3000`.

### 3. Prueba la API

- **Ruta sin protección**:  
  ```bash
  curl http://localhost:3000/api/insegura
  ```
  Respuesta: `{"message":"¡Soy una API sin defensas! 🚨"}`

- **Ruta protegida**:  
  ```bash
  curl http://localhost:3000/api/protegida
  ```
  Respuesta: `{"message":"¡Estoy blindada contra ataques! 🛡️"}`

### 4. Simula un Ataque con Artillery

Instala Artillery (si no lo tienes):

```bash
npm install -g artillery
```

Ejecuta la prueba de estrés:

```bash
artillery run artillery.yml
```

Verás cómo la ruta protegida bloquea peticiones después de 150 requests por minuto.

---

## 📂 Estructura del Proyecto

```
api-rate-limit-demo/
├── server.js          # API de Node.js con rate limiting
├── Dockerfile         # Configuración de Docker
├── docker-compose.yml # Orquestación de contenedores
├── artillery.yml      # Prueba de estrés con Artillery
└── package.json       # Dependencias del proyecto
```

---

## 📊 Resultados Esperados

- **Ruta Insegura**: El servidor colapsará bajo un ataque masivo.
- **Ruta Protegida**: Bloqueará peticiones después de 150 requests por minuto, manteniendo el servidor estable.

---

## 📚 Recursos Adicionales

- [Documentación de express-rate-limit](https://www.npmjs.com/package/express-rate-limit)
- [Guía de Artillery](https://artillery.io/docs/)
- [Documentación de Docker](https://docs.docker.com/)

---

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Si encuentras un error o tienes una mejora, abre un **issue** o envía un **pull request**.

---

## 📄 Licencia

Este proyecto está bajo la licencia [MIT](LICENSE).

---

¡Diviértete probando y aprendiendo! 🚀

