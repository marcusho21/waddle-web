import { copyFileSync } from 'fs';
import { execSync } from 'child_process';
import chalk from 'chalk';

const build = () => {
  console.log(chalk.yellowBright('removing existing build...'));
  execSync('rm -rf dist');

  console.log(chalk.yellowBright('start building...'));
  execSync('vite build');
  execSync('pnpm run build:styles');

  console.log(chalk.yellowBright('copying package.json...'));
  copyFileSync('./package.json', './dist/package.json');

  console.log(chalk.greenBright('build complete!\n'));
};

build();
