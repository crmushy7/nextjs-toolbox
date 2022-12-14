export default function Header({ title }) {
  return (
    <>
      <h1 className="title">{title}</h1>
      <p>
       You can see the history of English Premium League {" "}
        <a href="https://www.footballhistory.org/league/premier-league.html">EPL</a> or even{" "}
        <a href="https://www.footballhistory.org/league/premier-league.html/">
          
        </a>
        , <a href="https://www.footballhistory.org/league/la-liga.html">LALIGA</a>, and{" "}
        <a href="https://www.footballhistory.org/league/serie-a.html">SERIA A</a>. Our
        aim was to give you the history of football.
      </p>



      <p>
        You can find the history of some players at{" "}
        <a href="https://www.footballhistory.org/player/index.html">
         https://www.footballhistory.org/player/index.html
        </a>
      
      </p>
       <p>
              Enjoy soccer!!!
       </p>  
    </>
  );
}
