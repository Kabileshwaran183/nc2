import React, { useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import ScrollReveal from './ScrollReveal'
import DealershipCard from './DealershipCard'

const DEALERSHIPS = [
  {
    name: 'Ultratech',
    logo: '/Bg/ultra.png',
    image: '/logo/Ultratech_India-Logo.png',
    para: "Authorised Dealer of UltraTech, India's No.1 Cement.",
    location: 'Karaikudi, Tamil Nadu',
    centerTitle: 'Authorised UltraTech Building Solutions',
    highlight: true,
  },
  {
    name: 'Birla',
    logo: '/Bg/WHIRE BG.png',
    image: '/logo/aditya-birla-logo.png',
    para: 'Authorised Dealer of Birla White and WallCare Putty.',
    location: 'Karaikudi, Tamil Nadu',
    centerTitle: 'Authorised Birla White Dealer',
  },
  {
    name: 'Myk Laticrete',
    logo: '/Bg/MYK BG.png',
    image: '/logo/myk.png',
    para: 'Authorised Dealer of MYK Laticrete.',
    location: 'Karaikudi, Tamil Nadu',
    centerTitle: 'Authorised MYK Laticrete Dealer',
  },
  {
    name: 'Fosroc',
    logo: '/Bg/FOSROC BG.png',
    image: '/assets/fosroc.jpg',
    para: 'Authorised Dealer of Fosroc.',
    location: 'Karaikudi, Tamil Nadu',
    centerTitle: 'Authorised Fosroc Dealer',
  },
  {
    name: 'Araldite',
    logo: '/Bg/ARALDITE BG.png',
    image: '/assets/araldite.jpg',
    para: 'Authorised Dealer of Araldite.',
    location: 'Karaikudi, Tamil Nadu',
    centerTitle: 'Authorised Araldite Dealer',
  },
  {
    name: 'Dr Fixit',
    logo: '/Bg/FIXIT BG.png',
    image: '/assets/dr fixit.jpg',
    para: 'Authorised Dealer of Dr Fixit.',
    location: 'Karaikudi, Tamil Nadu',
    centerTitle: 'Authorised Dr Fixit Dealer',
  },
]

const Dealership = () => {
  const [showAll, setShowAll] = useState(false)

  // Default active dealership
  const [activeDealership, setActiveDealership] = useState(
    DEALERSHIPS[0]
  )

  /*
    Default:
    Left  → Ultratech, Birla
    Right → MYK, Fosroc

    View All:
    Left  → Ultratech, Birla, MYK
    Right → Fosroc, Araldite, Dr Fixit
  */

  const leftDealerships = showAll
    ? DEALERSHIPS.slice(0, 3)
    : DEALERSHIPS.slice(0, 2)

  const rightDealerships = showAll
    ? DEALERSHIPS.slice(3, 6)
    : DEALERSHIPS.slice(2, 4)

  return (
    <section>
      <div
        className="top-container-1"
        id="Dealership"
      >

        {/* ==================================
            TOP CONTENT
        ================================== */}

        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">

          <ScrollReveal variant="fade-in">

            <span
              className="
                inline-block
                px-4
                py-1.5
                rounded-full
                bg-[#FFF200]/25
                text-[#8a7600]
                text-xs
                md:text-sm
                font-bold
                tracking-widest
                uppercase
                our-font
              "
            >
              Our Dealerships
            </span>

          </ScrollReveal>

          <ScrollReveal
            variant="fade-up"
            delay={100}
          >

            <h2
              className="
                mt-4
                text-2xl
                md:text-4xl
                font-bold
                text-gray-800
              "
            >
              Trusted Dealership Partners
            </h2>

          </ScrollReveal>

          <ScrollReveal
            variant="fade-up"
            delay={200}
          >

            <p
              className="
                mt-4
                text-sm
                md:text-base
                text-gray-600
                leading-relaxed
              "
            >
              For over 21 years, Natarajan and Co has been an
              authorised dealer for India's leading construction
              material brands, bringing trusted quality straight
              to Karaikudi.
            </p>

          </ScrollReveal>

        </div>


        {/* ==================================
            DEALERSHIP MAIN LAYOUT
        ================================== */}

        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-4
            gap-6
            lg:gap-8
            items-center
          "
        >


          {/* ==================================
              LEFT DEALERSHIP CARDS
          ================================== */}

          <div
            className="
              order-3
              lg:order-1
              flex
              flex-col
              gap-6
              h-full
            "
          >

            {leftDealerships.map(
              (dealership, index) => (

                <ScrollReveal
                  key={dealership.name}
                  variant="left"
                  delay={index * 120}
                  className="h-full"
                >

                  <div
                    onClick={() =>
                      setActiveDealership(dealership)
                    }
                    className={`
                      cursor-pointer
                      rounded-2xl
                      transition-all
                      duration-300
                      hover:-translate-y-1

                      ${
                        activeDealership.name ===
                        dealership.name

                          ? `
                            ring-2
                            ring-[#FFF200]
                            shadow-xl
                          `

                          : ''
                      }
                    `}
                  >

                    <DealershipCard
                      {...dealership}
                    />

                  </div>

                </ScrollReveal>

              )
            )}

          </div>


          {/* ==================================
              DYNAMIC CENTER CONTENT
          ================================== */}

          <div
            className="
              order-1
              lg:order-2
              md:col-span-2
            "
          >

            <ScrollReveal variant="scale">

              <div
                key={activeDealership.name}
                className="
                  relative
                  rounded-2xl
                  overflow-hidden
                  shadow-xl
                  border
                  border-gray-100
                  animate-[fadeUp_500ms_ease-out]
                "
              >


                {/* Dynamic Dealership Image */}

                <img
                  src={activeDealership.image}
                  alt={`${activeDealership.name} dealership`}
                  className="
                    w-full
                    h-64
                    md:h-80
                    lg:h-96
                    object-cover
                    animate-float
                    transition-all
                    duration-500
                  "
                />


                {/* Dark Gradient Overlay */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/80
                    via-black/10
                    to-transparent
                  "
                />


                {/* Active Dealership Logo */}

                <div
                  className="
                    absolute
                    top-5
                    left-5
                  "
                >

                  <div
                    className="
                      bg-white
                      rounded-xl
                      px-4
                      py-3
                      shadow-lg
                    "
                  >

                    <img
                      src={activeDealership.logo}
                      alt={`${activeDealership.name} logo`}
                      className="
                        h-10
                        md:h-12
                        w-auto
                        object-contain
                      "
                    />

                  </div>

                </div>


                {/* Active Dealership Information */}

                <div
                  className="
                    absolute
                    bottom-5
                    left-5
                    right-5
                    text-white
                  "
                >

                  <span
                    className="
                      inline-block
                      mb-2
                      px-3
                      py-1
                      rounded-full
                      bg-[#FFF200]
                      text-gray-900
                      text-xs
                      font-bold
                    "
                  >
                    Authorised Dealer
                  </span>


                  <h3
                    className="
                      font-bold
                      text-xl
                      md:text-2xl
                      our-font
                    "
                  >
                    {activeDealership.centerTitle}
                  </h3>


                  <p
                    className="
                      mt-2
                      text-xs
                      md:text-sm
                      text-gray-200
                    "
                  >
                    {activeDealership.para}
                  </p>


                  <p
                    className="
                      mt-2
                      text-xs
                      md:text-sm
                      text-gray-300
                    "
                  >
                    📍 {activeDealership.location}
                  </p>

                </div>

              </div>

            </ScrollReveal>

          </div>


          {/* ==================================
              RIGHT DEALERSHIP CARDS
          ================================== */}

          <div
            className="
              order-3
              lg:order-3
              flex
              flex-col
              gap-6
              h-full
            "
          >

            {rightDealerships.map(
              (dealership, index) => (

                <ScrollReveal
                  key={dealership.name}
                  variant="right"
                  delay={index * 120}
                  className="h-full"
                >

                  <div
                    onClick={() =>
                      setActiveDealership(dealership)
                    }
                    className={`
                      cursor-pointer
                      rounded-2xl
                      transition-all
                      duration-300
                      hover:-translate-y-1

                      ${
                        activeDealership.name ===
                        dealership.name

                          ? `
                            ring-2
                            ring-[#FFF200]
                            shadow-xl
                          `

                          : ''
                      }
                    `}
                  >

                    <DealershipCard
                      {...dealership}
                    />

                  </div>

                </ScrollReveal>

              )
            )}

          </div>

        </div>


        {/* ==================================
            VIEW ALL / SHOW LESS BUTTON
        ================================== */}

        <div
          className="
            text-center
            mt-10
            md:mt-14
          "
        >

          <button
            type="button"
            onClick={() =>
              setShowAll(
                (previousValue) =>
                  !previousValue
              )
            }
            className="
              button-all
              inline-flex
              items-center
              justify-center
              gap-2
              w-full
              sm:w-auto
              transition-all
              duration-300
              active:scale-95
              focus:outline-none
              focus-visible:ring-2
              focus-visible:ring-offset-2
              focus-visible:ring-[#FFF200]
            "
          >

            {showAll
              ? 'Show Less'
              : 'View All Dealerships'
            }


            <FaArrowRight
              className={`
                text-sm
                transition-transform
                duration-300

                ${
                  showAll
                    ? '-rotate-90'
                    : ''
                }
              `}
            />

          </button>

        </div>

      </div>
    </section>
  )
}

export default Dealership