// ===================================================|
// Molecules: ARTICLE

import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

import Heading from '@/components/atoms/Heading';
import TextBlock from '@/components/atoms/Text';
import Author from '@/components/atoms/Author';
import Avatar from '@/components/atoms/Avatar';

export default {
  components: { Heading, TextBlock, Author, Avatar },

  computed: {
    formattedTitle() {
      return this.title
        .replace('I ', 'I<br />')
        .replace('convert ', 'convert<br />')
        .replace('design', '<span data-col="o">design</span>')
        .replace('code', '<span data-col="b">code</span>');
    },

    formattedText() {
      return documentToHtmlString(this.content);
    }
  },

  props: {
    title: {
      type: String,
      required: true
    },
    content: {
      type: Object,
      required: true
    },
    author: {
      type: Object
    }
  }
};
