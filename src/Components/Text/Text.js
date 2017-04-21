import { h, render, Component } from 'preact';
import MarkdownIt from 'markdown-it';
const md = new MarkdownIt();

import s from './Text.css';

export default class Intro extends Component {
  render(props, state) {
    const { content } = props.data;
    const paragraphs = md.render(String(content));

    return (
      <div className={s.container}>
        <div className={s.inner} dangerouslySetInnerHTML={{__html: paragraphs}} />
      </div>
    )
  }
}