# Análisis del Código Fuente y Métricas Asociadas
**Índice**   
1. [Introducción](#id1)
2. [Métricas del proyecto en SonarQube](#id2)
3. [Backend](#id3)
   
   3.1.[Descripción y análisis de bugs](#id4)

   3.2.[Descripción y análisis de code smells](#id5)
      
4. [Frontend](#id6)

   4.1.[Descripción y análisis de bugs](#id7)

   4.2.[Descripción y análisis de code smells](#id8)

5. [Conclusión](#id9)

## _Introducción_ <a name="id1"></a>

## _Métricas del proyecto en SonarQube_ <a name="id2"></a>

Panel de control de todo el proyecto (Backend):

![image]([https://github.com/gii-is-psg2/psg2-2324-g3-31/assets/73231437/c8c8026f-3083-4a56-bbee-0438d867ecfd](https://cdn.discordapp.com/attachments/1153717441139064854/1225175658674524441/318261139-c8c8026f-3083-4a56-bbee-0438d867ecfd.png?ex=66202cbf&is=660db7bf&hm=3eb803174979005c3bf2711dcf5f9e5336c67c3be1932796f1e5997d3fcfbeb8&))

                                            Figura 1. Dashboard del backend

Panel de control de todo el proyecto (Frontend):

![image](https://media.discordapp.net/attachments/1204384256487329827/1225104850346577940/image.png?ex=661feacd&is=660d75cd&hm=5b1230de5b15ac1b818b3572e84b71b2db2ce405fe24b266cd7af7e238bef8d7&=&format=webp&quality=lossless&width=1276&height=662)

                                            Figura 2. Dashboard del frontend


Analizando estos paneles, podemos observar lo siguiente:

- **Bugs:** Los bugs son problemas o defectos que causan un comportamiento no deseado o incorrecto en el programa. El análisis de los bugs revela que hay un total de 11 bugs en el backend, aunque podemos ver que hay varios repetidos, y cuatro en el frontend.

- **Vulnerabilities:** Las vulnerabilidades son debilidades o fallos en su diseño, implementación o configuración que pueden ser explotadas por actores malintencionados o provocar fallos en su funcionamiento. El análisis de las vulnerabilidades del programa revela un resultado positivo: no se han encontrado vulnerabilidades ni en el backend ni en el frontend.

- **Security Hotspots:** Se refiere a áreas específicas del código, la arquitectura o la configuración que representan riesgos significativos para la seguridad del sistema. El análisis de los security hotspots del programa muestra que se ha identificado un security hotspot en el backend y otro en el frontend.

- **Code Smells:** Los code smells son indicios o señales de que el código puede tener problemas de diseño o implementación aunque estos no impidan el correcto funcionamiento del programa. El análisis de los code smells en el programa revela un total de 221 code smells en el backend y 188 en el frontend. La alta cantidad de code smells es debido, sobre todo, a la redundancia y a la forma de declarar ciertas variables.



## _Backend_ <a name="id3"></a>
### Descripción y análisis de bugs <a name="id4"></a>
Durante el análisis del código del backend del proyecto se han indentificado varios bugs que hay que solucionar. Los principales bugs encontrados en el backend son: 
- **src/main/java/org/springframework/samples/petclinic/adoptions/AdoptionsService.java**
- **src/main/java/org/springframework/samples/petclinic/booking/BookingService.java**
- **src/main/java/org/springframework/samples/petclinic/clinic/ClinicService.java**
- **src/main/java/org/springframework/samples/petclinic/clinicowner/ClinicOwnerService.java**
- **src/main/java/org/springframework/samples/petclinic/owner/OwnerRestController.java**
- **src/main/java/org/springframework/samples/petclinic/room/PetRoomService.java**
    - `"Call "Optional#isPresent()" before accessing the value."`
        
        - Descripción: Este bug indica que se está accediendo a un valor opcional (Optional) sin verificar primero si está presente mediante el método isPresent(). Acceder directamente al valor sin verificar si existe puede resultar en una excepción NoSuchElementException si el valor es null.
        
        - Causa: El código no está siguiendo las mejores prácticas para el manejo de Optional, lo que puede llevar a errores de tiempo de ejecución.
        
        - Gravedad: `Major`. Acceder directamente al valor de un Optional sin verificar su presencia puede causar excepciones que podrían interrumpir el flujo normal del programa y provocar fallas inesperadas.
        
        - Solución: La solución más adecuada sería verificar primero si el valor está presente usando el método isPresent() antes de acceder al valor del Optional. Esto se puede hacer utilizando métodos como ifPresent(), orElse(), orElseGet(), o orElseThrow() según la lógica específica del código. Esto garantiza un manejo seguro y adecuado de los valores opcionales y previene posibles excepciones.
        

- **src/main/java/org/springframework/samples/petclinic/booking/BookingController.java**
    - `"Use the "equals" method if value comparison was intended."`
        
        - Descripción: Este bug indica que se está utilizando el operador == para comparar valores de objetos en lugar del método equals(). Si se está comparando el valor de dos objetos y se usa el operador ==, se está verificando si ambos objetos son la misma referencia en la memoria, no si sus valores son iguales. Esto puede conducir a resultados inesperados, especialmente cuando se trabaja con objetos.
        
        - Causa: El código está utilizando el operador == para comparar valores de objetos en lugar del método equals().
        
        - Gravedad: `Major`. Utilizar el operador == para comparar valores de objetos en lugar de equals() puede llevar a resultados incorrectos y errores lógicos en el programa.
        
        - Solución: La solución consiste en utilizar el método equals() para comparar los valores de los objetos en lugar del operador ==. Esto asegura una comparación basada en el valor de los objetos y no en su referencia en la memoria. Es importante asegurarse de que el método equals() esté correctamente implementado en la clase del objeto para garantizar una comparación precisa.


### Descripción y análisis de code smells <a name="id5"></a>
Ya hemos visto como mantener un código es fundamental para garantizar durabilidad y eficiencia. Sin embargo, a veces surgen patrones o estructuras de código conocidos como `"code smells"` que indican áreas de mejoras en la calidad del código.
Los "code smells" están relacionados con la mantenibilidad del código pues nos indican posibles problemas que pueden afectar a la comprensión, modificación o extensión del código en un futuro.
En esta sección, se analizarán los diferentes tipos de "code smells" según su etiqueta (unused clumsy, redundant...), nombre, posibles causas, gravedad (blocker, critical, major...), etc. Además, proporcionaremos una breve solución para abordar estos malos olores.

Como podemos observar, aunque tenemos 221 code smells en total, nuestro proyecto tiene una calificación de mantenibilidad de A, esto indica que, en general, el código está bien estructurado aunque aún hay algún área con rango de mejora. 

Vamos a analizar los tipos de code smells detectados según su etiqueta en SonarQube:

- **Unused code smells**:
  - `"Remove this commented out code."`
    
      - Descripción: Se trata de una advertencia acerca de comentar código en lugar de eliminarlo.
        
      - Causa: El código no está siguiendo las mejores prácticas sobre comentarios en él.
      
      - Gravedad: `Major`. Esto puede desembocar en programas inflados y poca legibilidad.
        
      - Solución: Una posible solución sería simplemente eliminarlo.
        
  - `"This block of commented-out lines of code should be removed."`
  
      - Descripción: Se trata de una advertencia por bloque de código comentado dentro del código fuente.
        
      - Causa: El código no está siguiendo las mejores prácticas sobre comentarios en él.
      
      - Gravedad: `Major`. Dejar bloques de código comentados en el código fuente reducen la legibilidad y fomenta confusión.
        
      - Solución: Para solucionarlo simplemente habría que eliminar los bloques de código comentados en el código por completo.
       
  - `"Remove this unused "ownerService" private field."`
   
      - Descripción: Se trata de una indicación sobre la presencia de campos privados en una clase que no se utilizan en ninguna parte de la misma.
        
      - Causa: Este code smell ha podido surgir por refactorización de código o errores de diseño.
      
      - Gravedad: `Major`. Esto puede resultar en un problema de diseño en la clase provocando un código difícil de entender y mantener.
        
      - Solución: Para resolverlo simplemente habría que eliminarlo.
   
  - `"Remove this unused import."`
     
      - Descripción: Se trata de una indicación sobre el uso de una importación no utilizada.
        
      - Causa: Esto puede haber ocurrido por una refactorzación de código y como resultado no se ha eliminado las importaciones correspondientes.
      
      - Gravedad: `Minor`. Como resultado se puede "ensuciar" el código afectando a la legibilidad del mismo.
        
      - Solución: Para solucionarlo simplemente habría que borrar dicha importanción.
 
  - `"Remove the declaration of thrown exception 'java.net.URISyntaxException', as it cannot be thrown from method's body."`
     
      - Descripción: Es una advertencia por una declaración innecesaria de una excepción. 
        
      - Causa: Esto puede ser porque no hay ningún código dentro del cuerpo que lance realmente esta excepción.
      
      - Gravedad: `Minor`.
        
      - Solución: Para solucionarlo simplememente habría que eliminar la excepción del método o agregar el código correspondiente para lanzarla.
   
  - `"Remove this unused "p" local variable."`
    
      - Descripción: Comenta que cuando una variable local no se utiliza en el código hay que eliminarla, del contrario podría provocar falta de limpieza y optimización en el código.
        
      - Causa: Esto puede ser debido a una refactorización de código.
      
      - Gravedad: `Minor`.
        
      - Solución: Para solucionarlo simplememente habría que eliminar la variables que no se está usando.
    
- **Clumsy code smells**:
  - `"Remove this unnecessary cast to 'Iterable'."`
    
      - Descripción: Se trata de una advertencia acerca de la presencia de un casting innecesario, en este caso 'Iterable' que hace el código difícil de entender y leer.
        
      - Causa: Esto puede ser debido al desconocimiento de que el método ya devuelve un objeto que implementa la interfaz 'Iterable'.
      
      - Gravedad: `Minor`.
        
      - Solución: Para solucionarlo deberíamos eliminar la expresión de casting.
   
- **Performance code smells**:
  - `"Inject this field value directly into "configure", the only method that uses it."`
    
      - Descripción: Esto se debe a que el valor del campo debería ser inyectado directamente en el método 'configure' en lugar de almacenarlo como un campo de la clase.
        
      - Causa: Este code smell ha surgido porque con @Autowired las dependecias se deben inyectar cuando se instancia la clase y esto hace que los beans se inicialicen demasiado temprano consumiendo recursos innecesarios. 
      
      - Gravedad: `Critical`. Esto provoca que el código sea menos claro y se almacenen valores no usados.
        
      - Solución: Para solucionarlo podemos usar el parámetro @Bean para inyectar las dependencias que sólo van a ser usados en el método.

- **Bad practice code smells**:
  - `"Replace this use of System.out or System.err by a logger."`
      - Descripción: Sugiere que en lugar de usar salidas estándar para imprimir por pantalla, se debería usar un "logger" adecuado. Esto es mejor para que el usuario pueda leer fácilmente el mensaje, sea uniforme, se asegure de guardar bien los datos y de forma segura.
        
      - Causa: Esto se ha podido deber por un desarrollo rápido, falta de tiempo o por falta de conocimiento sobre las buenas prácticas.
      
      - Gravedad: `Major`. Esto provoca que el código sea menos claro y entendible.
        
      - Solución: Para solucionarlo deberíamos usar un logger adecuado. Por ejemplo que en vez de usar _System.out.println("My Message");_, se use _logger.log("My Message");_.
      
- **Pitfall code smells**:
   - `"Provide the parametrized type for this generic."`
       
      - Descripción: Explica que los tipos genéricos no deberían usarse sin especificar el tipo entre corchetes ('<>').
        
      - Causa: Esto ha podido surgir por desarrollo rápido o falta de revisión de código.
      
      - Gravedad: `Major`.
        
      - Solución: Para solucionarlo simplemente habría que poner el tipo dentro de los corchetes.
        
- **Java code smells**:
  - `"Replace this lambda with a method reference."`
    
      - Descripción: Sugiere cambiar una expresión lambda por una referencia a un método para hacer el código más conciso y legible.
        
      - Causa: Esto ha podido surgir por una complejidad mayor del código.
      
      - Gravedad: `Minor`.
        
      - Solución: En este caso se podría reemplazar la expresión lambda por el propio método de la clase que se usa.
       
  - `"Declare this local variable with "var" instead."`
    
      - Descripción: En java 10 se puede emitir el tipo esperado de una variable declarándola como _var_, esto hace que el código sea más limpio y conciso.
        
      - Causa: Esto ha podido ocurrir por falta de conocimiento sobre las buenas prácticas.
      
      - Gravedad: `Info`.
        
      - Solución: En este caso se podría reemplazar el tipo de la variable por _var_.
        
  - `"Remove the parentheses around the "headers" parameter."`

      - Descripción: En java 8 hay dos sintaxis posibles para una lambda que tiene solo un parámetro de entrada con un tipo inferido: con y sin paréntesis alrededor de ese único parámetro. La sintaxis más simple, sin paréntesis, es más compacta y legible que la que tiene paréntesis y, por lo tanto, es la preferida.
        
      - Causa: Esto ha podido ocurrir por falta de conocimiento sobre las buenas prácticas.
      
      - Gravedad: `Minor`.
        
      - Solución: En este caso se eliminarian los paréntesis que rodean al parámetro _headers_.
   
- **Conventions code smells**:
  - `"Declare "current" on a separate line."`

      - Descripción: En este caso ocurre que dos variables se están declarando en una misma línea. Como recomendación, SonarQube propone declarar la variable "current" en otra línea para mayor legibilidad del código.
        
      - Causa: Esto ha podido ocurrir por falta de conocimiento sobre las buenas prácticas o falta de tiempo del desarrollador.
      
      - Gravedad: `Minor`.
        
      - Solución: En este caso decalararíamos la variable current debajo, en una línea separada.

- **Error-handling code smells**:
  - `"Make this "current" field final."`
      - Descripción: En este caso se está declarando la variable current como **no** final en de una excepción. Las excepciones están destinadas a representar el estado de la aplicación en el momento en que ocurrió un error. Hacer que todos los campos en una clase de excepción sean finales garantiza que este estado se definirá completamente al mismo tiempo que se crea una instancia de la excepción y que no será actualizado ni dañado por un controlador de errores cuestionable. Esto permitirá a los desarrolladores comprender rápidamente qué salió mal.
        
      - Causa: Esto ha podido ocurrir por falta de conocimiento sobre las buenas prácticas.
      
      - Gravedad: `Minor`.
        
      - Solución: En este caso decalararíamos la variable current como final, de esta forma: `private final PricingPlan current;`.
   
- `"Replace the type specification in this constructor call with the diamond operator ("<>")."`
     - Descripción:  Este code smell indica que se está declarando el tipo de un nuevo objeto _ResponseEntity<Owner>_, tanto en su propia declaración como en su constructor.
     - Causa: Ha podido surgir por despiste del programador o desconocimiento de la nueva "herramienta" que proporcionan las versiones recientes de Java.
     - Gravedad: Es un code smell de gravedad `Minor`, esto quiere decir que se trata de un defecto de calidad que puede afectar ligeramente la productividad del desarrollador. 
     - Solución: Con Java 7 se puede simplificar la verbosidad del código usando el operador diamante (<>) y el compilador automáticamente inferirá el tipo.

## _Frontend_ <a name="id6"></a>
### Descripción y análisis de bugs <a name="id7"></a>
La detección y corrección de errores, conocidos como "bugs", son elementos esenciales en el desarrollo de software. Estos problemas pueden surgir por diversos motivos, como errores de sintaxis, lógica incorrecta o fallos de interoperabilidad. Su resolución eficiente requiere identificación, clasificación y corrección adecuadas, considerando la gravedad del impacto en el sistema.

Durante el análisis del código fuente, se identificaron varios bugs potenciales específicos del frontend que requieren atención.
A continuación se detallan los principales problemas encontrados:

- **src/auth/register/index.js**:
    - `"Remove this conditional structure or edit its code blocks so that they're not all the same"`:
      - Descripción: Se detectó una estructura condicional redundante al obtener la lista de clínicas.
      - Causa: La estructura condicional parece no ser necesaria y podría causar problemas de legibilidad y mantenibilidad.
      - Gravedad: `Major`, ya que el código redundan`te puede confundir a los desarrolladores y aumentar la complejidad del código.
      - Solución: Eliminar la estructura condicional redundante o editar los bloques de código para evitar su redundancia.

- **src/global.css**:
  - `"Unexpected missing generic font family"`:
      - Descripción: Se observó que falta la definición de una familia de fuente genérica en el selector universal.
      - Causa: La falta de una familia de fuente genérica puede provocar que el navegador utilice una fuente predeterminada  que puede no ser adecuada para ciertos elementos.
      - Gravedad: `Major`, ya que puede afectar la consistencia y legibilidad del texto en el sitio web.
      - Solución: Agregar una familia de fuente genérica, como `sans-serif`,`serif`,`cursive`,`` al selector universal para garantizar una apariencia coherente del texto en todo el sitio.

- **src/static/css/owner/consultations.css**:
  - `"Unexpected duplicate "position" "`:
      - Descripción: Se observó que la propiedad "position" se repite en la definición de estilos para los botones de cambio de estado.
      - Causa: La propiedad "position" parece haber sido especificada dos veces en la misma regla CSS, lo que puede causar confusiones y errores de interpretación por parte del navegador.
      - Gravedad: `Major`, ya que la duplicación de propiedades puede afectar la consistencia y el rendimiento del estilo aplicado.
      - Solución: Eliminar una de las instancias de la propiedad "position" en la regla CSS para corregir la duplicación.

- **src/static/css/owner/editPet.css**:
  - `"Unexpected duplicate "height" "`:
      - Descripción: Se observó que la propiedad "height" se repite en la definición de estilos para el contenedor del formulario de edición de mascotas.
      - Causa: La propiedad "height" parece haber sido especificada dos veces con diferentes valores en la misma regla CSS, lo que puede causar resultados impredecibles o no deseados en el diseño.
      - Gravedad: `Major`,  ya que la duplicación de propiedades puede afectar la consistencia y el comportamiento esperado del diseño.
      - Solución: Eliminar una de las instancias de la propiedad "height" en la regla CSS para corregir la duplicación y garantizar un comportamiento coherente del diseño.

### Descripción y análisis de code smells <a name="id8"></a>
Como se ha realizado para la parte de backend, también se han analizado los code smells para el frontend. En este caso, nos encontramos con 188 de ellos en nuestro proyecto de múltiples etiquetas diferentes como son `unused`, `pitfall`, `confusing` y `brain-overload` entre los más destacados, que engloban ambas releases. Muchos de ellos están repetidos en múltiples clases y secciones de código para ambos Sprints. A pesar de ello, la calificación de la mantenibilidad se encuentra en A.

Por ello, vamos a detallar a continuación los code smells encontrados así como su causa y una breve descripción de cómo resolverlo: 

- **Unused code smells**:
   - `"Remove this unused import of ImAirplane."`
    
      - Descripción: Esto se debe a la importación de un módulo que no se utiliza en el código. El no eliminar dicha importación hace que aumente innecesariamente la carga que tiene que realizar el sistema.
        
      - Causa: Esto puede ser debido a una refactorización de código en la que no se hayan eliminado las importaciones sobrantes.
      
      - Gravedad: `Minor`.
        
      - Solución: Para solucionarlo solo habría que eliminar la importación.

   - `"Remove this useless assignment to variable “setAdoptions”."`
    
      - Descripción: Comenta que cuando una variable local recibe un valor que no se utiliza en ninguna instrucción posterior se produce lo que se conoce como un “almacén muerto”. Esto puede ocurrir cuando se calcula o se obtiene un valor que luego se sobrescribe o se desecha sin ser utilizado. Este tipo de situación no solo puede indicar un error potencial en el código, sino que también representa un desperdicio de recursos. Es fundamental, por tanto, emplear todos los valores calculados para garantizar una programación eficiente y evitar futuros problemas.
        
      - Causa: Esto puede haber ocurrido por una refactorización de código en la que no se hayan ajustado correctamente las variables.
      
      - Gravedad: `Major`.
        
      - Solución: Para solucionarlo solo habría que eliminar la asignación o refactorizar el código de una mejor forma.


   - `"Remove the declaration of the unused ‘setAlerts’."`
    
      - Descripción: Comenta que si una variable local o una función local se declara pero no se utiliza en el código, se considera como código inactivo.
            
      - Causa: Esto puede ser debido a una refactorización de código no muy adecuada.
      
      - Gravedad: `Minor`.
        
      - Solución: Para solucionarlo habría que eliminarla o refactorizar el código de una mejor forma. Esta acción mejorará la capacidad de mantenimiento del código, ya que los desarrolladores no tendrán que preguntarse para qué se utiliza esa variable o función. Además, reducirá la complejidad y el desorden en el código, facilitando su comprensión y futuras modificaciones. 

  - `"Remove this commented out code."`
    
      - Descripción: Los desarrolladores no deberían comentar el código ya que satura el programa y reduce la legibilidad.
            
      - Causa: Se debe a la presencia de comentarios en el código.
      
      - Gravedad: `Major`.
        
      - Solución: Para solucionarlo habría que eliminar los comentarios correspondientes.
    

    
- **Suspicious code smells**:
   - `"Unexpected empty arrow function."`
       
      - Descripción: Este code smell advierte de que se ha encontrado una función de flecha que no tiene un cuerpo funcional definido, es decir, que la función no tiene código dentro de las llaves `{}` que definen su cuerpo
        
      - Causa: Una causa podría ser dejar ese cuerpo intencionalmente vacío según la sintaxis que se esté usando.
      
      - Gravedad: `Critical`.
        
      - Solución: Para solucionarlo se podría refactorizar la función.

   - `"This always evaluates to truthy. Consider refactoring this code."`
       
      - Descripción: Comenta que la expresión booleana dentro de la condición a la que se refiere siempre se evalúa como verdadera, independientemente de los datos de entrada.
        
      - Causa: Una causa podría haber sido una mala refactorización o un mal uso de los operadores lógicos.
      
      - Gravedad: `Major`.
        
      - Solución: Para solucionarlo se podría refactorizar el código eliminando esa expresión que siempre se evalúa como verdadera. Esto mejora la legibilidad, reduce la complejidad y asegura que el código refleja correctamente la lógica deseada.


    
- **Pitfall code smells**:
   - `"’jwt’ is already declared in the upper scope."`
       
      - Descripción: Explica que modificar o sobrescribir una variable ya declarada en un contexto externo en un ámbito interno puede tener un impacto significativo en la claridad y, como consecuencia, en la capacidad de mantener un fragmento de código. Además, podría inducir a los desarrolladores a cometer errores al suponer que están manipulando una variable cuando en realidad están accediendo a otra.
        
      - Causa: Esto ha podido surgir si se está utilizando una estructura de bloque de código como una función o un bucle donde se intenta declarar nuevamente ‘jwt’.
      
      - Gravedad: `Major`.
        
      - Solución: Para solucionarlo se tendrá que evitar declarar nuevamente la variable ‘jwt’ en el ámbito interno, por ejemplo, cambiando el nombre de la variable o refactorizando el código.

- **Confusing code smells**:
   - `"Rename this file to "consultationService"."`
       
      - Descripción: Se refiere a que, por convención, un archivo que exporta sólo una clase, función o constante, debe tener el nombre de esa clase, función o constante, ya que cualquier otro nombre puede confundir a los desarrolladores.
        
      - Causa: Se debe a un mal nombramiento del archivo.
      
      - Gravedad: `Minor`.
        
      - Solución: Para solucionarlo se tendrá que renombrar y seguir las convenciones del nombramiento de los archivos. Esto hará que a los desarrolladores les resulte mucho más fácil entender el contenido del archivo sin tener que abrirlo.

   - `"Refactor this function to always return the same type."`
       
      - Descripción: Comenta que, a diferencia de los lenguajes fuertemente tipados, JavaScript no impone un solo tipo de retorno en una función, es decir, que un función puede devolver diferentes tipos de valores dependiendo de la ruta de ejecución que tome, lo que puede resultar muy confuso a los desarrolladores y más difícil de mantener. 
        
      - Causa: Esto puede ser debido a una mala refactorización anterior o a una lógica condicional compleja.
      
      - Gravedad: `Major`.
        
      - Solución: Para solucionarlo habría que refactorizar la función.

- **Brain-overload code smells**:
   - `"Refactor this function to reduce its Cognitive Complexity from 20 to the 15 allowed."`
       
      - Descripción: Indica que la función tiene una alta complejidad cognitiva. Esto quiere decir que tiene demasiada lógica complicada, múltiples caminos de ejecución y puede ser difícil de entender y mantener. Dificulta la legibilidad, la mantenibilidad y aumenta la probabilidad de introducir errores al modificar la función.
        
      - Causa: Esto es debido a la presencia de múltiples niveles de anidamiento en estructuras de control, como condicionales y bucles.
      
      - Gravedad: `Critical`.
        
      - Solución: Para solucionarlo hay que refactorizar la función para reducir la complejidad cognitiva a un nivel más manejable, en este caso, a 15 o menos.

- **ES2015 code smells**:
   - `"'react' import is duplicated."`
     
      - Descripción: Indica que en un mismo archivo de código existen dos o más importaciones duplicadas que provienen del mismo módulo. Aunque este bad smell no tenga un impacto crítico en la funcionalidad del código, puede afectar a su legibilidad y organización del mismo.
        
      - Causa: Se debe a la presencia de más de una línea de código en la que se importa el mismo módulo múltiples veces. Puede haber ocurrido a causa de una refactorización incompleta que se haya hecho previamente o a haber copiado y pegado algún bloque de código que contuviera ya dicha importación y que el desarrollador no se haya dado cuenta de ello.
      
      - Gravedad: `Minor`.
        
      - Solución: Para solucionar el bad smell hay que fusionar todas las importaciones duplicadas del mismo módulo en una sola importación. Con ello, se reduce el exceso de código repetitivo. 



Observando cada una de las clases implementadas durante la segunda release correspondiente al Sprint 2, encontramos un nuevo code smell que SonarQube no es capaz de identificar en la parte de código nuevo de la segunda release, siendo el siguiente: 

- **Confusing code smells**:
   - `"Extract this nested ternary operation into an independent statement."`
       
      - Descripción: Comenta que aunque se pueda realizar una anidación de operadores ternarios, no es necesario hacerlo. La anidación de estos operadores puede generar un código que inicialmente pueda parecer comprensible, pero posteriormente, puede confundir a los desarrolladores. 
        
      - Causa: Esto ha podido surgir por una complejidad elevada del código.
      
      - Gravedad: `Major`.
        
      - Solución: Para solucionar este problema y optar por priorizar la claridad en lugar de la complejidad, se podría dividir la operación anidada en declaraciones separadas en diferentes líneas. Con ello, facilitará la comprensión del código a largo plazo.
  
## _Conclusión_ <a name="id9"></a>
Tras observar detenidamente los bugs, es decir, el mayor peligro potencial en código de nuestro proyecto hemos detectado lo siguiente:
- En el backend la mayoría de bugs que hemos tenido son de tipo Optional, los cuales hemos podido solucionar sustituyendo el método get() por orElseThrow().
- En el frontend hemos tenido, entre otros, algunos bugs por tener líneas o atributos repetidos que hemos podido solucionar con facilidad.

En general estos errores no deberían afectar negativamente al proyecto a la hora de la ejecución, a pesar de estar clasificados como bugs de alta importancia. Por ello, tras un análisis personal podemos detallar que nuestro proyecto no poseía un nivel tan crítico como el que se nos decía. Igualmente nos hemos encargado de solucionar dichos bugs.
