**1. Qu'est-ce que le FOUC & Comment l'empêcher ?**

D'après ce que j'ai vu sur internet, Le FOUC ce proquit quand la page charge et que le contenu s'affiche avant que le css ne soit chargé :

- Utilisez des styles CSS inline pour les éléments critiques.
- Placez les feuilles de style CSS dans la balise head

**2. Citez des techniques permettant une meilleure optimisations des performances d'un frontend**

a. Avec un fort contenu à afficher, faire de la pagination ou du virtual scrolling

b. Avec des données provenant d'une API, utiliser le cache pour éviter de recharger les données à chaque fois

**3. Citez les différents types de relations possibles entre plusieurs tables, et leurs cas d'applications**

a. One to One : une seule ligne d'une table est liée à une seule ligne d'une autre table, par example, un utilisateur a un seul profil

b. One to Many : une seule ligne d'une table est liée à plusieurs lignes d'une autre table, par example, un utilisateur a plusieurs compteurs

**4. Comment implémenteriez-vous une relation récurrente entre deux tables ?**

a. L'utilisateur pourrait avoir un amis, en ayant une colonne amis_id dans la table utilisateur qui fait référence à l'id de l'utilisateur
