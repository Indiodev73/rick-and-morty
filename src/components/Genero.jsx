export function Genero ({ gender }) {
  return (
    <>
      {gender === 'Female' ? (<h5>♀️ {gender}</h5>) : (<h5>♂️ {gender}</h5>)}
    </>
  )
}
