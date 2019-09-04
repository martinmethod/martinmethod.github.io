// ===================================================|
// Pages: INDEX

import { mapState } from 'vuex';
import Main from '@/components/organisms/Main';

export default {
  async fetch({ store }) {
    await store.dispatch('contentful/fetchContent');
  },

  components: { Main },

  computed: mapState({
    content: (state) => state.contentful.data
  })
};
