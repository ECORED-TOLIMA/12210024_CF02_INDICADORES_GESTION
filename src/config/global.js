export default {
  global: {
    Name: 'Construcción e implementación de indicadores de gestión',
    Description:
      'Este componente presenta el Cuadro de Mando Integral (CMI), también denominado Balanced Scorecard, como herramienta de gestión estratégica que alinea la visión organizacional con objetivos medibles. Se desarrollan sus fundamentos teóricos, perspectivas, mapa estratégico, relaciones causa-efecto, indicadores y mecanismos de seguimiento, destacando su aplicación sectorial, utilidad para la toma de decisiones e impacto en la mejora continua.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Cuadro de mando integral – <em>Balanced Scorecard</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Origen y fundamentos del CMI',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Perspectivas',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Mapa estratégico',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Relación causa-efecto',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Implementación del CMI',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Análisis, seguimiento y toma de decisiones',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Análisis de resultados',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Tableros de control',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Identificación de desviaciones',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Planes de acción y mejora continua',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Indicadores estratégicos para la toma de decisiones',
            hash: 't_2_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA2_12210024_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '',
      referencia: '',
      tipo: 'Sitio web',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Activos intangibles',
      significado:
        'recursos de valor propiedad de una empresa que carecen de sustancia física, inmateriales o incorporales.',
    },
    {
      termino: 'Análisis PEST',
      significado:
        'herramienta de planeación estratégica utilizada para evaluar el impacto de factores externos en una empresa: políticos, económicos, sociales y tecnológicos.',
    },
    {
      termino: 'Balanced ScoreCard',
      significado:
        'conocido también como Cuadro de Mando Integral (CMI). Es una herramienta de gestión estratégica que traduce la visión y misión de una empresa en objetivos concretos, indicadores, metas e iniciativas.',
    },
    {
      termino: 'Cadena de valor',
      significado:
        'modelo estratégico que desglosa las actividades de una organización para entender cómo crean valor, optimizar costos y se obtiene la ventaja competitiva.',
    },
    {
      termino: 'Desviaciones',
      significado:
        'en el contexto de Cuadro de Mando Integral (CMI) es la diferentes entre metas esperadas y desempeño real.',
    },
    {
      termino: 'Perspectiva',
      significado:
        'son los cuatro enfoques o puntos de vista fundamentales desde los cuales se mide el desempeño estratégico de una empresa: financiera, cliente, procesos internos, y aprendizaje y crecimiento.',
    },
    {
      termino: 'Propuesta de valor',
      significado:
        'es una promesa esencial que diseña una empresa con el fin de conectar emocionalmente con su cliente potencial y real, comunica un valor tangible, no solo características.',
    },
  ],
  referencias: [
    {
      referencia:
        'Función Pública. (2018). Guía para la construcción y análisis de indicadores de gestión (4.ª ed.).',
      link: '',
    },
    {
      referencia:
        'Ghiglione, F. A. (2021). El Cuadro de Mando Integral como herramienta de eficiencia en la gestión empresarial. Ciencias Administrativas, 9(18), 88–96.',
      link: 'https://doi.org/10.24215/23143738e088',
    },
    {
      referencia:
        'Montes Soriano, E. B. (2016). Definición, desarrollo e implementación de un Cuadro de Mando Integral para el control de la gestión estratégica de una empresa constructora en El Salvador. Universidad Politécnica de Valencia.',
      link: '',
    },
    {
      referencia:
        'Páez, F. (2017). El Cuadro de Mando Integral (IV): Los planes de acción. CMI Gestión.',
      link: '',
    },
    {
      referencia:
        'Kaplan, R. S. y Norton, D. P. (2001). Strategy-focused organization: How balanced scorecard companies thrive in the new business environment. Harvard Business School Press.',
      link: '',
    },
    {
      referencia:
        'Savkín, A. (2019). Aprendiendo del mapa estratégico Tesco y del Cuadro de Mando. BSC Designer.',
      link: '',
    },
    {
      referencia:
        'SENA. Ecosistema de Recursos Educativos Digitales. (2023). Balanced Scorecard o Cuadro de Mando Integral [Video]. YouTube.',
      link: 'https://www.youtube.com/watch?v=MR87o2CxGy0',
    },
    {
      referencia:
        'SENA. Ecosistema de Recursos Educativos Digitales. (2023). Clasificación de indicadores en la gestión de las empresas [Video]. YouTube.',
      link: 'https://www.youtube.com/watch?v=RhvHUVVLaBg&t=7s',
    },
    {
      referencia:
        'SENA. Ecosistema de Recursos Educativos Digitales. (2023). Indicadores de gestión (KPI) [Video]. YouTube.',
      link: 'https://www.youtube.com/watch?v=nCUYv5oPwJY',
    },
    {
      referencia:
        'SENA. Ecosistema de Recursos Educativos Digitales. (2023). La validación de la información y diseño de indicadores de gestión [Video]. YouTube.',
      link: 'https://www.youtube.com/watch?v=_pcuK2pm1UM',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Responsable Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Dirección General',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Experta temática',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gloria Lida Alzate Suárez ',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Juan Daniel Polanco Muñoz',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Veimar Celis Meléndez',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
          cargo: 'Desarrollador <em>full stack</em>',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'María Fernanda Pineda Mora',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
