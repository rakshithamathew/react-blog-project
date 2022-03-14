import { useState, createContext } from 'react';

export const MainContext = createContext();

export const DataContext = (props) => {
    
    const [Data, setData] = useState([
        {
            id : '1',
            title : `Bangaluru: City of IT Hubs`,
            body : `Bengaluru (also called Bangalore) is the capital of India's southern Karnataka state. The center of India's high-tech industry, the city is also known for its parks and nightlife. By Cubbon Park, Vidhana Soudha is a Neo-Dravidian legislative building. Former royal residences include 19th-century Bangalore Palace, modeled after England’s Windsor Castle, and Tipu Sultan’s Summer Palace, an 18th-century teak structure.`,
            category : 'Tourism',
            date : `Aug 14, 2019`,
            url : 'https://www.commercialofficebangalore.com/sites/default/files/Office_Location.jpg'
        },
        {
            id : '2',
            title : 'Delhi',
            body : `Delhi, India’s capital territory, is a massive metropolitan area in the country’s north. In Old Delhi, a neighborhood dating to the 1600s, stands the imposing Mughal-era Red Fort, a symbol of India, and the sprawling Jama Masjid mosque, whose courtyard accommodates 25,000 people. Nearby is Chandni Chowk, a vibrant bazaar filled with food carts, sweets shops and spice stalls.`,
            category : 'Tourism',
            date : `Feb 13, 2017`,
            url : 'https://institute.careerguide.com/wp-content/uploads/2020/08/F6DC4613-C002-49C8-918BD271C794DC34.jpg'
        },
        {
            id : '3',
            title : 'Jammu Kashmir',
            body : `Jammu and Kashmir is a region administered by India as a union territory and consisting of the southern portion of the larger Kashmir region, which has been the subject of a dispute between India and Pakistan since 1947, and between India and China since 1962.`,
            category : 'Tourism',
            date : `Jan 22, 2015`,
            url : 'https://www.worldatlas.com/upload/70/33/ab/shutterstock-115227475.jpg'
        },
        {
            id : '4',
            title : 'GOA',
            body : `Goa is a state in western India with coastlines stretching along the Arabian Sea. Its long history as a Portuguese colony prior to 1961 is evident in its preserved 17th-century churches and the area’s tropical spice plantations. Goa is also known for its beaches, ranging from popular stretches at Baga and Palolem to those in laid-back fishing villages such as Agonda. `,
            category : 'Tourism',
            date : `July 24, 2020`,
            url : 'https://media.timeout.com/images/105240186/750/422/image.jpg'
        },
        {
            id : '5',
            title : 'Jaipur',
            body : `Jaipur is the capital of India’s Rajasthan state. It evokes the royal family that once ruled the region and that, in 1727, founded what is now called the Old City, or “Pink City” for its trademark building color. At the center of its stately street grid (notable in India) stands the opulent, colonnaded City Palace complex. With gardens, courtyards and museums, part of it is still a royal residence.`,
            category : 'Tourism',
            date : `Jan 18, 2012`,
            url : 'https://lh3.googleusercontent.com/FqXvailyyIAehQ2Imh_8G1lU8hc-Yy-EQ8iZtNocgLaYD_cmVreNAttCWuxwu8Nm'
        },
        {
            id : '1',
            title : `Boruto: Naruto Next Generations`,
            body : `Boruto: Naruto Next Generations[c] is a Japanese manga series written byhis body, to revitalize the dying Divine Tree from the dimension they came from. Boruto, Sasuke and the four Kages, the leaders of other ninja villages, set out to rescue Naruto. The battle ends when Momoshiki, sacrificing Kinshiki to increase his own strength, is defeated by Boruto and Naruto with Sasuke's help; Momoshiki survives long enough to realize Boruto's full potential while warning him of future tribulations. After recovering from his fight, Boruto decides to become like Sasuke in the future, while entrusting Sarada to follow her dream of becoming the next Hokage.`,
            category : 'Anime Series',
            date : `Sep 22, 2012`,
            url : 'https://i0.wp.com/doublesama.com/wp-content/uploads/2018/04/Boruto-cover.png?resize=640%2C960'
        },
        {
            id : '2',
            title : `Kakegurui
            2017 ‧ Gambling ‧ 2 seasons
            `,
            body : `Yumeko Jabami (蛇喰 夢子 Jabami Yumeko) is the main protagonist of Kakegurui - Compulsive Gambler. She's a transfer student at Hyakkaou Private Academy and the classmate of a big scene. Not only is she able to befriend those who previously disliked her, she is able to catch the attention of the entire student body. She does just that on her very first day of school and manages to continue doing so on nearly a daily basis. Every time she notices an opponent cheating in games, her button gets switched to a bloodthirsty side of her, usually seen when her eyes turn red and she frightens her opponents.`,
            category : 'Anime Series',
            date : `Jan 20, 2010`,
            url : `https://flxt.tmsimg.com/assets/p15123950_b_v9_aa.jpg`
        },
        {
            id : '3',
            title : `Death Note Mystery, Psychological thriller, Thriller`,
            body : `Death Note media, except for video games and soundtracks, is licensed and released in North America by Viz Media. The episodes from the anime first appeared in North America as downloadable from IGN before Viz Media licensed it. The series was aired on YTV's Bionix anime block in Canada and on Adult Swim in the United States with a DVD release following. The live-action films briefly played in certain North American theaters, in 2008, before receiving home video releases. As of April 2015, the Death Note manga had over 30 million copies in circulation.In Tokyo, a disaffected high-school student named Light Yagami finds the "Death Note", a mysterious black notebook that can kill anyone as long as the user knows both the target's name and face. Initially terrified of its god-like power, Light considers the possibilities of the Death Note's abilities and kills high-profile Japanese criminals, then targets international criminals. Five days after discovering the notebook, Light is visited by Ryuk, a "Shinigami" and the Death Note's previous owner. `,
            category : 'Anima Series',
            date : `Oct 22, 2002`,
            url : `https://cdnb.artstation.com/p/assets/images/images/024/969/773/large/camila-y-breda-deathartstation.jpg?1584123520&dl=1`,
        },
        {
            id : '4',
            title : `Class Room of Elites 2017 ‧ Anime ‧ 1 season`,
            body : `Tsubasa Nanase (七なな瀬せ 翼つばさ, Nanase Tsubasa) is currently one of the first-year students of Advanced Nurturing High School. At the start of the 2nd Year Arc, she is assigned under Class 1-D.
            Tsubasa has hip-length light-blonde hair that is tied in the back by a white bow with bangs hanging over her forehead, blue eyes and a pretty well-endowed figure. She is seen so far wearing formal school attire consisting of a white blouse paired with a buttoned crimson blazer and blue ribbon, and a short-length white sailor striped pleated skirt.
            
            Tsubasa is a very polite girl who speaks in a calm and respectful tone to whoever she is speaking to. However, she also has a confident side to her. In her OAA, Tsubasa has the second highest score among the six freshmen introduced, only being a point under Takuya Yagami.`,
            category : 'Anime Series',
            date : `Feb 02, 2011`,
            url : `https://cdn.anime-planet.com/anime/primary/classroom-of-the-elite-1.jpg?t=1630331683`,
        },
        {
            id : '5',
            title : `Food Wars! Shokugeki no Soma
            2015 ‧ 5 seasons
            `,
            body : `Food Wars! (食戟のソーマ Shokugeki no Sōma) is a Japanese cooking, comedy, slice-of-life and ecchi Animeted series written by Yūto Tsukuda. Its manga made its debut on November 26, 2012, with a total of thirty-five volumes that ended with its final chapter releasing on June 21, 2019. An anime adaptation began airing on April 04, 2015 to September 25, 2020, lasting up to five seasons with eighty-six episodes overall and five OVAs.A fifth season was announced in a Jump Festa 2020. The fifth and final season which is titled as, Shokugeki No Soma: Gō no Sara ( Shokugeki No Soma: The Fifth Plate) premiered on April 10, 2020 consists the remaining 13 episodes.[13]A fifth season was announced in a Jump Festa 2020. The fifth and final season which is titled as, Shokugeki No Soma: Gō no Sara ( Shokugeki No Soma: The Fifth Plate) premiered on April 10, 2020 consists the remaining 13 episodes.[13]`,
            category : 'Anime Series',
            date : `April 12, 2017`,
            url : `https://m.media-amazon.com/images/I/81k+VdxsNPL._AC_SY741_.jpg`,
        },
        {
            id : '1',
            title : `Data Science`,
            body : `Data science is an interdisciplinary mathematics, statistics, computer science, information science, and domain knowledge.[4] However, data science is different from computer science and information science. Turing Award winner Jim Gray imagined data science as a "fourth paradigm" of science (empirical, theoretical, computational, and now data-driven) and asserted that "everything about science is changing because of the impact of information technology" and the data deluge.[5][6]`,
            category : `Technology`,
            date : `Jan 19, 2021`,
            url : `https://analyticsinsight.b-cdn.net/wp-content/uploads/2022/02/What-is-Motivating-Individuals-to-Pursue-a-Career-in-Data-Science.jpg`
        },
        {
            id : '2',
            title : `Artifical Intelligence`,
            body : `Artificial intelligence (AI) is intelligence demonstrated by machines, as opposed to natural intelligence displayed by animals including humans. Leading AI textbooks define the field as the study of "intelligent agents": any system that perceives its environment and takes actions that maximize its chance of achieving its goals.[a]

            
            AI applications include advanced web search engines (e.g., Google), recommendation systems (used by YouTube, Amazon`,
            category : `Technology`,
            date : `December 12, 2021`,
            url : `	https://thumbs.dreamstime.com/z/futuristic-robot-artificial-intelligence-cgi-big-data-analytics-programming-robotic-man-d-render-Animetion-illustration-196113081.jpg`
        },
        {
            id : '3',
            title : `Big Data`,
            body : `Big data is a field that treats , information privacy,enges in sampling, and thus previously allowing for only observations and sampling. Therefd value.`,
            category : `Technology`,
            date : `Sewptember 31, 2021`,
            url : `data:image/jpeg;base64,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`
        },
        {
            id : '4',
            title : `MERN`,
            body : `MEAN (MongoDB, Express.js, AngularJS (or Angular), and Node.js)[1] is a free and open-source JavaScript software stack for building dynamic web sites and web applications.[2]

            
            Though often compared directly to other popular web development stacks such as the LAMP stack, the components of the MEAN stack are higher-level including a web application presentation layer and not including an operating system layer.[3]`,
            category : `Technology`,
            date : `February 2, 2022`,
            url : `https://www.mobinius.com/wp-content/uploads/2021/06/Banner_Why-is-MERN-Stack-Considered-to-be-the-Best-for-Start-Ups_.jpg`
        },
        {
            id : '5',
            title : `Digital Marketing`,
            body : `Digital marketing is the component of marketing that uses the Internet and online based digital technologies suchuse technology for marketing. As digital platforms became increasingly incorporated into marketing plans and everyday life,[4] and as people increasingly use digital devices instead of visiting physical shops,digital marketing campaigns have become prevalent, employing combinations of search engine optimization (SEO), search engine marketing (SEM),.`,
            category : `Technology`,
            date : `April 21, 2022`,
            url : `https://imageio.forbes.com/specials-images/dam/imageserve/974512548/960x0.jpg?fit=bounds&format=jpg&width=960`
        },
        {
            id :'1',
            title : 'Yoga',
            body : `Yoga (/ˈjoʊɡə/ (audio speaker iconlisten);[1] Sanskrit: योग, lit. 'yoke' or 'union' pronounced [joːɡɐ]) is a group of physical, mental, and spiritual practices or disciplines which originated in ancient India and aim to control (yoke) and still the mind, recognizing a detached witness-consciousness untouched by the mind (Chitta) and mundane suffering (Duḥkha). There is a wide variety of schools of yoga, practices, and goals[2] in Hinduism, Buddhism, and Jainism,and traditional and modern yoga is practiced worldwide.`,
            category : 'Fitness',
            date : 'January 26, 2022',
            url : 'https://static.toiimg.com/photo/73174476.cms'
        },
        {
            id :'2',
            title : 'GYM',
            body : `The word is derived from the ancient Greek term "gymnasium".[1] They are commonly found in athletic and fitness centres, and as activity and learning spaces in educational institutions. "Gym" is also slang for "fitness centre", which is often an area for indoor recreation. A "gym" may include or describe adjacent open air areas as well. In Western countries, "gyms" (or pl: gymnasia") often describe places with indoor or outdoor courts for basketball, hockey, tennis, boxing or wrestlin.`,
            category : 'Fitness',
            date : 'November 26, 2021',
            url : 'https://static.sportzbusiness.com/uploads/2020/08/gym.jpg'
        },
        {
            id :'3',
            title : 'Healthy Diet',
            body : `Diet (nutrition), the sum of the food consumed by an organism or group
            Dieting, the deliberate selection of food to control body weight or nutrient intake
            Diet food, foods that aid in creating a diet for weight loss or gain
            Healthy diet, the process of helping to maintain or improve overall health`,
            category : 'Fitness',
            date : 'July 16, 2021',
            url : 'https://www.spinecorrectioncenter.com/wp-content/uploads/2019/09/9-Benefits-of-Eating-a-Balanced-Diet_resized.png'
        },
        {
            id :'4',
            title : 'Aloyoga',
            body : `ALO YOGA IS ALL ABOUT SPREADING MINDFUL MOVEMENT, INSPIRING WELLNESS, AND CREATING A COMMUNITY. FOUNDED IN LOS ANGELES, ALO YOGA'S MISSION TO CREATE THE BEST YOGA CLOTHING IN THE WORLD AND INSPIRE PEOPLE TO BRING YOGA INTO THEIR LIFE`,
            category : 'Fitness',
            date : 'December 17, 2021',
            url : 'https://www.rli.uk.com/wp-content/uploads/2021/05/AloYoga.jpg'
        },
        {
            id :'5',
            title : 'Aerobics',
            body : `Aerobics is a form of physical exercise that combines rhythmic aerobic exercise with stretching and strength training routines with the goal of improving all elements of fitness (flexibility, muscular strength, and cardio-vascular fitness). It is usually performed to music and may be practiced in a group setting led by an instructor (fitness professional), although it can be done solo and without musical accompaniment. With the goal of preventing illness and promoting physical fitness, practitioners perform various routines comprising a number of different dance.`,
            category : 'Fitness',
            date : 'March 26, 2021',
            url : 'https://i.ytimg.com/vi/965qZScyVVI/maxresdefault.jpg'
        },
        {
            id :'1',
            title : `Pizza`,
            body : `The term pizza was first recorded in the 10th century in a Latin manuscript from the Southern Italian town of Gaeta in Lazio, on the border with Campania.[4] Modern pizza was invented in Naples, and the dish and its variants have since become popular in many countries`,
            category : 'Food',
            date : `January 29, 2022`,
            url : `https://img.onmanorama.com/content/dam/mm/en/food/features/images/2021/10/17/pizza.jpg`,
        },
        {
            id :'2',
            title : `Soft Drinks`,
            body : `A soft drink (see § Terminology for other names) is a drink that  flavoring. The sweetener may be a sugar, high-fructose corn syrup, fruit juice, a sugar substitute (in the case of diet drinks), or some combination of these. Soft drinks may also contain caffeine, colorings, preservatives, and/or other ingredients.`,
            category : 'Food',
            date : `January 29, 2022`,
            url : `https://s7g10.scene7.com/is/image/tetrapak/variety-of-ingredients-soft-drink-production?wid=600&hei=338&fmt=jpg&resMode=sharp2&qlt=85,0&op_usm=1.75,0.3,2,0`,
        },
        {
            id :'3',
            title : `KFC`,
            body : `KFC (also known as Kentucky Fried Chicken) is an American fast food restaurant chain headquartered in Louisville, Kentucky that specializes in fried chicken. It is the world's second-largest restaurant chain (as measured by sales) after McDonald's, with 22,621 locations globally in 150 countries as of December 2019.`,
            category : 'Food',
            date : `January 29, 2022`,
            url : `https://b.zmtcdn.com/data/pictures/8/18699298/9410759d611db9c62c3acc23c1f27e06.jpg`,
        },
        {
            id :'4',
            title : `Pasta`,
            body : `Pastas are divided into two broad categories: dried (pasta secca) and fresh (pasta fresca). Most dried pasta is produced commercially via an extrusion process, although it can be produced at home. `,
            category : 'Food',
            date : `January 29, 2022`,
            url : `https://www.seriouseats.com/thmb/30X5qqBS6U45eBWZh54oPNFd4Tc=/1500x1125/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2020__03__20200224-carretteira-pasta-vicky-wasik-20-956020e359dd49fc81aa0e99c9292043.jpg`,
        },
        {
            id :'5',
            title : `Deserts`,
            body : `Dessert (/dɪˈzɜːrt/) is a course that concludes a meal. The course consists of sweet foods, such as confections, and possibly a beverage such as dessert wine and liqueur. In some parts of the world, such as much of Central Africa and West Africa, and most parts of China, there is no tradition of a dessert course to conclude a meal.`,
            category : 'Food',
            date : `January 29, 2022`,
            url : `https://static.onecms.io/wp-content/uploads/sites/9/2021/10/15/air-fryer-brownies-FT-RECIPE1021-2.jpg`,
        }
    ]);

    return (
        <>
            <MainContext.Provider value={[Data, setData]}>
                {props.children}
            </MainContext.Provider>
        </>
    )
}