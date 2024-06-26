const copy = require('rollup-plugin-copy');
const replace = require('@rollup/plugin-replace');

module.exports = (rollupConfig, projectOptions) => {
  const project = projectOptions.project;
  const pkg = require(project);

  rollupConfig.plugins.push(
    replace({
      __VERSION__: JSON.stringify(pkg.version),
    }),
    copy({
      targets: [
        {
          src: 'packages/rspack/LICENSE',
          dest: 'packages/rspack/dist',
        },
      ],
    }),
  );

  return rollupConfig;
};
