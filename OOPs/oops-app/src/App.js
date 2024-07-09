import logo from './logo.svg';
import './App.css';
import Players from './components/Players';
import Cricketplayers from './classes/Cricketplayers';

function App() {
   
  let Rohitsharma= new Cricketplayers( "Rohit sharma","37","Batter","RHB");
  let ViratKohli= new Cricketplayers( "Virat Kohli","35","Batter","RHB");
  let Bumrah= new Cricketplayers( "Bumrah","30","Bowler","RHB");
  let Jadeja= new Cricketplayers("Jadeja","35","AllRounder","LHB");
  let Ashwin= new Cricketplayers("Ashwin","37","Bowler","RHB");
  let Shami= new Cricketplayers("Shami","33","Bowler","RHB");
  let siraj= new Cricketplayers("Siraj","30","Bowler","RHB");
  let KlRahul= new Cricketplayers("Kl Rahul","32","Batter","RHB");


  return (
    
    <div>
    <h2>Indian Cricket Team Player's</h2>
    <h4><i><u>Details of Player's:</u></i></h4>
    <Players name="Rohit Sharma" age="37" spl="Batter" style="RHB"></Players>
    <Players name="Virat Kohli" age="35" spl="Batter" style="RHB"></Players>
    <Players name="Jasprit Bumrah" age="30" spl="Bowler" style="RHB"></Players>
    <Players name="Ravindra Jadeja" age="35" spl="All Rounder" style="LHB"></Players>
    <Players name="Ashwin" age="37" spl="Bowler" style="RHB"></Players>
    <Players name="Mohammad Shami" age="33" spl="Bowler" style="RHB"></Players>
    <Players name="Mohammad Siraj" age="30" spl="Bowler" style="RHB"></Players>
    <Players name="Kl Rahul" age="32" spl="Wicket Keeper" style="RHB"></Players>
    <Players name="Shubman Gill" age="24" spl="Batter" style="RHB"></Players>
    <Players name="Hardik Pandya" age="30" spl="All Rounder" style="RHB"></Players>
    </div>
  );
}

export default App;
