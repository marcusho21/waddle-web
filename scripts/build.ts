import { copyFileSync } from 'fs';
import { execSync } from 'child_process';
import chalk from 'chalk';

/**
 * @description script to build the package and copy package.json to dist
 */
const build = () => {
  console.log(chalk.yellowBright('start building...'));

  const isWatch =
    process.argv.includes('--watch') || process.argv.includes('-w');
  if (isWatch) {
    console.log(chalk.greenBright('watching for changes...\n'));
  }

  execSync('vite build' + (isWatch ? ' --watch' : ''));
  execSync('pnpm run build:styles');

  console.log(chalk.yellowBright('copying package.json...'));
  copyFileSync('./package.json', './dist/package.json');

  console.log(chalk.greenBright('build complete!\n'));
};

build();
