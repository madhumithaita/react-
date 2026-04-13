import Button from '../Button/Button.jsx'
import DropDown from '../DropDown/DropDown.jsx'

const ContactForm = () => {
  return (
    <section>
      <h3>Contact Us</h3>
      <p>Our Sales Team will reach out to you ASAP!</p>
   <form>

<label htmlFor="name">Name
<input/>
</label>


<label htmlFor="town">Your Home town
<DropDown/>
</label>

<label htmlFor="town">Where would you like to go?
<DropDown/>
</label>

<label htmlFor="name">Contact Number
<input/>
</label>
<Button/>
   </form>
   </section>
  )
}

export default ContactForm