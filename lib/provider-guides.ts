export type ProviderGuide = {
  focus: string; background: string; backgroundUrl: string;
  offerings: {title:string; detail:string; url:string}[];
  distinctive: string; audiences: {title:string; detail:string}[];
  access: string; accessUrl: string; start: string[];
};
export const providerGuides: Record<string, ProviderGuide> = {
  youversion: {
    focus:'Build a daily Bible habit, on your own or with other people.',
    background:'Bible.com is the web home of YouVersion, a digital ministry of Life.Church. Its mission centers on helping people connect with Scripture regularly. The Bible App brings reading, listening, saved passages, and shared Bible activity together; YouVersion also offers a separate Bible App for Kids and tools for churches through YouVersion Connect.',
    backgroundUrl:'https://www.youversion.com/bible-app',
    offerings:[
      {title:'Read in the language and translation you prefer',detail:'Choose among a broad range of Bible versions and languages, compare wording, and listen where audio is available. The app also supports offline reading. Check the particular version for download and audio availability.',url:'https://www.youversion.com/bible-app'},
      {title:'Follow a plan with a clear next step',detail:'Bible Plans divide reading into daily selections and may include devotional material, audio, or video. A plan gives you a manageable place to begin when opening the whole Bible feels overwhelming.',url:'https://blog.youversion.com/getstarted/'},
      {title:'Keep the passages you want to return to',detail:'Highlights, bookmarks, and notes let you build a record of your reading. Account-linked additions sync across supported devices. Notes can be kept private or shared.',url:'https://blog.youversion.com/getstarted/'},
      {title:'Bring Scripture into a shared routine',detail:'Friends, verse sharing, and daily verse notifications give people ways to stay connected around Bible reading. Churches can use YouVersion Connect to share plans, teaching clips, updates, and events through their profile.',url:'https://www.youversion.com/bible-app'}
    ],
    distinctive:'Our take: YouVersion is especially appealing when the challenge is consistency. Reading, plans, reminders, and community give you several reasons to come back tomorrow. The daily verse can become the start of a reading routine or a conversation with someone else.',
    audiences:[
      {title:'People starting or restarting Bible reading',detail:'Try a short plan before committing to a long schedule. A defined daily selection can make the next step easier to choose.'},
      {title:'Friends, couples, and church groups',detail:'Use a shared passage as the basis for conversation. This is a practical fit when the relationship around reading matters as much as the reading itself.'},
      {title:'Readers who move between reading and listening',detail:'Explore available audio for travel or everyday routines, then return to the text to mark passages you want to revisit.'}
    ],
    access:'The Bible App is offered free. An account supports saved activity and community features. Bible.com and the mobile app have different interfaces and some different capabilities, so choose the platform that supports the way you want to read.',
    accessUrl:'https://www.youversion.com/bible-app',
    start:['Open the daily verse and read its surrounding chapter.','Choose one short Bible Plan that you can realistically finish.','Save a passage or invite a friend into your reading routine.']
  },
  biblegateway:{
    focus:'Look up a passage quickly, compare its wording, and explore study resources.',
    background:'Bible Gateway began in 1993 with Nick Hengeveld at Calvin College. It later became part of Zondervan and is now a member of HarperCollins Christian Publishing. Its core offering is a searchable online Bible, supported by audio, reading plans, devotionals, newsletters, and study resources.',
    backgroundUrl:'https://www.biblegateway.com/about/',
    offerings:[
      {title:'Search by reference, word, or phrase',detail:'Go directly to a passage or use advanced search to investigate a word or remembered phrase. This makes the site useful both for a known reference and for tracking down a passage you cannot quite place.',url:'https://www.biblegateway.com/help/tutorial/'},
      {title:'Compare translations as you read',detail:'The passage interface supports translation comparison. Looking at more than one rendering can help you identify wording that deserves closer study and questions to bring to a commentary.',url:'https://www.biblegateway.com/help/tutorial/'},
      {title:'Move from reading into reference work',detail:'Commentaries offer interpretations of passages; dictionaries and encyclopedias explain names, places, and unfamiliar terms. The resource directory also connects readers to audio Bibles and reading plans.',url:'https://www.biblegateway.com/resources/'},
      {title:'Build a regular reading or listening routine',detail:'Audio, devotional subscriptions, newsletters, and plans offer entry points beyond a one-time search. Bible Gateway also provides mobile apps for readers who want access away from their desktop browser.',url:'https://www.biblegateway.com/about/'}
    ],
    distinctive:'Our take: its strength is the path from a quick lookup to a more careful comparison. You can arrive with one reference, investigate a phrase, compare translations, and decide which study question to pursue next. That makes it useful alongside a printed Bible or another daily-reading app.',
    audiences:[
      {title:'People checking a verse they have heard',detail:'Start here when a sermon, conversation, or quotation leaves you wanting to locate the passage and read beyond the quoted sentence.'},
      {title:'Bible-study participants and teachers',detail:'Compare wording before discussing a difficult passage. Use differences as questions to investigate rather than deciding the meaning from one translation alone.'},
      {title:'Readers who prefer a browser',detail:'Its web-centered lookup and resource tools suit people who want to study without first building a purchased desktop library.'}
    ],
    access:'Bible searching and reading, along with many other resources, are free. Bible Gateway Plus is a paid membership for an expanded study library. Check the particular resource for access requirements; a free Bible lookup does not mean every linked reference book is included.',
    accessUrl:'https://www.biblegateway.com/resources/',
    start:['Enter a reference and read the full paragraph or chapter.','Compare a second translation and note a question raised by the wording.','Open a relevant commentary or dictionary entry to investigate that question.']
  },
  olivetree:{
    focus:'Keep your Bible and a growing study library together on your devices.',
    background:'Olive Tree Bible Software builds tools for reading and studying Scripture. Founder Drew Haninger developed early Bible software for handheld devices; the company took the Olive Tree name in 2000. Today its Bible App is available on iPhone, iPad, Android, Mac, and Windows, with a catalog of Bibles and study books.',
    backgroundUrl:'https://www.olivetree.com/about/',
    offerings:[
      {title:'A reader with a study workspace alongside it',detail:'The Study Center includes Resource Guide, Parallel, Notes, and Lookup tools. You can keep the biblical passage in view while exploring supporting material, instead of repeatedly leaving your place in the text.',url:'https://www.olivetree.com/blog/resource-guide/'},
      {title:'Resources connected to the passage',detail:'Resource Guide brings together applicable material from your library: related verses, study notes, commentaries, introductions, outlines, and entries about people or places. What appears depends on the resources you have.',url:'https://www.olivetree.com/blog/resource-guide/'},
      {title:'A library you can build around your interests',detail:'The store offers study Bibles, commentaries, dictionaries, devotionals, and other books. Its catalog also includes maps, atlases, concordances, and Greek and Hebrew study resources for readers who want those tools.',url:'https://www.olivetree.com/about/'},
      {title:'Parallel reading and visual study material',detail:'Compare available Bible texts alongside one another. When your library contains relevant charts, maps, or images, Resource Guide can surface them beside the passage you are reading.',url:'https://www.olivetree.com/blog/resource-guide/'}
    ],
    distinctive:'Our take: the appeal is a connected personal library. If you repeatedly study with the same commentary or study Bible, bringing those resources to the current passage can reduce the work of finding the right page. Its usefulness grows with a thoughtfully chosen library.',
    audiences:[
      {title:'People moving beyond a daily devotional',detail:'Consider it when you want to keep asking questions about a passage and consult the same trusted study resources regularly.'},
      {title:'Teachers and group leaders',detail:'A passage-focused workspace can help organize preparation. Choose resources that address the questions your group actually asks.'},
      {title:'Readers who already value study books',detail:'Try the reader and Resource Guide before buying a large collection. One useful book may be a better starting point than a broad bundle.'}
    ],
    access:'Olive Tree offers free books alongside resources sold through its store, and lists subscription collections. Access to a specific study Bible or commentary depends on your library. Review the resource description and platform support before purchasing.',
    accessUrl:'https://www.olivetree.com/about/',
    start:['Install the app for your device and choose a Bible.','Open the Study Center and explore the resources already available to you.','Add a study resource only after identifying the kind of help you want from it.']
  },
  dailyverses:{
    focus:'Find a daily verse or explore passages around a particular topic.',
    background:'DailyVerses.net is created by Tim, who describes combining his Bible interest with his software-development skills. The site centers on accessible verse discovery: a daily selection, topics, search, Bible books, and an archive. It also provides subscriptions and a configurable Bible-reading plan.',
    backgroundUrl:'https://dailyverses.net/about',
    offerings:[
      {title:'A simple daily selection',detail:'The homepage presents the day’s passage with translation choices and links to related topics. Readers can also browse the archive to revisit earlier selections.',url:'https://dailyverses.net/'},
      {title:'Explore by subject or Bible book',detail:'Topic pages collect references around subjects such as hope, prayer, forgiveness, family, and faith. Search and book browsing give you other paths when you know the theme or location you want to explore.',url:'https://dailyverses.net/'},
      {title:'Compare wording and discover another passage',detail:'Available translations let you view alternate renderings of a verse. A random-verse feature offers a different starting point when you are browsing without a particular reference in mind.',url:'https://dailyverses.net/'},
      {title:'Reading reminders at your own pace',detail:'The personal Bible-reading plan lets you choose reading days and Bible books, sends email reminders, and provides progress tracking. You can adjust the pace instead of following one fixed calendar.',url:'https://dailyverses.net/personal-bible-read-plan'}
    ],
    distinctive:'Our take: this is an approachable starting point when you arrive with a subject rather than a reference. You might begin with forgiveness, discover a passage, and then read the surrounding chapter. The custom reading pace is also attractive if a rigid daily schedule has been hard to maintain.',
    audiences:[
      {title:'People looking for a brief daily reading',detail:'Use one verse as an invitation to pause, then decide whether you have time to explore its larger passage.'},
      {title:'Readers with a specific topic in mind',detail:'Topic collections can help you find starting references for reflection or conversation. Read each reference in its setting before applying it.'},
      {title:'People who want a flexible reading schedule',detail:'Consider the configurable plan if you want to choose your reading days and pace rather than keep up with a preset year-long schedule.'}
    ],
    access:'The public verse and topic pages can be browsed directly. The personal reading-plan page offers free signup and email confirmation, followed by account settings for your schedule. The site also accepts donations.',
    accessUrl:'https://dailyverses.net/personal-bible-read-plan',
    start:['Choose today’s verse or a topic you want to explore.','Read the reference in its surrounding chapter.','If you want a routine, configure a reading plan with realistic reading days.']
  },
  biblestudytools:{
    focus:'Explore Bible questions through reference tools, articles, and reading guides.',
    background:'BibleStudyTools.com is part of Salem Web Network, within Salem Media Group. It serves Christians across ages and stages with Bible reading, study, and practical application resources. Its approach combines an online Bible library with editorial articles and devotionals.',
    backgroundUrl:'https://www.biblestudytools.com/help/about-us-links/bst-about-us.html',
    offerings:[
      {title:'Read and compare Bible passages',detail:'Its Bible navigation includes versions, parallel reading, translation comparison, audio, and interlinear tools. These offer several ways to approach a passage before moving into supporting study material.',url:'https://www.biblestudytools.com/plus-toolkits/'},
      {title:'Investigate names, words, and interpretations',detail:'The reference library includes commentaries, concordances, dictionaries, encyclopedias, and Hebrew and Greek lexicons. Examples named by the provider include Matthew Henry’s commentary and Strong’s concordance.',url:'https://www.biblestudytools.com/help/about-us-links/bst-about-us.html'},
      {title:'Read articles and topic collections',detail:'Devotionals, study guides, and practical articles help readers explore questions and application. Topic pages collect relevant verses, while daily verse and reading-plan emails support regular engagement.',url:'https://www.biblestudytools.com/help/about-us-links/bst-about-us.html'},
      {title:'Follow a more focused study collection',detail:'PLUS toolkits gather resources around a particular area of study. The toolkit directory includes Gospel studies and a Psalms collection with reading, prayer, and printable resources.',url:'https://www.biblestudytools.com/plus-toolkits/'}
    ],
    distinctive:'Our take: it suits readers who move between a Bible passage and an article about the question that passage raises. The combination of reference works and accessible editorial material offers several entry points, from a quick topic search to a more deliberate study session.',
    audiences:[
      {title:'People who begin with a question',detail:'Try it when you want to locate relevant passages and then read an explanation of the issue you are exploring.'},
      {title:'Readers learning how to study',detail:'Choose one reference tool at a time. A dictionary can clarify a term; a commentary can offer an interpretation; a concordance can help trace a word.'},
      {title:'Teachers gathering discussion material',detail:'Use an article or study guide to frame questions, then return to the biblical passage so the discussion stays connected to the text.'}
    ],
    access:'The site provides free reading and study content alongside a paid PLUS membership. Its About page describes PLUS as adding exclusive articles, commentaries, printable guides, personalization features, and an ad-free experience. Check access on each resource.',
    accessUrl:'https://www.biblestudytools.com/help/about-us-links/bst-about-us.html',
    start:['Read a complete passage connected to your question.','Use a dictionary or commentary to investigate one specific point.','Choose a reading guide or toolkit if you want to study that subject over several sessions.']
  },
  verseoftheday:{
    focus:'Reflect on one daily passage with an accompanying thought and prayer.',
    background:'VerseoftheDay.com began in 1998 with Ben Steed and joined the Heartlight Network in 2000. Its daily Thoughts and Prayer are written by Phil Ware. The reader-supported ministry combines a selected Bible passage with a short devotional response.',
    backgroundUrl:'https://www.verseoftheday.com/',
    offerings:[
      {title:'A complete daily devotional rhythm',detail:'The daily page brings together Scripture, Thoughts on Today’s Verse, and My Prayer. The reflection moves toward everyday Christian living, and the prayer offers a response to the passage.',url:'https://www.verseoftheday.com/'},
      {title:'Several ways to receive the devotional',detail:'The site links to email subscriptions, audio listening services, and iOS and Android apps. It also offers translated versions of the devotional for readers in multiple languages.',url:'https://www.verseoftheday.com/'},
      {title:'Return to earlier devotionals',detail:'Previous entries can be browsed by date. This gives readers a way to find a devotional again instead of relying on remembering which day it arrived.',url:'https://www.verseoftheday.com/'},
      {title:'Find devotionals around a subject',detail:'The topical directory groups verses and devotionals by subject. It provides another route into the archive when you want to reflect on a theme rather than follow the calendar.',url:'https://www.verseoftheday.com/topics/'}
    ],
    distinctive:'Our take: the consistent devotional voice is the attraction. You receive a passage, a reflection, and a prayer as one small reading experience. It may appeal to readers who want help slowing down and responding to Scripture before continuing their day.',
    audiences:[
      {title:'People who want a prayerful daily pause',detail:'Try reading the passage first, then the reflection, and finally putting the prayer into your own words.'},
      {title:'Readers who appreciate a regular devotional writer',detail:'A consistent voice may make the daily visit feel familiar. Consider whether the writer’s approach helps you reflect thoughtfully on the passage.'},
      {title:'People who prefer listening',detail:'Explore the audio option when listening fits your routine, then return to the passage later if it raises a question you want to study.'}
    ],
    access:'The daily devotional and archive are publicly available. The ministry describes support from readers and provides subscription and app links. Consult the linked app listings for their current terms and availability.',
    accessUrl:'https://www.verseoftheday.com/',
    start:['Read today’s passage before reading the devotional thought.','Consider the reflection and pray in your own words.','Explore a related topic or revisit an earlier entry when you want another reading.']
  }
};
