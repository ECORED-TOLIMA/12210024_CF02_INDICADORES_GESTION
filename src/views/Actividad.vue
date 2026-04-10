<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema:
        '¡A todo tablero! Reto estratégico sobre el CMI, seguimiento e indicadores de gestión.',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> evaluar el grado de apropiación del aprendiz sobre los fundamentos del Cuadro de Mando Integral, sus herramientas de seguimiento y el uso de indicadores de gestión para la toma de decisiones.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Quiénes introdujeron el Cuadro de Mando Integral en el ámbito empresarial y en qué año?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Taylor y Fayol, en 1903.', esCorrecta: false },
            { id: 'b', texto: 'Drucker y Porter, en 1985.', esCorrecta: false },
            { id: 'c', texto: 'Maslow y Mayo, en 1950.', esCorrecta: false },
            { id: 'd', texto: 'Kaplan y Norton, en 1992.', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            'El Cuadro de Mando Integral (CMI) se define principalmente como:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Un sistema de contabilidad de costos para reducir gastos operativos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Una herramienta de gestión estratégica que traduce la visión en objetivos medibles.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Un método exclusivo para calcular indicadores financieros de rentabilidad.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Un reglamento interno que norma el comportamiento del talento humano.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Cuál de las siguientes perspectivas del CMI evalúa la rentabilidad y el valor para los inversionistas?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Perspectiva de aprendizaje y crecimiento.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Perspectiva de procesos internos.',
              esCorrecta: false,
            },
            { id: 'c', texto: 'Perspectiva financiera.', esCorrecta: true },
            { id: 'd', texto: 'Perspectiva del cliente.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            'La perspectiva del cliente en el CMI permite responder a la pregunta:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '¿Cómo optimizamos los procesos de producción interna?',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                '¿Cómo nos ven los accionistas y cuál es el retorno de la inversión?',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '¿Qué capacidades del talento humano deben desarrollarse?',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: '¿Cómo nos perciben nuestros clientes en el mercado?',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Cuál de las cuatro perspectivas del CMI actúa como base del modelo e impulsa el desempeño de las demás?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Perspectiva de aprendizaje y crecimiento.',
              esCorrecta: true,
            },
            { id: 'b', texto: 'Perspectiva financiera.', esCorrecta: false },
            { id: 'c', texto: 'Perspectiva del cliente.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Perspectiva de procesos internos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Cuál es la función principal del mapa estratégico en el Cuadro de Mando Integral?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Registrar los estados financieros anuales de la organización.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Integrar la planeación estratégica con sus perspectivas para medir mediante indicadores.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Elaborar el organigrama jerárquico de la empresa.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Diseñar el manual de funciones de cada cargo organizacional.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            'Según el CMI, la relación causa–efecto establece que el orden lógico de impacto entre perspectivas es:',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Financiero → Procesos → Cliente → Aprendizaje.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Cliente → Financiero → Aprendizaje → Procesos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Aprendizaje → Procesos internos → Cliente → Financiero.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Procesos → Aprendizaje → Financiero → Cliente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            'El primer paso para construir un mapa estratégico del CMI consiste en:',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Seleccionar los indicadores de desempeño de cada área.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Definir la misión, visión y valores de la organización.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Diseñar los tableros de control y semáforos de seguimiento.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Elaborar el plan de acción con iniciativas estratégicas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            "La fase denominada 'Cascada' en la construcción del mapa estratégico del CMI implica que:",
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Se aplica únicamente a organizaciones de gran tamaño con múltiples unidades de negocio.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Los indicadores financieros reemplazan a los indicadores de procesos internos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La estrategia y los objetivos se despliegan en niveles inferiores con indicadores más específicos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'El CMI se implementa solo en el nivel operativo de la organización.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Cuál es el propósito principal del análisis de resultados en el seguimiento organizacional?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Registrar los pagos realizados a proveedores durante el período evaluado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Comparar los objetivos establecidos con los resultados obtenidos para tomar decisiones.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Elaborar el organigrama actualizado de cada área de la organización.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Asignar responsables a cada cargo según el perfil definido en el manual de funciones.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            "El paso denominado 'evaluación de la causa raíz' en el análisis de resultados implica:",
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Ajustar automáticamente las metas cuando el indicador no alcanza el valor previsto.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Auditar los estados financieros del período para detectar inconsistencias contables.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Eliminar los indicadores que presenten desviaciones negativas de forma recurrente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Investigar las razones subyacentes de la desviación involucrando a los responsables de área.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            'Un tablero de control en el seguimiento organizacional tiene como función principal:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Registrar las actas de los comités directivos y los acuerdos de cada sesión.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Liquidar la nómina del personal vinculado a los proyectos estratégicos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Monitorear metas estratégicas de manera visual y sintetizada para facilitar decisiones.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Almacenar los contratos firmados con clientes y proveedores durante el período.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            'La alineación estratégica como beneficio del tablero de control significa que:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Conecta los objetivos generales de la organización con la operación diaria.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Sustituye las reuniones de seguimiento del equipo directivo por informes escritos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Centraliza la aprobación de gastos en una sola área administrativa de la empresa.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Delega todas las decisiones operativas al nivel técnico de la organización.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            '¿Qué significado tiene la alerta amarilla en el semáforo de desempeño del tablero de control?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El indicador alcanzó o superó la meta establecida de manera satisfactoria.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El indicador está muy por debajo de la meta y exige acción correctiva inmediata.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El indicador se encuentra por debajo de lo previsto, pero la situación es corregible.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'El indicador no dispone de datos suficientes para ser evaluado en el período.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            'La alerta roja en el semáforo de desempeño genera una situación crítica porque el indicador:',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Superó la meta prevista y requiere revisión del nivel de exigencia establecido.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Se encuentra muy por debajo de la meta y exige intervención correctiva inmediata.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Está pendiente de cálculo por parte del responsable del área en el período.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Fue modificado sin la aprobación del equipo estratégico de la organización.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto:
            '¿Cuál es la herramienta que refleja las desviaciones identificadas en el seguimiento del CMI?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El manual de funciones actualizado por el área de talento humano.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El informe de desviaciones, que detalla la magnitud de la diferencia y sus causas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'El estado de cuenta bancario del período evaluado por la organización.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El contrato de prestación de servicios firmado con el proveedor estratégico.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto:
            'Una desviación desfavorable en el seguimiento organizacional se caracteriza porque:',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El resultado real supera el valor planificado y genera mayor rentabilidad.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El resultado real es inferior al planificado, como retrasos o incumplimiento de calidad.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'La meta del indicador fue ajustada antes de finalizar el período de medición.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El indicador activa la alerta verde del semáforo de desempeño del tablero.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto:
            '¿Con base en qué criterio se priorizan las iniciativas dentro de un plan de acción del CMI?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El presupuesto disponible en la caja menor de cada área funcional de la empresa.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El tiempo de antigüedad de cada proceso dentro de la estructura organizacional.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El número de colaboradores asignados a la ejecución de cada iniciativa.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El impacto que tiene cada iniciativa en el cumplimiento de los objetivos estratégicos.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto:
            'Los indicadores estratégicos promueven la transparencia y la responsabilidad organizacional porque:',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Reemplazan la experiencia del directivo con datos generados automáticamente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Eliminan la necesidad de realizar reuniones periódicas de seguimiento y control.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Permiten evaluar riesgos, asignar recursos y justificar decisiones con información objetiva.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Garantizan que todas las decisiones sean aprobadas por la junta directiva.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto:
            '¿Qué condición debe cumplir un indicador para considerarse accionable y cuantificable?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Ser calculado exclusivamente por el área de tecnología o sistemas de la organización.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Reportarse únicamente al cierre del año en el informe de gestión anual.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Requerir aprobación de la alta dirección cada vez que sea modificado o ajustado.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Ser claro, medible y orientar acciones concretas para mejorar el desempeño.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
