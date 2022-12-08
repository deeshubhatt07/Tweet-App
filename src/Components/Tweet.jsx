import React from 'react'
import Tweets from '../data/tweets.json'

const Tweet = () => {
  return (
    <div>
      <div><h1>Photo</h1></div>
      {Tweets.map((tweet, index) => {
        return (
          <div id={tweet.id}>
            <div>
              <h5>{tweet.name} (Position:{tweet.depart})</h5>
              <p>Age: {tweet.age} Salary:{tweet.sal}</p>
            </div>
          </div>)
      })}
    </div>
  )
}

export default Tweet
