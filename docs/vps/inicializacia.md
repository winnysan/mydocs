# Inicializácia

Po inštalácii `VPS` ako SSH klienta môžeme použiť PowerShell, PuTTY, terminál v linuxe,...

## Prvé prihlásenie

Prvé prihlásenie je ako `root`

```
ssh root@ip_servera
```

Po prihláseni vyžaduje zmenu hesla.

## Vytvorenie nového užívateľa

```
adduser meno
```

Vyžaduje vytvoriť heslo a vyplniť osobné informácie (nepovinné).

## Pridelenie oprávnení

Vloženie užívateľa do skupiny `sudo`.

```
usermod -aG sudo meno
```

## Nastavenie firewallu

`Ufw` je jednoduchý firewall pre základné zabezpečenie.

Zobrazenie možných aplikácii.

```
sudo ufw app list
```

Povolenie `OpenSSH` a zapnutie firewallu (môže prerušiť SSH spojenie).

```
sudo ufw allow OpenSSH
sudo ufw enable
```

Zobrazenie stavu firewallu.

```
sudo ufw status
```

## Prihásenie bežného užívateľa

Teraz je možné sa prihlásiť ako nový užívateľ.

```
ssh meno@ip_servera
```