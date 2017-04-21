import { h, render, Component } from 'preact';
import LazyLoad from 'react-lazyload';
import MarkdownIt from 'markdown-it';
const md = new MarkdownIt();

import s from './Video.css';

export default class Intro extends Component {
  render(props, state) {
    const { content, videoLink, videoStill, title } = props.data;
    const paragraphs = md.render(String(content));

    return (
      <div className={s.container} style={{backgroundImage: `url(${videoStill})`}}>
        <LazyLoad height={200} once>
          <video
            className={s.video}
            src={videoLink}
            autoPlay="true"
            loop="true"
            muted="true"
            playsinline="true"
          />
        </LazyLoad>

        <div className={s.inner}>
          {/*<h2 className={s.title}>{title}</h2>*/}
          <div className={s.text} dangerouslySetInnerHTML={{ __html: paragraphs }} />
        </div>
      </div>
    )
  }
}