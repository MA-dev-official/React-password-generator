import { useState ,useCallback, useEffect } from 'react'


function App() {
  const [password, setPassword] = useState('hello')
  const [length, setLength] = useState(4)
  const [numAllow, setNumAllow] = useState(false)
  const [charAllow, setCharAllow] = useState(false)

  const generatePassword = useCallback(() => {

let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
if(numAllow) str += '0123456789'
if(charAllow) str += '!@#$%^&*()_+[]{}|;:,.<>?'
let pass = ''
for (let i = 0; i < length; i++) {
  pass += str.charAt(Math.floor(Math.random() * str.length));
}
setPassword(pass);
  }, [length, numAllow, charAllow]);


  useEffect(() => {
    generatePassword();
  }, [length, numAllow, charAllow, generatePassword]);
  return (
    <>
  <div className='flex flex-col items-center justify-center  bg-gray-100 w-[95%] md:w-[70%] mx-auto p-4 my-4 rounded-lg shadow-lg'>
    <h1 className='text-2xl font-bold mb-4'>Password Generator</h1>
    <div className='flex flex-col items-center justify-center w-full'>
      <input type="text" value={password} readOnly className=" bg-white p-2 rounded-lg  w-full mb-4 text-orange-500" />
    </div>
    <div className='flex items-center justify-between flex-col gap-y-3 md:flex-row w-full '>
      <div className='flex items-center justify-center gap-2 ' >
      <label className='text-md '>Length:{length}</label>
      <input type="range" value={length} min={4} max={12} onChange={(e) => setLength(e.target.value)} className=" bg-white p-2 rounded-lg   " />
      </div>

      <div className='flex items-center justify-center gap-2 ' >
      <label className='text-md '>Numbers:</label>
      <input type="checkbox" checked={numAllow} onChange={(e) => setNumAllow((prev) => !prev)} className=" bg-white p-2 rounded-lg   " />
      </div>
    
    <div className='flex items-center justify-center gap-2 ' >
      <label className='text-md '>Characters:</label>
      <input type="checkbox" checked={charAllow} onChange={(e) => setCharAllow((prev) => !prev)} className=" bg-white p-2 rounded-lg   " />
    </div>

    </div>
  </div>
    </>
  )
}

export default App
