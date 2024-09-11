export function Estado ({ status }) {
  return (
    <>
      {status === 'unknown'
        ? (
          <h5>🟣 {status} </h5>
          )
        : status === 'Alive'
          ? (
            <h5>🟢 {status} </h5>
            )
          : status === 'Dead'
            ? (
              <h5>🔴 {status} </h5>
              )
            : null}
    </>
  )
}
