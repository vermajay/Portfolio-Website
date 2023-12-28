import {useState} from 'react'
import SectionWrapper from '../hoc'
import {toast} from 'react-hot-toast'

const CONTACT_US_API_URL = "http://localhost:4000/reach/contact"

const Contact = () => {
  const [form, setForm] = useState({
    name:'',
    email:'',
    message:'',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setForm({ ...form, [name]: value });
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      setLoading(true);

      await fetch(CONTACT_US_API_URL, {
        method: "POST",
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      }).then((response) => response.json())
      .then((json) => console.log(json));

      setForm({
        name:'',
        email:'',
        message:'',
      })
      toast.success("Thank you! I will get back to you soon");

      setLoading(false);
    }
    catch(error){
      console.log("Error in sending message-> ", error.message);
      toast.error("Oops! Your message went to space")
      setLoading(false);
    }
  }

  return (
    <div className='mt-20 p-4 flex flex-col xl:flex-row xl:gap-14 gap-10' id='contact'>

      <p className="text-secondary font-bold md:text-[45px] sm:text-[35px] xs:text-[25px] text-[33px]">
        Have a project in mind or just want to say hello?
      </p>

      <form
        onSubmit={handleSubmit}
        className='flex flex-col gap-6 w-full'
      >
        {/* name */}
        <label className='flex flex-col'>
          <input
            type='text'
            name='name'
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            className='bg-[#cecccc] py-4 px-6 placeholder:text-secondary 
            text-secondary rounded-lg outline-none border-none font-medium'
          />
        </label>

        {/* email */}
        <label className='flex flex-col'>
          <input
            type='email'
            name='email'
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email Address"
            className='bg-[#cecccc] py-4 px-6 placeholder:text-secondary 
            text-secondary rounded-lg outline-none border-none font-medium'
          />
        </label>

        {/* message */}
        <label className='flex flex-col'>
          <textarea
            rows='4'
            name='message'
            value={form.message}
            onChange={handleChange}
            placeholder="I am contacting you about . . . "
            className='bg-[#cecccc] py-4 px-6 placeholder:text-secondary 
            text-secondary rounded-lg outline-none border-none font-medium'
          />
        </label>

        <button className='bg-gradient-to-r from-[#00c6ff] to-[#0072ff] py-3 px-8 outline-none w-fit text-white font-bold shadow-md
        hover:shadow-primary rounded-xl transition-all duration-200'>
          {loading ? 'Shooting...' : 'Shoot'}
        </button>
      </form>
    </div>  
  )
}

export default SectionWrapper(Contact)