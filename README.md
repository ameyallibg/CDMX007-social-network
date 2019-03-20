
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

- ¿Cómo descubrimos las necesidades de los usuarios?
Compartimos instalaciones con otro Bootcamp y haciendo sondeo nos percatamos que entre
laboratoria e ironhack no hay comunicación directa, eso nos llevó a la hipótesis de que la
falta de comunicación interbootcamp era por que no existe una comunidad entre estos.


- ¿Cómo llegamos a la definición final del producto?
Geek it (geekealo) es una expresión que viene de Geek, un término que se utiliza para referirse a quien se fascina por la tecnología y la informática. Geek It es una red social interbootcamp.

- Imágenes, cuestionarios.

![Encuesta](http://img.fenixzone.net/i/auR5A4I.png)
![Encuesta2](http://img.fenixzone.net/i/u85jaBc.png)
  

* Se conforma por un perfil del usuario, un feed o muro público y likes.
* Principales usuarios: desarrollador@s web estudiantes de bootcamps en Ciudad México.
* Problema que resuelve para estos usuarios, falta de comunicación y comunidad entre bootcamps de la ciudad.
* Conocer más gente que se encuentre en aprendisaje intensivo y recibir recomendación o ayuda en proyectos y dudas.
* Testeo con usuarios

-----Fotos de personas usando geek it------


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

  -----pantallazo de muro----

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

### Créditos
- [Amellaly Brito](https://github.com/ameyallibg)
- [Erandi Cuervo](https://github.com/ErandiCVC13)
- [Viviana Navarro](https://github.com/Vivianavarro?tab=repositories)