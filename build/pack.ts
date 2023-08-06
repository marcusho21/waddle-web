import { execSync } from 'child_process';
import chalk from 'chalk';

const pack = () => {
  console.log(chalk.blue('Packing the package...'));
  execSync('cd dist && pnpm pack');

  console.log(chalk.blue('Moving the package to pack folder...'));
  execSync('rm -rf pack && mkdir pack');
  execSync('mv dist/*.tgz pack/');

  console.log(chalk.greenBright('Package packed!\n'));
};

pack();
