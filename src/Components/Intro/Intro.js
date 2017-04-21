import { h, render, Component } from 'preact';

import s from './Intro.css';

export default class Intro extends Component {
  render(props, state) {
    const { firstLine, secondLine, introText } = props.data;

    return (
      <div className={s.container}>
        <video className={s.video} src="http://especiales.semana.com/agua-bendita/video/belmira/belmiraIntro.mp4"
               autoPlay="true"
               loop="true" muted="true" />
        <div className={s.title}>
          <h1>
            <span className={s.first}>{firstLine}</span>
            <span className={s.second}>{secondLine}</span>
          </h1>
          <div className={s.text}>
            <p>{ introText }</p>
          </div>
        </div>
      </div>
    )
  }
}