export default {
    title: 'My Docs',
    description: '',
    themeConfig: {
        nav: [
          {
            text: 'Git',
            items: [
              { text: 'Index', link: '/git/index' },
              { text: 'SSH', link: '/git/ssh' }
            ]
          },
          {
            text: 'VPS',
            items: [
              { text: 'Inicializácia', link: '/vps/inicializacia' },
              { text: 'Nginx a PHP', link: '/vps/nginx-a-php' },
              { text: 'Postgres', link: '/vps/postgres' }
            ]
          },
          {
            text: 'Laravel',
            items: [
              { text: 'Opravnenia', link: '/laravel/opravnenia' },
              { text: 'Websockets', link: '/laravel/websockets' }
            ]
          }
        ]
      }
  }