/** Set these destinations when the additional pages and contact channel are ready.
 * No email address, external account, or product page was included in the export.
 */
export const site = {
  name: 'Zepco Technologies',
  title: 'Zepco Technologies | Power Electronics & Electric Propulsion',
  description: 'Advanced power electronics and electric propulsion systems for aerospace, defence, industrial, unmanned systems, mobility and energy applications.',
  links: {
    contact: undefined as string | undefined,
    companyStory: '/our-story',
    allStories: '#stories',
    media: '#stories',
    blogs: '#stories',
    linkedin: undefined as string | undefined,
    twitter: undefined as string | undefined,
  },
};

export interface NavigationLink {
  label: string;
  href: string;
}

export interface NavigationItem extends NavigationLink {
  id: string;
  children?: readonly NavigationLink[];
}

/** Menu labels and order match the latest homepage.zip Figma Make export.
 * Use the existing homepage content until dedicated page URLs are supplied.
 */
export const navigation: readonly NavigationItem[] = [
  { id: 'story', label: 'Our Story', href: site.links.companyStory },
  {
    id: 'industries', label: 'Industries', href: '/#industries',
    children: [
      { label: 'Aerospace & Defence', href: '/#industry-aerospace' },
      { label: 'Unmanned & Autonomous Systems', href: '/#industry-unmanned' },
      { label: 'Industrial Systems', href: '/#industry-industrial' },
      { label: 'Electric Mobility', href: '/#industry-mobility' },
      { label: 'Energy', href: '/#industry-energy' },
    ],
  },
  {
    id: 'technologies', label: 'Technologies', href: '/#capabilities',
    children: [
      { label: 'Advanced Power Electronics', href: '/#capability-power-conversion' },
      { label: 'Electric Propulsion', href: '/#capability-electric-propulsion' },
      { label: 'Battery Systems', href: '/#capabilities' },
      { label: 'Engineering Services', href: '/#capability-engineering-services' },
    ],
  },
  {
    id: 'solutions', label: 'Solutions', href: '/#solutions',
    children: [
      { label: 'Drone Motors', href: '/#solution-drone-propulsion' },
      { label: 'Electronic Speed Controllers', href: '/#solution-motor-controllers' },
      { label: 'Motor Controllers', href: '/#solution-motor-controllers' },
      { label: 'Programmable Power Supplies', href: '/#solution-programmable-power-supplies' },
      { label: 'AC-DC Power Supplies', href: '/#solution-power-conversion' },
      { label: 'DC-DC Converters', href: '/#solution-power-conversion' },
      { label: 'Inverters', href: '/#solution-power-conversion' },
      { label: 'Rectifiers', href: '/#solution-power-conversion' },
      { label: 'Battery Management Systems', href: '/#solutions' },
      { label: 'Battery Packs', href: '/#solutions' },
      { label: 'Automatic Test Equipment', href: '/#solution-automatic-test-equipment' },
      { label: 'Custom Solutions', href: '/#contact' },
    ],
  },
  { id: 'contact', label: 'Contact', href: '/#contact' },
  { id: 'media', label: 'Media', href: site.links.media },
  { id: 'blogs', label: 'Blogs', href: site.links.blogs },
];
