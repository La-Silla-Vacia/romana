import { h, render, Component } from 'preact';
import s from './Credits.css';

export default class Intro extends Component {

  getPeople() {
    const { people } = this.props.data;
    // console.log(th);
    return people.map((person, index) => {
      const { role, name } = person;
      return (
        <tr key={index}>
          <td>{ role }:</td>
          <td>{ name }</td>
        </tr>
      )
    });
  }

  render(props, state) {
    const peoples = this.getPeople();

    return (
      <div className={s.container}>
        <div className={s.inner}>
          <h4 className={s.title}>Créditos</h4>
          <table className={s.table}>
            <tbody>
            {peoples}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}