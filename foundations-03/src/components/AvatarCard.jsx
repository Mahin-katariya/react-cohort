function AvatarCard({avatar, level = "Rookie"}){
  return (
    <div>
    <hr />
    <p> name: {avatar.name} ({avatar.initials})</p>
    <b>level: </b> {avatar.id === 1 ? "Captain" : level}
    </div>
  )
}

export default AvatarCard