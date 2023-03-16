import React from 'react' //rfc créer nouveau dossier avec les import et export

export default function Footer() {
  return (
    <footer>
      <div>
        <a 
          className="" //pour rappeler les classes de style.css
          href="/"
          target="_blank" //permet quand clique sur le lien, d'ouvrir une nouvelle page !
        > 
          Nos prestations
        </a>
        <a 
          className=""
          href="/"
          target="_blank"
        > 
          Qui sommes nous ?
        </a>
        <a
         className=""
         href="/"
         target="_blank"
        >
           Demande de devis
        </a>
        <a 
          className=""
          href="/"
          target="_blank"
        >
           Contact
        </a>
        <a 
          className=""
          href="/"
          target="_blank"
        >
           Mentions légales
        </a>
      </div>  
    </footer>
    
  )
}
