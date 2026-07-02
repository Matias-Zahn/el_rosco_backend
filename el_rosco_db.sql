-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 02-07-2026 a las 22:35:28
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `el_rosco_db`
--
CREATE DATABASE IF NOT EXISTS `el_rosco_db` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `el_rosco_db`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `dificultades`
--

CREATE TABLE `dificultades` (
  `id` int(11) NOT NULL,
  `nivel` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `dificultades`
--

INSERT INTO `dificultades` (`id`, `nivel`) VALUES
(3, 'alta'),
(1, 'baja'),
(2, 'media');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `palabras`
--

CREATE TABLE `palabras` (
  `id` int(11) NOT NULL,
  `letra` varchar(1) DEFAULT NULL,
  `palabra` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `definicion` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `dificultad_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `palabras`
--

INSERT INTO `palabras` (`id`, `letra`, `palabra`, `definicion`, `dificultad_id`) VALUES
(5, 'A', 'ARBOL', 'Planta de tronco leñoso que se ramifica a cierta altura del suelo.', 1),
(6, 'A', 'AGUA', 'Líquido transparente, incoloro, inodoro e insípido en estado puro.', 1),
(7, 'B', 'BARCO', 'Vehículo flotante que se utiliza para transportarse por el agua.', 1),
(8, 'B', 'BOCA', 'Abertura por donde los animales y los seres humanos ingieren los alimentos.', 1),
(9, 'C', 'CASA', 'Edificio o lugar destinado para ser habitado.', 1),
(10, 'C', 'CAMA', 'Mueble que se usa para dormir o descansar.', 1),
(11, 'D', 'DEDO', 'Cada uno de los apéndices articulados en que terminan las manos y los pies.', 1),
(12, 'D', 'DADO', 'Pieza cúbica con puntos en sus caras que se usa en juegos de azar.', 1),
(13, 'E', 'ELEFANTE', 'Mamífero terrestre muy grande, con trompa larga y colmillos.', 1),
(14, 'E', 'ESTRELLA', 'Astro que brilla con luz propia en el cielo nocturno.', 1),
(15, 'F', 'FUEGO', 'Emisión de luz y calor producida por la combustión.', 1),
(16, 'F', 'FLOR', 'Parte de la planta donde se encuentran los órganos reproductores, a menudo de colores llamativos.', 1),
(17, 'G', 'GATO', 'Felino doméstico de tamaño pequeño, cazador de ratones.', 1),
(18, 'G', 'GALLINA', 'Ave doméstica de la que se aprovechan los huevos y la carne.', 1),
(19, 'H', 'HIELO', 'Agua en estado sólido por efecto del frío.', 1),
(20, 'H', 'HUESO', 'Cada una de las piezas duras que forman el esqueleto de los vertebrados.', 1),
(21, 'I', 'ISLA', 'Porción de tierra rodeada de agua por todas partes.', 1),
(22, 'I', 'IGLESIA', 'Edificio destinado al culto cristiano.', 1),
(23, 'J', 'JABON', 'Producto que sirve para lavar y frotar con agua.', 1),
(24, 'J', 'JIRAFA', 'Mamífero africano de cuello muy largo.', 1),
(25, 'K', 'KIWI', 'Fruta de piel marrón con vello y pulpa verde brillante.', 1),
(26, 'L', 'LUNA', 'Único satélite natural de la Tierra.', 1),
(27, 'L', 'LEON', 'Felino carnívoro de gran tamaño, conocido como el rey de la selva.', 1),
(28, 'M', 'MANO', 'Parte del cuerpo humano que va desde la muñeca hasta la punta de los dedos.', 1),
(29, 'M', 'MESA', 'Mueble compuesto por un tablero horizontal sostenido por patas.', 1),
(30, 'N', 'NUBE', 'Masa de vapor de agua suspendida en la atmósfera.', 1),
(31, 'N', 'NARIZ', 'Órgano del sentido del olfato en el rostro humano.', 1),
(32, 'Ñ', 'ÑOQUI', 'Tipo de pasta que se suele comer los días 29 de cada mes en Argentina.', 1),
(33, 'O', 'OJO', 'Órgano de la visión.', 1),
(34, 'O', 'OSO', 'Mamífero carnívoro de gran tamaño, cuerpo pesado y pelaje espeso.', 1),
(35, 'P', 'PERRO', 'Animal doméstico de la familia de los cánidos, considerado el mejor amigo del hombre.', 1),
(36, 'P', 'PAN', 'Alimento básico que se elabora cociendo una masa de harina, agua y levadura.', 1),
(37, 'Q', 'QUESO', 'Alimento sólido que se obtiene por maduración de la cuajada de la leche.', 1),
(38, 'Q', 'QUIMICA', 'Ciencia que estudia la composición y las propiedades de la materia.', 1),
(39, 'R', 'RATON', 'Mamífero roedor de pequeño tamaño.', 1),
(40, 'R', 'RELOJ', 'Instrumento que sirve para medir el tiempo.', 1),
(41, 'S', 'SOL', 'Estrella con luz propia alrededor de la cual gira la Tierra.', 1),
(42, 'S', 'SILLA', 'Mueble que sirve para sentarse, normalmente con respaldo y cuatro patas.', 1),
(43, 'T', 'TREN', 'Medio de transporte formado por una serie de vagones remolcados por una locomotora.', 1),
(44, 'T', 'TIJERA', 'Instrumento que sirve para cortar.', 1),
(45, 'U', 'UVA', 'Fruto de la vid, con el cual se produce el vino.', 1),
(46, 'U', 'UÑA', 'Placa córnea y dura que cubre la parte exterior de la punta de los dedos.', 1),
(47, 'V', 'VACA', 'Hembra del toro, de la que se aprovecha la leche y la carne.', 1),
(48, 'V', 'VASO', 'Recipiente de cristal, metal o plástico que sirve para beber líquidos.', 1),
(49, 'W', 'WIFI', 'Tecnología de comunicación inalámbrica que permite conectar a internet equipos electrónicos.', 1),
(50, 'X', 'XILOFONO', 'Instrumento musical de percusión formado por láminas de madera de diferentes tamaños.', 1),
(51, 'Y', 'YOYO', 'Juguete formado por dos discos unidos por un eje en el que se enrolla un cordel.', 1),
(52, 'Y', 'YOGUR', 'Producto lácteo obtenido por la fermentación de la leche.', 1),
(53, 'Z', 'ZAPATO', 'Calzado que cubre el pie y que no llega más arriba del tobillo.', 1),
(54, 'Z', 'ZORRO', 'Mamífero cánido de hocico puntiagudo y cola muy poblada.', 1),
(55, 'A', 'ANDEN', 'Acera al borde de la vía en las estaciones de tren o de metro.', 2),
(56, 'A', 'ANTORCHA', 'Tea o palo de madera recubierto de resina para alumbrar.', 2),
(57, 'B', 'BALANZA', 'Instrumento que sirve para medir la masa o el peso de los objetos.', 2),
(58, 'B', 'BRUJULA', 'Instrumento para determinar direcciones en la superficie terrestre mediante una aguja imantada.', 2),
(59, 'C', 'CASCADA', 'Caída de agua desde cierta altura por un desnivel brusco del cauce.', 2),
(60, 'C', 'CENSURA', 'Intervención que practica un censor en el contenido o la forma de una obra.', 2),
(61, 'D', 'DESIERTO', 'Territorio arenoso o pedregoso que carece casi por completo de vegetación.', 2),
(62, 'D', 'DILUVIO', 'Lluvia muy copiosa y violenta que causa inundaciones.', 2),
(63, 'E', 'ECLIPSE', 'Ocultación transitoria total o parcial de un astro por interposición de otro cuerpo celeste.', 2),
(64, 'E', 'ENIGMA', 'Dicho o conjunto de palabras de sentido artificialmente encubierto para que sea difícil entenderlo.', 2),
(65, 'F', 'FRONTERA', 'Línea real o imaginaria que separa un Estado o país de otro.', 2),
(66, 'F', 'FOSIL', 'Restos de seres vivos de épocas geológicas pasadas que se encuentran en rocas.', 2),
(67, 'G', 'GLACIAR', 'Masa de hielo acumulada en las zonas altas de las cordilleras.', 2),
(68, 'G', 'GIMNASIO', 'Lugar destinado a la práctica regular de ejercicios físicos.', 2),
(69, 'H', 'HORIZONTE', 'Línea aparente que separa el cielo y la tierra a lo lejos.', 2),
(70, 'H', 'HUELLA', 'Señal que deja el pie del hombre o del animal en la tierra por donde pasa.', 2),
(71, 'I', 'IMAN', 'Mineral o pieza metálica que tiene la propiedad de atraer el hierro y el acero.', 2),
(72, 'I', 'INCENDIO', 'Fuego de grandes proporciones que destruye lo que no está destinado a arder.', 2),
(73, 'J', 'JABALI', 'Mamífero salvaje parecido al cerdo, de pelaje espeso y grandes colmillos.', 2),
(74, 'J', 'JUZGADO', 'Lugar o tribunal donde se administra justicia.', 2),
(75, 'K', 'KARATE', 'Arte marcial japonés de autodefensa basado en golpes secos.', 2),
(76, 'L', 'LABERINTO', 'Lugar formado por calles y encrucijadas para confundir a quien se adentre en él.', 2),
(77, 'L', 'LEYENDA', 'Narración de sucesos fantásticos o históricos que se transmite por tradición.', 2),
(78, 'M', 'MANANTIAL', 'Lugar natural donde brota el agua de la tierra.', 2),
(79, 'M', 'MURCIELAGO', 'Mamífero volador nocturno cuyas extremidades superiores tienen forma de alas membranosas.', 2),
(80, 'N', 'NAUFRAGIO', 'Pérdida o ruina de una embarcación en el mar o en un río.', 2),
(81, 'N', 'NEBULOSA', 'Materia cósmica celeste compuesta de polvo y gas que tiene el aspecto de nube.', 2),
(82, 'Ñ', 'ÑANDU', 'Ave corredora sudamericana, muy semejante al avestruz pero de menor tamaño.', 2),
(83, 'Ñ', 'ÑOÑO', 'Dicho de una persona: Que es anticuada, tímida o de poco ingenio.', 2),
(84, 'O', 'OASIS', 'Sitio con vegetación y agua que se encuentra aislado en medio de los desiertos.', 2),
(85, 'O', 'ORBITA', 'Trayectoria curva que describe un cuerpo en su movimiento alrededor de un centro celeste.', 2),
(86, 'P', 'PARACAIDAS', 'Aparato que se usa para moderar la velocidad de caída de un cuerpo desde una aeronave.', 2),
(87, 'P', 'PENTAGONO', 'Figura geométrica o polígono que tiene cinco lados y cinco ángulos.', 2),
(88, 'Q', 'QUIROFANO', 'Sala especialmente acondicionada en un hospital para efectuar operaciones quirúrgicas.', 2),
(89, 'Q', 'QUIOSCO', 'Templete o pabellón en la calle donde se venden diarios, revistas o golosinas.', 2),
(90, 'R', 'RELAMPAGO', 'Resplandor vivísimo e instantáneo producido en las nubes por una descarga eléctrica.', 2),
(91, 'R', 'RITUAL', 'Conjunto de costumbres, ceremonias o ritos de una religión.', 2),
(92, 'S', 'SATELITE', 'Cuerpo celeste que orbita alrededor de un planeta principal.', 2),
(93, 'S', 'SINFONIA', 'Composición musical escrita para orquesta que consta de varios movimientos.', 2),
(94, 'T', 'TELESCOPIO', 'Instrumento óptico que permite ver agrandada una imagen de un objeto lejano.', 2),
(95, 'T', 'TORNADO', 'Viento impetuoso a modo de torbellino que gira rápidamente y se desplaza.', 2),
(96, 'U', 'UNIVERSO', 'Conjunto de todas las cosas creadas, incluyendo el espacio y los astros.', 2),
(97, 'U', 'UMBRAL', 'Parte inferior o escalón en la puerta o entrada de una casa.', 2),
(98, 'V', 'VOLCAN', 'Montaña con una abertura por donde salen humo, llamas y lava.', 2),
(99, 'V', 'VAMPIRO', 'Criatura de leyenda que vuelve a la vida para alimentarse de sangre.', 2),
(100, 'W', 'WATERPOLO', 'Deporte que se juega en una piscina entre dos equipos que intentan meter un balón en una portería.', 2),
(101, 'X', 'XENOFOBIA', 'Odio, repugnancia u hostilidad inmotivada hacia los extranjeros.', 2),
(102, 'Y', 'YATE', 'Embarcación de lujo destinada al recreo o a las regatas.', 2),
(103, 'Z', 'ZAFIRO', 'Piedra preciosa transparente de color azul.', 2),
(104, 'Z', 'ZODIACO', 'Franja celeste dividida en doce partes, cada una con el nombre de una constelación.', 2),
(105, 'A', 'ALTRUISMO', 'Diligencia en procurar el bien ajeno aun a costa del propio.', 3),
(106, 'A', 'APNEA', 'Suspensión transitoria de la respiración.', 3),
(107, 'B', 'BALUARTE', 'Obra de fortificación que sobresale en el encuentro de dos cortinas.', 3),
(108, 'B', 'BIFURCACION', 'Acción de dividirse en dos ramales, brazos o puntas.', 3),
(109, 'C', 'CATARSIS', 'Purificación o liberación interior de las pasiones.', 3),
(110, 'C', 'CONCUPISCENCIA', 'Apetito desordenado de placeres deshonestos.', 3),
(111, 'D', 'DISIDENCIA', 'Grave desacuerdo de opiniones o de emociones.', 3),
(112, 'D', 'DETRACTOR', 'Adversario que se opone a una opinión o a una persona.', 3),
(113, 'E', 'EFIMERO', 'Pasajero, de corta duración.', 3),
(114, 'E', 'ESNOBISMO', 'Exagerada admiración por todo lo que está de moda.', 3),
(115, 'F', 'FILANTROPIA', 'Amor a la especie humana.', 3),
(116, 'F', 'FARISEO', 'Hombre hipócrita.', 3),
(117, 'G', 'GREGARIO', 'Dicho de un animal o persona: Que vive en rebaño, manada o comunidad sin criterio propio.', 3),
(118, 'G', 'GABARRA', 'Embarcación menor destinada a la carga y descarga en los puertos.', 3),
(119, 'H', 'HETEROGENEO', 'Compuesto de partes de diversa naturaleza.', 3),
(120, 'H', 'HACINAMIENTO', 'Amontonamiento, acumulación de personas o cosas en un lugar reducido.', 3),
(121, 'I', 'IDIOSINCRASIA', 'Rasgos, temperamento o carácter distintivos y propios de un individuo o colectividad.', 3),
(122, 'I', 'INEXORABLE', 'Que no se puede evitar, eludir o detener.', 3),
(123, 'J', 'JALON', 'Vara que se clava en la tierra para determinar puntos fijos en un levantamiento topográfico.', 3),
(124, 'J', 'JERGA', 'Lenguaje especial y no formal que usan entre sí los individuos de ciertas profesiones y oficios.', 3),
(125, 'K', 'KAMIKAZE', 'Persona que realiza una acción temeraria con riesgo de su propia vida.', 3),
(126, 'L', 'LACONICO', 'Breve, exacto, conciso al hablar o escribir.', 3),
(127, 'L', 'LETARGO', 'Estado de somnolencia profunda y prolongada.', 3),
(128, 'M', 'MISANTROPIA', 'Aversión al género humano y al trato con otras personas.', 3),
(129, 'M', 'MEGALOMANIA', 'Delirio de grandeza.', 3),
(130, 'N', 'NEPOTISMO', 'Desmedida preferencia que algunos dan a sus parientes para las concesiones o empleos públicos.', 3),
(131, 'N', 'NIHILISMO', 'Actitud o doctrina que niega todo principio religioso, político y social.', 3),
(132, 'Ñ', 'ÑAGAZA', 'Señuelo o artificio para atraer y engañar.', 3),
(133, 'O', 'OSTRACISMO', 'Aislamiento voluntario o forzoso de la vida pública.', 3),
(134, 'O', 'OMNIPRESENTE', 'Que está presente a la vez en todas partes.', 3),
(135, 'P', 'PERSPICAZ', 'Dicho de una vista o de una mente: Muy aguda y que alcanza mucho.', 3),
(136, 'P', 'PROCRASTINAR', 'Diferir, aplazar o posponer tareas importantes.', 3),
(137, 'Q', 'QUIMERA', 'Aquello que se propone a la imaginación como posible o verdadero, no siéndolo.', 3),
(138, 'Q', 'QUERELLA', 'Expresión de un dolor físico o un sentimiento doloroso; también discordia o disputa.', 3),
(139, 'R', 'RESILIENCIA', 'Capacidad de adaptación de un ser vivo frente a un agente perturbador o situación adversa.', 3),
(140, 'R', 'RIMBOMBANTE', 'Ostentoso, llamativo.', 3),
(141, 'S', 'SINESTESIA', 'Unión de dos imágenes o sensaciones procedentes de diferentes dominios sensoriales.', 3),
(142, 'S', 'SUBREPTICIO', 'Que se hace o toma ocultamente y a escondidas.', 3),
(143, 'T', 'TAXONOMIA', 'Ciencia que trata de los principios, métodos y fines de la clasificación.', 3),
(144, 'T', 'TAUTOLOGIA', 'Repetición inútil y viciosa de un mismo pensamiento expresado de distintas maneras.', 3),
(145, 'U', 'UBICUO', 'Que está presente a un mismo tiempo en todas partes.', 3),
(146, 'U', 'UTOPIA', 'Plan, proyecto o sistema deseable que parece de muy difícil realización.', 3),
(147, 'V', 'VORAGINE', 'Remolino de gran fuerza e intensidad; también mezcla de sentimientos muy intensos.', 3),
(148, 'V', 'VINDICAR', 'Vengar, tomar satisfacción de un agravio o daño.', 3),
(149, 'W', 'WOLFRAMIO', 'Elemento químico metálico de alto punto de fusión.', 3),
(150, 'X', 'XILOGRAFIA', 'Arte de grabar imágenes en madera.', 3),
(151, 'Y', 'YERMO', 'Dicho de un terreno: Inhabitado o incultivado.', 3),
(152, 'Y', 'YUXTAPONER', 'Poner algo junto a otra cosa o inmediata a ella.', 3),
(153, 'Z', 'ZARZARROSA', 'Arbusto de la familia de las rosáceas, con tallos sarmentosos y espinosos.', 3),
(154, 'Z', 'ZIGURAT', 'Templo de la antigua Mesopotamia que tiene la forma de una pirámide escalonada.', 3),
(155, 'Ñ', 'ÑOQUI', 'Tipo de pasta italiana, elaborada con papa, harina y queso.', 1),
(156, 'Ñ', 'ÑANDÚ', 'Ave corredora similar al avestruz, pero de menor tamaño, propia de América del Sur.', 2),
(157, 'Ñ', 'ÑAME', 'Planta herbácea de raíz tuberosa y comestible, cultivada en zonas tropicales.', 3),
(158, 'N', 'NARANJA', 'Fruta cítrica de color entre rojo y amarillo.', 1),
(159, 'N', 'NAUFRAGIO', 'Pérdida o ruina de una embarcación en el mar o en un río.', 2),
(160, 'N', 'NEBULOSA', 'Materia cósmica luminosa que se presenta en forma de nube.', 3),
(161, 'N', 'NARANJA', 'Fruta cítrica de color entre rojo y amarillo.', 1),
(162, 'N', 'NAUFRAGIO', 'Pérdida o ruina de una embarcación en el mar o en un río.', 2),
(163, 'N', 'NEBULOSA', 'Materia cósmica luminosa que se presenta en forma de nube.', 3),
(164, 'Ñ', 'ÑOQUI', 'Tipo de pasta italiana, elaborada con papa, harina y queso.', 1),
(165, 'Ñ', 'ÑANDÚ', 'Ave corredora similar al avestruz, pero de menor tamaño, propia de América del Sur.', 2),
(166, 'Ñ', 'ÑAME', 'Planta herbácea de raíz tuberosa y comestible, cultivada en zonas tropicales.', 3),
(167, 'N', 'NARANJA', 'Fruta cítrica de color entre rojo y amarillo.', 1),
(168, 'N', 'NAUFRAGIO', 'Pérdida o ruina de una embarcación en el mar o en un río.', 2),
(169, 'N', 'NEBULOSA', 'Materia cósmica luminosa que se presenta en forma de nube.', 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `partidas`
--

CREATE TABLE `partidas` (
  `id` int(11) NOT NULL,
  `usuario_id` int(11) NOT NULL,
  `dificultad_id` int(11) NOT NULL,
  `tiempo_maximo` int(11) NOT NULL,
  `ayuda_adicional` tinyint(1) NOT NULL,
  `fecha_inicio` datetime DEFAULT current_timestamp(),
  `puntaje_final` int(11) DEFAULT NULL,
  `fecha_fin` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `partidas`
--

INSERT INTO `partidas` (`id`, `usuario_id`, `dificultad_id`, `tiempo_maximo`, `ayuda_adicional`, `fecha_inicio`, `puntaje_final`, `fecha_fin`) VALUES
(1, 1, 2, 3, 1, '2026-07-01 23:27:14', NULL, NULL),
(2, 2, 2, 3, 1, '2026-07-02 14:24:07', 3, NULL),
(3, 2, 2, 3, 1, '2026-07-02 16:48:54', 18, NULL),
(4, 2, 2, 3, 1, '2026-07-02 16:49:46', 7, NULL),
(5, 2, 2, 3, 1, '2026-07-02 16:50:22', 27, NULL),
(6, 2, 2, 3, 1, '2026-07-02 16:52:54', NULL, NULL),
(7, 2, 2, 3, 1, '2026-07-02 17:25:21', 27, '2026-07-02 20:25:35'),
(8, 3, 2, 3, 1, '2026-07-02 17:26:36', 27, '2026-07-02 20:27:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id_usuario` int(11) NOT NULL,
  `nombre_usuario` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(100) NOT NULL,
  `fecha_nacimiento` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id_usuario`, `nombre_usuario`, `password`, `email`, `fecha_nacimiento`) VALUES
(1, 'usuario_test', '$2b$10$c4/zpxIwgDGCTBLY0m4QpeFQ.ob5CRsz6Pt0CiEqnA7HgFddGDrPW', 'test@correo.com', '1995-10-25'),
(2, 'matias', '$2b$10$6mAZLG873DoJFd/SWe.IOOEjQDRYZsfyKfa7c7kg7sSU16ihI8iH2', 'zahnmatias0@gmail.com', '2001-08-14'),
(3, 'sebastian', '$2b$10$QdmhlHcs/1O5H9mfiUN.a.c9ijH1VBe3mToV5jDuC0Hwo0WWntZmu', 'zahnmatias15@gmail.com', '2001-08-14');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `dificultades`
--
ALTER TABLE `dificultades`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `nivel` (`nivel`);

--
-- Indices de la tabla `palabras`
--
ALTER TABLE `palabras`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_dificultad` (`dificultad_id`);

--
-- Indices de la tabla `partidas`
--
ALTER TABLE `partidas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_partida_usuario` (`usuario_id`),
  ADD KEY `fk_partida_dificultad` (`dificultad_id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id_usuario`),
  ADD UNIQUE KEY `nombre_usuario` (`nombre_usuario`),
  ADD UNIQUE KEY `uk_nombre_usuario` (`nombre_usuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `dificultades`
--
ALTER TABLE `dificultades`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `palabras`
--
ALTER TABLE `palabras`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=170;

--
-- AUTO_INCREMENT de la tabla `partidas`
--
ALTER TABLE `partidas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id_usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `palabras`
--
ALTER TABLE `palabras`
  ADD CONSTRAINT `fk_dificultad` FOREIGN KEY (`dificultad_id`) REFERENCES `dificultades` (`id`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `partidas`
--
ALTER TABLE `partidas`
  ADD CONSTRAINT `fk_partida_dificultad` FOREIGN KEY (`dificultad_id`) REFERENCES `dificultades` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_partida_usuario` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id_usuario`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
