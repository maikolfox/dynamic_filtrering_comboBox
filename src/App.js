import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      ville: [],
      colours: {}
    };
  }

  componentDidMount() {
    this.setState({
      countries: [
        { id: "CI", name: "Côte d'ivoire" },
        { id: "RU", name: "Russie" },
        { id: "FR", name: "France" }
      ],
      ville: [
        { id: "CI", name: "abidjan" },
        { id: "CI", name: "San pedro" },
        { id: "ALB", name: "Albania" },
        { id: "RU", name: "Vladimir" },
        { id: "RU", name: "Moscou" },
        { id: "FR", name: "Bordeau" },
        { id: "FR", name: "Nante" },
        { id: "FR", name: "Marseille" }
      ]
    });
  }

  render() {
    const { countries } = this.state;
    let countriesList =
      countries.length > 0 &&
      countries.map((item, i) => {
        return (
          <option key={i} value={item.id}>
            {item.name}
          </option>
        );
      }, this);
    const { ville } = this.state;
    let villesList =
      ville.length > 0 &&
      ville.map((item, i) => {
        return (
          <option key={i} value={item.id}>
            {item.name}
          </option>
        );
      }, this);

    return (
      <div>
        <select>{villesList}</select>
      </div>
    );
  }
}
export default App;
