/** Set these destinations when the additional pages and contact channel are ready.
 * No email address, external account, or product page was included in the export.
 */
export const site = {
  name: 'Zepco Technologies',
  title: 'Zepco Technologies | Power Electronics & Electric Propulsion',
  description: 'Advanced power electronics and electric propulsion systems for aerospace, defence, industrial, unmanned systems, mobility and energy applications.',
  links: {
    contact: undefined as string | undefined,
    careers: undefined as string | undefined,
    companyStory: '#about',
    allStories: '#stories',
    linkedin: undefined as string | undefined,
    twitter: undefined as string | undefined,
  },
};

export const navigation = [
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Industries', href: '#industries' },
  { label: 'About', href: '#about' },
  { label: 'Engineering Stories', href: '#stories' },
  { label: 'Careers', href: site.links.careers },
  { label: 'Contact', href: '#contact' },
];
