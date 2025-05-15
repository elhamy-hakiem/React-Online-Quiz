function FinishScreen({ points, maxPossiblePoints, highscore, dispatch }) {
  const precentage = Math.ceil((points / maxPossiblePoints) * 100)
  return (
    <>
      <div className='result'>
        you'r scored <strong>{points}</strong> out of {maxPossiblePoints} ({precentage} %)
      </div>
      <p className='highscore'>High Score : {highscore} points</p>
      <button className='btn btn-ui' onClick={() => dispatch({ type: 'restart' })}>
        Restart
      </button>
    </>
  )
}

export default FinishScreen
