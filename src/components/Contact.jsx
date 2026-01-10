import React from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone, FaTwitter } from 'react-icons/fa'
const Contact = () => {








const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "17922414-f7e1-4d22-8d27-c57fed0d2948");

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
            alert(res.message);
        }
    };








    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }
            }
            transition={{ duration: 1, ease: 'easeInOut' }}
            viewport={{ once: false, amount: 0.2 }}
            id='contact'
            className='py-20 bg-dark-200'
        >

            <div className='container mx-auto px-6'>
                <h2 className='text-3xl font-bold text-center mb-4'>
                    Get In
                    <span className='text-purple'>Touch</span>
                </h2>
                <p className='text-gray-400 text-center max-w-2xl mx-auto
                 mb-16'>Feel free to reach out if you want to collaborate with me, or simply have a chat.</p>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl
                mx-auto'>
                    {/* contact form */}
                    <div>
                        <form onSubmit={onSubmit} type="submit" className='space-y-6'>
                            <div>
                                <label htmlFor="" className='block
                                 text-gray-300'>Your Name</label>
                                <input type="text"
                                    className='w-full bg-dark-300 border
                                     border-dark-400 rounded-lg px-4 py-3' name='name' required
                                     />
                            </div>
                            <div>
                                <label htmlFor="" className='block
                                 text-gray-300'>Email Address</label>
                                <input type="email"
                                    className='w-full bg-dark-300 border
                                     border-dark-400 rounded-lg px-4 py-3'name='email' required
                                     />
                            </div>



                            <div>
                                <label htmlFor="" className='block
                                 text-gray-300'>Phone</label>
                                <input  type="text"
                                    className='w-full bg-dark-300 border
                                     border-dark-400 rounded-lg px-4 py-3' name='phone' required
                                    />
                            </div>




                            <div>
                                <label htmlFor="" className='block
                              
                                 text-gray-300'>Your Message</label>
                                <input  type="text"
                                    className='w-full h-40 bg-dark-300 border
                                     border-dark-400 rounded-lg px-4 py-3 outline-none' name='message' required
                                    />
                                    
                            </div>
                            
                            <button type='submit' className='w-full px-6 py-3
                            bg-purple rounded-lg font-medium hover:bg-purple-700
                            transition duration-300 cursor-pointer'>
                                Send
                            </button>

                        </form>




                    </div>
                    {/* Contact Information */}
                    <div className='space-y-8'>
                        <div className='flex items-start'>
                            <div className='text-purple text-2xl mr-4'>
                                <FaMapMarkerAlt />
                            </div>
                            <div>
                                <h3 className='text-lg font-semibold mb-2'>Location</h3>
                                <p className='text-gray-400'>Amritsar, Punjab (INDIA)</p>
                            </div>
                        </div>

                        <div className='flex items-start'>
                            <div className='text-purple text-2xl mr-4'>
                                <FaEnvelope />
                            </div>
                            <div>
                                <h3 className='text-lg font-semibold mb-2'>Email</h3>
                                <p className='text-gray-400'>ujjawalsingh.devv@gmail.com</p>
                            </div>
                        </div>


                        <div className='flex items-start'>
                            <div className='text-purple text-2xl mr-4'>
                                <FaPhone />
                            </div>
                            <div>
                                <h3 className='text-lg font-semibold mb-2'>Phone</h3>
                                <p className='text-gray-400'>(+91)9113796730</p>
                            </div>
                        </div>

                        <div className='pt-4'>
                            <h3 className='text-lg font-semibold mb-4'>Follow Me</h3>
                            <div className='flex space-x-4'>
                                <a href='https://github.com/ujjawalsingh30' className='w-12 h-12 rounded-full
                                bg-dark-300 flex items-center justify-center
                                text-purple hover:bg-purple hover:text-white
                                transition duration-300 '>
                                    <FaGithub />
                                </a>


                                <a href='https://www.linkedin.com/in/ujjawal-singh11?' className='w-12 h-12 rounded-full
                                bg-dark-300 flex items-center justify-center
                                text-blue hover:bg-blue hover:text-white
                                transition duration-300 '>
                                    <FaLinkedin />
                                </a>


                                <a href='https://x.com/singhsahab5090' className='w-12 h-12 rounded-full
                                bg-dark-300 flex items-center justify-center
                                text-blue hover:bg-blue hover:text-white
                                transition duration-300 '>
                                    <FaTwitter />
                                </a>


                                <a href='https://www.instagram.com/ujjawal_singh___/' className='w-12 h-12 rounded-full
                                bg-dark-300 flex items-center justify-center
                                text-pink hover:bg-pink hover:text-white
                                transition duration-300 '>
                                    <FaInstagram />
                                </a>



                            </div>


                        </div>


                    </div>
                </div>
            </div>

        </motion.div >
    )
}

export default Contact
