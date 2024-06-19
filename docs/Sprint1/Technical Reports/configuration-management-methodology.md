# Metodología para la Gestión de la Configuración
**Índice**   
1. [Introducción](#id1)
2. [Estándares de Código](#id2)

   2.1. [Indentación](#id3)
   
   2.2. [Nomenclatura de variables](#id4)
   
   2.3. [Nomenclatura de clases](#id5)
   
   2.4. [Nomenclatura de métodos](#id6)
   
   2.5. [Longitud de línea](#id7)
   
   2.6. [Comentarios](#id8)
   
   2.7. [Espacios en blanco](#id9)
   
   2.8. [Definición de variables](#id10)
   
3. [Política de Mensajes de Commits](#id11)
   
   3.1. [Tipo](#id12)
   
   3.2. [Ámbito](#id13)
   
   3.3. [Descripción](#id14)
   
   3.4. [Cuerpo](#id15)
   
   3.5. [Nota al pie](#id16)
   
4. [Estructura de repositorios y ramas por defecto](#id17)

   4.1. [Estructura de repositorios](#id18)
   
   4.2. [Ramas por defecto](#id19)
   
5. [Estrategia de ramificación](#id20)
   
   5.1. [Feature branches](#id21)
   
   5.2. [Release branches](#id22)
   
   5.3. [Correción de errores](#id23)
   
6. [Política de versionado](#id24)
7. [Definición de hecho](#id25)
8. [Gestión de documentos](#id26)
9. [Objetivos y alcance del CMDB](#id27)

   9.1. [Estructura de la CMDB](#id28)
   
11. [Bibliografía](#id29)

## _Introducción_ <a name="id1"></a>
La gestión de la configuración es un componente muy importante en el desarrollo de cualquier software, esto abarca procesos, herramientas y prácticas destinadas a gestionar los cambios que se produzcan en el software a lo largo del ciclo de vida del proyecto. Este informe pretende proporcionar una descripción detallada de una metodología de gestión que puede ser aplicada a posteriores proyectos de desarrollo software. Este informe servirá como guía práctica para el equipo de desarrollo involucrados en el desarrollo de este proyecto. 

## _Estándares de Código_ <a name="id2"></a>
Para garantizar la coherencia en el desarrollo de PetClinic, un proyecto que utiliza varios lenguajes de programación como Java, JavaScript y CSS, es crucial establecer estándares de código uniformes. Para ello se seleccionará las convenciones más importantes de cada lenguaje.

### Indentación <a name="id3"></a>
- Utilizar **espacios** en lugar de tabulaciones.
- Indentar con **2 espacios**  en Java, JavaScript y CSS para cada nuevo bloque o construcción similar a un bloque. En caso de cada línea después de la primera (_línea de continuación_) se debe dejar **4 espacios** al menos. En el caso de que haya varias líneas de continuación, puede variar más allá de 4 como deseados.
De esta forma mantenemos la estructura ya definida por la plantilla proporcionada.

### Nomenclatura de variables <a name="id4"></a>
- Seguir el estilo **camelCase** para nombres de variables en todos los lenguajes.
- Mantener los nombres de las variables descriptivos y significativos.
- No excederse con la longitud de los nombres de las variables.

### Nomenclatura de clases <a name="id5"></a>
- Empelar **UpperCamelCase** para el nombre de las clases en Java.
- Utilizar **lowerCamelCase** para los nombres de las clases en JavaScript y CSS.

### Nomenclatura de métodos <a name="id6"></a>
- Seguir el estilo **camelCase** para los métodos en todos los lenguajes.

### Longitud de línea <a name="id7"></a>
- Límite de **80 caracteres por línea** para mantener la legibilidad y evitar el desplazamiento horizontal.

### Comentarios <a name="id8"></a>
- Usar **//** para comentarios de una línea.
- Empelear **/.../** para comentarios de varias líneas.
- En CSS, usar **/../** tanto para comentarios de una línea como comentarios de varias líneas.

### Espacios en blanco <a name="id9"></a>
- Dejar **espacios alrededor de los operadores** para mejorar la legibilidad.
- Mantener una línea en blanco entre bloques de código y funciones para mejorar la claridad del código.

### Definición de variables <a name="id10"></a>
1. Variables Globales: Se definen fuera de cualquier función y están disponibles en todo el script. Se definen al principio del archivo o módulo.
2. Variables Locales: Se definen dentro de una función y solo están disponibles dentro de ese ámbito de función.
3. Variables de Bloque: Se definen dentro de un bloque de código delimitado por {} (por ejemplo, un bucle for, una declaración if) al principio si es posible.

En CSS, las variables se definen en el bloque `:root` o en cualquier otro bloque adecuado. Se definen al principio del archivo o en un archivo de variables separado para facilitar su reutilización.

Esto sería un resumen de un ejemplo básico para `Java`:
```
package com.empresa.petclinic;

public class Veterinario {
    private String nombre;
    private int edad;

    public Veterinario(String nombre, int edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    public String getNombre() {
        return this.nombre;
    }

    // Método para tratar a una mascota
    public void tratarMascota(String nombreMascota) {
        // Implementación del método
    }
}
```
Ejemplo para `JavaScript`:
```
// Ejemplo de clase en JavaScript
class Mascota {
    constructor(nombre, tipo) {
        this.nombre = nombre;
        this.tipo = tipo;
    }

    // Método para alimentar a la mascota
    alimentar() {
        // Implementación del método
    }
}
```
## _Política de Mensajes de Commits_ <a name="id11"></a>
Usaremos `Conventional Commits`, es una convención en el formato de los mensajes de los commits. Esta convención define una serie de reglas que sirven para dar significado a los mensajes de los commits haciéndolos legibles para máquinas y humanos. Es muy útil a la hora de definir el versionado del proyecto también. Además, haremos los commits en inglés.
Conventional Commits especifica que el mensaje de commit debe ser estructurado de la siguiente manera:
```
<tipo>(ámbito opcional): <descripción>
<LINEA_EN_BLANCO>
[cuerpo opcional]
<LINEA_EN_BLANCO>
[nota(s) al pie opcional(es)]
```
### Tipo <a name="id12"></a>
El primer elemento es el tipo de commit refiriéndose al contenido del commit. Basados een la convención establecida estos son:
- **feat**: cuando se añade una nueva funcionalidad.
- **fix**: cuando se arregla un error.
- **chore**: tareas rutinarias que no sean específicas de una feature o un error como por ejemplo añadir contenido al fichero .gitignore o instalar una dependencia.
- **test**: si añadimos o arreglamos tests.
- **docs**: cuando solo se modifica documentación.
- **build**: cuando el cambio afecta al compilado del proyecto.
- **ci**: el cambio afecta a ficheros de configuración y scripts relacionados con la integración continua.
- **style**: cambios de legibilidad o formateo de código que no afecta a funcionalidad.
- **refactor**: cambio de código que no corrige errores ni añade funcionalidad, pero mejora el código.
- **perf**: usado para mejoras de rendimiento.
- **revert**: si el commit revierte un commit anterior. Debería indicarse el hash del commit que se revierte.

### Ámbito <a name="id13"></a>
El campo ámbito es opcional y sirve para dar información contextual como por ejemplo indicar el nombre de la feature a la que afecta el commit. En nuestro caso indicaremos el #id de la issue asociada al commit. De esta forma, se puede acceder directamente a la issue del commit dandóle click en la id.

### Descripción <a name="id14"></a>
Breve descripción del cambio cumpliendo lo siguiente:
- Usa imperativos, en tiempo presente: “añade” mejor que “añadido” o “añadidos”.
- La primera letra siempre irá en minúscula.
- No escribir un punto al final.

### Cuerpo <a name="id15"></a>
Es opcional y debería añadir aportar más información que la descripción. Debería usar el mismo tono imperativo que esta.

### Nota al pie <a name="id16"></a>
Es opcional. Siempre se utiliza para indicar cambios que rompan la compatibilidad de la versión actual (Breaking Changes).
Si queremos poner en el pie del commit un Breaking Change, el formato deberá ser el siguiente: `BREAKING CHANGE: <description>`


## _Estructura de repositorios y ramas por defecto_ <a name="id17"></a>
### Estructura de repositorios <a name="id18"></a>
De la estructura de este repositorio destacaremos los siguientes directorios:
- **`src/main/java`**: Contiene el código fuente principal de la aplicación.
  - **`owner`**, **`pet`**, **`user`**, **`vet`**, **`visit`**: Estas son las carpeetas que representan diferentes entidades. Cada una tiene su propia clase **`Repository`** (proporcionan los métodos para interactuar con la base de datos), **`Controller`**(manejan las solicitudes HTTP relacionadas con las entidades), **`Service`** (contiene la lógica relacionada con las entidades), la propia entidad con sus propiedades específicas nombradas con el mismo nombre que el directorio, entre otros.
  - **`src/main/resources`**: Contiene archivos de recursos HTML.
  - **`PetClinicApplication`**: Clase principal que contiene el método main para arrancar la aplicación Spring Boot.
- **`src/test/java`**: Contiene pruebas unitarias y de integración.
- **`frontend/node_modules`**: Contiene dependencias del frontend.
- **`frontend/src`**: Contiene todos los archivos necesarios del código fuente para el frontend de la aplicación dividido por módulos.
- **`docs`**: Contiene todos los archivos `.md` que documentan el desarrollo de PetClinic.

### Ramas por defecto <a name="id19"></a>
Para la estructura de ramas usaremos el modelo de creación de ramas `Git Flow`. Para comenzar tendremos la rama `main`, esta rama contendrá el código fuente estable y se usará para generar lanzamientos de producción.

Por otro lado tendremos la rama `develop` donde se integran las características completadas y se prepara el código para futuros lanzamientos. 
Por cada tarea se creará una rama `feature` sobre `develop` donde cada integrante trabajará de forma individual.

Otra rama por defecto será la rama `release`. Cuando `develop` adquiere suficientes funciones para una publicación se bifurca hacia esta rama a partir de `develop`.

Por último tendremos también una rama llamada `hotfix`, esta rama sirve para reparar rápidamente las publicaciones de producción. A diferencia de la rama `release`, `hotfix` se basa en la rama main y no en la develop.

## _Estrategia de ramificación_ <a name="id20"></a>

### Feature branches <a name="id21"></a>
Para añadir nuevas características o modificar previas se usarán unas ramas especiales conocidas como `feature branches`.
Estas ramas se crearán a partir de `develop` con el nombre `feature/#code`, donde _code_ es el código de la issue asociada a la tarea de la nueva característica o modificación.
Cuando la tarea esté completa se solicitará un pull request para incorporar dichos cambios a `develop` y la tarea entrará el estado `In review`.
Cuando el trabajo realizado supere la revisión verificando la definición de hecho, el desarrollador que hizo la tarea aceptará el pull request haciendo merge a la rama `develop`.

### Release branches <a name="id22"></a>
Cuando se vaya a realizar una release se creará a partir de `develop` una rama llamada `release/version` donde _version_ es la versión de la nueva release, a esta rama se le irán incorporando las nuevas características que incluirá la release. Además se usará para cambios de última hora o arreglar bugs menores.
Finalmente, para lanzar una release se hará un pull request desde su rama a `main`, dicho pull request sólo será aceptado para hacer el merge cuando todos los desarrolladores le hayan dado el visto bueno.

### Corrección de errores <a name="id23"></a>
Cuando un bug sea detectado en una rama release, este será solucionado mediante un commit en dicha rama. Posteriormente estos arreglos deberán ser revisados y llevados a `develop` mediante un merge a la hora de lanzar la release.
Si se detecta un bug en una release ya lanzada, deberá ser solucionado en una rama creada a partir de `main` llamada `hotfix/version` donde _version_ es la nueva versión tras el arreglo. Una vez arreglado el bug se hará merge de este a tanto `main` como `develop`.

## _Política de versionado_ <a name="id24"></a>
A la hora de hacer una release se le deberá de asignar un versionado `(MAJOR.MINOR.PATCH)` en función de las implementaciones llevadas a cabo.
- MAYOR: Aumenta cuando se rompe la compatibilidad de versiones anteriores.
- MINOR: Aumenta cuando se añadie funcionalidad y esta es compatible en la version MAJOR actual.
- PATCH: Aumenta cuando se arreglan errores de la versión MAJOR.MINOR actual, cuando se hacen hotfixes.

## _Definición de hecho_ <a name="id25"></a>
Para entender de una forma clara cuándo una tarea ha sido completada verdaderamente, deben cumplirse los siguientes criterios:
- Cumplimiento de los requisitos: deben de haberse realizado todos los requisitos a los que corresponda esa tarea, especificados en el Product Backlog. Y que cada aspecto haya sido abordado e implementado de manera adecuada. 
- Revisión por parte de los compañeros: es preciso que la tarea haya sido revisada por al menos tres de los seis miembros del equipo, quienes han evaluado el trabajo realizado en busca de errores o posibles mejoras en caso de haberlas. En la tareas en las que se precise realizar una pull request, los compañeros que la revisen, tendrán que comentar en dicha pull request su opinión sobre el trabajo realizado.
- Aceptación por parte de los revisores: tras la revisión, los compañeros deberán aceptar la tarea como completa y satisfactoria, significando que la tarea cumple ciertamente con los requisitos establecidos. Por tanto, se podrá aceptar la pull request y así realizar un merge con la rama `develop`.
  
Solo cuando una tarea cumple con todos estos criterios se considera “hecha” para el equipo, y por tanto, puede colocarse en la columna `Done`.

## _Gestión de documentos_ <a name="id26"></a>
Para gestionar los documentos que se han ido generando a lo largo del proyecto, como el technical report, el meeting report y los standup reports, los hemos almacenado en una carpeta que hemos creado llamada `docs` mediante la siguiente estructura de subcarpetas:
- **`docs/SprintN`**: Contiene todos los documentos creados durante el Sprint N.
    - **`docs/SprintN/Daily Stand-Ups`**: Contiene todos los informes de daily stand-ups de dicho Sprint N.
    - **`docs/SprintN/Meetings`**: Contiene todos los informes de sprint meetings de dicho Sprint N.
    - **`docs/SprintN/Technical Reports`**: Contiene todos los informes técnicos de dicho Sprint N.

Según las estrategias mencionadas anteriormente, la gestión de estos documentos seguirá los estándares establecidos. 
- Todo el código de los documentos será de tipo Markdown.
- Para la realización de los commits y su política de mensajes se seguirá la relativa a los documentos. 
- Para que un documento se considere completamente hecho, tendrá que cumplir con la definición de hecho acordada por el equipo.

Además, hemos seguido una nomenclatura específica para aquellos documentos relacionados con la metodología Scrum (Sprint Planning, Sprint Meeting, Daily Stand-Ups, Sprint Review y Sprint Retrospective). 
Estos archivos se denominarán siguiendo esta regla: `año-mes-dia-nombreArchivo.md`. Por ejemplo, para el Sprint Planning sería: ```2024-02-13-planning.md```.
Para los informes de los meetings de un mismo sprint se les asignará también un número correspondiente al orden fijado en clockify. Por ejemplo: ```2024-02-13-meeting1.md```.

Por último, para crear o actualizar un documento del repositorio se realizará directamente un commit a la rama develop, en caso de que haya una release en preparación con su rama ya creada, se hará el commit a ésta en su lugar.

## _Objetivo y alcance del CMDB_ <a name="id27"></a>
El objetivo principal del CMDB es proporcionar una base de datos centralizada y confiable que contiene información detallada sobre la infraestructura, como hardware y software, aplicaciones, y sus configuraciones asociadas, de una organización. Con ello, facilita la ejecución de procesos internos dentro de la organización relacionados con la gestión de la configuración, el control de cambios, la gestión de incidentes, la gestión de riesgos, la implementación de servicios, entre otros. Además, ayuda en la realización de auditorías internas y externas, permitiendo verificar el cumplimiento de los estándares y regulaciones aplicables.

### Estructura del CMDB <a name="id28"></a>
|PC | Software relacionado |
|------------|-----------------------|
|Laptop_cargarort3|Clockify Laptop_cargarort3,Discord Laptop_cargarort3, Git Laptop_cargarort3, GitHub Laptop_cargarort3, Google Drive Laptop_cargarort3, Java Laptop_cargarort3, JDK Laptop_cargarort3, Maven Laptop_cargarort3, McAfee Antivirus Laptop_cargarort3, Microsoft 365 Laptop_cargarort3, Node.js Laptop_cargarort3,Opera GX Laptop_cargarort3,  Spring-Boot Laptop_cargarort3, Visual Studio Code Laptop_cargarort3, Whatsapp Laptop_cargarort3, Windows Laptop_cargarort3, ZenHub Laptop_cargarort3, Auriculares, Ratón USB Inalámbrico|
|Laptop_davguifer|Clockify Laptop_davguifer, Discord Laptop_davguifer, Git Laptop_davguifer, Github Laptop_davguifer, Google Chrome Laptop_davguifer, Google Drive Laptop_davguifer, Java Laptop_davguifer, JDK Laptop_davguifer, Maven Laptop_davguifer, Microsoft 365 Laptop_davguifer, Node js Laptop_davguifer, Spring-Boot Laptop_davguifer, Visual Studio Code Laptop_davguifer, Whatsapp Laptop_davguifer, Windows Laptop_davguifer, ZenHub Laptop_davguifer|
|Laptop_jorgomde|Clockify Laptop_jorgomde, Discord Laptop_jorgomde, Git Laptop_jorgomde, GitHub Laptop_jorgomde, Google Chrome Laptop_jorgomde, Google Drive Laptop_jorgomde, Java Laptop_jorgomde, JDK Laptop_jorgomde, Maven Laptop_jorgomde, McAfee Antivirus Laptop_jorgomde, Microsoft 365 Laptop_jorgomde, Node.js Laptop_jorgomde, Spring-Boot Laptop_jorgomde, Visual Studio Code Laptop_jorgomde, Whatsapp Laptop_jorgomde	PC , Windows Laptop_jorgomde, ZenHub Laptop_jorgomde, Ratón USB Inalámbrico|
|Laptop_julsanmar2|AVG Antivirus Free Laptop_julsanmar2, Clockify Laptop_julsanmar2, Discord Laptop_julsanmar2, Git Laptop_julsanmar2, GitHub Desktop Laptop_julsanmar2, Google Drive Laptop_julsanmar2, Java Laptop_julsanmar2, JDK Laptop_julsanmar2, Maven Laptop_julsanmar2, Microsoft 365 Laptop_julsanmar2, Mozilla Firefox Laptop_julsanmar2, Node.js Laptop_julsanmar2, Spring-Boot Laptop_julsanmar2, Visual Studio Code Laptop_julsanmar2, Whatsapp Laptop_julsanmar2, Windows Laptop_julsanmar2, ZenHub Laptop_julsanmar2|
|Laptop_sonrusmor|Clockify Laptop_sonrusmor, Discord Laptop_sonrusmor, Git Laptop_sonrusmor, Github Laptop_sonrusmor, Google Drive Laptop_sonrusmor, Google Laptop_sonrusmor, Java Laptop_sonrusmor, JDK Laptop_sonrusmor, Maven Laptop_sonrusmor, Microsoft 365 Laptop_sonrusmor, Node js Laptop_sonrusmor, Spring-Boot Laptop_sonrusmor, Visual Studio Code Laptop_sonrusmor, Whatsapp Laptop_sonrusmor, Windows Laptop_sonrusmor, ZenHub Laptop_sonrusmor, Wireless_mouse_sonrusmor|
|PC_javblamor1|Clockify PC_javblamor1, Discord PC_javblamor1, Git PC_javblamor1, Github PC_javblamor1, Google Drive PC_javblamor1, Java PC_javblamor1, JDK PC_javblamor1, Maven PC_javblamor1, Microsoft 365 PC_javblamor1, Node js PC_javblamor1, Spring-Boot PC_javblamor1, Visual Studio Code PC_javblamor1, Whatsapp PC_javblamor1, Windows PC_javblamor1, ZenHub PC_javblamor1,Keyboard_javblamor1, Monitor_javblamor1, Mouse_javblamor1|


## _Bibliografía_ <a name="id29"></a>
### JavaScript
- Documentación de MDN (Mozilla Developer Network):
  Mozilla. (s.f.). JavaScript. MDN Web Docs. Recogido de [aquí](https://developer.mozilla.org/en-US/docs/Web/JavaScript).
### Java
- Especificaciones de Java SE:
  Oracle Corporation. (s.f). Java SE Specifications. Recogido de [aquí](https://www.oracle.com/java/technologies/javase-downloads.html).
### CSS
- Guía de MDN para CSS:
Mozilla. (s.f.). CSS. MDN Web Docs. Recogido de [aquí](https://developer.mozilla.org/en-US/docs/Web/CSS).





