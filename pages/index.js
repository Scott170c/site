import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Icon from '@hackclub/icons'
import Modal from '../components/Modal'
import { useEffect, useState } from 'react';

const regex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

export default function Home() {
  const [modal, setModal] = useState(false);
  const handleFormEnter = () => { 
    if (regex.test(email)) {
      fetch('https://ip.yodacode.xyz').then(res => res.json()).then(({ geo }) => {
        fetch(`/api/email/${encodeURIComponent(geo.city)}/${encodeURIComponent(email)}`).then(() => {
          setSubmitted(true);
        });
      })
    }
  };
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  return (
    <>
    <Modal visible={modal} setVisible={setModal}>
    <iframe src="https://bank.hackclub.com/donations/start/hackoc" style={{
      width: '100%',
      height: '100%',
      border: 'none',
      borderRadius: '8px',
      border: '2px solid var(--orange)'
    }}>

      </iframe>
    </Modal>
    <div className={styles.container} style={{
      position: 'relative',
      zIndex: '10',
      overflow: 'hidden'
    }}>
      <Head>
        <title>Hack OC</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className="background-charcoal color-white" style={{
          width: '100%',
          padding: '5rem 2rem',
        }}>
          <h1 className={styles.title}> 
            Hack <span className="color-orange" style={{
              marginLeft: '-12px',
              position: 'relative'
            }}>
              OC
              <img src="/orange.svg" style={{
                position: 'absolute',
                bottom: '50%',
                left: '0px',
                transform: 'translate(10%, 44.5%)'
              }} className="noselect" />
            </span>
          </h1>

        <p className={styles.description}>
          <span className="color-orange">
            <b>
              <Icon glyph="pin" size={32} style={{
                transform: 'translate(2px, 6px)'
              }} />
              Orange County
            </b>
          </span>'s First Post-Pandemic Hackathon
        </p>
        <center style={{
          position: 'relative',
          height: '55px'
        }}>
          <p>{submitted ? 'Thank you! Expect to hear from us soon. 👀' : 'Be the first to hear when registration opens!'}</p>
          {!submitted &&
        <center style={{
          display: 'block',
          marginTop: '2rem',
          display: 'flex',
          position: 'absolute',
          top: '0px',
          left: '50%',
          transform: 'translateX(-50%)'
        }}>
          <div style={{
            background: 'black',
            padding: '0px',
            borderRadius: '6px',
            maxWidth: '300px',
            height: '53px',
            textAlign: 'center',
            boxSizing: 'border-box',
            width: '300px'
          }}>
          <div className={styles.input} style={{
            background:  'rgba(var(--orange-3-values), 0.3)',
            cursor: 'text',
            textAlign: 'center',
            transform: 'translate(0px, 0px)',
            margin: '0px',
            fontSize: '18px',
            padding: '13px',
            position: 'relative',
            boxSizing: 'border-box',
            height: '52px'
          }}>
            <input placeholder="Email" type="email" style={{
              position: 'absolute',
              border: 'none',
              width: 'calc(100% - 50px)',
              background: 'transparent',
              height: '100%',
              top: '0px',
              left: '0px',
              outline: 'none',
              fontSize: '18px',
              padding: '13px',
              color: 'white',
              fontFamily: 'var(--font-stack)'
            }} value={email} onKeyUp={e => {
              if (e?.key == 'Enter') handleFormEnter();
            }} onChange={e => setEmail(e.target.value)} />
          <button className={styles.button} style={{
            width: '40px',
            height: '40px',
            fontSize: '20px',
            padding: '6px',
            border: '1px solid var(--orange)',
            marginLeft: '20px',
            position: 'absolute',
            borderRadius: '2px',
            top: '4px',
            right: '4px',
            fontWeight: 'bolder'
          }} onClick={handleFormEnter}>
            ✓
          </button>
          </div>
          </div>

          </center>
}
          </center>
        </div>

        <div className={styles.content} style={{
          position: 'relative'
        }}>
          <div style={{
            position: 'relative',
            zIndex: '20'
          }} className={styles.innerContent}>
          <h1>What's Hack OC?</h1>
          <p>Hack OC is the first in-person high school hackathon after the pandemic in Orange County, California. We're inviting you and all high schoolers to participate in <span>10 hours</span> of <span>coding</span>, <span>building</span>, <span>learning</span>, and <span>sharing</span>. Whether you're technical and experienced or haven't ever written a line of code, Hack OC will be a fun and welcoming event for everyone.</p>
          <br />
          <h1>What's a "hackathon"?</h1>
          <p>Hackathons are in-person coding events where teenagers come together to learn new skills, create fun projects, and make memories, typically for a day or two. There's also food, snacks, and drinks to fuel your creativity. Instead of hacking bank accounts like you hear in the news, you'll build something meaningful to you.</p>
          <br />
          <h1>Who can participate in Hack OC?</h1>
          <p>We're inviting all high school students to participate in Hack OC <span>completely free</span>. If you'd still like to support us, however, <a href="/donate">you can donate here</a>. Since this hackathon is geared toward just high school students, we aren't allowing any college students or older to participate.</p>
          <br />
          <h1>Will there be prizes? 👀</h1>
          <p>Yes! We're thrilled about them and can't wait to make an announcement soon. More about judging and prizes will be shared closer to the event. Why not <a href="#" style={{ textDecoration: 'underline', color: 'var(--orange)' }}>drop your email</a> so we can let you know? We promise it's worth your time!</p>
          </div>

      <img src="/orange.png" style={{
        position: 'absolute',
        bottom: '-20px',
        right: '-40px',
        width: '300px',
        zIndex: '15',
        filter: 'opacity(0.7)'
      }} />
        </div>

      </main>
      <div className={styles.sponsors} style={{
        overflowY: 'scroll'
      }}>
        <a href="https://register.hackoc.org" disabled={"true"} target="_blank" onClick={e => e.preventDefault()}>
          <button className={styles.altButton} style={{
            background:  'rgba(var(--orange-3-values), 0.3)',
            cursor: 'default',
            transform: 'translate(0px, 0px)'
          }}>Sign-Ups Open Soon!</button>
        </a>
        <button className={styles.altButton} onClick={() => {
          setModal(true);
        }}>Donate</button>
        <a href="https://bank.hackclub.com/hackoc" target="_blank">
          <button className={styles.altButton}>Finances</button>
        </a>
        <a href="https://github.com/hackoc" target="_blank">
          <button className={styles.altButton}>GitHub</button>
        </a>
        <h1>Sponsors</h1>
        <p>Hack OC wouldn't be possible without help from our sponsors. Want to help make Hack OC incredible? Email us at <a href="mailto:team@hackoc.org" style={{ color: 'var(--orange)', textDecoration: 'underline' }}>team@hackoc.org</a> to get involved!</p>
        <br />
        <h2>SPECIAL THANKS TO</h2>
        <img src="/bank-dark.svg" />
      </div>

      <footer className={styles.footer} style={{
        backgroundColor: 'white',
        position: 'relative',
        zIndex: '25'
      }}>
      <div style={{
        position: 'absolute',
        bottom: '0px',
        left: '0px',
        transform: 'translateY(99px)',
        height: '100px',
        width: '100vw',
        background: 'white',
        zIndex: '26'
      }}></div>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <img src="/vercel.svg" alt="Vercel Logo" width={"72"} height={"16"} />
          </span>
        </a>
      </footer>
    </div>
    </>
  )
}
