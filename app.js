// Supabase Configuration
const supabaseUrl = 'https://pbzdzsrgbxubceiinrbm.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBiemR6c3JnYnh1YmNlaWlucmJtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk0NTU5MjIsImV4cCI6MjA4NTAzMTkyMn0.s5IOb0VfOzArSxy_6DAn9QO6o8HWDXI9_6K8pHTkQc8';
const ADMIN_PASSWORD = 'admin123';

const { createClient } = supabase;
const { useState, useEffect } = React;
const supabaseClient = createClient(supabaseUrl, supabaseKey);

const PETS = ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼', '🐨', '🐯', '🦁', '🐮', '🐷', '🐸', '🐵', '🐔', '🐧', '🐦', '🦆', '🦅', '🦉', '🦇', '🐺', '🐗', '🐴', '🦄', '🐝', '🐛', '🦋', '🐌'];

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
  return `${words[Math.floor(Math.random() * words.length)]}${Math.floor(Math.random() * 999) + 100}`;
};

function App() {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [authMode, setAuthMode] = useState('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [selectedPet, setSelectedPet] = useState(PETS[0]);
  const [activeHunt, setActiveHunt] = useState(null);
  const [myProgress, setMyProgress] = useState([]);
  const [allProgress, setAllProgress] = useState([]);
  const [passwordInput, setPasswordInput] = useState('');
  const [showPasswordPrompt, setShowPasswordPrompt] = useState(false);
  const [showAdminPrompt, setShowAdminPrompt] = useState(false);
  const [adminPasswordInput, setAdminPasswordInput] = useState('');
  const [showAnswers, setShowAnswers] = useState(false);
  const [huntSize, setHuntSize] = useState(8);
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    checkUser();
    const { data: authListener } = supabaseClient.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });
    return () => authListener.subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (user && profile?.name_chosen && !isAdmin) {
      const interval = setInterval(() => {
        loadActiveHunt();
        loadPlayers();
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [user, profile, isAdmin]);

  useEffect(() => {
    if (isAdmin && activeHunt && activeHunt.hunt_started) {
      const interval = setInterval(() => {
        loadAllProgress();
        loadPlayers();
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [isAdmin, activeHunt]);

  useEffect(() => {
    if (user && activeHunt && activeHunt.hunt_started) {
      const interval = setInterval(() => loadMyProgress(activeHunt.id), 2000);
      return () => clearInterval(interval);
    }
  }, [user, activeHunt]);

  const checkUser = async () => {
    const { data: { session } } = await supabaseClient.auth.getSession();
    setUser(session?.user ?? null);
    if (session?.user) {
      await loadProfile(session.user.id);
      await loadActiveHunt();
      await loadPlayers();
    }
    setLoading(false);
  };

  const loadProfile = async (userId) => {
    const { data } = await supabaseClient.from('profiles').select('*').eq('id', userId).single();
    setProfile(data);
  };

  const loadActiveHunt = async () => {
    const { data: hunt } = await supabaseClient.from('hunts').select('*').eq('is_active', true).single();
    if (hunt) {
      setActiveHunt(hunt);
      if (hunt.hunt_started) {
        await loadMyProgress(hunt.id);
        if (isAdmin) await loadAllProgress();
      }
    } else {
      setActiveHunt(null);
    }
  };

  const loadPlayers = async () => {
    const { data } = await supabaseClient.from('profiles').select('id, display_name, pet, name_chosen').eq('name_chosen', true);
    setPlayers(data || []);
  };

  const loadMyProgress = async (huntId) => {
    if (!user) return;
    const { data } = await supabaseClient.from('hunt_progress').select('*').eq('hunt_id', huntId).eq('user_id', user.id).order('completed_at', { ascending: true });
    setMyProgress(data || []);
  };

  const loadAllProgress = async () => {
    if (!activeHunt) return;
    const { data } = await supabaseClient.from('hunt_progress').select('*').eq('hunt_id', activeHunt.id).order('completed_at', { ascending: true });
    setAllProgress(data || []);
  };

  const saveProfile = async () => {
    if (!displayName.trim()) {
      alert('Please enter a name!');
      return;
    }
    const { error } = await supabaseClient.from('profiles').update({ 
      display_name: displayName,
      pet: selectedPet,
      name_chosen: true 
    }).eq('id', user.id);
    if (!error) {
      await loadProfile(user.id);
      await loadPlayers();
    }
  };

  const handleSignUp = async () => {
    const { error } = await supabaseClient.auth.signUp({ email, password });
    if (error) alert(error.message);
    else alert('Account created! You can now log in.');
  };

  const handleLogin = async () => {
    const { error } = await supabaseClient.auth.signInWithPassword({ email, password });
    if (error) alert(error.message);
  };

  const handleLogout = async () => {
    await supabaseClient.auth.signOut();
    setActiveHunt(null);
    setMyProgress([]);
    setIsAdmin(false);
  };

  const handleAdminLogin = () => {
    if (adminPasswordInput === ADMIN_PASSWORD) {
      setIsAdmin(true);
      setShowAdminPrompt(false);
      setAdminPasswordInput('');
    } else {
      alert('Wrong admin password!');
      setAdminPasswordInput('');
    }
  };

  const createHunt = async (size) => {
    if (!isAdmin) return;
    await supabaseClient.from('hunts').update({ is_active: false }).eq('is_active', true);
    const shuffled = [...CLUES].sort(() => Math.random() - 0.5);
    const selectedClues = shuffled.slice(0, size);
    const cluesWithPasswords = selectedClues.map((clue, index) => ({ ...clue, password: generatePassword(), order: index }));
    const { data: hunt, error } = await supabaseClient.from('hunts').insert({ 
      clues: cluesWithPasswords, 
      total_clues: size, 
      is_active: true, 
      hunt_started: false,
      created_by: user.id 
    }).select().single();
    if (error) alert('Error: ' + error.message);
    else {
      setActiveHunt(hunt);
      await loadPlayers();
    }
  };

  const startHunt = async () => {
    if (!isAdmin || !activeHunt) return;
    const { error } = await supabaseClient.from('hunts').update({ hunt_started: true }).eq('id', activeHunt.id);
    if (!error) {
      setActiveHunt({ ...activeHunt, hunt_started: true });
    }
  };

  const submitPassword = async () => {
    const currentClueIndex = myProgress.length;
    const currentClue = activeHunt.clues[currentClueIndex];
    if (passwordInput.toUpperCase() === currentClue.password.toUpperCase()) {
      const { error } = await supabaseClient.from('hunt_progress').insert({ 
        hunt_id: activeHunt.id, 
        user_id: user.id, 
        clue_index: currentClueIndex, 
        clue_id: currentClue.id
      });
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
    if (!isAdmin) return;
    if (confirm('End hunt for everyone?')) {
      await supabaseClient.from('hunts').update({ is_active: false }).eq('id', activeHunt.id);
      setActiveHunt(null);
      setMyProgress([]);
      setAllProgress([]);
    }
  };

  const printClueCards = () => {
    if (!isAdmin || !activeHunt) return;
    const w = window.open('', '_blank');
    w.document.write(`<!DOCTYPE html><html><head><title>Cards</title><style>@import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&family=Quicksand:wght@700&display=swap');body{font-family:'Quicksand',sans-serif;margin:0}.page{page-break-after:always;width:100vw;height:100vh;display:flex;justify-content:center;align-items:center;padding:40px;box-sizing:border-box}.card{border:6px solid #667eea;background:linear-gradient(135deg,#fff 0%,#f8f9ff 100%);padding:60px;width:100%;max-width:600px;min-height:400px;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;border-radius:30px;box-shadow:0 20px 60px rgba(0,0,0,0.2)}.header{font-family:'Permanent Marker';font-size:32px;margin-bottom:30px;color:#667eea;text-transform:uppercase;letter-spacing:3px}.number{font-size:24px;font-weight:bold;color:#764ba2;margin-bottom:20px;background:#f0f0ff;padding:10px 30px;border-radius:15px}.emoji{font-size:72px;margin:20px 0}.password-section{margin-top:40px;padding:30px;background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);border-radius:20px;width:100%}.password-label{color:white;font-size:18px;margin-bottom:15px;opacity:0.9}.password-code{font-size:48px;font-weight:bold;color:white;font-family:'Courier New';letter-spacing:8px;text-shadow:0 4px 10px rgba(0,0,0,0.3)}</style></head><body>${activeHunt.clues.map((c,i)=>`<div class="page"><div class="card"><div class="header">🏠 House Hunt</div><div class="emoji">🔍</div><div class="number">CLUE #${i+1}</div><div class="password-section"><div class="password-label">Your Password:</div><div class="password-code">${c.password}</div></div></div></div>`).join('')}</body></html>`);
    w.document.close();
    setTimeout(()=>w.print(),500);
  };

  const currentClueIndex = myProgress.length;
  const currentClue = activeHunt?.clues[currentClueIndex];
  const isHuntComplete = activeHunt && currentClueIndex >= activeHunt.total_clues;

  const getPlayerStats = () => {
    return players.map(p => {
      const progress = allProgress.filter(pr => pr.user_id === p.id);
      return {
        ...p,
        cluesFound: progress.length,
        isComplete: progress.length >= (activeHunt?.total_clues || 0)
      };
    }).sort((a,b) => b.cluesFound - a.cluesFound);
  };

  if (loading) return <div style={{minHeight:'100vh',background:'linear-gradient(135deg,#667eea 0%,#764ba2 100%)',display:'flex',justifyContent:'center',alignItems:'center',fontSize:'48px'}}>🔍</div>;

  // LOGIN SCREEN
  if (!user) {
    return (
      <div style={{minHeight:'100vh',background:'linear-gradient(135deg,#667eea 0%,#764ba2 100%)',padding:'20px',display:'flex',justifyContent:'center',alignItems:'center'}}>
        <div style={{background:'white',borderRadius:'30px',padding:'50px',maxWidth:'450px',width:'100%',boxShadow:'0 25px 80px rgba(0,0,0,0.3)'}}>
          <div style={{textAlign:'center',marginBottom:'40px'}}>
            <div style={{fontSize:'80px',marginBottom:'20px'}}>🏠</div>
            <h1 style={{fontSize:'48px',fontWeight:'bold',margin:'0 0 10px 0',background:'linear-gradient(135deg,#667eea 0%,#764ba2 100%)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',fontFamily:'Permanent Marker'}}>House Hunt</h1>
            <p style={{color:'#666',fontSize:'16px'}}>{authMode==='login'?'Welcome back!':'Create account'}</p>
          </div>
          <div>
            <input type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} style={{width:'100%',padding:'18px',fontSize:'16px',border:'2px solid #e5e7eb',borderRadius:'15px',marginBottom:'15px',outline:'none'}}/>
            <input type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} onKeyPress={e=>e.key==='Enter'&&(authMode==='login'?handleLogin():handleSignUp())} style={{width:'100%',padding:'18px',fontSize:'16px',border:'2px solid #e5e7eb',borderRadius:'15px',marginBottom:'25px',outline:'none'}}/>
            <button onClick={authMode==='login'?handleLogin:handleSignUp} style={{width:'100%',padding:'18px',background:'linear-gradient(135deg,#667eea 0%,#764ba2 100%)',color:'white',border:'none',borderRadius:'15px',fontSize:'18px',fontWeight:'bold',cursor:'pointer',marginBottom:'15px',boxShadow:'0 8px 20px rgba(102,126,234,0.4)'}}>{authMode==='login'?'Log In':'Sign Up'}</button>
            <button onClick={()=>setAuthMode(authMode==='login'?'signup':'login')} style={{width:'100%',padding:'15px',background:'transparent',color:'#667eea',border:'2px solid #667eea',borderRadius:'15px',fontSize:'16px',fontWeight:'600',cursor:'pointer'}}>{authMode==='login'?'Need account? Sign up':'Have account? Log in'}</button>
          </div>
        </div>
      </div>
    );
  }

  // Show name/pet selection ONLY if hunt exists but player hasn't chosen yet
  const showNamePetSelection = activeHunt && !profile?.name_chosen;

  // MAIN APP
  return (
    <div style={{minHeight:'100vh',background:'linear-gradient(135deg,#667eea 0%,#764ba2 100%)',padding:'20px'}}>
      
      {/* NAME & PET SELECTION MODAL */}
      {showNamePetSelection&&(
        <div style={{position:'fixed',top:0,left:0,right:0,bottom:0,background:'rgba(0,0,0,0.85)',display:'flex',justifyContent:'center',alignItems:'center',zIndex:1000,padding:'20px'}}>
          <div style={{background:'white',borderRadius:'30px',padding:'50px',maxWidth:'550px',width:'100%',boxShadow:'0 30px 80px rgba(0,0,0,0.5)',textAlign:'center'}}>
            <div style={{fontSize:'80px',marginBottom:'20px'}}>🎮</div>
            <h2 style={{fontSize:'32px',fontWeight:'bold',marginBottom:'10px',color:'#333'}}>Choose Your Character!</h2>
            <p style={{fontSize:'16px',color:'#666',marginBottom:'30px'}}>Pick a name and pet companion</p>
            <input type="text" placeholder="Your Name" value={displayName} onChange={e=>setDisplayName(e.target.value)} maxLength={20} style={{width:'100%',padding:'18px',fontSize:'18px',border:'2px solid #e5e7eb',borderRadius:'15px',marginBottom:'25px',outline:'none',textAlign:'center',fontWeight:'600'}}/>
            <div style={{marginBottom:'30px'}}>
              <p style={{fontSize:'14px',fontWeight:'600',color:'#667eea',marginBottom:'15px'}}>Choose Your Pet:</p>
              <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(60px,1fr))',gap:'10px',maxHeight:'250px',overflowY:'auto',padding:'10px',background:'#f9fafb',borderRadius:'15px'}}>
                {PETS.map(pet=><div key={pet} onClick={()=>setSelectedPet(pet)} style={{fontSize:'36px',cursor:'pointer',padding:'12px',borderRadius:'12px',background:selectedPet===pet?'linear-gradient(135deg,#667eea 0%,#764ba2 100%)':'white',transform:selectedPet===pet?'scale(1.15)':'scale(1)',transition:'all 0.2s',boxShadow:selectedPet===pet?'0 4px 15px rgba(102,126,234,0.4)':'0 2px 8px rgba(0,0,0,0.05)',display:'flex',justifyContent:'center',alignItems:'center'}}>{pet}</div>)}
              </div>
            </div>
            <button onClick={saveProfile} style={{width:'100%',padding:'20px',background:'linear-gradient(135deg,#10b981 0%,#059669 100%)',color:'white',border:'none',borderRadius:'15px',fontSize:'20px',fontWeight:'bold',cursor:'pointer',boxShadow:'0 8px 20px rgba(16,185,129,0.4)'}}>Join Hunt! ✨</button>
          </div>
        </div>
      )}

      {/* ADMIN PASSWORD MODAL */}
      {showAdminPrompt&&(
        <div style={{position:'fixed',top:0,left:0,right:0,bottom:0,background:'rgba(0,0,0,0.85)',display:'flex',justifyContent:'center',alignItems:'center',zIndex:1000,padding:'20px'}}>
          <div style={{background:'white',borderRadius:'30px',padding:'50px',maxWidth:'450px',width:'100%',boxShadow:'0 30px 80px rgba(0,0,0,0.5)'}}>
            <div style={{fontSize:'72px',marginBottom:'25px',textAlign:'center'}}>🔐</div>
            <h2 style={{fontSize:'28px',fontWeight:'bold',marginBottom:'10px',textAlign:'center',color:'#333'}}>Admin Password</h2>
            <p style={{color:'#666',marginBottom:'35px',textAlign:'center',fontSize:'15px'}}>Enter admin password</p>
            <input type="password" value={adminPasswordInput} onChange={e=>setAdminPasswordInput(e.target.value)} onKeyPress={e=>e.key==='Enter'&&handleAdminLogin()} placeholder="admin password" autoFocus style={{width:'100%',padding:'20px',fontSize:'20px',border:'3px solid #667eea',borderRadius:'15px',marginBottom:'25px',outline:'none',textAlign:'center'}}/>
            <div style={{display:'flex',gap:'12px'}}>
              <button onClick={()=>{setShowAdminPrompt(false);setAdminPasswordInput('');}} style={{flex:1,padding:'18px',background:'#e5e7eb',color:'#333',border:'none',borderRadius:'15px',fontSize:'16px',fontWeight:'600',cursor:'pointer'}}>Cancel</button>
              <button onClick={handleAdminLogin} style={{flex:1,padding:'18px',background:'linear-gradient(135deg,#667eea 0%,#764ba2 100%)',color:'white',border:'none',borderRadius:'15px',fontSize:'16px',fontWeight:'600',cursor:'pointer',boxShadow:'0 8px 20px rgba(102,126,234,0.4)'}}>Enter</button>
            </div>
          </div>
        </div>
      )}

      {/* PASSWORD MODAL */}
      {showPasswordPrompt&&(
        <div style={{position:'fixed',top:0,left:0,right:0,bottom:0,background:'rgba(0,0,0,0.85)',display:'flex',justifyContent:'center',alignItems:'center',zIndex:1000,padding:'20px'}}>
          <div style={{background:'white',borderRadius:'30px',padding:'50px',maxWidth:'450px',width:'100%',boxShadow:'0 30px 80px rgba(0,0,0,0.5)'}}>
            <div style={{fontSize:'72px',marginBottom:'25px',textAlign:'center'}}>🔐</div>
            <h2 style={{fontSize:'28px',fontWeight:'bold',marginBottom:'10px',textAlign:'center',color:'#333'}}>Enter Password</h2>
            <p style={{color:'#666',marginBottom:'35px',textAlign:'center',fontSize:'15px'}}>Check the paper you found</p>
            <input type="text" value={passwordInput} onChange={e=>setPasswordInput(e.target.value.toUpperCase())} onKeyPress={e=>e.key==='Enter'&&submitPassword()} placeholder="HOUSE123" autoFocus style={{width:'100%',padding:'20px',fontSize:'24px',border:'3px solid #667eea',borderRadius:'15px',marginBottom:'25px',outline:'none',fontFamily:'Courier New',fontWeight:'bold',textAlign:'center',letterSpacing:'3px',textTransform:'uppercase'}}/>
            <div style={{display:'flex',gap:'12px'}}>
              <button onClick={()=>{setShowPasswordPrompt(false);setPasswordInput('');}} style={{flex:1,padding:'18px',background:'#e5e7eb',color:'#333',border:'none',borderRadius:'15px',fontSize:'16px',fontWeight:'600',cursor:'pointer'}}>Cancel</button>
              <button onClick={submitPassword} style={{flex:1,padding:'18px',background:'linear-gradient(135deg,#667eea 0%,#764ba2 100%)',color:'white',border:'none',borderRadius:'15px',fontSize:'16px',fontWeight:'600',cursor:'pointer',boxShadow:'0 8px 20px rgba(102,126,234,0.4)'}}>Submit</button>
            </div>
          </div>
        </div>
      )}

      {/* HEADER */}
      <div style={{maxWidth:'1000px',margin:'0 auto',marginBottom:'30px'}}>
        <div style={{background:'rgba(255,255,255,0.98)',borderRadius:'25px',padding:'30px',boxShadow:'0 15px 50px rgba(0,0,0,0.3)'}}>
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap',gap:'15px'}}>
            <div style={{display:'flex',alignItems:'center',gap:'15px'}}>
              <h1 style={{fontSize:'48px',fontWeight:'bold',margin:0,background:'linear-gradient(135deg,#667eea 0%,#764ba2 100%)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',fontFamily:'Permanent Marker',letterSpacing:'2px'}}>🏠 House Hunt</h1>
              {profile?.name_chosen&&<><div style={{fontSize:'32px'}}>{profile?.pet}</div><span style={{fontSize:'18px',fontWeight:'600',color:'#333'}}>{profile?.display_name}</span></>}
            </div>
            <div style={{display:'flex',gap:'10px',alignItems:'center'}}>
              {!isAdmin&&<button onClick={()=>setShowAdminPrompt(true)} style={{padding:'12px 20px',background:'#667eea',color:'white',border:'none',borderRadius:'12px',fontSize:'14px',fontWeight:'600',cursor:'pointer'}}>🔓 Admin</button>}
              {isAdmin&&<div style={{padding:'8px 16px',background:'linear-gradient(135deg,#f59e0b 0%,#d97706 100%)',color:'white',borderRadius:'10px',fontSize:'14px',fontWeight:'600'}}>⭐ Admin</div>}
              <button onClick={handleLogout} style={{padding:'12px 20px',background:'#ef4444',color:'white',border:'none',borderRadius:'12px',fontSize:'14px',fontWeight:'600',cursor:'pointer'}}>Logout</button>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div style={{maxWidth:'1000px',margin:'0 auto'}}>
        {/* ADMIN: CREATE HUNT */}
        {isAdmin&&!activeHunt?(
          <div style={{background:'rgba(255,255,255,0.98)',borderRadius:'25px',padding:'50px',boxShadow:'0 15px 50px rgba(0,0,0,0.3)',textAlign:'center'}}>
            <div style={{fontSize:'100px',marginBottom:'30px'}}>🎯</div>
            <h2 style={{fontSize:'36px',fontWeight:'bold',marginBottom:'15px',color:'#333'}}>Create Hunt</h2>
            <p style={{fontSize:'18px',color:'#666',marginBottom:'40px'}}>Set up a scavenger hunt!</p>
            <div style={{background:'linear-gradient(135deg,#f8f9fa 0%,#e9ecef 100%)',borderRadius:'20px',padding:'40px',marginBottom:'40px',border:'3px solid #667eea'}}>
              <label style={{display:'block',fontSize:'18px',fontWeight:'600',color:'#333',marginBottom:'20px'}}>Clues (max 15)</label>
              <input type="range" min="3" max="15" value={huntSize} onChange={e=>setHuntSize(parseInt(e.target.value))} style={{width:'100%',height:'10px',marginBottom:'20px'}}/>
              <div style={{fontSize:'56px',fontWeight:'bold',background:'linear-gradient(135deg,#667eea 0%,#764ba2 100%)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent'}}>{huntSize} clues</div>
            </div>
            <button onClick={()=>createHunt(huntSize)} style={{padding:'24px 60px',background:'linear-gradient(135deg,#10b981 0%,#059669 100%)',color:'white',border:'none',borderRadius:'18px',fontSize:'22px',fontWeight:'bold',cursor:'pointer',boxShadow:'0 10px 30px rgba(16,185,129,0.4)'}}>🎲 Generate Hunt!</button>
          </div>
        )
        
        // ADMIN: LOBBY (HUNT CREATED, NOT STARTED)
        :isAdmin&&activeHunt&&!activeHunt.hunt_started?(
          <div style={{background:'rgba(255,255,255,0.98)',borderRadius:'25px',padding:'40px',boxShadow:'0 15px 50px rgba(0,0,0,0.3)'}}>
            <div style={{textAlign:'center',marginBottom:'30px'}}>
              <h2 style={{fontSize:'32px',fontWeight:'bold',margin:'0 0 10px 0',color:'#333'}}>🎮 Lobby</h2>
              <p style={{fontSize:'16px',color:'#666'}}>Print & hide clues, then start!</p>
            </div>
            
            <div style={{background:'linear-gradient(135deg,#f0fdf4 0%,#dcfce7 100%)',borderRadius:'20px',padding:'25px',marginBottom:'25px',border:'3px solid #10b981'}}>
              <h3 style={{fontSize:'18px',fontWeight:'bold',marginBottom:'15px',color:'#059669'}}>👥 Players Ready ({players.length})</h3>
              <div style={{display:'flex',flexWrap:'wrap',gap:'10px'}}>
                {players.map(p=><div key={p.id} style={{background:'white',padding:'10px 16px',borderRadius:'10px',fontSize:'16px',fontWeight:'600',color:'#333',boxShadow:'0 2px 8px rgba(0,0,0,0.1)',display:'flex',alignItems:'center',gap:'8px'}}><span style={{fontSize:'24px'}}>{p.pet}</span>{p.display_name}</div>)}
              </div>
            </div>

            <div style={{background:'linear-gradient(135deg,#f8f9fa 0%,#e9ecef 100%)',borderRadius:'20px',padding:'25px',marginBottom:'25px',border:'3px solid #667eea'}}>
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:'15px'}}>
                <h3 style={{fontSize:'18px',fontWeight:'bold',margin:0,color:'#333'}}>🔑 Passwords & Locations</h3>
                <button onClick={()=>setShowAnswers(!showAnswers)} style={{padding:'8px 16px',background:showAnswers?'#f59e0b':'#667eea',color:'white',border:'none',borderRadius:'8px',fontSize:'13px',fontWeight:'600',cursor:'pointer'}}>{showAnswers?'Hide':'Show'} Locations</button>
              </div>
              <div style={{display:'grid',gap:'12px',maxHeight:'280px',overflowY:'auto'}}>
                {activeHunt.clues.map((clue,i)=>(
                  <div key={i} style={{background:'white',borderRadius:'12px',padding:'15px',boxShadow:'0 2px 8px rgba(0,0,0,0.05)',border:'2px solid #e5e7eb'}}>
                    <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:'15px',flexWrap:'wrap'}}>
                      <div style={{display:'flex',alignItems:'center',gap:'10px',flex:1}}>
                        <div style={{width:'28px',height:'28px',background:'linear-gradient(135deg,#667eea 0%,#764ba2 100%)',borderRadius:'6px',display:'flex',alignItems:'center',justifyContent:'center',color:'white',fontWeight:'bold',fontSize:'13px'}}>{i+1}</div>
                        <div style={{fontSize:'14px',fontWeight:'600',color:'#333'}}>Password: <span style={{fontFamily:'Courier New',color:'#667eea'}}>{clue.password}</span></div>
                      </div>
                      {showAnswers&&<div style={{fontSize:'13px',color:'#10b981',fontWeight:'600'}}>📍 {CLUES.find(c=>c.id===clue.id)?.answer}</div>}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{display:'flex',gap:'10px',justifyContent:'center',flexWrap:'wrap'}}>
              <button onClick={printClueCards} style={{padding:'16px 30px',background:'linear-gradient(135deg,#8b5cf6 0%,#7c3aed 100%)',color:'white',border:'none',borderRadius:'12px',fontSize:'16px',fontWeight:'600',cursor:'pointer'}}>🖨️ Print Cards</button>
              <button onClick={startHunt} style={{padding:'16px 40px',background:'linear-gradient(135deg,#10b981 0%,#059669 100%)',color:'white',border:'none',borderRadius:'12px',fontSize:'18px',fontWeight:'bold',cursor:'pointer',boxShadow:'0 8px 20px rgba(16,185,129,0.4)'}}>▶️ START HUNT!</button>
              <button onClick={endHunt} style={{padding:'16px 30px',background:'#ef4444',color:'white',border:'none',borderRadius:'12px',fontSize:'16px',fontWeight:'600',cursor:'pointer'}}>End</button>
            </div>
          </div>
        )
        
        // ADMIN: HUNT RUNNING - SHOW PLAYER STATS
        :isAdmin&&activeHunt&&activeHunt.hunt_started?(
          <div style={{background:'rgba(255,255,255,0.98)',borderRadius:'25px',padding:'40px',boxShadow:'0 15px 50px rgba(0,0,0,0.3)'}}>
            <div style={{textAlign:'center',marginBottom:'30px'}}>
              <h2 style={{fontSize:'32px',fontWeight:'bold',margin:'0 0 10px 0',color:'#333'}}>🎮 Hunt In Progress</h2>
              <p style={{fontSize:'16px',color:'#666'}}>Watch the race!</p>
            </div>
            
            <div style={{background:'linear-gradient(135deg,#f0fdf4 0%,#dcfce7 100%)',borderRadius:'20px',padding:'25px',marginBottom:'25px',border:'3px solid #10b981'}}>
              <h3 style={{fontSize:'20px',fontWeight:'bold',marginBottom:'20px',color:'#059669'}}>🏆 Leaderboard</h3>
              <div style={{display:'grid',gap:'12px'}}>
                {getPlayerStats().map((p,idx)=>(
                  <div key={p.id} style={{background:'white',borderRadius:'12px',padding:'20px',boxShadow:'0 2px 8px rgba(0,0,0,0.05)',border:'2px solid #e5e7eb'}}>
                    <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:'15px',flexWrap:'wrap'}}>
                      <div style={{display:'flex',alignItems:'center',gap:'12px',flex:1}}>
                        <div style={{fontSize:'24px',fontWeight:'bold',color:idx===0?'#f59e0b':idx===1?'#9ca3af':'#d1d5db',minWidth:'30px'}}>{idx+1}</div>
                        <div style={{fontSize:'32px'}}>{p.pet}</div>
                        <div style={{fontSize:'18px',fontWeight:'600',color:'#333'}}>{p.display_name}</div>
                      </div>
                      <div style={{display:'flex',alignItems:'center',gap:'15px'}}>
                        <div style={{fontSize:'16px',fontWeight:'600',color:p.isComplete?'#10b981':'#667eea'}}>{p.cluesFound}/{activeHunt.total_clues}</div>
                        <div style={{background:p.isComplete?'linear-gradient(135deg,#10b981 0%,#059669 100%)':'linear-gradient(135deg,#f8f9fa 0%,#e9ecef 100%)',width:'200px',height:'12px',borderRadius:'10px',overflow:'hidden'}}>
                          <div style={{background:p.isComplete?'':'linear-gradient(90deg,#667eea 0%,#764ba2 100%)',height:'100%',width:`${(p.cluesFound/activeHunt.total_clues)*100}%`,transition:'width 0.5s'}}/>
                        </div>
                        {p.isComplete&&<div style={{fontSize:'24px'}}>🏆</div>}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{textAlign:'center'}}>
              <button onClick={endHunt} style={{padding:'16px 40px',background:'#ef4444',color:'white',border:'none',borderRadius:'12px',fontSize:'16px',fontWeight:'600',cursor:'pointer'}}>End Hunt</button>
            </div>
          </div>
        )
        
        // PLAYER: WAITING FOR HUNT
        :!activeHunt?(
          <div style={{background:'rgba(255,255,255,0.98)',borderRadius:'25px',padding:'60px 40px',boxShadow:'0 15px 50px rgba(0,0,0,0.3)',textAlign:'center'}}>
            <div style={{fontSize:'100px',marginBottom:'30px'}}>⏳</div>
            <h2 style={{fontSize:'32px',fontWeight:'bold',marginBottom:'15px',color:'#333'}}>Waiting for Admin</h2>
            <p style={{fontSize:'18px',color:'#666',marginBottom:'30px'}}>Hang tight...</p>
            <div style={{background:'linear-gradient(135deg,#f0fdf4 0%,#dcfce7 100%)',borderRadius:'15px',padding:'20px',border:'3px solid #10b981'}}>
              <p style={{fontSize:'16px',fontWeight:'600',color:'#059669',marginBottom:'10px'}}>👥 Players in Lobby ({players.length})</p>
              <div style={{display:'flex',flexWrap:'wrap',gap:'8px',justifyContent:'center'}}>
                {players.map(p=><div key={p.id} style={{background:'white',padding:'8px 14px',borderRadius:'8px',fontSize:'14px',fontWeight:'600',color:'#333',display:'flex',alignItems:'center',gap:'6px'}}><span style={{fontSize:'20px'}}>{p.pet}</span>{p.display_name}</div>)}
              </div>
            </div>
          </div>
        )
        
        // PLAYER: WAITING IN LOBBY (HUNT CREATED BUT NOT STARTED)
        :activeHunt&&!activeHunt.hunt_started?(
          <div style={{background:'rgba(255,255,255,0.98)',borderRadius:'25px',padding:'60px 40px',boxShadow:'0 15px 50px rgba(0,0,0,0.3)',textAlign:'center'}}>
            <div style={{fontSize:'100px',marginBottom:'30px'}}>⏳</div>
            <h2 style={{fontSize:'32px',fontWeight:'bold',marginBottom:'15px',color:'#333'}}>Get Ready!</h2>
            <p style={{fontSize:'18px',color:'#666',marginBottom:'30px'}}>Admin is hiding clues...</p>
            <div style={{background:'linear-gradient(135deg,#f0fdf4 0%,#dcfce7 100%)',borderRadius:'15px',padding:'20px',border:'3px solid #10b981'}}>
              <p style={{fontSize:'16px',fontWeight:'600',color:'#059669',marginBottom:'10px'}}>👥 Players Ready ({players.length})</p>
              <div style={{display:'flex',flexWrap:'wrap',gap:'8px',justifyContent:'center'}}>
                {players.map(p=><div key={p.id} style={{background:'white',padding:'8px 14px',borderRadius:'8px',fontSize:'14px',fontWeight:'600',color:'#333',display:'flex',alignItems:'center',gap:'6px'}}><span style={{fontSize:'20px'}}>{p.pet}</span>{p.display_name}</div>)}
              </div>
            </div>
          </div>
        )
        
        // PLAYER: HUNT COMPLETE
        :isHuntComplete?(
          <div style={{background:'rgba(255,255,255,0.98)',borderRadius:'25px',padding:'60px 40px',boxShadow:'0 15px 50px rgba(0,0,0,0.3)',textAlign:'center'}}>
            <div style={{fontSize:'120px',marginBottom:'30px'}}>🏆</div>
            <h2 style={{fontSize:'42px',fontWeight:'bold',marginBottom:'15px',background:'linear-gradient(135deg,#10b981 0%,#059669 100%)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent'}}>Hunt Complete!</h2>
            <p style={{fontSize:'22px',color:'#666',marginBottom:'30px'}}>You found all {activeHunt.total_clues} clues! 🎊</p>
            <div style={{display:'flex',justifyContent:'center',flexWrap:'wrap',gap:'10px',marginTop:'30px'}}>
              {[...Array(activeHunt.total_clues)].map((_,i)=><div key={i} style={{fontSize:'48px'}}>🧩</div>)}
            </div>
          </div>
        )
        
        // PLAYER: ACTIVE HUNT
        :(
          <div style={{background:'rgba(255,255,255,0.98)',borderRadius:'25px',padding:'40px',boxShadow:'0 15px 50px rgba(0,0,0,0.3)'}}>
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
            <div style={{background:'linear-gradient(135deg,#667eea 10%,#764ba2 100%)',borderRadius:'25px',padding:'50px 40px',marginBottom:'35px',boxShadow:'0 20px 50px rgba(102,126,234,0.5)',minHeight:'280px',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
              <div style={{fontSize:'60px',marginBottom:'30px'}}>🔍</div>
              <div style={{fontSize:'26px',lineHeight:'1.8',color:'white',textAlign:'center',fontWeight:'500',textShadow:'0 4px 20px rgba(0,0,0,0.2)'}}>{CLUES.find(c=>c.id===currentClue.id)?.clue}</div>
            </div>
            <div style={{textAlign:'center'}}>
              <button onClick={()=>setShowPasswordPrompt(true)} style={{padding:'22px 55px',background:'linear-gradient(135deg,#10b981 0%,#059669 100%)',color:'white',border:'none',borderRadius:'18px',fontSize:'22px',fontWeight:'bold',cursor:'pointer',boxShadow:'0 10px 30px rgba(16,185,129,0.5)'}}>🔑 Found It!</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
