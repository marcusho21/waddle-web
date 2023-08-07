import { execSync } from 'child_process';
import chalk from 'chalk';

/**
 * @description script to publish the package to npm
 */
const publish = () => {
  const gitStatus = execSync('git status --porcelain').toString();

  if (gitStatus) {
    console.log(chalk.red('Please commit all changes before publishing!'));
    return;
  }

  console.log(chalk.cyan('Publishing the package...'));
  execSync('cd dist && pnpm publish');
  console.log(chalk.greenBright('Package published!\n'));
};

publish();
