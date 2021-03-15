import * as React from "react";

import Profiles from "./Profiles";

export default class Body extends React.Component {
  render() {
    return (
      <main>
        <p>Hey! Sorry for the lack of... anything.</p>
        <hr />
        <p>
          The Mint Farm is gone for good now, due to my ISP terminating our
          subscription.
        </p>
        <hr />
        <p>
          P.S. if you need to contact me, try to find me through any of the
          following services:
        </p>
        <Profiles />
      </main>
    );
  }
}
