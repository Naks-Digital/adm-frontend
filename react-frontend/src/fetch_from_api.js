// import React from "react";

// export default class Fetch_from_api extends React.Component {
//   state = {
//     loading: false,
//   };
//   async componentDidMount() {
//       const url = "https://api.randomuser.me/";
//       const response = await fetch(url);
//       const data = await response.json();
//       console.log(data);
//   }
//   render() {
//     return (
//       <div>
//         {this.state.loading ? <div>loading...</div> : <div>{this.data.results[0].name.title}</div>}
//       </div>
//     );
//   }
// }

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import * as ReactBootStrap from "react-bootstrap";

export default class FetchRandomUser extends React.Component {
  state = {
    loading: true,
    person: null,
  };

  async componentDidMount() {
    const url = "https://api.randomuser.me/";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ person: data.results[0], loading: false });
    console.log(data);
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.person) {
      return <div>didn't get a person</div>;
    }

    return (
      <div>
        <div>
          {this.state.person.name.title}&nbsp;{this.state.person.name.first}
          &nbsp;{this.state.person.name.last}
        </div>
        <img src={this.state.person.picture.large} />
      </div>
    );
  }
}
