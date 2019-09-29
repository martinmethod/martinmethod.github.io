// ===================================================|
// Pages: INDEX

import { mapState } from 'vuex';
import { isMobile } from 'mobile-device-detect';

// Components
import Main from '@/components/organisms/Main';

export default {
  async fetch({ store }) {
    await store.dispatch('contentful/fetchContent');
  },

  components: { Main },

  computed: mapState({
    content: (state) => state.contentful.data
  }),

  created() {
    if (process.client) {
      const device = isMobile ? 'mobile' : 'desktop';
      document.body.classList.add(device);
    }
  }
};
