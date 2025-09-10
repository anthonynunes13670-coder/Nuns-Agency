import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import LiquidEther from './components/LiquidEther';
import avatar from './Avatar sans bg.png';
import emailjs from '@emailjs/browser';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const liquidEtherRef = useRef(null);
  
  // État pour le formulaire de contact
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null

  // Configuration EmailJS
  const emailjsConfig = {
    serviceId: 'service_portfolio',
    templateId: 'template_contact', 
    publicKey: 'UtRh8phUM-lEa8QXl'
  };

  // Fonctions de gestion du formulaire
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Animation de la fusée
    const rocketBtn = e.target.querySelector('.rocket-btn');
    const rocketIcon = rocketBtn.querySelector('.rocket-icon');
    
    if (rocketBtn && rocketIcon) {
      rocketBtn.classList.add('rocket-launch');
      rocketIcon.classList.add('rocket-flying');
    }

    try {
      // Préparation des données pour l'email
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        project_type: formData.projectType,
        message: formData.message,
        to_email: 'Anthonynunespro@gmail.com',
        reply_to: formData.email
      };

      // Envoi de l'email via EmailJS
      await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        templateParams,
        emailjsConfig.publicKey
      );

      // Succès
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        projectType: '',
        message: ''
      });

      console.log('Email envoyé avec succès vers Anthonynunespro@gmail.com par Nuns Agency!');
      
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      
      // Retirer l'animation après 3 secondes
      setTimeout(() => {
        if (rocketBtn && rocketIcon) {
          rocketBtn.classList.remove('rocket-launch');
          rocketIcon.classList.remove('rocket-flying');
        }
      }, 3000);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for section titles animation
  useEffect(() => {
    const titleObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      {
        threshold: 0.6,
        rootMargin: '0px 0px -10% 0px'
      }
    );

    const titles = document.querySelectorAll('.section-title');
    titles.forEach((title) => titleObserver.observe(title));

    return () => {
      titles.forEach((title) => titleObserver.unobserve(title));
    };
  }, []);

  // Bitmoji eyes animation - DISABLED
  // useEffect(() => {
  //   Eyes tracking animation has been disabled
  // }, []);

  useEffect(() => {
    const handleMouseMove = (event) => {
      // Transmettre l'événement de souris au composant LiquidEther
      const liquidBackground = document.querySelector('.liquid-background');
      if (liquidBackground) {
        const canvas = liquidBackground.querySelector('canvas');
        if (canvas) {
          // Créer un événement de souris synthétique pour le canvas
          const rect = canvas.getBoundingClientRect();
          const mouseEvent = new MouseEvent('mousemove', {
            clientX: event.clientX,
            clientY: event.clientY,
            bubbles: true
          });
          canvas.dispatchEvent(mouseEvent);
        }
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = useCallback((sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  }, []);

  const pricingPlans = useMemo(() => [
    {
      title: "Site Vitrine",
      subtitle: "Page unique HTML5",
      price: "699€",
      description: "Site professionnel responsive avec design moderne",
      features: [
        "Design sur mesure et responsive",
        "Optimisation SEO de base",
        "Formulaire de contact",
        "Hébergement conseillé",
        "Support 30 jours inclus",
        "Site HTML5"
      ],
      highlight: false,
      cta: "Commander"
    },
    {
      title: "E-commerce",
      subtitle: "5 pages • 10 produits",
      price: "1500€",
      description: "Boutique en ligne complète avec gestion des commandes",
      features: [
        "Jusqu'à 5 pages personnalisées",
        "Catalogue 10 produits",
        "Système de paiement sécurisé",
        "Interface d'administration",
        "Formation à la gestion",
        "Support 60 jours inclus"
      ],
      highlight: true,
      cta: "Choisir ce plan"
    },
    {
      title: "Maintenance",
      subtitle: "Support mensuel",
      price: "80€/mois",
      description: "Maintenance et support technique pour votre site web",
      features: [
        "Mises à jour sécuritaires",
        "Sauvegarde automatique",
        "Support technique prioritaire",
        "Corrections de bugs",
        "Monitoring de performance",
        "Rapport mensuel d'activité"
      ],
      highlight: false,
      cta: "S'abonner"
    },
    {
      title: "Automatisation IA",
      subtitle: "Solution sur mesure",
      price: "Sur devis",
      description: "Automatisez vos processus avec l'intelligence artificielle",
      features: [
        "Analyse des processus existants",
        "Intégration ChatGPT/Claude API",
        "Workflows automatisés",
        "Formation à l'utilisation",
        "Support dédié IA",
        "Optimisation continue"
      ],
      highlight: false,
      cta: "Découvrir l'IA"
    },
    {
      title: "Sur Mesure",
      subtitle: "Projet illimité",
      price: "Sur devis",
      description: "Solution personnalisée selon vos besoins spécifiques",
      features: [
        "Analyse complète des besoins",
        "Développement sur mesure",
        "Intégrations API avancées",
        "Formation personnalisée",
        "Support prioritaire",
        "Maintenance évolutive"
      ],
      highlight: false,
      cta: "Me contacter"
    },
    {
      title: "Audit & Formation",
      subtitle: "Pour entreprises",
      price: "Sur devis",
      description: "Audit et formation sur mesure pour votre équipe",
      features: [
        "Audit des processus actuels",
        "Identification des opportunités",
        "Formation équipe personnalisée",
        "Plan de déploiement",
        "Support post-formation",
        "Suivi des performances"
      ],
      highlight: false,
      cta: "Planifier un audit"
    }
  ], []);

  const skills = useMemo(() => ({
    "No-Code / Low-Code": ["Webflow", "Shopify", "WordPress", "Bubble", "Zapier", "Airtable"],
    "Frontend Development": ["React", "Vue.js", "TypeScript", "Tailwind CSS", "Three.js"],
    "Automatisation IA": ["ChatGPT", "Claude", "Make", "Zapier AI", "n8n", "OpenAI API"],
    "Tools & Design": ["Figma", "Adobe CC", "Git", "Vercel", "Netlify"]
  }), []);

  return (
    <div className="App">
      {/* Background Effect */}
      <div className="liquid-background">
        <LiquidEther
          colors={['#5227FF', '#FF9FFC', '#B19EEF']}
          mouseForce={30}
          cursorSize={150}
          autoDemo={false}
          autoSpeed={0.3}
          autoIntensity={1.5}
          autoResumeDelay={3000}
          resolution={0.7}
        />
      </div>

      {/* Navigation */}
      <nav 
        className={`navbar ${isScrolled ? 'scrolled' : ''}`}
        role="navigation"
        aria-label="Navigation principale"
      >
        <button 
          type="button" 
          title="Accueil"
          className={activeSection === 'home' ? 'active' : ''}
          onClick={() => scrollToSection('home')}
        >
          <span>Accueil</span>
          <span className="material-symbols-outlined" aria-hidden="true">home</span>
          <svg viewBox="0 0 300 300" aria-hidden="true">
            <g>
              <text fill="currentColor">
                <textPath xlinkHref="#circlePath">Accueil</textPath>
              </text>
              <text fill="currentColor">
                <textPath xlinkHref="#circlePath" startOffset="50%">Accueil</textPath>
              </text>
            </g>
          </svg>
        </button>
        <button 
          type="button"
          className={activeSection === 'about' ? 'active' : ''}
          onClick={() => scrollToSection('about')}
        >
          <span>À propos</span>
          <span className="material-symbols-outlined" aria-hidden="true">info</span>
          <svg viewBox="0 0 300 300" aria-hidden="true">
            <g>
              <text fill="currentColor">
                <textPath xlinkHref="#circlePath">À propos</textPath>
              </text>
              <text fill="currentColor">
                <textPath xlinkHref="#circlePath" startOffset="50%">À propos</textPath>
              </text>
            </g>
          </svg>
        </button>
        <button 
          type="button"
          className={activeSection === 'pricing' ? 'active' : ''}
          onClick={() => scrollToSection('pricing')}
        >
          <span>Tarifs</span>
          <span className="material-symbols-outlined" aria-hidden="true">payments</span>
          <svg viewBox="0 0 300 300" aria-hidden="true">
            <g>
              <text fill="currentColor">
                <textPath xlinkHref="#circlePath">Tarifs</textPath>
              </text>
              <text fill="currentColor">
                <textPath xlinkHref="#circlePath" startOffset="50%">Tarifs</textPath>
              </text>
            </g>
          </svg>
        </button>
        <button 
          type="button"
          className={activeSection === 'contact' ? 'active' : ''}
          onClick={() => scrollToSection('contact')}
        >
          <span>Contact</span>
          <span className="material-symbols-outlined" aria-hidden="true">email</span>
          <svg viewBox="0 0 300 300">
            <g>
              <text fill="currentColor" aria-hidden="true">
                <textPath xlinkHref="#circlePath">Contact</textPath>
              </text>
              <text fill="currentColor">
                <textPath xlinkHref="#circlePath" startOffset="50%">Contact</textPath>
              </text>
            </g>
          </svg>
        </button>
      </nav>

      {/* SVG template with dynamic text */}
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 300 300" width="0" height="0" style={{position: 'absolute', left: '-9999px'}}>
        <defs>
          <path id="circlePath" d="M 150, 150 m -50, 0 a 50,50 0 0,1 100,0 a 50,50 0 0,1 -100,0" />
        </defs>
      </svg>

      {/* Hero Section */}
      <main>
      <section id="home" className="hero" aria-labelledby="hero-title">
        <div className="hero-content">
          <div className="bitmoji-container hero-avatar">
            <img id="bitmoji-face" src={avatar} alt="Nuns Agency Avatar" />
            <div className="avatar-glow"></div>
          </div>
          <h1 id="hero-title" className="hero-title-3d">
            <span className="text-layer-1">Créateur de</span>
            <span className="text-layer-2 gradient-text">Sites Web</span>
            <br />
            <span className="text-layer-1">& Expert</span>
            <span className="text-layer-2 gradient-text">IA</span>
          </h1>
          <p className="hero-subtitle">
            1 an d'expérience • Site vitrine, E-commerce, SaaS & Applications web
            <br />
            <span className="hero-tech">No-Code • Low-Code • Automatisation IA • Développement sur mesure</span>
          </p>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">10+</span>
              <span className="stat-label">Sites créés</span>
            </div>
            <div className="stat">
              <span className="stat-number">1</span>
              <span className="stat-label">An d'expérience</span>
            </div>
            <div className="stat">
              <span className="stat-number">24h</span>
              <span className="stat-label">Support réactif</span>
            </div>
          </div>
          <div className="hero-buttons">
            <button 
              className="btn-primary"
              onClick={() => scrollToSection('pricing')}
            >
              Voir les tarifs
            </button>
            <button 
              className="btn-secondary"
              onClick={() => scrollToSection('contact')}
            >
              Démarrer un projet
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about" aria-labelledby="about-title">
        <div className="container">
          <h2 id="about-title" className="section-title" data-text="Expertise Technique">Expertise Technique</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                <strong>Nuns Agency</strong> est une agence de création de sites web avec 1 an d'expérience et une dizaine de sites créés. 
                Nous transformons vos idées en solutions web performantes et sur mesure.
              </p>
              <p>
                Nous sommes spécialisés dans les outils <strong>No-Code/Low-Code</strong> pour une livraison rapide, 
                avec la capacité de développer des solutions custom quand la complexité l'exige.
              </p>
              <div className="value-props">
                <div className="value-prop">
                  <span className="material-symbols-outlined value-icon gradient-icon">flash_on</span>
                  <div>
                    <h4>Livraison Express</h4>
                    <p>Sites vitrines en 5-7 jours ouvrés</p>
                  </div>
                </div>
                <div className="value-prop">
                  <span className="material-symbols-outlined value-icon gradient-icon">gps_fixed</span>
                  <div>
                    <h4>ROI Optimisé</h4>
                    <p>Solutions adaptées à votre budget</p>
                  </div>
                </div>
                <div className="value-prop">
                  <span className="material-symbols-outlined value-icon gradient-icon">rocket_launch</span>
                  <div>
                    <h4>Support Continu</h4>
                    <p>Maintenance et évolutions incluses</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="skills-grid">
              {Object.entries(skills).map(([category, skillList]) => (
                <div key={category} className="skill-category">
                  <h3>{category}</h3>
                  <div className="skill-tags">
                    {skillList.map((skill, index) => (
                      <span key={index} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="pricing" aria-labelledby="pricing-title">
        <div className="container">
          <h2 id="pricing-title" className="section-title" data-text="Tarifs & Services">Tarifs & Services</h2>
          <p className="section-subtitle">
            Des solutions adaptées à chaque projet et budget
          </p>
          <div className="pricing-grid">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`pricing-card ${plan.highlight ? 'highlight' : ''}`}>
                {plan.highlight && <div className="popular-badge">Populaire</div>}
                
                <div className="portal-particles"></div>
                
                <div className="pricing-header">
                  <h3>{plan.title}</h3>
                  <p className="pricing-subtitle">{plan.subtitle}</p>
                  <div className="pricing-price">
                    <span className={`price ${plan.price.includes('devis') ? 'custom-price' : ''}`}>{plan.price}</span>
                  </div>
                  <p className="pricing-description">{plan.description}</p>
                </div>
                <div className="pricing-features">
                  <ul>
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>
                        <span className="check-icon">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pricing-cta">
                  <button 
                    className={plan.highlight ? 'btn-primary' : 'btn-secondary'}
                    onClick={() => scrollToSection('contact')}
                  >
                    {plan.cta}
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="pricing-note">
            <div className="pricing-features">
              <div className="pricing-feature-item">
                <span className="material-symbols-outlined gradient-icon">lightbulb</span>
                <div>
                  <strong>Paiement flexible :</strong> 50% à la commande, 50% à la livraison
                </div>
              </div>
              <div className="pricing-feature-item">
                <span className="material-symbols-outlined gradient-icon">verified</span>
                <div>
                  <strong>Garantie :</strong> Révisions jusqu'à validation finale
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact" aria-labelledby="contact-title">
        <div className="container">
          <h2 id="contact-title" className="section-title" data-text="Démarrons votre projet">Démarrons votre projet</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Services Professionnels</h3>
              <p>
                <strong>Nuns Agency est disponible pour vos projets</strong> et propose des services web professionnels.
                Réponse garantie sous 24h !
              </p>
              <div className="contact-methods">
                <div className="contact-method contact-email" onClick={() => window.open('mailto:Anthonynunespro@gmail.com', '_blank')}>
                  <span className="material-symbols-outlined contact-icon gradient-icon">email</span>
                  <div>
                    <span>Anthonynunespro@gmail.com</span>
                    <small>Réponse sous 24h</small>
                  </div>
                  <div className="contact-tooltip">
                    <span>Cliquez pour envoyer un email</span>
                  </div>
                </div>
                <div className="contact-method contact-whatsapp" onClick={() => window.open('https://wa.me/33763550227', '_blank')}>
                  <span className="material-symbols-outlined contact-icon gradient-icon">phone</span>
                  <div>
                    <span>+33 07 63 55 02 27</span>
                    <small>Lun-Ven 9h-18h</small>
                  </div>
                  <div className="contact-tooltip">
                    <span>Cliquez pour WhatsApp</span>
                  </div>
                </div>
                <div className="contact-method contact-location" onClick={() => window.open('https://www.google.com/maps/search/Avignon+84000', '_blank')}>
                  <span className="material-symbols-outlined contact-icon gradient-icon">location_on</span>
                  <div>
                    <span>Avignon, France</span>
                    <small>Télétravail / Sur site</small>
                  </div>
                  <div className="contact-tooltip">
                    <span>Voir sur Google Maps</span>
                  </div>
                </div>
              </div>
              <div className="availability">
                <div className="availability-header">
                  <span className="material-symbols-outlined availability-icon gradient-icon">schedule</span>
                  <h4>Disponible immédiatement</h4>
                </div>
                <p>Planning : 2-3 projets par mois</p>
              </div>
            </div>
            <form className="contact-form" aria-label="Formulaire de contact" noValidate onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Nom / Entreprise</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required 
                    aria-describedby="name-error"
                    autoComplete="name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required 
                    aria-describedby="email-error"
                    autoComplete="email"
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="project-type">Type de projet</label>
                <select 
                  id="project-type"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleInputChange}
                  required
                  aria-describedby="project-type-error"
                >
                  <option value="">Choisissez...</option>
                  <option value="vitrine">Site Vitrine (699€)</option>
                  <option value="ecommerce">E-commerce (1500€)</option>
                  <option value="maintenance">Maintenance (80€/mois)</option>
                  <option value="ia">Automatisation IA (Sur devis)</option>
                  <option value="audit">Audit & Formation (Sur devis)</option>
                  <option value="custom">Projet sur mesure (Sur devis)</option>
                  <option value="emploi">Opportunité d'emploi</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Décrivez votre projet</label>
                <textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4" 
                  placeholder="Budget, délais, fonctionnalités souhaitées..." 
                  required
                  aria-describedby="message-error"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="btn-primary full-width rocket-btn"
                disabled={isSubmitting}
              >
                <span className="material-symbols-outlined rocket-icon" style={{color: 'white', fontSize: '1.2em', marginRight: '8px'}}>rocket_launch</span>
                {isSubmitting ? 'Envoi en cours...' : 'Obtenir un devis gratuit'}
              </button>
              
              {/* Messages de statut */}
              {submitStatus === 'success' && (
                <div className="form-status success">
                  <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.5rem'}}>
                    <span className="material-symbols-outlined" style={{color: 'white', fontSize: '1.2em', marginRight: '0.5rem'}}>check_circle</span>
                    <span style={{color: 'white'}}>Message envoyé avec succès !</span>
                  </div>
                  Nuns Agency vous répondra rapidement sur <strong style={{color: 'white'}}>Anthonynunespro@gmail.com</strong>
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="form-status error">
                  ❌ Erreur lors de l'envoi. Veuillez réessayer ou contacter Nuns Agency directement à <strong>Anthonynunespro@gmail.com</strong>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

        </main>
      {/* Footer */}
      <footer className="footer" role="contentinfo" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', padding: '2rem 0'}}>
        <p>&copy; 2024 Nuns Agency. Tous droits réservés.</p>
      </footer>
    </div>
  );
}

export default App;