

const Faq = () => {
    return (
        <div className="px-16 py-16 -mt-6">
            <h1 className="text-center text-5xl font-bold mb-10 ml-10 ">Frequently Asked Questions</h1>
            <div className="collapse collapse-arrow bg-base-200 mb-3">
  <input type="radio" name="my-accordion-2" checked="checked" /> 
  <div className="collapse-title text-xl font-medium">
  DO YOU HAVE GUIDES/TOURS In?
  </div>
  <div className="collapse-content"> 
    <p>The answer is pretty much always YES! We have experienced local guides offering private tours in 188 countries around the world, and over 1500 cities. Chances are, we’ve got tours where you’re going. </p>
  </div>
</div>
<div className="collapse collapse-arrow bg-base-200 mb-3">
  <input type="radio" name="my-accordion-2" /> 
  <div className="collapse-title text-xl font-medium">
  HOW MUCH DOES IT COST?
  </div>
  <div className="collapse-content"> 
    <p>There's no single answer here, as it depends where in the world you’re going! All of the guides on ToursByLocals set their own prices for their tours, and those prices are all published on the site. If you don’t see the exact tour you want, a guide will customize one for you, and let you know the price.</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-base-200 mb-3">
  <input type="radio" name="my-accordion-2" /> 
  <div className="collapse-title text-xl font-medium">
  DO YOUR GUIDES OFFER SHORE EXCURSIONS?
  </div>
  <div className="collapse-content"> 
    <p>Yes! Our guides offer customizable shore excursions with private transportation, and we offer a "No One Left Behind" Guarantee that ensures you always make it back to your ship on time. If you haven't yet, try using our easy Shore Excursion Planner to find all the tours available at your ports of call!</p>
  </div>
</div>

<div className="collapse collapse-arrow bg-base-200 mb-3">
  <input type="radio" name="my-accordion-2" /> 
  <div className="collapse-title text-xl font-medium">
  ARE THE PRICES ON THE SITE PER-PERSON?
  </div>
  <div className="collapse-content"> 
    <p>No, they are listed as the total price for your group. So if a tour is listed as $400, and there are 4 of you traveling together, $400 is the total price you'll pay. (You’ll need to do the math yourself to come to the conclusion that it’s $100/person!) Sometimes you will notice that the price displayed is broken into a slightly different cost whether it's 2, 4, 6, 8, etc people. </p>
  </div>
</div>

<div className="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" /> 
  <div className="collapse-title text-xl font-medium">
  SHOULD WE TIP OUR GUIDE?
  </div>
  <div className="collapse-content"> 
    <p>No, there’s no need to leave a gratuity. All of our guides have set fair prices for their tours that mean they aren’t relying on tips for their income. The best tip you can leave is a thoughtful review of the tour!</p>
  </div>
</div>
        </div>
    );
};

export default Faq;