import { useEffect, useState } from 'react'
import TrackVisibility from 'react-on-screen'
import 'animate.css'
import { Container, Row, Col } from 'react-bootstrap'
import { ArrowRightCircle } from 'react-bootstrap-icons'
import headerImg from '../assets/img/header-img.svg'
import { isVisible } from '@testing-library/user-event/dist/utils'

const Banner = () =>  {

    const [loopNum, setLoopNum] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const toRotate = ['Web Developer', 'Web Designer', 'UI/UX Designer']
    const [text, setText] = useState('')
    const [delta, setDelta] = useState(300 - Math.random() * 300)
    const period = 2000

    useEffect(() => {
        let ticker = setInterval(() => {
            tick()
        }, delta)

        return () => {
            clearInterval(ticker)
        }
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length
        let fullText = toRotate[i]
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

        setText(updatedText)

        if(isDeleting){
            setDelta(prevDelta => prevDelta /2)
        }

        if(!isDeleting && updatedText  === fullText){
            setIsDeleting(true)
            setDelta(period)
        }else if(isDeleting && updatedText === ''){
            setIsDeleting(false)
            setLoopNum(loopNum + 1)
            setDelta(500)
        }
    }

  return (
    <section className='banner' id='home'>
        <Container>
            <Row className='align-items-center'>
                <Col xs={12} md={6} xl={7}>
                    <TrackVisibility>
                    {({ isVisible }) =>
                        <div className={isVisible ? 'animate__animated animate__fadeIn' : ''}>
                            <span className='tagline'>Welcome to my Portfolio</span>
                            <h1>{"Hi, I'm Joe"}<span className='wrap'><br/>{text}</span><span style={{fontWeight: 'lighter'}}>|</span></h1>
                            <p> It will be replaced with the URL of the `public` folder during the build. Only files inside the `public` folder can be referenced</p>
                            <button onClick={() => console.log('connect')}>Let's connect<ArrowRightCircle size={25}/></button>
                        </div>}
                    </TrackVisibility>
                </Col>
                <Col xs={12} md={6} xl={5}>
                    <img src={headerImg} alt='Header-img'/>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Banner