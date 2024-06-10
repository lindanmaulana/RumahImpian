import { useRef, useState } from "react"
import { RxEyeClosed, RxEyeOpen } from "react-icons/rx"
import { VscKey } from "react-icons/vsc"

const InputPassword = () => {
    const [state, setState] = useState(false)
    const passwordRef = useRef(null)
    
    const handlePassword = () => {
        setState(!state)
        
        {state ?  passwordRef.current.type = "password" : passwordRef.current.type = "text" }
    }
    
  return (
    <div className="flex px-5 py-1 border rounded-md border-white/40">
        <span className="self-center mr-2">
          <VscKey className="w-5 h-5 text-secondary" />
        </span>
        <input
          type="password"
          ref={passwordRef}
          placeholder="Insert Your Password"
          className="self-center bg-transparent outline-none text-secondary placeholder:text-xs cursor-white caret-secondary"
        />
        <button onClick={handlePassword} className="self-center">
          {state ? (
            <RxEyeOpen className="text-pink" />
          ) : (
            <RxEyeClosed className="text-secondary" />
          )}
        </button>
      </div>
  )
}

export default InputPassword
