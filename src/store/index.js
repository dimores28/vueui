import { createStore } from 'vuex'

import depaartment from './depaartment';
import employee from './employee';

export default createStore({
  modules: {
    depaartment,
    employee
  },
  strict: process.env.NODE_ENV !== 'production',
});
