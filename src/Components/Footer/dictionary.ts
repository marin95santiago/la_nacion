export type FooterTexts = {
  mainLogo: {
    alt: string;
    src: string;
    width: number;
    height: number;
  },
  copyright: string,
  GDA?: string,
  captcha: string,
  staticLinks: {
    conditions: {
      href: string,
      label: string,
    },
    privacity: {
      href: string,
      label: string,
    },
  },
  link?: Array<FooterLink>
};

export type FooterLink = {
  label: string,
  href: string,
}

export const footerTexts:FooterTexts = {
  mainLogo: {
    alt: "Logo",
    src: "/resources/logo-header.png",
    width: 214,
    height: 22,
  },
  copyright: 'Copyright 2019 SA LA NACION | Todos los derechos reservados',
  GDA: 'Miembro de GDA. Grupo de Diarios América',
  captcha: 'Protegido por re CAPTCHA:',
  staticLinks: {
    conditions: {
      href: '#',
      label: 'Condiciones',
    },
    privacity: {
      href: '#',
      label: 'Privacidad',
    },
  },
  link: [
    {
      label: 'Mapa del sitio',
      href: '#'
    },
    {
      label: 'Ayuda',
      href: '#'
    },
    {
      label: 'Términos y condiciones',
      href: '#'
    },
    {
      label: 'Mapa del sitio',
      href: '#'
    },
    {
      label: '¿Como anunciar?',
      href: '#'
    },
    {
      label: 'Suscribirse al diario impreso',
      href: '#'
    },
  ]
};
