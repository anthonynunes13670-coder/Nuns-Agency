# 🚀 Configuration EmailJS pour le Portfolio

## 📧 **Étapes de configuration**

### 1. **Créer un compte EmailJS**
- Aller sur [emailjs.com](https://www.emailjs.com/)
- Créer un compte gratuit
- Se connecter au dashboard

### 2. **Configurer le service email**
- Dans le dashboard, aller dans "Email Services"
- Cliquer sur "Add New Service"
- Choisir **Gmail** comme service
- Suivre les instructions pour connecter votre compte **Anthonynunespro@gmail.com**
- Noter le **Service ID** (par exemple: `service_portfolio_anthony`)

### 3. **Créer le template d'email**
- Aller dans "Email Templates"
- Cliquer sur "Create New Template"
- Utiliser ce template :

```html
Objet: Nouveau message depuis votre portfolio - {{from_name}}

Bonjour Anthony,

Vous avez reçu un nouveau message depuis votre portfolio :

**Nom/Entreprise:** {{from_name}}
**Email:** {{from_email}}
**Type de projet:** {{project_type}}

**Message:**
{{message}}

---
Répondre à : {{reply_to}}
```

- Sauvegarder et noter le **Template ID** (par exemple: `template_contact_form`)

### 4. **Obtenir la clé publique**
- Aller dans "Account" > "General"
- Copier votre **Public Key**

### 5. **Mettre à jour le code**
Dans `App.jsx`, remplacer :
```javascript
const emailjsConfig = {
  serviceId: 'VOTRE_SERVICE_ID',
  templateId: 'VOTRE_TEMPLATE_ID', 
  publicKey: 'VOTRE_PUBLIC_KEY'
};
```

## ✅ **Test**
1. Remplir le formulaire sur votre site
2. Cliquer sur "Obtenir un devis gratuit"
3. Vérifier que l'email arrive bien sur **Anthonynunespro@gmail.com**

## 🔧 **Fonctionnalités intégrées**
- ✅ Animation de la fusée pendant l'envoi
- ✅ Messages de confirmation/erreur
- ✅ Désactivation du bouton pendant l'envoi
- ✅ Nettoyage automatique du formulaire après succès
- ✅ Réponse directe possible (reply-to configuré)

## 📊 **Limite gratuite**
EmailJS offre **200 emails/mois gratuits**, largement suffisant pour un portfolio !