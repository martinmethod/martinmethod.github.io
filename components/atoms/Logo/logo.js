// ===================================================|
// Atoms: LOGO

import { mapState } from 'vuex';

export default {
  computed: mapState({
    logo: (state) => state.contentful.data.identity.fields.logo.fields.file.url
  })
};
