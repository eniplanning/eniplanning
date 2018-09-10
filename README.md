# ENIPlanning
ENIPlanning est une application web de génération et gestion des plannings alternants pour l'ENI.

## Dépendances techniques
Cette application utilise les technologies suivantes :
- Angular pour le Frontend
- Laravel pour le Backend

## Installation
Pour installer l'application depuis sa machine virtuelle "vierge", suivre les instructions qui suivent.

**1) Cloner le répertoire**

Ouvrir le répertoire
```
C:\laragon\www
```
Ouvrir une invite de commande Windows avec Maj + Clic droit et choisir "Ouvrir une fenêtre de commande ici". Taper ensuite :
```
git clone https://github.com/eniplanning/eniplanning.git
```
Attendez que le répertoire se clone et fermer la fenêtre. Vous devriez avoir la configuration suivante :
![dossier eniplanning](http://www.image-heberg.fr/files/15365155451300561595.png)

**2) Créer le fichier .env et le modifier**

Ouvrir le dossier "Backend" et ouvrir une invite de commande. Taper ensuite :
```
copy .env.example .env
```

Effectuer un clique droit sur le fichier .env et choisir "Editer avec Notepad++".
Remplacer les lignes 19 à 25 :
```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=homestead
DB2_DATABASE=homestead
DB_USERNAME=homestead
DB_PASSWORD=secret
```
Par les lignes suivantes : 
```
DB_CONNECTION=mysql
DB_DATABASE=eniplanning
DB2_DATABASE=enierp
DB_USERNAME=eni
DB_PASSWORD=P@$$w0rd
```
Puis enregistrer le fichier.

**3) Installer les dépendances composer**

Toujours dans le dossier "Backend", ouvrir une invite de commande et taper les lignes de commandes suivantes **en faisant Entrer entre chacune** :
```
php composer
```
**Attention, la commande précédente peut prendre plusieurs minutes.**
```
php artisan key:generate
```
```
php artisan jwt:secret
```
```
php artisan cache:clear
```
```
php artisan config:clear
```
```
php artisan config:cache
```
```
php artisan migrate
```

**4) Installer les dépendances npm**

Dans le répertoire "eniplanning", se déplacer dans le dossier "Frontend".
Ouvrir une invite de commande et taper :
```
npm install
```
Laisser npm installer les dépendances. **Attention, cela peut prendre plusieurs minutes.**

**5) Lancer le serveur Laragon**

Depuis le menu Démarrer, lancer Laragon.

Cliquer ensuite sur "Tout démarrer".

**6) Lancer le serveur web**

À nouveau dans le répertoire "Frontend", ouvrir une invite de commande et taper :
```
ng serve --open
```
Après quelques secondes, une page internet devrait s'ouvrir. Si ce n'est pas le cas, ouvrir un navigateur internet et taper dans la barre de recherche : http://localhost:4200/
Vous devriez être redirigé vers la page de connexion.

Pour vérifier le bon fonctionnement de l'application, un super-utilisateur est crée par défaut. Vous pouvez vous connecter avec les identifiants suivants : email = "administrateur@campus-eni.fr" et mot de passe = "P@$$w0rd".

Vous pouvez à présent utiliser l'application.