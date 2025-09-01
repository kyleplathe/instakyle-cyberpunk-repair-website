export default function Home() {
  return (
    <div dangerouslySetInnerHTML={{
      __html: `
        <div style="min-height: 100vh; background: #000; color: #fff; padding: 20px; font-family: Arial, sans-serif;">
          <div style="color: #00f3ff; font-size: 48px; font-weight: bold; margin-bottom: 20px;">
            INSTAKYLE
          </div>
          
          <div style="color: #ff00ff; font-size: 36px; font-weight: bold; margin-bottom: 20px;">
            FIGHT eWASTE
          </div>
          
          <div style="font-size: 18px; margin-bottom: 20px; max-width: 600px;">
            Empowering communities through ethical technology repair, education, and sustainable practices.
            Join the resistance against planned obsolescence.
          </div>
          
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin: 30px 0;">
            <div style="background: #111; padding: 20px; border-radius: 8px; border: 2px solid #00f3ff;">
              <h3 style="color: #00f3ff; font-size: 24px; margin-bottom: 10px;">Ethical Capitalism</h3>
              <p style="color: #ccc;">Small batch inventory, debt-free growth, and a Bitcoin strategic reserve.</p>
            </div>
            
            <div style="background: #111; padding: 20px; border-radius: 8px; border: 2px solid #00ff41;">
              <h3 style="color: #00ff41; font-size: 24px; margin-bottom: 10px;">Reduce eWaste</h3>
              <p style="color: #ccc;">Conserving precious earth minerals through expert repair.</p>
            </div>
            
            <div style="background: #111; padding: 20px; border-radius: 8px; border: 2px solid #ff00ff;">
              <h3 style="color: #ff00ff; font-size: 24px; margin-bottom: 10px;">Empower Communities</h3>
              <p style="color: #ccc;">Technology education and access for all.</p>
            </div>
          </div>
          
          <div style="text-align: center; margin: 30px 0;">
            <button style="background: #00ff41; color: #000; padding: 15px 30px; border: none; border-radius: 8px; font-size: 18px; font-weight: bold; cursor: pointer;">
              Start Your Repair
            </button>
          </div>
          
          <div style="text-align: center; color: #888; margin-top: 40px;">
            <p>Fighting e-waste, one repair at a time</p>
          </div>
        </div>
      `
    }} />
  );
}
