
/*
---------------------------------------------------------------
---------------------------------------------------------------

Portafolio de desarrolladores
---------------------------------------------------------------

Autor:
Cristian M. Véliz Cano

Año:
2026

Descripción:
Portafolio de desarrollo de software personal creado para exhibir
aplicaciones de escritorio, herramientas Python y proyectos web.

El portafolio funciona como una galería de proyectos profesional.
donde cada aplicación se puede explorar a través de vistas previas,
demostraciones y compilaciones descargables cuando estén disponibles.


---------------------------------------------------------------
Tecnologías

HTML5
CSS3
javascript

---------------------------------------------------------------
Secciones

Proyectos de Python
Aplicaciones de escritorio
Proyectos Web
Acerca de

---------------------------------------------------------------
Notas

Es posible que algunos proyectos no incluyan código fuente público debido a
experimentación de desarrollo, propiedad intelectual o
consideraciones de seguridad.

---------------------------------------------------------------
---------------------------------------------------------------
*/

const projects = {

python:[
{
title:"Reproductor (MULTI)-Videos_v03",
image:"images/python/imageP1.png",
desc:"Este es un pequeño Soft, para poder Visualizar por Tab´s, o Paginas, gracias, a las bondades del\
QStackedWidget, acá podremos visualizar desde 1 video hasta 6 por hoja, pagina, tab, como le\
deseen llamar, y no tiene tope, es totalmente, dinamico, sin un número limite de Videos, que\
podremos, almacenar, para poder verlos, de manera, Simultanea, si nuestro equipo lo permite, tal\
como buena memoria, RAM CPU, como GPU, es por si tenemos que hacer la comparativa, o segun el uso\
que se le desee dar, a varios, videos, en casi que uno solo, este soft, sale de lo convencional,\
solamente, para suplir esa nececidad, y tambien para demostración en que de igual forma, podremos\
combinarlo con CV2, para poder crear un Sistema de Vigilancia, Con Camaras, IP, y un Soft, que\
pueda sostener mas de 6 Camaras, al Hilo, sin Perder, su Integridad, ni Volcarse, ni Crashear,\
el Soft-Ware, no se el uso que se le desee, Otorgar, de la buena manera, platicando, esta\
Herramienta, solamente quedara el Soft-Ware, de Manera, Gratuita, sin ningun Coste, pero no\
Open-Source, como es costumbre",
link:"images/python/imageP1.png",
download:"https://mega.nz/file/jodHBaoL#J2dRyW4kwq4DCxnufduJ990yeEruR9LH-6y9YNZJt-c",
demo:"https://mega.nz/file/zxVzUA5Y#PFAFA50_n299rjxJClSLaXhAnhAuXFYIOCgpb4cd_q4"
},
{
title:"Video_Player_Widget_Logic_v02",
image:"images/python/imageP2.png",
desc:"Modulo, de uso, para Reproducción de Video, con este modulo podremos visualizar de forma\
ya prehecha un bonito reproductor de video creado en PyQt5, con este modulo, editable,\
podremos modificar, su tamaño, sus colores, todo de el, con el modulo ya no tendremos que\
preocuparnos, para o por la creación de un medio de reproducción de video, o utilizarlo, para\
reproducir, video, en camaras de vigilancia, sea con las propias librerias, de PyQt, Qt, como\
de librerias, de Terceros, tales como CV2, u otras librerias.",
link:"images/python/imageP2.png",
download:"https://mega.nz/file/fhsBzIaJ#_ddLvyYTAgMTaCWTSslsejAkn5I9QrrsT5CMTrdwedA",
demo:"https://mega.nz/file/mo1jXKDD#EsQSDeyEsewhdfk7Vx8ivaIJ2gSPkTK3whXHCSkm0Ts"
},
{
title:"Slider-Image_v12",
image:"images/python/imageP3.png",
desc:"Slider-Image_v12 — Visor de Imágenes con Transición y Reproductor de Música\
Aplicación de escritorio desarrollada en Python con Tkinter que permite visualizar\
imágenes mediante un sistema de transiciones tipo slider acompañado opcionalmente\
de reproducción de música.\
El software permite seleccionar múltiples imágenes y mostrarlas en pantalla con una\
transición automática configurable. Además, incluye un módulo de audio para reproducir\
pistas musicales en paralelo mientras se visualizan las imágenes.\
\
Entre sus principales características se incluyen:\
Visualización de imágenes en formato PNG, JPG, JPEG y GIF.\
Transición automática entre imágenes con velocidad configurable por el usuario.\
Modo pantalla completa y control de interfaz mediante combinaciones de teclas.\
Posibilidad de agregar imágenes adicionales durante la ejecución.\
Reproductor de música integrado compatible con archivos MP3 y OGG.\
Controles de audio como play, pausa, stop, mute y control de volumen.\
Sistema de menú contextual y atajos de teclado para controlar todas las funciones.\
Compatible con ejecución normal o empaquetado como aplicación independiente.\
Esta herramienta está pensada para crear presentaciones visuales dinámicas, mostrar\
galerías de imágenes, o acompañar contenido visual con música de fondo.",
download:"https://mega.nz/file/6pNX1LTS#m71Yv2JhiYZEUXZ_gHAerrTBBmisSDQheVsn15SxIi8",
demo:"https://mega.nz/file/78dXCJYY#HLilngpLci-Jkvhj-VdaiFXWOkOpn5mIEX3PJS2kYkQ"
},
{
title:"Tkinter New Slider - v2",
image:"images/python/imageP4.png",
desc:"Visor de Imágenes con Navegación por Miniaturas\
Aplicación de escritorio desarrollada en Python utilizando Tkinter, diseñada para visualizar\
 imágenes de forma rápida y organizada mediante un sistema de miniaturas tipo slider.\
El programa permite seleccionar una carpeta que contenga imágenes y generar automáticamente\
una galería interactiva, donde cada imagen se presenta como una miniatura en una barra\
deslizante. Al seleccionar una miniatura, la imagen correspondiente se muestra en un\
\
Tecnologías utilizadas:\
Python\
Tkinter\
Pillow (PIL)\
Threading\
ttkThemes",
link:"images/python/imageP4.png",
download:"https://mega.nz/file/X5VUVTZA#OimqrLDNbNis65to4utHk_hNK5aE8aSchZpJmK6m2jY",
demo:"https://mega.nz/file/uhVzVYzS#zUe74Y6KxoGecTGz5SvDIQCOW2AwS8yb_qix8_DIgIQ"
},
{
title:"Color Picker",
image:"images/python/imageP5.png",
desc:"Color Picker Avanzado – Selector y Conversor de Colores\
Aplicación de escritorio desarrollada en Python con Tkinter, diseñada para la selección\
interactiva de colores y conversión entre distintos modelos de color utilizados en diseño\
gráfico, desarrollo web y procesamiento de imágenes.\
\
El programa proporciona una interfaz visual que permite elegir colores mediante una paleta\
gráfica basada en tono (Hue), saturación y valor, mostrando inmediatamente la conversión\
del color seleccionado en diferentes sistemas de representación.\
\
Tecnologías utilizadas:\
Python\
Tkinter\
ttkThemes\
Pillow (PIL)",
link:"images/python/imageP5.png",
download:"https://mega.nz/file/n5kHBC6Q#BmmLyuZyRPpDICwiiSoYSe126yTqnrZGeXVXf-Zrhsw",
demo:"https://mega.nz/file/egtggCQA#kHVaMQ8-HdSq95v8mBD7cWRPuX0zseOSGLqan9HTY6c"
},
{
title:"Crear Collage \"VIP\"",
image:"images/python/imageP6.png",
desc:"CONCATENANDO IMÁGENES | OpenCV con Python\
¿Cómo concatenar imágenes horizontal y verticalmente con OpenCV?\
\
\nCrear Collage \"VIP\" – Generador Automático de Collages con OpenCV\
Crear Collage \"VIP\" es una aplicación de escritorio desarrollada en Python que permite\
generar collages de imágenes automáticamente a partir de múltiples fotografías\
seleccionadas por el usuario.\
\
La aplicación utiliza OpenCV para procesar y combinar imágenes mediante concatenaciones\
horizontales y verticales, generando distintas composiciones visuales dependiendo de\
la cantidad de imágenes seleccionadas. El sistema organiza las imágenes automáticamente,\
ajustando su tamaño y creando estructuras de collage dinámicas.\
\
El programa está diseñado para trabajar con colecciones de entre 2 y 18 imágenes,\
generando diferentes variantes de composición que el usuario puede visualizar antes\
de guardar el resultado final.\
\
Tecnologías utilizadas\
Python\
OpenCV\
Tkinter\
Imutils\
Pillow (PIL)",
download:"https://mega.nz/file/rodxXI5Y#C9sYTMtxWRMQZHSXDVIufGbCQPBPz8rsovQfjLu3UX8",
demo:"https://mega.nz/file/Hs1HRBLK#HWVqD1TQ36RhEDtBs6o-0b5lReMGC3g1fCzcfIEG9Zk"
},
{
title:"Escaled_Image_v4",
image:"images/python/imageP7.png",
desc:"Redimensionar Imagenes v4 – Herramienta gráfica para edición básica de imágenes\
Aplicación de escritorio desarrollada en Python con interfaz gráfica (Tkinter) que permite\
realizar múltiples operaciones sobre imágenes de forma sencilla. El programa está\
orientado a usuarios que necesitan redimensionar, convertir, editar y procesar imágenes\
rápidamente mediante una interfaz visual y atajos de teclado.\
\
Tecnologías utilizadas:\
Python\
Tkinter (interfaz gráfica)\
OpenCV (procesamiento de imágenes)\
Pillow (manejo de imágenes)\
Rembg (eliminación de fondo)\
Multithreading para algunas tareas de procesamiento\
Características adicionales\
Interfaz con temas visuales personalizables\
Vista previa integrada\
Compatibilidad con empaquetado mediante PyInstaller\
Menú contextual y sistema de atajos de teclado",
link:"images/python/imageP7.png",
download:"https://mega.nz/file/K59hzSoB#C1lD7fJzzuIgKT4ARqUdo8kNyQ21m19yrbpwUNbkbvY",
demo:"https://mega.nz/file/a5VUSCLI#XW0jp34mr50Wodc-3sjRqwPfSdopSOs5XzKrN8LJNe8"
},
{
title:"Color Picker From Image",
image:"images/python/imageP8.png",
desc:"Tomado del Video de la Plataforma en la Pataforma de YouTube\
\
Creado con la Tecnologia de: Tkinter\
Desarrollado en: Python 3.8.3 (En este Ejemplo - Modificado)\
\
Nombre del Video:\
Create Image Color Detection Software with Python _ GUI Tkinter Color Finder Project(480P)\
\
Modificado por: Cristian M. Veliz Cano\
Ejemplo sobre las Librerias: -|colorthief|- y otras Librerias\
Mi aporte es solamente, la Modificación\
\
Con esta Magnifica libreria (colorthief), podremos Obtener una Lista de 10 Opciones para\
poder escoger entre 10 Obciones en Colores, Tomadas desde una Imagen que sea de nuestra\
Preferencia, Pudiendo tener Cualquier Dimención (Tamaño), o Formato de Imagen\
(*.Formato de Imagen).-\
\
Creditos a su o sus DESARROLLADORES Originales",
link:"images/python/imageP8.png",
download:"https://mega.nz/file/CgkSjJoB#OWXTV2xKWDFiCF14RxqcLfm477qk4UQZPbpz6BjknGs",
demo:"https://mega.nz/file/asVkxbKD#HtkEHyHFUlk8FvJ3cOY2xtP5pt7cZpFuzx7cO2G2XIw"
},
{
title:"Slider Image Viewer v6",
image:"images/python/imageP9.png",
desc:"Slider Image Viewer v6 es una aplicación de escritorio desarrollada en Python\
utilizando PyQt5 que permite visualizar colecciones de imágenes como una presentación\
automática (slideshow) con controles manuales y atajos de teclado.\
\
El programa permite cargar múltiples imágenes desde el sistema y reproducirlas de forma\
continua dentro de una interfaz gráfica minimalista, ofreciendo controles para navegar,\
pausar, detener o reproducir la secuencia de imágenes.\
\
Uso del software:\
Abrir una o varias imágenes desde el sistema.\
El visor comenzará a mostrar las imágenes en secuencia.\
Utilizar los botones o atajos de teclado para controlar la reproducción.\
\
Información adicional:\
Aplicación desarrollada con una interfaz minimalista y ligera, ideal para visualizar\
colecciones de imágenes, presentaciones rápidas o galerías personales.",
link:"images/python/imageP9.png",
download:"https://mega.nz/file/ip9UCJLL#N5wYMOtuxwx3SK0Bc4v3SvZa62XzU9OJIMEDMjPZTzA",
demo:"https://mega.nz/file/P8tACILK#AyeRkhdTMwEEFKuWXT5b8ynSJoWu0go6U80WEnntw-g"
},
{
title:"Color Palette Picker – RGB & HEX Viewer",
image:"images/python/imageP10.png",
desc:"Color Palette Picker es una aplicación de escritorio ligera desarrollada en Python\
con Tkinter que permite seleccionar colores mediante un selector gráfico de paletas\
y visualizar automáticamente sus valores en RGB y formato hexadecimal.\
\
La aplicación facilita la obtención rápida de códigos de color para su uso en diseño\
gráfico, desarrollo web o personalización de interfaces.\
\
Uso del programa:\
Ejecutar la aplicación.\
Presionar el botón Seleccionar.\
Elegir un color desde la paleta.\
El programa mostrará automáticamente:\
Valor RGB\
Código HEX\
Vista previa del color seleccionado.",
link:"images/python/imageP10.png",
download:"https://mega.nz/file/W590hRKK#gyFlts2pmPtfwbEsVg5r3G85dM7818GF1fk2YtjHLXI",
demo:"https://mega.nz/file/asVkxbKD#HtkEHyHFUlk8FvJ3cOY2xtP5pt7cZpFuzx7cO2G2XIw"
},
{
title:"Image Editor – Ajuste de Tonalidad, Saturación y Brillo",
image:"images/python/imageP11.png",
desc:"Image Editor – Ajuste de Tonalidad, Saturación y Brillo\
\
Image Editor es una aplicación de escritorio desarrollada en Python con PyQt5\
y OpenCV que permite editar imágenes de forma rápida mediante controles deslizantes\
(sliders) para ajustar propiedades visuales como tonalidad, saturación, brillo y\
escala de grises.\
\
La aplicación ofrece una interfaz gráfica sencilla donde el usuario puede cargar una\
imagen, modificar sus características de color en tiempo real y guardar el resultado final.\
\
Uso del programa:\
Abrir una imagen desde el sistema.\
Ajustar los controles deslizantes para modificar:\
Tonalidad\
Saturación\
Brillo\
Escala de grises\
Visualizar los cambios en tiempo real.\
Guardar la imagen editada en el formato deseado.",
link:"images/python/imageP11.png",
download:"https://mega.nz/file/z0kTWRoY#0Ede6sHczYFayqDdzn6zS5hpOLS3MkppEg0IijEd1CU",
demo:"https://mega.nz/file/6gkEVDRB#A3K6zJHDQVB9GG7wqlmSJdmVOMIh9yMdPzVfEzAKKD0"
},
{
title:"Sistema de Gestión de Clientes",
image:"images/python/imageP12.png",
desc:"Aplicación de escritorio desarrollada en Python con Tkinter y SQLite diseñada para\
administrar clientes, registros de ventas, préstamos de garrafones y créditos dentro\
de una distribuidora de agua purificada.\
\
El sistema proporciona una interfaz gráfica organizada en diferentes secciones que permiten\
registrar, consultar, actualizar y eliminar información de clientes, facilitando la\
gestión de datos de manera rápida y sencilla.\
\
Aplicación:\
Este sistema está pensado para pequeñas empresas o negocios de distribución de agua,\
permitiendo llevar un control básico de clientes y operaciones desde una interfaz sencilla.",
link:"images/python/imageP12.png",
download:"https://mega.nz/file/i9VHGAyJ#IIQkjP11lbnTQYC3WqFeWmERTT_VVi8fjDxDyyxhucQ",
demo:"https://mega.nz/file/W1tXVQrA#BsB1WuCQms9fRLKfc1anrPZ8BbPu8XdaRbape0-ZExk"
},
{
title:"Selected_CV_Creator_V2",
image:"images/python/imageP13.png",
desc:"CV Template Selector – Visualizador y Apertura de Plantillas de Currículum\
Selected CV Creator V2 es una aplicación de escritorio desarrollada en Python con PyQt5\
que permite visualizar y seleccionar plantillas de currículum (CV) a partir de una\
galería de diseños.\
\
El programa muestra una colección de plantillas de currículum en formato de vista\
previa (imágenes) y permite abrir automáticamente el archivo editable correspondiente\
(DOCX) para que el usuario pueda modificarlo en su procesador de texto.\
\
Funcionamiento del programa:\
La aplicación carga todas las plantillas disponibles desde una carpeta local.\
Cada plantilla se muestra como imagen de vista previa.\
El usuario puede navegar entre los diferentes diseños.\
Al seleccionar una plantilla, el programa abre automáticamente el archivo DOCX\
correspondiente para su edición.\
\
Aplicación:\
Esta herramienta es útil para:\
Seleccionar plantillas de currículum profesional\
Crear CV de forma rápida\
Visualizar diseños antes de editarlos\
Sistemas de generación de CV basados en plantillas",
link:"images/python/imageP13.png",
download:"https://mega.nz/file/24NwTZJB#iGBiYVwgCZYX0AqzyXts4XQDBw_zj7r71xOuCn7uerg",
demo:"https://mega.nz/file/Ksl1TICY#_FiSU2QJ56mo5zTMsmgwouGaeoBIZIeR04OgJSgNfeE"
},
{
title:"Login & User Registration System",
image:"images/python/imageP14.png",
desc:"Login & User Registration System – Autenticación con Base de Datos SQLite\
\
Example Login System es una aplicación de escritorio desarrollada en Python con Tkinter\
y SQLite que implementa un sistema completo de autenticación de usuarios, permitiendo\
registro, inicio de sesión y almacenamiento de credenciales en una base de datos local.\
\
El programa crea automáticamente la estructura necesaria para la base de datos y\
proporciona una interfaz gráfica simple donde los usuarios pueden crear cuentas, iniciar\
sesión y validar sus credenciales.\
\
Aplicación:\
Este proyecto es útil como:\
Ejemplo educativo de autenticación de usuarios\
Base para desarrollar sistemas con login\
Aprendizaje de integración entre Tkinter y SQLite\
Prototipo para aplicaciones con control de acceso",
link:"images/python/imageP14.png",
download:"https://mega.nz/file/D10HzKrK#SC-CL0J9kbBlTSygxKO9hA3CCtcUpSlOabOww9kJzM4",
demo:"https://mega.nz/file/escnlIIJ#J2uSU1RJYdqhobCbdhpEl8VuiS89mtJVdJtoby09aU8"
}
],

desktop:[
{
title:"Faro OSINT — Semantic Edition ((v6.1+)+)",
image:"images/desk/imageD1.png",
desc:"👉 Faro OSINT — Semantic Edition ((v6.1+)+)\
Herramienta educativa y de investigación abierta.\
Desarrollada con fines éticos, humanitarios y didácticos.\
Uso y distribución permitidos bajo licencia libre, sin fines de lucro.\
Créditos: Cristian M. Veliz Cano & Asistencia técnica IA (GPT-5)\
\
👉 Faro OSINT — Semantic Edition ((v6.1+)+)\
Educational & Ethical Edition.\
Integrado: Múltiples fuentes públicas.\
Author: Cristian M. Veliz Cano\
Assistant Contributor: GPT-5 (OpenAI)\
License: MIT + Ethical Use Clause\
Version: v5.6+ (Semantic Edition)\
\
👉 Faro OSINT — Semantic Edition ((v6.1+)+)\
- Mejoras añadidas:\
  1) Paralelismo mejorado: ThreadPoolExecutor con límite global configurable.\
  2) Cache de imágenes temporales (temp_images/) con limpieza automática al cerrar.\
  3) Decodificación uddg visible y opción de mostrar URL limpia en la lista\
  (tooltip + opcional mostrar).\
  4) Por hacer mencion de unas Pocas.\
- Fuentes: DuckDuckGo, Reddit (old.reddit), GitHub (scrape publico),\
  StackOverflow (StackExchange API), Wikipedia, Wikidata.\
- Multithreaded (no bloquea UI). Resultados guardados en JSON/CSV.\
- Doble clic copia URL al portapapeles.\
- Autor: Cristian M. Veliz Cano (integración solicitada)\
- Version: v5.6_SemanticEdition",
link:"images/desk/imageD1.png",
download:"#notice",
demo:"https://mega.nz/file/z8MVjKCY#1WJYBle0USIyztCNl8FzpHfTcuHUv0DXHoAB-Am1WUQ"
},
{
title:"MP3_PyQt5_v_22",
image:"images/desk/imageD2.png",
desc:"El soft, es un mero ejemplo para crear, un Bonito Reproductor de medios en Audio,\
Podremos Reproducir medios en MP3 y OGG, Tambien podremos hacer uso de un pequeño metodo,\
con el cual podremos Extraer el Audio, de Cualquier Video, como Tambien tendremos una Serie\
de Atajos en Teclado, que seran de mucha alluda, podremos Invocar la Alluda de las Teclas\
(Atajos en Teclado), con la Letra (K), tambien podremos hacer Uso del Mouse, con Doble\
Clic, y Clic Normal para Pausar la Reproducción, Tambien tendremos Acceso a Una Lista\
de los Medios, con la cual con solo Darle Clic Normal sobre, el Medio Escogido, podremos\
Reproducirlo Inmediatamente, y no Inportando si esta en Reproducción, Aleatoria o Normal,\
tambien podremos Expandir o Contraer esta Pequeña Lista, Emergente, con Clic Derecho en\
el Moue, Accedemos a un Menú con el cual podremos hacer uso de la Variedad de Opciones\
que en el se Encuentra, tambien contamos con una Base de Datos para que no tengamos que\
estar escogiendo, cada que Innicializemos el Reproductor, pero lo Normal Ubiere sido que\
esta base de datos se uviere echo en el Directorio Raiz de la App; pero en su contra se\
decidio por crear la Base de Datos, Donde se desee, es decir, es como crear una Lista de\
Reproducción, por cada base de datos.",
link:"images/desk/imageD2.png",
download:"https://mega.nz/file/uhEiiaRJ#063Bq6Ng1CFEJoARWLodbkRG1OTinwZ8BXgG74ZG_5Q",
demo:"https://mega.nz/file/OglT1I6T#3_1nG3NIn6E6IMvI7rQIfH1gCVLedVg2EttP6u-LrM4"
},
{
title:"Python Printer",
image:"images/desk/imageD3.png",
desc:"El soft esta enfocado en poder tener una serie de Erramientas practicas a poder\
ser utilizadas dentro del Día a Día, ya sea por cuestion Laboral, o por Estudio, o por\
el simple echo en que necesites si o si, realizar algo.\
\
Con este Soft, podremos realizar por poner un Ejemplo Casi Amplio:\
Podremos: Exportar a Texto Plano lo que le Ingresemos a la caja de Texto\
Podremos: Exportar a PDF lo que le Ingresemos a la caja de Texto\
Podremos: Exportar a DOCX lo que le Ingresemos a la caja de Texto\
Podremos: O simplemente Inprimir el texto que le Ingresemos a la caja de Texto\
Podremos: Buscar y Traducir Texto desde wikipedia la Enciclopedia Libre, o Solamente\
Traducir algun\
Texto que deseemos desde cualquier Idioma, a, Cualquier Idioma, que sea de nuestra\
Necesidad\
Podremos: Hacer uso de Py-Tesseract, que nos cervira para Extraer cualquier Texto de\
Cualquier Imagen.-\
Podremos: Hacer uso de una Cierta cantidad de Opciones, para como ya lo mencionabamos\
con anterioridad ya sea con fines de, Estudio, o con fines Laborales, o simplemente por\
Osio.",
link:"images/desk/imageD3.png",
download:"https://mega.nz/file/71FizLaK#QtioFDsswgbJy1tj_GqcoPqh-uTbRjytQ3-MRVgmax8",
demo:"https://mega.nz/folder/Ds9ggA4I#3bGuiB8wHY2WqVPHDNCkMA"
},
{
title:"Editor de Video",
image:"images/desk/imageD4.png",
desc:"moviepy: Editar vídeo con Python\
Seguramente alguna vez habrás editado un vídeo usando una aplicación como Vegas,\
After Effects o Premiere, pero ¿y si te digo que también se puede editar vídeo con\
Python?. La librería moviepy nos permite cortar, unir, rotar y mucho más. Se trata\
de un paquete open source para Python, y que por supuesto es compatible con Linux,\
macOS y Windows. A continuación te enseño sus posibilidades, a manera de Ejemplo.\
Lo primero de todo, deberás instalar el paquete. Si ya tienes pip instalado, llama el\
siguiente comando en el terminal.\
pip install moviepy\
Vale, ya tenemos el paquete instalado, empecemos a usarlo. La mayoría de funcionalidades\
de moviepy, giran en torno a la clase VideoFileClip y AudioFileClip. La primera permite\
trabajar con vídeo y la segunda con audio.\
Importa el paquete.\
\
from moviepy.editor import *\
Abre un video que tengas\
video = VideoFileClip(\"video_ejemplo.mp4\")\
Una vez hemos abierto el vídeo, ya lo tenemos en video almacenado y podemos\
empezar a hacer cosas con el. A continuación te enseño.\
Rotar vídeo:\
Si llamamos al método rotate() y le pasamos un número como entrada con los grados\
que queremos rotar el vídeo, nos devolverá un VideoFileClip rotado. Si queremos\
guardar el vídeo tan solo hay que llamar a write_videofile() y decirle el nombre que\
queremos, Super Simple, Verdad?...",
link:"Media Player (V.I.P.v34)",
download:"#notice",
demo:"https://mega.nz/file/68MVSZjA#WlsQDteFjF89zabe-GbG-ZZDtpeBt3x7kF2kE_UweKo"
},
{
title:"Media Player (V.I.P.v34)",
image:"images/desk/imageD5.png",
desc:"Esté Soft, es un Mero Ejemplo, para Crear un Bonito y Divertido, Reproductor de\
Medios, ya Sean, Medios en Audio o Midos de Video siendo esta la Lista de Medios, con\
los que podran  ser Reproducidos:\
(\"mp4\"), (\"mp4v\"), (\"mkv\"), (avi\"), (avf\"), (divx\"), (flv\"), (mpg\"), (m4a\"),\
(wmv\"),(rmvb\"), (gif\"), En Video y (wap\"), (webm\"), (cda\"), (flac\"), (mp3\"),\
para Audio, Tambien cuenta con Un Menú bastante Robusto, hasi como con Atajos de Teclado,\
y Tambien podremos hacer uso del Mouse, en distintas Formas, cuenta con una, pequeña Lista\
(Emergente), para los Medios Agregados para su Reproducción, hasi como tambien, podremos\
Agregar Medios, y Agregar Medios con solamente Arrastrar y Soltar,  No Inportando la\
Cantidad de Medios, que Deseemos, cuenta con una Pequeña Base de Datos, para no estar\
Escogiendo los Medios cada que Iniciemos, el Soft, y con este soft, si Podremos Cambiar\
de lista de Medios, es decir, que podremos Cambiar de Base de Datos, tantas Beces Querramos,\
pues sus Hermanos los Reproductores, de Audio Solamente (MP3_PySide2_v_15) y\
(MP3_PyQt5_v_15), estos no pueden hacer, el soft obedece a una Cantidad, considerable\
de Opciónes, para su Reproducción, Aparte que nos da una pequeña, Información sobre el\
Medio, si en caso la Tubiera el Medio, con solamente precionar la tecla en el Teclado\
Númerico, Número 5, Podremos Expandir la Pantalla a Tamaño Completo con Doble Clic o\
con la tecla F11, y podria seguir, mencionando lo mucho o poco que puede hacer pero no\
es el Caso, Espero sea de su Agrado.",
link:"images/desk/imageD5.png",
download:"https://mega.nz/file/7wlSHbiB#KgNCym2ldTtCjvkQw7kiNP-g0Npc9HLXq-O0nKl5Bhk",
demo:"https://mega.nz/folder/30EyATwZ#Gk2eDkueLsemyraGCHstPg"
},
{
title:"Bakup_All_files_PyQt5",
image:"images/desk/imageD6.png",
desc:"Para: Crear un Bakup de nuestros Archivos Importantes y Poder Recuperarlos luego ya\
siendo de Uno en Uno O Todos Juntos. Base de Datos creada en: SQlite3, pero es aplicable a\
MySQL Siempre con ligeros Cambios en los Lenguajes MySQL y SQLite3 Leguage de Programación\
en: PYTHON 3.8.3 Enpaquetado con: Auto-Py-To-Exe.exe En la Tecnologia de: PyQt5\
Uso de la Base de Datos que se Escoge: PORTATIVILIDAD, ESTAVILIDAD, CONFIANZA, ENTRE MUCHOS\
OTROS MAS.\
Extra: La base de datos que se escogio, tambien es porque esta no NECESITA de ningun\
SOFT-WARE, ajeno es decir por Portativilidad, y que no Requiere de Nada, se Opta Por\
SQLite3.-\
\
Con esta Obción podremos, Tambien Crearlos donde los Necesitemos y podemos Recuperarlos\
en el momento, que lo Deseemos, y en el Directorio que Deseemos, de Uno en Uno O Todos\
Juntos, Como lo Muestra el Ejemplo de Acontinuación,.-",
link:"images/desk/imageD6.png",
download:"#notice",
demo:"https://mega.nz/file/L1tlXQaA#dRJi4YsV874CsVTYQRCvzSAYk0k9qoOluD3BU0X6bVM"
},
{
title:"Sistema de Vigilancia_(V.I.P.)-(x64)",
image:"images/desk/imageD7.png",
desc:"Este Pequeños Proyecto Comenzo, como algo más simple de lo que es ahora, pero con\
el pasar de ciertas circunstancias esté Pequeños Proyecto a ido agarrando Fuerza, ahora\
despues de ser para algo mucho mas simple, pasar a ser Ejemplo de como crear un Mini\
Proyecto de Vigilancia, este a estado Agarrando Fuerza, hasta lo que va ciendo ahora, pues\
ahora con este, no solo es un Mero ejemplo de como Crear un Proyecto de Vigilancia, en\
Vajos Recursos, si no que a su vez está agarrando Fuerza, pues ahora podemos integrar\
Varias Camaras (6) a la Vez, y no solo eso, si no que Podremos hacer uso de un Telefono\
Celular, para podernos dar apollo, para con lo de las Camaras, no Obstante, Este, Proyecto\
Promete Comvertirse en algo mucho más Grande, Pues una vez ya podemos accesar a las camaras\
con la Libreria de Open CV, siendo esta (CV2), con esta Podremos Manipular la Imagen a\
nuestro entero Gusto y Gana.",
link:"images/desk/imageD7.png",
download:"https://mega.nz/file/bhVRBL6b#FaDMVMBA3Q7DRA_7DOdf3RoYzyckzn8JsPl2g_qZ_Us",
demo:"https://mega.nz/folder/a9swmbjb#ojOykWNQdYl3qeuWiUD0Mg"
},
{
title:"Scraper YouTube",
image:"images/desk/imageD8.png",
desc:"Nombre del Soft: \"YouTube Scraper Engine – Buscador Avanzado de Videos y Playlists\
con Interfaz Moderna.\
\
YouTube Scraper Engine es una aplicación de escritorio desarrollada en Python con PyQt5\
que permite buscar y recopilar resultados de videos y playlists de YouTube mediante un\
motor de scraping optimizado con consultas semánticas expandibles.\
\
La aplicación ofrece una interfaz moderna e interactiva donde el usuario puede introducir\
consultas de búsqueda, obtener resultados rápidamente y abrir directamente los enlaces\
encontrados en el navegador.\
\
Aplicación:\
Este software puede utilizarse para:\
Investigación de contenido en YouTube\
Recopilación de videos por palabras clave\
Descubrimiento de playlists relacionadas\
Automatización de búsquedas de contenido",
link:"images/desk/imageD8.png",
download:"#notice",
demo:"https://mega.nz/file/T4kW1JCS#5yLvV1M9VB85zYutOJO9J2-_v04s9NODG_qQRVRcJZw"
},
{
title:"MP3 Music Player",
image:"images/desk/imageD9.png",
desc:"Autor: Alguien (Desconozco su Autor Real) - (Ami solo me lo pasaron y ver si lo\
Podria Mejorar)\
Mi Aporte: Solamente la Modificación en un 95% del Ejemplo Razón del Soft: Ejemplo en\
como realizar Otra Forma de Reroductor de Audio - Estruckturado con una Logica un poco\
más complicada, para poder realizar Otros Soft´s mas Elavorados, en los Cuales Tengamos\
la Necesidad de Utilizar Metodos y Sub-Metodos, es decir Metodos dentro de Metodos,\
Y que se puedan Comunicar Entre si, Siendo Semi-Independietes una de Otra (Ventana)\
Pero Totalmente Ovedientes a la Ventana (Padre) - (Dependientes De)\
\
Soft: Desarrollado para Muestra en como Utilizar una Sub-Ventana que sea Dependiente de\
la Ventana Padre Pero a la Vez que sea Semi-Independiente (Autonoma pero a la vez NO)\
Modificado por: Cristian M. Veliz C.\
Distribución: Gratuita\
Vajo las Licencias: Open-Source y Free-Code",
link:"images/desk/imageD9.png",
download:"https://mega.nz/file/25MFwJQI#urNr7aymF4S80jRN7V_Bgo47YH2Q7-NSJu6BR-QpX7M",
demo:"https://mega.nz/file/G1ElkISZ#g3DxqkRoIHV_QkxshvRWIBmJQOyeQ3Atn_9KlrNTwnw"
},
{
title:"Nombre del Soft: Traductor PyQt5",
image:"images/desk/imageD10.png",
desc:"Con este Soft podremos traducir Texto Completo: Podremos pegar y traducir bloques\
de texto largos o frases cortas al instante, sin complicaciones.  Traducir entre Cientos\
de Idiomas: Podremos trabajar con una lista amplia de idiomas, desde los más comunes como\
inglés, español o chino, hasta otros menos habituales, cubriendo casi cualquier necesidad\
de traducción.  Interfaz Rápida y Sin Interrupciones: El soft está diseñado para que la\
traducción se realice en segundo plano, permitiéndote seguir trabajando o usando otras\
aplicaciones mientras el proceso se completa, sin que el programa se bloquee.  Guardar y\
Compartir Traducciones: Una vez obtenida la traducción, podremos exportarla fácilmente a\
un archivo de Texto Plano (.TXT) o a un PDF para guardarlo, enviarlo por correo o imprimirlo.\
Personalización a tu Gusto: Podremos cambiar el tipo y el tamaño de la letra para que la\
lectura del texto sea más cómoda, adaptándose a tus preferencias visuales.  Motor de\
Traducción Estable: A diferencia de otras herramientas que fallan constantemente, este\
soft utiliza un motor de traducción robusto y probado, asegurando que funcione cuando\
más lo necesites.  En resumen, es una solución completa y moderna para la traducción,\
ideal para profesionales, estudiantes, viajeros o cualquiera que necesite una herramienta\
de idiomas que simplemente funcione y funcione bien.-",
link:"images/desk/imageD10.png",
download:"#notice",
demo:"https://mega.nz/file/Sll0UBQR#usyQR4WrXiEnd5Qo4-DSemaKihUFmfGH1QXjDGnkNBM"
},
{
title:"Sentinel Web OSINT",
image:"images/desk/imageD11.png",
desc:"📌 Extractor Profesional de Datos Web OSINT\
\
Este módulo ha sido desarrollado como una herramienta especializada de extracción de\
información pública desde páginas web, enfocada en la estabilidad, el rendimiento y la\
recolección ética de datos abiertos (OSINT).\
\
Su propósito principal es obtener contenido estructurado directamente desde sitios web\
de forma segura y controlada, resolviendo uno de los problemas más comunes en aplicaciones\
de scraping: los bloqueos de interfaz, los cierres inesperados y la pérdida de datos durante\
procesos largos de extracción.\
\
A diferencia de implementaciones tradicionales, este extractor utiliza una arquitectura\
avanzada basada en hilos independientes, donde la interfaz gráfica supervisa el proceso sin\
interrumpirlo, garantizando que la aplicación permanezca siempre estable y responsiva.",
link:"images/desk/imageD11.png",
download:"#notice",
demo:"https://mega.nz/file/mg1ynbjY#yK9r1i99aYX9Yj4oZFfAJMm1SRl3X4m-861k7x-98YQ"
},
{
title:"Image to PDF A4 y Later",
image:"images/desk/imageD12.png",
desc:"Para: Crear PDF´s desde cualquier Cant. de Imagenes, o Extraerlas de cualquier PDF´s,\
Tambien cuenta con un Visor para PDF´s, si en caso no se contara con uno, neto en el sistema,\
Cabe resaltar que este Visor de PDF´s, es Pequeño y Cimple, no Soporta, PDF´s Demaciado,\
Complejos, es mas vien solamente para ver si nuestra Imagen o Nuestras Imagens Quedaron Bien,\
o No.-\
\
Tambien se ha agregado a esta Verción V-11, el poder Quitar el Fondo de Cuantas iMAGENES\
nosotros Querramos, y aparte tambien se le da otro atributo a las Imagenes, que es \
el poder colocarle un Sello de Agua, es decir, poder colocarle un Nombre o alguna TAG.\
para que esta sea Ahun Mejor Reconocible.-",
link:"images/desk/imageD12.png",
download:"#notice",
demo:"https://mega.nz/file/r4MHlJpJ#wiB3JM1OLWaRdVVm_R-uXRvDUi05t00BukqyXkwOoBc"
},
{
title:"Traductor Binario ↔ Texto",
image:"images/desk/imageD13.png",
desc:"Traductor Binario ↔ Texto – Editor y Conversor con Interfaz Gráfica\
\
Traductor Binario ↔ Texto es una aplicación de escritorio desarrollada en Python con\
Tkinter que permite convertir texto normal a código binario y viceversa de manera\
rápida e intuitiva.\
\
El software funciona como un pequeño editor de texto avanzado, integrando herramientas\
de manipulación de archivos, personalización visual, exportación a PDF e impresión directa.\
\
Este programa puede utilizarse para:\
Aprender cómo funciona la codificación binaria\
Convertir textos a su representación en binario\
Decodificar mensajes binarios\
Trabajar con archivos de texto y exportarlos a PDF",
link:"images/desk/imageD13.png",
download:"#notice",
demo:"https://mega.nz/file/PtMilZAA#WmyJz6GAPUwZE6-Z6ZU8v72GzbhTa0W71egk5ChAyPw"
},
{
title:"Pohoto Editor Qt5 y CV2_v8",
image:"images/desk/imageD14.png",
desc:"Advanced Computer Vision Studio – Image & Video Processing Toolkit (OpenCV + PyQt)\
\
Aplicación de escritorio desarrollada en Python con PyQt5 y OpenCV que funciona como un\
laboratorio completo de procesamiento de imágenes y video en tiempo real.\
\
El software permite cargar imágenes, capturar fotografías, procesar video desde cámara o\
archivos, aplicar filtros avanzados y experimentar con técnicas de visión por computadora\
desde una interfaz gráfica interactiva.\
\
Uso del proyecto:\
Este software funciona como un entorno experimental para aprendizaje y desarrollo\
en visión por computadora, permitiendo explorar múltiples técnicas de procesamiento\
digital de imágenes y video desde una única interfaz.",
link:"images/desk/imageD14.png",
download:"https://mega.nz/file/Cg8iQBBT#qJRT18S63sCPl-7zGzjraqT40zA4eAVRepxK13T5Ar4",
demo:"https://mega.nz/folder/X0dD0CKQ#rLFGgblZwgRJQR70bl3Z9A"
},
{
title:"QR & Barcode Toolkit",
image:"images/desk/imageD15.png",
desc:"QR & Barcode Toolkit – Scanner, Generator and Steganography Utility\
Aplicación de escritorio desarrollada en Python con Tkinter y OpenCV que funciona como una\
herramienta completa para trabajar con códigos QR, códigos de barras y ocultación de\
mensajes en imágenes.\
\
El software permite crear, leer y gestionar códigos QR y BarCode, además de incluir\
funciones avanzadas como lectura desde cámara en tiempo real, captura de fotografías y\
esteganografía para ocultar mensajes dentro de imágenes.\
\
Funcionalidades principales\
Lectura y generación de códigos\
\
Este software fue desarrollado como una herramienta multifuncional para el manejo de\
códigos QR y códigos de barras, combinando capacidades de visión por computadora,\
generación de códigos y técnicas básicas de esteganografía dentro de una única aplicación\
de escritorio.",
link:"images/desk/imageD15.png",
download:"#notice",
demo:"https://mega.nz/file/axUmWYzQ#JvGTw41HpoWMU3HTIUQHDhurmaOMnXM9_GQkK-IHCQI"
},
{
title:"Enúmerar Archivos v_1",
image:"images/desk/imageD16.png",
desc:"Renombrador de archivos por lotes: herramienta de enumeración automática de archivos\
Aplicación de escritorio desarrollada en Python con CustomTkinter que permite renombrar\
múltiples archivos de forma automática dentro de una carpeta, agregando una numeración\
secuencial al inicio o al final del nombre de cada archivo.\
\
El programa facilita la organización masiva de archivos, permitiendo seleccionar una\
carpeta, definir el número inicial de la numeración y aplicar el renombrado de forma\
automática a todos los archivos contenidos en ella.",
link:"images/desk/imageD16.png",
download:"https://mega.nz/file/aoU3kYzR#cJ9JRATHvJzuwEFb_avQBED51aaYecvgSs2Ggrp1TSk",
demo:"https://mega.nz/file/D08lERrJ#igwlXh5NW486KfmZB2YLugzpYbE-KK_wKSmToPpJChs"
},
{
title:"Listar Archivos v_2",
image:"images/desk/imageD17.png",
desc:"File List Generator – Selected Files Inventory Tool\
Aplicación de escritorio desarrollada en Python con CustomTkinter que permite seleccionar\
múltiples archivos desde el sistema y generar automáticamente una lista organizada de sus\
nombres, guardándola en un archivo de texto.\
\
El programa facilita la creación rápida de inventarios de archivos, permitiendo al usuario\
seleccionar uno o varios archivos mediante un cuadro de diálogo y exportar la lista enumerada\
para su uso en documentación, control de archivos o registro de contenido.",
link:"images/desk/imageD17.png",
download:"https://mega.nz/file/XxNgkLKL#1tFu8wgMsbUPdvSHy9I6__KMRRc-6hXMWXwYZDwGqKY",
demo:"https://mega.nz/file/6pVyAL6R#1SqGDoOg8-AoCX4W0Qgx7TLZMSZeMXG5MzLqCxAUIAo"
},
{
title:"Open PDF´s (Alternative)_v0.2",
image:"images/desk/imageD18.png",
desc:"Open PDF Alternative – Lightweight Document Launcher with Page Control\
Aplicación de escritorio desarrollada en Python con CustomTkinter que funciona como un\
lanzador alternativo de documentos, permitiendo abrir archivos PDF y otros formatos\
compatibles utilizando SumatraPDF como motor de visualización.\
\
El programa permite seleccionar un documento desde el sistema y abrirlo directamente en\
una página específica, facilitando el acceso rápido a contenidos largos o documentos\
técnicos.\
\
Uso del software:\
Esta herramienta funciona como un acceso rápido para abrir documentos y comenzar la lectura\
en la página deseada, ideal para:",
link:"images/desk/imageD18.png",
download:"https://mega.nz/file/79sQFZDK#pG5fCAJDNY6lYAYHxsPZPKC0G4UMic4u1-VcGJCKa4M",
demo:"https://mega.nz/file/rsskFYIb#HsqLOP8aMOTEdFULIA4BYjveQkrmWbpZaYIo7GDvS9I"
}
],

web:[
{
title:"AUDIOCONVERT WEB - CONVERTIDOR MP4 A MP3",
image:"images/web/imgeW1.png",
desc:"AudioConvert Web es una aplicación web ligera que permite convertir archivos de video (MP4 y otros formatos compatibles) a audio MP3.",
link:"https://github.com/Speedtige",
download:"https://github.com/Speedtige/AUDIOCONVERT-WEB---CONVERTIDOR-MP4-A-MP3",
demo:"https://speedtige.github.io/AUDIOCONVERT-WEB---CONVERTIDOR-MP4-A-MP3/"
},
{
title:"Lector de PDFs 2026",
image:"images/web/imgeW2.png",
desc:"Cargar y visualizar archivos PDF directamente desde el navegador.\
Navegar entre las páginas del documento.\
Buscar palabras o frases específicas dentro del PDF.\
Cambiar entre un tema visual claro y oscuro.\
Disfrutar de un diseño que se adapta a tu ordenador o a tu móvil.\
E intercambiar de archivos PDF, Limpiamos, y Listo, podremos cambiar, a Otro Archivo PDF.",
link:"https://github.com/Speedtige",
download:"https://github.com/Speedtige/Lectorr-Para-PDF-s",
demo:"https://speedtige.github.io/Lectorr-Para-PDF-s/"
},
{
title:"NotePad-VIP Web",
image:"images/web/imgeW3.png",
desc:"🎯 Este software es una herramienta de edición de texto ligera, rápida y personalizable, pensada para el uso profesional y personal en el día a día.",
link:"https://github.com/Speedtige",
download:"https://github.com/Speedtige/NotePad-VIP-Web",
demo:"https://speedtige.github.io/NotePad-VIP-Web/"
},
{
title:"Pedidos Del Día",
image:"images/web/imgeW4.png",
desc:"Esta aplicación web es un sistema de gestión de pedidos diario, ligero y\
autónomo. Está diseñada para registrar, consultar, editar y eliminar pedidos\
de forma organizada por fechas, utilizando el almacenamiento local del\
navegador (localStorage) para garantizar la privacidad y el funcionamiento\
sin necesidad de un servidor o base de datos externa.",
link:"https://github.com/Speedtige",
download:"https://github.com/Speedtige/PEDIDOS-DEL-D-A",
demo:"https://speedtige.github.io/PEDIDOS-DEL-D-A/"
},
{
title:"QRTOOL WEB - GENERADOR Y ESCÁNER QR",
image:"images/web/imgeW5.png",
desc:"QRTool Web es una aplicación web ligera y autónoma que permite generar y\
escanear códigos QR directamente desde el navegador, sin necesidad de\
instalaciones adicionales ni servidores externos.\
\
El sistema está diseñado para funcionar completamente del lado del cliente\
(Client-Side), garantizando privacidad, portabilidad y compatibilidad con\
plataformas estáticas como GitHub Pages.",
link:"https://github.com/Speedtige",
download:"https://github.com/Speedtige/Generador-y-Esc-ner-QR-v3",
demo:"https://speedtige.github.io/Generador-y-Esc-ner-QR-v3/"
},
{
title:"MusicFlow",
image:"images/web/imgeW6.png",
desc:"Reproductor de música moderno basado en tecnologías web\
que permite reproducir archivos de audio directamente\
desde el navegador sin necesidad de instalar software.\
\
Diseñado con una interfaz visual elegante inspirada en\
reproductores modernos y con animación de vinilo.",
link:"https://github.com/Speedtige",
download:"https://github.com/Speedtige/MusicFlow",
demo:"https://speedtige.github.io/MusicFlow/"
},
{
title:"Reproductor Multimedia Local",
image:"images/web/imgeW7.png",
desc:"Reproductor multimedia local desarrollado en HTML5,\
 CSS y JavaScript, diseñado para reproducir archivos\
 de audio y video de forma local, sin conexión a Internet.\
 Soporta listas de reproducción, modo shuffle, repeat,\
 control de velocidad, temas visuales y funcionamiento\
 portable mediante integración con Python (PyWebView).",
link:"https://github.com/Speedtige",
download:"https://github.com/Speedtige/Rep_Web_Movil-HTML",
demo:"https://speedtige.github.io/Rep_Web_Movil-HTML/"
},
{
title:"Slider de Imágenes Local – HTML5",
image:"images/web/imgeW8.png",
desc:"Aplicación Open-Source desarrollada con tecnologías web\
 (HTML5, CSS y JavaScript) para la visualización de\
 imágenes locales en modo slider, sin necesidad de\
 conexión a Internet.\
\
 Permite cargar imágenes desde cualquier directorio,\
 gestionar una playlist visual, activar modo automático,\
 modo aleatorio (shuffle), pantalla completa, temas\
 claro/oscuro y control completo desde una interfaz\
 moderna y ligera.\
\
 Diseñado para funcionar de manera portable y ser\
 integrado con Python mediante PyWebView o PyInstaller.",
link:"https://github.com/Speedtige",
download:"https://github.com/Speedtige/Slider-Movil-HTML",
demo:"https://speedtige.github.io/Slider-Movil-HTML/"
},
{
title:"Sopa de Letras v2 - WEB",
image:"images/web/imgeW9.png",
desc:"Pequeño Juego: Sopa de Letras_v1, (Para: Movil o PC)",
link:"https://github.com/Speedtige",
download:"https://github.com/Speedtige/Sopa-de-Letras-WEB",
demo:"https://speedtige.github.io/Sopa-de-Letras-WEB/"
},
{
title:"JUEGO DE TETRIS - VERSIÓN 0.1",
image:"images/web/imgeW10.png",
desc:"Implementación clásica del juego Tetris con interfaz, controles fluidos.\
* Incluye sistema de puntuación, niveles progresivos y efectos visuales.\
\
Características principales:\
7 tetrominós clásicos (I, O, T, S, Z, J, L)\
Sistema de rotación con wall kick\
Modo de juego individual con puntuación alta\
Interfaz responsive y controles personalizables\
Solo Moviles - No es Compatible con PC\
Diseño y experiencia de usuario están optimizados exclusivamente para pantallas móviles",
link:"https://github.com/Speedtige",
download:"https://github.com/Speedtige/TETRIS-WEB-MOVIL",
demo:"https://speedtige.github.io/TETRIS-WEB-MOVIL/"
},
{
title:"Traductor-VIP Web",
image:"images/web/imgeW11.png",
desc:"Este software es una herramienta de traducción de idiomas potente, rápida y fiable, pensada para el uso profesional y personal en el día a día.\
Con este software podremos:\
Traducir texto completo.\
Trabajar con una amplia lista de idiomas.\
Exportar traducciones a archivos TXT o PDF.\
Personalizar el tipo y tamaño de letra.\
Utilizar un motor de traducción estable y probado (Google Translate).",
link:"https://github.com/Speedtige",
download:"https://github.com/Speedtige/Traductor-VIP-Web",
demo:"https://speedtige.github.io/Traductor-VIP-Web/"
},
{
title:"Image Tools Web Suite",
image:"images/web/imgeW12.png",
desc:"Aplicación web moderna para el procesamiento de imágenes\
directamente desde el navegador sin necesidad de instalar\
software adicional.\
\
Funciones principales:\
\
✔ Redimensionar imágenes manteniendo proporción\
✔ Convertir formatos (PNG, JPG, WEBP)\
✔ Control de calidad de compresión\
✔ Quita el Fondo de Culquier Imagen con la API-KEY de Remove Image Background\
✔ Pede Rotar la Imagen a Gusto\
✔ Tambien Control de Contraste, Vrillo, Calor, Grises, Etc.\
✔ Vista previa interactiva\
✔ Mezcla de imágenes (foreground / background)\
✔ Arrastre de imagen frontal dentro del canvas\
✔ Descarga directa de resultados",
link:"https://github.com/Speedtige",
download:"https://github.com/Speedtige/Image-Tools-Web-Suite",
demo:"https://speedtige.github.io/Escaled_Image_WEB_v7-Movil---Sin-API-KEY/"
}
]

};

function renderProjects(category, id) {
    const container = document.getElementById(id);
    container.innerHTML = "";

    projects[category].forEach(p => {
        const card = document.createElement("div");
        card.className = "project-card";

        /* Detectar si el link es aviso */
        let openButton = "";

        if (p.link === "#notice") {
            openButton = `<button class="project-link" onclick="openNotice()">Info_Soft</button>`;
        } else {
            openButton = `<a class="project-link" href="${p.link}" target="_blank">Open</a>`;
        }

        // Determinar el comportamiento del botón "View Demo" según la categoría
        let demoButton = "";
        
        if (category === "web") {
            // Para proyectos web, mantener el comportamiento original de abrir la demo
            demoButton = `<button class="project-demo" onclick="openDemo('${p.demo}')">View Demo</button>`;
        } else {
            // Para proyectos de Python y Desktop, mostrar información del proyecto
            demoButton = `<button class="project-info" onclick="openProjectInfo(${JSON.stringify(p).replace(/"/g, '&quot;')}, '${category}')">Project Info</button>`;
        }

        // Crear los botones de descarga y GitHub para Python y Desktop
        let buttons = "";

        if (category === "web") {

            buttons = `
                ${openButton}
                <a class="project-download" href="${p.download}" target="_blank">Download</a>
                <button class="project-demo" onclick="openDemo('${p.demo}')">Demo</button>
            `;

        } else {

            const githubLink = "https://github.com/Speedtige";

            buttons = `
                <a class="project-link" href="${githubLink}" target="_blank">Open GH</a>
                <button class="project-info" onclick="openProjectInfo(${JSON.stringify(p).replace(/"/g, '&quot;')}, '${category}')">Project Info</button>
            `;

        }

        card.innerHTML = `
            <img src="${p.image}" onclick="openImage('${p.image}')">
            <div class="project-title">${p.title}</div>
            <div class="project-desc">${p.desc}</div>
            <div class="project-buttons">
                ${buttons}
            </div>
        `;

        container.appendChild(card);
    });
}

renderProjects("python","pythonProjects");
renderProjects("desktop","desktopProjects");
renderProjects("web","webProjects");

const tabs=document.querySelectorAll(".tab");
const contents=document.querySelectorAll(".tab-content");

tabs.forEach(tab=>{

tab.addEventListener("click",()=>{

tabs.forEach(t=>t.classList.remove("active"));
contents.forEach(c=>c.classList.remove("active"));

tab.classList.add("active");

document.getElementById(tab.dataset.tab).classList.add("active");

const backgrounds = {

python:"images/images_fondo/fondo1.jpg",
desktop:"images/images_fondo/fondo2.jpg",
web:"images/images_fondo/fondo3.jpg",
about:"images/images_fondo/fondo4.jpg"

};

document.body.style.backgroundImage =
`url('${backgrounds[tab.dataset.tab]}')`;

});

});

function openDemo(url){

if(!url || url === "#" || url === "#notice"){
openNotice();
return;
}

const modal = document.getElementById("demoModal");
const frame = document.getElementById("demoFrame");
const urlBar = document.getElementById("demoURL");

frame.src = url;
urlBar.textContent = "🌐 " + url;

modal.style.display = "flex";

}

function closeDemo(){

const modal = document.getElementById("demoModal");
const frame = document.getElementById("demoFrame");

modal.style.display = "none";

frame.src = "";

}

function openImage(src){

const modal = document.getElementById("imageModal");
const img = document.getElementById("previewImage");

img.src = src;

modal.style.display = "flex";

modal.onclick = function(e){

if(e.target === modal){

closeImage();

}

};

}

function closeImage(){

const modal = document.getElementById("imageModal");

modal.style.display = "none";

}

function openNotice(){

document.getElementById("projectInfoModal").style.display = "none";

document.getElementById("noticeModal").style.display = "flex";

}

function closeNotice(){

document.getElementById("noticeModal").style.display = "none";

}

function openProjectInfo(project, category) {

    const modal = document.getElementById("projectInfoModal");

    const modalContent = document.createElement("div");
    modalContent.className = "project-info-content";

    const closeButton = document.createElement("span");
    closeButton.className = "project-info-close";
    closeButton.textContent = "✖";
    closeButton.onclick = closeProjectInfo;

    const title = document.createElement("h2");
    title.textContent = project.title;

    const infoDiv = document.createElement("div");
    infoDiv.className = "modal-body";

    infoDiv.innerHTML = `
        <p><strong>Nombre del Soft:</strong> ${project.title}</p>
        <p>${project.desc}</p>        
        <hr>

        <p><b>Características principales:</b></p>

        <ul>
            <li>Interfaz intuitiva y fácil de usar</li>
            <li>Funcionalidades optimizadas</li>
            <li>Compatible con múltiples sistemas</li>
            <li>Actualizaciones periódicas</li>
        </ul>
        <hr>
    `;

    const buttons = document.createElement("div");
    buttons.className = "modal-downloads";

    let sourceButton = "";
    let exeButton = "";

    /* SOURCE CODE */

    if (!project.download || project.download === "#" || project.download === "#notice") {

    sourceButton = `
    <button class="project-download" onclick="openNotice()">
    Download Source Code
    </button>
    `;

    } else {

    sourceButton = `
    <a class="project-download" href="${project.download}" target="_blank">
    Download Source Code
    </a>
    `;

    }

    /* EXE */

    if (!project.demo || project.demo === "#" || project.demo === "#notice") {

    exeButton = `
    <button class="project-download" onclick="openNotice()">
    Download .exe
    </button>
    `;

    } else {

    exeButton = `
    <a class="project-download" href="${project.demo}" target="_blank">
    Download .exe
    </a>
    `;

    }

    buttons.innerHTML = `
    ${sourceButton}
    ${exeButton}
    `;

    modalContent.appendChild(closeButton);
    modalContent.appendChild(title);
    modalContent.appendChild(infoDiv);
    modalContent.appendChild(buttons);

    modal.innerHTML = "";
    modal.appendChild(modalContent);

    modal.style.display = "flex";
}

function closeProjectInfo() {
    document.getElementById("projectInfoModal").style.display = "none";
}

// Añade este código al final de tu archivo script.js
document.addEventListener('DOMContentLoaded', function() {
    const projectInfoModal = document.getElementById("projectInfoModal");
    
    projectInfoModal.onclick = function(e) {
        if (e.target === projectInfoModal) {
            closeProjectInfo();
        }
    };
});

document.body.style.backgroundImage =
"url('images/images_fondo/fondo1.jpg')";
