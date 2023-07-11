import Movie_row from "./movie_row.js"
const MovieList =()=>{
const movies = [
{
id:1,
     movieName:"Dear ZIndagi",
     movieYear:"2016",
     duration:"2H 31M",
     gender:"Drama,Romance",
     image:"Dear Zindagi.png",
     discription:"Kaira is a Cinematographer search of a perfect life her encounter with jug an unconventional thinker,helps her gain a new perspective on life. She discovers that happiness is all about finding comfort in life's imperfections. "
},{
      id:2,
      movieName:" Brave",
      movieYear:"2012",
      duration:"1h 33msec",
      gender:"Adventuoos,comedy",
      image:"DEAR.png",
      discription:"Determined to make her own path in life, princess,merida defies a custom thats brings chaos to her kingdom. Granted one wish,merida must rely on her bravery and her archery skills to undo a beastly curse "
               
},{
  id:3,
       movieName:"Moana",
       movieYear:"2016",
       duration:"1h 47sec",
       gender:"Adventurous,Comedy",
       image:"Dear1.png",
       discription:"To save father death in the army.A young maiden secretly goes in his place and becomes one of china's greatest heroines in the process. "
},{
id:4,
        movieName:"Mulan",
        movieYear:"1998",
        duration:"1h 27m",
        gender:"Adventurous,Comedy",
        image:"D1.png",
        discription:"To save father death in the army.A young maiden secretly goes in his place and becomes one of china's greatest heroines in the process. "
},{
id:5,
        movieName:"He Named Me Malala",
        movieYear:"2015",
        duration:"1h 20m",
        gender:"Biography, Documentary",
        image:"k5.png",
        discription:"A Look At The Events Loading T The TAlban's Attack On pakistani Schoolgitl Malala Yousafzal For Speaking Out On Girl's Education, Followed By The Afternath,Incliuding Her Speech To The United Nations.. "
},{
id:6,
        movieName:"Soul Surfer",
        movieYear:"2011",
        duration:"1h 52minsec",
        gender:"Drama ,Biography,Family",
        image:"k1.png",
        discription:"Teenage Srfer bethany hamilton overcomes THe Odds and Own fears of Returning to Thewater after losing her left Arm in a shark attack "
},{
id:7,
        movieName:"Bend It Like Beckham",
        movieYear:"2016",
        duration:"1h 47sec",
        gender:"Adventurous,Comedy",
        image:"ka.jpeg",
        discription:"To save father death in the army.A young maiden secretly goes in his place and becomes one of china's greatest heroines in the process. "
},{
id:8,
        movieName:"Into The Wild",
        movieYear:"2016",
        duration:"1h 47sec",
        gender:"Adventurous,Comedy",
        image:"k2.png",
        discription:"To save father death in the army.A young maiden secretly goes in his place and becomes one of china's greatest heroines in the process. "
},{
id:9,
        movieName:"THe Pursuit Of Happyness",
        movieYear:"2006",
        duration:"1h 57m",
        gender:"Drama,Biography",
        image:"k6.jpeg",
        discription:"A Strugling salesman takes custody of his son as he's posied to begin A life-changing professional Career. "
},{
id:10,
        movieName:"The Intouchables",
        movieYear:"2011",
        duration:"1h 52min",
        gender:"Drama Biography Drama",
        image:"k3.png",
        discription:"After He Becomes Aquadriplegic from A paraglicing Accident,An AristocratHires A young Man From The Projects To Be His Caregiver , "

      }];

return (
<div>
{movies.map((item)=>(
<Movie_row key={item.id} item={item} />
))}
</div>
  );
};

export default MovieList;







