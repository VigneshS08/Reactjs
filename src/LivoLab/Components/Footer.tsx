import Light from "../../assets/light.png";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <div>
        <section className="rounded-t-[25px] bg-[#2E2E2E]">
            <div className="mx-auto max-w-screen-xl py-9 text-white lg:flex lg:justify-between lg:items-center px-3">
                <div>
                    <img src={Light} alt="LivoLab" className="h-20 w-70"/>
                    <p className="text-md font-semibold mt-3">Preventive Healthcare. Personalized. Guaranteed.</p>
                    <p className="text-md mt-3 lg:max-w-160">Protecting you from end-stage diseases through AI-powered risk assessments, doctor consultations, and a payout-backed care plan.</p>
                </div>
                <div className="flex lg:gap-20 justify-between">
                    <div className="py-10">
                        <h3 className="text-xl font-semibold">Quick Links</h3>
                        <ul className="mt-3 flex flex-col gap-2">
                            <li>Membership Plans</li>
                            <li>Diseases Plans</li>
                            <li>FAQ's</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                    <div className="py-10">
                        <h3 className="text-xl font-semibold">Contact Us</h3>
                        <ul className="mt-3">
                            <li className="flex gap-3 items-center p-1"><FaPhoneAlt /> +65 6980 2211 </li>
                            <li className="flex gap-3 items-center p-1"><CiMail/>hello@livolab.sg</li>
                            <li className="flex gap-3 max-w-50 p-1"><FaLocationDot className="text-2xl"/>LivoLab HQ,<br/>20 Collyer Quay, #23-01,Singapore 049319</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="border-t-2 border-gray-500">
                <div className="lg:mx-auto max-w-screen-xl py-2 text-white lg:flex lg:justify-between lg:items-center text-center">
                    <p className="text-sm">© {(new Date().getFullYear())} LivoLab Pte Ltd. All rights reserved.</p>
                    <ul className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-2 gap-3 mt-3">
                        <li>
                            <Link to="#">
                                LinkedIn
                            </Link>
                        </li>
                        <li>
                            <Link to="#">
                                Instagram
                            </Link>
                        </li>
                        <li>
                            <Link to="#">
                                Threads
                            </Link>
                        </li>
                        <li>
                             <Link to="#">
                                Facebook
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    </div>
  )
}

