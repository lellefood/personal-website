import React from "react"
import SEO from "../components/seo"

import LatestPost from "../components/LatestPosts"
import Portfolio from "../components/Portfolio"

import me from "../images/me_400x400.jpg"
import "../css/global.css"
import "../css/background.css"

const IndexPage = () => (
  <div style={{ height: "100vh", maxHeight: "-webkit-fill-available" }}>
    <SEO title="Home" />
    <div className="flex" style={{ height: "100%", maxHeight: "-webkit-fill-available" }} id="main-section">
      <div className="lg:w-1/3 md:w-1/4 w-0">
      </div>
      <div className="lg:w-2/3 md:w-3/4 w-full flex justify-center items-start sm:items-center pt-10 px-6">
        <div className="bg-white rounded-lg max-w-xl">
          <div className="w-auto inline-block p-6 sm:p-8">
            <div className="flex items-center">
              <div className="rounded-full w-20 h-20 flex items-center">
                <img className="rounded-full shadow-inner" alt="me" style={{ filter: "grayscale(20%)" }} src={me} />
              </div>
              <div className="pl-6 flex items-center">
                <h1 className="font-sans text-3xl font-bold text-gray-800">Gabriele Pallaoro</h1>
              </div>
            </div>
            <div className="pt-4">
              <div className="flex items-center">
                <p className="font-sans text-gray-800 mb-0"><span role="img" aria-label="notebook">💻</span>&nbsp;&nbsp;full stack developer <a href="https://advisoreat.com" title="advisoreat">@AdvisorEat</a></p>
              </div>
              <div className="flex items-center pt-2">
                <p className="font-sans text-xs text-gray-700 mb-0"><a href="https://twitter.com/scusanonhocapit" title="twitter">twitter</a>, <a href="https://github.com/gallaoro" title="github">github</a></p>
              </div>
            </div>
            <LatestPost />
            <Portfolio />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 p-2">
        <p className="font-sans text-white text-sm mb-0">
          <a href="https://gatsbyjs.org" title="gatsby">gatsby</a>, <a href="https://tailwindcss.com/" title="tailwind">tailwind</a>, <a href="https://www.heropatterns.com/" title="heropatterns">heropatterns</a>, favicon by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a>
        </p>
      </div>
    </div>
  </div>
)

export default IndexPage
