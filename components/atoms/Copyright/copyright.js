// ===================================================|
// Atoms: COPYRIGHT

import { mapState } from 'vuex';

export default {
  computed: mapState({
    domain: (state) => state.contentful.data.copyright.fields.domain,
    foundationYear: (state) =>
      state.contentful.data.copyright.fields.foundationYear
  })
};
