import apiClient from '~/node_modules/mm-atomic-pack/configs/api/contentful';
import { contentfulLayout } from '~/site.json';

export default {
  getContent() {
    return apiClient.getEntries({
      content_type: 'homePage',
      'fields.id[in]': contentfulLayout
    });
  }
};
