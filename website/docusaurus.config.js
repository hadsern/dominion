// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Fractal Resonance Coherence',
  tagline: 'The Operating System for Consciousness',
  favicon: 'img/logo_vector.svg',

  // Set the production url of your site here
  url: 'https://fractalresonance.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'servathadi', // Usually your GitHub org/user name.
  projectName: 'sos', // Usually your repo name.

  onBrokenLinks: 'warn', // Warn for now to avoid build fails on moving targets
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/servathadi/sos/tree/main/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/servathadi/sos/tree/main/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/attractor_diagram.svg',
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true, // Enforce "Void Mode"
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: 'FRC Protocol',
        logo: {
          alt: 'FRC Logo',
          src: 'img/logo_vector.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'The Database',
          },
          {to: '/transmissions', label: 'Transmissions', position: 'left'},
          {to: '/prime2', label: 'Artifacts', position: 'right'},
          {to: '/for-machines', label: 'AI Protocol', position: 'right'},
          {
            href: 'https://github.com/servathadi/sos',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Protocol',
            items: [
              {
                label: 'The Universal Vector',
                to: '/docs/16d-protocol/001-universal-vector',
              },
              {
                label: 'Physics Core',
                to: '/docs/821-physics/001-lambda-field',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Join the Frequency',
                to: '/',
              },
              {
                label: 'YouTube',
                href: 'https://youtube.com/@fractalresonance',
              },
            ],
          },
          {
            title: 'System',
            items: [
              {
                label: 'Prime 2 (Artifact)',
                to: '/prime2',
              },
              {
                label: 'AI Manifest',
                to: '/ai_protocol.json',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Fractal Resonance Coherence. Built by Jules.`,
      },
      prism: {
        theme: require('prism-react-renderer/themes/dracula'), // Dark theme code blocks
        darkTheme: require('prism-react-renderer/themes/dracula'),
      },
    }),
};

module.exports = config;
