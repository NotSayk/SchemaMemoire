# 🧠 MemoTools - Emporte-pièces Pédagogiques 3D

<div align="center">

**Matérialisez vos schémas mémoires et vos graphes avec précision !**

[![Website](https://img.shields.io/badge/Website-MemoTools-blue)](https://notsayk.github.io/SchemaMemoire/)
[![Made with Love](https://img.shields.io/badge/Made%20with-❤️-red)]()
[![3D Printed](https://img.shields.io/badge/3D-Printed-orange)]()

</div>

---

## 📋 À propos

**MemoTools** est un site web vitrine proposant des **emporte-pièces pédagogiques imprimés en 3D** spécialement conçus pour les étudiants. Ces outils permettent de créer rapidement et précisément des schémas mémoires et des graphes, essentiels dans l'apprentissage de la programmation et des structures de données.

### 🎯 Pourquoi MemoTools ?

- **Schémas Mémoires** : À partir du TD6, les schémas mémoires deviennent essentiels pour comprendre le fonctionnement d'un programme et la localisation des variables en mémoire. Notre emporte-pièce respecte exactement le modèle officiel fourni par vos professeurs.

- **Graphes** : Indispensable pour le semestre 2, notamment en GPO pour les graphes PERT et les diagrammes de chaîne critique. Fabriqué en 3D : solide, précis et durable !

---

## ✨ Fonctionnalités

- 🎨 **Catalogue de produits dynamique** : Parcourez les emporte-pièces disponibles avec des variantes de couleurs
- 🖼️ **Galerie d'images interactive** : Visualisez les produits sous différents coloris
- 📱 **Design responsive** : Interface optimisée pour mobile, tablette et desktop
- 📬 **Formulaire de contact intégré** : Commandez facilement via Formspree
- 🎭 **Menu hamburger mobile** : Navigation fluide sur petits écrans
- ⚡ **Chargement optimisé** : Images en lazy loading pour des performances maximales

---

## 🛠️ Technologies utilisées

- **HTML5** - Structure sémantique
- **CSS3** - Styles et animations modernes
- **JavaScript (Vanilla)** - Logique interactive sans frameworks
- **JSON** - Base de données de produits
- **Font Awesome** - Icônes vectorielles
- **Formspree** - Gestion des formulaires

---

## 📁 Structure du projet

```
SchemaMemoire/
├── index.html              # Page principale
├── styles.css              # Feuilles de styles
├── script.js               # Navigation et interactions
├── display.js              # Affichage dynamique des produits
├── contact.js              # Gestion du formulaire de contact
├── liste_produit.json      # Base de données des produits
├── images/                 # Assets visuels
│   ├── logo.png
│   ├── bg.png
│   ├── graphe_example.jpg
│   └── produits/           # Images des produits
│       ├── schema/         # Variantes schémas mémoires
│       └── graphe/         # Variantes graphes
└── README.md               # Ce fichier
```

---

## 🚀 Installation et utilisation

### Prérequis

- Un navigateur web moderne (Chrome, Firefox, Safari, Edge)
- Un serveur local pour le développement (optionnel mais recommandé)

### Installation

1. **Cloner le repository**
   ```bash
   git clone https://github.com/NotSayk/SchemaMemoire.git
   cd SchemaMemoire
   ```

2. **Lancer le site**
   
   **Option A : Directement dans le navigateur**
   - Ouvrir `index.html` dans votre navigateur

   **Option B : Avec un serveur local (recommandé)**
   ```bash
   # Avec Python 3
   python -m http.server 8000
   
   # Avec Node.js (npx)
   npx http-server
   
   # Avec PHP
   php -S localhost:8000
   ```
   Puis accéder à `http://localhost:8000`

---

## 💡 Utilisation

1. **Navigation** : Utilisez le menu pour accéder aux différentes sections (Accueil, Outils, Commander)

2. **Parcourir les produits** : Dans la section "Outils", visualisez les emporte-pièces disponibles

3. **Changer les couleurs** : Cliquez sur les pastilles de couleur sous chaque produit pour voir les variantes

4. **Commander** : Remplissez le formulaire dans la section "Commander" avec vos coordonnées et votre demande

---

## 📦 Produits disponibles

### Emporte-pièce Schémas Mémoires - 3€
- Noir, Jaune, Blanc, Bleu, Orange, Rouge
- Parfait pour visualiser les structures de données
- Conforme au modèle officiel des TD

### Emporte-pièce Graphes - 1€
- Noir, Jaune, Blanc, Bleu, Orange, Rouge
- Idéal pour les graphes PERT et diagrammes
- Solide et précis

---

## 🔧 Développement

### Modifier les produits

Éditez le fichier `liste_produit.json` pour ajouter/modifier des produits :

```json
{
  "id": 1,
  "category": "schemas-memoires",
  "name": "Nom du produit",
  "description": "Description courte",
  "price": 3.00,
  "tags": ["Tag1", "Tag2"],
  "fullDescription": "Description complète",
  "variants": [
    {
      "color": "Noir",
      "image": "images/produits/schema/noir.jpg",
      "alt": "Description alternative",
      "inStock": true
    }
  ]
}
```

### Personnaliser les styles

Les styles sont organisés dans `styles.css`. Modifiez les variables CSS pour adapter les couleurs :

```css
:root {
  --primary-color: #votre-couleur;
  --secondary-color: #votre-couleur;
}
```

---

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :

1. Fork le projet
2. Créer une branche pour votre fonctionnalité (`git checkout -b feature/AmazingFeature`)
3. Commit vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

---

## 📧 Contact

- **GitHub** : [@NotSayk](https://github.com/NotSayk)
- **Email** : Via le formulaire de contact sur le site

---

## 📄 Licence

Ce projet est un projet personnel. Tous droits réservés © 2025 MemoTools.

---

## 🙏 Remerciements

- Font Awesome pour les icônes
- Formspree pour la gestion des formulaires
- Tous les étudiants qui utilisent ces outils pédagogiques !

---

<div align="center">

**Fait avec ❤️ pour faciliter l'apprentissage**

[⬆ Retour en haut](#-memotools---emporte-pièces-pédagogiques-3d)

</div>
