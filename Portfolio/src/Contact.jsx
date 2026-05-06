import React, { useState, useContext } from 'react'
import Navbar from './Navbar'
import axios from 'axios'
import DarkContext from './DarkContext'

const Contact = () => {

  const { dark, page } = useContext(DarkContext)

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  function handleSubmit(e) {

    e.preventDefault()

    axios.post('http://localhost:5000/api/send', {
      name,
      mail: email,
      number: message
    })

      .then(() => {

        setName("")
        setEmail("")
        setMessage("")

        alert("Submitted Successfully")

      })

      .catch((err) => {
        console.log(err)
      })
  }

  return (

    <div
      className={dark ? "contact-page light" : "contact-page dark"}
    >

      {!page ? null : <Navbar />}

      <div className="contact-container">

        <div className="contact-box">

          <h1 className="contact-title">
            Contact
          </h1>

          <p className="contact-text">
            Stay connected with us 🚀
          </p>

          <form
            onSubmit={handleSubmit}
            className="contact-form"
          >

            <input
              type="text"
              placeholder="Enter your name"
              className="contact-input"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="email"
              placeholder="Enter your email"
              className="contact-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <textarea
              placeholder="Write your message..."
              className="contact-textarea"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            <button className="contact-button">
              Send Message
            </button>

          </form>

        </div>

      </div>

    </div>
  )
}

export default Contact