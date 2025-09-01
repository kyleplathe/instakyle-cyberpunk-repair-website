export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      background: '#000',
      color: '#fff',
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{
        color: '#00f3ff',
        fontSize: '48px',
        fontWeight: 'bold',
        marginBottom: '20px'
      }}>
        INSTAKYLE
      </div>
      
      <div style={{
        color: '#ff00ff',
        fontSize: '36px',
        fontWeight: 'bold',
        marginBottom: '20px'
      }}>
        FIGHT eWASTE
      </div>
      
      <div style={{
        fontSize: '18px',
        marginBottom: '20px',
        maxWidth: '600px'
      }}>
        Empowering communities through ethical technology repair, education, and sustainable practices.
        Join the resistance against planned obsolescence.
      </div>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '20px',
        margin: '30px 0'
      }}>
        <div style={{
          background: '#111',
          padding: '20px',
          borderRadius: '8px',
          border: '2px solid #00f3ff'
        }}>
          <h3 style={{
            color: '#00f3ff',
            fontSize: '24px',
            marginBottom: '10px'
          }}>Ethical Capitalism</h3>
          <p style={{color: '#ccc'}}>
            Small batch inventory, debt-free growth, and a Bitcoin strategic reserve.
          </p>
        </div>
        
        <div style={{
          background: '#111',
          padding: '20px',
          borderRadius: '8px',
          border: '2px solid #00ff41'
        }}>
          <h3 style={{
            color: '#00ff41',
            fontSize: '24px',
            marginBottom: '10px'
          }}>Reduce eWaste</h3>
          <p style={{color: '#ccc'}}>
            Conserving precious earth minerals through expert repair.
          </p>
        </div>
        
        <div style={{
          background: '#111',
          padding: '20px',
          borderRadius: '8px',
          border: '2px solid #ff00ff'
        }}>
          <h3 style={{
            color: '#ff00ff',
            fontSize: '24px',
            marginBottom: '10px'
          }}>Empower Communities</h3>
          <p style={{color: '#ccc'}}>
            Technology education and access for all.
          </p>
        </div>
      </div>
      
      <div style={{
        textAlign: 'center',
        margin: '30px 0'
      }}>
        <button style={{
          background: '#00ff41',
          color: '#000',
          padding: '15px 30px',
          border: 'none',
          borderRadius: '8px',
          fontSize: '18px',
          fontWeight: 'bold',
          cursor: 'pointer'
        }}>
          Start Your Repair
        </button>
      </div>
      
      <div style={{
        textAlign: 'center',
        color: '#888',
        marginTop: '40px'
      }}>
        <p>Fighting e-waste, one repair at a time</p>
      </div>
    </div>
  );
}
