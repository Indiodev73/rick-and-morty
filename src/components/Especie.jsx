export function Especie ({ species }) {
  return (
    <>
      {species === 'Human'
        ? (
          <h5>👦 {species} </h5>
          )
        : species === 'Alien'
          ? (
            <h5>👽 {species} </h5>
            )
          : species === 'Cronenberg'
            ? (
              <h5>😶‍🌫️ {species} </h5>
              )
            : species === 'Robot'
              ? (
                <h5>🤖 {species} </h5>
                )
              : species === 'Animal'
                ? (
                  <h5>🫎 {species} </h5>
                  )
                : species === 'Mythological Creature'
                  ? (
                    <h5>🦄 {species} </h5>
                    )
                  : species === 'Humanoid'
                    ? (
                      <h5>😈 {species} </h5>
                      )
                    : null}
    </>
  )
}
