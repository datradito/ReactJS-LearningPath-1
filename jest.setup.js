import 'whatwg-fetch';
import { getEnvironments } from './src/utils/getEnvironments';

require('dotenv').config({
    path: '.env.test'
});
jest.mock('./src/utils/getEnvironments', () => {
    getEnvironments: () => ({ ...process.env })
})