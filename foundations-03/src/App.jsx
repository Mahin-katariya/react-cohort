import './App.css'
import AvatarCard from './components/AvatarCard.jsx';
const avatars = [
  {
    id: 1,
    power: "Telekinesis",
    initials: "JS",
    name: "John Stark",
    role: "Commander"
  },
  {
    id: 2,
    power: "Invisibility",
    initials: "AR",
    name: "Ava Reynolds",
    role: "Scout"
  },
  {
    id: 3,
    power: "Lightning Control",
    initials: "MK",
    name: "Mason Knight",
    role: "Warrior"
  },
  {
    id: 4,
    power: "Time Manipulation",
    initials: "EL",
    name: "Emma Lewis",
    role: "Strategist"
  }
];


function Shell({description="this is a stories of some marvelous hero's", children}){
  return (
    <div>
      <h3>{description}</h3>
      {children}
    </div> 
  )
}

function App() {
  return (
    <div>
    <h1>Avatar List - </h1>
    {avatars.map(avatar => (<AvatarCard avatar={avatar}/>))}
    <Shell>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur veritatis vel id, esse animi voluptatum sint recusandae quasi nihil deserunt.</p>
    </Shell>
    </div>
  )
}

export default App
