import React, { useCallback } from "react";

export default function Embed() {
  return (
    <>
      <h1>This is a random webpage</h1>
      <h2>The content here is random, but the chatbot is a relavant one</h2>
      <article>
        <h2>Google Chrome</h2>
        <p>
          Google Chrome is a web browser developed by Google, released in 2008.
          Chrome is the world's most popular web browser today! Google Chrome is
          a web browser developed by Google, released in 2008. Chrome is the
          world's most popular web browser today! Google Chrome is a web browser
          developed by Google, released in 2008. Chrome is the world's most
          popular web browser today! Google Chrome is a web browser developed by
          Google, released in 2008. Chrome is the world's most popular web
          browser today! Google Chrome is a web browser developed by Google,
          released in 2008. Chrome is the world's most popular web browser
          today! Google Chrome is a web browser developed by Google, released in
          2008. Chrome is the world's most popular web browser today! Google
          Chrome is a web browser developed by Google, released in 2008. Chrome
          is the world's most popular web browser today!
        </p>
      </article>

      <article>
        <h2>Mozilla Firefox</h2>
        <p>
          Mozilla Firefox is an open-source web browser developed by Mozilla.
          Firefox has been the second most popular web browser since January,
          2018. Mozilla Firefox is an open-source web browser developed by
          Mozilla. Firefox has been the second most popular web browser since
          January, 2018. Mozilla Firefox is an open-source web browser developed
          by Mozilla. Firefox has been the second most popular web browser since
          January, 2018. Mozilla Firefox is an open-source web browser developed
          by Mozilla. Firefox has been the second most popular web browser since
          January, 2018. Mozilla Firefox is an open-source web browser developed
          by Mozilla. Firefox has been the second most popular web browser since
          January, 2018. Mozilla Firefox is an open-source web browser developed
          by Mozilla. Firefox has been the second most popular web browser since
          January, 2018. Mozilla Firefox is an open-source web browser developed
          by Mozilla. Firefox has been the second most popular web browser since
          January, 2018. Mozilla Firefox is an open-source web browser developed
          by Mozilla. Firefox has been the second most popular web browser since
          January, 2018. Mozilla Firefox is an open-source web browser developed
          by Mozilla. Firefox has been the second most popular web browser since
          January, 2018. Mozilla Firefox is an open-source web browser developed
          by Mozilla. Firefox has been the second most popular web browser since
          January, 2018.
        </p>
      </article>

      <article>
        <h2>Microsoft Edge</h2>
        <p style={{ width: "50%" }}>
          Microsoft Edge is a web browser developed by Microsoft, released in
          2015. Microsoft Edge replaced Internet Explorer. Microsoft Edge is a
          web browser developed by Microsoft, released in 2015. Microsoft Edge
          replaced Internet Explorer. Microsoft Edge is a web browser developed
          by Microsoft, released in 2015. Microsoft Edge replaced Internet
          Explorer. Microsoft Edge is a web browser developed by Microsoft,
          released in 2015. Microsoft Edge replaced Internet Explorer. Microsoft
          Edge is a web browser developed by Microsoft, released in 2015.
          Microsoft Edge replaced Internet Explorer. Microsoft Edge is a web
          browser developed by Microsoft, released in 2015. Microsoft Edge
          replaced Internet Explorer. Microsoft Edge is a web browser developed
          by Microsoft, released in 2015. Microsoft Edge replaced Internet
          Explorer. Microsoft Edge is a web browser developed by Microsoft,
          released in 2015. Microsoft Edge replaced Internet Explorer. Microsoft
          Edge is a web browser developed by Microsoft, released in 2015.
          Microsoft Edge replaced Internet Explorer. Microsoft Edge is a web
          browser developed by Microsoft, released in 2015. Microsoft Edge
          replaced Internet Explorer. Microsoft Edge is a web browser developed
          by Microsoft, released in 2015. Microsoft Edge replaced Internet
          Explorer. Microsoft Edge is a web browser developed by Microsoft,
          released in 2015. Microsoft Edge replaced Internet Explorer. Microsoft
          Edge is a web browser developed by Microsoft, released in 2015.
          Microsoft Edge replaced Internet Explorer. Microsoft Edge is a web
          browser developed by Microsoft, released in 2015. Microsoft Edge
          replaced Internet Explorer.
        </p>
      </article>
      <div className="embed-body" style={{ display: "flex" }}>
        <iframe
          src="http://localhost:3000/interact"
          width="40%"
          height="400"
          style={{
            border: "4px solid black",
            position: "fixed",
            bottom: "10px",
            right: "20px",
          }}
        ></iframe>
      </div>
    </>
  );
}
