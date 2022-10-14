# Laravel Websockets

## Konfigurácia

#### .env
```
BROADCAST_DRIVER=pusher

PUSHER_APP_ID=local
PUSHER_APP_KEY=local
PUSHER_APP_SECRET=local
PUSHER_APP_CLUSTER=mt1
```

#### websockets.php
```
'apps' => [
    [
        'id' => env('PUSHER_APP_ID'),
        'name' => env('APP_NAME'),
        'key' => env('PUSHER_APP_KEY'),
        'secret' => env('PUSHER_APP_SECRET'),
        'enable_client_messages' => false,
        'enable_statistics' => true,
    ],
],
```

#### broadcasting.php
```
'pusher' => [
    'driver' => 'pusher',
    'key' => env('PUSHER_APP_KEY'),
    'secret' => env('PUSHER_APP_SECRET'),
    'app_id' => env('PUSHER_APP_ID'),
    'options' => [
        'cluster' => env('PUSHER_APP_CLUSTER'),
        'encrypted' => true,
        'host' => '127.0.0.1',
        'port' => 6001,
        'scheme' => 'http'
    ],
],
```

## Nginx
```
server {
  listen 80;
  listen [::]:80;

  root /var/www/api.husrobi.ga/public;

  index index.php index.html index.htm index.nginx-debian.html;

  server_name api.husrobi.ga;

  location / {
     try_files $uri $uri/ /index.php?$query_string;
  }

  location ~ \.php$ {
    include snippets/fastcgi-php.conf;
    fastcgi_pass unix:/run/php/php8.1-fpm.sock;
  }

  location ~ /\.ht {
    deny all;
  }
}
```

```
map $http_upgrade $type {
  default "web";
  websocket "ws";
}

server {
  listen 80;
  listen [::]:80;

  server_name api.husrobi.ga;
  root /var/www/api.husrobi.ga/public;
  index index.php index.html index.htm;

  location ~ \.php$ {
    include snippets/fastcgi-php.conf;
    fastcgi_pass unix:/run/php/php8.1-fpm.sock;
  }

  location / {
    try_files /nonexistent @$type;
  }

  location @web  {
    try_files $uri $uri/ /index.php?$query_string;
  }

  location @ws  {
    proxy_pass             http://127.0.0.1:6001;
    proxy_set_header Host  $host;
    proxy_read_timeout     60;
    proxy_connect_timeout  60;
    proxy_redirect         off;

    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;
  }

  location ~ /\.ht {
    deny all;
  }
}
```

Reštartovanie serveru

```
sudo systemctl restart nginx
```

Povolenie portu na firewalle

```
sudo ufw allow 6001/tcp
```

## Supervisor

Inštalácia

```
sudo apt install supervisor
```

#### websockets.conf

```
sudo mcedit /etc/supervisor/conf.d/websockets.conf
```

```
[program:websockets]
command=/usr/bin/php /var/www/api.husrobi.ga/artisan websockets:serve
numprocs=1
autostart=true
autorestart=true
user=marek
```

Reštart

```
sudo systemctl restart supervisor
```