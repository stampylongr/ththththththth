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
          <a href="//github.com/lunaisnotaboy">(my personal gh account)</a>
        </li>
        <li>
          <h3>
            <FontAwesomeIcon icon={["fab", "gitlab"]} /> glimmerhq
          </h3>
          <a href="//glimmerhq.com/luna">
            (my personal glimmerhq account)
          </a>
        </li>
        <li>
          <h3>
            <FontAwesomeIcon icon={["fab", "twitter"]} /> Twitter
          </h3>
          <a href="//twitter.com/lunaisnotaboy">(my personal twitter)</a>
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
