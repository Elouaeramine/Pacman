## Problèmes de l'Application

- Code Illisible
  Les fichier .js n'ont pas de formatting (il faudra utiliser un formatter : Prettier par exemple pour assurer la lisibilté)
- Pas de Respect pour les notions (SOLID)
- Non Scalable ( on peut pas modifier in la taille du grille , le nombre de fantomes , etcc)
- Dans multiples conditions , On pourra utiliser des Switch case au lieu de If - Else
- Dans la méthode InitGrille , c'est mieux d'utiliser const au lieu de let dans la boucle for
- Problème du Styling : Un tel jeu doit être sur une seule page ( Il faut enlever les paddings et les margins)
- Utilisation des var non conseillée . Il faudra utiliser const ou let
- Dans pacman.js , Il faut définir un event listener au lieu d'utiliser document.onKeyPress
- Il faut Ajouter des Instructions pour l'utilisateur (Comment jouer Pacman)
