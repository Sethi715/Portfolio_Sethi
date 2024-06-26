import './Contact.css'
import theme_pattern from './../../assets/theme_pattern.svg'
import mail_icon from './../../assets/mail_icon.svg'
import call_icon from './../../assets/call_icon.svg'
import location_icon from './../../assets/location_icon.svg'

const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "589d011c-c14a-43a9-8ef3-8cebdf699e95");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert("Email sent successfully");
        }
      };

  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
            <img src={theme_pattern} />
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>Currently available to take new projects.So feel free to contact.</p>
                <div className="contact-details">
                    <img src={mail_icon} /> <p>tejasv.sethi715@gmail.com</p>
                </div>
                <div className="contact-details">
                    <img src={call_icon} /> <p>+91-9710900384</p>
                </div>
                <div className="contact-details">
                    <img src={location_icon} /> <p>Faridabad, India</p>
                </div>
            </div>
            <form onSubmit={onSubmit} className='contact-right'>
                <label htmlFor=''>Your Name</label>
                <input type='text' placeholder='Enter your name' name='name' />
                <label htmlFor=''>Your Email</label>
                <input type='email' placeholder='Enter your email' name='email' />
                <label htmlFor=''>Your Message</label>
                <textarea name='message' rows='8' placeholder='Enter your message' />
                <button  type='submit' className="contact-submit">Submit now</button>

            </form>
        </div>
    </div>
  )
}

export default Contact