import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Profiles extends React.Component {
  render() {
    return (
      <ul className="contact">
        <li>
          <h3>
            <FontAwesomeIcon icon={["fab", "github"]} /> GitHub
          </h3>
          <a href="//github.com/lunaisnotaboy">(github.com/lunaisnotaboy)</a>
        </li>
        <li>
          <h3>
            <FontAwesomeIcon icon={["fab", "github-alt"]} /> GitHub Enterprise
          </h3>
          <a href="//becausetrigger.ga/lunaisnotaboy">
            (becausetrigger.ga/lunaisnotaboy)
          </a>
        </li>
        <li>
          <h3>
            <FontAwesomeIcon icon={["fab", "twitter"]} /> Twitter
          </h3>
          <a href="//twitter.com/lunaisnotaboy">(twitter.com/lunaisnotaboy)</a>
        </li>
        <li>
          <h3>
            <FontAwesomeIcon icon={["fas", "envelope"]} /> Email
          </h3>
          <span>(yo [at] themintfarm [dot] ml)</span>
        </li>
      </ul>
    );
  }
}
