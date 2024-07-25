
function App() {
  return (
    <div className="w-3/4 m-auto">
      <div className="mt-20">
        {data.map((d) =>(
          <div className="bg-white h-[450px] text-black rounded-xl">
            <div className="h-56 rounded-t-xl bg-indigo-500 flex justify-center items-ceter">
              <img src={d.img} alt="" className="h-44 w-44 rounded-full"/>
            </div>
            <div className="flex flex-col justify-center items-center gap-4 p-4">
              <p className="text-xl font-semibold">{d.name}</p>
              <p>{d.review}</p>
              <button className="bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl">connect</button>
              </div>
            </div>
        ))}
      </div>

    </div>  
  );
}

const data=[
  {
    name:`Ram charan`,
    img:`/Student/1.jpg`,
    review:`He acted in many films.I like songs in orange movie.`
  },
  {
    name:`Devarakonda`,
    img:`/Student/2.jpg`,
    review:`He acted in many films.I like songs in orange movie.`
  },
  {
    name:`cherry`,
    img:`/Student/3.jpg`,
    review:`He acted in many films.I like songs in orange movie.`
  },
  {
    name:`Alia Bhatt`,
    img:`/Student/4.jpg`,
    review:`She acted in many films.I like the movie Ganguhai.`
  },
  {
    name:`Prabhas`,
    img:`/Student/5.jpg`,
    review:`He acted in many films.He was pan India star.`
  },
  {
    name:`Ranbir kapoor`,
    img:`/Student/6.jpg`,
    review:`He acted in many films.I don't know his movies except animal.`
  },
  {
    name:`Trisha`,
    img:`/Student/7.jpg`,
    review:`She acted in many films.She is my favourite herione.`
  },
  {
    name:`Katrina kaif`,
    img:`/Student/8.jpg`,
    review:`He acted in many films.I like songs in orange movie`
  },
  {
    name:`salman`,
    img:`/Student/9.jpg`,
    review:`He acted in many films.I like mahanati of him.`
  },
  {
    name:`Thalapathy`,
    img:`/Student/10.jpg`,
    review:`He acted in many films.His movies are super hit.`
  }

]
export default App;
