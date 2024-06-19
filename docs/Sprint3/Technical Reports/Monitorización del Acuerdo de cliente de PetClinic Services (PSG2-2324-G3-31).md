<div align="center">
    <h1 style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); z-index: 1;">Universidad de Sevilla</h1>
    <h2 style="position: absolute; top: 60%; left: 50%; transform: translate(-50%, -50%); z-index: 1;font-size: smaller;">Escuela Técnica Superior de Ingeniería Informática</h2>
</div>

<p align="center">
  <img src="https://www.us.es/sites/default/files/inline-images/US-marca-digital_0.png" alt="Logo US" width="400" height="200">   
</p>

<h1 align="center">Monitorización del Acuerdo de cliente de PetClinic</h1>

<div align="right">
  <p style="font-style: italic; font-size: 1em;">Mayo de 2024</p>
</div>

<div align="center">
  <p style="font-style: italic; font-size: 1.2em;">Autores: Javier Blasco, Carlos García, Jorge Gómez, David Guillén, Sonia María Rus, Julia Sánchez.</p>
</div>

**Índice**
1. [Introducción](#id1)
2. [Informe de descripción de planes de precios](#id2)
3. [Informe de identificación del plan actual](#id3)
4. [Informe de eliminación de página "Plan"](#id4)
5. [Informe de cambio de plan para Clinic 3](#id5)
6. [Informe de extensiones basadas en APIs](#id6)


## _1. Introducción_ <a name="id1"></a>

Se ha realizado el presente informe técnico para la monitorización del Acuerdo de Cliente (CA) de PetClinic Services. Este documento proporciona un resumen detallado del trabajo realizado para evaluar el grado de cumplimiento de los Acuerdos de Nivel de Servicio (SLT) asociados a cada solicitud identificada. Además, se presenta el tiempo transcurrido entre la creación de la incidencia en GitHub y su cierre.

#### Descripción del Proceso:

El proceso de monitorización se llevó a cabo siguiendo una metodología rigurosa que implicó la revisión individual de cada solicitud por parte de los miembros del grupo. Cada miembro seleccionó al menos una solicitud para revisar y se asignó la solicitud a cada miembro. Posteriormente, el miembro asignado creó una incidencia correspondiente y procedió a implementar la solicitud, actualizando tanto en GitHub como la solicitud de usuario o incidente en iTop una vez implementada.

## _2. Informe de descripción de planes de precios_ <a name="id2"></a>

Análisis realizado para la petición asignada a Julia Sánchez Márquez.

Para resolver la petición nos pedía actualizar los planes de precio con la información acordada en el documento "Customer Agreement". Esta petición se ha asignado como una petición de usuario (user request) y no como incidente pues no interrumpe el funcionamiento del servicio que ofrece PetClinic, más bien se trata de un cambio con un riesgo relativamente bajo y no requiere un largo proceso de estudio o resolución.

Para resolverla simplemente se modificó el archivo  `frontend/src/public/plan/index.js` eliminando y añadiendo las características necesarias para mantener una coherencia con el "CA (Customer Agreement)".

Para el plan "BASIC" se hicieron los siguientes cambios:
```javascript
<li>
    <BsDot color="white" /> 2 pets
</li>
<li>
    <BsDot color="white" /> 1 visit per month and pet
</li>
<li>
    <FaTimes color="red" /> No support service
</li>                 
<li>
    <FaTimes color="red" /> Pet Hotel
</li>
<li>
    <FaTimes color="red" /> Adoptions
</li>
<li>
    <FaTimes color="red" /> Online Consultation
</li>
```

Para el plan "GOLD" se hicieron los siguientes cambios:
```javascript
<h4>25</h4>

<h5>€</h5>
</div>
<div className="option">
<ul>
  <li>
    <BsDot color="white" /> 4 pets
  </li>
  <li>
    <BsDot color="white" /> 3 visit per month and pet
  </li>
  <li>
    <BsDot color="white" /> Medium support priority
  </li>                  
  <li>
    <FaCheck color="green" /> Pet Hotel
  </li>
  <li>
    <FaCheck color="green" /> Adoptions
  </li>
  <li>
    <FaTimes color="red" /> Online Consultation
  </li>
```

Para el plan "PLATINUM" se hicieron los siguientes cambios:
```javascript
<h4>50</h4>

<h5>€</h5>
</div>
<div className="option">
<ul>
  <li>
    <BsDot color="white" /> 7 pets
  </li>
  <li>
    <BsDot color="white" /> 6 visit per month and pet
  </li>
  <li>
    <BsDot color="white" /> High support priority
  </li>                  
  <li>
    <FaCheck color="green" /> Pet Hotel
  </li>
  <li>
    <FaCheck color="green" /> Adoptions
  </li>
  <li>
    <FaCheck color="green" /> Online Consultation
  </li>
```

Para marcar la petición como resuelta se siguieron los siguientes pasos:
Nos dirijimos al apartado "All Open Requests" de la sección "HelpDesk".

<p align="center">
  <img src="https://media.discordapp.net/attachments/1204384256487329827/1237782251484221574/1.png?ex=663ce60d&is=663b948d&hm=7aa0bd5ab4daee9a6bc7e8c00c16d332b9ed63180b443a2c148f6a0cad553f7c&=&format=webp&quality=lossless&width=756&height=662" alt="Open Requests" width="400" height="400">   
</p>

Visualizamos nuestra petición: R-000743 y hacemos click en ella.

<p align="center">
  <img src="https://media.discordapp.net/attachments/1204384256487329827/1237782251798921226/2.png?ex=663ce60d&is=663b948d&hm=9af6efae3fd325eb65dd20d11a9e811227c305a9b9a1866bbdb130649b0e0b4c&=&format=webp&quality=lossless&width=1240&height=558" alt="Open Requests" width="800" height="400">   
</p>

Cuando marcamos en el icono señalado en el cuadro rojo debería aparecernos una opción titulada como "Mark as Resolved". En mi caso, como ya la había marcado resuelta, sólo me aparece la opción de cerrar la petición. Sin embargo, debría ser el usuario quien cierre la petición de la siguiente forma:

<p align="center">
  <img src="https://media.discordapp.net/attachments/1204384256487329827/1237782252230938727/3.png?ex=663ce60d&is=663b948d&hm=3f19559006b1a0a8039060ee7d6747da56fe5e4bb1f51771f2dbe6cf360b2a3c&=&format=webp&quality=lossless&width=720&height=662" alt="Open Requests" width="500" height="400">   
</p>

El usuario inicia sesión y debe dirigirse a la sección de "Outgoing Requests" para ver sus peticiones e incidentes. Una vez localizada la petición debe clickar en ella.

<p align="center">
  <img src="https://media.discordapp.net/attachments/1204384256487329827/1237782252553768990/4.png?ex=663ce60d&is=663b948d&hm=8b46f9e985efb0bad07c723c5d97327fbeed66f6613512b85ca111724a24ff20&=&format=webp&quality=lossless&width=1440&height=653" alt="Open Requests" width="800" height="400">   
</p>

Le aparecerá una pantalla similar a esta con toda la información sobre la petición y abajo un botón para cerrar la petición o reabrirla.

<p align="center">
  <img src="https://media.discordapp.net/attachments/1204384256487329827/1237782250238644234/5.png?ex=663ce60d&is=663b948d&hm=470cccdad7bf038a78b5be5afbdb0601f88629ec0b6cc5bc278514fe441eeef1&=&format=webp&quality=lossless&width=1440&height=653" alt="Open Requests" width="800" height="400">   
</p>

Para cerrarla puede poner un comentario.

<p align="center">
  <img src="https://media.discordapp.net/attachments/1204384256487329827/1237782250741956618/6.png?ex=663ce60d&is=663b948d&hm=bc95e4600578667a48e173b8592b83f9f8a9d1d763734af1089966d064d895a6&=&format=webp&quality=lossless&width=1440&height=568" alt="Open Requests" width="800" height="400">   
</p>


A continuación podemos observar como desde la perspectiva del "Service Desk" ya no aparece dicha petición:

<p align="center">
  <img src="https://media.discordapp.net/attachments/1204384256487329827/1237782251153002527/7.png?ex=663ce60d&is=663b948d&hm=1b686b246b36202cfd7aeadd345b65066a5b48c90e3c503e3f9dfb2d31dc14bf&=&format=webp&quality=lossless&width=1382&height=662" alt="Open Requests" width="800" height="400">   
</p>



## _3. Informe de identificación del plan actual_ <a name="id3"></a>

Análisis realizado para la petición asignada a David Guillén Fernández.

Para resolver la petición se nos pedía añadir en la barra superior de la aplicación el plan de precio que tiene el veterinario o el dueño de mascota correspondiente, este plan debe aparecer al lado del nombre de usuario.

Para su resolución simplemente se modificó el archivo "AppNavbar" y el archivo "OwnerPlanController". 

Se han añadido las siguientes líneas:
- `frontend/AppNavbar.js:`

```javascript
const [plan, setPlan] = useState(null);
const currentUser = tokenService.getUser();
const [message, setMessage] = useState(null);

async function setUp() {
    if (currentUser != null) {
        if (currentUser.roles[0] === "OWNER") {
            const owner = await (
                await fetch(`/api/v1/plan`, {
                    headers: {
                        Authorization: `Bearer ${jwt}`,
                    },
                })
            ).json();
            if (owner.message)
                setMessage(owner.message);
            else {
                setPlan(owner.clinic.plan);
            }
        }
        if (currentUser.roles[0] === "VET") {
            const vet = await (
                await fetch(`/api/v1/plan/vet`, {
                    headers: {
                        Authorization: `Bearer ${jwt}`,
                    },
                })
            ).json();
            if (vet.message)
                setMessage(vet.message);
            else {
                setPlan(vet.clinic.plan);
            }
        }
    }
}

useEffect(() => {
    setUp();
}, []);

// Dentro de la variable 'userLogout' se añade:

{(currentUser.roles[0] === "OWNER" || currentUser.roles[0] === "VET") &&
    <NavbarText style={{ color: "white" }} className="justify-content-end">{plan + "/  "}</NavbarText>
}
```
- `src/owner/OwnerPlanController.java:`

```java
@GetMapping(value = "vet")
public ResponseEntity<Vet> getVetPlan() {
    User user = userService.findCurrentUser();
    return new ResponseEntity<>(userService.findVetByUser(user.getId()), HttpStatus.OK);
}
```
A continuación se presenta una captura de pantalla de la petición comentada y resuelta:


<p align="center">
  <img src="https://cdn.discordapp.com/attachments/1153717186490273878/1237733367508893726/image.png?ex=663cb886&is=663b6706&hm=7ae668df036562ab85a848989b8e538962db2a0696da6ce73b6a47835d735bfe&" alt="Petición" width="800" height="400">   
</p>

## _4. Informe de eliminación de página "Plan"_ <a name="id4"></a>

Análisis realizado para la incidencia asignada a Sonia María Rus.

Para la resolución de esta incidencia se pedía eliminar la página de "Plan" de la barra de arriba de navegación dentro de la aplicación de PetClinic para todos los propietarios de mascotas, ya que se detallaba en que no tenía sentido mostrar esta pestaña a este tipo de usuarios. Comentando que solamente los dueños de las clínicas son los únicos usuarios con la capacidad de adminsitrar los planes de precios en el sistema.

Para ello, se eliminaron las siguientes líneas de código de los siguientes archivos: 

- Se eliminó la línea:
    ~~~
     <Route path="/plan" exact={true} element={<PrivateRoute><PricingPlan /></PrivateRoute>} />
    ~~~
    del archivo `frontend/src/App.js`.

  
- Se eliminaron las líneas:
    ~~~
    <NavItem>  
     <NavLink style={{ color: "white" }} tag={Link} to="/plan">Plan</NavLink>  
    </NavItem>
    ~~~
    del archivo: `frontend/src/AppNavbar.js`.

A continuación se presenta una captura de pantalla de la incidencia comentada con la siguiente imagen: 

<p align="center">
  <img src="https://cdn.discordapp.com/attachments/1161406016857063496/1237421808043556995/image.png?ex=663b965d&is=663a44dd&hm=7f655a9cb60eef70155ba4961d9fecd6e501fdfeef320308e18e4385600e3315&" alt="Incidencia" width="800" height="400">   
</p>

## _5. Informe de cambio de plan para Clinic 3_ <a name="id5"></a>

Análisis realizado para la petición asignada a Carlos García Ortiz.

Para resolver la petición se nos pedía mejorar el plan de la Clínica 3 al directamente superior, es decir, del plan BASIC al plan GOLD. Esto se ha verificado como posible ya que el propietario de dicha clínica tiene contrato con el plan GOLD.

Para su resolución simplemente se modificó el archivo que inicia la base de datos `(data.sql)`, cambiando el plan de `"BASIC"` A `"GOLD"`. El resultado de la línea modificada es el siguiente:
~~~
INSERT INTO clinics(id, name, address, telephone, plan, clinic_owner) VALUES (3, 'Clinic 3', 'Av. Reina Mercedes, 70', '955382238', 'GOLD', 2);
~~~

A continuación se presenta una captura de pantalla de la petición comentada y resuelta: 

<p align="center">
  <img src="https://media.discordapp.net/attachments/1204384256487329827/1237514344489816136/image.png?ex=663bec8b&is=663a9b0b&hm=35a126a75cae814820fab26bfab740094f98ca262d72f46ce31f3c8011d29f4e&=&format=webp&quality=lossless&width=1440&height=658" alt="Petición" width="800" height="400">   
</p>

## _6. Informe de extensiones basadas en APIs_ <a name="id6"></a>

### 6.1. API de animales
Análisis realizado para la petición de usuario asignada a Javier Blasco.

Para resolver la petición se nos pedia diseñar una interfaz de usuario que simule una llamada a una API usando datos mock. El objetivo con API elegida es mostrar diferentes razas de perro junto a una imagen de un perro de la raza correspondiente e información sobre el peso que suelen tener, color, carácter y años que suelen vivir. Hay un botón debajo del contenedor con esta información para pasar a la siguiente raza. Para lograrlo, se desarrolló una clase "Animals.js" en JavaScript que emplea useState para almacenar los datos simulados. 

Se ha añadido el siguiente código al archivo App.js:
```
<Route path="/animals" exact={true} element={<PrivateRoute><Animals /></PrivateRoute>} />
```
Además, se ha añadido el siguiente código al archivo AppNavbar.js:

```
<NavItem>
    <NavLink style={{ color: "white" }} id="animals" tag={Link} to="/animals">Dog breeds</NavLink>
</NavItem>
```

Estos dos archivos se han modificado para que en el Navbar se muestre una seccion "Dog breeds" para acceder al apartado con la información sobre las razas.

A continuación se muestra una captura de pantalla de la petición comentada: 

<p align="center">
  <img src="https://github.com/gii-is-psg2/psg2-2324-g3-31/assets/73231437/fed41ba5-8a94-4102-b903-b3a0b398bc83"alt="Petición de usuario" width="800" height="400">   
</p>

### 6.2. API del tiempo

Análisis realizado para la petición de usuario asignada a Jorge Gómez.

Para resolver la petición se nos pedia diseñar una interfaz de usuario que simule una llamada a una API usando datos mock. Para ello se ha creado una clase en JavaScript que usa un useState para guardar los datos de prueba y tambien para seleccionar el día actual que muestra por pantalla los datos climatológicos del dia actual y un botón para pasar al dia siguiente.

También se ha añadido el siguiente código al archivo App.js:
```
<Route path="/weather" exact={true} element={<PrivateRoute><Weather /></PrivateRoute>} />
```
Además de este código en el archivo AppNavbar.js:

```
<NavItem>
    <NavLink style={{ color: "white" }} id="weather" tag={Link} to="/weather">Weather</NavLink>
</NavItem>
```

Estos dos archivos se han modificado para que en el Navbar se muestre una seccion Weather para acceder al pronóstico del tiempo.

A continuación se presenta una captura de pantalla de la petición comentada con la siguiente imagen: 

<p align="center">
  <img src="https://cdn.discordapp.com/attachments/1237466609912643669/1237466642972151980/image.png?ex=663bc01e&is=663a6e9e&hm=69c7e3918f9eb7f2f78f64df38edbe69006c0f64aadcdc2e8d594da94660eb7b&"alt="Petición de usuario" width="800" height="400">   
</p>
