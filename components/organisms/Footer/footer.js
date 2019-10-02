// ===================================================|
// Organisms: FOOTER

import { mapState } from 'vuex';

// Components
import Logo from '@/components/atoms/Logo';
import Copyright from '@/node_modules/mm-atomic-pack/components/atoms/Copyright';

export default {
  components: { Logo, Copyright },

  computed: mapState({
    domain: (state) => state.contentful.data.copyright.fields.domain,
    foundationYear: (state) =>
      state.contentful.data.copyright.fields.foundationYear
  })
};
