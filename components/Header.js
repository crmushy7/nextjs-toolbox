export default function Header({ title }) {
  return (
    <>
      <h1 className="title">{title}</h1>
      <p>
       You can see the history of EPL{" "}
        <a href="https://www.footballhistory.org/league/premier-league.html">Next.js</a> app with the scaffolding for{" "}
        <a href="https://www.footballhistory.org/league/premier-league.html/">
          Netlify Functions
        </a>
        , <a href="https://www.netlify.com/products/forms/">Forms</a>, and{" "}
        <a href="https://docs.netlify.com/routing/redirects/">Redirects</a>. Our
        aim was to give you the code you would need to hit the ground running
        with a few fun features.
      </p>

      <p>
        You can find the code for this project on GitHub at{" "}
        <a href="https://github.com/netlify-templates/nextjs-toolbox">
          https://github.com/netlify-templates/nextjs-toolbox
        </a>
        ! Happy coding!
      </p>
    </>
  );
}
