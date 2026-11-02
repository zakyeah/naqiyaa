
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
  const [visibleCount, setVisibleCount] = useState(1)
  const navigate = useNavigate()

  const sentences = [
    "Hi SAYANG",
    "Aku punya sesuatu buat kamu :)"
  ]

  const handleClick = () => {
    if (visibleCount < sentences.length) {
      setVisibleCount(visibleCount + 1)
    } else {
      navigate('/pictures')
    }
  }

  return (
    <div
      onClick={handleClick}
      style={{
        minHeight: '100vh',
        minHeight: '100svh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        cursor: 'pointer',
        position: 'relative',
        zIndex: 10,
        color: '#2563EB',
        fontSize: 'clamp(20px, 5vw, 35px)',
        fontWeight: 'bold',
        textAlign: 'center',
        padding: '20px',
        gap: '10px'
      }}
    >
      {sentences.slice(0, visibleCount).map((sentence, index) => (
        <p key={index}>{sentence}</p>
      ))}
    </div>
  )
}

export default Home
