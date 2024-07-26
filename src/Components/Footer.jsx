import { TfiEmail } from "react-icons/tfi";
import img1 from "../../src/images/wave (1).png"
import { IoCall } from "react-icons/io5";
import Swal from "sweetalert2";
const Footer = () => {
    return (
        <div className="bg-black">
            <footer className="footer p-10  text-white md:pl-40">

                <nav>
                    <aside>
                        <a className="flex items-center gap-0 "><img width="48" height="48" src="https://img.icons8.com/pulsar-gradient/48/commercial-development-management.png" alt="commercial-development-management" /><span className="text-xl text-white font-bold">ONE</span><span className="text-[#E49BFF] font-bold mt-0.5">BUILD</span></a>
                        <p>One build Industries Ltd.<br />Providing reliable tech since 2024</p>
                    </aside>
                </nav>
                <nav>
                    <h6 className="footer-title">Follow us</h6>
                    <a className="link link-hover" href="https://github.com/Mdafsarx" target="_blank">Github</a>
                    <a className="link link-hover" href="https://www.youtube.com/channel/UCfokMm6sYTLAP1_071QLrEA" target="_blank">Youtube</a>
                    <a className="link link-hover" href="https://www.linkedin.com/in/md-afsar-mahmud" target="_blank">Linkedin</a>
                   
                </nav>
                <nav>
                    <h6 className="footer-title">Contract</h6>
                    <a className="flex items-center gap-1 link link-hover pl-1" href="https://mail.google.com/mail/u/1/#inbox?compose=lqrsljcHgkWXjSfjPwcjTnfPmTGHccvcKWbmxkLPszVVpjHsTVqrnFxJPgJcLNpdhwPfrqZQwXKmkZjpp" target="_blank"><TfiEmail/>Email</a>
                    <a className="flex items-center gap-1 link link-hover pl-1" onClick={()=>{
                        Swal.fire({
                            
                            position: "center",
                            icon: "",
                            title: "📞01722877040",
                            showConfirmButton: false,
                            timer: 1500
                          });
                    }} target="_blank"><IoCall/>Call</a>
                </nav>
                <form onSubmit={(e)=>{
                    e.preventDefault()
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Thank you for subscribed",
                        showConfirmButton: false,
                        timer: 1500
                      });
                      e.target.reset()
                }}>
                    <h6 className="footer-title">Newsletter</h6>
                    <fieldset className="form-control w-80">
                        <label className="label">
                            <span className="text-white">Enter your email address</span>
                        </label>
                        <div className="join">
                            <input type="email" name="email" placeholder="username@site.com" className="input outline-none focus:outline-0  join-item text-black"  />
                            <button className="btn bg-[#7EA1FF] border-0 text-white hover:text-black join-item hover:bg-[#E49BFF]">Subscribe</button>
                        </div>
                    </fieldset>
                </form>

            </footer>
            {/* wave svg */}
            <div>
                <img src={img1} className="h-40 w-full" />
            </div>
        </div>
    );
};

export default Footer;