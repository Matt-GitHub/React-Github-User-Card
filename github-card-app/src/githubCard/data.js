import React from "react";
import "./card.css";
import TransitionsModal from "./modal";

class Data extends React.Component {
  constructor(props) {
    super(props);
  }
  //   console.log("user at index 0", props.followers[0]);
  render() {
    return (
      <div className="flex">
        <div className="wrap">
          <img
            classname="photo"
            src={this.props.profileData.avatar_url}
            alt=""
          />

          <h3>{this.props.profileData.name}</h3>
          <p>{this.props.profileData.location}</p>
          <TransitionsModal />
        </div>
        {this.props.followers.map((info, key) => {
          return (
            <div key={key} className="wrap">
              <img src={info.avatar_url} alt={`${info.login}`} />
              <h1>{info.login}</h1>
              <h3>{info.location}</h3>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Data;
