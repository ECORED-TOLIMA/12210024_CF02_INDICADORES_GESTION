<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Análisis, seguimiento y toma de decisiones
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/Temas/tema2/img1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p La implementación del CMI no concluye con el diseño de indicadores y la construcción del mapa estratégico; su verdadero valor se manifiesta en la capacidad de la organización para analizar, hacer seguimiento y tomar decisiones a partir de la información que el modelo genera. Este segundo componente del #[i Balanced Scorecard] convierte los datos obtenidos en cada perspectiva en insumos concretos para evaluar el desempeño organizacional y ajustar la estrategia cuando los resultados se desvían de lo planeado. Sin este proceso de análisis continuo, el modelo se reduciría a un ejercicio de medición sin impacto real en la gestión.
    .row.justify-content-center.mb-5
      .col-lg-10
        .tarjeta.BG05.p-4
          .row.justify-content-center.align-items-center
            .col-1.col-md-1.d-none.d-lg-block
              figure
                img(src="@/assets/curso/Temas/tema2/img2.png" alt="Adornos flotantes")
            .col-11.col-md-11
              p.mb-0 El seguimiento organizacional exige información fidedigna, disponible en tiempo real y coherente con los objetivos estratégicos. Identificar tendencias, desviaciones y patrones de comportamiento en los indicadores clave determina la calidad de las decisiones, pues una desviación detectada a tiempo se corrige con menor costo y esfuerzo.
    .row.justify-content-center.align-items-center(style="background-color: #DEEAF1;")
      .col-lg-9.order-2.order-lg-1
        .cajon.p-4
          p.mb-0 La toma de decisiones basada en datos es el propósito central de este componente del CMI. Cuando los líderes organizacionales cuentan con tableros de control actualizados, semáforos de desempeño y análisis de causa-efecto entre perspectivas, sus decisiones dejan de basarse en la intuición para fundamentarse en evidencia objetiva y verificable (Función Pública, 2018). Este enfoque fortalece la transparencia, la responsabilidad organizacional y la alineación continua entre la operación diaria y los objetivos estratégicos de largo plazo. A continuación, se desarrollan los elementos que estructuran este proceso de análisis, seguimiento y toma de decisiones.
      .col-8.col-lg-3.mb-3.mb-lg-0.order-1.order-lg-2
        figure
          img.mx-auto.d-block(src="@/assets/curso/Temas/tema2/img3.png" alt="Imagen modelo SECI")
    separador
    #t_2_1.titulo-segundo.color-acento-contenido
      h2 2.1 Análisis de resultados
    .row.justify-content-center.align-items-center.mb-4

      .col-lg-9.order-2.order-lg-1
        .py-3
          p.mb-3 El análisis de resultados es el proceso mediante el cual la organización compara los objetivos estratégicos establecidos con los resultados obtenidos en cada perspectiva del CMI. Este proceso no se limita a constatar si se alcanzaron o no las metas; su propósito central es identificar tendencias, patrones y desviaciones que permitan comprender el comportamiento de la organización a lo largo del tiempo. La información generada en este análisis constituye la base objetiva para la toma de decisiones estratégicas fundamentadas en datos reales y verificables.
        .row.justify-content-center
          .col-lg-12
            .tarjeta.BG04.p-4
              .row.justify-content-center.align-items-center
                .col-1.col-md-1.d-none.d-lg-block
                  figure
                    img(src="@/assets/curso/Temas/tema2/img4.png" alt="Adornos flotantes")
                .col-12.col-md-11
                  p.mb-0 Para que el análisis de resultados sea efectivo, debe realizarse de manera periódica y estructurada, revisando los indicadores clave frente a las metas definidas en las cuatro perspectivas: financiera, clientes, procesos internos, y aprendizaje y crecimiento. Esta revisión permite detectar desviaciones, identificar causas raíz y ajustar la estrategia de manera oportuna, evitando que los problemas se consoliden y afecten el desempeño global de la organización. La siguiente tabla ilustra cómo se estructura este análisis por perspectiva:
      .col-lg-3.col-6.order-1.order-lg-2
        figure
          img(src="@/assets/curso/Temas/tema2/img5.png", alt="Imagen decorativa")
    .titulo-sexto.color-acento-contenido.offset-0.offset-lg-1(data-aos="fade-left")
      h5 Tabla 1.
      span Estructura del análisis de resultados por perspectiva del CMI.

    .row.justify-content-center.align-items-center.mb-4
      .col-10
        .tabla-a
          table
            thead
              tr
                th.w-25 Perspectiva
                th.w-40 Indicador ejemplo
                th Meta
                th Resultado real
                th Estado
            tbody
              tr
                td Financiera
                td Margen de utilidad neta (Fórmula: resultados reales / parámetro definido)
                td 12 %
                td 9 %
                td.bg-estado-rojo 
                    p.mb-0 Rojo (Inaceptable)
              
              tr
                td Clientes
                td Índice de satisfacción (Fuente: instrumentos de información base)
                td 90 %
                td 85 %
                td.bg-estado-amarillo Amarillo (Aceptable)
                
              tr
                td Procesos internos
                td Tiempo de entrega (Unidad: horas | Periodicidad: Mensual)
                td 48 horas
                td 46 horas
                td.bg-estado-verde Verde (Excelente)
                
              tr
                td Aprendizaje y crecimiento
                td Personal capacitado (Responsable: Cargo de medición)
                td 80 %
                td 80 %
                td.bg-estado-verde Verde (Excelente)
    .row.justify-content-center.align-items-center.mb-5
      .col-4.col-lg-3.mb-3.mb-lg-0
        figure
          img.mx-auto.d-block(src="@/assets/curso/Temas/tema2/img6.png" alt="Imagen modelo SECI")
      .col-lg-9
        .cajon
          p.mb-0 La lectura de esta tabla permite identificar de manera inmediata en qué perspectivas la organización presenta desviaciones y en cuáles está cumpliendo o superando sus metas. El estado de cada indicador se refleja mediante un semáforo de desempeño que facilita la comprensión rápida de la situación y orienta la priorización de las acciones correctivas. Este instrumento visual convierte datos numéricos en información accionable para los equipos directivos y operativos.
    p.mb-4 Para llevar a cabo un análisis de resultados riguroso y sistemático en el CMI, se proponen los siguientes pasos:
    .row.justify-content-center.mb-5
      .col-lg-7
        LineaTiempoD.color-secundario
          p(numero="1" titulo="Monitoreo periódico o revisión") Se establecen reuniones mensuales o trimestrales para evaluar el desempeño organizacional. Los indicadores deben ser claros y permitir una comprensión rápida de la situación, garantizando que la información esté disponible en el momento en que se requiere para la toma de decisiones.
          p(numero="2" titulo="Análisis comparativo entre el indicador y la meta") Se compara el resultado real obtenido con la meta cuantificable establecida para cada indicador. Esta comparación evidencia la brecha existente entre lo planeado y lo ejecutado, y determina la magnitud de la desviación en cada perspectiva del modelo.
          p(numero="3" titulo="Evaluación de la causa raíz") Cuando un indicador presenta desviaciones negativas, es decir, resultados por debajo de la meta, se investigan las razones subyacentes involucrando a los responsables de cada área. Este análisis evita que se adopten medidas correctivas superficiales que no ataquen el origen real del problema.
          p(numero="4" titulo="Uso de tableros visuales o <em>dashboards</em>") Se utilizan herramientas visuales que permiten identificar rápidamente los indicadores críticos mediante semáforos de desempeño: verde para cumplimiento satisfactorio, amarillo para situaciones de precaución y rojo para alertas críticas que requieren acción inmediata.
          p(numero="5" titulo="Ajuste y mejora continua") Con base en los datos analizados, se ajustan los objetivos, las metas o las iniciativas estratégicas para mantener la alineación con la estrategia general de la organización. Este ajuste garantiza que el CMI sea un sistema dinámico y no un instrumento estático de medición.
          p(numero="6" titulo="Enfoque en causa-efecto") Se analiza cómo los resultados en la perspectiva de aprendizaje y crecimiento y en procesos internos impactan en la perspectiva del cliente y, finalmente, en los resultados financieros. Este enfoque sistémico permite comprender las consecuencias de cada desviación en la cadena de valor estratégico.
      .col-7.col-lg-3
        figure
          img(src="@/assets/curso/Temas/tema2/img7.png", alt="Imagen decorativa") 
    p.mb-4 La aplicación sistemática de estos pasos convierte la medición en acciones concretas y oportunas, permitiendo que el CMI funcione como una herramienta activa para la toma de decisiones estratégicas. El análisis de resultados no es un fin en sí mismo, sino el punto de partida para activar los mecanismos de seguimiento y control que se desarrollan en los apartados siguientes.
    separador
    #t_2_2.titulo-segundo.color-acento-contenido
      h2 2.2 Tableros de control
    .row.justify-content-center.align-items-center.mb-4

      .col-lg-9.order-2.order-lg-1
        p.mb-3 Los tableros de control son herramientas visuales que presentan los indicadores clave de desempeño de manera clara y sintetizada, permitiendo monitorear las metas estratégicas de forma oportuna. En el CMI, el tablero de control funciona como el espejo, que evidencia el estado de salud de la organización, reuniendo datos de las cuatro perspectivas en un único espacio visual. Su propósito no es acumular información, sino convertirla en señales accionables para la toma de decisiones estratégicas.
        .row.justify-content-center
          .col-lg-12
            .cajon.color.p-4.col
              .row.justify-content-center.align-items-center
                .col-1.col-md-1.mb-1.mb-md-0.d-none.d-lg-block
                  figure
                    img(src="@/assets/curso/Temas/tema2/img8.png" alt="Icono rendimiento")
                .col-12.col-md-11
                  p.mb-0 El diseño de un tablero de control efectivo requiere seleccionar únicamente los indicadores más representativos de cada perspectiva, evitando la sobrecarga de información que dificulte su lectura e interpretación. Cada indicador debe estar vinculado a una meta definida, contar con una frecuencia de actualización establecida y tener un responsable de seguimiento claramente asignado. Cuando estos elementos están correctamente articulados, el tablero se convierte en un instrumento de gestión que facilita la alineación entre la operación diaria y los objetivos estratégicos de la organización.
      .col-lg-3.col-6.mb-3.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/Temas/tema2/img9.png", alt="Imagen decorativa")
    p.mb-4 Para ampliar la comprensión sobre el uso de tableros de control y su aplicación práctica en la gestión organizacional, se recomienda consultar el siguiente recurso de audio:
    .row.justify-content-center.mb-5
      .col-lg-10
        figure
          img(src='@/assets/curso/Temas/tema2/img10.png', alt='Ilustración de equipo trabajando en desarrollo de software')
        .tarjeta.p-4(style="background-color: #283760; border-radius: 0 0 20px 20px;")
          .tarjeta.bg-white.p-4.custom-audio-card
            TarjetaAudio.color-acento-botones(
              texto="Los tableros de control como herramienta de decisión"
              :audio="require('@/assets/curso/Temas/audio/Podcast.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
              .indicador--click(v-if="mostrarIndicadorTarjetaAudio") 
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-9.col-md-7
        .cajon.color.p-4.col(style="background-color: #DEEAF1;")
          .row
            .col-lg-2.d-none.d-lg-block
              figure
                img(src="@/assets/curso/Temas/tema2/img11.png", alt="alt")
            .col-lg-10
              p El funcionamiento del tablero de control se basa en un sistema de semáforos de desempeño que genera alertas visuales según el estado de cada indicador. Este sistema permite identificar de manera inmediata qué áreas requieren atención prioritaria y cuáles están operando dentro de los parámetros esperados. Los tres estados del semáforo se describen a continuación:
      .col-lg-3.col-md-3.mb-4.mb-md-0
        figure
          img(src="@/assets/curso/Temas/tema2/img12.png", alt="alt")
    .row.mb-4
      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.color-acento-botones.p-4.h-100
          .row.justify-content-center.mb-3
            .col-4
              figure
                img(src='@/assets/curso/Temas/tema2/img13.png', alt='Texto que describa la imagen')

          h3.text-center Verde
          p.text-center El indicador alcanzó o superó la meta establecida. Refleja un cumplimiento satisfactorio que no requiere intervención correctiva inmediata.

      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.color-acento-botones.p-4.h-100
          .row.justify-content-center.mb-3
            .col-4
              figure
                img(src='@/assets/curso/Temas/tema2/img14.png', alt='Texto que describa la imagen')

          h3.text-center Amarillo
          p.text-center El indicador se encuentra por debajo de lo previsto, pero la desviación es corregible. Genera una alerta de precaución que orienta acciones preventivas antes de que la situación se deteriore.
      
      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.color-adicional-3.p-4.h-100
          .row.justify-content-center.mb-3
            .col-4
              figure
                img(src='@/assets/curso/Temas/tema2/img15.png', alt='Texto que describa la imagen')

          h3.text-center Rojo
          p.text-center El indicador está muy por debajo de la meta y requiere acción inmediata. Señala una situación crítica que demanda intervención directa de los responsables del área.
    p.mb-4 La implementación del tablero de control en el CMI genera beneficios concretos para la gestión organizacional. Su valor radica en que brinda información integral y cuantificada por perspectiva, lo que convierte los datos en insumos accionables para la toma de decisiones en todos los niveles jerárquicos. Entre los beneficios más relevantes se destacan los siguientes:
    .row.justify-content-center.mb-5
      .col-lg-10
        .tarjeta.tarjeta--azul-suave.p-4.p-lg-4
          .row.mb-4
            .col-auto
              img(src='@/assets/curso/Temas/tema1/img14.png', style="width: 20px")
            .col
              p.mb-0 #[b Visión integral] 
              | Proporciona una visión global y en tiempo real del desempeño organizacional, superando el enfoque exclusivamente financiero y permitiendo una evaluación equilibrada de todas las perspectivas del modelo.
        
          .row.mb-4
            .col-auto
              img(src='@/assets/curso/Temas/tema1/img14.png', style="width: 20px")
            .col
              p.mb-0 #[b Toma de decisiones] 
              | Apoya a los líderes en la adopción de decisiones informadas y fundamentadas en datos actuales, reduciendo la incertidumbre y fortaleciendo la objetividad del proceso directivo.
          
          .row.mb-4
            .col-auto
              img(src='@/assets/curso/Temas/tema1/img14.png', style="width: 20px")
            .col
              p.mb-0 #[b Alineación estratégica] 
              | Conecta los objetivos generales de la organización con la operación diaria, garantizando que cada área contribuya de manera coherente al logro de la estrategia institucional.
          
          .row.mb-4
            .col-auto
              img(src='@/assets/curso/Temas/tema1/img14.png', style="width: 20px")
            .col
              p.mb-0 #[b Detección temprana] 
              | Permite identificar amenazas, oportunidades y cuellos de botella con anticipación, posibilitando una reacción oportuna antes de que las desviaciones afecten los resultados esperados.
          
          .row.mb-4
            .col-auto
              img(src='@/assets/curso/Temas/tema1/img14.png', style="width: 20px")
            .col
              p.mb-0 #[b Comunicación y enfoque] 
              | Alinea a todo el personal hacia la consecución de las mismas metas estratégicas, fortaleciendo la cultura organizacional orientada a resultados y la cohesión entre los equipos de trabajo.
    p.mb-4 La siguiente tabla presenta un ejemplo práctico del tablero de control en el CMI, mostrando cómo el semáforo de desempeño orienta las acciones correctivas requeridas en cada perspectiva. Su lectura permite comprender de manera concreta cómo la organización transforma los datos de seguimiento en decisiones estratégicas oportunas:
    .row.justify-content-center.align-items-center.mb-4
      .col-12
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 2.
          span Tablero de control: semáforo de desempeño y acciones correctivas
        
        .tabla-a.tabla-identica
          table
            thead
              tr
                th Perspectiva
                th Indicador
                th Meta
                th Resultado real
                th Estado
                th Acción requerida
            tbody
              tr
                th Financiera
                td Costo por unidad producida
                td $45.000
                td $52.000
                td.bg-estado-rojo Rojo
                td Auditoría de costos operativos
              
              tr
                th Clientes
                td Tasa de retención de clientes
                td 85 %
                td 83 %
                td.bg-estado-amarillo Amarillo
                td Revisión de propuesta de valor
                
              tr
                th Procesos internos
                td Porcentaje de productos sin defectos
                td 95 %
                td 96 %
                td.bg-estado-verde Verde
                td Mantener el estándar
                
              tr
                th Aprendizaje y crecimiento
                td Tasa de ausentismo laboral
                td 3 %
                td 5 %
                td.bg-estado-rojo Rojo
                td Plan de bienestar laboral   
    .row.justify-content-center.align-items-center.mb-4

      .col-lg-4.col-md-5.mb-4.mb-md-0
        figure
          img(src="@/assets/curso/Temas/tema2/img16.png", alt="Imagen decorativa")     
      .col-lg-8
        p.mb-3 El tablero de control convierte la estrategia de la organización en acciones medibles y visibles que orientan la mejora continua del desempeño global. Cada indicador en estado rojo o amarillo no representa un fracaso organizacional, sino una oportunidad concreta para revisar los procesos, identificar las causas subyacentes y adoptar medidas correctivas antes de que el impacto se consolide en los resultados finales.
        .cajon.color.p-4.col.mb-4
            p.mb-0 La efectividad del tablero de control depende directamente de la periodicidad con la que se actualiza y de la calidad del análisis que se realiza sobre sus datos. Una organización que revisa su tablero de manera sistemática y actúa con oportunidad sobre las alertas generadas, desarrolla una capacidad de respuesta estratégica que le permite mantenerse alineada con sus objetivos incluso en entornos de alta variabilidad.
        .row.justify-content-center
          .col-lg-12
              .row.justify-content-center.align-items-center
                .col-1.col-md-1.mb-1.mb-md-0.d-none.d-lg-block
                  figure
                    img(src="@/assets/curso/Temas/tema2/img17.png" alt="Icono rendimiento")
                .col-12.col-md-11
                  p.mb-0 El tablero de control no opera de manera aislada dentro del CMI, sino que se articula con las cuatro perspectivas del modelo para ofrecer una visión sistémica del desempeño organizacional. Cada perspectiva aporta sus propios indicadores al tablero, lo que permite evaluar simultáneamente el estado financiero, la satisfacción del cliente, la eficiencia de los procesos internos y el desarrollo del talento humano, generando decisiones integrales y coherentes con la estrategia definida.
    p.mb-4 El seguimiento continuo de los indicadores es lo que transforma el CMI en una herramienta de gestión viva y funcional, capaz de detectar con anticipación cualquier señal de alerta que pueda comprometer el logro de los objetivos estratégicos. Cuando el semáforo refleja un estado de alerta sostenido en el tiempo, se activa un proceso más profundo de análisis denominado identificación de desviaciones, el cual se desarrolla a continuación.
    .row.justify-content-center.mb-4
      .col-lg-10
        .tarjeta.BG05.p-4
          .row.justify-content-center.align-items-center
            .col-1.col-md-1.d-none.d-lg-block
              figure
                img(src="@/assets/curso/Temas/tema2/img18.png" alt="Adornos flotantes")
            .col-11.col-md-11
              p.mb-0 El Cuadro de Mando Integral traduce la visión y la estrategia de una organización en objetivos e indicadores medibles que permiten evaluar el desempeño desde cuatro perspectivas complementarias, convirtiendo la gestión estratégica en un proceso continuo, coherente y orientado a resultados.
    .row.justify-content-center.align-items-center(style="background-color: #BEC2CF;")
      .col-lg-9.order-2.order-lg-1
        .cajon.p-4
          p.mb-0 Conocer el estado de los indicadores a través del tablero de control es solo el primer paso del proceso de seguimiento organizacional. El verdadero valor del CMI se manifiesta cuando la organización va más allá de la lectura del semáforo y profundiza en el análisis de las diferencias entre lo planeado y lo ejecutado. Este análisis, denominado identificación de desviaciones, permite determinar con precisión las causas de los incumplimientos y orientar las acciones correctivas hacia los factores que realmente los generan.
      .col-8.col-lg-3.mb-3.mb-lg-0.order-1.order-lg-2
        figure
          img.mx-auto.d-block(src="@/assets/curso/Temas/tema2/img19.png" alt="Imagen modelo SECI")
    separador
    #t_2_3.titulo-segundo.color-acento-contenido
      h2 2.3 Identificación de desviaciones
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4.col-md-5.mb-4.mb-md-0
        figure
          img(src="@/assets/curso/Temas/tema2/img20.png", alt="alt")
      .col-lg-8.col-md-7
        .cajon.color.p-4.col
          p Las desviaciones corresponden a las diferencias entre los resultados reales obtenidos y los objetivos planificados en los indicadores clave de desempeño. Su identificación se realiza mediante la comparación continua de métricas, se refleja principalmente a través de los semáforos de desempeño del tablero de control y permite adoptar acciones correctivas oportunas antes de que el impacto negativo se consolide en los resultados organizacionales. El análisis de las desviaciones implica identificar sus causas raíz y establecer medidas correctivas pertinentes y oportunas.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-7.col-md-7
          p Para comprender adecuadamente este proceso, es necesario reconocer que no toda desviación tiene el mismo origen ni impacto sobre la estrategia organizacional. Algunas desviaciones responden a factores internos controlables, como ineficiencias operativas o errores de previsión, mientras que otras obedecen a factores externos, como variaciones del mercado o fallas en la cadena de suministro. Identificar esta distinción es fundamental para diseñar medidas correctivas que ataquen el origen real del problema y no solo sus efectos visibles.
      .col-lg-3.col-md-5.mb-4.mb-md-0
        figure
          img(src="@/assets/curso/Temas/tema2/img21.png", alt="alt")
    p.mb-4 Las desviaciones se clasifican en dos tipos según su impacto en el desempeño organizacional. Esta clasificación permite priorizar las acciones correctivas y orientar los recursos disponibles hacia las áreas que más lo requieren:
    .row.justify-content-center.mb-4
      .col-10.col-md-6.col-lg-4.mb-4.mb-md-0(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/curso/Temas/tema2/img22.png' alt='AvatarTop')
          .tarjeta.color-primario.shadow
            .p-4
              .row.justify-content-center.mb-3
                .col-auto
                  .py-2.px-3
                    p.mb-0 #[b Favorables]
              p.text-center.mb-0 El resultado real es mejor que el planificado. Por ejemplo, cuando los ingresos superan la meta establecida o los costos resultan inferiores a los proyectados. Este tipo de desviación también debe analizarse para comprender qué factores la generaron y si es posible replicarlos en otras áreas de la organización.
      .col-10.col-md-6.col-lg-4(data-aos="fade-left")
        .tarjeta-avatar
          img(src='@/assets/curso/Temas/tema2/img23.png' alt='AvatarTop')
          .tarjeta.color-primario.shadow
            .p-4
              .row.justify-content-center.mb-3
                .col-auto
                  .py-2.px-3
                    p.mb-0 #[b Desfavorables]
              p.text-center.mb-0 El resultado real es peor que el planificado. Por ejemplo, retrasos en los tiempos de entrega, sobrecostos operativos o incumplimiento de estándares de calidad. Estas desviaciones exigen un análisis de causa raíz y la formulación inmediata de medidas correctivas.
    p.mb-4 La siguiente tabla ilustra cómo se identifican y clasifican las desviaciones en el CMI, mostrando su impacto por perspectiva y el tipo de acción que genera cada una:
    .row.justify-content-center.align-items-center.mb-4
      .col-12
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 3.
          span Clasificación e identificación de desviaciones por perspectiva del CMI
        
        .tabla-a.tabla-identica
          table
            thead
              tr
                th Perspectiva
                th Indicador
                th Meta
                th Resultado real
                th Tipo de desviación
                th Causa probable
                th Acción correctiva
            tbody
              tr
                th Financiera
                td Margen de utilidad neta
                td 12 %
                td 8 %
                td.bg-estado-rojo Desfavorable
                td Incremento en costos operativos
                td Auditoría de gastos y reducción de costos
              
              tr
                th Clientes
                td Índice de satisfacción
                td 90 %
                td 93 %
                td.bg-estado-verde Favorable
                td Mejora en tiempos de respuesta
                td Replicar en otras áreas de servicio
                
              tr
                th Procesos internos
                td Tiempo de entrega
                td 48 horas
                td 60 horas
                td.bg-estado-rojo Desfavorable
                td Falla en cadena de suministro
                td Revisión y ajuste del proceso logístico
                
              tr
                th Aprendizaje y crecimiento
                td Personal capacitado
                td 80 %
                td 75 %
                td.bg-estado-rojo Desfavorable
                td Baja participación en formación
                td Plan de incentivos para capacitación 
    p.mb-4 Como se evidencia en la tabla anterior, cada desviación identificada activa un proceso de análisis que va desde el reconocimiento del problema hasta la formulación de la acción correctiva. Para que este proceso sea efectivo, se recomienda seguir los siguientes pasos en la gestión de desviaciones dentro del CMI:
    .tarjeta--fondo6

      .row.justify-content-center.align-items-center.py-5.position-relative.mb-4
        .col-lg-4.d-none.d-lg-block
          figure
            img(src="@/assets/curso/Temas/tema2/img24.png" alt="Persona con laptop")
        .col-lg-8.col-11
          SlyderF(columnas="col-md-6 col-lg-6 col-xl-4")
            .tarjeta.tarjeta-blanca-custom.p-4
              .row.justify-content-center.mb-3
                .col-6
                  img(src='@/assets/curso/Temas/tema2/img25.png' alt='Icono')
              h4.text-center Monitoreo continuo
              p.text-center Revisar periódicamente los indicadores del tablero de control para detectar desviaciones de manera oportuna antes de que se consoliden.

            .tarjeta.tarjeta-blanca-custom.p-4
              .row.justify-content-center.mb-3
                .col-6
                  img(src='@/assets/curso/Temas/tema2/img26.png' alt='Icono')
              h4.text-center Comparación sistemática
              p.text-center Contrastar el valor real de cada indicador con la meta establecida, determinando la magnitud y la dirección de la desviación.

            .tarjeta.tarjeta-blanca-custom.p-4
              .row.justify-content-center.mb-3
                .col-6
                  img(src='@/assets/curso/Temas/tema2/img27.png' alt='Icono')
              h4.text-center Identificación de la causa raíz
              p.text-center Investigar las razones subyacentes que originaron la desviación, involucrando a los responsables de cada área en el análisis.
            .tarjeta.tarjeta-blanca-custom.p-4
              .row.justify-content-center.mb-3
                .col-6
                  img(src='@/assets/curso/Temas/tema2/img28.png' alt='Icono')
              h4.text-center Elaboración del informe de desviaciones
              p.text-center Documentar la magnitud de la diferencia, sus causas probables y las acciones correctivas propuestas, con responsables y plazos definidos.
            .tarjeta.tarjeta-blanca-custom.p-4
              .row.justify-content-center.mb-3
                .col-6
                  img(src='@/assets/curso/Temas/tema2/img29.png' alt='Icono')
              h4.text-center Seguimiento de las acciones correctivas
              p.text-center Verificar que las medidas adoptadas hayan generado el impacto esperado en el siguiente período de revisión del tablero de control.
    .row.justify-content-center
          .col-lg-12
            .cajon
              .row.justify-content-center.align-items-center
                .col-1.col-md-1.mb-1.mb-md-0.d-none.d-lg-block
                  figure
                    img(src="@/assets/curso/Temas/tema2/img30.png" alt="Icono rendimiento")
                .col-12.col-md-11
                  p.mb-0 La correcta gestión de las desviaciones es lo que permite que el CMI funcione como un sistema de mejora continua y no como un simple instrumento de registro. Cuando las desviaciones se identifican, analizan y corrigen de manera sistemática, la organización fortalece su capacidad de respuesta estratégica y garantiza la alineación permanente entre la operación diaria y los objetivos definidos en la planeación estratégica. Este proceso de corrección y ajuste es precisamente el que da lugar a los planes de acción y a la mejora continua.
    separador
    #t_2_4.titulo-segundo.color-acento-contenido
      h2 2.4 Planes de acción y mejora continua  
    .row.justify-content-center.align-items-center.mb-4

      .col-lg-8
        .py-3
          p.mb-3 Los planes de acción y de mejora continua son las acciones en las que la organización se concentra para alcanzar los objetivos estratégicos definidos en el CMI. Su formulación responde directamente a los hallazgos del análisis de resultados y a las desviaciones identificadas en el tablero de control, lo que los convierte en el mecanismo operativo que cierra el ciclo entre la medición y la acción. Es fundamental priorizar las iniciativas en función de los objetivos estratégicos, analizando el impacto de cada una sobre el desempeño organizacional.
          p.mb-0 Al analizar el impacto de las iniciativas en marcha sobre cada uno de los objetivos estratégicos, es posible identificar situaciones que requieren atención inmediata:
      .col-lg-4
        figure
          img(src="@/assets/curso/Temas/tema2/img31.png", alt="Imagen decorativa")
    .row.mb-4
      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.color-acento-botones.p-4.h-100
          .row.justify-content-center.mb-3
            .col-4
              figure
                img(src='@/assets/curso/Temas/tema2/img61.png', alt='Texto que describa la imagen')

          p.text-center Hay iniciativas que aportan poco valor al cumplimiento de los objetivos estratégicos definidos.

      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.color-acento-botones.p-4.h-100
          .row.justify-content-center.mb-3
            .col-4
              figure
                img(src='@/assets/curso/Temas/tema2/img33.png', alt='Texto que describa la imagen')

          p.text-center Hay objetivos estratégicos que no cuentan con el soporte de ninguna iniciativa en ejecución.
      
      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.color-acento-botones.p-4.h-100
          .row.justify-content-center.mb-3
            .col-4
              figure
                img(src='@/assets/curso/Temas/tema2/img34.png', alt='Texto que describa la imagen')

          p.text-center Hay organizaciones que no han estructurado formalmente su plan estratégico, lo que dificulta la alineación entre las acciones y los resultados esperados.
    p.mb-4 La estructura del plan de acción define los elementos mínimos que debe contener para garantizar su pertinencia y efectividad. La siguiente figura ilustra los componentes que lo integran:
    
    .row.justify-content-center.align-items-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos="fade-left")
          h5 Figura 2. 
          span Factores del modelo biopsicosocial
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10.movil(data-aos="fade-left")
        figure
          img(src='@/assets/curso/Temas/tema2/img35_1.svg', alt='Figura 2. Estructura del plan de acción. Diagrama de árbol que representa los ocho componentes mínimos de un plan de acción en el CMI: Responsable, recursos, prioridad y objetivo, hitos, fecha de comienzo, fecha final, indicadores y metas, los cuales orientan la ejecución y el seguimiento de los objetivos estratégicos de la organización.')
          
      .col-lg-10.desktop(data-aos="fade-left")
        figure
          img(src='@/assets/curso/Temas/tema2/img35.svg', alt='Figura 2. Estructura del plan de acción. Diagrama de árbol que representa los ocho componentes mínimos de un plan de acción en el CMI: Responsable, recursos, prioridad y objetivo, hitos, fecha de comienzo, fecha final, indicadores y metas, los cuales orientan la ejecución y el seguimiento de los objetivos estratégicos de la organización.')

    p.mb-4 Una vez identificadas las situaciones que requieren atención dentro del plan estratégico, es fundamental estructurar correctamente cada plan de acción para garantizar su pertinencia y efectividad. Para ello, todo plan debe incluir como mínimo los siguientes componentes:
    .row.justify-content-center.mb-5
      .col-lg-10
        .tarjeta.tarjeta--azul-suave.p-4.p-lg-4
          .row.mb-4
            .col-auto
              img(src='@/assets/curso/Temas/tema1/img14.png', style="width: 20px")
            .col
              p.mb-0 #[b Un único responsable] 
              | Garantiza que se cumpla con los tiempos establecidos y que se realice un monitoreo permanente a los demás involucrados, en pro de la ejecución oportuna del plan de acción.
        
          .row.mb-4
            .col-auto
              img(src='@/assets/curso/Temas/tema1/img14.png', style="width: 20px")
            .col
              p.mb-0 #[b Recursos] 
              | Debe contar con la asignación precisa y clara de los recursos requeridos para su ejecución, tanto humanos como financieros y tecnológicos.
          
          .row.mb-4
            .col-auto
              img(src='@/assets/curso/Temas/tema1/img14.png', style="width: 20px")
            .col
              p.mb-0 #[b Prioridad estratégica y objetivo] 
              | La finalidad del plan de acción debe estar claramente definida, con un tiempo estimado para su ejecución y una relación explícita con el objetivo estratégico al que responde.
          
          .row.mb-4
            .col-auto
              img(src='@/assets/curso/Temas/tema1/img14.png', style="width: 20px")
            .col
              p.mb-0 #[b Hitos] 
              | Los hitos son actividades clave que conllevan otras actividades subordinadas y se utilizan como fases intermedias del plan. Permiten disponer de puntos de control para verificar la efectividad de la ejecución antes de llegar al resultado final.
          
          .row.mb-4
            .col-auto
              img(src='@/assets/curso/Temas/tema1/img14.png', style="width: 20px")
            .col
              p.mb-0 #[b Fecha de inicio] 
              | Para un mayor control y una intervención oportuna, la fecha de inicio debe ser claramente definida y cumplida desde el primer momento de la ejecución.
          
          .row.mb-4
            .col-auto
              img(src='@/assets/curso/Temas/tema1/img14.png', style="width: 20px")
            .col
              p.mb-0 #[b Fecha de finalización] 
              | Es fundamental contar con una fecha estipulada para dar por terminado el plan de acción, lo que facilita el seguimiento y la rendición de cuentas ante los responsables.
          
          .row.mb-4
            .col-auto
              img(src='@/assets/curso/Temas/tema1/img14.png', style="width: 20px")
            .col
              p.mb-0 #[b Indicadores] 
              | Son las métricas que se emplearán para el seguimiento de la ejecución del plan y la evaluación de sus resultados, garantizando que el avance sea medible y verificable.
          
          .row.mb-4
            .col-auto
              img(src='@/assets/curso/Temas/tema1/img14.png', style="width: 20px")
            .col
              p.mb-0 #[b Metas] 
              | Cada indicador debe tener establecida su meta. A modo de ejemplo: perspectiva financiera, objetivo: aumentar la rentabilidad, indicador: margen neto, meta: 12 % (actualmente 8,5 %).
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/Temas/tema2/img36.png", alt="Imagen decorativa") 
      .col-lg-8
        p.mb-3 Conforme se va llevando a cabo el plan de acción, el indicador debe ir reflejando el avance, mostrando como resultado un valor que difiere del que tenía en el punto de partida hasta que se haya alcanzado la meta definida. Este seguimiento continuo es el que convierte el plan de acción en un instrumento dinámico y no en un documento estático.
        .row.justify-content-center.align-items-center.mb-3
          .col-8.col-lg-3.mb-2.mb-lg-0
            figure
              img.mx-auto.d-block(src="@/assets/curso/Temas/tema2/img37.png" alt="Imagen modelo SECI")
          .col-lg-9
            .cajon
              p.mb-0 Una vez definidos los componentes del plan de acción, es fundamental comprender cómo estos elementos se articulan en la práctica organizacional. La formulación de un plan de acción efectivo no depende únicamente de contar con los componentes mencionados, sino de garantizar que cada uno de ellos esté alineado con el objetivo estratégico que se busca alcanzar y con los indicadores definidos en el CMI. Esta articulación es la que permite que el plan trascienda el nivel documental y se convierta en un instrumento real de transformación organizacional.
    p.mb-4 La siguiente tabla presenta un ejemplo práctico de cómo se estructura un plan de acción dentro del CMI, articulando cada componente con una situación organizacional concreta. Su análisis permite identificar de manera clara cómo se operacionaliza la estrategia a través de acciones específicas, responsables definidos y metas verificables:
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 4.
          span Ejemplo de plan de acción articulado al CMI
        
        .tabla-a.tabla-identica
          table
            thead
              tr
                th.w-25 Componente
                th.w-35 Descripción
                th.w-40 Ejemplo práctico
            tbody
              tr
                th.bg-crema-claro Perspectiva
                td Dimensión estratégica del CMI a la que responde el plan
                td Clientes
              tr
                th.bg-crema-claro Objetivo estratégico
                td Propósito que se busca alcanzar
                td Mejorar la satisfacción del cliente
              tr
                th.bg-crema-claro Indicador
                td Métrica que mide el avance del objetivo
                td Índice de satisfacción del cliente
              tr
                th.bg-crema-claro Meta
                td Valor esperado del indicador al finalizar el plan
                td 90 % de clientes satisfechos
              tr
                th.bg-crema-claro Responsable
                td Persona encargada de liderar la ejecución
                td Coordinador de servicio al cliente
              tr
                th.bg-crema-claro Recursos
                td Medios requeridos para la ejecución
                td Capacitación, herramientas digitales
              tr
                th.bg-crema-claro Fecha de inicio
                td Momento en que comienza la ejecución
                td 1 de marzo de 2026
              tr
                th.bg-crema-claro Fecha de finalización
                td Momento en que concluye el plan
                td 30 de junio de 2026
              tr
                th.bg-crema-claro Hitos
                td Fases intermedias de control y verificación
                td Mes 1: diagnóstico; mes 2: capacitación; mes 3: seguimiento
              tr
                th.bg-crema-claro Estado actual del indicador
                td Valor de partida antes de ejecutar el plan
                td 83 % de clientes satisfechos
              tr
                th.bg-crema-claro Prioridad estratégica
                td Nivel de urgencia e impacto sobre la estrategia
                td Alta   
    .row.justify-content-center.align-items-center.mb-4

      .col-lg-9
        p.mb-3 Como se evidencia en la tabla anterior, cada componente del plan de acción cumple una función específica dentro del proceso de mejora continua. La articulación entre el indicador, la meta y los hitos es lo que permite hacer un seguimiento riguroso del avance y detectar oportunamente cualquier desviación que pueda comprometer el logro del objetivo estratégico definido.
        .row.justify-content-center
          .col-lg-12
            .cajon.color.p-4.col(style="background-color: #BEC2CF;")
              .row.justify-content-center.align-items-center
                .col-1.col-md-1.mb-1.mb-md-0.d-none.d-lg-block
                  figure
                    img(src="@/assets/curso/Temas/tema2/img38.png" alt="Icono rendimiento")
                .col-12.col-md-11
                  p.mb-0 La mejora continua dentro del CMI no es un evento aislado, sino un proceso cíclico que se retroalimenta permanentemente de los resultados obtenidos en cada período de evaluación. Cuando un plan de acción concluye y la meta se alcanza, la organización revisa sus objetivos, ajusta sus indicadores y formula nuevos planes que respondan a las condiciones del entorno y a los retos estratégicos del siguiente período. Este enfoque garantiza que el CMI evolucione junto con la organización y no quede obsoleto con el tiempo.
      .col-lg-3
        figure
          img(src="@/assets/curso/Temas/tema2/img39.png", alt="Imagen decorativa")    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-8.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/Temas/tema2/img39_1.png", alt="Imagen decorativa") 
      .col-lg-8
        p.mb-4 La implementación efectiva de los planes de acción requiere una cultura organizacional que valore la medición, la transparencia y la responsabilidad en todos los niveles jerárquicos. Los equipos de trabajo deben comprender que los planes de acción no son una carga administrativa, sino la herramienta que les permite demostrar su contribución al logro de los objetivos estratégicos.
        .tarjeta.BG02.p-4
          p.mb-0 La mejora continua se sustenta en el principio de que toda organización tiene la capacidad de optimizar su desempeño cuando cuenta con información oportuna, procesos bien definidos y equipos comprometidos con los resultados. En este sentido, el CMI proporciona el marco metodológico para identificar las brechas entre lo planeado y lo ejecutado, y para transformar esas brechas en oportunidades concretas de mejora. Cuando este ciclo se institucionaliza en la cultura organizacional, la mejora deja de ser una reacción ante el error y se convierte en una práctica sistemática orientada a la excelencia.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-2.col-6.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/Temas/tema2/img41.png", alt="Imagen decorativa")    
      .col-lg-10
        p.mb-3 Finalmente, es importante reconocer que la mejora continua no opera exclusivamente en el nivel estratégico, sino que permea todos los niveles de la organización. Cada área, cada proceso y cada colaborador tiene la posibilidad de contribuir al ciclo de mejora cuando comprende cómo su trabajo se conecta con los indicadores del CMI y con los objetivos estratégicos de la organización. Esta conexión entre lo operativo y lo estratégico es la que convierte el CMI en una herramienta de gestión integral y en el fundamento para que los indicadores cumplan su propósito más importante: apoyar la toma de decisiones organizacionales.
    separador
    #t_2_5.titulo-segundo.color-acento-contenido
      h2 2.5 Indicadores estratégicos para la toma de decisiones
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/Temas/tema2/img42.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p Los indicadores estratégicos reducen la incertidumbre y permiten evaluar riesgos, asignar recursos y justificar decisiones dentro de la organización. Su diseño e implementación en el marco del CMI traduce la estrategia en métricas tangibles que facilitan el monitoreo en tiempo real, la alineación operativa con los objetivos estratégicos y la identificación de áreas de mejora. Una gestión basada en indicadores promueve la transparencia y la responsabilidad organizacional, garantizando que las acciones estén fundamentadas en datos objetivos y verificables.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-1.col-md-1.d-none.d-lg-block
        figure
          img(src="@/assets/curso/Temas/tema2/img43.png", alt="alt")
      .col-lg-8.col-md-8
          p.mb-3 Para que los indicadores cumplan su función como apoyo a la toma de decisiones, es necesario que estén correctamente formulados, vinculados a una perspectiva del CMI y asociados a metas cuantificables. Un indicador que no responde a un objetivo estratégico claro pierde su utilidad como herramienta de gestión y se convierte en un dato sin impacto en la dirección organizacional. Por ello, su selección debe ser un proceso riguroso, participativo y alineado con la estrategia definida en el mapa estratégico de la organización. Los indicadores clave se dividen por perspectiva y actúan como alertas tempranas para la toma de decisiones.
          p A continuación, se describen los indicadores más representativos de cada perspectiva del CMI:
      .col-lg-3.col-md-5.mb-4.mb-md-0
        figure
          img(src="@/assets/curso/Temas/tema2/img44.png", alt="alt")
    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-primario-oscuro.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/Temas/tema2/img45.png', alt='Icono Control Preventivo')
        h4.text-center.text-white Perspectiva financiera
        p.text-center.text-white Evalúa el éxito económico de la organización y mide el impacto financiero de las decisiones estratégicas adoptadas en las demás perspectivas.

      .col-md.tarjeta.color-primario-suave.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/Temas/tema2/img46.png', alt='Icono Control Directivo')
        h4.text-center Perspectiva del cliente
        p.text-center Mide la satisfacción y el posicionamiento de la organización en el mercado, reflejando la percepción del cliente sobre la propuesta de valor ofrecida.

      .col-md.tarjeta.color-acento-contenido-suave.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/Temas/tema2/img47.png', alt='Icono Control In Situ')
        h4.text-center Perspectiva de procesos internos
        p.text-center Optimiza la cadena de valor y la operatividad de la organización, evaluando la capacidad de los procesos internos para generar valor de manera eficiente. 

      .col-md.tarjeta.color-acento-botones-suave.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/Temas/tema2/img48.png', alt='Icono Control Posterior')
        h4.text-center Perspectiva de aprendizaje y crecimiento
        p.text-center Mide la capacidad de innovación y el desarrollo del capital humano, evaluando los activos intangibles que sostienen la competitividad organizacional a largo plazo.
    p.mb-4 Cuando se diseñan y seleccionan indicadores acordes con el objetivo estratégico y su funcionamiento corresponde a los parámetros establecidos, estos instrumentos generan los siguientes beneficios para la toma de decisiones:
    .row.justify-content-center.mb-5
      .col-lg-3.col-6.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/Temas/tema2/img49.png', alt='Icono Control Posterior')
      .col-lg-7
        .tarjeta.tarjeta--azul-suave.p-3.p-lg-3
          .row.mb-4
            .col-auto
              img(src='@/assets/curso/Temas/tema1/img14.png', style="width: 20px")
            .col
              p.mb-0 #[b Visión integral:] combina indicadores financieros con no financieros para ofrecer un panorama completo del desempeño organizacional, superando el enfoque exclusivamente económico.
        
          .row.mb-4
            .col-auto
              img(src='@/assets/curso/Temas/tema1/img14.png', style="width: 20px")
            .col
              p.mb-0 #[b Proactividad:] permite detectar desviaciones y aplicar correctivos en tiempo real, antes de que el impacto negativo se consolide en los resultados estratégicos.
          
          .row.mb-4
            .col-auto
              img(src='@/assets/curso/Temas/tema1/img14.png', style="width: 20px")
            .col
              p.mb-0 #[b Alineación:] conecta la operación diaria con la estrategia de alto nivel, garantizando que cada acción operativa contribuya al logro de los objetivos organizacionales.
          
          .row.mb-4
            .col-auto
              img(src='@/assets/curso/Temas/tema1/img14.png', style="width: 20px")
            .col
              p.mb-0 #[b Accionables y cuantificables:] los indicadores deben ser claros, medibles y permitir acciones directas, evitando la ambigüedad en la interpretación de los resultados.
    .row.justify-content-center.mb-4
          .col-lg-12
            .cajon
              .row.justify-content-center.align-items-center
                .col-1.col-md-1.mb-1.mb-md-0
                  figure
                    img(src="@/assets/curso/Temas/tema2/img50.png" alt="Icono rendimiento")
                .col-12.col-md-11
                  p.mb-0 Los indicadores de desempeño funcionan como el cuadro de mando que permite controlar la salud de la organización. Para ejercer este control de manera efectiva, no se requiere un número ilimitado de indicadores, sino los suficientes para monitorear los signos vitales del desempeño organizacional. Estos signos incluyen el progreso obtenido y la posibilidad de analizar patrones de comportamiento en los resultados, cuando los hay. Por ello, es fundamental que durante la formulación de indicadores se hayan considerado todos los ámbitos en los que la organización desea actuar desde la planeación estratégica, garantizando una cobertura integral y coherente con los objetivos definidos en el CMI.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-9.order-2.order-lg-1
        p.mb-3 La toma de decisiones basada en indicadores estratégicos representa un cambio fundamental en la cultura organizacional, pues desplaza las decisiones intuitivas hacia un enfoque sistemático fundamentado en evidencia. Este cambio no ocurre de manera automática; requiere que los líderes comprendan el significado de cada indicador, su relación con los objetivos estratégicos y las implicaciones de sus resultados en el desempeño global de la organización. Cuando este nivel de comprensión se generaliza en todos los niveles jerárquicos, la organización desarrolla una capacidad de respuesta estratégica más ágil y efectiva.
        .row.justify-content-center
          .col-lg-12
            .cajon.p-4(style="background-color: #FEE7CC;")
              p.mb-0 La selección adecuada de indicadores es tan importante como su medición. Una organización que diseña demasiados indicadores corre el riesgo de generar sobrecarga de información, lo que dificulta la identificación de las señales realmente relevantes para la toma de decisiones. La práctica organizacional ha demostrado que, entre ocho y diez indicadores por área, garantizando al menos uno por cada resultado esperado, es suficiente para mantener un control efectivo del desempeño sin saturar los procesos de seguimiento y análisis (Función Pública, 2018).
      .col-lg-3.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/Temas/tema2/img51.png", alt="Imagen decorativa")
    .row.justify-content-center.mb-5
      .col-lg-3.col-6.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/Temas/tema2/img52.png', alt='Icono Control Posterior')
      .col-lg-7
        p.mb-2 Para que los indicadores estratégicos cumplan su función de manera efectiva como apoyo a la toma de decisiones, deben reunir las siguientes características esenciales:
        .tarjeta.tarjeta--azul-suave.p-3.p-lg-3
          .row.mb-1
            .col-auto
              img(src='@/assets/curso/Temas/tema1/img14.png', style="width: 20px")
            .col
              p.mb-0 Estar vinculados a un objetivo estratégico claramente definido en el mapa del CMI.
        
          .row.mb-2
            .col-auto
              img(src='@/assets/curso/Temas/tema1/img14.png', style="width: 20px")
            .col
              p.mb-0 Contar con una fórmula de cálculo precisa, verificable y de fácil comprensión para los responsables.
          
          .row.mb-2
            .col-auto
              img(src='@/assets/curso/Temas/tema1/img14.png', style="width: 20px")
            .col
              p.mb-0 Tener una meta establecida con valores de referencia que permitan determinar el nivel de cumplimiento.
          
          .row.mb-2
            .col-auto
              img(src='@/assets/curso/Temas/tema1/img14.png', style="width: 20px")
            .col
              p.mb-0 Contar con una fuente de información confiable, accesible y actualizable periódicamente.
          
          .row.mb-2
            .col-auto
              img(src='@/assets/curso/Temas/tema1/img14.png', style="width: 20px")
            .col
              p.mb-0 Tener un responsable de seguimiento claramente asignado en cada período de evaluación.
          
          .row.mb-2
            .col-auto
              img(src='@/assets/curso/Temas/tema1/img14.png', style="width: 20px")
            .col
              p.mb-0 Ser sensibles a los cambios del entorno, de manera que reflejen con fidelidad las variaciones en el desempeño organizacional.
    
    p.mb-4 El uso de indicadores estratégicos en el CMI no se limita al nivel directivo. Su mayor impacto se genera cuando los equipos operativos también comprenden cómo sus actividades diarias se reflejan en los indicadores de cada perspectiva. Esta comprensión transversal fortalece el sentido de pertenencia, la motivación y el compromiso con los resultados, convirtiendo el seguimiento de indicadores en una práctica colectiva y no en una responsabilidad exclusiva de la alta dirección.
    .row
      .col-lg-9
        .row.justify-content-center.mb-4
          .col-lg-12
            .cajon
              .row.justify-content-center.align-items-center
                .col-1.col-md-1.mb-1.mb-md-0.d-none.d-lg-block
                  figure
                    img(src="@/assets/curso/Temas/tema2/img53.png" alt="Icono rendimiento")
                .col-12.col-md-11
                  p.mb-0 La implementación de indicadores estratégicos debe ir acompañada de un proceso de comunicación organizacional que garantice que todos los colaboradores conozcan las metas, comprendan los indicadores que las miden y sepan cómo sus acciones contribuyen al logro de los objetivos estratégicos. Para fortalecer este proceso de comunicación e implementación, se recomiendan las siguientes prácticas organizacionales:
        .row.justify-content-center.align-items-stretch
          //- Tarjeta 1
          .col-lg-4.col-md-6.mb-4
            .BGTAR01.p-4.h-100
              .row.mb-3
                .col-3
                  figure
                    img(src='@/assets/curso/Temas/tema2/img54.svg', alt='Icono')
              p.mb-0 Realizar sesiones periódicas de socialización de resultados con todos los niveles de la organización. 

          //- Tarjeta 2
          .col-lg-4.col-md-6.mb-4
            .BGTAR01.p-4.h-100
              .row.mb-3
                .col-3
                  figure
                    img(src='@/assets/curso/Temas/tema2/img55.svg', alt='Icono')
              p.mb-0 Diseñar tableros de control accesibles y comprensibles para los equipos operativos y directivos. 

          //- Tarjeta 3
          .col-lg-4.col-md-6.mb-4
            .BGTAR01.p-4.h-100
              .row.mb-3
                .col-3
                  figure
                    img(src='@/assets/curso/Temas/tema2/img56.svg', alt='Icono')
              p Establecer reuniones de seguimiento con frecuencia mensual o trimestral para revisar el avance de los indicadores. 

          //- Tarjeta 4
          .col-lg-4.col-md-6.mb-4
            .BGTAR01.p-4.h-100
              .row.mb-3
                .col-3
                  figure
                    img(src='@/assets/curso/Temas/tema2/img57.svg', alt='Icono')
              p.mb-0 Documentar las lecciones aprendidas de cada ciclo de evaluación para mejorar la formulación de indicadores futuros.

          //- Tarjeta 5
          .col-lg-4.col-md-6.mb-4
            .BGTAR01.p-4.h-100
              .row.mb-3
                .col-3
                  figure
                    img(src='@/assets/curso/Temas/tema2/img58.svg', alt='Icono')
              p.mb-0 Incorporar la revisión de indicadores como parte de la agenda regular de los comités directivos. 

          //- Tarjeta 6
          .col-lg-4.col-md-6.mb-4
            .BGTAR01.p-4.h-100
              .row.mb-3
                .col-3
                  figure
                    img(src='@/assets/curso/Temas/tema2/img59.svg', alt='Icono')
              p.mb-0 Articular los resultados de los indicadores con los procesos de reconocimiento y desarrollo del talento humano.
      .col-lg-3.col-4.order-1.order-lg-2.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/Temas/tema2/img60.png', alt='Icono')     
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p Los indicadores estratégicos constituyen, en última instancia, el lenguaje común a través del cual la organización evalúa su desempeño comunica sus avances y toma decisiones informadas. Su correcta formulación, seguimiento y análisis es lo que permite que el Cuadro de Mando Integral trascienda el nivel conceptual y se convierta en una herramienta viva de gestión estratégica, capaz de orientar a la organización hacia el logro sostenible de sus objetivos en un entorno de constante cambio y alta complejidad.
    

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
