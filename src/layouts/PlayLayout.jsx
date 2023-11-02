const PlayLayout = ({children}) => {
  return (
    <main className="bg-white w-[270px] sm:w-[400px] md:w-[900px] mx-auto h-full border-r-8 border-secondary font-semibold ">
        {children}
    </main>
  )
}

export default PlayLayout