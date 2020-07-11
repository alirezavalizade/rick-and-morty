module.exports = () => {
    return {
        // WEBPACK
        webpack(config) {
            const rules = [
                {
                    test: /\.svg$/,
                    issuer: {
                    test: /\.(js|ts)x?$/,
                },
                    use: ['@svgr/webpack'],
                }
            ];
            config.module.rules.push(...rules);
            return config;
        },
        // ENV
        env: {
            BASE_URL: (() => {
                return 'https://rickandmortyapi.com/api/';
            })(),
        }
    };
};