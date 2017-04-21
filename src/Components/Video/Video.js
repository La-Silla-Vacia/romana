import { h, render, Component } from 'preact';
import MarkdownIt from 'markdown-it';
const md = new MarkdownIt();

import s from './Video.css';

export default class Intro extends Component {
  render(props, state) {
    const { content, videoLink, title } = props.data;
    const paragraphs = md.render(String(content));

    return (
      <div className={s.container}>
        <video className={s.video} src={videoLink}
               autoPlay="true"
               loop="true" muted="true" />

        <div className={s.inner}>
          <h2 className={s.title}>{title}</h2>
          <div className={s.text} dangerouslySetInnerHTML={{__html: paragraphs}} />
        </div>

        
      </div>
    )
  }
}