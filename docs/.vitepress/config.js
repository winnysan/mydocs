export default {
    title: 'My Docs',
    description: '',
    themeConfig: {
        nav: [
          { text: 'Git', link: '/git/' },
          {
            text: 'VPS',
            items: [
              { text: 'Inicializácia', link: '/vps/inicializacia' },
              { text: 'Nginx a PHP', link: '/vps/nginx-a-php' },
              { text: 'Postgres', link: '/vps/postgres' }
            ]
          }
        ]
      }
  }