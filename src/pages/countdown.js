import React, { useState } from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import "typeface-poppins"
import "typeface-acme"
import "../components/layout.css"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #95afc0;
  padding: 10px;
  color: white;
  font-family: "Poppins";
`

const CountdownBox = styled.div`
  background-color: #660099;
  color: white;
  opacity: 0.8;
  border-radius: 5px;
  padding: 20px;
  margin: 5%;

  h1 {
    font-family: "Acme";
    margin-bottom: 40px;
    text-align: center;
  }
`

const Clock = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;

  span {
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 60px;
    align-items: center;

    @media only screen and (max-device-width: 700px) {
      font-size: 40px;
    }

    label {
      font-size: 20px;
      margin-top: 8px;

      @media only screen and (max-device-width: 700px) {
        font-size: 14px;
      }
    }
  }
`

const ArrivalDate = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 15px;
`

export default function countdown(props) {
  const [days, setDays] = useState()
  const [hours, setHours] = useState()
  const [mins, setMins] = useState()
  const [seconds, setSeconds] = useState()

  const countDownDate = new Date("Dec 18, 2019 10:35:00")
  const timer = setInterval(() => {
    const now = new Date().getTime()
    const distance = countDownDate.getTime() - now

    const days = Math.floor(distance / (1000 * 60 * 60 * 24))
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    )
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((distance % (1000 * 60)) / 1000)

    setDays(days)
    setHours(hours)
    setMins(minutes)
    setSeconds(seconds)

    if (distance < 0) {
      clearInterval(timer)
    }
  }, 1000)

  return (
    <Container>
      <CountdownBox>
        <h1>Sharon gets to Sydney in...</h1>
        <Clock>
          <span>
            {days}
            <label>Days</label>
          </span>
          <span>
            {hours}
            <label>Hours</label>
          </span>
          <span>
            {mins}
            <label>Mins</label>
          </span>
          <span>
            {seconds}
            <label>Seconds</label>
          </span>
        </Clock>
        <ArrivalDate>{countDownDate.toDateString()}</ArrivalDate>
      </CountdownBox>
    </Container>
  )
}

export const pageQuery = graphql`
  query {
    file(relativePath: { eq: "sharon.jpg" }) {
      ...fluidImage
    }
  }
`
