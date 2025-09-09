import { defineConfig } from '@stackbit/config';

export default defineConfig({
  stackbitVersion: '~0.6.0',
  ssgName: 'custom',
  nodeVersion: '18',

  content: {
    root: 'content',
    models: [
      {
        name: 'homepage',
        label: 'Página Principal',
        type: 'page',
        file: 'content/home.json',
        urlPath: '/',
        fields: [
          { name: 'hero_title', label: 'Título Principal', type: 'string' },
          { name: 'hero_description', label: 'Descripción Principal', type: 'text' },
          { name: 'hero_image', label: 'Imagen Principal', type: 'image' },
          { name: 'cta_button_text', label: 'Texto del Botón Principal', type: 'string' },
          { name: 'logo', label: 'Logo del Sitio', type: 'image' },
          {
            name: 'stats',
            label: 'Estadísticas',
            type: 'object',
            fields: [
              { name: 'experience_years', label: 'Años de Experiencia', type: 'number' },
              { name: 'experience_text', label: 'Texto de Experiencia', type: 'string' },
              { name: 'experience_icon', label: 'Ícono de Experiencia', type: 'image' },
              { name: 'structures_count', label: 'Número de Estructuras', type: 'number' },
              { name: 'structures_text', label: 'Texto de Estructuras', type: 'string' },
              { name: 'structures_icon', label: 'Ícono de Estructuras', type: 'image' },
              { name: 'renders_text', label: 'Texto de Renders', type: 'string' },
              { name: 'renders_icon', label: 'Ícono de Renders', type: 'image' }
            ]
          }
        ]
      },
      {
        name: 'about',
        label: 'Acerca de Nosotros',
        type: 'page',
        file: 'content/about.json',
        urlPath: '/nosotros',
        fields: [
          { name: 'page_title', label: 'Título de la Página', type: 'string' },
          { name: 'hero_image', label: 'Imagen Principal', type: 'image' },
          { name: 'company_description', label: 'Descripción de la Empresa', type: 'text' },
          { name: 'philosophy', label: 'Filosofía', type: 'text' },
          {
            name: 'values',
            label: 'Valores/Características',
            type: 'list',
            items: {
              type: 'object',
              fields: [
                { name: 'title', label: 'Título', type: 'string' },
                { name: 'description', label: 'Descripción', type: 'string' },
                { name: 'icon', label: 'Ícono', type: 'image' }
              ]
            }
          },
          {
            name: 'team',
            label: 'Equipo',
            type: 'list',
            items: {
              type: 'object',
              fields: [
                { name: 'name', label: 'Nombre', type: 'string' },
                { name: 'position', label: 'Cargo', type: 'string' },
                { name: 'photo', label: 'Foto', type: 'image' },
                { name: 'bio', label: 'Biografía', type: 'text' }
              ]
            }
          }
        ]
      },
      {
        name: 'services',
        label: 'Servicios',
        type: 'page',
        file: 'content/services.json',
        urlPath: '/servicios',
        fields: [
          { name: 'page_title', label: 'Título de la Página', type: 'string' },
          { name: 'hero_image', label: 'Imagen Principal', type: 'image' },
          {
            name: 'services_list',
            label: 'Lista de Servicios',
            type: 'list',
            items: {
              type: 'object',
              fields: [
                { name: 'title', label: 'Título del Servicio', type: 'string' },
                { name: 'description', label: 'Descripción', type: 'text' },
                { name: 'icon', label: 'Ícono del Servicio', type: 'image' },
                { name: 'image', label: 'Imagen del Servicio', type: 'image' },
                { name: 'gallery', label: 'Galería de Imágenes', type: 'list', items: { type: 'image' } }
              ]
            }
          },
          {
            name: 'process_steps',
            label: 'Pasos del Proceso',
            type: 'list',
            items: {
              type: 'object',
              fields: [
                { name: 'step_number', label: 'Número del Paso', type: 'number' },
                { name: 'step_title', label: 'Título del Paso', type: 'string' },
                { name: 'step_description', label: 'Descripción del Paso', type: 'text' },
                { name: 'step_icon', label: 'Ícono del Paso', type: 'image' }
              ]
            }
          }
        ]
      },
      {
        name: 'projects',
        label: 'Proyectos',
        type: 'page',
        file: 'content/projects.json',
        urlPath: '/proyectos',
        fields: [
          { name: 'page_title', label: 'Título de la Página', type: 'string' },
          { name: 'hero_image', label: 'Imagen Principal', type: 'image' },
          {
            name: 'projects_list',
            label: 'Lista de Proyectos',
            type: 'list',
            items: {
              type: 'object',
              fields: [
                { name: 'title', label: 'Título del Proyecto', type: 'string' },
                { name: 'description', label: 'Descripción', type: 'text' },
                { name: 'location', label: 'Ubicación', type: 'string' },
                { name: 'category', label: 'Categoría', type: 'enum', options: ['Residencial','Comercial','Industrial','Paisajismo'] },
                { name: 'featured_image', label: 'Imagen Principal', type: 'image' },
                {
                  name: 'gallery',
                  label: 'Galería de Imágenes',
                  type: 'list',
                  items: {
                    type: 'object',
                    fields: [
                      { name: 'image', label: 'Imagen', type: 'image' },
                      { name: 'caption', label: 'Descripción', type: 'string' }
                    ]
                  }
                },
                {
                  name: 'technical_specs',
                  label: 'Especificaciones Técnicas',
                  type: 'object',
                  fields: [
                    { name: 'area', label: 'Área Total', type: 'string' },
                    { name: 'year', label: 'Año', type: 'number' },
                    { name: 'client', label: 'Cliente', type: 'string' }
                  ]
                },
                { name: 'details_link', label: 'Enlace a Detalles', type: 'string' }
              ]
            }
          }
        ]
      },
      {
        name: 'news',
        label: 'Noticias',
        type: 'page',
        file: 'content/news.json',
        urlPath: '/noticias',
        fields: [
          { name: 'page_title', label: 'Título de la Página', type: 'string' },
          { name: 'hero_image', label: 'Imagen Principal', type: 'image' },
          {
            name: 'articles',
            label: 'Artículos',
            type: 'list',
            items: {
              type: 'object',
              fields: [
                { name: 'date', label: 'Fecha', type: 'date' },
                { name: 'title', label: 'Título', type: 'string' },
                { name: 'summary', label: 'Resumen', type: 'text' },
                { name: 'content', label: 'Contenido Completo', type: 'text' },
                { name: 'featured_image', label: 'Imagen Destacada', type: 'image' },
                { name: 'thumbnail', label: 'Miniatura', type: 'image' },
                { name: 'category', label: 'Categoría', type: 'enum', options: ['Tendencias','Proyectos','Tecnología','Sostenibilidad'] },
                {
                  name: 'author',
                  label: 'Autor',
                  type: 'object',
                  fields: [
                    { name: 'name', label: 'Nombre', type: 'string' },
                    { name: 'photo', label: 'Foto', type: 'image' }
                  ]
                },
                { name: 'read_more_link', label: 'Leer Más', type: 'string' }
              ]
            }
          }
        ]
      },
      {
        name: 'contact',
        label: 'Contacto',
        type: 'page',
        file: 'content/contact.json',
        urlPath: '/contacto',
        fields: [
          { name: 'page_title', label: 'Título de la Página', type: 'string' },
          { name: 'hero_image', label: 'Imagen Principal', type: 'image' },
          {
            name: 'contact_info',
            label: 'Información de Contacto',
            type: 'object',
            fields: [
              { name: 'phone', label: 'Teléfono', type: 'string' },
              { name: 'email', label: 'Email', type: 'string' },
              { name: 'address', label: 'Dirección', type: 'string' },
              { name: 'office_hours', label: 'Horarios', type: 'string' }
            ]
          },
          {
            name: 'office_images',
            label: 'Imágenes de la Oficina',
            type: 'list',
            items: {
              type: 'object',
              fields: [
                { name: 'image', label: 'Imagen', type: 'image' },
                { name: 'description', label: 'Descripción', type: 'string' }
              ]
            }
          },
          { name: 'map_image', label: 'Mapa', type: 'image' }
        ]
      },
      {
        name: 'virtual_tours',
        label: 'Recorridos Virtuales',
        type: 'page',
        file: 'content/virtual-tours.json',
        urlPath: '/recorridos',
        fields: [
          { name: 'page_title', label: 'Título de la Página', type: 'string' },
          { name: 'hero_image', label: 'Imagen Principal', type: 'image' },
          {
            name: 'tours_list',
            label: 'Lista de Recorridos',
            type: 'list',
            items: {
              type: 'object',
              fields: [
                { name: 'title', label: 'Título', type: 'string' },
                { name: 'description', label: 'Descripción', type: 'text' },
                { name: 'preview_image', label: 'Imagen de Vista Previa', type: 'image' },
                { name: 'tour_url', label: 'URL del Recorrido', type: 'string' },
                { name: 'category', label: 'Categoría', type: 'string' }
              ]
            }
          }
        ]
      }
    ]
  },

  dataLayer: {
    contentModelMap: {
      homepage: 'content/home.json',
      about: 'content/about.json',
      services: 'content/services.json',
      projects: 'content/projects.json',
      news: 'content/news.json',
      contact: 'content/contact.json',
      virtual_tours: 'content/virtual-tours.json'
    }
  },

  models: {
    page: {
      type: 'page',
      urlPath: '/{slug}',
      filePath: 'content/{slug}.json'
    }
  }
});
