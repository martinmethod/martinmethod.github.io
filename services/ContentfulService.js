import { createClient } from 'contentful';
import { accessToken, space, layout } from '~/config/contentful.json';

const apiClient = createClient({
  environment: process.env.NODE_ENV === 'development' ? 'master' : 'production',
  space,
  accessToken,
  resolveLinks: true
});

export default {
  getContent() {
    return apiClient.getEntries({
      content_type: 'homePage',
      'fields.id[in]': layout
    });
  }
};
