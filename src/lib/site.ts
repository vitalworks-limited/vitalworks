import { canPublish } from './publication.mjs';
const publicUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://www.vitalworks.example').replace(/\/$/, '');
export const publicationReady = canPublish(process.env);
export const site = {
  name: 'Vitalworks Limited',
  shortName: 'Vitalworks',
  description: 'Vitalworks Limited builds software platforms and delivers technology engineering, enterprise integration and digital services in Uganda.',
  url: publicUrl,
  navigation: [
    { title: 'Company', href: '/company' },
    { title: 'Solutions', href: '/solutions' },
    { title: 'Products', href: '/products' },
    { title: 'Industries', href: '/industries' },
    { title: 'Insights', href: '/insights' },
    { title: 'Contact', href: '/contact' },
  ],
};
export const solutions = [
  { slug:'software-platforms', name:'Software & platforms', lead:'Custom business systems, web and mobile applications, APIs and SaaS platforms.', detail:'Architecture, engineering, integration, release management and long-term application support.' },
  { slug:'enterprise-integration', name:'Enterprise integration', lead:'Connect business systems, health platforms, data services and operational processes.', detail:'Interfaces, interoperability, workflows, integrations and data exchange designed for maintainability.' },
  { slug:'cloud-infrastructure', name:'Cloud & infrastructure', lead:'Design and operate dependable cloud and on-premise environments.', detail:'Platform operations, observability, backups, deployments and disaster recovery planning.' },
  { slug:'data-ai', name:'Data, analytics & AI', lead:'Turn operational data into reliable insights and responsible intelligent systems.', detail:'Data engineering, reporting, analytics systems, model evaluation and AI integration.' },
  { slug:'cybersecurity', name:'Cybersecurity & privacy', lead:'Build security and privacy into technology systems from the beginning.', detail:'Security architecture, assessments, data protection and resilient operational practices.' },
  { slug:'managed-advisory', name:'Managed services & advisory', lead:'Technical expertise for implementation, operation and continuous improvement.', detail:'Technology consulting, managed support, technical documentation, training and capacity development.' },
];
export const industries = ['Healthcare and public health', 'Education', 'Finance and business', 'Public services', 'Agriculture', 'Logistics and infrastructure'];
// Portfolio names are candidate editorial records, not claims of released products.
export const portfolio = [
  { name:'VitalReturns', category:'Tax technology', summary:'A platform initiative for tax preparation and filing workflows.', status:'Portfolio initiative' },
  { name:'VitalSchools', category:'Education technology', summary:'Digital platform initiative for school operations and administration.', status:'Portfolio initiative' },
  { name:'VitalMonitor', category:'Technology operations', summary:'Monitoring and management platform initiative.', status:'Portfolio initiative' },
  { name:'VitalWills', category:'Digital services', summary:'Platform initiative for structured digital estate-planning workflows.', status:'Portfolio initiative' },
];
