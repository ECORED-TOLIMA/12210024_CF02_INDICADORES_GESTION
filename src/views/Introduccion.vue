<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    p Este componente presenta el Cuadro de Mando Integral (CMI), también denominado Balanced Scorecard, como herramienta de gestión estratégica que permite traducir la visión y la estrategia organizacional en objetivos medibles y verificables. Su origen se remonta a los aportes de Kaplan y Norton en 1992, quienes demostraron la insuficiencia de los sistemas de evaluación basados exclusivamente en indicadores financieros. 

    .row.justify-content-center.align-items-center.mb-4

      .col-lg-9
        .row.justify-content-center
          .col-lg-12
            .cajon.color-acento-botones.p-3.col
              .row.justify-content-center.align-items-center
                .col-1.col-md-1.mb-1.mb-md-0
                  figure
                    img(src="@/assets/curso/Temas/introduccion/img1.png" alt="Icono rendimiento")
                .col-12.col-md-11
                  p.mb-0 A partir de ese enfoque, el CMI integra cuatro perspectivas fundamentales: financiera, clientes, procesos internos, y aprendizaje y crecimiento, las cuales brindan una visión equilibrada e integral del desempeño organizacional. Se desarrollan los fundamentos conceptuales del modelo, su estructura, el mapa estratégico, las relaciones causa-efecto y el proceso de implementación por fases.
        .py-2
          p.mb-3 El propósito de este componente es fortalecer las competencias para el análisis y seguimiento de la gestión organizacional mediante el uso del CMI como sistema activo de toma de decisiones. Para ello, se abordan el uso de tableros de control, los semáforos de desempeño, la identificación de desviaciones y la formulación de planes de acción orientados a la mejora continua. El desarrollo temático combina un enfoque teórico-práctico que permite comprender cómo los indicadores estratégicos, organizados por perspectiva, contribuyen al logro sostenible de los objetivos y a la alineación entre la operación diaria y la estrategia institucional.

      .col-lg-3
        figure
          img(src="@/assets/curso/Temas/introduccion/img2.png", alt="Imagen decorativa")
    p.mb-4 Para comprender la importancia del contenido y los temas abordados, se recomienda acceder al siguiente video:
    .row.justify-content-center.align-items-center
      .col-lg-12
        figure(data-aos="zoom-in")
          .video
            iframe(width="1346" height="757" src="https://www.youtube.com/embed/BPEm300HKyk" title="#[i Frontend] con #[i HTML]5, #[i CSS] y #[i JSS]: introducción" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
</template>

<script>
export default {
  name: 'Introduccion',
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
