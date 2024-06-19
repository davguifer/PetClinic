<div align="center">
    <h1 style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); z-index: 1;">Universidad de Sevilla</h1>
    <h2 style="position: absolute; top: 60%; left: 50%; transform: translate(-50%, -50%); z-index: 1;font-size: smaller;">Escuela Técnica Superior de Ingeniería Informática</h2>
</div>

<p align="center">
  <img src="https://www.us.es/sites/default/files/inline-images/US-marca-digital_0.png" alt="Logo US" width="400" height="200">   
</p>

<h1 align="center">Implementación de iTop para la Organización PSG2-2324-G3-31</h1>

<div align="right">
  <p style="font-style: italic; font-size: 1em;">Mayo de 2024</p>
</div>

<div align="center">
  <p style="font-style: italic; font-size: 1.2em;">Autores: Sonia María Rus, Julia Sánchez.</p>
</div>

**Índice**
1. [Introducción](#id1)
2. [Configuración de iTop](#id2)
3. [Dificultades encontradas](#id3)
4. [Funcionalidades Faltantes en iTop](#id4)
5. [Contribuciones de los Autores](#id5)


## _1. Introducción_ <a name="id1"></a>

En este informe se documentará el proceso de implementación de iTop, una herramienta muy útil para la gestión de servicios para la organización PSG2-2324-G3-31.

Nuestro objetivo principal ha sido configurar iTop para soportar la gestión de incidentes y solicitudes para los servicios de Petclinic. Este informe técnico proporciona un resumen detallado de nuestro trabajo,
incluyendo la configuración de varios elementos en iTop como contratos de clientes, servicios, subcategorías de servicios, Acuerdos de Nivel de Servicio (SLAs), entre otros.

Esperamos que este informe sirva como una guía útil para entender nuestro proceso de implementación y las decisiones tomadas durante este Sprint.

## _2. Configuración de iTop_ <a name="id2"></a>

<p align="center">
  <img src="https://media.discordapp.net/attachments/1204384256487329827/1237070272939561001/image.png?ex=663a4ef8&is=6638fd78&hm=84f7cde1bafc79b82855f9b656f382d758e3c29afacc26507244c47810715ebe&=&format=webp&quality=lossless&width=1440&height=647" alt="Portal" width="1000" height="400">   
</p>

Todas las peticiones de usuario e incidencias se tendrán que llevar a cabo a través del portal con el usuario disponible para cada organización cliente. La pantalla al entrar con el usuario propietario de clínica correspondiente deberá ser similar a la siguiente. En la parte superior izquierda hay un icono de perfil de usuario etiquetado con su nombre. Las áreas principales serán "Nueva solicitud", "Solicitudes en curso", "Preguntas frecuentes (FAQ)" y "Solicitudes cerradas".

<p align="center">
  <img src="https://media.discordapp.net/attachments/1204384256487329827/1237056073068838972/image.png?ex=663ce4bf&is=663b933f&hm=e4bbcadb52e9b591435f7c2de353ecad675e138b4abae1be6351bb1baf60e20d&=&format=webp&quality=lossless&width=1440&height=651" alt="New Request Portal" width="1000" height="400">   
</p>

Para dar de alta una petición o incidencia el usuario deberá acceder a través de la opción `New request`. Si los servicios están bien configurados aparecerán los elementos Service Family, Service y Service Subcategory. Servie Family es una clasificación general de los servicios ofrecidos para PetClinic en general. Service se refiere a un servicio específico dentro de una organización, en este caso Petclinic4ClinicOwner (Servicio de Atención al Cliente). Service Subcategory son las subcategorías de un servicio que permiten mayor especificación y organización. En este caso son "Incident" y "Service Request" dedicadas a los incidentes y las solicitudes de usuarios respectivamente.

<p align="center">
  <img src="https://media.discordapp.net/attachments/1204384256487329827/1237070347753488445/image.png?ex=663c494a&is=663af7ca&hm=2c44256b026284ee9bf24cc3f1bc63eac0b640e3428c203b90d1665bd7e902d3&=&format=webp&quality=lossless&width=1440&height=651" alt="Outgoing Requests Portal" width="1000" height="400">   
</p>

En la siguiente imagen se muestra la opción de “Ongoing requests” dentro del portal, mediante la que los usuarios pueden monitorizar el estado de sus solicitudes.

## _3. Dificultades encontradas_ <a name="id3"></a>
Durante la configuración de iTop se encontraron algunas dificultades:

3.1. _Definición de Elementos del CA_: Al definir los elementos del Acuerdo de Nivel de Servicio (SLA) en iTop, tuvimos una duda al definir los SLTs. Al definir en el CA los TTR y TTO por servicios, no quedó claro si habría que poner el computo total de horas por los servicio o el tiempo individual de cada servicio. Al final, decidimos poner el computo total de horas por coherencia y simplicidad.

3.2. _Creación de incidencias y solicitudes_: Al querer asginar la primera incidencia en iTop no nos aparecía el equipo ni los miembros pues no estaba creado. Para ello tuvimos que crear un equipo con los 6 miembros correspondientes y añadir en "Contacts" de todos los contratos y servicios al equipo. De esta forma:

<p align="center">
  <img src="https://cdn.discordapp.com/attachments/1204384256487329827/1237082718622187540/Imagen_de_WhatsApp_2024-05-06_a_las_17.11.07_4bd8a6aa.jpg?ex=663a5a90&is=66390910&hm=d74bde2ac0fc9f4cefcf369d9e170d9b334e9ae7846aec6789906570604d1711&" alt="Contacts Service" width="800" height="400">   
</p>

En general no ha habido problemas a la hora de definir los elementos del "SLA" ni del "Costumer Contract". Respecto al *SLA*, para cada servicio ofrecido se creó usando el nombre “PSG2-2324-G3-31-Petclinic4ClinicOwner-ZZZ”, siendo ZZZ por el plan de precios concreto en el que se utilizará (Gold o Premium). Los SLTs respectivos al plan "Gold" anteriormente creados, se asociaron a este SLA y los SLTs respectivos al plan "Platinum" a su SLA correspondiente.

Para el *Costumer Contract* creamos uno por cada usuario y plan ofrecido, asignamos la organización (cliente) correspondiente a cada usuario y el proveedor (nuestro equipo) "PSG2-23-24-G3-31". Para cada Costumer Contract le asignamos su SLA y su servicio oportuno. 
Además, creamos un "Delivery Model" que incluyese al equipo y a los contactos de todos los miembros del grupo y por último, se asoció con la organización del cliente que se seleccionó.

## _4. Funcionalidades Faltantes en iTop_ <a name="id4"></a>

Analizando la página de iTop, nos percatamos de que faltan las siguientes características: 

En primer lugar, no se muestran las ventajas que contiene cada plan ofrecido a los ClinicOwners como el número limite máximo de mascotas por owner, el límite de visitas máximo disponibles por cada mascota en el período de un mes, la disponibilidad o no del servicio de habitaciones, adopciones y consultas online, además de faltar la información de la cuota para cada uno de los planes.

Añadimos la falta de información acerca de la duración de los contratos, faltando definir las fechas de inicio y fin de los contratos.

Por otro lado, aunque sí que se detallan los tiempos estimados en base a las desviaciones de los tiempos excedidos de respuesta y resolución para cada uno de los planes y su clasificación según el tipo de incidente, iTop no consta de las compensaciones por dicho tiempo excedido que están definidas en el documento de Acuerdo a Nivel de Servicio.

## _5. Contribuciones de los Autores_ <a name="id5"></a>
A continuación se detallan las actividades realizadas por los miembros en lo que se refiere a la configuración de contratos de cliente, servicios, subcategorías de servicios, SLAs, SLTs, delivery models, entre otros.

Se han añadido los siguientes elementos software a cada uno de los PCs de los miembros de la organización PSG2-2324-G3-31: Clockify, Discord, Git,  GitHub, GoogleDrive, Java, JDK, Maven, Microsoft 365, Node.js, Spring-Boot, Visual Studio Code, Whatsapp, Windows y ZenHub.

| Miembro | Contribuciones |
| --------| ---------------|
| Jorge Gómez | Ha añadido toda la infraestructura en iTop (servicios, subcategorías de servicios, contratos de cliente, SLTs, SLAs y delivery models). Ha añadido su PC con software. Ha añadido una Service Request.|
| Carlos García | Ha añadido su PC con software. Ha añadido una Service Request. |
| David Guillén | Ha añadido su PC con software. Ha añadido una Service Request.|
| Julia Sánchez | Ha añadido su PC con software. Ha añadido una Service Request.|
| Javier Blasco | Ha añadido su PC con software. Ha añadido una Service Request.|
| Sonia Rus | Ha añadido su PC con software. Ha añadido una Incencia.|

Se muestran los datos añadidos tras exportar la información directamente desde iTop: 

**Service:**
<p align="center">
  <img src="https://cdn.discordapp.com/attachments/1204384256487329827/1237332759014543400/image.png?ex=663b436e&is=6639f1ee&hm=0a49443b2449ddd8dd8e68636d0ba443245da8e9178e19a696880c085bfe6f13&" alt="Service" width="1500" height="200">   
</p>

**Service subcategory:** 
<p align="center">
  <img src="https://cdn.discordapp.com/attachments/1204384256487329827/1237332711123980298/image.png?ex=663b4362&is=6639f1e2&hm=3036a8f1de514388f3ec730c5fe9a9945ff3881750e2f49124b60bf815e6c628&" alt="Service subcategory" width="1500" height="300">   
</p>

**Customer Contract:** 
<p align="center">
  <img src="https://cdn.discordapp.com/attachments/1204384256487329827/1237770415489679470/image.png?ex=663cdb07&is=663b8987&hm=1d3159c1461df6d61476cc27cc2939ff2038ff97bf7caafd8795f8530cbd5211&" alt="Customer Contract" width="1000" height="200">   
</p>

**SLAs:** 
<p align="center">
  <img src="https://cdn.discordapp.com/attachments/1204384256487329827/1237332442537525258/image.png?ex=663b4322&is=6639f1a2&hm=f01d4e48a6719f7eeb3d430a3bc40da7be8620ab10425feeddfc9c4014e184a6&" alt="SLAs" width="1000" height="200">   
</p>

**SLTs:**
<p align="center">
  <img src="https://cdn.discordapp.com/attachments/1204384256487329827/1237332827796934717/image.png?ex=663b437e&is=6639f1fe&hm=b15e5ab98d6f64acd3932bedd63f85b422963cefa7395c66663520234ada0298&" alt="SLTs" width="500" height="700">   
</p>

**Delivery Model:** 
<p align="center">
  <img src="https://cdn.discordapp.com/attachments/1204384256487329827/1237770464361971753/image.png?ex=663cdb13&is=663b8993&hm=e297fe97b6f4c2e43f84f04f6629a5573cd2eb0c63a89c4708f24e206be86020&" alt="Delivery Model" width="900" height="100">   
</p>




