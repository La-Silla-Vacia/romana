import { h, render, Component } from 'preact';

import s from './Intro.css';

export default class Intro extends Component {
  render(props, state) {
    const { firstLine, secondLine, introText, author, date, videoLink, videoStill } = props.data;

    return (
      <div className={s.container} style={{backgroundImage: `url(${videoStill})`}}>
        <video className={s.video} src={videoLink}
               autoPlay="true"
               loop="true" muted="true" playsinline="true" />
        <div />
        <div className={s.title}>
          <h1>
            <span className={s.first}>{firstLine}</span>
            <span className={s.second}>{secondLine}</span>
          </h1>
        </div>

        <div className={s.text}>
          <div className={s.paragraph}>
            <p>{ introText }</p>
          </div>
          <div className={s.meta}>
            <time className={s.date}>{ date }</time>
            <span className={s.author}>Por {author}</span>
          </div>
        </div>
      </div>
    )
  }
}