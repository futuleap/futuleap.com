//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { composePlugins, withNx } = require('@nx/next');

const isGithubActions = Boolean(process.env.GITHUB_ACTIONS);

let assetPrefix = '';
let basePath = '';

if (isGithubActions) {
  console.log('github actions!')
  const repo = process.env.GITHUB_REPOSITORY
    ? process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')
    : '';

  assetPrefix = `/${repo}/`;
  basePath = `/${repo}`;
}

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  trailingSlash: true,
  assetPrefix: assetPrefix,
  basePath: basePath,
};

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
];

module.exports = composePlugins(...plugins)(nextConfig);
