import Hero from "@components/Hero/Hero";
import React from "react";
import heroImage from "../../public/images/background2.webp";

import styles from "../../styles/legal.module.css";
const PoliticaDeCookies = () => {
  return (
    <>
      <Hero image={heroImage} title="Política de Cookies" />
      <div className={styles.legalWrapper}>
        <h1>POLÍTICA DE COOKIES</h1>
        <h2>Aviso general</h2>
        <p>
          Este Aviso de cookies («Aviso») se aplica a Víctor Martínez Galeote,
          «yo», «mis», y explica mis principios cuando se trata de la
          recopilación, el procesamiento y el almacenamiento de su información.
          Esta política explica específicamente cómo yo, mis socios y los
          usuarios de mis servicios implementamos cookies, así como las opciones
          que tiene para controlarlas.
        </p>
        <h2>Información del responsable</h2>
        <p>
          Titular: Víctor Martínez Galeote
          <br />
          NIF: 45642022V
          <br />
          Domicilio: Calle Juan de Mariana, 12, 28045 Madrid – España
          <br />
          Correo electrónico: hola@victormartinezgaleote.com
          <br />
          Teléfono de contacto: 659670788
          <br />
          Sitio Web: https://www.ratonesroom.com
          <br />
        </p>
        <h2>¿Para que utilizo las cookies?</h2>
        <p>
          {" "}
          Uso las siguientes cookies para los siguientes fines: Las cookies
          estrictamente necesarias son necesarias para que mi sitio web funcione
          correctamente. Estas cookies no recogen ninguna información personal.
          Si elige rechazar o desactivar las cookies estrictamente necesarias,
          no podrá utilizar todas las funciones del sitio web.{" "}
        </p>
        <p>
          Las cookies de rendimiento / análisis se utilizan para hacer que la
          experiencia sea más fácil de usar en mi sitio web para los visitantes,
          y se utilizan con fines de seguridad. La información de estas cookies
          también se usa con fines estadísticos, como mantener estadísticas
          sobre el uso del sitio web, realizar encuestas para mejorar mis
          servicios en línea y el sitio web, determinar qué partes de mi sitio
          web son las más populares y optimitzar el uso del sitio web.
        </p>
        <p>
          Las cookies publicitarias se utilizan para recopilar información sobre
          cómo los visitantes utilizan el sitio web para poder proporcionar
          publicidad en otros sitios web sobre nuestros servicios.
        </p>
        <h2>FUNCIONALES</h2>
        <p>
          {" "}
          Las cookies son necesarias para las funciones básicas del sitio y, por
          lo tanto, siempre están habilitadas. Entre otras cosas, las cookies se
          encuentran en el sitio que ha visitado durante una sesión. Si lo
          solicitas, pueden recordarlo entre sesiones.
        </p>
        <h2>ESTADÍSTICAS</h2>
        <p>
          {" "}
          Las cookies de estadísticas me ayudan a entender cómo usar mi sitio y
          a mejorarlo mediante la recopilación de datos de forma anónima.
        </p>
        <h2>TERCEROS / CONTENIDO EMPOTRADO</h2>
        <p>
          {" "}
          Hago uso de diferentes aplicaciones y servicios de terceros para
          mejorar la experiencia de los visitantes del sitio web. Estas incluyen
          plataformas de redes sociales como Facebook e Instagram, o contenido
          incrustado de YouTube. Como resultado, estas cookies pueden ser
          establecidas por estos terceros y utilizadas por ellos para rastrear
          su actividad en línea. No tengo control directo sobre la información
          que se recopila con estas cookies.
        </p>
        <h2>GOOGLE ANALYTICS</h2>
        <p>
          {" "}
          Utilizo Google Analytics para ver cómo mis visitantes usan mi sitio.
          Los datos que guardo no se pueden usar para identificarlo, pero usted
          es completamente anónimo. La información es recogida y guardada por
          Google.
        </p>
        <h2> LO QUE PUEDE HACER PARA ADMINISTRAR EL USO DE LAS COOKIES</h2>
        <p>
          {" "}
          En su navegador, puede ajustar la configuración de las cookies. La
          mayoría de las veces también puede leer más sobre diferentes tipos de
          cookies allí. El aspecto de la configuración varía de un navegador a
          otro. Pero básicamente todos tienen configuraciones que, entre otras
          cosas, bloquean todas las cookies, limitan el uso a las cookies de
          primera mano o lo ayudan a borrar todas las cookies almacenadas en su
          computadora. Es posible que algunos de nuestros servicios no
          funcionen.
        </p>
        <h1> ¿Pueden los usuarios evitar las cookies?</h1>
        <p>
          Puede elegir si desea aceptar cookies. Al ajustar el navegador web,
          evitará recibir cookies y también podrá utilizar su navegador para
          eliminar las cookies.El método utilizado para bloquear o eliminar las
          cookies dependerá del navegador web utilizado. Cuando elija permitir
          mi uso de cookies, tenga en cuenta que recopilaré la información como
          se indica anteriormente hasta que deje de utilizar nuestro uso de
          cookies.
        </p>
        <p>
          {" "}
          Si tiene alguna pregunta con respecto a sus opciones con respecto a
          las cookies, comuníquese conmigo a la información de contacto que se
          detalla arriba.{" "}
        </p>
        <p>
          {" "}
          Para obtener más información sobre cómo administrar y eliminar las
          cookies, visite www.aboutcookies.org. Para obtener más detalles sobre
          las cookies de publicidad y cómo administrarlas, visite
          www.youronlinechoices.eu (basado en la UE), o www.aboutads.info
          (basado en los EE. UU.).
        </p>
        <p>
          {" "}
          Algunos programas específicos de exclusión están disponibles aquí:{" "}
        </p>
        <p>
          {" "}
          Google Analytics: https://tools.google.com/dlpage/gaoptout Es
          importante tener en cuenta que restringir o deshabilitar el uso de
          cookies puede limitar la funcionalidad de los sitios, o evitar que
          funcionen correctamente.{" "}
        </p>
        Actualizaciones a este aviso Para garantizar que cumplo con la ley de
        protección de datos, puedo modificar este Aviso en cualquier momento.
        Publicaré cualquier cambio realizado. Esta Política de Cookies ha sido
        actualizada por última vez el 3 de junio de 2021.
      </div>
    </>
  );
};

export default PoliticaDeCookies;
