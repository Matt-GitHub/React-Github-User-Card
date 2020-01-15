import React from "react";
import Data from "./githubCard/data";
import Axios from "axios";
// import Followers from "./githubCard/card";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      profileData: [],
      followers: []
    };
  }
  componentDidMount() {
    Axios.get("https://api.github.com/users/Matt-GitHub")
      .then(response => {
        //   setData(response.data);
        this.setState({
          profileData: response.data
        });
      })
      .then(() => {
        Axios.get("https://api.github.com/users/Matt-GitHub/followers").then(
          response => {
            console.log("follower at index", response.data);
            response.data.forEach(user => {
              Axios.get(`https://api.github.com/users/${user.login}`).then(
                response => {
                  this.setState({
                    followers: [...this.state.followers, response.data]
                  });
                }
              );
            });
            // this.setState({
            //   followers: response.data
            // });
          }
        );
      })
      .catch(error => {
        console.log("error", error);
      });
  }
  render() {
    return (
      <div>
        <h1 className="center">GitHub Card App</h1>
        <Data
          followers={this.state.followers}
          profileData={this.state.profileData}
        />
        {/* <Followers followers={this.state.followers} /> */}
      </div>
    );
  }
}

export default App;
