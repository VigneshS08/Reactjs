import React from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
function Home2() {
  return (
    // <div className='mx-auto max-w-screen-xl'>
    //     <section className='flex justify-between items-center mt-4'>
    //         <h1 className='text-7xl font-bold p-8'>Blog.</h1>
    //         <p>A statically generated blog example using Next.js and WordPress.</p>
    //     </section>
    //     <section className='md:grid md:grid-cols-2'>
    //         <div className='text-6xl text-semibold leading-tight'>
    //             <p>From Server-side Rendering to Static Generation</p>
    //         </div>
    //         <div>
    //             <p className='text-md'>
    //                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid dubitas igitur mutare principia naturae? Ita multo sanguine profuso in laetitia et in victoria est mortuus. Omnia contraria, quos etiam insanos esse vultis. Hinc ceteri particulas arripere conati suam quisque videro voluit afferre sententiam. Quis non odit sordidos, vanos, leves, futtiles? Quasi ego id curem, quid ille aiat aut neget.
    //             </p>
    //         </div>
    //     </section>
    // </div>
    <>
      <section className="mx-auto max-w-screen-md">
        <Card className="border-0">
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
            <CardAction>Card Action</CardAction>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      </section>
      <section className="mx-auto max-w-screen-md mt-8">
        <h1 className="text-2xl font-bold">My Portfolio</h1>
        <p className="text-md mt-9">  
          I'm a Vim enthusiast and tab advocate, finding unmatched efficiency in
          Vim's keystroke commands and tabs' flexibility for personal viewing
          preferences. This extends to my support for static typing, where its
          early error detection ensures cleaner code, and my preference for dark
          mode, which eases long coding sessions by reducing eye strain.
        </p>
      </section>
    </>
  );
}

export default Home2;
