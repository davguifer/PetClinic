# Métricas de Proceso Ágil y Recursos
**Índice**   
1. [Introducción](#id1)
2. [Métricas de Proceso Ágil](#id2)

   2.1. [Sprint 1](#id3)

    2.1.1 [Gráfico Burn Down](#id4)
   
    2.1.2 [Gráfico "Lead Time"](#id5)
   
    2.1.3. [Gráfico "Cycle Time"](#id6)

    2.1.4. [Puntos de historia totales alcanzados](#id7)

    2.1.5. [Porcentaje de los puntos de historia alcanzados](#id8)

   2.2. [Sprint 2](#id9)

    2.1.1 [Gráfico Burn Down](#id10)

    2.1.2 [Gráfico "Lead Time"](#id11)
   
    2.1.3. [Gráfico "Cycle Time"](#id12)

    2.1.4. [Puntos de historia totales alcanzados](#id13)

    2.1.5. [Porcentaje de los puntos de historia alcanzados](#id14)

    2.1.6. [Análisis cualitativo del calendario Niko-Niko](#id15)
   
## _Introducción_ <a name="id1"></a>
Este documento tiene como objetivo detallar las diversas métricas que se ha usado durante el desarrollo para proporcionar una comprensión sólida de la importancia de usar métricas de evaluación en la gestión de de este proyecto.

A lo largo de este documento se examinarán distintas métricas como gráficos _Burn Down, Control Charts_, entre otros. Además, se explorará las herramientas de las que se dispone para la medición y el seguimiento de estas métricas.

Como resultado de aplicar dichas métricas, se espera obtener una visión que permita a los miembros del equipo tomar decisiones justificadas y mejorar el proceso de desarrollo así como optimizar el rendimiento y ofrecer un producto de buena calidad.

## _Métricas de Proceso Ágil_ <a name="id2"></a>

### Sprint 1 <a name="id3"></a>
#### Gráfico Burn Down <a name="id4"></a>
El gráfico Burn Down nos da una información acerca de cuánto nos queda pendiente para completar el proyecto. 
La línea recta en color gris clarto representa la velocidad a la cual deberíamos ir completando las issues para alcanzar el sprint. Esta línea es el comportamiento ideal mientras que la línea de color azul representa la realidad.
- Estar por debajo de la recta o alineado a la recta significa que estamos cumpliendo los objetivos adecuadamente,
- Estar por encima de la recta significa que vamos retrasados para alcanzar los objetivos.

![burn-down-s1](https://media.discordapp.net/attachments/1204384256487329827/1214634216160235670/burn-down.png?ex=661ebd43&is=660c4843&hm=c48e4151fb48d3b8ca043b704ae844af8307783367cc6398f83a499beb843fdb&=&format=webp&quality=lossless&width=1440&height=645)

                                            Figura 1. Gráfico Burn-Down Sprint 1
En esta imagen tenemos una representación del progreso del Sprint 1. Gracias a la herramienta de ZenHub, podemos adquirir estos gráficos de forma sencilla tan sólo estableciendo la fecha de inicio y la fecha de fin del sprint.
Se observa que el sprint comenzó con un inicio tardío, ya que los primeros commits se realizaron varios días después del inicio del sprint. A medida que avanzaba el tiempo, la frecuencia de los commits aumentó indicando mayor actividad en el equipo. El descenso continuó hasta el día 28, donde se realizó un último commit con todas las tareas ya completadas.

De estos datos podemos concluir que el Sprint 1 tuvo un inicio problemático, con una planificación o una ejecución poco óptima aunque se alcanzaran los objetivos finales a tiempo.

#### Gráfico "Lead Time" <a name="id5"></a>

El _Lead Time_ hace referencia al tiempo que transcurre entre la realización de un pedido
hasta que se entrega. El modo para calcular el _Lead Time_ es muy simple,
solo debemos restar la fecha en la que se ha realizado el pedido y la de entrega.
El resultado va a mostrar el tiempo que se tarda en cumplir con el pedido. En otras palabras, es el tiempo total que la parte interesada tiene que esperar para recibir una función después de haberla solicitado.
Para simplificar, ese plazo se mide en días de calendario.

El proceso final debe capturar el momento en que se "completa" el trabajo.
En este caso, el rango será ```To Do```→```Done```.

![lead-time-1](https://cdn.discordapp.com/attachments/1153717441139064854/1225174291302318141/313463402-4c5cfcc8-7a4e-4850-93b4-b707a51921f8.png?ex=66202b79&is=660db679&hm=f9a5f1afc2d73606ab0b47f3f53e7fab2298daf15d964d56580a22ea363266ab&)

                                        Figura 2. Gráfico Lead Time Sprint 1

El **eje horizontal (eje X)** representa la fecha de creación de las issues.

El **eje vertical (eje Y)** representa el número de días que se tardó en resolver dichas tareas.

Como podemos observar, la mayoría de issues y épicas se han resuelto dentro del **área sombreada**, esto quiere decir que no hay una gran variación en el tiempo que lleva cerrar las issues, es decir, se han cerrado dentro de un período de tiempo "normal".

Pese a esto, el 20 y 22 de febrero se terminaron varias tareas cuyo tiempo de resolución fue más alto de lo que debería, como también hay tareas que se terminaron antes de lo esperado. 

Quitando estas excepciones, el resto de los puntos están relativamente cerca de la media _(línea azul)_ y el promedio móvil _(línea verde)_ se mantiene constante lo que indica un proceso estable.

#### Gráfico "Cycle Time" <a name="id6"></a>
_Cycle Time_ es el tiempo desde que se comienza a trabajar en una _issue_ o _feature_ hasta que se completa. A diferencia del _Lead Time_, el tiempo de ciclo sólo incluye el tiempo en el que realmente se ha estado trabajando activamente en el problema. Generalmente, el equipo tiene más control sobre este tiempo y puede influir en él realizando cambios durante el proceso de desarrollo.

![esquema](https://media.discordapp.net/attachments/1204384256487329827/1216000118080405718/Kd8NEo0I5iOny_pINSeXkhFS4uiBzuTgYw.jpg?ex=661a7adc&is=660805dc&hm=1c79dea49e9909d8aa38110e0b64bf1a4c3c6711e2a3a6dbee5ecc8a2a796a80&=&format=webp&width=900&height=432)

                                        Figura 3. Esquema Cycle Time y Lead Time Sprint 1
La primera tubería refleja cuándo comienza realmente el trabajo sobre la issue. La tubería final captura el momento en que se "completa" esa issue; en este caso, será ```En progreso``` → ```Cerrado```.

![cycle-time-s1](https://media.discordapp.net/attachments/1204384256487329827/1216005208342265977/Captura_de_pantalla_2024-03-09_134957.png?ex=6623ba19&is=66114519&hm=7af2aaa8a1b40d761792c92effbe63a922d74fa52e099eb1e2f19bf35dfdfef2&=&format=webp&quality=lossless&width=1019&height=663)

                                                Figura 4. Gráfico Cycle Time Sprint 1
El **eje horizontal (eje X)** representa la fecha de comienzo o fin de las issues.

El **eje vertical (eje Y)** representa el número de días que se tardó en resolver dichas tareas.

Como podemos observar, la mayoría de issues y épicas se han resuelto dentro del **área sombreada**, esto quiere decir que no hay una gran variación en el tiempo que lleva cerrar las issues, es decir, se han cerrado dentro de un período de tiempo "normal".

Aunque es cierto que entre el día Martes 13 y el día Martes 20 se tardó mucho en retomar la resolución de las issues, muchas de las tareas han tardado menos de lo esperado en resolverse (están por debajo de la media). Sólo hay tres tareas simbolizadas con una flecha, que han tardado más en solucionarse de lo que se esperaba. Esto es debido a que dos de las tareas trataban sobre documentos que había que actualizar cada semana hasta el fin del sprint, por este motivo, hasta que no finalizase el sprint no se podían mover a la columna ``Done``. Otra tarea se trataba de identificar bugs lo que llevó algo más de lo esperado.

Sin embargo, muchas tareas aparecen abajo en el eje horizontal, esto significa que directamente se pasaron de la columna ```To Do``` a ```Done```. Esto representa una mala práctica por parte del equipo, y por eso hemos acordado en ser más conscientes sobre la importancia de llevar correctamente y al día la supervisión de las tareas.

La mayoría de los puntos están relativamente cerca de la media _(línea azul)_, y el promedio móvil _(línea verde)_ se mantiene constante lo que indica un proceso estable.

#### Puntos de historia totales alcanzados <a name="id7"></a>
Durante el transcurso del proyecto, el equipo ha logrado alcanzar un total de puntos de historia acumulados que reflejan el trabajo completado en las diferentes iteraciones. Estos puntos de historia representan el esfuerzo estimado necesario para completar las tareas y funcionalidades planificadas. En nuestro caso hemos alcanzado un total de 247 puntos de historia, que se han repartido de manera más o menos equitativa entre todos los miembros del grupo.

#### Porcentaje de los puntos de historia alcanzados <a name="id8"></a>
El reparto porcentual de las tareas, teniendo en cuenta como parámetros los puntos de historia, fue el siguiente:

***Javier Blasco Moreno***: 26 **10.5%**

***Carlos García Ortiz***: 57 **23.1%**

***Jorge Gómez de Tovar***: 36 **14.6%**

***David Guillén Fernández***: 46 **18.6%**

***Sonia Maria Rus Morales***: 36 **14.6%**

***Julia Sánchez Márquez***: 46 **18.6%**


![puntos-historia-s1](https://cdn.discordapp.com/attachments/1153717441139064854/1225173510381506702/313468545-f785f274-6f82-427c-97bb-42270ce4f4fe.png?ex=66202abf&is=660db5bf&hm=1df73baa7965b31ea1529b7e55d0c47da2c7fc5f5aaf037689270bc9b55c091b&)

                                            Figura 5. Gráfico Puntos de Historia Sprint 1
Como puede observarse, algunos miembros han recibido más carga que otros. Por ejemplo, Javier tiene menos puntos de historia debido a su llegada tardía al grupo, esto hizo que la organización y el reparto de tareas (que se realizó previamente) del sprint se viera afectada. Por otra parte, Carlos cuenta con una mayor cantidad de puntos de historia, esto ha sido causado por una mala estimación, pues una funcionalidad se pensó en un principio que sería más sencilla de lo que terminó siendo, esto hizo que los puntos de historia de dicha tarea se disparatasen ocasionando un desnivel.


![puntos-historia-s1](https://media.discordapp.net/attachments/1204384256487329827/1225145395605147698/image.png?ex=66201090&is=660d9b90&hm=2fba9527e9aae962e896faf2764e59af0d299bece8bc0a48571691e7b3d5627b&=&format=webp&quality=lossless&width=761&height=156)

                                            Figura 6. Gráfico Puntos de Historia quemados Sprint 1

Por último, tenemos un gráfico sobre los puntos de historia quemados en total. Como puede observarse, se han realizado todas las tareas del sprint 1 alcanzando un 100% de puntos de usuario.

### Sprint 2 <a name="id9"></a>
#### Gráfico Burn Down <a name="id10"></a> 
![burn-down-s2](https://media.discordapp.net/attachments/1204384256487329827/1225144067546022038/image.png?ex=66200f53&is=660d9a53&hm=033433c8f76073ddc5396de27ba0b817891a16f479da8356bea16f6a2004e3c7&=&format=webp&quality=lossless&width=1126&height=662)

                                            Figura 7. Gráfico Burn-Down Sprint 2
En esta imagen tenemos una representación del progreso del Sprint 2. Gracias a la herramienta de ZenHub, podemos adquirir estos gráficos de forma sencilla.
Se observa que el sprint comenzó con un inicio tardío pues no se comenzó a trabajar hasta el día 11 completando 30 puntos de historia, pero no los suficientes para alcanzar un buen ritmo. A pesar de esto, conforme avanzó el proyecto, cada vez se cerraban más tareas de mayor peso (puntos de historia) hasta llegar al punto de ir mejor de lo planeado. Sin embargo, podemos visualizar una línea recta y constante a partir del 24 de marzo, esto surgió debido al periodo de vacaciones escolares, cuando, como se puede observar, no se trabajó. Realmente, este gráfico no llega hasta el final del Sprint esto se debe a que la tarea correspondiente a este análisis aún no se puede cerrar pues se está haciendo en este momento.

De estos datos podemos concluir que el Sprint 2 tuvo un inicio problemático, con una ejecución poco óptima aunque más tarde se retomó y se pudo alcanzar los objetivos finales a tiempo.

#### Gráfico "Lead Time" <a name="id11"></a>

![image](https://cdn.discordapp.com/attachments/1153717441139064854/1225174777808031827/319315359-00018186-de7f-43dd-b91d-65ca772360dc.png?ex=66202bed&is=660db6ed&hm=9621d1a3545696f46fc84f4c4893ec8853aa01fd1b750ef81307480778fb94a8&)

                                        Figura 8. Gráfico Lead Time Sprint 2

El **eje horizontal (eje X)** representa la fecha de creación de las issues.

El **eje vertical (eje Y)** representa el número de días que se tardó en resolver dichas tareas.

Como podemos observar, la gran mayoría de issues y épicas se han resuelto dentro del **área sombreada**, esto quiere decir que no hay una gran variación en el tiempo que lleva cerrar las issues, es decir, se han cerrado dentro de un período de tiempo "normal".

Podemos ver que por lo general las tareas se han cerrado antes de lo esperado, ya que se encuentran por debajo de la media. Sin embargo, hay una minoría que están muy por encima de esta, como pueden ser la #60, #65 o #59. Estas son tareas que se han terminado al final ya que dependían de otras para poder hacerlas o darlas por finalizadas. Algunos ejemplos de esto son la #63, que es un documento que debía actualizarse cada semana, o la #66, que trataba de documentar la Sprint Review, por lo que no podía ser movida a la columna ``Done`` hasta haberla hecho.

La mayoría de los puntos están relativamente cerca de la media _(línea azul)_, y el promedio móvil _(línea verde)_ se mantiene constante lo que indica un proceso estable.


#### Gráfico "Cycle Time" <a name="id12"></a>
![cycle-time-s2](https://media.discordapp.net/attachments/1204384256487329827/1225144941550895215/image.png?ex=66201024&is=660d9b24&hm=36fcf002d449586263b0d209f466f41f7a529ce178a3b1097041296885205601&=&format=webp&quality=lossless&width=653&height=437)

                                                Figura 9. Gráfico Cycle Time Sprint 2
El **eje horizontal (eje X)** representa la fecha de comienzo o fin de las issues.

El **eje vertical (eje Y)** representa el número de días que se tardó en resolver dichas tareas.

Como podemos observar, la mayoría de issues y épicas se han resuelto dentro del **área sombreada**, esto quiere decir que no hay una gran variación en el tiempo que lleva cerrar las issues, es decir, se han cerrado dentro de un período de tiempo "normal".

La mayoría de las tareas han tardado menos de lo esperado en resolverse (están por debajo de la media), excepto 6. La tarea #51 trataba sobre la funcionalidad "Adopciones" y tardó un poco más en completarse pues resultó más compleja de lo que en un inicio se pensó. Por otro lado, las tareas #63 y #57 han tardad más debido a que las dos trataban sobre documentos que había que actualizar cada semana hasta el fin del sprint, por este motivo, hasta que no finalizase el sprint no se podían mover a la columna ``Done``.

Algunas tareas aparecen abajo del eje horizontal y a diferencia del primer sprint, en este caso es porque las tareas se han cerrado y completado exactamente en el mismo día gracias a que fueron sencillas. Podemos concluir con una mejora sobre las buenas prácticas.

La mayoría de los puntos están relativamente cerca de la media _(línea azul)_, y el promedio móvil _(línea verde)_ se mantiene constante lo que indica un proceso estable.
#### Puntos de historia totales alcanzados <a name="id13"></a>
A lo largo del proyecto, el equipo ha alcanzado hasta ahora un total acumulado de 418 puntos de historia, los cuales se han distribuido de manera equitativa entre todos los integrantes del grupo. Este número incrementará hasta 468, ya que faltan 50 puntos por sumarse que serían los relativos a esta tarea. 

#### Porcentaje de los puntos de historia alcanzados <a name="id14"></a>

El reparto porcentual de las tareas, teniendo en cuenta como parámetros los puntos de historia, fue el siguiente:

***Javier Blasco Moreno***: 85 **20.3%**

***Carlos García Ortiz***: 52 **12.4%**

***Jorge Gómez de Tovar***: 76 **18.2%**

***David Guillén Fernández***: 63 **15%**

***Sonia Maria Rus Morales***: 71 **17.1%**

***Julia Sánchez Márquez***: 71 **17.1%**


![image](https://cdn.discordapp.com/attachments/1153717441139064854/1225174989800738946/319324485-48348545-1e37-495d-9027-b3b20c3179fc.png?ex=66202c20&is=660db720&hm=54c521f7ab7c90bdb4113763845a77028fd875766902be4e48717e7b4bb3e1cd&)

                                            Figura 10. Gráfico Puntos de Historia Sprint 2

En este Sprint hemos repartido los puntos de historia de manera que pudiese equilibrar la repartición del Sprint 1, donde Carlos hizo más de lo debido por una mala estimación y Javier hizo menos por su tardía incorporación al grupo. Vemos que, teniendo en cuenta esto, los porcentajes están compensados.


![history-points-s2](https://media.discordapp.net/attachments/1204384256487329827/1225144067898478623/image.png?ex=66200f53&is=660d9a53&hm=a6dfe356d8822f1742e4ef5e3c451ad4f128f6b558eff6441bdf2ed59c64865a&=&format=webp&quality=lossless&width=781&height=170)

                                                Figura 11. Gráfico Puntos de Historia quemados Sprint 2
Como podemos observar, no se han alcanzado un 100% de puntos de historia, esto se debe a que la tarea realizada con la elaboración de este análisis aún no se ha pasado a ```Done``` pues se está haciendo en este momento. Por este motivo quedan 50 puntos de historia por completar (los relativos a esta tarea) y se ha alcanzado un 89%. Una vez esta tarea finalice, dichos valores se actualizarán a 418 puntos de historia "Completed", 0 puntos de historia "Remaning" y 100% de puntos de historia alcanzados.

#### Análisis cualitativo del calendario Niko-Niko <a name="id15"></a>

| Day           | Javier Blasco    | Carlos García     | Jorge Gómez     | David Guillén     | Sonia María     | Julia Sánchez     |
| ------------- | ------------- | -------------  | -------------  | -------------  | -------------  | -------------  |
| 5 marzo         |:smiley:       |:smiley:       |              -  |              -  |         -       |:smiley:       |
| 6 marzo         |     -          |-|        -        |   -             |  -              |             -   |
| 7 marzo         |     -          |-|        -        |     -           | -               |               - |
| 8 marzo         |    -           |   -             |      -          |   -             | -               |        -        |
| 9 marzo         |    -           |   -             |        -        |           -     |-                |:smiley:       |
| 10 marzo        |    -           |:neutral_face:|          -      |  -              |     -           |        -        |
| 11 marzo        |:smiley:       |:smiley:       |:smiley:       |       -         |       -         |         -       |
| 12 marzo         |:smiley:      |   -             |:worried:|:neutral_face:|:smiley:       |:neutral_face:|
| 13 marzo         |   -           |   -             |:smiley:       |     -           |:neutral_face:|     -           |
| 14 marzo         |    -          |   -             |     -           |:smiley:       |    -            |   -             |
| 15 marzo         |    -          |  -              |     -           |    -            |  -              |  -              |
| 16 marzo         |    -          |   -             |     -           |  -              |   -             |  -              |
| 17 marzo         |:smiley:      |:smiley:       |     -           |:worried:|:smiley:       |:worried:|-
| 18 marzo         |    -          |    -            |   -             |  -              |     -           |  -              |
| 19 marzo         |:smiley:      |:smiley:       |           -     |:neutral_face:|             -   |:neutral_face:|
| 20 marzo         |    -          |    -            |:smiley:       |:smiley:       |:smiley:        |    -            |
| 21 marzo         |    -          |    -            |      -          |:smiley:       |:neutral_face:|     -           |
| 22 marzo         |    -          |    -            |     -           |   -             |   -             |  -              |
| 23 marzo         |    -          |   -             |     -           |   -             |   -             |  -              |
| 24 marzo         |    -          |  -              |   -             |  -              |   -             |:smiley:       |
| 25 marzo         |   -           |   -             |    -            |  -              |:smiley:       |   -             |
| 26 marzo         |   -           |   -             |    -            | -               |   -             |    -            |
| 27 marzo         |:smiley:      |:smiley:       |:smiley:       |:smiley:        |:smiley:       |:smiley:       |
| 28 marzo         |   -           |  -              |   -             |  -              |  -              |    -            |
| 29 marzo         |   -           |   -             |   -             |:smiley:       |:smiley:       |:smiley:       |
| 30 marzo         |   -           |   -             |   -             |   -             |   -             |   -             |
| 31 marzo         |   -           |   -             |    -            |:smiley:       |:smiley:       |       -         |
| 1 abril          |:smiley:      |    -            |   -             |   -             | -               |    -            |
| 2 abril          |   -           |:smiley:       |:smiley:       |           -     |             -   |      -          |
| 3 abril          |:smiley:      |:worried:|        -        |:neutral_face:|  -              |:worried:|



:smiley: : Estoy aprendiendo, me gusta el trabajo que estoy realizando y creo que puedo hacerlo sin problemas con un poco de esfuerzo.

"-" : No trabajé en el proyecto este día.

:neutral_face: : Es posible que me haya encontrado con alguna dificultad pero el trabajo asignado es justo y mi día fue productivo.

:worried: : Estoy teniendo problemas para lograr hacer la tarea o mi productividad en este día ha sido terrible.

:fearful: :  Necesito ayuda, estoy estresado/a.

Podemos observar que la mayoría de días en los que se ha trabajado en el proyecto han ido bien, con una adecuada carga de trabajo y sin muchos problemas para realizarlo, lo cual quiere decir que el equipo ha conseguido dividir correctamente el trabajo entre los miembros.
