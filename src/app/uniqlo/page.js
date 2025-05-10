import React from "react";
import Link from "next/link";
export default function Pack() {
  return (
    <div className="bg-white w-full text-black">
      <nav className="bg-white sticky z-2000 border-b border-gray-300 p-4 px-10 top-0 justify-between flex items-center w-full">
        <div className="flex-1 flex">
          <Link href="/Projects">
            <p className="py-1 border-b-1 w-fit text-black ">Back</p>
          </Link>
        </div>
        {/* <div className="w-full justify-center flex">
          <div className="bg-black text-white flex gap-10 justify-between items-center p-5 px-8 opacity-90 rounded-full">
            <a href="#" className="bg-white rounded-full text-black p-3">
              Understand
            </a>
            <a href="#">Problem</a>
            <a href="#">User Research</a>
            <a href="#">Design | Iteration</a>
            <a href="#">Handoff</a>
          </div>
        </div> */}
        <div className="flex-1 flex justify-end">
          <p className="py-1 border-b-1  text-black ">Next</p>
        </div>
      </nav>
      <div className="w-full h-[300px] flex justify-center border-b border-gray-300 items-end">
        <img
          src="/uniqlo/home.png"
          alt="uniqlo"
          className="w-[50%] h-[250px] border-2 border-black border-b-0 object-top object-cover"
        />
      </div>
      <div className="flex flex-col gap-3 px-[64px] py-[32px]">
        <h2 className="text-[32px] font-bold">Focused Redesign: UNIQLO</h2>
        <div className="flex flex-row gap-3">
          <p className="bg-black text-white w-fit px-5 py-1 rounded-full text-[16px]">
            UI/UX
          </p>
          <p className="bg-black text-white w-fit px-5 py-1 rounded-full text-[16px]">
            Frontend
          </p>
        </div>
      </div>
      <div className="text-black px-[64px] py-10 flex items-start border-b border-t border-gray-300 ">
        <div className="w-full flex flex-col gap-2">
          <h2 className="text-[21px]">Team</h2>
          <p className="text-gray-600 text-[14px]">One Product Manager</p>
          <p className="text-gray-600 text-[14px]">
            Three Mobile App Developers
          </p>
          <p className="text-gray-600 text-[14px]">Two UI/UX Researchers</p>
        </div>
        <div className="w-full flex items-center flex-col gap-2">
          <div className="flex flex-col gap-2">
            <h2 className="text-[21px]">My Role</h2>
            <p className="text-gray-600 text-[14px]">Conceptualization</p>
            <p className="text-gray-600 text-[14px]">Design and Wireframing</p>
            <p className="text-gray-600 text-[14px]">User Testing</p>
            <p className="text-gray-600 text-[14px]">Usability Testing</p>
            {/* <p className="text-gray-600 text-[14px]">A/B Testing</p> */}
          </div>
        </div>
        <div className="w-full flex items-center flex-col gap-2">
          <div className="flex flex-col gap-2">
            <h2 className="text-[21px]">Duration</h2>
            <p className="text-gray-600 text-[14px]">2 days</p>
          </div>
        </div>
      </div>
      <div className="px-30 flex gap-18 items-center py-10  justify-between">
        <div className="flex flex-col gap-5 w-[60%]">
          <h2 className="text-[21px] px-2 border-l-2 w-fit">Understand</h2>
          <h3 className="text-[24px] uppercase">
            Poor UX design - On a major eccomerce site?
          </h3>
          <p className="!leading-6 text-gray-700">
            As a college student who&apos;s into fashion, I shop a lot at stores
            like Uniqlo and GU. Recently, I went on the Uniqlo website to find a
            shirt that a friend of mine had. What should&apos;ve been a quick
            search ended up taking way longer than expected. That experience
            made me realize how difficult it can be to navigate Uniqlo&apos;s
            website. A lot of that has to do with the UI—things like small font
            sizes, poor color contrast, and awkward scrolling animations all
            make it harder than it should be to find what you&apos;re looking
            for.
          </p>
        </div>
      </div>
      <div className="p-5 flex items-center justify-center">
        <div className="flex flex-col gap-4 w-[60%]">
          <h2 className="text-[21px] namefont px-2 border-l-2 w-fit">
            Problem Statement
          </h2>
          <p className="!leading-6 text-gray-700">
            How can Uniqlo redesign their e-commerce site to make it easier and
            more enjoyable to use—without losing the clean, modern style that
            represents the brand?
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-3 px-30 py-[32px]">
        <h2 className="text-[21px] px-2 border-l-2 w-fit">User Research</h2>
        <p className="!leading-6 text-gray-700">
          I conducted a survey to understand the pain points of Uniqlo&apos;s
          website and to get insights on what features they would like to see.
        </p>
        <div className="flex justify-between py-5 border-b border-gray-300">
          <h3 className="text-[24px] uppercase">Pre-analysis</h3>
          <h3 className="text-[24px] uppercase">01</h3>
        </div>
        <h4 className="text-[21px]">Some things that Uniqlo does well</h4>
        <p className="!leading-6 text-gray-700">
          Uniqlo&apos;s website is clean and modern, with a consistent design
          language.
        </p>
        <p className="!leading-6 text-gray-700">
          Product pages are pretty good. You can see pricing, available sizes,
          and color options without much hassle.
        </p>
        <p className="!leading-6 text-gray-700">
          Colors are easy on the eye, following the 60-30-10 rule.
        </p>
        <h4 className="text-[21px]">Some things that Uniqlo could improve</h4>
        <p className="!leading-6 text-gray-700">
          The website is not user-friendly and lacks a consistent design
          language.
        </p>
        <p className="!leading-6 text-gray-700">
          Scrolling animations are awkward and make the website feel slow.
        </p>
        <p className="!leading-6 text-gray-700">
          No clear call to action buttons, and navigation is confusing.
        </p>
        <div className="flex justify-between py-5 border-b border-gray-300">
          <h3 className="text-[24px] uppercase">Competitive Analysis</h3>
          <h3 className="text-[24px] uppercase">02</h3>
        </div>
        <p className="!leading-6 text-gray-700">
          I looked at the websites of other popular clothing brands to see how
          they handle their e-commerce sites.
        </p>
        <h4 className="text-[21px]">Abercrombie & Fitch</h4>
        <p className="!leading-6 text-gray-700">
          Their homepage scrolls smoothly and takes you through sections like
          New Items, Bestsellers, and Seasonal Drops. It feels like an
          experience, not a chore.
        </p>
        <p className="!leading-6 text-gray-700">
          Clear call to action buttons and a consistent design language make it
          easy to find what you&apos;re looking for.
        </p>
        <h4 className="text-[21px]">H&M</h4>
        <p className="!leading-6 text-gray-700">
          H&M&apos;s website is clean and modern, with a consistent design
          language.
        </p>
        <p className="!leading-6 text-gray-700">
          The website is easy to navigate, with a clear structure and intuitive
        </p>
        <h4 className="text-[21px]">Hollister</h4>
        <p className="!leading-6 text-gray-700">
          Hollister&apos;s website is clean and modern, with a consistent design
          language.
        </p>
        <p className="!leading-6 text-gray-700">
          Uniqlo does not have an &quot;all&quot; button for any of their
          categories which can make it hard for users that are simply trying to
          go through a multitude of items.
        </p>
        <div className="flex justify-between py-5 border-b border-gray-300">
          <h3 className="text-[24px] uppercase">Redesign Proposal</h3>
          <h3 className="text-[24px] uppercase">03</h3>
        </div>
        <p className="!leading-6 text-gray-700">
          Make navigation easier: Add &quot;All [Category]&quot; links and
          better group items in dropdowns so users can find what they want
          faster.
        </p>
        <p className="!leading-6 text-gray-700">
          Fix the navbar: Use a solid or semi-transparent background so the
          navbar is always visible, no matter what image is behind it.
        </p>
        <p className="!leading-6 text-gray-700">
          Improve scrolling: Ditch the section-by-section scroll and let people
          browse naturally. Add a scroll bar or page indicator so users know
          where they are.
        </p>
        <p className="!leading-6 text-gray-700">
          Tweak font and colors: Slightly larger fonts and better contrast would
          help with readability and accessibility—without sacrificing the
          minimalist look.
        </p>
        <p className="!leading-6 text-gray-700">
          Search bar on top right. Desktop version had navigation at the bottom
          which is very unstandradized and is used usually for mobile.
        </p>
        <p className="!leading-6 text-gray-700">
          Made nav bar white to create contrast
        </p>
        <p className="!leading-6 text-gray-700">
          Added buttons to allow users to access clothing quickly
        </p>
        <p className="!leading-6 text-gray-700">
          Took inspiration from abercrombie&apos;s navbar to create an easy to
          understand navbar
        </p>
      </div>
      <div className="flex flex-col gap-3 px-30 py-[32px]">
        <h2 className="text-[21px] px-2 border-l-2 w-fit">
          Design & Iteration
        </h2>
        <div className="flex justify-between py-5 border-b border-gray-300">
          <h3 className="text-[24px] uppercase">Atomic Design</h3>
          <h3 className="text-[24px] uppercase">01</h3>
        </div>
        <div className="flex justify-between py-5 border-b border-gray-300">
          <h3 className="text-[24px] uppercase">Low-Fidelity Wireframe</h3>
          <h3 className="text-[24px] uppercase">02</h3>
        </div>
        <div className="flex justify-between py-5 border-b border-gray-300">
          <h3 className="text-[24px] uppercase">High-Fidelity Wireframe</h3>
          <h3 className="text-[24px] uppercase">03</h3>
        </div>
      </div>
      <div className="flex flex-col gap-3 px-30 py-[32px]">
        <h2 className="text-[21px] px-2 border-l-2 w-fit">
          Survey & Usability Testing
        </h2>
        <p className="!leading-6 text-gray-700">
          I conducted a survey to understand the pain points of Uniqlos website
          and to get insights on what features they would like to see.
        </p>
      </div>
      <div className="flex flex-col gap-3 px-30 py-[32px]">
        <h2 className="text-[21px] px-2 border-l-2 w-fit">Final Design</h2>
        <p className="!leading-6 text-gray-700">
          I conducted a survey to understand the pain points of Uniqlos website
          and to get insights on what features they would like to see.
        </p>
      </div>
    </div>
  );
}
