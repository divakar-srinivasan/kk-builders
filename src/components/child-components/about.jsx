import bg1 from '../../assets/5.jpg'
function About() {
  return (
    <div className="w-full h-screen bg-cover bg-center flex flex-col items-center justify-center" style={{ backgroundImage: `url(${bg1})` }}>
      <h1 className="text-white text-3xl font-bold">About Page</h1>
    </div>
  );
}

export default About;
