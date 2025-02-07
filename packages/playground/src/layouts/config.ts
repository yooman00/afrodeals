import { PageLink } from '@lloydjatkinson/astro-snipcart-design-system';

export const headerPageLinks: PageLink[] = [
    { label: 'Products', to: '/afrodeals/products' },
    { label: 'Sales', to: '/afrodeals/sales' },
    { label: 'About', to: '/afrodeals/About' },
];

export const footerPageLinks: PageLink[] = [
    { to: '/afrodeals/products', label: 'Products' },
    { to: '/afrodeals/sale', label: 'Sale' },
    { to: '/afrodeals/about', label: 'About' },
    { to: '/afrodeals/contact', label: 'Contact' },
    { to: '/afrodeals/jobs', label: 'Jobs' },
];