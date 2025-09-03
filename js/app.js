document.addEventListener("DOMContentLoaded", () => {
  const THUMB_DIR = "assets/thumbs/";

  // Helper to create entries
  const m = (title, link, file) => ({ title, link, file });

  // ===== FULL MOVIE LIST =====
  const movies = [
    m("28 Days Later", "https://dobby.site/movies/28-days-later-dot-dot-dot-2002?_u=hchh6mwu5k&_t=bq0t40&_rsrc=chrome/newtab", "28days.jpg"),
    m("28 Weeks Later", "https://dobby.site/movies/28-weeks-later-2007?_u=hchh6mwu5k&_t=bq0t40&_rsrc=chrome/newtab", "28weeks.jpg"),
    m("30 Days of Night", "https://dobby.site/movies/30-days-of-night-2007?pl=-1&_u=hchh6mwu5k&_t=bq0t40&_rsrc=chrome/newtab", "30days.jpg"),

    m("The Addams Family", "https://dobby.site/movies/the-addams-family-1991?pl=-1&_u=hchh6mwu5k&_t=33dp8k&_rsrc=chrome/newtab", "addams.jpg"),
    m("Addams Family Values", "https://dobby.site/movies/addams-family-values-1993?_rsrc=chrome/newtab&_t=33dp8k&_u=hchh6mwu5k&pl=-1", "addams2.jpg"),
    m("A Simple Favour", "https://dobby.site/movies/a-simple-favor-2018?_rsrc=chrome/newtab&_t=7gl997&_u=hchh6mwu5k&pl=-1", "simplefavour.jpg"),

    m("A.I. Artificial Intelligence", "https://dobby.site/movies/ai-artificial-intelligence-2001?pl=-1&_u=hchh6mwu5k&_t=bq0t40&_rsrc=chrome/newtab", "ai.jpg"),
    m("Alien (1979)", "https://dobby.site/movies/alien-1979?pl=-1&_u=hchh6mwu5k&_t=bq0t40&_rsrc=chrome/newtab", "alien.jpg"),
    m("Aliens (1986)", "https://dobby.site/movies/aliens-1986?pl=-1&_u=hchh6mwu5k&_t=bq0t40&_rsrc=chrome/newtab", "aliens.jpg"),
    m("Alien 3 (1992)", "https://dobby.site/movies/alien3-1992?pl=-1&_u=hchh6mwu5k&_t=bq0t40&_rsrc=chrome/newtab", "alien3.jpg"),
    m("Alien Resurrection (1997)", "https://dobby.site/movies/alien-resurrection-1997?pl=-1&_u=hchh6mwu5k&_t=bq0t40&_rsrc=chrome/newtab", "alien4.jpg"),
    m("Alien: Romulus (2024)", "https://dobby.site/movies/alien-romulus-2024?pl=-1&_u=hchh6mwu5k&_t=bq0t40&_rsrc=chrome/newtab", "romulus.jpg"),

    m("Angels in America", "https://dobby.site/shows/angels-in-america?_u=hchh6mwu5k&_t=e14tdp&_rsrc=chrome/newtab", "angels.jpg"),

    m("Batman (1989)", "https://dobby.site/movies/batman-1989?pl=-1&_u=hchh6mwu5k&_t=bq0t40&_rsrc=chrome/newtab", "batman.jpg"),
    m("Batman Returns (1992)", "https://dobby.site/movies/batman-returns-1992?pl=-1&_u=hchh6mwu5k&_t=bq0t40&_rsrc=chrome/newtab", "batman2.jpg"),
    m("Batman Forever (1995)", "https://dobby.site/movies/batman-returns-1992?pl=-1&_u=hchh6mwu5k&_t=bq0t40&_rsrc=chrome/newtab", "batmanforever.jpg"),
    m("The Batman (2022)", "https://dobby.site/movies/the-batman-2022?pl=-1&_u=hchh6mwu5k&_t=bq0t40&_rsrc=chrome/newtab", "thebatman.jpg"),

    m("Barb & Star Go to Vista Del Mar", "https://dobby.site/movies/barb-and-star-go-to-vista-del-mar-2021?_rsrc=chrome/newtab&_t=gcqrcb&_u=hchh6mwu5k&pl=-1", "barb.jpg"),
    m("Becky", "https://dobby.site/movies/becky-2020?_rsrc=chrome/newtab&_t=h5aqtn&_u=hchh6mwu5k&pl=-1", "becky.jpg"),
    m("The Wrath of Becky", "https://dobby.site/movies/the-wrath-of-becky-2023?pl=-1&_u=hchh6mwu5k&_t=h5aqtn&_rsrc=chrome/newtab", "becky2.jpg"),

    m("Black Swan", "https://dobby.site/list/Watch%20Later/55?_rsrc=chrome/newtab&_t=2tq1n7&_u=hchh6mwu5k&pl=-1", "blackswan.jpg"),
    m("Chocolat", "https://dobby.site/movies/chocolat-2000?pl=-1&_u=hchh6mwu5k&_t=n8hvit&_rsrc=chrome/newtab", "chocolat.jpg"),
    m("Coyote Ugly", "https://dobby.site/movies/coyote-ugly-2000?pl=-1&_u=hchh6mwu5k&_t=n8hvit&_rsrc=chrome/newtab", "coyote.jpg"),
    m("Clueless", "https://dobby.site/movies/clueless-1995?pl=-1&_u=hchh6mwu5k&_t=bq0t40&_rsrc=chrome/newtab", "clueless.jpg"),
    m("Crawl", "https://dobby.site/movies/crawl-2019?pl=-1&_u=hchh6mwu5k&_t=qgkarn&_rsrc=chrome/newtab", "crawl.jpg"),
    m("Cruel Intentions", "https://dobby.site/list/Watch%20Later/26?_rsrc=chrome/newtab&_t=4ar4fj&_u=hchh6mwu5k&pl=-1", "cruel.jpg"),
    m("Dark City", "https://dobby.site/list/Watch%20Later/27?_rsrc=chrome/newtab&_t=fse6bl&_u=hchh6mwu5k&pl=-1", "darkcity.jpg"),
    m("Dawn of the Dead (2004)", "https://dobby.site/movies/dawn-of-the-dead-2004?pl=-1&_u=hchh6mwu5k&_t=bq0t40&_rsrc=chrome/newtab", "dawn.jpg"),
    m("Dennis the Menace", "https://dobby.site/movies/dennis-the-menace-1993?_rsrc=chrome/newtab&_t=atjrk6&_u=hchh6mwu5k&pl=-1", "dennis.jpg"),
    m("Dogma", "https://dobby.site/movies/dogma-1999?_rsrc=chrome/newtab&_t=kba74h&_u=hchh6mwu5k&pl=-1", "dogma.jpg"),
    m("Don't Breathe", "https://dobby.site/movies/dont-breathe-2016?pl=-1&_u=hchh6mwu5k&_t=kba74h&_rsrc=chrome/newtab", "dontbreathe.jpg"),
    m("Don't Breathe 2", "https://dobby.site/movies/dont-breathe-2-2021?pl=-1&_u=hchh6mwu5k&_t=3mg952&_rsrc=chrome/newtab", "dontbreathe2.jpg"),
    m("Dracula (1992)", "https://dobby.site/movies/dracula-1992?pl=-1&_u=hchh6mwu5k&_t=bq0t40&_rsrc=chrome/newtab", "dracula.jpg"),

    m("Edward Scissorhands", "https://dobby.site/movies/edward-scissorhands-1990?pl=-1&_u=hchh6mwu5k&_t=bq0t40&_rsrc=chrome/newtab", "edward.jpg"),
    m("Elvis", "https://dobby.site/movies/elvis-2022?_rsrc=chrome/newtab&_t=oo4prj&_u=hchh6mwu5k&pl=-1", "elvis.jpg"),
    m("Fight Club", "https://dobby.site/movies/fight-club-1999?pl=-1&_u=hchh6mwu5k&_t=n8hvit&_rsrc=chrome/newtab", "fight.jpg"),
    m("Ghost", "https://dobby.site/movies/ghost-1990?_rsrc=chrome/newtab&_t=aed2ap&_u=hchh6mwu5k&pl=-1", "ghost.jpg"),

    m("Ginger Snaps", "https://dobby.site/movies/ghost-1990?_rsrc=chrome/newtab&_t=aed2ap&_u=hchh6mwu5k&pl=-1", "ginger.jpg"),
    m("Ginger Snaps 2", "https://www.effedupmovies.com/ginger-snaps-2-2004/", "ginger2.jpg"),
    m("Ginger Snaps 3", "https://www.lookmovie2.to/movies/view/ginger-snaps-back-the-beginning-2004", "ginger3.jpg"),

    m("Great Expectations (1998)", "https://dobby.site/movies/great-expectations-1998?pl=-1&_u=hchh6mwu5k&_t=7jq6kp&_rsrc=chrome/newtab", "expectations.jpg"),
    m("Hail Satan?", "https://dobby.site/list/Watch%20Later/37?_rsrc=chrome/newtab&_t=lhbiio&_u=hchh6mwu5k&pl=-1", "hail.jpg"),
    m("Hedwig and the Angry Inch", "https://dobby.site/movies/hedwig-and-the-angry-inch-2001?_rsrc=chrome/newtab&_t=7r6j4e&_u=hchh6mwu5k&pl=-1", "hedwig.jpg"),

    m("From Dusk Till Dawn", "https://dobby.site/movies/from-dusk-till-dawn-1996?pl=-1&_u=hchh6mwu5k&_t=bq0t40&_rsrc=chrome/newtab", "fromdusk.jpg"),
    m("From Dusk Till Dawn 3", "https://dobby.site/movies/from-dusk-till-dawn-3-the-hangmans-daughter-1999?pl=-1&_t=mr9gmc&_rsrc=chrome/newtab&_u=hchh6mwu5k", "fromdusk3.jpg"),

    m("I Know What You Did Last Summer", "https://dobby.site/movies/i-know-what-you-did-last-summer-1997?_rsrc=chrome/newtab&_t=badn4n&_u=hchh6mwu5k&pl=-1", "iknow.jpg"),
    m("I Still Know What You Did Last Summer", "https://dobby.site/movies/i-still-know-what-you-did-last-summer-1998?pl=-1&_u=hchh6mwu5k&_t=472cu6&_rsrc=chrome/newtab", "iknow2.jpg"),
    m("Interview with the Vampire", "https://dobby.site/movies/interview-with-the-vampire-1994?_u=hchh6mwu5k&_t=bq0t40&_rsrc=chrome/newtab", "interview.jpg"),

    m("Jolt", "https://dobby.site/movies/jolt-2021?_rsrc=chrome/newtab&_t=1oaoul&_u=hchh6mwu5k&pl=-1", "jolt.jpg"),
    m("Jurassic Park", "https://dobby.site/movies/jurassic-park-1993?_rsrc=chrome/newtab&_t=rvhrmk&_u=hchh6mwu5k&pl=-1", "jp.jpg"),
    m("Let Me In", "https://dobby.site/movies/let-me-in-2010?pl=-1&_u=hchh6mwu5k&_t=7jq6kp&_rsrc=chrome/newtab", "letmein.jpg"),

    m("Life After Beth", "https://dobby.site/list/Watch%20Later/17?_rsrc=chrome/newtab&_t=d81d2t&_u=hchh6mwu5k&pl=-1", "beth.jpg"),
    m("Lisa Frankenstein", "https://dobby.site/movies/lisa-frankenstein-2024?_rsrc=chrome/newtab&_t=cpdupp&_u=hchh6mwu5k&pl=-1", "lisa.jpg"),
    m("Mary Shelley's Frankenstein", "https://dobby.site/list/Watch%20Later/77?pl=-1&_u=hchh6mwu5k&_t=cpdupp&_rsrc=chrome/newtab", "frankeinstein.jpg"),

    m("Moulin Rouge!", "https://dobby.site/movies/moulin-rouge-2001?pl=-1&_u=hchh6mwu5k&_t=oo4prj&_rsrc=chrome/newtab", "moulin.jpg"),
    m("Mrs Doubtfire", "https://dobby.site/movies/mrs-doubtfire-1993?_rsrc=chrome/newtab&_t=8t6qkg&_u=hchh6mwu5k&pl=-1", "doubtfire.jpg"),
    m("Muse: Simulation Theory", "https://dobby.site/list/Watch%20Later/3?_u=hchh6mwu5k&_t=31f1bb&_rsrc=chrome/newtab", "muse.jpg"),
    m("Natural Born Killers", "https://dobby.site/movies/natural-born-killers-1994?_rsrc=chrome/newtab&_t=n6iepe&_u=hchh6mwu5k&pl=-1", "naturalbornkillers.jpg"),

    m("No One Will Save You", "https://dobby.site/movies/no-one-will-save-you-2023?pl=-1&_u=hchh6mwu5k&_t=qgkarn&_rsrc=chrome/newtab", "noone.jpg"),
    m("Old People", "https://dobby.site/movies/old-people-2022?_u=hchh6mwu5k&_t=qgkarn&_rsrc=chrome/newtab", "oldpeople.jpg"),
    m("Only Lovers Left Alive", "https://dobby.site/movies/only-lovers-left-alive-2013?pl=-1&_u=hchh6mwu5k&_t=muet4h&_rsrc=chrome/newtab", "lovers.jpg"),

    m("The Open House", "https://dobby.site/movies/the-open-house-2018?_u=hchh6mwu5k&_t=2d04qs&_rsrc=chrome/newtab", "openhouse.jpg"),
    m("Pan's Labyrinth (HU)", "https://videa.hu/videok/film-animacio/a-faun-labirintusa-2006-fantasztikus-mexikoi-spanyol-amerikai-u5Gi4DbSGJeU1MmA", "pans.jpg"),
    m("Paris Is Burning", "https://youtu.be/nI7EhpY2yaA?si=MayNBLHYYmjgSc90", "paris.jpg"),
    m("Passengers", "https://dobby.site/movies/passengers-2016?_rsrc=chrome/newtab&_t=9gvj71&_u=hchh6mwu5k&pl=-1", "passangers.jpg"),

    m("Perfume: The Story of a Murderer", "https://dobby.site/movies/perfume-the-story-of-a-murderer-2006?pl=-1&_u=hchh6mwu5k&_t=3mg952&_rsrc=chrome/newtab", "perfume.jpg"),
    m("Poor Things", "https://dobby.site/movies/poor-things-2023?_rsrc=chrome/newtab&_t=r1f1a0&_u=hchh6mwu5k&pl=-1", "poorthings.jpg"),
    m("Practical Magic", "https://dobby.site/movies/practical-magic-1998?_rsrc=chrome/newtab&_t=i0ndab&_u=hchh6mwu5k&pl=-1", "practical.jpg"),
    m("Pretty Woman", "https://dobby.site/movies/pretty-woman-1990?_u=hchh6mwu5k&_t=bq0t40&_rsrc=chrome/newtab", "prettywoman.jpg"),
    m("PS Burn This Letter", "https://dobby.site/list/Watch%20Later/23?pl=-1&_u=hchh6mwu5k&_t=31f1bb&_rsrc=chrome/newtab", "ps.jpg"),

    m("Romeo + Juliet (1996)", "https://dobby.site/movies/romeo-plus-juliet-1996?pl=-1&_u=hchh6mwu5k&_t=oo4prj&_rsrc=chrome/newtab", "romeo.jpg"),
    m("Romy and Michele's High School Reunion", "https://dobby.site/movies/romy-and-micheles-high-school-reunion-1997?_rsrc=chrome/newtab&_t=6elmfm&_u=hchh6mwu5k&pl=-1", "romy.jpg"),
    m("Queen of the Damned", "https://dobby.site/movies/queen-of-the-damned-2002?pl=-1&_u=hchh6mwu5k&_t=bq0t40&_rsrc=chrome/newtab", "qotd.jpg"),

    m("Sin City", "https://dobby.site/list/Watch%20Later/49?_rsrc=chrome/newtab&_t=60t0c8&_u=hchh6mwu5k&pl=-1", "sin.jpg"),
    m("Sin City: A Dame to Kill For", "https://dobby.site/list/Watch%20Later/51?pl=-1&_u=hchh6mwu5k&_t=31f1bb&_rsrc=chrome/newtab", "sin2.jpg"),

    m("Sister Act", "https://dobby.site/movies/sister-act-1992?pl=-1&_u=hchh6mwu5k&_t=763rjh&_rsrc=chrome/newtab", "sister1.jpg"),
    m("Sister Act 2: Back in the Habit", "https://dobby.site/movies/sister-act-2-back-in-the-habit-1993?pl=-1&_u=hchh6mwu5k&_t=763rjh&_rsrc=chrome/newtab", "sister2.jpeg"),

    m("Sweeney Todd", "https://dobby.site/movies/sweeney-todd-the-demon-barber-of-fleet-street-2007?_u=hchh6mwu5k&_t=bq0t40&_rsrc=chrome/newtab", "sweeney.jpg"),

    m("The Best Exotic Marigold Hotel", "https://dobby.site/movies/the-best-exotic-marigold-hotel-2011?pl=-1&_u=hchh6mwu5k&_t=763rjh&_rsrc=chrome/newtab", "marigold.jpeg"),
    m("The Second Best Exotic Marigold Hotel", "https://dobby.site/movies/the-second-best-exotic-marigold-hotel-2015?pl=-1&_u=hchh6mwu5k&_t=763rjh&_rsrc=chrome/newtab", "marigold2.jpg"),

    m("The Cell", "https://dobby.site/movies/the-cell-2000?pl=-1&_u=hchh6mwu5k&_t=2d04qs&_rsrc=chrome/newtab", "cell.jpg"),
    m("The Craft", "https://dobby.site/movies/the-craft-1996?pl=-1&_u=hchh6mwu5k&_t=763rjh&_rsrc=chrome/newtab", "craft.jpeg"),
    m("The Craft: Legacy", "https://dobby.site/movies/the-craft-legacy-2020?_u=hchh6mwu5k&_t=763rjh&_rsrc=chrome/newtab", "craft.png"),

    m("The Crow", "https://dobby.site/movies/the-crow-1994?_u=hchh6mwu5k&_t=2d04qs&_rsrc=chrome/newtab", "thecrow.jpg"),
    m("The Crow: City of Angels", "https://www.lookmovie2.to/movies/play/1689756707-the-crow-city-of-angels-1996", "thecrow2.jpeg"),
    m("The Crow: Salvation", "https://www.lookmovie27.to/movies/view/0132910-the-crow-salvation-2000", "thecrow3.jpg"),

    m("The House Bunny", "https://dobby.site/movies/the-house-bunny-2008?pl=-1&_u=hchh6mwu5k&_t=bq0t40&_rsrc=chrome/newtab", "bunny.jpg"),
    m("The Little Mermaid (1989)", "https://dobby.site/movies/the-little-mermaid-1989?_rsrc=chrome/newtab&_t=ev4ijt&_u=hchh6mwu5k&pl=-1", "mermaid.jpg"),
    m("The Lost Boys", "https://dobby.site/movies/the-lost-boys-1987?pl=-1&_u=hchh6mwu5k&_t=muet4h&_rsrc=chrome/newtab", "lostboys.jpg"),

    m("The Others", "https://dobby.site/movies/the-others-2001?pl=-1&_u=hchh6mwu5k&_t=2d04qs&_rsrc=chrome/newtab", "others.jpg"),
    m("The Greatest Showman", "https://dobby.site/movies/the-greatest-showman-2017?_rsrc=chrome/newtab&_t=hna2u0&_u=hchh6mwu5k&pl=-1", "showman.jpeg"),

    m("Under the Mountain", "https://dobby.site/movies/under-the-mountain-2009?_rsrc=chrome/newtab&_t=6a5lm2&_u=hchh6mwu5k&pl=-1", "mountain.jpg"),
    m("Urban Legend", "https://dobby.site/list/Watch%20Later/83?_rsrc=chrome/newtab&_t=907cb9&_u=hchh6mwu5k&pl=-1", "urbanlegend.jpg"),
    m("Warm Bodies", "https://dobby.site/movies/warm-bodies-2013?_u=hchh6mwu5k&_t=bq0t40&_rsrc=chrome/newtab", "warmbodies.jpg"),
    m("Wicked Little Letters", "https://dobby.site/movies/wicked-little-letters-2024?_rsrc=chrome/newtab&_t=j7ij2s&_u=hchh6mwu5k&pl=-1", "wickedlittle.jpg"),
    m("Wildling", "https://dobby.site/movies/wildling-2018?_u=hchh6mwu5k&_t=2d04qs&_rsrc=chrome/newtab", "wildling.jpeg"),

    // Extras you listed earlier:
    m("Open House (duplicate link handled)", "https://dobby.site/movies/the-open-house-2018?_u=hchh6mwu5k&_t=ia79jt&_rsrc=chrome/newtab", "openhouse.jpg"),
    m("The Watchers (2024)", "https://dobby.site/movies/the-watchers-2024?pl=-1&_u=hchh6mwu5k&_t=qgkarn&_rsrc=chrome/newtab", "watchers.jpg"),
    m("The Phantom of the Opera (2004)", "https://dobby.site/movies/the-phantom-of-the-opera-2004?_u=hchh6mwu5k&_t=ia79jt&_rsrc=chrome/newtab", "phantom.jpg"),
    m("The Mask", "https://dobby.site/movies/the-mask-1994?pl=-1&_u=hchh6mwu5k&_t=763rjh&_rsrc=chrome/newtab", "mask.jpg"),
    m("There's Something About Mary", "https://dobby.site/movies/theres-something-about-mary-1998?pl=-1&_u=hchh6mwu5k&_t=763rjh&_rsrc=chrome/newtab", "mary.jpg")
  ];

  // ===== RENDER =====
  const grid = document.getElementById("moviesGrid");

  const buildCard = ({ title, link, file }) => {
    const a = document.createElement("a");
    a.className = "card";
    a.href = link;
    a.target = "_blank";
    a.rel = "noopener";

    const box = document.createElement("div");
    box.className = "thumb";

    const img = document.createElement("img");
    const src = THUMB_DIR + file;
    img.src = src;
    img.alt = title;

    img.onerror = () => {
      box.innerHTML = `<div class="broken">Missing<br>${src}</div>`;
    };

    box.appendChild(img);

    const cap = document.createElement("div");
    cap.className = "title";
    cap.textContent = title;

    a.appendChild(box);
    a.appendChild(cap);
    return a;
  };

  movies.forEach(item => grid.appendChild(buildCard(item)));
});
