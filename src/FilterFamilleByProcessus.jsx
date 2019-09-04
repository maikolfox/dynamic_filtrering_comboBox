import React from "react";
import FamilleProcessus from "./FamilleProcessus";
import Processus from "./Processus";

export default class FilterFamilleByProcess extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      processus: null,
      familleProcessus: FamilleProcessus,
      listeProcessus: Processus
    };
    this.handleChange = this.handleChange.bind(this);
    this.filterFamilly = this.filterFamilly.bind(this);
  }
  filterFamilly(idFam) {
    return idFam.idProcessus === this.state.processus;
  }
  handleChange = e => {
    e.preventDefault();

    var filtFam = FamilleProcessus.filter(item => {
      return item.idProcessus === e.target.value;
    });
    this.setState({ familleProcessus: filtFam, processus: e.target.value });

    console.log(filtFam, this.state.processus);
  };

  render() {
    var famProc =
      this.state.familleProcessus.length > 0 &&
      this.state.familleProcessus.map((item, i) => {
        return (
          <option key={i} value={item.idFamille}>
            {item.libelleFamille}
          </option>
        );
      });
    const { listeProcessus } = this.state;
    let proceList =
      listeProcessus.length > 0 &&
      listeProcessus.map((item, i) => {
        return (
          <option key={i} value={item.idProcessus}>
            {item.libelleProcessus}
          </option>
        );
      }, this);
    return (
      <div>
        Processus :&nbsp;&nbsp;
        <select onChange={this.handleChange}>{proceList}</select>
        <br />
        <br />
        Famille : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <select>{famProc}</select>
      </div>
    );
  }
}
