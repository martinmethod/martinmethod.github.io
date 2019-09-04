// ===================================================|
// Atoms: AVATAR

import { mapState } from 'vuex';

export default {
  computed: mapState({
    avatar: (state) => state.contentful.data.identity.fields.avatar,
    firstName: (state) => state.contentful.data.identity.fields.firstName,
    lastName: (state) => state.contentful.data.identity.fields.lastName
  })
};
