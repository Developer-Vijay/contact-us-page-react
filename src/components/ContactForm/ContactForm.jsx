import React, { useState } from 'react'
import styles from './ContactForm.module.css';
import Buttons from '../Buttons/Buttons';
import {MdMessage} from 'react-icons/md';
import {FaPhoneAlt} from 'react-icons/fa';
import {HiMail} from 'react-icons/hi';



const ContactForm = () => {

    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [text,setText]=useState("");


    const onSubmit = (event) => {
        
        event.preventDefault();

        setName(event.target[0].value);
        setEmail(event.target[1].value);
        setText(event.target[2].value);


        console.log("name",name );
        console.log("email", email);
        console.log("text",text);

    }

    return (
        <section className={`${styles.container}`}>
            <div className={styles.contact_form}>
                <div className={styles.top_btn}>
                    <Buttons text="VIA SUPPORT CHAT" icon= {<MdMessage fontSize="24px"/>}/>
                    <Buttons
                        text="VIA CALL"
                        icon=
                        {<FaPhoneAlt fontSize="24px"/>}/>
                </div>
                <Buttons
                    isOutline={true}
                    text="VIA EMAIL FORM"
                    icon=
                    {<HiMail fontSize="24px"/>}/>

                <form onSubmit={onSubmit}>
                    <div className={styles.form_controller}>
                        <label htmlFor='name'>Name</label>
                        <input type='text'></input>
                    </div>
                    <div className={styles.form_controller}>
                        <label htmlFor='email'>Email</label>
                        <input type='email'></input>
                    </div>
                    <div className={styles.form_controller}>
                        <label htmlFor='text'>Text</label>
                        <textarea name='text' rows="8"/>
                    </div>
                    <div
                        style={{
                        display: "flex",
                        justifyContent: "end"
                    }}>
                        <Buttons
                            isOutline={false}
                            text="SUBMIT BUTTON"
                            icon=
                            {<HiMail fontSize="24px"/>}/>
                    </div>

                    <div>
                        {
                            name + " " + email + " " + text
                        }
                    </div>

                </form>

            </div>
            <div className={styles.contact_image}>
                <img src=" /images/madam.svg" alt="contact-us"/>
            </div>
        </section>
    );
}

export default ContactForm