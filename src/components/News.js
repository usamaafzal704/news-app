import React, { Component } from 'react'
import NewsItems from './NewsItems'

export default class News extends Component {

    articles = [
        {
        
        "source": {
        "id": null,
        "name": "Barron's"
        },
        "author": "Ben Levisohn",
        "title": "Why Is the Stock Market Down? It Knows the Worst Is Yet to Come. - Barron's",
        "description": "The S&P 500 fell 4.8% ahead of the Federal Reserve’s September meeting.",
        "url": "https://www.barrons.com/articles/why-is-the-stock-market-down-it-knows-the-worst-is-yet-to-come-51663376619",
        "urlToImage": "https://images.barrons.com/im-625296/social",
        "publishedAt": "2022-09-17T01:03:00Z",
        "content": "From a certain point onward, there is no turning back. The stock market reached that point this past week.Oh, the market was hopeful, entering the week, that inflation had reached its peak, that the … [+3245 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "YouTube"
        },
        "author": null,
        "title": "'Like Star Wars': World's first flying bike, made in Japan, debuts in the US - South China Morning Post",
        "description": "Subscribe to our YouTube channel for free here: https://sc.mp/subscribe-youtubeThe world’s first flying bike made its US debut at the Detroit Auto Show on Se...",
        "url": "https://www.youtube.com/watch?v=QX5Sm7ttt-k",
        "urlToImage": "https://i.ytimg.com/vi/QX5Sm7ttt-k/hqdefault.jpg",
        "publishedAt": "2022-09-17T01:00:21Z",
        "content": null
        },
        {
        "source": {
        "id": "the-washington-post",
        "name": "The Washington Post"
        },
        "author": "Hamza Shaban",
        "title": "India's richest man surpasses Bezos on billionaires list - The Washington Post",
        "description": "Meet Gautam Adani. His $152.2 billion fortune makes him richer than the Amazon founder but not as rich as Elon Musk.",
        "url": "https://www.washingtonpost.com/business/2022/09/16/gautam-adani-forbes-billionaires/",
        "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/N4V45LBVTUI63IGWIFJJTP7L2U.jpg&w=1440",
        "publishedAt": "2022-09-17T00:44:39Z",
        "content": "The jostling among the worlds richest humans intensified Friday as three men rotated through the No. 2 spot in the span of 24 hours, highlighting the volatility of the markets and meteoric rise of In… [+908 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Fox Business"
        },
        "author": "Aislinn Murphy",
        "title": "Survey finds nearly 50% of NYC office staff go into the office on a typical weekday - Fox Business",
        "description": "Nearly 50% of Manhattan's office workers now go into their offices on a typical weekday, a Partnership for New York City survey released Thursday found.",
        "url": "https://www.foxbusiness.com/economy/poll-finds-50-percent-nyc-office-staff-go-office-typical-weekday",
        "urlToImage": "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2019/09/0/0/iStock-Lower-Manhattan.jpg?ve=1&tl=1",
        "publishedAt": "2022-09-17T00:31:53Z",
        "content": "Nearly 50% of New York City's office workers now go into the office on a typical weekday, according to findings from a recent survey.\r\nThe Partnership for New York City said Thursday its survey found… [+2163 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "KKTV 11 News"
        },
        "author": "Tony Keith",
        "title": "Colorado man reportedly shoots at postal worker because he thought they were stealing mail - KKTV",
        "description": "A man is facing serious charges after authorities believe he fired shots at a postal worker in El Paso County.",
        "url": "https://www.kktv.com/2022/09/16/colorado-man-reportedly-shoots-postal-worker-because-he-thought-they-were-stealing-mail/",
        "urlToImage": "https://gray-kktv-prod.cdn.arcpublishing.com/resizer/cj5H69uM0T1d29goWdT0MPlV6eg=/1200x600/smart/filters:quality(85)/cloudfront-us-east-1.images.arcpublishing.com/gray/AJUMBWNAJVHB5H52XMK4ILX7ZU.jpg",
        "publishedAt": "2022-09-16T23:58:00Z",
        "content": "EL PASO COUNTY, Colo. (KKTV) - A man is facing serious charges after authorities believe he fired shots at a postal worker in El Paso County.\r\nThe incident happened on Sept. 15 at about 4:20 p.m. in … [+965 chars]"
        },
        {
        "source": {
        "id": "the-washington-post",
        "name": "The Washington Post"
        },
        "author": "Abha Bhattarai",
        "title": "Worker shortages in education, healthcare and rail jobs are fueling labor crises - The Washington Post",
        "description": "Exhausted workers in education, healthcare and the railroad industry are pushing back after months of labor shortages",
        "url": "https://www.washingtonpost.com/business/2022/09/16/worker-shortage-strikes-economy/",
        "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/R5QYT2RSFEI63IGWIFJJTP7L2U.jpg&w=1440",
        "publishedAt": "2022-09-16T23:34:00Z",
        "content": "The U.S. economy came within hours of shutting down because of a standoff between unions and railroad carriers over sick pay and scheduling, highlighting just how dramatically staffing shortages have… [+9090 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "YouTube"
        },
        "author": null,
        "title": "Cramer's game plan for the trading week of Sept. 19 - CNBC Television",
        "description": "CNBC's Jim Cramer previewed next week's slate of earnings on Friday's episode of \"Mad Money.\"",
        "url": "https://www.youtube.com/watch?v=16WPro95yBM",
        "urlToImage": "https://i.ytimg.com/vi/16WPro95yBM/hqdefault.jpg",
        "publishedAt": "2022-09-16T23:25:23Z",
        "content": null
        },
        {
        "source": {
        "id": null,
        "name": "CNBC"
        },
        "author": "Krystal Hur",
        "title": "Cramer's lightning round: I don't want to own Nikola - CNBC",
        "description": "\"Mad Money\" host Jim Cramer rings the lightning round bell, which means he's giving his answers to callers' stock questions at rapid speed.",
        "url": "https://www.cnbc.com/2022/09/16/cramers-lightning-round-i-dont-want-to-own-nikola.html",
        "urlToImage": "https://image.cnbcfm.com/api/v1/image/103507383-Lightning-Round.jpg?v=1663368940&w=1920&h=1080",
        "publishedAt": "2022-09-16T22:55:40Z",
        "content": "Albemarle Corp: \"I suggest that you wait for it to come down a little, but I do like the situation very much.\"\r\nNikola Corp: \"I think that stock is lethal, frankly. ... I don't want to own it.\"\r\nChen… [+206 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Minneapolis Star Tribune"
        },
        "author": "Jim Buchta, Jenny Berg",
        "title": "Across Minnesota, higher mortgage rates take a toll on home sales and listings - Star Tribune",
        "description": "It's still a seller's market, but it is becoming less competitive and the number of deals was down 24% last month.",
        "url": "https://www.startribune.com/what-the-highest-mortgage-rates-in-14-years-are-doing-to-twin-cities-real-estate/600207510/",
        "urlToImage": "https://chorus.stimg.co/24026867/IMG_0105.jpg?h=630&w=1200&fit=crop&bg=999&crop=faces",
        "publishedAt": "2022-09-16T22:24:30Z",
        "content": "The doubling of mortgage rates over the past year is beginning to take a toll on home sales across Minnesota.\r\nThis week, mortgage rates topped 6% for the first time in 14 years as lenders continue l… [+4387 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "YouTube"
        },
        "author": null,
        "title": "Today was due to algos in the market, says Virtus' Terranova - CNBC Television",
        "description": "Virtus Investment Partners' Joe Terranova and Mad Money host Jim Cramer join 'Closing Bell: Overtime' to discuss what's going on in the markets, as the Nasda...",
        "url": "https://www.youtube.com/watch?v=iO5GEmognAs",
        "urlToImage": "https://i.ytimg.com/vi/iO5GEmognAs/hqdefault.jpg",
        "publishedAt": "2022-09-16T21:58:51Z",
        "content": null
        },
        {
        "source": {
        "id": null,
        "name": "New York Post"
        },
        "author": "Ryan Glasspiegel",
        "title": "Barstool Sports CEO Erika Nardini steps down from WWE board of directors - New York Post ",
        "description": "WWE announced the news in a filing with the SEC Friday afternoon.",
        "url": "https://nypost.com/2022/09/16/barstool-sports-erika-nardini-steps-down-from-wwe-board/",
        "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2022/09/erika-nardini-barstool-wwe-board.jpg?quality=75&strip=all&w=1024",
        "publishedAt": "2022-09-16T21:14:00Z",
        "content": "Barstool Sports CEO Erika Nardini has stepped down from WWE’s board. \r\nWWE announced the news in an 8K filing with the SEC Friday afternoon. The company said that the news was related to Penn Enterta… [+1006 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "MarketWatch"
        },
        "author": "Emily Bary",
        "title": "Facebook stock falls to yet another ignominious level - MarketWatch",
        "description": "Meta Platforms’ market capitalization falls lower than $400 billion for the first time since January 2019 as it moves closer to wiping away all pandemic-era gains",
        "url": "https://www.marketwatch.com/story/facebook-stock-falls-to-yet-another-ignominious-level-11663361887",
        "urlToImage": "https://images.mktw.net/im-533280/social",
        "publishedAt": "2022-09-16T20:58:00Z",
        "content": "Facebook was a member of the exclusive $1 trillion club a year ago, but its fallen a long way since then. Now named Meta Platforms Inc. \r\n META,\r\n -2.18%\r\n,\r\n the company saw its market value fall be… [+1653 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Fox Business"
        },
        "author": "Megan Henney",
        "title": "Billionaire Ray Dalio warns stocks could plunge 20% if interest rates rise to 4.5% - Fox Business",
        "description": "Ray Dalio, the founder of Bridgewater Associates, said in a post this week that interest rates will need to rise substantially in order to fight inflation.",
        "url": "https://www.foxbusiness.com/business-leaders/billionaire-ray-dalio-warns-stocks-could-plunge-interest-rates-rise",
        "urlToImage": "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2021/09/0/0/GettyImages-1140767704.jpg?ve=1&tl=1",
        "publishedAt": "2022-09-16T20:49:27Z",
        "content": "Billionaire Ray Dalio, the founder of one of the world's largest hedge funds, warned that stocks could tumble even lower this year after the hotter-than-expected August inflation data rattled markets… [+3504 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Benzinga"
        },
        "author": "Chris Katje",
        "title": "Apple Overtakes Tesla As The Most Shorted Stock: Here's Why It Matters — And Why It Doesn't - Apple (NASDAQ:AAPL) - Benzinga",
        "description": "The largest publicly traded company in the world is now the most shorted stock by dollars, according to a new report. This doesn’t mean that Apple Inc (NASDAQ: AAPL) will see a short squeeze anytime soon. Here’s a look at why it matters — and why it doesn’t.",
        "url": "https://www.benzinga.com/news/22/09/28900934/apple-overtakes-tesla-as-the-most-shorted-stock-heres-why-it-matters-and-why-it-doesnt",
        "urlToImage": "https://cdn.benzinga.com/files/images/story/2022/09/16/apple.tesla_.png?width=1200&height=800&fit=crop",
        "publishedAt": "2022-09-16T20:26:07Z",
        "content": "The largest publicly traded company in the world is now the most shorted stock by dollars, according to a new report. This doesnt mean that Apple Inc AAPL will see a short squeeze anytime soon.\r\nHere… [+2492 chars]"
        },
        {
        "source": {
        "id": "bloomberg",
        "name": "Bloomberg"
        },
        "author": null,
        "title": "All-or-Nothing Stock Churn Exacts Harsh Toll on Would-Be Market Timers - Bloomberg",
        "description": null,
        "url": "https://www.bloomberg.com/tosv2.html?vid=&uuid=6122a570-3634-11ed-ba73-754c745a6461&url=L25ld3MvYXJ0aWNsZXMvMjAyMi0wOS0xNi9hbGwtb3Itbm90aGluZy1zdG9jay1jaHVybi1leGFjdHMtaGFyc2gtdG9sbC1vbi13b3VsZC1iZS10aW1lcnM=",
        "urlToImage": null,
        "publishedAt": "2022-09-16T20:23:03Z",
        "content": "To continue, please click the box below to let us know you're not a robot."
        },
        {
        "source": {
        "id": null,
        "name": "Cointelegraph"
        },
        "author": "Cointelegraph",
        "title": "What's next for Bitcoin and the crypto market now that the Ethereum Merge is over? - Cointelegraph",
        "description": "Here’s a review of the possible new trends that will drive the crypto market in the post-Merge era.",
        "url": "https://cointelegraph.com/news/what-s-next-for-bitcoin-and-the-crypto-market-now-that-the-ethereum-merge-is-over",
        "urlToImage": "https://images.cointelegraph.com/images/1200_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjItMDkvZGFlNTU1NmUtMTU4NC00YjBlLWFkYmItODM4MWJiODY2ZDQ1LmpwZw==.jpg",
        "publishedAt": "2022-09-16T20:00:00Z",
        "content": "The Ethereum Merge came and went, leaving investors to ponder what the next trending development in the market could look like. In a Cointelegraph Twitter Space with Capriole Fund founder Charles Edw… [+5189 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Channel3000.com - WISC-TV3"
        },
        "author": null,
        "title": "Madison police arrest suspect in unprovoked attack of elderly man in Culver's parking lot - Channel3000.com - WISC-TV3",
        "description": "Police have arrested a 58-year-old man they said attacked a 78-year-old in the parking lot of a Madison Culver's restaurant late last month.",
        "url": "https://www.channel3000.com/madison-police-arrest-suspect-in-unprovoked-attack-of-elderly-man-in-culvers-parking-lot/",
        "urlToImage": "https://wpcdn.us-east-1.vip.tn-cloud.net/www.channel3000.com/content/uploads/2022/09/d/j/culvers-attack-suspect.jpg",
        "publishedAt": "2022-09-16T19:51:00Z",
        "content": "CREDIT: Madison Police Deaprtment\r\nCREDIT: Madison Police Deaprtment\r\nMADISON, Wis. — Police have arrested a 58-year-old man they said attacked a 78-year-old in the parking lot of a Madison Culver’s … [+914 chars]"
        },
        {
        "source": {
        "id": "the-wall-street-journal",
        "name": "The Wall Street Journal"
        },
        "author": "Dustin Volz",
        "title": "Justice Department Forms National Network of Prosecutors Focused on Crypto Crime - WSJ - The Wall Street Journal",
        "description": "The new effort is part of a trend toward putting more resources to target illegal activities involving digital currencies.",
        "url": "https://www.wsj.com/articles/justice-department-forms-national-network-of-prosecutors-focused-on-crypto-crime-11663322407",
        "urlToImage": "https://images.wsj.net/im-624310/social",
        "publishedAt": "2022-09-16T19:47:00Z",
        "content": null
        },
        {
        "source": {
        "id": null,
        "name": "CNBC"
        },
        "author": "Paulina Likos",
        "title": "Amazon remains top pick at UBS — and in our portfolio — despite FedEx's alarming guidance - CNBC",
        "description": "A new Wall Street research note shows Amazon's e-commerce sales are holding up.",
        "url": "https://www.cnbc.com/2022/09/16/amazon-remains-top-pick-at-ubs-and-in-our-portfolio-despite-fedexs-alarming-guidance.html",
        "urlToImage": "https://image.cnbcfm.com/api/v1/image/107087998-1657711359641-gettyimages-1241869386-AFP_32EB7BW.jpeg?v=1663355180&w=1920&h=1080",
        "publishedAt": "2022-09-16T19:06:20Z",
        "content": null
        },
        {
        "source": {
            "id": "techcrunch",
            "name": "TechCrunch"
            },
            "author": "Connie Loizos",
            "title": "VC Ann Miura-Ko is looking to help more students answer the question: Is this idea big enough?",
            "description": "In a development that's self-serving and also probably pretty helpful to aspiring founders, Floodgate has developed a new program to help student teams from across the country understand what big ideas look like -- and why most concepts are not big ideas.",
            "url": "https://techcrunch.com/2022/09/16/vc-ann-miura-ko-is-looking-to-help-more-students-answer-the-question-is-this-idea-big-enough/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2019/10/Ann-Miura-Ko-Floodgate-VenturesDSC03922.jpg?resize=1200,800",
            "publishedAt": "2022-09-17T02:12:45Z",
            "content": "One could probably argue that Floodgate, the Bay Area-based seed-stage venture firm, punches above its weight. The roughly 15-year-old firm has just around $500 million in assets under management — i… [+8701 chars]"
            },
            {
            "source": {
            "id": "techcrunch",
            "name": "TechCrunch"
            },
            "author": "Jaclyn Trop",
            "title": "Tesla ordered to tell laid off workers about lawsuit",
            "description": "The lawsuit claims the company violated Section 1400 of the California Labor Code, as well as the federal Worker Adjustment and Retraining Notification Act.",
            "url": "https://techcrunch.com/2022/09/16/tesla-ordered-to-tell-laid-off-workers-about-lawsuit/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2022/07/tesla-EV.jpeg?resize=1200,800",
            "publishedAt": "2022-09-16T23:18:40Z",
            "content": "A U.S. District Court has ordered that Tesla must tell employees about a lawsuit alleging the automaker violated state and federal law by requiring workers to sign separation agreements.\r\nTwo former … [+1716 chars]"
            },
            {
            "source": {
            "id": "techcrunch",
            "name": "TechCrunch"
            },
            "author": "Harri Weber",
            "title": "Deep tech VC First Star plots a $40M third fund",
            "description": "First Star, backer of deep tech startups like Plus One and Fyto, aims to raise as much as $40 million for its third venture fund, TechCrunch has learned. Based in Cambridge, Massachusetts, First Star typically backs robotics, blockchain, AI and machine learni…",
            "url": "https://techcrunch.com/2022/09/16/deep-tech-vc-first-star-targets-40m-fund-three/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2022/09/GettyImages-1415234239.jpg?resize=1200,800",
            "publishedAt": "2022-09-16T22:43:48Z",
            "content": "First Star, backer of deep tech startups like Plus One and Fyto, aims to raise as much as $40 million for its third venture fund, TechCrunch has learned.\r\nBased in Cambridge, Massachusetts, First Sta… [+1522 chars]"
            },
            {
            "source": {
            "id": "techcrunch",
            "name": "TechCrunch"
            },
            "author": "Taylor Hatmaker",
            "title": "Parler forms a new parent company to offer 'uncancelable' cloud services",
            "description": "One of the alternative social networks to emerge out of the social media backlash of the Trump era is apparently going to try something new. Parler announced Friday that it has acquired a cloud company called Dynascale in order to expand its vision beyond off…",
            "url": "https://techcrunch.com/2022/09/16/parler-parlement-web-hosting/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2022/01/GettyImages-1230591116.jpeg",
            "publishedAt": "2022-09-16T21:57:41Z",
            "content": "One of the alternative social networks to emerge out of the social media backlash of the Trump era is apparently going to try something new.\r\nParler announced Friday that it has acquired a cloud comp… [+2215 chars]"
            },
            {
            "source": {
            "id": "techcrunch",
            "name": "TechCrunch"
            },
            "author": "Natasha Mascarenhas",
            "title": "Launch House holds private town hall, says investigation is underway",
            "description": "In a town hall to some members of their community, Launch House addressed the harassment and assault allegations surfaced by a Vox Investigation earlier this week. The startup, backed by A16z and Lightship as well as a bevy of top investors, said that an inde…",
            "url": "https://techcrunch.com/2022/09/16/launch-house-holds-private-town-hall-says-investigation-is-underway/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2022/09/MOSHED-2022-9-16-16-42-44.jpg?resize=1200,688",
            "publishedAt": "2022-09-16T21:18:55Z",
            "content": "In a town hall to some members of their community, Launch House addressed the harassment and assault allegations surfaced by a Vox Investigation earlier this week. The startup, backed by A16z and Lig… [+3188 chars]"
            },
            {
            "source": {
            "id": "techcrunch",
            "name": "TechCrunch"
            },
            "author": "Christine Hall",
            "title": "Daily Crunch: All I can see is you — iOS 16 users enjoy new photo background removal feature",
            "description": "Hello, friends, and welcome to Daily Crunch, bringing you the most important startup, tech and venture capital news in a single package.",
            "url": "https://techcrunch.com/2022/09/16/daily-crunch-all-i-can-see-is-you-ios-16-users-enjoy-new-photo-background-removal-feature/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2022/06/Apple-iOS-visual-lookup.jpg?resize=1200,675",
            "publishedAt": "2022-09-16T20:57:39Z",
            "content": "To get a roundup of TechCrunchs biggest and most important stories delivered to your inbox every day at 3 p.m. PDT,subscribe here.\r\nFridaaaaay!\r\nToday, we will mostly be listening to this delightful … [+5677 chars]"
            },
            {
            "source": {
            "id": "techcrunch",
            "name": "TechCrunch"
            },
            "author": "Aria Alamalhodaei",
            "title": "Nanoracks cut a piece of metal in space for the first time",
            "description": "Nanoracks just made space construction and manufacturing history with the first demonstration of cutting metal in orbit. The technique could be critical for the next generation of large-scale space stations and even lunar habitats. The experiment was performe…",
            "url": "https://techcrunch.com/2022/09/16/nanoracks-metal-cutting/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2022/09/Web-size_Nanoracks-outpost-cutaway-LEO.png",
            "publishedAt": "2022-09-16T20:49:20Z",
            "content": "Nanoracks just made space construction and manufacturing history with the first demonstration of cutting metal in orbit. The technique could be critical for the next generation of large-scale space s… [+2708 chars]"
            },
            {
            "source": {
            "id": "techcrunch",
            "name": "TechCrunch"
            },
            "author": "Devin Coldewey",
            "title": "Lynk may beat Starlink and Apple to the punch as FCC approves its space-based texting",
            "description": "Lynk may eat Starlink and Apple's lunch after the FCC approved its satellite-based global texting service.",
            "url": "https://techcrunch.com/2022/09/16/lynk-may-beat-starlink-and-apple-to-the-punch-as-fcc-approves-its-space-based-texting/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2022/05/GettyImages-1304791604.jpg?resize=1200,800",
            "publishedAt": "2022-09-16T20:48:42Z",
            "content": "SpaceX and T-Mobile may have hogged the headlines with their flashy pre-announcement about Starlink connectivity last month, and Apple last week, but Lynk has been putting in the work and may very we… [+4927 chars]"
            },
            {
            "source": {
            "id": "techcrunch",
            "name": "TechCrunch"
            },
            "author": "Mary Ann Azevedo",
            "title": "Most fintechs partner with banks. Varo became one, and says it's paying off",
            "description": "Last month, Varo Bank celebrated the two-year anniversary of obtaining its national bank charter. Here's what happened since.",
            "url": "https://techcrunch.com/2022/09/16/fintech-varo-digital-bank/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2021/09/Varo.jpg?resize=1200,675",
            "publishedAt": "2022-09-16T20:46:47Z",
            "content": "Last month, Varo Bank celebrated the two-year anniversary of obtaining its national bank charter. The move made Varo the first-ever all-digital nationally chartered U.S. consumer bank.\r\nThe startup l… [+7432 chars]"
            },
            {
            "source": {
            "id": "techcrunch",
            "name": "TechCrunch"
            },
            "author": "Ivan Mehta",
            "title": "iOS 16 users are getting creative with the new background removal feature for photos",
            "description": "We said this a couple of months ago, and we’re sticking to it now: the new background removal and image cutout feature is the most fun thing to come out of iOS 16. Yes, Lock Screen widgets and customizations are useful, but you’re probably not going to tinker…",
            "url": "https://techcrunch.com/2022/09/16/ios-16-users-are-getting-creative-with-the-new-background-removal-feature-for-photos/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2022/06/Apple-iOS-visual-lookup.jpg?resize=1200,675",
            "publishedAt": "2022-09-16T13:44:43Z",
            "content": "We said this a couple of months ago, and we’re sticking to it now: the new background removal and image cutout feature is the most fun thing to come out of iOS 16. Yes, Lock Screen widgets and custom… [+2594 chars]"
            }
        ]

        constructor(){
            super();
            this.state = {
                articles: this.articles,
                loading: false
            }
        }



  render() {
    return (
      <div className='container my-5'>
        <h1 className='text-center' style={{marginTop:"90px"}} >NewsBites - Top Headlines</h1>
        <div className='row'>

            {this.state.articles.map((element)=>{
                console.log(element.articles)
            return<div className='col-md-4' key={element.url}>
                <NewsItems 
                title={element.title?element.title.slice(0, 45):""} 
                description={element.description?element.description.slice(0, 80):""} 
                imageUrl={element.urlToImage}
                date={element.publishedAt}
                author={element.author}
                url={element.url}
                source={element.source.name} />
            </div>
            })}

        </div>
      </div>
    )
  }
}


