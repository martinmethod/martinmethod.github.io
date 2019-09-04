import ContentfulService from '@/services/ContentfulService';

export const state = () => ({
  data: {}
});

export const mutations = {
  SET_CONTENT(state, payload) {
    state.data = payload;
  }
};

export const actions = {
  async fetchContent({ commit }) {
    try {
      const response = await ContentfulService.getContent();

      return commit('SET_CONTENT', response.items[0].fields);
    } catch (e) {
      $nuxt.error({
        statusCode: e.response.status,
        message: e.response.data.message
      });
    }
  }
};
