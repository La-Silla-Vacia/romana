import { h, render, Component } from 'preact';

import s from './base.css';
const data = require('../data/data.json');

import Intro from './Components/Intro';
import Text from './Components/Text';
import Video from './Components/Video';

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
    let dataExists = true;
    let interactiveData;
    let dataUri;
    try {
      if (cronica_transmedia_data) {
        dataExists = true;
        interactiveData = cronica_transmedia_data;
      }
    } catch (e) {
      dataExists = false;
    }

    this.setState({ data: data });
    if (dataExists) {
      if (interactiveData.dataUri) {
        dataUri = interactiveData.dataUri;
        this.fetchData(dataUri);
      }
    }
  }

  fetchData(uri) {
    fetch(uri)
      .then((response) => {
        return response.json()
      }).then((json) => {
      this.setState({ data: json });
    }).catch((ex) => {
      console.log('parsing failed', ex)
    })
  }

  getSections (){
    const {sections} = this.state.data;

    return sections.map((section, index) => {
      if (section.type === "text") {
        return (
          <Text data={section} key={index} />
        )
      } else if (section.type === "video") {
        return (
          <Video data={section} key={index} />
        )
      }
    });
  }

  render(props, state) {
    const { intro } = state.data;
    const sections = this.getSections();
    return (
      <div className={s.container}>
        <Intro data={intro} />
        {sections}
      </div>
    )
  }
}