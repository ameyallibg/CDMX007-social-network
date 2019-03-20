
## Introducción

**Geek** It es una red social dirigida a estudiantes de bootcamps en la Ciudad de México, al 
realizar una encuesta analizamos que los integrantes de bootcamps en desarrollo web a pesar de contar con grupos especificos para compartir información o eventos en otras redes sociales, no contaban con un canal local y específico, relacionado con gente que estuviera aprendiendo a su mismo ritmo pero en diferentes bootcamps.

* Bedu
* Ironhack 
* Hubcamp
* Laboratoria
* Le wagong
* Muktek
* Tec de monterrey

## Puntos esenciales de Geek It

Comunicación en tiempo real.

Relación - Gustos o intereses 
 
Contenido de interés - Documentos - Eventos - Recomendación de Trabajo o Freelance.


## Objetivos

El objetivo principal de Geek It es hacer comunidad para nuevos desarrolladores, compartir eventos en la ciudad, sugerencias, compartir material de interés, conocer más personas con perfiles similares, mandar recomendaciones de empleo, etc.

## Consideraciones generales

La lógica del proyecto esta implementado completamente:

* JavaScript (ES6)
* HTML
* CSS
* Firebase

### Definición del producto

¿Cómo descubrimos las necesidades de los usuarios?

¿Cómo llegamos a la definición final del producto?

Imágenes, cuestionarios 
 

* Cuáles son los elementos básicos que tiene una red social
perfil del usuario, un feed o muro público, likes
* Quiénes son los principales usuarios de producto
Desarrollador@s Web que sean estudiantes de bootcamps Ciudad México
* Cómo descubriste las necesidades de los usuarios
Nos percatamos que no habían muchos Bootcamps en la Ciudad y que de esos pocos no había un canal de comunicación directa.
* Qué problema resuelve el producto para estos usuarios
Falta de comunicación y comunidad entre bootcamps de la ciudad
* Cuáles son los objetivos de estos usuarios en relación con el producto
Conocer más gente que se encuentre en aprendisaje intensivo y recibir recomendación o ayuda en proyectos y dudas.
* Cuáles son las principales funcionalidades del producto y cuál es su prioridad
Crear comunidad en área metropolitana.
* Cómo verificaste que el producto les está resolviendo sus problemas
(Falta testeo de prototipo)
* Cómo te asegurarás que estos usuarios usen este producto
(Falta testeo de alta fidelidad)


### Historias de usuario

* Yo como usuario quiero poder logearme por fB o Google
* Yo como usuario ver la información general en un muro de incio
* Yo como usuario quiero publicar un posteo
* Yo como usuario quiero editar o eliminar mi post
* Yo como usuario quiero controlar la privacidad de mi publicación (publica-privada)
* Yo como usuario quiero interactuar con estudiantes de otros bootcamps (otros usuarios)
* Yo como usuario quiero poner un like a una publicación 
* Yo como usuario quiero ver el conteo de likes de una publicación
* Yo como usuario quiero ver una confirmación antes de eliminar un post
* Yo como usuario quiero ver mi información (Acerca de mí)

### Diseño de la Interfaz de Usuario (prototipo de baja fidelidad)

Construimos un prototipo de baja fidelidad en **MARVEL** [click aquí](https://marvelapp.com/b3j3ci1/screen/54084027)

![Prototipo](http://img.fenixzone.net/i/AP3y0qg.png)

### Responsive
Mobile First
### Pruebas unitarias (unit tests)

Los tests unitarios cubren el 100% de _statements_, _functions_,
_lines_, y _branches_.

### Implementación de la Interfaz de Usuario (UI y comportamiento de Interfaz de Usuario)

El producto a desarrollado sigue los lineamientos propuestos en el diseño de la interfaz de usuario.

La interfaz debe permitir lo siguiente:

#### Creación de cuenta de usuario e inicio de sesión

* Login con Firebase:
  - Autenticación con Facebook, Google, GitHub y/o Email.

* Validaciones:
  - Sin usuarios repetidos.
  - La cuenta de usuario es un correo electrónico válido.
  - Contraseña debe secreta.

* Comportamiento:
  - Al enviarse un formulario de registro o inicio de sesión, debe validarse.
  - En caso haya errores, el sistema muestra mensajes de error para
    ayudar al usuario a corregirlos.
  - La aplicación sólo permite el acceso a usuarios con cuentas válidas.
  - La aplicación, verifica si el usuario está logueado antes de mostrarle el contenido privado.

* Perspectiva de interfaz:

  ![Login](http://img.fenixzone.net/i/JCe6ZIE.png)

#### Muro/timeline de la red social

* Validaciones:
  - Al apretar el botón de publicar, valida que exista contenido en el input.

* Comportamiento:
  - Publicar un post.
  - Likea una publicación.
  - Conteo de los likes.
  - Elimina posteos específicos.
  - Filtra posteos sólo para mis amigos y para todo público.
  - Pide confirmación antes de eliminar un post.
  - Al editar, cambia el texto por un input que permite editar el texto y cambiar el link por guardar.
  - Al guardar cambia de vuelta a un texto normal pero con la información editada.

* Perspectiva de interfaz:

  ![Muro](http://img.fenixzone.net/i/AP3y0qg.png)

#### Otras consideraciones

Contruida como Single Page Applications (SPA).

Personaliza estas guías con los colores y/o tipografías que creas convenientes.
Recuerda que al hacer estas adaptaciones deberás seguir los fundamentos de
_visual design_ como contraste, alineación, jerarquía, entre otros.

### Consideraciones UX

* Formularios, aquí.
* Hacer un  prototipo de baja fidelidad, aquí.
* Asegurarte de que la implementación en código siga los lineamientos del diseño.
* Sesiones de testing con el producto en HTML, ver.

### Tech

| Habilidad |  |
|-----------|----------------|
| **JavaScript** | |
| Estilo | 
| Nomenclatura/semántica | 
| Funciones/modularidad | 
| Estructuras de datos | 
| Tests | 
| **HTML** | |
| Validación | 
| Estilo | 
| Semántica | 
| SEO | N/A
| **CSS** | |
| DRY | 
| Responsive | 
| **SCM** | |
| Git | 
| GitHub | 
| **CS** | 
| Lógica | 
| Arquitectura | 

### UX

| Habilidad | |
|-----------|----------------|
| User Centricity | 
| Visual Desing | 

### Habilidades Blandas

| Habilidad | |
|-----------|----------------|
| Planificación y organización | 
| Autoaprendizaje | 
| Solución de Problemas | 
| Dar y recibir feedback | 
| Adaptabilidad | 
| Trabajo en equipo (trabajo colaborativo y responsabilidad) | 
| Comunicación eficaz | 
| Presentaciones | 

***
### Conclusiones