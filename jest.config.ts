import type {Config} from '@jest/types';

const config: Config.InitialOptions = {
    verbose: true,
    preset: 'ts-jest',
    collectCoverage: true,
    coverageDirectory: './coverage'
};

export default config;
