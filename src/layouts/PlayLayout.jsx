import { IconBrightnessDown, IconMoonFilled } from "@tabler/icons-react";
import { useEffect, useState } from "react"

const PlayLayout = ({children}) => {

  const getInitialTheme = () => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  };
  
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(()=>{
    if (theme==="dark") {
      document.querySelector('html').classList.add('dark')
    }else{
      document.querySelector('html').classList.remove('dark')
    }
  }, [theme])

  const handleChangeTheme=()=>{
    setTheme(prevTheme=> prevTheme==="light" ? "dark" : "light")

  }

  return (
    <main className="bg-white w-[270px] sm:w-[400px] md:w-[900px] mx-auto h-full border-r-8 border-secondary font-semibold dark:bg-neutral-500">
        {children}
        <button className="py-2 px-4 rounded bg-slate-400 dark:bg-neutral-600 top-10 left-20 dark:text-white dark:hover:bg-slate-500 hover:bg-slate-300 transition-colors fixed" onClick={handleChangeTheme}>
      {theme === "dark" ? <IconBrightnessDown />  : <IconMoonFilled />}
    </button>
    </main>
  )
}  

export default PlayLayout