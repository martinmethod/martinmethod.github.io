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
    const response = await ContentfulService.getContent();

    return commit('SET_CONTENT', response.items[0].fields);
  }
};
