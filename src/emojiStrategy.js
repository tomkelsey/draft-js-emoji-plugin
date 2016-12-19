import findWithRegex from 'find-with-regex';
import { unicodeRegexp as emojioneUnicodeRegexp } from 'emojione';

const unicodeRegex = new RegExp(emojioneUnicodeRegexp, 'g');

export default (contentBlock: Object, callback: Function) => {
  findWithRegex(unicodeRegex, contentBlock, callback);
};
