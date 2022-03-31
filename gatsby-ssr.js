import React from "react"

export function onRenderBody(
  { setPostBodyComponents }
) {
  setPostBodyComponents([
     <script
        key="zoho-form-api-script"
        type="text/javascript"
        src="/src/data/apiScript.js"
      />,
      <script
        key="zoho-form-api-visitor-tracking-script"
        type='text/javascript'
        id='VisitorTracking'
        src="/src/data/visitorTracking.js"
      />,
  ]);
}