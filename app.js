// Supabase Configuration
const supabaseUrl = 'https://pbzdzsrgbxubceiinrbm.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBiemR6c3JnYnh1YmNlaWlucmJtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk0NTU5MjIsImV4cCI6MjA4NTAzMTkyMn0.s5IOb0VfOzArSxy_6DAn9QO6o8HWDXI9_6K8pHTkQc8';
const ADMIN_PASSWORD = '3292';

const { createClient } = supabase;
const { useState, useEffect } = React;
const supabaseClient = createClient(supabaseUrl, supabaseKey);

const PETS = ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼', '🐨', '🐯', '🦁', '🐮', '🐷', '🐸', '🐵', '🐔', '🐧', '🐦', '🦆', '🦅', '🦉', '🦇', '🐺', '🐗', '🐴', '🦄', '🐝', '🐛', '🦋', '🐌'];

// Mini-game items
const GAME_ITEMS = ['🏠', '🔍', '🗝️', '🎯', '🧩', '🏆', '⭐', '💎', '🎁', '🎈'];

const CLUES = [
  { id: 1, clue: "Pucks fly at me all day, but I never score - I only stop the goals.", answer: "Hockey net - Basement gym" },
  { id: 2, clue: "Fake winter lives at my feet, smooth and white so shots glide fast.", answer: "Shooting tiles / fake ice - Basement gym" },
  { id: 3, clue: "I move when you pedal but never leave the room.", answer: "Stationary bike - Basement gym" },
  { id: 4, clue: "Hex‑shaped iron sleeps on my shelves, waiting to be lifted.", answer: "Dumbbell rack - Basement gym" },
  { id: 5, clue: "I'm a blue sphere too big for most games, but perfect for balance.", answer: "Blue exercise ball - Basement gym" },
  { id: 6, clue: "My number says 24, and jumping on me is the whole point.", answer: "24\" plyo box - Basement gym" },
  { id: 7, clue: "Long wooden soldiers lean quietly against the wall after practice.", answer: "Hockey sticks - Basement gym" },
  { id: 8, clue: "I look like a seat, but people lie on me to push heavy things.", answer: "Workout bench - Basement gym" },
  { id: 9, clue: "Giant bags of gear rest high above the gym floor.", answer: "Duffel bags/shelf - Basement gym" },
  { id: 10, clue: "The biggest screen in the house watches every workout.", answer: "Large TV - Basement gym" },
  { id: 11, clue: "Bright red and loud in color, I promise your clothes come out clean.", answer: "Red detergent jug - Laundry hallway" },
  { id: 12, clue: "Two machines stacked like bunk beds spin shirts into submission.", answer: "Washer/dryer stack - Laundry hallway" },
  { id: 13, clue: "I unfold like wings and hold wet clothes in the air.", answer: "Drying rack - Laundry hallway" },
  { id: 14, clue: "Not for dishes - this sink belongs to socks and sweat.", answer: "Laundry sink - Laundry hallway" },
  { id: 15, clue: "Clean piles rise and fall here like a fabric mountain range.", answer: "Laundry baskets/pile area - Laundry hallway" },
  { id: 16, clue: "A half‑moon sunrise is carved into my window.", answer: "Front door with half‑moon window - Front door area" },
  { id: 17, clue: "When storms arrive, spears of fabric wait upright inside me.", answer: "Umbrella stand - Front door area" },
  { id: 18, clue: "Snowy boots confess their mess inside my shallow tray.", answer: "Boot tray - Front door area" },
  { id: 19, clue: "A narrow landing spot catches keys, mail, and random junk.", answer: "Entry table - Front door area" },
  { id: 20, clue: "Numbers replace keys when you press my glowing buttons.", answer: "Keypad lock - Mudroom" },
  { id: 21, clue: "Painted mint like toothpaste, tall doors hide coats and clutter.", answer: "Mint green cabinets - Mudroom" },
  { id: 22, clue: "Tired legs rest here while laces get tied.", answer: "Bench - Mudroom" },
  { id: 23, clue: "Winter hands disappear into the cubby below.", answer: "Under‑bench glove/hat cubby - Mudroom" },
  { id: 24, clue: "Pairs line up neatly on racks like soldiers at inspection.", answer: "Shoe shelves - Mudroom" },
  { id: 25, clue: "Where order gives up - some shoes behave, the rest rebel on the floor.", answer: "Shoe pile - Mudroom" },
  { id: 26, clue: "One wall looks like a jungle instead of paint.", answer: "Tropical wallpaper - Living room" },
  { id: 27, clue: "Flames live here only in imagination - white bricks, zero heat.", answer: "White brick fireplace - Living room" },
  { id: 28, clue: "Woven strands hold blankets for movie nights.", answer: "Blanket basket - Living room" },
  { id: 29, clue: "A tiny chest sits closed, guarding nothing but decoration.", answer: "Small treasure chest - Living room" },
  { id: 30, clue: "Long white doors trimmed with gold hide quiet storage.", answer: "White cabinets with gold handles - Living room" },
  { id: 31, clue: "A couch so big it could swallow the whole family at once.", answer: "Sectional couch - Living room" },
  { id: 32, clue: "Controllers wait here for the next game to begin.", answer: "Game controllers - Living room" },
  { id: 33, clue: "Blue and white tiles form a tiny café table beside the backyard light.", answer: "Mosaic round table - Kitchen seating / back door area" },
  { id: 34, clue: "Two dark chairs face each other like they're mid‑conversation.", answer: "Dark chairs - Kitchen seating / back door area" },
  { id: 35, clue: "Tall and skinny, I stretch upward like a green antenna.", answer: "Tall skinny plant - Kitchen seating / back door area" },
  { id: 36, clue: "Thick upright leaves grow straight like swords from the soil.", answer: "Snake plant - Kitchen seating / back door area" },
  { id: 37, clue: "I'm the only plant that never touches the ground, dangling from above.", answer: "Hanging plant - Kitchen seating / back door area" },
  { id: 38, clue: "If you ever need me, something has already gone wrong - red and ready.", answer: "Fire extinguisher - Kitchen seating / back door area" },
  { id: 39, clue: "Wet footprints end where this dark mat begins.", answer: "Black floor mat - Kitchen seating / back door area" },
  { id: 40, clue: "Covered in magnets and papers, I guard everything cold.", answer: "Fridge/freezer - Kitchen" },
  { id: 41, clue: "Once a tree, now the center of every meal and conversation.", answer: "Tree‑trunk island - Kitchen" },
  { id: 42, clue: "Square holes beneath me cradle bottles like a puzzle grid.", answer: "Wine rack under island - Kitchen" },
  { id: 43, clue: "Deep and wide, I swallow pots that normal sinks can't handle.", answer: "Farmhouse sink - Kitchen" },
  { id: 44, clue: "A metal canopy hovers above the heat and steam.", answer: "Range hood - Kitchen" },
  { id: 45, clue: "I whistle when water boils for tea.", answer: "Kettle - Kitchen" },
  { id: 46, clue: "Beans go in, caffeine comes out.", answer: "Coffee machine - Kitchen" },
  { id: 47, clue: "Loud and crunchy, I crush beans before brewing.", answer: "Coffee grinder - Kitchen" },
  { id: 48, clue: "Hidden low in the cabinets, leftovers spin in my glow.", answer: "Built‑in microwave - Kitchen" },
  { id: 49, clue: "Trash disappears when this drawer slides shut.", answer: "Pull‑out garbage drawer - Kitchen" },
  { id: 50, clue: "Hands and numbers spin around my face all day long.", answer: "Kitchen clock - Kitchen" },
  { id: 51, clue: "Snacks climb from floor to ceiling inside this towering cupboard.", answer: "Tall pantry cupboard - Pantry/food cupboards" },
  { id: 52, clue: "Cardboard mornings filled with flakes wait on one of these shelves.", answer: "Cereal box - Pantry/food cupboards" },
  { id: 53, clue: "Cuts and headaches are treated where tiny boxes and bottles gather.", answer: "Medical cabinet - Pantry/medical cupboards" },
  { id: 54, clue: "Small fizzy cans hide here among the medicine and supplies.", answer: "Bubly cans - Pantry/medical cupboards" },
  { id: 55, clue: "Trains race across maps inside this cardboard adventure.", answer: "Ticket to Ride - Pantry/medical cupboards" },
  { id: 56, clue: "Armies conquer the world across another game board nearby.", answer: "Risk - Pantry/medical cupboards" },
  { id: 57, clue: "Three big letters on a wall quietly spell three siblings.", answer: "LEW letters - Upstairs bathroom" },
  { id: 58, clue: "Soft and black, I warm cold feet after a shower.", answer: "Black bath mat - Upstairs bathroom" },
  { id: 59, clue: "Clear walls keep splashes trapped inside while water falls.", answer: "Glass shower - Upstairs bathroom" },
  { id: 60, clue: "Gold patterns cover the walls around a dark faucet and a single throne.", answer: "Gold wallpaper bathroom - Middle floor bathroom" }
];

const generatePassword = () => {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const nums = '0123456789';
  let pwd = '';
  
  // 2-3 random letters
  const letterCount = Math.floor(Math.random() * 2) + 2;
  for (let i = 0; i < letterCount; i++) {
    pwd += letters[Math.floor(Math.random() * letters.length)];
  }
  
  // 2-3 random numbers
  const numCount = Math.floor(Math.random() * 2) + 2;
  for (let i = 0; i < numCount; i++) {
    pwd += nums[Math.floor(Math.random() * nums.length)];
  }
  
  // Shuffle the password
  return pwd.split('').sort(() => Math.random() - 0.5).join('');
};

function App() {
  const [user, setUser] = useState(null);
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
  
  // Phase 2: Join flow + Mini-game
  const [wantsToJoin, setWantsToJoin] = useState(false);
  const [gameScore, setGameScore] = useState(0);
  const [fallingItems, setFallingItems] = useState([]);
  const [gameActive, setGameActive] = useState(false);
  
  // Phase 3: Stats + Win animation
  const [showWinAnimation, setShowWinAnimation] = useState(false);
  const [clueStartTime, setClueStartTime] = useState(null);

  useEffect(() => {
    checkUser();
    const { data: authListener } = supabaseClient.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });
    return () => authListener.subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (user && !isAdmin) {
      const interval = setInterval(() => {
        loadActiveHunt();
        loadPlayers();
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [user, isAdmin]);

  useEffect(() => {
    if (isAdmin && activeHunt) {
      const interval = setInterval(() => {
        loadPlayers();
        if (activeHunt.hunt_started) loadAllProgress();
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [isAdmin, activeHunt]);

  useEffect(() => {
    if (user && activeHunt && activeHunt.hunt_started && !isAdmin) {
      const interval = setInterval(() => loadMyProgress(activeHunt.id), 2000);
      return () => clearInterval(interval);
    }
  }, [user, activeHunt, isAdmin]);

  // Mini-game: Start ONLY in lobby (after joining)
  useEffect(() => {
    const playerInLobby = user && players.some(p => p.id === user.id);
    if (activeHunt && !activeHunt.hunt_started && !isAdmin && playerInLobby) {
      setGameActive(true);
      
      const gameInterval = setInterval(() => {
        const newItem = {
          id: Date.now() + Math.random(),
          emoji: GAME_ITEMS[Math.floor(Math.random() * GAME_ITEMS.length)],
          x: Math.random() * 70 + 15,
          y: 0,
          speed: 1.5 + Math.random() * 1
        };
        setFallingItems(prev => [...prev, newItem].slice(-15)); // Max 15 items
      }, 800);
      
      const moveInterval = setInterval(() => {
        setFallingItems(prev => {
          const updated = prev.map(item => ({ ...item, y: item.y + item.speed }));
          // Remove items that hit bottom and lose points
          const fallen = updated.filter(item => item.y >= 100);
          if (fallen.length > 0) {
            setGameScore(s => Math.max(0, s - fallen.length * 5));
            // Play miss sound (low beep)
            try {
              const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
              const oscillator = audioCtx.createOscillator();
              const gainNode = audioCtx.createGain();
              oscillator.connect(gainNode);
              gainNode.connect(audioCtx.destination);
              oscillator.frequency.value = 200;
              gainNode.gain.value = 0.1;
              oscillator.start();
              oscillator.stop(audioCtx.currentTime + 0.2);
            } catch(e) {}
          }
          return updated.filter(item => item.y < 100);
        });
      }, 50);
      
      return () => {
        clearInterval(gameInterval);
        clearInterval(moveInterval);
      };
    } else {
      setGameActive(false);
      setFallingItems([]);
    }
  }, [activeHunt, isAdmin, players, user]);
  
  // Trigger win animation when hunt completes
  useEffect(() => {
    if (isHuntComplete && !isAdmin) {
      setShowWinAnimation(true);
      setTimeout(() => setShowWinAnimation(false), 5000);
    }
  }, [isHuntComplete, isAdmin]);

  const checkUser = async () => {
    const { data: { session } } = await supabaseClient.auth.getSession();
    setUser(session?.user ?? null);
    if (session?.user) {
      await loadActiveHunt();
      await loadPlayers();
    }
    setLoading(false);
  };

  const loadActiveHunt = async () => {
    const { data, error } = await supabaseClient.from('hunts').select('*').eq('is_active', true).maybeSingle();
    console.log('loadActiveHunt result:', { data, error });
    if (!error && data) {
      console.log('Setting active hunt:', data);
      setActiveHunt(data);
      if (data.hunt_started && user && !isAdmin) {
        await loadMyProgress(data.id);
      }
      if (isAdmin && data.hunt_started) {
        await loadAllProgress();
      }
    } else {
      console.log('No active hunt or error:', error);
      // Only clear if there's truly no hunt
      if (!data && !error) {
        setActiveHunt(null);
        setPlayers([]);
      }
    }
  };

  const loadPlayers = async () => {
    if (!activeHunt) {
      // Don't clear players immediately - they might be in a hunt that's about to load
      return;
    }
    const { data } = await supabaseClient.from('profiles').select('id, display_name, pet').not('display_name', 'is', null);
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
      pet: selectedPet
    }).eq('id', user.id);
    if (!error) {
      setWantsToJoin(false);
      setDisplayName('');
      await loadPlayers();
    }
  };

  const handleJoinGame = () => {
    setWantsToJoin(true);
    setGameActive(false);
    setGameScore(0);
  };

  const catchItem = (itemId) => {
    setFallingItems(prev => prev.filter(item => item.id !== itemId));
    setGameScore(prev => prev + 10);
    // Play catch sound (short beep)
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    oscillator.frequency.value = 800;
    gainNode.gain.value = 0.1;
    oscillator.start();
    oscillator.stop(audioCtx.currentTime + 0.1);
  };
  
  const leaveLobby = async () => {
    if (confirm('Leave the lobby?')) {
      await supabaseClient.from('profiles').update({ display_name: null, pet: null }).eq('id', user.id);
      setGameScore(0);
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
    else setActiveHunt(hunt);
  };

  const startHunt = async () => {
    if (!isAdmin || !activeHunt) return;
    const { error } = await supabaseClient.from('hunts').update({ hunt_started: true }).eq('id', activeHunt.id);
    if (!error) {
      setActiveHunt({ ...activeHunt, hunt_started: true });
      console.log('Hunt started!');
    } else {
      console.error('Start hunt error:', error);
      alert('Failed to start hunt: ' + error.message);
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
      // Get ALL profiles
      const { data: allProfiles } = await supabaseClient.from('profiles').select('id');
      
      // Clear everyone's name and pet
      if (allProfiles) {
        for (const profile of allProfiles) {
          await supabaseClient.from('profiles').update({ display_name: null, pet: null }).eq('id', profile.id);
        }
      }
      
      // Deactivate hunt
      await supabaseClient.from('hunts').update({ is_active: false }).eq('id', activeHunt.id);
      
      setActiveHunt(null);
      setMyProgress([]);
      setAllProgress([]);
      setPlayers([]);
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

  const playerInLobby = user && players.some(p => p.id === user.id);
  
  console.log('DEBUG:', {
    hasActiveHunt: !!activeHunt,
    activeHuntId: activeHunt?.id,
    huntStarted: activeHunt?.hunt_started,
    isAdmin,
    userId: user?.id,
    playersInLobby: players.map(p => ({id: p.id, name: p.display_name})),
    playerInLobby,
    shouldShowModal: activeHunt && !isAdmin && !playerInLobby,
    shouldShowJoinButton: activeHunt && !activeHunt.hunt_started && !playerInLobby
  });

  if (loading) return <div style={{minHeight:'100vh',background:'linear-gradient(135deg,#667eea 0%,#764ba2 100%)',display:'flex',justifyContent:'center',alignItems:'center',fontSize:'48px'}}>🔍</div>;

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

  return (
    <div style={{minHeight:'100vh',background:'linear-gradient(135deg,#667eea 0%,#764ba2 100%)',padding:'20px'}}>
      
      {wantsToJoin && !playerInLobby && activeHunt && (
        <div style={{position:'fixed',top:0,left:0,right:0,bottom:0,background:'rgba(0,0,0,0.9)',display:'flex',justifyContent:'center',alignItems:'center',zIndex:1001,padding:'20px'}}>
          <div style={{background:'white',borderRadius:'30px',padding:'50px',maxWidth:'550px',width:'100%',boxShadow:'0 30px 80px rgba(0,0,0,0.5)',textAlign:'center'}}>
            <div style={{fontSize:'80px',marginBottom:'20px'}}>🎮</div>
            <h2 style={{fontSize:'32px',fontWeight:'bold',marginBottom:'10px',color:'#333'}}>Choose Your Character!</h2>
            <p style={{fontSize:'16px',color:'#666',marginBottom:'30px'}}>Pick a name and pet</p>
            <input type="text" placeholder="Your Name" value={displayName} onChange={e=>setDisplayName(e.target.value)} maxLength={20} style={{width:'100%',padding:'18px',fontSize:'18px',border:'2px solid #e5e7eb',borderRadius:'15px',marginBottom:'25px',outline:'none',textAlign:'center',fontWeight:'600'}}/>
            <div style={{marginBottom:'30px'}}>
              <p style={{fontSize:'14px',fontWeight:'600',color:'#667eea',marginBottom:'15px'}}>Choose Your Pet:</p>
              <div style={{display:'grid',gridTemplateColumns:'repeat(5,1fr)',gap:'10px',maxHeight:'250px',overflowY:'auto',padding:'10px',background:'#f9fafb',borderRadius:'15px'}}>
                {PETS.map(pet=><div key={pet} onClick={()=>setSelectedPet(pet)} style={{fontSize:'36px',cursor:'pointer',padding:'12px',borderRadius:'12px',background:selectedPet===pet?'linear-gradient(135deg,#667eea 0%,#764ba2 100%)':'white',transform:selectedPet===pet?'scale(1.15)':'scale(1)',transition:'all 0.2s',boxShadow:selectedPet===pet?'0 4px 15px rgba(102,126,234,0.4)':'0 2px 8px rgba(0,0,0,0.05)',display:'flex',justifyContent:'center',alignItems:'center'}}>{pet}</div>)}
              </div>
            </div>
            <button onClick={saveProfile} style={{width:'100%',padding:'20px',background:'linear-gradient(135deg,#10b981 0%,#059669 100%)',color:'white',border:'none',borderRadius:'15px',fontSize:'20px',fontWeight:'bold',cursor:'pointer',boxShadow:'0 8px 20px rgba(16,185,129,0.4)'}}>Join Hunt! ✨</button>
          </div>
        </div>
      )}

      {showAdminPrompt&&(
        <div style={{position:'fixed',top:0,left:0,right:0,bottom:0,background:'rgba(0,0,0,0.85)',display:'flex',justifyContent:'center',alignItems:'center',zIndex:1000,padding:'20px'}}>
          <div style={{background:'white',borderRadius:'30px',padding:'50px',maxWidth:'450px',width:'100%',boxShadow:'0 30px 80px rgba(0,0,0,0.5)'}}>
            <div style={{fontSize:'72px',marginBottom:'25px',textAlign:'center'}}>🔐</div>
            <h2 style={{fontSize:'28px',fontWeight:'bold',marginBottom:'10px',textAlign:'center',color:'#333'}}>Admin Password</h2>
            <input type="password" value={adminPasswordInput} onChange={e=>setAdminPasswordInput(e.target.value)} onKeyPress={e=>e.key==='Enter'&&handleAdminLogin()} placeholder="admin password" autoFocus style={{width:'100%',padding:'20px',fontSize:'20px',border:'3px solid #667eea',borderRadius:'15px',marginBottom:'25px',outline:'none',textAlign:'center'}}/>
            <div style={{display:'flex',gap:'12px'}}>
              <button onClick={()=>{setShowAdminPrompt(false);setAdminPasswordInput('');}} style={{flex:1,padding:'18px',background:'#e5e7eb',color:'#333',border:'none',borderRadius:'15px',fontSize:'16px',fontWeight:'600',cursor:'pointer'}}>Cancel</button>
              <button onClick={handleAdminLogin} style={{flex:1,padding:'18px',background:'linear-gradient(135deg,#667eea 0%,#764ba2 100%)',color:'white',border:'none',borderRadius:'15px',fontSize:'16px',fontWeight:'600',cursor:'pointer',boxShadow:'0 8px 20px rgba(102,126,234,0.4)'}}>Enter</button>
            </div>
          </div>
        </div>
      )}

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

      <div style={{maxWidth:'1000px',margin:'0 auto',marginBottom:'30px'}}>
        <div style={{background:'rgba(255,255,255,0.98)',borderRadius:'25px',padding:'30px',boxShadow:'0 15px 50px rgba(0,0,0,0.3)'}}>
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap',gap:'15px'}}>
            <h1 style={{fontSize:'48px',fontWeight:'bold',margin:0,background:'linear-gradient(135deg,#667eea 0%,#764ba2 100%)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',fontFamily:'Permanent Marker',letterSpacing:'2px'}}>🏠 House Hunt</h1>
            <div style={{display:'flex',gap:'10px',alignItems:'center'}}>
              {!isAdmin&&<button onClick={()=>setShowAdminPrompt(true)} style={{padding:'12px 20px',background:'#667eea',color:'white',border:'none',borderRadius:'12px',fontSize:'14px',fontWeight:'600',cursor:'pointer'}}>🔓 Admin</button>}
              {isAdmin&&<div style={{padding:'8px 16px',background:'linear-gradient(135deg,#f59e0b 0%,#d97706 100%)',color:'white',borderRadius:'10px',fontSize:'14px',fontWeight:'600'}}>⭐ Admin</div>}
              <button onClick={handleLogout} style={{padding:'12px 20px',background:'#ef4444',color:'white',border:'none',borderRadius:'12px',fontSize:'14px',fontWeight:'600',cursor:'pointer'}}>Logout</button>
            </div>
          </div>
        </div>
      </div>

      <div style={{maxWidth:'1000px',margin:'0 auto'}}>
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
        ):isAdmin&&activeHunt&&!activeHunt.hunt_started?(
          <div style={{background:'rgba(255,255,255,0.98)',borderRadius:'25px',padding:'40px',boxShadow:'0 15px 50px rgba(0,0,0,0.3)'}}>
            <div style={{textAlign:'center',marginBottom:'30px'}}>
              <h2 style={{fontSize:'32px',fontWeight:'bold',margin:'0 0 10px 0',color:'#333'}}>🎮 Lobby</h2>
              <p style={{fontSize:'16px',color:'#666'}}>Players are joining...</p>
            </div>
            
            <div style={{background:'linear-gradient(135deg,#f0fdf4 0%,#dcfce7 100%)',borderRadius:'20px',padding:'25px',marginBottom:'25px',border:'3px solid #10b981'}}>
              <h3 style={{fontSize:'18px',fontWeight:'bold',marginBottom:'15px',color:'#059669'}}>👥 Players Ready ({players.length})</h3>
              <div style={{display:'flex',flexWrap:'wrap',gap:'10px'}}>
                {players.length===0?<p style={{color:'#666',fontSize:'14px'}}>Waiting for players to join...</p>:players.map(p=><div key={p.id} style={{background:'white',padding:'10px 16px',borderRadius:'10px',fontSize:'16px',fontWeight:'600',color:'#333',boxShadow:'0 2px 8px rgba(0,0,0,0.1)',display:'flex',alignItems:'center',gap:'8px'}}><span style={{fontSize:'24px'}}>{p.pet}</span>{p.display_name}</div>)}
              </div>
            </div>

            <div style={{background:'linear-gradient(135deg,#f8f9fa 0%,#e9ecef 100%)',borderRadius:'20px',padding:'25px',marginBottom:'25px',border:'3px solid #667eea'}}>
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:'15px'}}>
                <h3 style={{fontSize:'18px',fontWeight:'bold',margin:0,color:'#333'}}>🔑 Passwords</h3>
                <button onClick={()=>setShowAnswers(!showAnswers)} style={{padding:'8px 16px',background:showAnswers?'#f59e0b':'#667eea',color:'white',border:'none',borderRadius:'8px',fontSize:'13px',fontWeight:'600',cursor:'pointer'}}>{showAnswers?'Hide':'Show'} Locations</button>
              </div>
              <div style={{display:'grid',gap:'12px',maxHeight:'280px',overflowY:'auto'}}>
                {activeHunt.clues.map((clue,i)=>(
                  <div key={i} style={{background:'white',borderRadius:'12px',padding:'15px',boxShadow:'0 2px 8px rgba(0,0,0,0.05)',border:'2px solid #e5e7eb'}}>
                    <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:'15px',flexWrap:'wrap'}}>
                      <div style={{display:'flex',alignItems:'center',gap:'10px',flex:1}}>
                        <div style={{width:'28px',height:'28px',background:'linear-gradient(135deg,#667eea 0%,#764ba2 100%)',borderRadius:'6px',display:'flex',alignItems:'center',justifyContent:'center',color:'white',fontWeight:'bold',fontSize:'13px'}}>{i+1}</div>
                        <div style={{fontSize:'14px',fontWeight:'600',color:'#333'}}><span style={{fontFamily:'Courier New',color:'#667eea'}}>{clue.password}</span></div>
                      </div>
                      {showAnswers&&<div style={{fontSize:'13px',color:'#10b981',fontWeight:'600'}}>📍 {CLUES.find(c=>c.id===clue.id)?.answer}</div>}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{display:'flex',gap:'10px',justifyContent:'center',flexWrap:'wrap'}}>
              <button onClick={()=>{if(confirm('Cancel hunt setup?')){setActiveHunt(null);}}} style={{padding:'16px 30px',background:'#6b7280',color:'white',border:'none',borderRadius:'12px',fontSize:'16px',fontWeight:'600',cursor:'pointer'}}>← Back</button>
              <button onClick={printClueCards} style={{padding:'16px 30px',background:'linear-gradient(135deg,#8b5cf6 0%,#7c3aed 100%)',color:'white',border:'none',borderRadius:'12px',fontSize:'16px',fontWeight:'600',cursor:'pointer'}}>🖨️ Print Cards</button>
              <button onClick={startHunt} style={{padding:'16px 40px',background:'linear-gradient(135deg,#10b981 0%,#059669 100%)',color:'white',border:'none',borderRadius:'12px',fontSize:'18px',fontWeight:'bold',cursor:'pointer',boxShadow:'0 8px 20px rgba(16,185,129,0.4)'}}>▶️ START HUNT!</button>
              <button onClick={endHunt} style={{padding:'16px 30px',background:'#ef4444',color:'white',border:'none',borderRadius:'12px',fontSize:'16px',fontWeight:'600',cursor:'pointer'}}>End</button>
            </div>
          </div>
        ):isAdmin&&activeHunt?(
          <div style={{background:'rgba(255,255,255,0.98)',borderRadius:'25px',padding:'40px',boxShadow:'0 15px 50px rgba(0,0,0,0.3)'}}>
            <div style={{textAlign:'center',marginBottom:'30px'}}>
              <h2 style={{fontSize:'32px',fontWeight:'bold',margin:'0 0 10px 0',color:'#333'}}>🎮 Hunt In Progress</h2>
            </div>
            
            <div style={{background:'linear-gradient(135deg,#f0fdf4 0%,#dcfce7 100%)',borderRadius:'20px',padding:'25px',marginBottom:'25px',border:'3px solid #10b981'}}>
              <h3 style={{fontSize:'20px',fontWeight:'bold',marginBottom:'20px',color:'#059669'}}>🏆 Leaderboard</h3>
              <div style={{display:'grid',gap:'12px'}}>
                {getPlayerStats().map((p,idx)=>(
                  <div key={p.id} style={{background:'white',borderRadius:'12px',padding:'20px',boxShadow:'0 2px 8px rgba(0,0,0,0.05)',border:'2px solid #e5e7eb'}}>
                    <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:'15px',flexWrap:'wrap'}}>
                      <div style={{display:'flex',alignItems:'center',gap:'12px',flex:1}}>
                        <div style={{fontSize:'24px',fontWeight:'bold',color:idx===0?'#f59e0b':'#9ca3af',minWidth:'30px'}}>{idx+1}</div>
                        <div style={{fontSize:'32px'}}>{p.pet}</div>
                        <div style={{fontSize:'18px',fontWeight:'600',color:'#333'}}>{p.display_name}</div>
                      </div>
                      <div style={{display:'flex',alignItems:'center',gap:'15px'}}>
                        <div style={{fontSize:'16px',fontWeight:'600',color:p.isComplete?'#10b981':'#667eea'}}>{p.cluesFound}/{activeHunt.total_clues}</div>
                        <div style={{background:'#e5e7eb',width:'150px',height:'12px',borderRadius:'10px',overflow:'hidden'}}>
                          <div style={{background:p.isComplete?'linear-gradient(90deg,#10b981 0%,#059669 100%)':'linear-gradient(90deg,#667eea 0%,#764ba2 100%)',height:'100%',width:`${(p.cluesFound/activeHunt.total_clues)*100}%`,transition:'width 0.5s'}}/>
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
        ):!activeHunt?(
          <div style={{background:'rgba(255,255,255,0.98)',borderRadius:'25px',padding:'60px 40px',boxShadow:'0 15px 50px rgba(0,0,0,0.3)',textAlign:'center'}}>
            <div style={{fontSize:'100px',marginBottom:'30px'}}>⏳</div>
            <h2 style={{fontSize:'32px',fontWeight:'bold',marginBottom:'15px',color:'#333'}}>Waiting for Admin</h2>
            <p style={{fontSize:'18px',color:'#666'}}>Hang tight...</p>
          </div>
        ):activeHunt && !activeHunt.hunt_started && !playerInLobby?(
          <div style={{background:'rgba(255,255,255,0.98)',borderRadius:'25px',padding:'60px 40px',boxShadow:'0 15px 50px rgba(0,0,0,0.3)',textAlign:'center'}}>
            <div style={{fontSize:'100px',marginBottom:'30px',animation:'bounce 2s ease-in-out infinite'}}>🎮</div>
            <h2 style={{fontSize:'42px',fontWeight:'bold',marginBottom:'15px',color:'#333'}}>Game Ready!</h2>
            <p style={{fontSize:'20px',color:'#666',marginBottom:'50px'}}>Click to join the hunt</p>
            <button onClick={()=>setWantsToJoin(true)} style={{padding:'28px 70px',background:'linear-gradient(135deg,#10b981 0%,#059669 100%)',color:'white',border:'none',borderRadius:'20px',fontSize:'28px',fontWeight:'bold',cursor:'pointer',boxShadow:'0 12px 35px rgba(16,185,129,0.5)',animation:'pulse 2s infinite',transform:'scale(1)',transition:'transform 0.2s'}} onMouseEnter={e=>e.target.style.transform='scale(1.05)'} onMouseLeave={e=>e.target.style.transform='scale(1)'}>🎯 JOIN GAME!</button>
            <style>{`@keyframes pulse { 0%, 100% { box-shadow: 0 12px 35px rgba(16,185,129,0.5); } 50% { box-shadow: 0 12px 50px rgba(16,185,129,0.8); } } @keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-15px); } }`}</style>
          </div>
        ):activeHunt && !activeHunt.hunt_started && playerInLobby?(
          <div style={{background:'rgba(255,255,255,0.98)',borderRadius:'25px',padding:'40px',boxShadow:'0 15px 50px rgba(0,0,0,0.3)',textAlign:'center'}}>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:'20px'}}>
              <h2 style={{fontSize:'28px',fontWeight:'bold',margin:0,color:'#333'}}>🎮 Lobby</h2>
              <button onClick={leaveLobby} style={{padding:'10px 20px',background:'#ef4444',color:'white',border:'none',borderRadius:'10px',fontSize:'14px',fontWeight:'600',cursor:'pointer'}}>Leave</button>
            </div>
            <p style={{fontSize:'16px',color:'#666',marginBottom:'25px'}}>Waiting for admin to start...</p>
            
            {gameActive&&<div style={{position:'relative',height:'350px',background:'linear-gradient(135deg,#e0f2fe 0%,#bae6fd 100%)',borderRadius:'20px',marginBottom:'25px',overflow:'hidden',border:'3px solid #667eea'}}>
              <div style={{position:'absolute',top:'15px',right:'15px',background:'white',padding:'12px 24px',borderRadius:'12px',fontSize:'20px',fontWeight:'bold',color:gameScore<0?'#ef4444':'#667eea',boxShadow:'0 4px 12px rgba(0,0,0,0.1)',zIndex:10}}>🏆 {gameScore}</div>
              <div style={{position:'absolute',top:'15px',left:'15px',color:'white',fontSize:'14px',fontWeight:'600',background:'rgba(0,0,0,0.4)',padding:'8px 16px',borderRadius:'8px'}}>Tap to catch! Miss = -5</div>
              {fallingItems.map(item=><div key={item.id} onClick={()=>catchItem(item.id)} style={{position:'absolute',left:`${item.x}%`,top:`${item.y}%`,fontSize:'48px',cursor:'pointer',transition:'top 0.05s linear',filter:'drop-shadow(0 2px 4px rgba(0,0,0,0.2))',userSelect:'none'}}>{item.emoji}</div>)}
            </div>}
            
            <div style={{background:'linear-gradient(135deg,#f0fdf4 0%,#dcfce7 100%)',borderRadius:'15px',padding:'20px',border:'3px solid #10b981'}}>
              <p style={{fontSize:'16px',fontWeight:'600',color:'#059669',marginBottom:'10px'}}>👥 Players Ready ({players.length})</p>
              <div style={{display:'flex',flexWrap:'wrap',gap:'8px',justifyContent:'center'}}>
                {players.map(p=><div key={p.id} style={{background:'white',padding:'8px 14px',borderRadius:'8px',fontSize:'14px',fontWeight:'600',color:'#333',display:'flex',alignItems:'center',gap:'6px'}}><span style={{fontSize:'20px'}}>{p.pet}</span>{p.display_name}</div>)}
              </div>
            </div>
          </div>
        ):isHuntComplete?(
          <div style={{background:'rgba(255,255,255,0.98)',borderRadius:'25px',padding:'60px 40px',boxShadow:'0 15px 50px rgba(0,0,0,0.3)',textAlign:'center',position:'relative',overflow:'hidden'}}>
            {showWinAnimation&&<div style={{position:'absolute',inset:0,pointerEvents:'none'}}>
              {[...Array(50)].map((_,i)=><div key={i} style={{position:'absolute',left:`${Math.random()*100}%`,top:'-10%',fontSize:'24px',animation:`fall ${2+Math.random()*3}s linear infinite`,animationDelay:`${Math.random()*2}s`}}>{'🎉🎊⭐💎🏆'[Math.floor(Math.random()*5)]}</div>)}
            </div>}
            <div style={{fontSize:'120px',marginBottom:'30px',animation:'bounce 1s ease-in-out'}}>🏆</div>
            <h2 style={{fontSize:'42px',fontWeight:'bold',marginBottom:'15px',background:'linear-gradient(135deg,#10b981 0%,#059669 100%)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',animation:'glow 2s ease-in-out infinite'}}>🎉 VICTORY! 🎉</h2>
            <p style={{fontSize:'22px',color:'#666',marginBottom:'30px'}}>You found all {activeHunt.total_clues} clues! Amazing work! 🎊</p>
            <div style={{display:'flex',justifyContent:'center',flexWrap:'wrap',gap:'10px',marginTop:'30px'}}>
              {[...Array(activeHunt.total_clues)].map((_,i)=><div key={i} style={{fontSize:'48px',animation:`spin ${1+Math.random()}s ease-in-out infinite`}}>🧩</div>)}
            </div>
            <style>{`
              @keyframes fall { 0% { top: -10%; opacity: 1; } 100% { top: 110%; opacity: 0.3; transform: rotate(720deg); } }
              @keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-20px); } }
              @keyframes glow { 0%, 100% { filter: brightness(1); } 50% { filter: brightness(1.3); } }
              @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
            `}</style>
          </div>
        ):activeHunt && activeHunt.hunt_started?(
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
        ):(
          <div style={{background:'rgba(255,255,255,0.98)',borderRadius:'25px',padding:'60px 40px',boxShadow:'0 15px 50px rgba(0,0,0,0.3)',textAlign:'center'}}>
            <div style={{fontSize:'100px',marginBottom:'30px'}}>⏳</div>
            <h2 style={{fontSize:'32px',fontWeight:'bold',marginBottom:'15px',color:'#333'}}>Loading...</h2>
            <p style={{fontSize:'18px',color:'#666'}}>Please wait...</p>
          </div>
        )}
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
