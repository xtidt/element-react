import Markdown from '../../../libs/markdown';

import './style.scss';

export default class Collapse extends Markdown {
  document(locale) {
    switch (locale) {
      default:
        return require('../../docs/zh-CN/collapse.md');
    }
  }
}
