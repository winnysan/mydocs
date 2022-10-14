# SSH

## Generovanie nového kľúča

Vygenerovanie kľúča (`sudo` uloží do root adresára).

```
ssh-keygen -t ed25519 -C "email@example.com"
```

Potvrdiť cestu `/home/user_name/.ssh/id_ed25519` a zadať `passphrase`.

## Pridanie do ssh-agenta

```
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519
```

## Pridanie kľúča na Github

`github.com` - `Settings` - `SSH and GPG keys`

Kliknúť ma `New SSH key` a vložiť verejný kľúč.

```
/home/user_name/.ssh/id_ed25519.pub
```
