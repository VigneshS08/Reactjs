import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "../components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import Avatar from "../assets/avatar.png";
import CardImage from "../assets/card.png";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { useRef } from "react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
export default function Home() {
    const swiperRef = useRef<any>(null);
  return (
    <div>
      <section className="lg:bg-[url(/home.png)] md:bg-[url(/home.png)] bg-grey-300 w-full h-screen flex items-center bg-center bg-cover">
        <div className="md:max-w-screen-md m-2 lg:m-0 md:px-20">
          <h1 className="lg:text-5xl text-3xl font-bold leading-snug">
            Redefining <span className="text-blue-600">Preventive</span>{" "}
            Healthcare. Powered by <span className="text-blue-600">AI</span>.
            Backed by <span className="text-blue-600">Doctors.</span>
          </h1>
          <p className="mt-4 text-black-600 text-xl lg:max-w-100 font-semibold">
            The First Health Plan That’s 100% Aligned With You
          </p>
          <Link
            className="mt-6 px-5 py-3 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow-md flex items-center gap-2 w-45"
            to="#"
          >
            Join as a Member <FaArrowRight />
          </Link>
        </div>
      </section>
      <section className="w-full bg-[#F4F6F9] py-16">
        <div className="max-w-screen-lg mx-auto px-6">
          <div className="text-center mb-12 p-7">
            <h2 className="text-4xl font-bold">How it Works?</h2>
            <p className="text-gray-600 mt-2">
              Join in Minutes, Stay Healthy for Years
            </p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-0 left-1/2 transform -translate-x-1/2 w-0.5 h-176 bg-gray-300"></div>
            <div className="space-y-12">
              <div className="flex flex-col lg:flex-row lg:items-center py-10">
                <div className="lg:w-1/2 lg:pr-8 text-center lg:text-left">
                  <h3 className="text-lg font-semibold">Sign up</h3>
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white font-bold z-10">
                    01
                  </div>
                </div>
                <div className="lg:w-1/2 lg:pl-8 text-center lg:text-left mt-4 lg:mt-0">
                  <p className="text-gray-600">
                    Create your account in just a few clicks to get started on
                    your preventive care journey.
                  </p>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row lg:items-center py-10">
                <div className="lg:w-1/2 lg:pr-8 text-center lg:text-left">
                  <h3 className="text-lg font-semibold">Doctor consultation</h3>
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-300 text-black font-bold z-10">
                    02
                  </div>
                </div>
                <div className="lg:w-1/2 lg:pl-8 text-center lg:text-left mt-4 lg:mt-0">
                  <p className="text-gray-600">
                    Connect with a licensed doctor to assess your current health
                    and risk profile.
                  </p>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row lg:items-center py-10">
                <div className="lg:w-1/2 lg:pr-8 text-center lg:text-left">
                  <h3 className="text-lg font-semibold">
                    Personalized Screening Plan
                  </h3>
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-300 text-black font-bold z-10">
                    03
                  </div>
                </div>
                <div className="lg:w-1/2 lg:pl-8 text-center lg:text-left mt-4 lg:mt-0">
                  <p className="text-gray-600">
                    Receive a tailored screening schedule based on your risk
                    tier and health needs.
                  </p>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row lg:items-center py-10">
                <div className="lg:w-1/2 lg:pr-8 text-center lg:text-left">
                  <h3 className="text-lg font-semibold">
                    Risk-Based Compliance Guarantee
                  </h3>
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-300 text-black font-bold z-10">
                    04
                  </div>
                </div>
                <div className="lg:w-1/2 lg:pl-8 text-center lg:text-left mt-4 lg:mt-0">
                  <p className="text-gray-600">
                    Stay on track with your plan—if you follow it and still fall
                    ill, we’ve got you covered.
                  </p>
                </div>
              </div>
            </div>
            <div className="text-center mt-12">
              <button className="px-6 py-3 border border-blue-600 text-blue-600 rounded-xl hover:bg-blue-600 hover:text-white transition">
                <span className="flex gap-2 items-center">
                  Join as a Member <FaArrowRight />
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="lg:mx-auto max-w-screen-xl sm:p-8 m-4 lg:m-0 md:m-0 md:py-[130px] lg:py-[130px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:px-3">
          <div className="sm:py-4">
            <h1 className="text-4xl font-semibold">
              The First Health Plan That’s 100% Aligned With You
            </h1>
          </div>
          <div>
            <p className="lg:text-2xl md:text-xl text-lg lg:leading-9 md:leading-10 lg:max-w-140 text-justify">
              Take control of your health today with personalized screening,
              early detection, and a money-back guarantee if we fail to protect
              you from end-stage disease.
            </p>
          </div>
        </div>
      </section>
      <section className="lg:mx-auto lg:max-w-screen-xl m-4 lg:m-0 md:m-0 py-[80px] md:py-[130px] lg:py-[130px]">
        <h1 className="text-4xl font-semibold">What Makes Us Different?</h1>
        <p className="mt-3">Why We’re Not Just Another Screening Plan</p>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-10 mt-8">
          <div>
            <Card className="relative bg-[url('/card-1.png')] bg-cover border-0 h-140">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold">
                  Personalized Plan
                </CardTitle>
              </CardHeader>
              <CardContent className="absolute bottom-4 left-4 right-4 bg-white/80 backdrop-blur-md rounded-xl shadow-md p-4">
                <p className="text-lg text-black-700">
                  AI-empowered, up-to-date, customized strategy based on your
                  current health status
                </p>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card className="relative bg-[url('/card-2.png')] bg-cover border-0 h-140">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold">
                  Free Test Always
                </CardTitle>
              </CardHeader>
              <CardContent className="absolute bottom-4 left-4 right-4 bg-white/80 backdrop-blur-md rounded-xl shadow-md p-4">
                <p className="text-lg text-black-700">
                  All recommended tests based on our strategy will be covered
                  under the membership
                </p>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card className="relative bg-[url('/card-3.png')] bg-cover border-0 h-140">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold">
                  Peace of Mind Guarantee
                </CardTitle>
              </CardHeader>
              <CardContent className="absolute bottom-4 left-4 right-4 bg-white/80 backdrop-blur-md rounded-xl shadow-md p-4">
                <p className="text-lg text-black-700">
                  Our mission is to keep you healthy but if something unexpected
                  happens, we’ll be there to support you
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section className="lg:bg-[url('/box.png')] md:bg-[url('/box.png')] bg-blue-600 w-full h-full flex bg-cover bg-no-repeat p-3 md:p-0 lg:p-0">
        <div className="lg:w-1/2"></div>
        <div className="lg:w-1/2 md:w-full sm:w-full lg:text-left sm:mt-4 mt-20">
          <h1 className="mt-[40px] text-4xl font-bold lg:max-w-120 leading-12 text-white sm:text-center md:text-center lg:text-left">
            Affordable Plans Based on Your Risk
          </h1>
          <p className="text-lg text-white lg:max-w-120 mt-3 lg:text-justify md:text-center sm:text-center">
            We don’t do one size fits all. Your membership cost is based on your
            health risk, with essential screenings always included in your tier.
          </p>
          <Card className="lg:max-w-xl md:max-w-md lg:mx-0 sm:mx-auto md:mx-auto bg-white border-0 my-10">
            <CardHeader className="gap-1.5">
              <CardDescription className="text-[#404040]">
                Starting at
              </CardDescription>
              <CardTitle className="text-2xl font-bold mt-0">SGD 60</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[#404040]">Includes</p>
              <ul className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 list-image-[url(/icon.png)] list-inside flex text-sm leading-8">
                <li className="align-middle">Health screening</li>
                <li className="justify-center items-center">
                  Online or in-clinic consultation
                </li>
                <li className="justify-center items-center">
                  Basic health screening
                </li>
                <li className="justify-center items-center">
                  Freebies post onboarding{" "}
                </li>
                <li className="justify-center items-center">
                  Regular reminders
                </li>
                <li className="justify-center items-center">
                  All tests - free
                </li>
                <li className="justify-center items-center">
                  Online or in-clinic consultation
                </li>
                <li className="justify-center items-center">
                  Online or in-clinic consultation
                </li>
                <li className="justify-center items-center">
                  Online or in-clinic consultation
                </li>
              </ul>
              <Link
                className="rounded-xl bg-blue-600 px-5 py-2.5 w-40 mt-6 text-sm font-medium text-white shadow-sm flex items-center gap-2"
                to="#"
              >
                View all Plans <FaArrowRight />
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>
      <section className="bg-white lg:px-0 p-3 m-0 md:py-[40px] lg:py-[80px]">
        <div className="lg:max-w-screen-xl lg:mx-auto">
          <div className="lg:flex lg:justify-between text-center lg:text-left md:text-center">
            <div>
              <h1 className="text-4xl font-semibold w-full">
                Real Stories. Real Impact.
              </h1>
              <p className="mt-3 lg:max-w-[850px]">
                Trusted by patients, doctors, and partners across Singapore.
              </p>
            </div>
            <div>
                <Button onClick={()=>swiperRef.current?.slidePrev()} className="border-0 bg-transparent"><IoIosArrowBack/></Button>
                <Button onClick={()=>swiperRef.current?.slideNext()}><IoIosArrowForward/></Button>
            </div>
          </div>
          <div className="relative w-full">
            <Swiper
              spaceBetween={50}
              slidesPerView={3}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => 
                swiperRef.current=swiper
              }
            >
              <SwiperSlide>
                <Card className="bg-white border-[1px] border-gray-200 rounded-xl my-10">
                  <CardHeader className="gap-1.5">
                    <CardContent className="lg:px-0">
                        <p className="text-[#000000] py-[40px]">Livolab bridges the gap between patients and quality care. The AI helps streamline screening, so I can focus on what matters most — treatment.</p>
                    </CardContent>
                    <CardTitle className="flex gap-2 items-center mt-0 py-[20px]">
                        <div>
                            <img src={Avatar} alt=""/>
                        </div>
                        <div>
                            Dr. Lim Wei Sheng
                            <p className="text-gray-400 text-sm font-normal mt-1">General Practitioner</p>
                        </div>
                    </CardTitle>
                  </CardHeader>
                </Card>
              </SwiperSlide>
              <SwiperSlide>
                <Card className="bg-white border-[1px] border-gray-200 rounded-xl my-10">
                  <CardHeader className="gap-1.5">
                    <CardContent className="lg:px-0">
                        <p className="text-[#000000]  py-[40px]">Livolab bridges the gap between patients and quality care. The AI helps streamline screening, so I can focus on what matters most — treatment.</p>
                    </CardContent>
                    <CardTitle className="flex gap-2 items-center mt-0 py-[20px]">
                        <div>
                            <img src={Avatar} alt=""/>
                        </div>
                        <div>
                            Dr. Lim Wei Sheng
                            <p className="text-gray-400 text-sm font-normal mt-1">General Practitioner</p>
                        </div>
                    </CardTitle>
                  </CardHeader>
                </Card>
              </SwiperSlide>
              <SwiperSlide>
                <Card className="bg-white border-[1px] border-gray-200 rounded-xl my-10">
                  <CardHeader className="gap-1.5">
                    <CardContent className="lg:px-0">
                        <p className="text-[#000000] py-[40px]">Livolab bridges the gap between patients and quality care. The AI helps streamline screening, so I can focus on what matters most — treatment.</p>
                    </CardContent>
                    <CardTitle className="flex gap-2 items-center mt-0 py-[20px]">
                        <div>
                            <img src={Avatar} alt=""/>
                        </div>
                        <div>
                            Dr. Lim Wei Sheng
                            <p className="text-gray-400 text-sm font-normal mt-1">General Practitioner</p>
                        </div>
                    </CardTitle>
                  </CardHeader>
                </Card>
              </SwiperSlide>
              <SwiperSlide>
               <Card className="bg-white border-[1px] border-gray-200 rounded-xl my-10">
                  <CardHeader className="gap-1.5">
                    <CardContent className="lg:px-0">
                        <p className="text-[#000000] py-[40px]">Livolab bridges the gap between patients and quality care. The AI helps streamline screening, so I can focus on what matters most — treatment.</p>
                    </CardContent>
                    <CardTitle className="flex gap-2 items-center mt-0 py-[20px]">
                        <div>
                            <img src={Avatar} alt=""/>
                        </div>
                        <div>
                            Dr. Lim Wei Sheng
                            <p className="text-gray-400 text-sm font-normal mt-1">General Practitioner</p>
                        </div>
                    </CardTitle>
                  </CardHeader>
                </Card>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 lg:px-0 lg:p-0 p-3 m-0 md:py-[40px] lg:py-[80px]">
        <div className="lg:max-w-screen-xl lg:mx-auto">
          <div className="lg:flex lg:justify-between text-center lg:text-left md:text-center">
            <div>
              <h1 className="text-4xl font-semibold w-full">
                Diseases We Cover
              </h1>
              <p className="mt-3 lg:max-w-[850px]">
                Our plan targets major illnesses, reduces risk through early
                detection, and offers a payout guarantee if we fail despite your
                compliance.
              </p>
            </div>
            <Button
              variant="outline"
              className="bg-transparent border-1 border-blue-500 text-blue-500 rounded-xl h-10 mt-4"
            >
              View All Diseases <FaArrowRight />
            </Button>
          </div>
          <div className="mt-10 lg:flex lg:justify-between">
            <ul className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 list-image-[url(/icon.png)] list-inside flex text-sm leading-9 gap-4">
              <li className="align-middle">
                <b className="text-xl font-bold">Colorectal Cancer</b>
                <p className="ml-6 mt-0">
                  Early screening can prevent most cases and save lives.
                </p>
              </li>
              <li className="justify-center items-center">
                <b className="text-xl font-bold">Prostate Cancer</b>
                <p className="ml-6">
                  A simple test detects silent risks before they spread.
                </p>
              </li>
              <li className="justify-center items-center">
                <b className="text-xl font-bold">Liver Cancer</b>
                <p className="ml-6">
                  Silent but deadly, early checks improve outcomes
                </p>
              </li>
              <li className="justify-center items-center">
                <b className="text-xl font-bold">Breast Cancer</b>
                <p className="ml-6">
                  Routine mammograms catch it early, when it’s most treatable.
                </p>
              </li>
              <li className="justify-center items-center">
                <b className="text-xl font-bold">Lung Cancer</b>
                <p className="ml-6">
                  Low-dose scans find tumors early, improving survival.
                </p>
              </li>
              <li className="justify-center items-center">
                <b className="text-xl font-bold">Stomach Cancer</b>
                <p className="ml-6">
                  Screening helps catch this hidden threat early.
                </p>
              </li>
            </ul>
            <Card className="border-0 bg-white px-10 text-center lg:text-left md:text-center mt-10 lg:mt-0">
              <CardHeader className="gap-1.5">
                <div className="flex justify-center lg:justify-start">
                  <img src={CardImage} alt="cardImage" />
                </div>
                <CardDescription className="text-[#404040] text-xl ">
                  Up to
                </CardDescription>
                <CardTitle className="text-4xl font-bold mt-0">60% </CardTitle>
              </CardHeader>
              <CardContent className="">
                <p className="text-[#404040] mt-0 lg:max-w-50">
                  risk reduction with consistent screening.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="lg:mx-auto max-w-screen-xl p-3 mt-6 lg:m-0 md:m-0 md:py-[130px] lg:py-[130px]">
        <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1">
          <div>
            <h1 className="lg:text-4xl text-xl font-semibold">
              Frequently Asked Questions
            </h1>
            <p className="mt-3">
              We’ve answered your top questions about how LivoLab works and
              benefits you.
            </p>
            <Button
              variant="outline"
              className="bg-blue-100 border-1 border-blue-500 text-blue-500 rounded-xl h-10 mt-4"
            >
              View All FAQs <FaArrowRight />
            </Button>
          </div>
          <div>
            <div className="grid grid-cols-1 gap-20 lg:mt-0 sm:mt-9">
              <Accordion
                type="single"
                collapsible
                className="w-full"
                defaultValue="item-1"
              >
                <AccordionItem value="item-1">
                  <AccordionTrigger className="lg:text-2xl sm:text-xl text-lg sm:text-lg md:text-xl py-6">
                    What is LivoLab and how does it work?
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance">
                    <p className="text-[15px] lg:text-xl md:text-md">
                      Our flagship product combines cutting-edge technology with
                      sleek design. Built with premium materials, it offers
                      unparalleled performance and reliability.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="lg:text-2xl sm:text-xl text-lg sm:text-lg md:text-xl py-6">
                    Why is preventive care important?
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance">
                    <p className="text-[15px] lg:text-xl md:text-md">
                      We offer worldwide shipping through trusted courier
                      partners. Standard delivery takes 3-5 business days, while
                      express shipping ensures delivery within 1-2 business
                      days.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="lg:text-2xl sm:text-xl text-lg sm:text-lg md:text-xl py-6">
                    What services does LivoLab offer?
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance">
                    <p className="text-[15px] lg:text-xl md:text-md">
                      We stand behind our products with a comprehensive 30-day
                      return policy. If you&apos;re not completely satisfied,
                      simply return the item in its original condition.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
