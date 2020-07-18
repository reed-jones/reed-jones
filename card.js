#!/usr/bin/node
const boxen = require('boxen');
const chalk = require('chalk');

console.log(boxen(
    chalk`
  {underline.hex('#81A6C5') Reed Jones} / reed-jones
       {bold.hex('#7EE3D9') Work:}   {hex('#BFD75A') Full Stack Developer} at {hex('#BFD75A') PDERAS}
    {bold.hex('#7EE3D9') Twitter:}   twitter.com/{hex('#D9B812') rj0nz}
     {bold.hex('#7EE3D9') Github:}   github.com/{hex('#D9B812') reed-jones}
    {bold.hex('#7EE3D9') CodePen:}   codepen.io/{hex('#D9B812') reed-jones}
   {bold.hex('#7EE3D9') LinkedIn:}   linkedin.com/in/{hex('#D9B812') reedgjones}
        {bold.hex('#7EE3D9') Web:}   {underline.hex('#81A6C5') reedjones.com}
`
    , {
    padding: 1,
    margin: 1,
    borderStyle: 'round',
    dimBorder: true,
    backgroundColor: 'black',
    borderColor: '#81A6C5',
    align: 'left'
}));

// v1 without template literals
// console.log(boxen(`
//  ${chalk.underline(chalk.blue('Reed Jones'))} / reed-jones
//       ${chalk.bold(chalk.hex(color.riptide)('Work:'))}   ${chalk.hex(color.green)('Full Stack Developer')} at ${chalk.hex('#BFD75A')('PDERAS')}
//    ${chalk.bold(chalk.hex(color.riptide)('Twitter:'))}   twitter.com/${chalk.hex(color.yellow)('rj0nz')}
//     ${chalk.bold(chalk.hex(color.riptide)('Github:'))}   github.com/${chalk.hex(color.yellow)('reed-jones')}
//    ${chalk.bold(chalk.hex(color.riptide)('CodePen:'))}   codepen.io/${chalk.hex(color.yellow)('reed-jones')}
//   ${chalk.bold(chalk.hex(color.riptide)('LinkedIn:'))}   linkedin.com/in/${chalk.hex(color.yellow)('reedgjones')}
//        ${chalk.bold(chalk.hex(color.riptide)('Web:'))}   ${chalk.underline(chalk.blue('reedjones.com'))}
// `, {
//     padding: 1,
//     margin: 1,
//     borderStyle: 'round',
//     dimBorder: true,
//     align: 'left'
// }));
