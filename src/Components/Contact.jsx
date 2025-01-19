


const Contact = () => {
  
  return (
    <div id='contact' className='flex flex-col justify-center items-center bg-slate-950 w-full h-screen'>
      <h1 className=' text-3xl sm:text-6xl font-bold text-white text-center mb-10 font-raleway'>Contactez-moi</h1>
      
      <div className='text-white text-center  text-lg sm:text-xl'>
        Pour toute demande de contact, merci de remplir ce formulaire.
      </div>
      
      <form action="https://formsubmit.co/josue.kisa31@gmail.com" method="POST" className='grid max-w-96 p-auto mt-5'>
        <label htmlFor="name" className='text-slate-200'>Nom</label>
        <input type="text" id="name" name="name" required className='mb-4 sm:w-96'/>

        <label htmlFor="surname" className='text-slate-200'>Prénom</label>
        <input type="text" id="surname" name="surname" required className='mb-4 sm:w-96'/>

        <label htmlFor="email" className='text-slate-200'>Email</label>
        <input type="email" id="email" name="email" required className='mb-4 sm:w-96'/>

        <label htmlFor="message" className='text-slate-200'>Message</label>
        <textarea id="message" name="message" required className='mb-4 sm:w-96'></textarea>

        <input
          type="submit"
          value="Envoyer"
          className='inline-block text-slate-100 bg-yellow-500 hover:bg-yellow-400 rounded-lg p-4'
        />
      </form>
      
     
    </div>
  );
};

export default Contact;
