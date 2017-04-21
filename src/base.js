import { h, render, Component } from 'preact';

import s from './base.css';
const data = require('../data/data.json');

import Intro from './Components/Intro';
import Text from './Components/Text';
import Video from './Components/Video';
import Credits from './Components/Credits';

export default class Base extends Component {

  constructor() {
    super();

    this.state = {
      data: []
    };

    this.setData = this.setData.bind(this);
  }

  componentWillMount() {
    this.setData();
  }

  setData() {
    this.setState({ data: data });
    // if (dataExists) {
    //   if (interactiveData.dataUri) {
    //     dataUri = interactiveData.dataUri;
    //     this.fetchData(dataUri);
    //   }
    // }
  }

  getSections() {
    const { sections } = this.state.data;

    return sections.map((section, index) => {
      const { type } = section;
      switch (type) {
        case "intro":
          return (
            <Intro data={section} />
          );
          break;
        case "text":
          return (
            <Text data={section} key={index} />
          );
          break;
        case "video":
          return (
            <Video data={section} key={index} />
          );
          break;
        case "credits":
          return (
            <Credits data={section} key={index} />
          );
          break;
      }
    });
  }

  render(props, state) {
    const sections = this.getSections();
    return (
      <div className={s.container}>
        {sections}
      </div>
    )
  }
}