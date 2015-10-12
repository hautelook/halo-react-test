var Index = function(props) {
  return (
    <article>
      <h1>HauteLook React Test</h1>
      <p>You will be replacing this page with a grid of HauteLook flash events.</p>
      <ul>
        <li>The json data of events is at <a href="/events">/events</a></li>
      </ul>
      <p>Not sure where to start? Check out the README!</p>
    </article>
  );
}

React.render(
  <Index />,
  document.getElementById('content')
);
