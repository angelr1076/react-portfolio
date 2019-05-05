import React from "react";
import { Email, Item, Span, A, renderEmail } from "react-html-email";

const emailHTML = renderEmail(
  <Email title="Hello!">
    <Item align="center">
      <Span fontSize={20}>
        This is an example email made with:
        <i className="fa fa-envelope-square" aria-hidden="true" />
        <A href="angelr1076@gmail.com" />.
      </Span>
    </Item>
  </Email>
);

export default emailHTML;
