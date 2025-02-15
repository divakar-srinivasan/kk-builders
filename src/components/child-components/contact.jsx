import img1 from '../../assets/1.jpg'
function Contact() {
  return (
    <div
      className="w-full h-screen bg-cover bg-center flex flex-col items-center justify-center"
      style={{ backgroundImage: `url(${img1})` }}
    >
      <h1 className="text-white text-3xl font-bold">Contact Page</h1>
    </div>
  );
}

export default Contact;
