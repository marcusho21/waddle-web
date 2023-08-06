import { execSync } from 'child_process';
import chalk from 'chalk';

/**
 * @description script to publish the package to npm
 */
const publish = () => {
  console.log(chalk.cyan('Packaging the package...'));
  execSync('pnpm run pack');

  console.log(chalk.cyan('Publishing the package...'));
  execSync('cd dist && pnpm publish');

  console.log(chalk.greenBright('Package published!\n'));
};

publish();
