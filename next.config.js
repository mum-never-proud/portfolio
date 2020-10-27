const path = require('path');
const withPWA = require('next-pwa');

module.exports = withPWA({
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV !== 'production',
  },
  webpack(config) {
    const { resolve } = config;
    const overrides = {
      resolve: {
        ...resolve,
        extensions: [...resolve.extensions, '.scss', '.css'],
        alias: {
          ...resolve.alias,
          '@': path.resolve(__dirname, 'src'),
          '@components': path.resolve(__dirname, 'src', 'components'),
          '@constants': path.resolve(__dirname, 'src', 'constants'),
          '@fragments': path.resolve(__dirname, 'src', 'components', 'fragments'),
          '@services': path.resolve(__dirname, 'src', 'services'),
          '@styles': path.resolve(__dirname, 'src', 'styles'),
          '@utils': path.resolve(__dirname, 'src', 'utils'),
        },
      },
    };

    return { ...config, ...overrides };
  },
});
