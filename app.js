// Supabase Configuration
const supabaseUrl = 'https://pbzdzsrgbxubceiinrbm.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBiemR6c3JnYnh1YmNlaWlucmJtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk0NTU5MjIsImV4cCI6MjA4NTAzMTkyMn0.s5IOb0VfOzArSxy_6DAn9QO6o8HWDXI9_6K8pHTkQc8';

const { createClient } = supabase;
const { useState, useEffect } = React;

const supabaseClient = createClient(supabaseUrl, supabaseKey);

// All 60 Clues
const CLUES = [
  { id: 1, clue: "Find where all the cold drinks and food are kept.", answer: "Fridge/freezer" },
  { id: 2, clue: "Go to the place where shoes are supposed to be neatly stored.", answer: "Mudroom shoe shelves" },
  { id: 3, clue: "Sit where everyone watches TV together.", answer: "Living room couch" },
  { id: 4, clue: "Find the big wooden surface that looks like it used to be a tree.", answer: "Tree-trunk kitchen island" },
  { id: 5, clue: "Go to the room with the largest TV in the whole house.", answer: "Basement gym TV" },
  { id: 6, clue: "Find where snacks are hidden away.", answer: "Pantry cupboard" },
  { id: 7, clue: "Touch the soft rug in the TV room.", answer: "Persian rug" },
  { id: 8, clue: "Go to the bathroom guests usually use.", answer: "First floor bathroom" },
  { id: 9, clue: "Find the spot where coffee is made every morning.", answer: "Coffee station between oven and fridge" },
  { id: 10, clue: "Look for the giant glass door that leads outside.", answer: "Back glass kitchen door" },
  { id: 11, clue: "Go where backpacks get dropped after school.", answer: "Mudroom" },
  { id: 12, clue: "Find the bench where you sit to put shoes on.", answer: "Mudroom bench" },
  { id: 13, clue: "Look for the tall cupboards that are mint green.", answer: "Mint green mudroom cupboards" },
  { id: 14, clue: "Find the place where clean towels are stored.", answer: "Kids bathroom towel cut-out" },
  { id: 15, clue: "Go to the machines that wash and dry clothes.", answer: "Washer and dryer" },
  { id: 16, clue: "Find the hallway where laundry piles up.", answer: "Laundry hallway" },
  { id: 17, clue: "Look for the clock that isn't on your phone.", answer: "Kitchen clock" },
  { id: 18, clue: "Go to the comfy chairs beside the plants near the back door.", answer: "Kitchen chairs by plants" },
  { id: 19, clue: "Find the white brick fireplace that doesn't work.", answer: "White brick fireplace" },
  { id: 20, clue: "Look where family photos and candles sit on shelves.", answer: "Living room shelves" },
  { id: 21, clue: "Find the fruit waiting in the kitchen corner.", answer: "Fruit holder" },
  { id: 22, clue: "Go to the coldest part of the house in winter.", answer: "Basement" },
  { id: 23, clue: "Find the warmest bedroom in the house.", answer: "Your bedroom" },
  { id: 24, clue: "Look for the sink near the laundry machines.", answer: "Laundry sink" },
  { id: 25, clue: "Go to the bathroom that almost nobody ever uses.", answer: "Basement bathroom" },
  { id: 26, clue: "Find the black metal shelf that holds sports gear.", answer: "Black metal shelf" },
  { id: 27, clue: "Look for the hidden spot where the Wi-Fi router lives.", answer: "Router behind sliding panel" },
  { id: 28, clue: "Search between the oven and the fridge.", answer: "Coffee station area" },
  { id: 29, clue: "Find where gloves and hats are kept.", answer: "Cupboard under mudroom bench" },
  { id: 30, clue: "Look for the messy place where shoes sometimes turn into a pile.", answer: "Mudroom floor" },
  { id: 31, clue: "Go to the couch and check where remotes usually disappear.", answer: "Couch cushions" },
  { id: 32, clue: "Find the tallest storage shelf in the house.", answer: "Tall black metal shelf" },
  { id: 33, clue: "Go to the pantry and look up high.", answer: "Top of pantry cupboard" },
  { id: 34, clue: "Find the dishwasher.", answer: "Dishwasher" },
  { id: 35, clue: "Look for the Persian rug pattern.", answer: "Persian rug" },
  { id: 36, clue: "Go to the back door and stand right in front of it.", answer: "Back glass door" },
  { id: 37, clue: "Find the cupboard next to the pantry that holds medicine.", answer: "Medicine cupboard next to pantry" },
  { id: 38, clue: "Look for the stacked machines that spin clothes fast.", answer: "Washer/dryer stack" },
  { id: 39, clue: "Go to the open basement gym space.", answer: "Basement gym area" },
  { id: 40, clue: "Find something green and leafy near the kitchen chairs.", answer: "Palm/snake plants" },
  { id: 41, clue: "Look under the bench in the mudroom.", answer: "Under-bench cupboard" },
  { id: 42, clue: "Go to the first floor (the level with no bedrooms).", answer: "First floor" },
  { id: 43, clue: "Find the biggest appliance in the kitchen.", answer: "Giant fridge/freezer" },
  { id: 44, clue: "Look for the tropical wallpaper near the TV.", answer: "Living room wallpaper" },
  { id: 45, clue: "Go to the place where dishes get cleaned automatically.", answer: "Dishwasher" },
  { id: 46, clue: "Find where clean laundry waits in baskets.", answer: "Laundry baskets" },
  { id: 47, clue: "Go to the shelves beside the fireplace.", answer: "Living room shelves" },
  { id: 48, clue: "Look for the side door entrance to the house.", answer: "Mudroom side door" },
  { id: 49, clue: "Find the place where snacks would be grabbed during a movie.", answer: "Pantry" },
  { id: 50, clue: "Go to the bathroom with the old gold wallpaper.", answer: "First floor bathroom" },
  { id: 51, clue: "Look behind the sliding panel in the basement.", answer: "Router panel" },
  { id: 52, clue: "Find the spot directly under the kitchen island.", answer: "Under kitchen island" },
  { id: 53, clue: "Go to the chairs that face the kitchen.", answer: "Kitchen chairs" },
  { id: 54, clue: "Find the darkest corner of the basement.", answer: "Basement corner" },
  { id: 55, clue: "Look for the place closest to the ceiling inside the pantry.", answer: "Top pantry shelf" },
  { id: 56, clue: "Go where sports equipment is stored.", answer: "Basement sports shelf" },
  { id: 57, clue: "Find the place where dirty clothes land first.", answer: "Laundry hallway floor" },
  { id: 58, clue: "Look for the white walls surrounding the biggest open space downstairs.", answer: "Basement gym space" },
  { id: 59, clue: "Return to the heart of the house where everyone gathers to cook.", answer: "Kitchen island" },
  { id: 60, clue: "End where the hunt began: the main couch in the TV room.", answer: "Living room couch" }
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
