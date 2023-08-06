import { copyFileSync } from 'fs';
import { execSync } from 'child_process';

const build = () => {
  // build the project
  execSync('pnpm run build');
  execSync('pnpm run build:styles');

  // copy package.json to dist
  copyFileSync('./package.json', './dist/package.json');

  // run pnpm pack inside dist
  execSync('cd dist && pnpm pack');

  // remove pack folder then recreate it and copy the tarball to it
  execSync('rm -rf pack && mkdir pack');
  execSync('mv dist/*.tgz pack/');
};

build();
