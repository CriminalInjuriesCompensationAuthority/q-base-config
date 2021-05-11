const createModuleZero = require('module-zero');

const m0 = createModuleZero({
    files: '**/*',
    devDependencies: {
        "eslint": "^6.8.0",
        "eslint-config-airbnb-base": "^14.0.0",
        "eslint-config-prettier": "^6.9.0",
        "eslint-plugin-import": "^2.19.1",
        "eslint-plugin-jest": "^23.3.0",
        "eslint-plugin-prettier": "^3.1.2",
        "fs-extra": "^8.1.0",
        "husky": "^4.0.3",
        "jest": "^26.6.3",
        "lint-staged": "^9.5.0",
        "prettier": "^1.19.1"
    },
    blocks: {
        src: '**/*',
        commentStyles: {
            '#': '#! m0',
            '//': '//! m0',
            '/**/': '/*! m0 */'
        },
        commentStyleMap: {
            '.gitignore': '#',
            '.eslintignore': '#',
            '.js': '/**/'
        }
    }
});

m0.copyFiles();
m0.createBlocks();
m0.installDevDependencies();
