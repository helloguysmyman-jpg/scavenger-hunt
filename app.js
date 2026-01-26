// Supabase Configuration
const supabaseUrl = 'https://pbzdzsrgbxubceiinrbm.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBiemR6c3JnYnh1YmNlaWlucmJtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk0NTU5MjIsImV4cCI6MjA4NTAzMTkyMn0.s5IOb0VfOzArSxy_6DAn9QO6o8HWDXI9_6K8pHTkQc8';

const { createClient } = supabase;
const { useState, useEffect } = React;

const supabaseClient = createClient(supabaseUrl, supabaseKey);

// All 60 Clues
const CLUES = [
  { id: 1, clue: "Find the place that quietly hums while guarding tomorrow's leftovers.", answer: "Fridge/freezer" },
  { id: 2, clue: "Go where outdoor dirt stops and indoor chaos begins.", answer: "Mudroom" },
  { id: 3, clue: "Sit where the house faces a wall of moving pictures.", answer: "Living room couch" },
  { id: 4, clue: "Touch the slab of wood that once stood in a forest.", answer: "Tree-trunk kitchen island" },
  { id: 5, clue: "Go to the screen bigger than every other screen combined.", answer: "Basement gym TV" },
  { id: 6, clue: "Find the cupboard people open when they \"aren't hungry.\"", answer: "Pantry cupboard" },
  { id: 7, clue: "Stand on the patterned fabric that softens every movie night.", answer: "Persian rug" },
  { id: 8, clue: "Visit the bathroom strangers are most likely to see.", answer: "First floor bathroom" },
  { id: 9, clue: "Find the gap between heat and cold where mornings begin.", answer: "Coffee station between oven and fridge" },
  { id: 10, clue: "Stand in front of the wall that is mostly glass.", answer: "Back glass kitchen door" },
  { id: 11, clue: "Go where bags land the second someone says \"I'm home.\"", answer: "Mudroom" },
  { id: 12, clue: "Sit where shoes are tied and winter gear waits below.", answer: "Mudroom bench" },
  { id: 13, clue: "Find the only storage that looks like toothpaste green.", answer: "Mint green mudroom cupboards" },
  { id: 14, clue: "Search the wall for the hollow space that hides towels.", answer: "Kids bathroom towel cut-out" },
  { id: 15, clue: "Go to the stacked machines that spin louder than conversations.", answer: "Washer/dryer stack" },
  { id: 16, clue: "Walk to the hallway that slowly turns into a clothing mountain.", answer: "Laundry hallway" },
  { id: 17, clue: "Find the only thing in the kitchen that measures time.", answer: "Kitchen clock" },
  { id: 18, clue: "Sit between two chairs guarded by plants.", answer: "Kitchen chairs by plants" },
  { id: 19, clue: "Touch the fire that hasn't burned once.", answer: "White brick fireplace" },
  { id: 20, clue: "Look where candles and memories live side by side.", answer: "Living room shelves" },
  { id: 21, clue: "Find the bowl that slowly empties itself every week.", answer: "Fruit holder" },
  { id: 22, clue: "Go to the level that feels like winter even in summer.", answer: "Basement" },
  { id: 23, clue: "Find the warmest place to hide on a cold day.", answer: "Your bedroom" },
  { id: 24, clue: "Look for the extra sink that isn't meant for dishes.", answer: "Laundry sink" },
  { id: 25, clue: "Visit the bathroom that feels forgotten.", answer: "Basement bathroom" },
  { id: 26, clue: "Find the tall black frame holding gear for sweat and pain.", answer: "Black metal shelf" },
  { id: 27, clue: "Search behind something that slides to hide the internet.", answer: "Router behind sliding panel" },
  { id: 28, clue: "Stand exactly where the oven's heat meets the fridge's cold.", answer: "Coffee station" },
  { id: 29, clue: "Find where hands search for gloves in January.", answer: "Under-bench glove/hat cupboard" },
  { id: 30, clue: "Go to the place where neat shelves lose the fight to messy piles.", answer: "Mudroom floor" },
  { id: 31, clue: "Reach into the soft place that steals remotes.", answer: "Couch cushions" },
  { id: 32, clue: "Find the tallest storage that almost touches the ceiling downstairs.", answer: "Tall black metal shelf" },
  { id: 33, clue: "Look above eye level where snacks are hardest to reach.", answer: "Top pantry shelf" },
  { id: 34, clue: "Find the machine that cleans dishes without hands.", answer: "Dishwasher" },
  { id: 35, clue: "Step onto the only floor covering with intricate designs.", answer: "Persian rug" },
  { id: 36, clue: "Stand where you'd wave goodbye through glass.", answer: "Back glass door" },
  { id: 37, clue: "Look for the cupboard that fixes cuts and headaches.", answer: "Medicine cupboard" },
  { id: 38, clue: "Find the machine that blows hot air after the spin.", answer: "Dryer" },
  { id: 39, clue: "Walk into the most open space in the entire house.", answer: "Basement gym area" },
  { id: 40, clue: "Touch something alive and green near the back door chairs.", answer: "Palm/snake plants" },
  { id: 41, clue: "Open the space beneath the place you sit to put shoes on.", answer: "Under-bench cupboard" },
  { id: 42, clue: "Go to the only floor with zero bedrooms.", answer: "First floor" },
  { id: 43, clue: "Find the biggest cold box in the kitchen.", answer: "Giant fridge/freezer" },
  { id: 44, clue: "Stand where the walls feel like a tropical vacation.", answer: "Tropical wallpaper living room" },
  { id: 45, clue: "Go where dirty plates disappear and come back clean.", answer: "Dishwasher" },
  { id: 46, clue: "Find the baskets waiting patiently with folded clothes.", answer: "Laundry baskets" },
  { id: 47, clue: "Look beside the fake fire for low cabinets and shelves.", answer: "Living room shelves/cabinets" },
  { id: 48, clue: "Enter through the door most used on busy mornings.", answer: "Mudroom side door" },
  { id: 49, clue: "Go where movie snacks are secretly restocked.", answer: "Pantry" },
  { id: 50, clue: "Find the bathroom dressed in old gold patterns.", answer: "First floor gold wallpaper bathroom" },
  { id: 51, clue: "Slide something open to reveal blinking tech.", answer: "Router sliding panel" },
  { id: 52, clue: "Search beneath the wooden giant at the center of everything.", answer: "Under kitchen island" },
  { id: 53, clue: "Sit in the chair closest to the backyard exit.", answer: "Kitchen chair by back door" },
  { id: 54, clue: "Find the quietest corner of the cold downstairs space.", answer: "Basement corner" },
  { id: 55, clue: "Reach the highest shelf inside the tallest food cupboard.", answer: "Top pantry shelf" },
  { id: 56, clue: "Go where workouts happen without leaving the house.", answer: "Basement gym" },
  { id: 57, clue: "Find the first place dirty clothes are dropped without care.", answer: "Laundry hallway floor" },
  { id: 58, clue: "Stand against the big blank wall that holds the giant TV.", answer: "Basement TV wall" },
  { id: 59, clue: "Return to the wooden centerpiece where people gather and talk.", answer: "Kitchen island" },
  { id: 60, clue: "End where everyone collapses after a long day.", answer: "Living room couch" }
];

const generatePassword = () => {
  const words = ['HOUSE', 'HUNT', 'FIND', 'SEEK', 'QUEST', 'CLUE', 'HIDDEN', 'SECRET'];
  const word = words[Math.floor(Math.random() * words.length)];
  const num = Math.floor(Math.random() * 999) + 100;
  return `${word}${num}`;
};

function App() {
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [authMode, setAuthMode] = useState('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [activeHunt, setActiveHunt] = useState(null);
  const [myProgress, setMyProgress] = useState([]);
  const [passwordInput, setPasswordInput] = useState('');
  const [showPasswordPrompt, setShowPasswordPrompt] = useState(false);
  const [showAnswers, setShowAnswers] = useState(false);
  const [huntSize, setHuntSize] = useState(8);

  useEffect(() => {
    checkUser();
    const { data: authListener } = supabaseClient.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      if (session?.user) checkIfAdmin(session.user);
    });
    return () => authListener.subscription.unsubscribe();
  }, []);

  const checkUser = async () => {
    const { data: { session } } = await supabaseClient.auth.getSession();
    setUser(session?.user ?? null);
    if (session?.user) {
      await checkIfAdmin(session.user);
      await loadActiveHunt();
    }
    setLoading(false);
  };

  const checkIfAdmin = async (currentUser) => {
    if (!currentUser) return;
    const { data } = await supabaseClient.from('user_roles').select('role').eq('user_id', currentUser.id).single();
    setIsAdmin(data?.role === 'admin');
  };

  const loadActiveHunt = async () => {
    const { data: hunt } = await supabaseClient.from('hunts').select('*').eq('is_active', true).single();
    if (hunt) {
      setActiveHunt(hunt);
      await loadMyProgress(hunt.id);
    }
  };

  const loadMyProgress = async (huntId) => {
    const { data } = await supabaseClient.from('hunt_progress').select('*').eq('hunt_id', huntId).eq('user_id', user?.id).order('completed_at', { ascending: true });
    setMyProgress(data || []);
  };

  const handleSignUp = async () => {
    const { error } = await supabaseClient.auth.signUp({ email, password, options: { data: { display_name: displayName } } });
    if (error) alert(error.message);
    else alert('Check your email for confirmation!');
  };

  const handleLogin = async () => {
    const { error } = await supabaseClient.auth.signInWithPassword({ email, password });
    if (error) alert(error.message);
  };

  const handleLogout = async () => {
    await supabaseClient.auth.signOut();
    setActiveHunt(null);
    setMyProgress([]);
  };

  const createHunt = async (size) => {
    await supabaseClient.from('hunts').update({ is_active: false }).eq('is_active', true);
    const shuffled = [...CLUES].sort(() => Math.random() - 0.5);
    const selectedClues = shuffled.slice(0, size);
    const cluesWithPasswords = selectedClues.map((clue, index) => ({ ...clue, password: generatePassword(), order: index }));
    const { data: hunt, error } = await supabaseClient.from('hunts').insert({ clues: cluesWithPasswords, total_clues: size, is_active: true, created_by: user.id }).select().single();
    if (error) alert('Error: ' + error.message);
    else setActiveHunt(hunt);
  };

  const submitPassword = async () => {
    const currentClueIndex = myProgress.length;
    const currentClue = activeHunt.clues[currentClueIndex];
    if (passwordInput.toUpperCase() === currentClue.password.toUpperCase()) {
      const { error } = await supabaseClient.from('hunt_progress').insert({ hunt_id: activeHunt.id, user_id: user.id, clue_index: currentClueIndex, clue_id: currentClue.id });
      if (!error) {
        await loadMyProgress(activeHunt.id);
        setPasswordInput('');
        setShowPasswordPrompt(false);
      }
    } else {
      alert('Incorrect password!');
      setPasswordInput('');
    }
  };

  const endHunt = async () => {
    if (confirm('End hunt?')) {
      await supabaseClient.from('hunts').update({ is_active: false }).eq('id', activeHunt.id);
      setActiveHunt(null);
      setMyProgress([]);
    }
  };

  const printClueCards = () => {
    const w = window.open('', '_blank');
    w.document.write(`<!DOCTYPE html><html><head><title>Cards</title><style>@import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&family=Quicksand:wght@700&display=swap');body{font-family:'Quicksand',sans-serif;margin:0}.page{page-break-after:always;width:100vw;height:100vh;display:flex;justify-content:center;align-items:center;padding:40px;box-sizing:border-box}.card{border:6px solid #667eea;background:linear-gradient(135deg,#fff 0%,#f8f9ff 100%);padding:60px;width:100%;max-width:600px;min-height:400px;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;border-radius:30px;box-shadow:0 20px 60px rgba(0,0,0,0.2)}.header{font-family:'Permanent Marker';font-size:32px;margin-bottom:30px;color:#667eea;text-transform:uppercase;letter-spacing:3px}.number{font-size:24px;font-weight:bold;color:#764ba2;margin-bottom:20px;background:#f0f0ff;padding:10px 30px;border-radius:15px}.emoji{font-size:72px;margin:20px 0}.password-section{margin-top:40px;padding:30px;background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);border-radius:20px;width:100%}.password-label{color:white;font-size:18px;margin-bottom:15px;opacity:0.9}.password-code{font-size:48px;font-weight:bold;color:white;font-family:'Courier New';letter-spacing:8px;text-shadow:0 4px 10px rgba(0,0,0,0.3)}</style></head><body>${activeHunt.clues.map((c,i)=>`<div class="page"><div class="card"><div class="header">🏠 House Hunt</div><div class="emoji">🔍</div><div class="number">CLUE #${i+1}</div><div class="password-section"><div class="password-label">Your Password:</div><div class="password-code">${c.password}</div></div></div></div>`).join('')}</body></html>`);
    w.document.close();
    setTimeout(()=>w.print(),500);
  };

  const currentClueIndex = myProgress.length;
  const currentClue = activeHunt?.clues[currentClueIndex];
  const isHuntComplete = activeHunt && currentClueIndex >= activeHunt.total_clues;

  if (loading) return <div style={{minHeight:'100vh',background:'linear-gradient(135deg,#667eea 0%,#764ba2 100%)',display:'flex',justifyContent:'center',alignItems:'center',fontSize:'48px'}}>🔍</div>;

  if (!user) {
    return (
      <div style={{minHeight:'100vh',background:'linear-gradient(135deg,#667eea 0%,#764ba2 100%)',padding:'20px',display:'flex',justifyContent:'center',alignItems:'center'}}>
        <div style={{background:'white',borderRadius:'30px',padding:'50px',maxWidth:'450px',width:'100%',boxShadow:'0 25px 80px rgba(0,0,0,0.3)'}} className="fade-in">
          <div style={{textAlign:'center',marginBottom:'40px'}}>
            <div style={{fontSize:'80px',marginBottom:'20px'}} className="float">🏠</div>
            <h1 style={{fontSize:'48px',fontWeight:'bold',margin:'0 0 10px 0',background:'linear-gradient(135deg,#667eea 0%,#764ba2 100%)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',fontFamily:'Permanent Marker'}}>House Hunt</h1>
            <p style={{color:'#666',fontSize:'16px'}}>{authMode==='login'?'Welcome back!':'Create account'}</p>
          </div>
          <div>
            {authMode==='signup'&&<input type="text" placeholder="Display Name" value={displayName} onChange={e=>setDisplayName(e.target.value)} style={{width:'100%',padding:'18px',fontSize:'16px',border:'2px solid #e5e7eb',borderRadius:'15px',marginBottom:'15px',outline:'none',fontFamily:'inherit'}}/>}
            <input type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} style={{width:'100%',padding:'18px',fontSize:'16px',border:'2px solid #e5e7eb',borderRadius:'15px',marginBottom:'15px',outline:'none',fontFamily:'inherit'}}/>
            <input type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} onKeyPress={e=>e.key==='Enter'&&(authMode==='login'?handleLogin():handleSignUp())} style={{width:'100%',padding:'18px',fontSize:'16px',border:'2px solid #e5e7eb',borderRadius:'15px',marginBottom:'25px',outline:'none',fontFamily:'inherit'}}/>
            <button onClick={authMode==='login'?handleLogin:handleSignUp} style={{width:'100%',padding:'18px',background:'linear-gradient(135deg,#667eea 0%,#764ba2 100%)',color:'white',border:'none',borderRadius:'15px',fontSize:'18px',fontWeight:'bold',cursor:'pointer',marginBottom:'15px',fontFamily:'inherit',boxShadow:'0 8px 20px rgba(102,126,234,0.4)'}}>{authMode==='login'?'Log In':'Sign Up'}</button>
            <button onClick={()=>setAuthMode(authMode==='login'?'signup':'login')} style={{width:'100%',padding:'15px',background:'transparent',color:'#667eea',border:'2px solid #667eea',borderRadius:'15px',fontSize:'16px',fontWeight:'600',cursor:'pointer',fontFamily:'inherit'}}>{authMode==='login'?'Need account? Sign up':'Have account? Log in'}</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{minHeight:'100vh',background:'linear-gradient(135deg,#667eea 0%,#764ba2 100%)',padding:'20px'}}>
      {showPasswordPrompt&&(
        <div style={{position:'fixed',top:0,left:0,right:0,bottom:0,background:'rgba(0,0,0,0.85)',display:'flex',justifyContent:'center',alignItems:'center',zIndex:1000,padding:'20px'}}>
          <div style={{background:'white',borderRadius:'30px',padding:'50px',maxWidth:'450px',width:'100%',boxShadow:'0 30px 80px rgba(0,0,0,0.5)'}} className="fade-in">
            <div style={{fontSize:'72px',marginBottom:'25px',textAlign:'center'}} className="wiggle">🔐</div>
            <h2 style={{fontSize:'28px',fontWeight:'bold',marginBottom:'10px',textAlign:'center',color:'#333'}}>Enter Password</h2>
            <p style={{color:'#666',marginBottom:'35px',textAlign:'center',fontSize:'15px'}}>Check the paper you found</p>
            <input type="text" value={passwordInput} onChange={e=>setPasswordInput(e.target.value.toUpperCase())} onKeyPress={e=>e.key==='Enter'&&submitPassword()} placeholder="HOUSE123" autoFocus style={{width:'100%',padding:'20px',fontSize:'24px',border:'3px solid #667eea',borderRadius:'15px',marginBottom:'25px',outline:'none',fontFamily:'Courier New',fontWeight:'bold',textAlign:'center',letterSpacing:'3px',textTransform:'uppercase'}}/>
            <div style={{display:'flex',gap:'12px'}}>
              <button onClick={()=>{setShowPasswordPrompt(false);setPasswordInput('');}} style={{flex:1,padding:'18px',background:'#e5e7eb',color:'#333',border:'none',borderRadius:'15px',fontSize:'16px',fontWeight:'600',cursor:'pointer',fontFamily:'inherit'}}>Cancel</button>
              <button onClick={submitPassword} style={{flex:1,padding:'18px',background:'linear-gradient(135deg,#667eea 0%,#764ba2 100%)',color:'white',border:'none',borderRadius:'15px',fontSize:'16px',fontWeight:'600',cursor:'pointer',fontFamily:'inherit',boxShadow:'0 8px 20px rgba(102,126,234,0.4)'}}>Submit</button>
            </div>
          </div>
        </div>
      )}
      
      <div style={{maxWidth:'1000px',margin:'0 auto',marginBottom:'30px'}}>
        <div style={{background:'rgba(255,255,255,0.98)',borderRadius:'25px',padding:'30px',boxShadow:'0 15px 50px rgba(0,0,0,0.3)'}} className="fade-in">
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap',gap:'15px'}}>
            <h1 style={{fontSize:'48px',fontWeight:'bold',margin:0,background:'linear-gradient(135deg,#667eea 0%,#764ba2 100%)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',fontFamily:'Permanent Marker',letterSpacing:'2px'}}>🏠 House Hunt</h1>
            <div style={{display:'flex',gap:'10px',alignItems:'center'}}>
              {isAdmin&&<div style={{padding:'8px 16px',background:'linear-gradient(135deg,#f59e0b 0%,#d97706 100%)',color:'white',borderRadius:'10px',fontSize:'14px',fontWeight:'600'}}>⭐ Admin</div>}
              <button onClick={handleLogout} style={{padding:'12px 20px',background:'#ef4444',color:'white',border:'none',borderRadius:'12px',fontSize:'14px',fontWeight:'600',cursor:'pointer'}}>Logout</button>
            </div>
          </div>
        </div>
      </div>

      <div style={{maxWidth:'1000px',margin:'0 auto'}}>
        {isAdmin&&!activeHunt?(
          <div style={{background:'rgba(255,255,255,0.98)',borderRadius:'25px',padding:'50px',boxShadow:'0 15px 50px rgba(0,0,0,0.3)',textAlign:'center'}} className="fade-in">
            <div style={{fontSize:'100px',marginBottom:'30px'}} className="bounce">🎯</div>
            <h2 style={{fontSize:'36px',fontWeight:'bold',marginBottom:'15px',color:'#333'}}>Create Hunt</h2>
            <p style={{fontSize:'18px',color:'#666',marginBottom:'40px'}}>Set up a scavenger hunt!</p>
            <div style={{background:'linear-gradient(135deg,#f8f9fa 0%,#e9ecef 100%)',borderRadius:'20px',padding:'40px',marginBottom:'40px',border:'3px solid #667eea'}}>
              <label style={{display:'block',fontSize:'18px',fontWeight:'600',color:'#333',marginBottom:'20px'}}>Clues (max 15)</label>
              <input type="range" min="3" max="15" value={huntSize} onChange={e=>setHuntSize(parseInt(e.target.value))} style={{width:'100%',height:'10px',marginBottom:'20px'}}/>
              <div style={{fontSize:'56px',fontWeight:'bold',background:'linear-gradient(135deg,#667eea 0%,#764ba2 100%)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent'}}>{huntSize} clues</div>
            </div>
            <button onClick={()=>createHunt(huntSize)} style={{padding:'24px 60px',background:'linear-gradient(135deg,#10b981 0%,#059669 100%)',color:'white',border:'none',borderRadius:'18px',fontSize:'22px',fontWeight:'bold',cursor:'pointer',boxShadow:'0 10px 30px rgba(16,185,129,0.4)'}} className="pulse">🎲 Generate Hunt!</button>
          </div>
        ):isAdmin&&activeHunt?(
          <div style={{background:'rgba(255,255,255,0.98)',borderRadius:'25px',padding:'40px',boxShadow:'0 15px 50px rgba(0,0,0,0.3)'}} className="fade-in">
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:'30px',flexWrap:'wrap',gap:'15px'}}>
              <h2 style={{fontSize:'32px',fontWeight:'bold',margin:0,color:'#333'}}>🎮 Active Hunt</h2>
              <div style={{display:'flex',gap:'10px',flexWrap:'wrap'}}>
                <button onClick={()=>setShowAnswers(!showAnswers)} style={{padding:'12px 20px',background:showAnswers?'#f59e0b':'#667eea',color:'white',border:'none',borderRadius:'12px',fontSize:'14px',fontWeight:'600',cursor:'pointer'}}>{showAnswers?'Hide':'Show'} Answers</button>
                <button onClick={printClueCards} style={{padding:'12px 20px',background:'linear-gradient(135deg,#10b981 0%,#059669 100%)',color:'white',border:'none',borderRadius:'12px',fontSize:'14px',fontWeight:'600',cursor:'pointer'}}>🖨️ Print</button>
                <button onClick={endHunt} style={{padding:'12px 20px',background:'#ef4444',color:'white',border:'none',borderRadius:'12px',fontSize:'14px',fontWeight:'600',cursor:'pointer'}}>End</button>
              </div>
            </div>
            <div style={{background:'linear-gradient(135deg,#f8f9fa 0%,#e9ecef 100%)',borderRadius:'20px',padding:'30px',border:'3px solid #667eea'}}>
              <h3 style={{fontSize:'22px',fontWeight:'bold',marginBottom:'25px',color:'#333'}}>🔑 Passwords</h3>
              <div style={{display:'grid',gap:'15px'}}>
                {activeHunt.clues.map((clue,i)=>(
                  <div key={i} style={{background:'white',borderRadius:'15px',padding:'20px',boxShadow:'0 4px 15px rgba(0,0,0,0.08)',border:'2px solid #e5e7eb'}}>
                    <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',gap:'20px',flexWrap:'wrap'}}>
                      <div style={{flex:1,minWidth:'200px'}}>
                        <div style={{display:'flex',alignItems:'center',gap:'10px',marginBottom:'10px'}}>
                          <div style={{width:'32px',height:'32px',background:'linear-gradient(135deg,#667eea 0%,#764ba2 100%)',borderRadius:'8px',display:'flex',alignItems:'center',justifyContent:'center',color:'white',fontWeight:'bold',fontSize:'14px'}}>{i+1}</div>
                          <div style={{fontSize:'16px',fontWeight:'600',color:'#333'}}>{CLUES.find(c=>c.id===clue.id)?.clue}</div>
                        </div>
                        {showAnswers&&<div style={{fontSize:'14px',color:'#10b981',fontWeight:'600',marginLeft:'42px'}}>📍 {CLUES.find(c=>c.id===clue.id)?.answer}</div>}
                      </div>
                      <div style={{background:'linear-gradient(135deg,#667eea 0%,#764ba2 100%)',padding:'12px 24px',borderRadius:'12px',fontFamily:'Courier New',fontSize:'20px',fontWeight:'bold',color:'white',letterSpacing:'2px',boxShadow:'0 4px 15px rgba(102,126,234,0.3)'}}>{clue.password}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ):!activeHunt?(
          <div style={{background:'rgba(255,255,255,0.98)',borderRadius:'25px',padding:'60px 40px',boxShadow:'0 15px 50px rgba(0,0,0,0.3)',textAlign:'center'}} className="fade-in">
            <div style={{fontSize:'100px',marginBottom:'30px'}} className="bounce">⏳</div>
            <h2 style={{fontSize:'32px',fontWeight:'bold',marginBottom:'15px',color:'#333'}}>No Active Hunt</h2>
            <p style={{fontSize:'18px',color:'#666'}}>Wait for admin to start!</p>
          </div>
        ):isHuntComplete?(
          <div style={{background:'rgba(255,255,255,0.98)',borderRadius:'25px',padding:'60px 40px',boxShadow:'0 15px 50px rgba(0,0,0,0.3)',textAlign:'center'}} className="fade-in">
            <div style={{fontSize:'120px',marginBottom:'30px'}} className="pulse">🏆</div>
            <h2 style={{fontSize:'42px',fontWeight:'bold',marginBottom:'15px',background:'linear-gradient(135deg,#10b981 0%,#059669 100%)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent'}}>Hunt Complete!</h2>
            <p style={{fontSize:'22px',color:'#666',marginBottom:'30px'}}>You found all {activeHunt.total_clues} clues! 🎊</p>
            <div style={{display:'flex',justifyContent:'center',flexWrap:'wrap',gap:'10px',marginTop:'30px'}}>
              {[...Array(activeHunt.total_clues)].map((_,i)=><div key={i} style={{fontSize:'48px'}}>🧩</div>)}
            </div>
          </div>
        ):(
          <div style={{background:'rgba(255,255,255,0.98)',borderRadius:'25px',padding:'40px',boxShadow:'0 15px 50px rgba(0,0,0,0.3)'}} className="fade-in">
            <div style={{background:'linear-gradient(135deg,#f8f9fa 0%,#e9ecef 100%)',borderRadius:'20px',padding:'25px',marginBottom:'30px',border:'3px solid #667eea'}}>
              <div style={{fontSize:'16px',fontWeight:'600',color:'#667eea',marginBottom:'15px',textAlign:'center'}}>Puzzle Pieces</div>
              <div style={{display:'flex',justifyContent:'center',flexWrap:'wrap',gap:'8px'}}>
                {[...Array(activeHunt.total_clues)].map((_,i)=><div key={i} style={{fontSize:'40px',opacity:i<myProgress.length?1:0.2,filter:i<myProgress.length?'none':'grayscale(1)',transition:'all 0.3s'}}>🧩</div>)}
              </div>
            </div>
            <div style={{background:'#e5e7eb',borderRadius:'15px',height:'16px',marginBottom:'25px',overflow:'hidden'}}>
              <div style={{background:'linear-gradient(90deg,#10b981 0%,#059669 100%)',height:'100%',width:`${(myProgress.length/activeHunt.total_clues)*100}%`,transition:'width 0.8s'}}/>
            </div>
            <div style={{textAlign:'center',fontSize:'20px',fontWeight:'600',background:'linear-gradient(135deg,#667eea 0%,#764ba2 100%)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',marginBottom:'35px'}}>Clue {myProgress.length+1} of {activeHunt.total_clues}</div>
            <div style={{background:'linear-gradient(135deg,#667eea 10%,#764ba2 100%)',borderRadius:'25px',padding:'50px 40px',marginBottom:'35px',boxShadow:'0 20px 50px rgba(102,126,234,0.5)',minHeight:'280px',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}} className="fade-in">
              <div style={{fontSize:'60px',marginBottom:'30px'}} className="float">🔍</div>
              <div style={{fontSize:'26px',lineHeight:'1.8',color:'white',textAlign:'center',fontWeight:'500',textShadow:'0 4px 20px rgba(0,0,0,0.2)'}}>{CLUES.find(c=>c.id===currentClue.id)?.clue}</div>
            </div>
            <div style={{textAlign:'center'}}>
              <button onClick={()=>setShowPasswordPrompt(true)} style={{padding:'22px 55px',background:'linear-gradient(135deg,#10b981 0%,#059669 100%)',color:'white',border:'none',borderRadius:'18px',fontSize:'22px',fontWeight:'bold',cursor:'pointer',boxShadow:'0 10px 30px rgba(16,185,129,0.5)'}} className="pulse">🔑 Enter Password</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
