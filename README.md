# Modal Library

Une bibliothèque React moderne et flexible pour créer des modales personnalisables.

## Installation

```bash
npm install modal-library
# ou
yarn add modal-library
```

## Prérequis

Cette bibliothèque nécessite React 19.1.0 ou supérieur.

## Utilisation

### Importation

```jsx
import { Modal } from "modal-library";
import "modal-library/dist/index.css";
```

### Exemple de base

```jsx
import React, { useState } from "react";
import { Modal } from "modal-library";
import "modal-library/dist/index.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Ouvrir la modale</button>

      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <p>Contenu de la modale</p>
      </Modal>
    </div>
  );
}
```

## Props

| Prop            | Type      | Description                                        | Par défaut |
| --------------- | --------- | -------------------------------------------------- | ---------- |
| open            | boolean   | Contrôle l'état d'ouverture de la modale           | false      |
| onClose         | function  | Fonction appelée lors de la fermeture de la modale | -          |
| children        | ReactNode | Contenu de la modale                               | -          |
| backgroundColor | string    | Couleur de fond de la modale                       | "white"    |
| borderRadius    | string    | Rayon de bordure de la modale                      | "10px"     |
| maxWidth        | string    | Largeur maximale de la modale                      | "500px"    |
| buttonColor     | string    | Couleur du bouton de fermeture                     | "black"    |

## Licence

ISC

## Support

Pour toute question ou problème, veuillez ouvrir une issue sur GitHub.
