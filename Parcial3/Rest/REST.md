# **Descripción de las Restricciones REST**
## *Rogelio Zamarripa Treviño - 18100248 - Carrera: Ingeniería en Sistemas Computacionales*
 **REST**, que es la abreviación de '*Representational State Transfer*', es un tipo de arquitectura de desarrollo web que se apoya totalmente en el estándar HTTP. **REST** se compone de una lista de reglas/restricciones que se deben cumplir en el diseño de la arquitectura de una API. Si un servicio web cumple con la arquitectura **REST**, se le denomina como *servicio web **RESTful***.

 **REST** se ha convertido en uno de los estilos arquitectónicos más utilizados. Es común ver que casi todas las aplicaciones tienen un **API REST** que nos permite interactuar con ellas por medio de servicios. **REST** fue nombrado por primera vez por Roy Fielding en el año 2000, y trabaja con tres (3) elementos clave que son: *Datos*, *Conectores* y *Componentes*.

## *Las 6 restricciones de la arquitectura **REST** no negociables*
1. **Interfaz uniforme**: Define una interfaz genérica para administrar cada interacción que se produzca entre el cliente y el servidor de manera uniforme, lo cual simplifica y separa la arquitectura. Esta restricción indica que cada recurso del servicio **REST** debe tener una única dirección o "*URL*".

2. **Modelo cliente-servidor**: El *servidor* se encarga de controlar los datos mientras que el *cliente* se encarga de manejar las interacciones del *usuario*. Esta restricción mantiene al *cliente* y al *servidor* débilmente acoplados (el *cliente* no necesita conocer los detalles de implementación del *servidor* y el *servidor* se “despreocupa” de cómo son usados los datos que envía al *cliente*).

3. **Apátrida** *(restricción sin estado)*: La *apatridia* significa que los recursos de la aplicación de aprovisionamiento del servidor **NO** almacenarán información entre solicitudes ni impondrán una secuencia de procesamiento requerida para las llamadas y solicitudes. La salida de cada solicitud debe priorizarse basándose **únicamente** en el contenido de la solicitud y la operación especificada, no en comportamientos pasados ​​con respecto a secuencias de eventos u órdenes de operaciones.

4. **Almacenable en caché** *(restricción 'cacheable')*: Debe admitir un sistema de almacenamiento en **caché**. Este almacenamiento evitará repetir varias conexiones entre el *servidor* y el *cliente* para recuperar un mismo recurso.

5. **Modelo de sistema en capas**: Esta restricción dice que una aplicación debería poder definir recursos asignándolos a capas de funcionalidad, con cada capa correspondiente a una única capacidad de servicio compartido.
En algunos casos, esas capacidades pueden ser algo simple, como actividades de equilibrio de carga. En otros casos, la capa puede albergar un proceso más complejo que requiere varios servidores y elementos de software, como el procesamiento de big data.

6. **Código bajo demanda** *(opcional)*: Única restricción que se puede considerar de caracter *opcional*. El código bajo demanda dice que, al responder a las solicitudes, los recursos **REST**ful deben estar preparados para proporcionar código que se ejecute en el lado del *cliente*, en lugar del lado del *servidor* (o en algún punto intermedio). El código del lado del *cliente* permite distribuir el trabajo cuando la ejecución del lado del *servidor* puede causar fallas o problemas de rendimiento.

## Referencias bibliográficas
* juanda.gitbooks.io, Arquitectura de una API REST - Desarrollo de aplicaciones web: Creación de una API https://juanda.gitbooks.io/webapps/content/api/arquitectura-api-rest.html
* Ordóñez, Jonathan, idento.es, ¿Qué es una API REST? https://www.idento.es/blog/desarrollo-web/que-es-una-api-rest/
* Blancarte, Oscar, Software Architect - reactiveprogramming.io, Representational state transfer (REST) https://reactiveprogramming.io/blog/es/estilos-arquitectonicos/rest
* De Souza, Iván, rockcontent.com, API Rest: ¿qué es y cómo funciona ese recurso? (con ejemplos) (fecha de publicación: 17 de Marzo de 2020) https://rockcontent.com/es/blog/api-rest/
* kryptonsolid.com, Las 6 restricciones de la arquitectura REST no negociables https://kryptonsolid.com/las-6-restricciones-de-la-arquitectura-rest-no-negociables/