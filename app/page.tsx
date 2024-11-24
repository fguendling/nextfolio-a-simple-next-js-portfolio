import Image from "next/image";
import { socialLinks } from "./config";

export default function Page() {
  return (
    <section>
      <a href={socialLinks.twitter} target="_blank">
        <Image
          src="/profile.png"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>

      <h1 className="mb-8 text-2xl font-medium tracking-tight">
        Welcome to my Portfolio!
      </h1>

      <div className="prose prose-neutral dark:prose-invert">
        <p>
          My name is Felix, I'm a DevOps Engineer, with prior experience as a Database Developer.
          In the past, I have also created a few web-based applications.
        </p>
         <p>
          I am using this site to provide some additional information about my experience and the projects that I have worked on in the last 10 years. 
          The main difference to my CV in the PDF format is that this site allows me to display the information per project, not by employer. 
        </p>
        <p>
          I may even update the Blog one day :) Stay tuned.
        </p>

      </div>
    </section>
  );
}
