const path = require('path');

module.exports = {
  reactStrictMode: true,
  optimizeFonts: false,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  webpack: (config) => {
    // import vert/frag
    config.module.rules.push({
      test: /\.(vert|frag)$/i,
      type: 'asset/source',
    });

    // Important: return the modified config
    return config;
  },
};
