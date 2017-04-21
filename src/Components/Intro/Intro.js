import { h, render, Component } from 'preact';

import s from './Intro.css';

export default class Intro extends Component {
  render(props, state) {
    const { firstLine, secondLine, introText, author, date } = props.data;

    return (
      <div className={s.container}>
        <video className={s.video} src="http://especiales.semana.com/agua-bendita/video/belmira/belmiraIntro.mp4"
               autoPlay="true"
               loop="true" muted="true" />
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