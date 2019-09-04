// ===================================================|
// Organisms: MAIN

import { mapState } from 'vuex';

import Article from '@/components/molecules/Article';
import LinksGroup from '@/components/molecules/LinksGroup';

export default {
  components: { Article, LinksGroup },

  computed: {
    author() {
      return {
        name: `${this.identity.fields.firstName} ${this.identity.fields.lastName}`,
        avatar: this.identity.fields.avatar
      };
    },
    ...mapState({
      accounts: (state) => state.contentful.data.accounts,
      documents: (state) => state.contentful.data.briefcase,
      identity: (state) => state.contentful.data.identity,
      text: (state) => state.contentful.data.text
    })
  }
};
