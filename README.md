# 🧠 MemoTools

Application web moderne pour la vente d'outils pédagogiques imprimés en 3D, spécialement conçus pour l'apprentissage de la programmation et des structures de données.

## 📋 Description

MemoTools est une plateforme e-commerce dédiée à la vente d'emporte-pièces éducatifs qui permettent de créer des représentations physiques de concepts informatiques (schémas mémoires, graphes, arbres, etc.). Ces outils pédagogiques facilitent la compréhension et la mémorisation des structures de données complexes.

## ✨ Fonctionnalités

- 🛍️ **Catalogue de produits** : Navigation intuitive avec système de filtres par catégorie
- 🎨 **Variantes de couleurs** : Plusieurs options de couleurs disponibles pour chaque produit
- 📱 **Design responsive** : Interface adaptée à tous les écrans (mobile, tablette, desktop)
- 📦 **Gestion des stocks** : Indication en temps réel de la disponibilité des produits
- 📧 **Formulaire de commande** : Système de contact intégré pour passer commande
- 🔍 **Modales de détails** : Affichage détaillé des informations produit
- 🎭 **Interface dynamique** : Menu burger animé et transitions fluides

## 🚀 Technologies utilisées

- **HTML5** : Structure sémantique
- **CSS3** : Styles modernes avec variables CSS et animations
- **JavaScript** : Logique applicative modulaire
- **JSON** : Base de données locale pour les produits
- **Font Awesome** : Icônes vectorielles

## 📁 Structure du projet

```
SchemaMemoire/
├── index.html              # Page principale
├── styles.css              # Styles globaux
├── script.js               # Logique principale (navigation, menu)
├── display.js              # Affichage des produits et filtres
├── contact.js              # Gestion du formulaire de contact
├── liste_produit.json      # Base de données des produits
├── images/                 # Ressources visuelles
│   └── produits/
│       ├── graphe/         # Images des graphes
│       └── schema/         # Images des schémas mémoires
└── README.md               # Documentation
```

## 🎯 Installation et utilisation

### Prérequis

- Un navigateur web moderne (Chrome, Firefox, Safari, Edge)
- Un serveur local (optionnel mais recommandé)

### Installation

1. Cloner le dépôt :
```bash
git clone https://github.com/NotSayk/SchemaMemoire.git
cd SchemaMemoire
```

2. Ouvrir le projet :
   - **Option 1** : Ouvrir `index.html` directement dans un navigateur
   - **Option 2** : Utiliser un serveur local (recommandé) :
     ```bash
     # Avec Python 3
     python -m http.server 8000
     
     # Avec Node.js (http-server)
     npx http-server
     ```

3. Accéder à l'application :
   - Ouvrir `http://localhost:8000` dans votre navigateur

## 📊 Produits disponibles

Le catalogue propose deux catégories principales :

- **Schémas Mémoires** : Emporte-pièces pour visualiser les allocations mémoire
- **Graphes** : Outils pour représenter les structures de graphes

Chaque produit est disponible en plusieurs couleurs (Noir, Jaune, Vert, Bleu, Rouge, etc.).

## 🎨 Personnalisation

### Ajouter un nouveau produit

Modifier le fichier `liste_produit.json` :

```json
{
  "id": 3,
  "category": "nouvelle-categorie",
  "name": "Nom du produit",
  "description": "Description courte",
  "price": 5,
  "tags": ["Tag1"],
  "fullDescription": "Description complète",
  "variants": [
    {
      "color": "Couleur",
      "image": "images/produits/chemin.jpg",
      "alt": "Texte alternatif",
      "inStock": true
    }
  ]
}
```

### Modifier les styles

Les variables CSS globales sont définies dans `styles.css` :

```css
:root {
  --primary-color: #ff6b6b;
  --secondary-color: #4ecdc4;
  --text-color: #2c3e50;
  /* ... */
}
```

## 📱 Compatibilité

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Responsive (mobile, tablette, desktop)

## 👤 Auteur

**NotSayk**

- GitHub: [@NotSayk](https://github.com/NotSayk)

## 🙏 Remerciements

- Font Awesome pour les icônes
- Communauté open-source pour l'inspiration

---

⭐ Si ce projet vous a été utile, n'hésitez pas à lui donner une étoile !

