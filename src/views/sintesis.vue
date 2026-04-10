<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p La construcción e implementación de indicadores de gestión parte del Cuadro de Mando Integral (CMI) como modelo estratégico que organiza los objetivos organizacionales en cuatro perspectivas: financiera, cliente, procesos internos, y aprendizaje y crecimiento. El mapa estratégico y la relación causa-efecto permiten vincular los indicadores con la planeación estratégica, garantizando su coherencia con la visión y los objetivos de la organización.
    p La implementación de los indicadores requiere un análisis continuo de resultados mediante tableros de control y semáforos de desempeño, herramientas que facilitan la identificación oportuna de desviaciones. A partir de dicho análisis, se formulan planes de acción orientados a la mejora continua, con lo cual los indicadores de gestión se consolidan como instrumentos clave para la toma de decisiones estratégicas fundamentadas en datos objetivos y verificables. A continuación, el mapa conceptual presenta, de manera visual, la organización de los temas abordados y la relación entre sus ejes temáticos.

    .row.justify-content-center
      .col-lg-8.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu tincidunt erat. Fusce cursus mauris in nulla egestas vulputate. Phasellus viverra accumsan libero, sed luctus diam maximus euismod. Mauris sem risus, tincidunt vel libero in, lobortis commodo ante. Sed pulvinar luctus orci in rhoncus. Nulla ut dapibus risus, ac tempor est. Donec nulla augue, vehicula quis malesuada vitae, fermentum non nisi. Donec tincidunt nibh a magna bibendum rutrum. ")
    .row.justify-content-center
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
