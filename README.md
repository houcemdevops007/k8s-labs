# 🚀 Labs Pratiques Kubernetes

<div align="center">

![Kubernetes](https://img.shields.io/badge/Kubernetes-326CE5?style=for-the-badge&logo=kubernetes&logoColor=white)
![DevOps](https://img.shields.io/badge/DevOps-FF6C37?style=for-the-badge&logo=devops&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

**Maîtrisez Kubernetes avec 16 travaux pratiques progressifs**

*Du Pod au déploiement complet en production*

[🎯 Démo en ligne](#-démo) • [📚 TPs disponibles](#-travaux-pratiques) • [🛠️ Installation](#️-installation) • [📖 Documentation](#-utilisation)

</div>

---

## 📋 À propos

Ce projet propose une série complète de **16 travaux pratiques** pour apprendre Kubernetes de manière progressive et hands-on. Chaque TP inclut :

- ✅ Explications des concepts clés
- ✅ Fichiers YAML prêts à l'emploi
- ✅ Commandes terminal avec résultats attendus
- ✅ Exercices pratiques guidés
- ✅ Checklist de progression sauvegardée

## ✨ Fonctionnalités

| Fonctionnalité | Description |
|----------------|-------------|
| 🎨 **Interface moderne** | Design glassmorphism avec thème sombre |
| 📱 **Responsive** | Compatible desktop, tablette et mobile |
| 📋 **Copier le code** | Un clic pour copier les blocs YAML/commandes |
| 💾 **Progression sauvegardée** | Votre avancement est conservé localement |
| 🔍 **Recherche** | Trouvez rapidement le TP souhaité |
| 🌐 **100% Offline** | Fonctionne sans connexion internet |

## 📚 Travaux Pratiques

| # | TP | Difficulté | Durée |
|---|-----|------------|-------|
| 1 | **Pods** - L'unité de base | 🟢 Débutant | 45 min |
| 2 | **ReplicaSet** - Haute disponibilité | 🟢 Débutant | 30 min |
| 3 | **Deployment** - Déploiement déclaratif | 🟡 Intermédiaire | 60 min |
| 4 | **Services** - Exposition des applications | 🟡 Intermédiaire | 45 min |
| 5 | **ConfigMap** - Configuration externe | 🟢 Débutant | 30 min |
| 6 | **Secrets** - Données sensibles | 🟡 Intermédiaire | 30 min |
| 7 | **Volumes** - Stockage persistant | 🟡 Intermédiaire | 45 min |
| 8 | **Ingress** - Routage HTTP | 🟡 Intermédiaire | 45 min |
| 9 | **RBAC** - Contrôle d'accès | 🔴 Avancé | 60 min |
| 10 | **Probes** - Surveillance de santé | 🟡 Intermédiaire | 30 min |
| 11 | **DaemonSet** - Un Pod par nœud | 🟡 Intermédiaire | 30 min |
| 12 | **Jobs & CronJobs** - Tâches planifiées | 🟡 Intermédiaire | 45 min |
| 13 | **StatefulSet** - Applications stateful | 🔴 Avancé | 60 min |
| 14 | **Network Policies** - Sécurité réseau | 🔴 Avancé | 45 min |
| 15 | **HPA** - Autoscaling horizontal | 🔴 Avancé | 45 min |
| 16 | **Namespaces & Quotas** - Isolation des ressources | 🔴 Avancé | 60 min |

## 🛠️ Installation

### Prérequis

- Un navigateur web moderne (Chrome, Firefox, Safari, Edge)
- Un cluster Kubernetes pour les exercices :
  - [Minikube](https://minikube.sigs.k8s.io/) (recommandé pour débuter)
  - [Kind](https://kind.sigs.k8s.io/)
  - [Docker Desktop](https://www.docker.com/products/docker-desktop/)
  - Ou tout autre cluster K8s

### Option 1 : Téléchargement direct

```bash
# Cloner le repository
git clone https://github.com/houcemdevops007/k8s-labs.git

# Ouvrir dans le navigateur
cd k8s-labs
open index-fr.html      # macOS
xdg-open index-fr.html  # Linux
start index-fr.html     # Windows
```

### Option 2 : GitHub Pages

Accédez directement à la version en ligne :
👉 **https://houcemdevops007.github.io/k8s-labs/index-fr.html**

## 📖 Utilisation

### Démarrer un cluster local (Minikube)

```bash
# Installer Minikube
brew install minikube  # macOS
# ou voir https://minikube.sigs.k8s.io/docs/start/

# Démarrer le cluster
minikube start

# Vérifier l'installation
kubectl get nodes
```

### Suivre les TPs

1. **Ouvrez** `index-fr.html` dans votre navigateur
2. **Choisissez** un TP dans la barre latérale
3. **Suivez** les instructions et copiez les commandes
4. **Cochez** les exercices complétés (sauvegarde automatique)

## 📁 Structure du projet

```
k8s-labs/
├── index-fr.html              # Page principale (CSS/JS externes)
├── index-fr-standalone.html   # Version tout-en-un
├── css/
│   └── style.css              # Styles (glassmorphism, responsive)
├── js/
│   └── app.js                 # Navigation, recherche, progression
├── assets/
│   └── icons/
│       └── favicon.svg        # Icône Kubernetes
└── README.md
```

## 🎯 Démo

### Capture d'écran

```
┌─────────────────────────────────────────────────────────────┐
│  🎯 K8s Labs                    🔍 Rechercher...            │
├─────────────────────────────────────────────────────────────┤
│  ├─ 📦 TP 1: Pods              │                            │
│  ├─ 📦 TP 2: ReplicaSet        │   Labs Pratiques          │
│  ├─ 🚀 TP 3: Deployment        │     Kubernetes            │
│  ├─ 🌐 TP 4: Services          │                            │
│  ├─ ⚙️ TP 5: ConfigMap         │   Maîtrisez K8s avec      │
│  ├─ 🔐 TP 6: Secrets           │   16 TPs progressifs      │
│  ├─ 💾 TP 7: Volumes           │                            │
│  └─ ...                        │   [Commencer TP 1]        │
└─────────────────────────────────────────────────────────────┘
```

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :

- 🐛 Signaler des bugs
- 💡 Proposer des améliorations
- 📝 Corriger des erreurs
- ➕ Ajouter de nouveaux TPs

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

---

<div align="center">

### 👨‍💻 Auteur

**KHLIFI HOUCEM**

*FORMATEUR DEVSECOPS && CLOUD*

[![GitHub](https://img.shields.io/badge/GitHub-houcemdevops007-181717?style=for-the-badge&logo=github)](https://github.com/houcemdevops007)

---

⭐ **Si ce projet vous aide, n'hésitez pas à lui donner une étoile !** ⭐

</div>
