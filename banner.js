import { title, homepage, author, version } from './package.json';

export default `
 • ${title || name} (v${version})
   ${homepage}
   Copyright © ${new Date().getFullYear()} ${author.name}
   
 • ${author.name}
   ${author.email}
   ${author.url}
   
 • Last update: ${new Date().toDateString()}
`;
