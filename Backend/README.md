# eniplanning
Application de gestion des plannings alternants pour l'ENI


# Configuration
- Mettre à jour les bibliothèques (vendor)
        $ composer install (la première fois fait)
        $ composer update global 

- Mettre à jour le fichier .env (variables de configuration de l'environnement)
        $ php artisan key:generate

- Visualiser les logs dans Storage/logs

# Addon
- Gestion des logs : https://github.com/spatie/laravel-activitylog
- Gestion des roles et permissions : https://github.com/spatie/laravel-permission
