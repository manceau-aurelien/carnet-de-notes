"use strict";
// =====================================================================
//  BRICKS — NIVEAU 2 du parcours « anglais » : les temps (après le Dragon des Mots)
// Fichier généré automatiquement (outils/niveau2) : ne pas modifier à la main.
// =====================================================================
(function () {
  const c = COURSES.en;
  c.tenses = {
    "t1": {
      "icon": "⏳",
      "name": "Présent continu",
      "desc": "Dire ce qui se passe en ce moment (be + -ing), aux 3 formes, avec les mots de la brique."
    },
    "t2": {
      "icon": "⏪",
      "name": "Le passé",
      "desc": "Raconter au passé (-ed, verbes irréguliers, did), aux 3 formes, avec les mots de la brique."
    },
    "t3": {
      "icon": "⏩",
      "name": "Le futur",
      "desc": "Parler du futur avec will, aux 3 formes, avec les mots de la brique."
    }
  };
  Object.assign(c.skills, {
    "t1": {
      "name": "Présent continu",
      "icon": "⏳",
      "lesson": [
        "Le <b>présent continu</b> dit ce qui se passe <b>en ce moment</b> :<br><i>I <b>am eating</b> an apple now.</i> — Je mange une pomme (en ce moment).",
        "On le forme avec <b>be</b> (am / is / are) + le verbe en <b>-ing</b> :<br><i>I am reading · She is playing · They are swimming</i><br>Le verbe perd son <b>e</b> final (make → mak<b>ing</b>) et double parfois sa consonne (run → ru<b>nn</b>ing).",
        "Négation : <b>not</b> après be → <i>He is <b>not</b> sleeping.</i><br>Question : on inverse be et le sujet → <i><b>Are</b> you working?</i>",
        "On l'utilise aussi pour un projet déjà prévu : <i>We are playing football this weekend.</i><br>⚠️ Pas avec les verbes d'état (know, like, want…) : on dit <i>I know</i>, jamais <i>I am knowing</i>."
      ]
    },
    "t2": {
      "name": "Le passé",
      "icon": "⏪",
      "lesson": [
        "Le <b>prétérit</b> raconte une action <b>terminée</b> :<br><i>I <b>played</b> football yesterday.</i> — J'ai joué au football hier.",
        "Verbes réguliers : on ajoute <b>-ed</b> → <i>work → work<b>ed</b>, cook → cook<b>ed</b>, study → stud<b>ied</b></i>.<br>Beaucoup de verbes courants sont <b>irréguliers</b> : <i>go → <b>went</b>, eat → <b>ate</b>, see → <b>saw</b>, come → <b>came</b></i>…",
        "Négation et question avec <b>did</b> (pareil pour toutes les personnes), et le verbe revient à sa forme de base :<br><i>I <b>didn't</b> go. — <b>Did</b> you go?</i> (jamais <i>didn't went</i> !)",
        "<b>Be</b> a deux formes : <b>was</b> (I, he, she, it) et <b>were</b> (you, we, they) :<br><i>I was tired. — Were you at home?</i>"
      ]
    },
    "t3": {
      "name": "Le futur",
      "icon": "⏩",
      "lesson": [
        "Pour parler du futur, on met <b>will</b> devant le verbe :<br><i>I <b>will</b> eat. — She <b>will</b> come tomorrow.</i>",
        "C'est la même forme pour toutes les personnes : pas de <b>-s</b>, pas de <b>to</b> :<br><i>He will play</i> (jamais <i>He will plays</i>).",
        "Négation : <b>won't</b> (= will not) → <i>I <b>won't</b> be late.</i><br>Question : <b>Will</b> en premier → <i><b>Will</b> you come tomorrow?</i>"
      ]
    }
  });
  c.tenseForms = [["answer", "answers", "answered", "answering"], ["arrive", "arrives", "arrived", "arriving"], ["ask", "asks", "asked", "asking"], ["blow", "blows", "blew", "blowing"], ["buy", "buys", "bought", "buying"], ["close", "closes", "closed", "closing"], ["come", "comes", "came", "coming"], ["cook", "cooks", "cooked", "cooking"], ["cost", "costs", "costing"], ["count", "counts", "counted", "counting"], ["dance", "dances", "danced", "dancing"], ["do", "does", "did", "doing"], ["drink", "drinks", "drank", "drinking"], ["drive", "drives", "drove", "driving"], ["eat", "eats", "ate", "eating"], ["fall", "falls", "fell", "falling"], ["forget", "forgets", "forgot", "forgetting"], ["get", "gets", "got", "getting"], ["go", "goes", "went", "going"], ["have", "has", "had", "having"], ["help", "helps", "helped", "helping"], ["know", "knows", "knew", "knowing"], ["learn", "learns", "learned", "learning"], ["leave", "leaves", "left", "leaving"], ["listen", "listens", "listened", "listening"], ["make", "makes", "made", "making"], ["open", "opens", "opened", "opening"], ["pack", "packs", "packed", "packing"], ["play", "plays", "played", "playing"], ["rain", "rains", "rained", "raining"], ["read", "reads", "reading"], ["ride", "rides", "rode", "riding"], ["run", "runs", "ran", "running"], ["say", "says", "said", "saying"], ["see", "sees", "saw", "seeing"], ["shine", "shines", "shone", "shining"], ["sing", "sings", "sang", "singing"], ["sleep", "sleeps", "slept", "sleeping"], ["snow", "snows", "snowed", "snowing"], ["speak", "speaks", "spoke", "speaking"], ["stay", "stays", "stayed", "staying"], ["study", "studies", "studied", "studying"], ["swim", "swims", "swam", "swimming"], ["take", "takes", "took", "taking"], ["tell", "tells", "told", "telling"], ["understand", "understands", "understood", "understanding"], ["visit", "visits", "visited", "visiting"], ["wait", "waits", "waited", "waiting"], ["walk", "walks", "walked", "walking"], ["wash", "washes", "washed", "washing"], ["watch", "watches", "watched", "watching"], ["win", "wins", "won", "winning"], ["work", "works", "worked", "working"], ["write", "writes", "wrote", "writing"], ["was", "were", "is", "are"], ["did", "do", "does"], ["didn't", "don't", "doesn't"], ["won't", "don't"]];
  c.bricks.push(
    {
      "id": "time",
      "name": "Le temps qui passe",
      "icon": "⏰",
      "lvl": 2,
      "words": [
        "today=aujourd'hui",
        "yesterday=hier",
        "tomorrow=demain",
        "now=maintenant",
        "morning=matin",
        "afternoon=après-midi",
        "evening=soir",
        "night=nuit",
        "week=semaine",
        "year=année / an"
      ],
      "sentences": [],
      "oral": [
        "I drink tea in the morning. | I don't drink tea in the morning. | Do you drink tea in the morning? || Je bois du thé le matin. | Je ne bois pas de thé le matin. | Est-ce que tu bois du thé le matin ?",
        "We play football in the afternoon. | We don't play football in the afternoon. | Do you play football in the afternoon? || Nous jouons au football l'après-midi. | Nous ne jouons pas au football l'après-midi. | Est-ce que vous jouez au football l'après-midi ?",
        "He reads a book in the evening. | He doesn't read a book in the evening. | Does he read a book in the evening? || Il lit un livre le soir. | Il ne lit pas de livre le soir. | Est-ce qu'il lit un livre le soir ?",
        "The cat sleeps at night. | The cat doesn't sleep at night. | Does the cat sleep at night? || Le chat dort la nuit. | Le chat ne dort pas la nuit. | Est-ce que le chat dort la nuit ?",
        "She is here today. | She is not here today. | Is she here today? || Elle est ici aujourd'hui. | Elle n'est pas ici aujourd'hui. | Est-ce qu'elle est ici aujourd'hui ?",
        "I am happy now. | I am not happy now. | Are you happy now? || Je suis heureux maintenant. | Je ne suis pas heureux maintenant. | Est-ce que tu es heureux maintenant ?",
        "We go to school tomorrow. | We don't go to school tomorrow. | Do you go to school tomorrow? || Nous allons à l'école demain. | Nous n'allons pas à l'école demain. | Est-ce que vous allez à l'école demain ?",
        "My brother plays football every week. | My brother doesn't play football every week. | Does your brother play football every week? || Mon frère joue au football chaque semaine. | Mon frère ne joue pas au football chaque semaine. | Est-ce que ton frère joue au football chaque semaine ?",
        "My sister is ten this year. | My sister is not ten this year. | Is your sister ten this year? || Ma sœur a dix ans cette année. | Ma sœur n'a pas dix ans cette année. | Est-ce que ta sœur a dix ans cette année ?",
        "My friends are here this week. | My friends are not here this week. | Are your friends here this week? || Mes amis sont ici cette semaine. | Mes amis ne sont pas ici cette semaine. | Est-ce que tes amis sont ici cette semaine ?"
      ],
      "tenses": {
        "t1": [
          "I am eating an apple now. | I am not eating an apple now. | Are you eating an apple now? || Je mange une pomme maintenant. | Je ne mange pas de pomme maintenant. | Est-ce que tu manges une pomme maintenant ?",
          "She is reading a book this morning. | She is not reading a book this morning. | Is she reading a book this morning? || Elle lit un livre ce matin. | Elle ne lit pas de livre ce matin. | Est-ce qu'elle lit un livre ce matin ?",
          "We are playing football this afternoon. | We are not playing football this afternoon. | Are you playing football this afternoon? || Nous jouons au football cet après-midi. | Nous ne jouons pas au football cet après-midi. | Est-ce que vous jouez au football cet après-midi ?",
          "They are drinking tea this evening. | They are not drinking tea this evening. | Are they drinking tea this evening? || Ils boivent du thé ce soir. | Ils ne boivent pas de thé ce soir. | Est-ce qu'ils boivent du thé ce soir ?",
          "The baby is sleeping now. | The baby is not sleeping now. | Is the baby sleeping now? || Le bébé dort maintenant. | Le bébé ne dort pas maintenant. | Est-ce que le bébé dort maintenant ?",
          "My brother is going to school today. | My brother is not going to school today. | Is your brother going to school today? || Mon frère va à l'école aujourd'hui. | Mon frère ne va pas à l'école aujourd'hui. | Est-ce que ton frère va à l'école aujourd'hui ?"
        ],
        "t2": [
          "I ate an apple yesterday. | I didn't eat an apple yesterday. | Did you eat an apple yesterday? || J'ai mangé une pomme hier. | Je n'ai pas mangé de pomme hier. | Est-ce que tu as mangé une pomme hier ?",
          "She read a book last night. | She didn't read a book last night. | Did she read a book last night? || Elle a lu un livre hier soir. | Elle n'a pas lu de livre hier soir. | Est-ce qu'elle a lu un livre hier soir ?",
          "We played football yesterday afternoon. | We didn't play football yesterday afternoon. | Did you play football yesterday afternoon? || Nous avons joué au football hier après-midi. | Nous n'avons pas joué au football hier après-midi. | Est-ce que vous avez joué au football hier après-midi ?",
          "I was sad yesterday. | I was not sad yesterday. | Were you sad yesterday? || J'étais triste hier. | Je n'étais pas triste hier. | Est-ce que tu étais triste hier ?",
          "They went to school this morning. | They didn't go to school this morning. | Did they go to school this morning? || Ils sont allés à l'école ce matin. | Ils ne sont pas allés à l'école ce matin. | Est-ce qu'ils sont allés à l'école ce matin ?",
          "My sister saw her friends last week. | My sister didn't see her friends last week. | Did your sister see her friends last week? || Ma sœur a vu ses amis la semaine dernière. | Ma sœur n'a pas vu ses amis la semaine dernière. | Est-ce que ta sœur a vu ses amis la semaine dernière ?",
          "My grandfather went to London last year. | My grandfather didn't go to London last year. | Did your grandfather go to London last year? || Mon grand-père est allé à Londres l'année dernière. | Mon grand-père n'est pas allé à Londres l'année dernière. | Est-ce que ton grand-père est allé à Londres l'année dernière ?"
        ],
        "t3": [
          "I will eat chicken tomorrow. | I won't eat chicken tomorrow. | Will you eat chicken tomorrow? || Je mangerai du poulet demain. | Je ne mangerai pas de poulet demain. | Est-ce que tu mangeras du poulet demain ?",
          "We will see our grandmother next week. | We won't see our grandmother next week. | Will you see your grandmother next week? || Nous verrons notre grand-mère la semaine prochaine. | Nous ne verrons pas notre grand-mère la semaine prochaine. | Est-ce que vous verrez votre grand-mère la semaine prochaine ?",
          "She will read this book tonight. | She won't read this book tonight. | Will she read this book tonight? || Elle lira ce livre ce soir. | Elle ne lira pas ce livre ce soir. | Est-ce qu'elle lira ce livre ce soir ?",
          "They will play football tomorrow morning. | They won't play football tomorrow morning. | Will they play football tomorrow morning? || Ils joueront au football demain matin. | Ils ne joueront pas au football demain matin. | Est-ce qu'ils joueront au football demain matin ?",
          "My brother will be ten next year. | My brother won't be ten next year. | Will your brother be ten next year? || Mon frère aura dix ans l'année prochaine. | Mon frère n'aura pas dix ans l'année prochaine. | Est-ce que ton frère aura dix ans l'année prochaine ?",
          "I will drink tea this afternoon. | I won't drink tea this afternoon. | Will you drink tea this afternoon? || Je boirai du thé cet après-midi. | Je ne boirai pas de thé cet après-midi. | Est-ce que tu boiras du thé cet après-midi ?"
        ]
      }
    },
    {
      "id": "days",
      "name": "Les jours",
      "icon": "📅",
      "lvl": 2,
      "words": [
        "Monday=lundi",
        "Tuesday=mardi",
        "Wednesday=mercredi",
        "Thursday=jeudi",
        "Friday=vendredi",
        "Saturday=samedi",
        "Sunday=dimanche",
        "weekend=week-end",
        "day=jour / journée",
        "month=mois"
      ],
      "sentences": [],
      "oral": [
        "I go to school on Mondays. | I don't go to school on Mondays. | Do you go to school on Mondays? || Je vais à l'école le lundi. | Je ne vais pas à l'école le lundi. | Est-ce que tu vas à l'école le lundi ?",
        "She plays football on Tuesdays. | She doesn't play football on Tuesdays. | Does she play football on Tuesdays? || Elle joue au football le mardi. | Elle ne joue pas au football le mardi. | Est-ce qu'elle joue au football le mardi ?",
        "We eat fish on Wednesdays. | We don't eat fish on Wednesdays. | Do you eat fish on Wednesdays? || Nous mangeons du poisson le mercredi. | Nous ne mangeons pas de poisson le mercredi. | Est-ce que vous mangez du poisson le mercredi ?",
        "He reads a book on Thursdays. | He doesn't read a book on Thursdays. | Does he read a book on Thursdays? || Il lit un livre le jeudi. | Il ne lit pas de livre le jeudi. | Est-ce qu'il lit un livre le jeudi ?",
        "They see their grandmother on Fridays. | They don't see their grandmother on Fridays. | Do they see their grandmother on Fridays? || Ils voient leur grand-mère le vendredi. | Ils ne voient pas leur grand-mère le vendredi. | Est-ce qu'ils voient leur grand-mère le vendredi ?",
        "My father drinks tea on Saturdays. | My father doesn't drink tea on Saturdays. | Does your father drink tea on Saturdays? || Mon père boit du thé le samedi. | Mon père ne boit pas de thé le samedi. | Est-ce que ton père boit du thé le samedi ?",
        "I am at home on Sundays. | I am not at home on Sundays. | Are you at home on Sundays? || Je suis à la maison le dimanche. | Je ne suis pas à la maison le dimanche. | Est-ce que tu es à la maison le dimanche ?",
        "We play with our friends at the weekend. | We don't play with our friends at the weekend. | Do you play with your friends at the weekend? || Nous jouons avec nos amis le week-end. | Nous ne jouons pas avec nos amis le week-end. | Est-ce que vous jouez avec vos amis le week-end ?",
        "A week has seven days. | A week doesn't have seven days. | Does a week have seven days? || Une semaine a sept jours. | Une semaine n'a pas sept jours. | Est-ce qu'une semaine a sept jours ?",
        "My birthday is this month. | My birthday is not this month. | Is your birthday this month? || Mon anniversaire est ce mois-ci. | Mon anniversaire n'est pas ce mois-ci. | Est-ce que ton anniversaire est ce mois-ci ?"
      ],
      "tenses": {
        "t1": [
          "We are playing football this weekend. | We are not playing football this weekend. | Are you playing football this weekend? || Nous jouons au football ce week-end. | Nous ne jouons pas au football ce week-end. | Est-ce que vous jouez au football ce week-end ?",
          "I am seeing my grandmother on Sunday. | I am not seeing my grandmother on Sunday. | Are you seeing your grandmother on Sunday? || Je vois ma grand-mère dimanche. | Je ne vois pas ma grand-mère dimanche. | Est-ce que tu vois ta grand-mère dimanche ?",
          "She is going to London on Friday. | She is not going to London on Friday. | Is she going to London on Friday? || Elle va à Londres vendredi. | Elle ne va pas à Londres vendredi. | Est-ce qu'elle va à Londres vendredi ?",
          "They are eating at my house on Saturday. | They are not eating at my house on Saturday. | Are they eating at your house on Saturday? || Ils mangent chez moi samedi. | Ils ne mangent pas chez moi samedi. | Est-ce qu'ils mangent chez toi samedi ?",
          "He is reading a good book this month. | He is not reading a good book this month. | Is he reading a good book this month? || Il lit un bon livre ce mois-ci. | Il ne lit pas de bon livre ce mois-ci. | Est-ce qu'il lit un bon livre ce mois-ci ?",
          "My parents are going to Paris on Tuesday. | My parents are not going to Paris on Tuesday. | Are your parents going to Paris on Tuesday? || Mes parents vont à Paris mardi. | Mes parents ne vont pas à Paris mardi. | Est-ce que tes parents vont à Paris mardi ?"
        ],
        "t2": [
          "I went to school on Monday. | I didn't go to school on Monday. | Did you go to school on Monday? || Je suis allé à l'école lundi. | Je ne suis pas allé à l'école lundi. | Est-ce que tu es allé à l'école lundi ?",
          "She saw her friends on Tuesday. | She didn't see her friends on Tuesday. | Did she see her friends on Tuesday? || Elle a vu ses amis mardi. | Elle n'a pas vu ses amis mardi. | Est-ce qu'elle a vu ses amis mardi ?",
          "We ate fish on Wednesday. | We didn't eat fish on Wednesday. | Did you eat fish on Wednesday? || Nous avons mangé du poisson mercredi. | Nous n'avons pas mangé de poisson mercredi. | Est-ce que vous avez mangé du poisson mercredi ?",
          "I was at home on Sunday. | I was not at home on Sunday. | Were you at home on Sunday? || J'étais à la maison dimanche. | Je n'étais pas à la maison dimanche. | Est-ce que tu étais à la maison dimanche ?",
          "They played football on Thursday. | They didn't play football on Thursday. | Did they play football on Thursday? || Ils ont joué au football jeudi. | Ils n'ont pas joué au football jeudi. | Est-ce qu'ils ont joué au football jeudi ?",
          "He read three books last month. | He didn't read three books last month. | Did he read three books last month? || Il a lu trois livres le mois dernier. | Il n'a pas lu trois livres le mois dernier. | Est-ce qu'il a lu trois livres le mois dernier ?",
          "We drank tea on Friday. | We didn't drink tea on Friday. | Did you drink tea on Friday? || Nous avons bu du thé vendredi. | Nous n'avons pas bu de thé vendredi. | Est-ce que vous avez bu du thé vendredi ?"
        ],
        "t3": [
          "I will go to school on Monday. | I won't go to school on Monday. | Will you go to school on Monday? || J'irai à l'école lundi. | Je n'irai pas à l'école lundi. | Est-ce que tu iras à l'école lundi ?",
          "We will see our friends on Saturday. | We won't see our friends on Saturday. | Will you see your friends on Saturday? || Nous verrons nos amis samedi. | Nous ne verrons pas nos amis samedi. | Est-ce que vous verrez vos amis samedi ?",
          "She will play football on Sunday. | She won't play football on Sunday. | Will she play football on Sunday? || Elle jouera au football dimanche. | Elle ne jouera pas au football dimanche. | Est-ce qu'elle jouera au football dimanche ?",
          "They will eat fish on Friday. | They won't eat fish on Friday. | Will they eat fish on Friday? || Ils mangeront du poisson vendredi. | Ils ne mangeront pas de poisson vendredi. | Est-ce qu'ils mangeront du poisson vendredi ?",
          "He will read a book this weekend. | He won't read a book this weekend. | Will he read a book this weekend? || Il lira un livre ce week-end. | Il ne lira pas de livre ce week-end. | Est-ce qu'il lira un livre ce week-end ?",
          "My sister will be here on Wednesday. | My sister won't be here on Wednesday. | Will your sister be here on Wednesday? || Ma sœur sera ici mercredi. | Ma sœur ne sera pas ici mercredi. | Est-ce que ta sœur sera ici mercredi ?"
        ]
      }
    },
    {
      "id": "numbers2",
      "name": "Nombres 11 à 20",
      "icon": "🔢",
      "lvl": 2,
      "words": [
        "eleven=onze",
        "twelve=douze",
        "thirteen=treize",
        "fourteen=quatorze",
        "fifteen=quinze",
        "sixteen=seize",
        "seventeen=dix-sept",
        "eighteen=dix-huit",
        "nineteen=dix-neuf",
        "twenty=vingt"
      ],
      "sentences": [],
      "oral": [
        "I have eleven books. | I don't have eleven books. | Do you have eleven books? || J'ai onze livres. | Je n'ai pas onze livres. | Est-ce que tu as onze livres ?",
        "She is twelve. | She is not twelve. | Is she twelve? || Elle a douze ans. | Elle n'a pas douze ans. | Est-ce qu'elle a douze ans ?",
        "We have thirteen eggs. | We don't have thirteen eggs. | Do you have thirteen eggs? || Nous avons treize œufs. | Nous n'avons pas treize œufs. | Est-ce que vous avez treize œufs ?",
        "My brother is fourteen. | My brother is not fourteen. | Is your brother fourteen? || Mon frère a quatorze ans. | Mon frère n'a pas quatorze ans. | Est-ce que ton frère a quatorze ans ?",
        "They want fifteen apples. | They don't want fifteen apples. | Do they want fifteen apples? || Ils veulent quinze pommes. | Ils ne veulent pas quinze pommes. | Est-ce qu'ils veulent quinze pommes ?",
        "My grandmother has sixteen chickens. | My grandmother doesn't have sixteen chickens. | Does your grandmother have sixteen chickens? || Ma grand-mère a seize poules. | Ma grand-mère n'a pas seize poules. | Est-ce que ta grand-mère a seize poules ?",
        "He is seventeen. | He is not seventeen. | Is he seventeen? || Il a dix-sept ans. | Il n'a pas dix-sept ans. | Est-ce qu'il a dix-sept ans ?",
        "I see eighteen birds. | I don't see eighteen birds. | Do you see eighteen birds? || Je vois dix-huit oiseaux. | Je ne vois pas dix-huit oiseaux. | Est-ce que tu vois dix-huit oiseaux ?",
        "The house has nineteen windows. | The house doesn't have nineteen windows. | Does the house have nineteen windows? || La maison a dix-neuf fenêtres. | La maison n'a pas dix-neuf fenêtres. | Est-ce que la maison a dix-neuf fenêtres ?",
        "My father reads twenty books a year. | My father doesn't read twenty books a year. | Does your father read twenty books a year? || Mon père lit vingt livres par an. | Mon père ne lit pas vingt livres par an. | Est-ce que ton père lit vingt livres par an ?"
      ],
      "tenses": {
        "t1": [
          "The children are counting to twenty. | The children are not counting to twenty. | Are the children counting to twenty? || Les enfants comptent jusqu'à vingt. | Les enfants ne comptent pas jusqu'à vingt. | Est-ce que les enfants comptent jusqu'à vingt ?",
          "She is buying twelve eggs. | She is not buying twelve eggs. | Is she buying twelve eggs? || Elle achète douze œufs. | Elle n'achète pas douze œufs. | Est-ce qu'elle achète douze œufs ?",
          "We are playing with fourteen friends. | We are not playing with fourteen friends. | Are you playing with fourteen friends? || Nous jouons avec quatorze amis. | Nous ne jouons pas avec quatorze amis. | Est-ce que vous jouez avec quatorze amis ?",
          "They are eating sixteen cakes. | They are not eating sixteen cakes. | Are they eating sixteen cakes? || Ils mangent seize gâteaux. | Ils ne mangent pas seize gâteaux. | Est-ce qu'ils mangent seize gâteaux ?",
          "I am reading page seventeen. | I am not reading page seventeen. | Are you reading page seventeen? || Je lis la page dix-sept. | Je ne lis pas la page dix-sept. | Est-ce que tu lis la page dix-sept ?",
          "My grandmother is making twenty cakes. | My grandmother is not making twenty cakes. | Is your grandmother making twenty cakes? || Ma grand-mère fait vingt gâteaux. | Ma grand-mère ne fait pas vingt gâteaux. | Est-ce que ta grand-mère fait vingt gâteaux ?"
        ],
        "t2": [
          "I bought eleven apples. | I didn't buy eleven apples. | Did you buy eleven apples? || J'ai acheté onze pommes. | Je n'ai pas acheté onze pommes. | Est-ce que tu as acheté onze pommes ?",
          "She read twelve books last year. | She didn't read twelve books last year. | Did she read twelve books last year? || Elle a lu douze livres l'année dernière. | Elle n'a pas lu douze livres l'année dernière. | Est-ce qu'elle a lu douze livres l'année dernière ?",
          "We saw thirteen ducks. | We didn't see thirteen ducks. | Did you see thirteen ducks? || Nous avons vu treize canards. | Nous n'avons pas vu treize canards. | Est-ce que vous avez vu treize canards ?",
          "He was fifteen last year. | He was not fifteen last year. | Was he fifteen last year? || Il avait quinze ans l'année dernière. | Il n'avait pas quinze ans l'année dernière. | Est-ce qu'il avait quinze ans l'année dernière ?",
          "They ate fourteen eggs. | They didn't eat fourteen eggs. | Did they eat fourteen eggs? || Ils ont mangé quatorze œufs. | Ils n'ont pas mangé quatorze œufs. | Est-ce qu'ils ont mangé quatorze œufs ?",
          "My brother drank sixteen glasses of water. | My brother didn't drink sixteen glasses of water. | Did your brother drink sixteen glasses of water? || Mon frère a bu seize verres d'eau. | Mon frère n'a pas bu seize verres d'eau. | Est-ce que ton frère a bu seize verres d'eau ?",
          "The children counted to twenty. | The children didn't count to twenty. | Did the children count to twenty? || Les enfants ont compté jusqu'à vingt. | Les enfants n'ont pas compté jusqu'à vingt. | Est-ce que les enfants ont compté jusqu'à vingt ?"
        ],
        "t3": [
          "I will be eleven tomorrow. | I won't be eleven tomorrow. | Will you be eleven tomorrow? || J'aurai onze ans demain. | Je n'aurai pas onze ans demain. | Est-ce que tu auras onze ans demain ?",
          "She will buy twelve eggs. | She won't buy twelve eggs. | Will she buy twelve eggs? || Elle achètera douze œufs. | Elle n'achètera pas douze œufs. | Est-ce qu'elle achètera douze œufs ?",
          "We will see thirteen horses. | We won't see thirteen horses. | Will you see thirteen horses? || Nous verrons treize chevaux. | Nous ne verrons pas treize chevaux. | Est-ce que vous verrez treize chevaux ?",
          "They will eat seventeen cakes. | They won't eat seventeen cakes. | Will they eat seventeen cakes? || Ils mangeront dix-sept gâteaux. | Ils ne mangeront pas dix-sept gâteaux. | Est-ce qu'ils mangeront dix-sept gâteaux ?",
          "He will read eighteen books next year. | He won't read eighteen books next year. | Will he read eighteen books next year? || Il lira dix-huit livres l'année prochaine. | Il ne lira pas dix-huit livres l'année prochaine. | Est-ce qu'il lira dix-huit livres l'année prochaine ?",
          "My sister will be nineteen next month. | My sister won't be nineteen next month. | Will your sister be nineteen next month? || Ma sœur aura dix-neuf ans le mois prochain. | Ma sœur n'aura pas dix-neuf ans le mois prochain. | Est-ce que ta sœur aura dix-neuf ans le mois prochain ?"
        ]
      }
    },
    {
      "id": "actions",
      "name": "Petites actions",
      "icon": "🧹",
      "lvl": 2,
      "words": [
        "work=travailler",
        "walk=marcher",
        "cook=cuisiner",
        "watch=regarder",
        "listen=écouter",
        "help=aider",
        "open=ouvrir",
        "close=fermer",
        "wash=laver",
        "study=étudier"
      ],
      "sentences": [],
      "oral": [
        "I work in the morning. | I don't work in the morning. | Do you work in the morning? || Je travaille le matin. | Je ne travaille pas le matin. | Est-ce que tu travailles le matin ?",
        "She walks to school. | She doesn't walk to school. | Does she walk to school? || Elle marche jusqu'à l'école. | Elle ne marche pas jusqu'à l'école. | Est-ce qu'elle marche jusqu'à l'école ?",
        "We cook in the evening. | We don't cook in the evening. | Do you cook in the evening? || Nous cuisinons le soir. | Nous ne cuisinons pas le soir. | Est-ce que vous cuisinez le soir ?",
        "They watch TV. | They don't watch TV. | Do they watch TV? || Ils regardent la télé. | Ils ne regardent pas la télé. | Est-ce qu'ils regardent la télé ?",
        "He listens to music. | He doesn't listen to music. | Does he listen to music? || Il écoute de la musique. | Il n'écoute pas de musique. | Est-ce qu'il écoute de la musique ?",
        "My brother helps my mother. | My brother doesn't help my mother. | Does your brother help your mother? || Mon frère aide ma mère. | Mon frère n'aide pas ma mère. | Est-ce que ton frère aide ta mère ?",
        "I open the window. | I don't open the window. | Do you open the window? || J'ouvre la fenêtre. | Je n'ouvre pas la fenêtre. | Est-ce que tu ouvres la fenêtre ?",
        "She closes the door. | She doesn't close the door. | Does she close the door? || Elle ferme la porte. | Elle ne ferme pas la porte. | Est-ce qu'elle ferme la porte ?",
        "We wash the car. | We don't wash the car. | Do you wash the car? || Nous lavons la voiture. | Nous ne lavons pas la voiture. | Est-ce que vous lavez la voiture ?",
        "My sister studies English. | My sister doesn't study English. | Does your sister study English? || Ma sœur étudie l'anglais. | Ma sœur n'étudie pas l'anglais. | Est-ce que ta sœur étudie l'anglais ?"
      ],
      "tenses": {
        "t1": [
          "I am working now. | I am not working now. | Are you working now? || Je travaille maintenant. | Je ne travaille pas maintenant. | Est-ce que tu travailles maintenant ?",
          "She is cooking chicken. | She is not cooking chicken. | Is she cooking chicken? || Elle cuisine du poulet. | Elle ne cuisine pas de poulet. | Est-ce qu'elle cuisine du poulet ?",
          "We are watching a film. | We are not watching a film. | Are you watching a film? || Nous regardons un film. | Nous ne regardons pas de film. | Est-ce que vous regardez un film ?",
          "They are listening to my father. | They are not listening to my father. | Are they listening to your father? || Ils écoutent mon père. | Ils n'écoutent pas mon père. | Est-ce qu'ils écoutent ton père ?",
          "He is washing the car. | He is not washing the car. | Is he washing the car? || Il lave la voiture. | Il ne lave pas la voiture. | Est-ce qu'il lave la voiture ?",
          "My brother is studying in his bedroom. | My brother is not studying in his bedroom. | Is your brother studying in his bedroom? || Mon frère étudie dans sa chambre. | Mon frère n'étudie pas dans sa chambre. | Est-ce que ton frère étudie dans sa chambre ?",
          "I am helping my grandmother. | I am not helping my grandmother. | Are you helping your grandmother? || J'aide ma grand-mère. | Je n'aide pas ma grand-mère. | Est-ce que tu aides ta grand-mère ?"
        ],
        "t2": [
          "I worked yesterday. | I didn't work yesterday. | Did you work yesterday? || J'ai travaillé hier. | Je n'ai pas travaillé hier. | Est-ce que tu as travaillé hier ?",
          "She walked in the park. | She didn't walk in the park. | Did she walk in the park? || Elle a marché dans le parc. | Elle n'a pas marché dans le parc. | Est-ce qu'elle a marché dans le parc ?",
          "We cooked chicken last night. | We didn't cook chicken last night. | Did you cook chicken last night? || Nous avons cuisiné du poulet hier soir. | Nous n'avons pas cuisiné de poulet hier soir. | Est-ce que vous avez cuisiné du poulet hier soir ?",
          "They watched a film on Saturday. | They didn't watch a film on Saturday. | Did they watch a film on Saturday? || Ils ont regardé un film samedi. | Ils n'ont pas regardé de film samedi. | Est-ce qu'ils ont regardé un film samedi ?",
          "He opened the door. | He didn't open the door. | Did he open the door? || Il a ouvert la porte. | Il n'a pas ouvert la porte. | Est-ce qu'il a ouvert la porte ?",
          "My mother closed the windows. | My mother didn't close the windows. | Did your mother close the windows? || Ma mère a fermé les fenêtres. | Ma mère n'a pas fermé les fenêtres. | Est-ce que ta mère a fermé les fenêtres ?",
          "I helped my friend. | I didn't help my friend. | Did you help your friend? || J'ai aidé mon ami. | Je n'ai pas aidé mon ami. | Est-ce que tu as aidé ton ami ?"
        ],
        "t3": [
          "I will study tomorrow. | I won't study tomorrow. | Will you study tomorrow? || J'étudierai demain. | Je n'étudierai pas demain. | Est-ce que tu étudieras demain ?",
          "She will wash the car on Sunday. | She won't wash the car on Sunday. | Will she wash the car on Sunday? || Elle lavera la voiture dimanche. | Elle ne lavera pas la voiture dimanche. | Est-ce qu'elle lavera la voiture dimanche ?",
          "We will listen to music tonight. | We won't listen to music tonight. | Will you listen to music tonight? || Nous écouterons de la musique ce soir. | Nous n'écouterons pas de musique ce soir. | Est-ce que vous écouterez de la musique ce soir ?",
          "They will help their grandfather. | They won't help their grandfather. | Will they help their grandfather? || Ils aideront leur grand-père. | Ils n'aideront pas leur grand-père. | Est-ce qu'ils aideront leur grand-père ?",
          "He will work on Saturday. | He won't work on Saturday. | Will he work on Saturday? || Il travaillera samedi. | Il ne travaillera pas samedi. | Est-ce qu'il travaillera samedi ?",
          "My father will cook this evening. | My father won't cook this evening. | Will your father cook this evening? || Mon père cuisinera ce soir. | Mon père ne cuisinera pas ce soir. | Est-ce que ton père cuisinera ce soir ?"
        ]
      }
    },
    {
      "id": "moves",
      "name": "Bouger",
      "icon": "🚶",
      "lvl": 2,
      "words": [
        "come=venir",
        "leave=partir",
        "arrive=arriver",
        "run=courir",
        "swim=nager",
        "drive=conduire",
        "fall=tomber",
        "stay=rester",
        "go up=monter",
        "come back=rentrer / revenir"
      ],
      "sentences": [],
      "oral": [
        "She comes to my house. | She doesn't come to my house. | Does she come to your house? || Elle vient chez moi. | Elle ne vient pas chez moi. | Est-ce qu'elle vient chez toi ?",
        "I leave in the morning. | I don't leave in the morning. | Do you leave in the morning? || Je pars le matin. | Je ne pars pas le matin. | Est-ce que tu pars le matin ?",
        "We arrive at school. | We don't arrive at school. | Do you arrive at school? || Nous arrivons à l'école. | Nous n'arrivons pas à l'école. | Est-ce que vous arrivez à l'école ?",
        "He runs in the park. | He doesn't run in the park. | Does he run in the park? || Il court dans le parc. | Il ne court pas dans le parc. | Est-ce qu'il court dans le parc ?",
        "They swim in the sea. | They don't swim in the sea. | Do they swim in the sea? || Ils nagent dans la mer. | Ils ne nagent pas dans la mer. | Est-ce qu'ils nagent dans la mer ?",
        "My father drives a big car. | My father doesn't drive a big car. | Does your father drive a big car? || Mon père conduit une grande voiture. | Mon père ne conduit pas de grande voiture. | Est-ce que ton père conduit une grande voiture ?",
        "The baby falls a lot. | The baby doesn't fall a lot. | Does the baby fall a lot? || Le bébé tombe beaucoup. | Le bébé ne tombe pas beaucoup. | Est-ce que le bébé tombe beaucoup ?",
        "I stay at home. | I don't stay at home. | Do you stay at home? || Je reste à la maison. | Je ne reste pas à la maison. | Est-ce que tu restes à la maison ?",
        "She goes up to her bedroom. | She doesn't go up to her bedroom. | Does she go up to her bedroom? || Elle monte dans sa chambre. | Elle ne monte pas dans sa chambre. | Est-ce qu'elle monte dans sa chambre ?",
        "We come back home in the evening. | We don't come back home in the evening. | Do you come back home in the evening? || Nous rentrons à la maison le soir. | Nous ne rentrons pas à la maison le soir. | Est-ce que vous rentrez à la maison le soir ?"
      ],
      "tenses": {
        "t1": [
          "I am coming now. | I am not coming now. | Are you coming now? || Je viens maintenant. | Je ne viens pas maintenant. | Est-ce que tu viens maintenant ?",
          "She is leaving now. | She is not leaving now. | Is she leaving now? || Elle part maintenant. | Elle ne part pas maintenant. | Est-ce qu'elle part maintenant ?",
          "They are arriving at the house. | They are not arriving at the house. | Are they arriving at the house? || Ils arrivent à la maison. | Ils n'arrivent pas à la maison. | Est-ce qu'ils arrivent à la maison ?",
          "He is running to school. | He is not running to school. | Is he running to school? || Il court jusqu'à l'école. | Il ne court pas jusqu'à l'école. | Est-ce qu'il court jusqu'à l'école ?",
          "We are swimming in the sea. | We are not swimming in the sea. | Are you swimming in the sea? || Nous nageons dans la mer. | Nous ne nageons pas dans la mer. | Est-ce que vous nagez dans la mer ?",
          "My mother is driving the car. | My mother is not driving the car. | Is your mother driving the car? || Ma mère conduit la voiture. | Ma mère ne conduit pas la voiture. | Est-ce que ta mère conduit la voiture ?"
        ],
        "t2": [
          "She came to my house yesterday. | She didn't come to my house yesterday. | Did she come to your house yesterday? || Elle est venue chez moi hier. | Elle n'est pas venue chez moi hier. | Est-ce qu'elle est venue chez toi hier ?",
          "We left on Monday. | We didn't leave on Monday. | Did you leave on Monday? || Nous sommes partis lundi. | Nous ne sommes pas partis lundi. | Est-ce que vous êtes partis lundi ?",
          "They arrived at school this morning. | They didn't arrive at school this morning. | Did they arrive at school this morning? || Elles sont arrivées à l'école ce matin. | Elles ne sont pas arrivées à l'école ce matin. | Est-ce qu'elles sont arrivées à l'école ce matin ?",
          "He ran in the park. | He didn't run in the park. | Did he run in the park? || Il a couru dans le parc. | Il n'a pas couru dans le parc. | Est-ce qu'il a couru dans le parc ?",
          "The baby fell yesterday. | The baby didn't fall yesterday. | Did the baby fall yesterday? || Le bébé est tombé hier. | Le bébé n'est pas tombé hier. | Est-ce que le bébé est tombé hier ?",
          "I stayed at home on Sunday. | I didn't stay at home on Sunday. | Did you stay at home on Sunday? || Je suis restée à la maison dimanche. | Je ne suis pas restée à la maison dimanche. | Est-ce que tu es restée à la maison dimanche ?",
          "My sister went up to her bedroom. | My sister didn't go up to her bedroom. | Did your sister go up to her bedroom? || Ma sœur est montée dans sa chambre. | Ma sœur n'est pas montée dans sa chambre. | Est-ce que ta sœur est montée dans sa chambre ?",
          "They came back home late. | They didn't come back home late. | Did they come back home late? || Ils sont rentrés à la maison tard. | Ils ne sont pas rentrés à la maison tard. | Est-ce qu'ils sont rentrés à la maison tard ?"
        ],
        "t3": [
          "I will come tomorrow. | I won't come tomorrow. | Will you come tomorrow? || Je viendrai demain. | Je ne viendrai pas demain. | Est-ce que tu viendras demain ?",
          "We will leave on Friday. | We won't leave on Friday. | Will you leave on Friday? || Nous partirons vendredi. | Nous ne partirons pas vendredi. | Est-ce que vous partirez vendredi ?",
          "They will arrive tonight. | They won't arrive tonight. | Will they arrive tonight? || Ils arriveront ce soir. | Ils n'arriveront pas ce soir. | Est-ce qu'ils arriveront ce soir ?",
          "She will swim in the sea this summer. | She won't swim in the sea this summer. | Will she swim in the sea this summer? || Elle nagera dans la mer cet été. | Elle ne nagera pas dans la mer cet été. | Est-ce qu'elle nagera dans la mer cet été ?",
          "He will drive his new car. | He won't drive his new car. | Will he drive his new car? || Il conduira sa nouvelle voiture. | Il ne conduira pas sa nouvelle voiture. | Est-ce qu'il conduira sa nouvelle voiture ?",
          "I will stay at home this weekend. | I won't stay at home this weekend. | Will you stay at home this weekend? || Je resterai à la maison ce week-end. | Je ne resterai pas à la maison ce week-end. | Est-ce que tu resteras à la maison ce week-end ?",
          "My parents will come back home on Sunday. | My parents won't come back home on Sunday. | Will your parents come back home on Sunday? || Mes parents rentreront à la maison dimanche. | Mes parents ne rentreront pas à la maison dimanche. | Est-ce que tes parents rentreront à la maison dimanche ?"
        ]
      }
    },
    {
      "id": "talk",
      "name": "Parler & penser",
      "icon": "💬",
      "lvl": 2,
      "words": [
        "say=dire",
        "speak=parler",
        "tell=raconter / dire",
        "ask=demander",
        "answer=répondre",
        "know=savoir / connaître",
        "think=penser",
        "understand=comprendre",
        "learn=apprendre",
        "write=écrire"
      ],
      "sentences": [],
      "oral": [
        "She says hello to my mother. | She doesn't say hello to my mother. | Does she say hello to your mother? || Elle dit bonjour à ma mère. | Elle ne dit pas bonjour à ma mère. | Est-ce qu'elle dit bonjour à ta mère ?",
        "I speak English. | I don't speak English. | Do you speak English? || Je parle anglais. | Je ne parle pas anglais. | Est-ce que tu parles anglais ?",
        "My grandfather tells a story. | My grandfather doesn't tell a story. | Does your grandfather tell a story? || Mon grand-père raconte une histoire. | Mon grand-père ne raconte pas d'histoire. | Est-ce que ton grand-père raconte une histoire ?",
        "He asks for water. | He doesn't ask for water. | Does he ask for water? || Il demande de l'eau. | Il ne demande pas d'eau. | Est-ce qu'il demande de l'eau ?",
        "They answer my question. | They don't answer my question. | Do they answer your question? || Ils répondent à ma question. | Ils ne répondent pas à ma question. | Est-ce qu'ils répondent à ta question ?",
        "I know the answer. | I don't know the answer. | Do you know the answer? || Je sais la réponse. | Je ne sais pas la réponse. | Est-ce que tu sais la réponse ?",
        "We think about our friends. | We don't think about our friends. | Do you think about your friends? || Nous pensons à nos amis. | Nous ne pensons pas à nos amis. | Est-ce que vous pensez à vos amis ?",
        "She understands French. | She doesn't understand French. | Does she understand French? || Elle comprend le français. | Elle ne comprend pas le français. | Est-ce qu'elle comprend le français ?",
        "My brother learns English. | My brother doesn't learn English. | Does your brother learn English? || Mon frère apprend l'anglais. | Mon frère n'apprend pas l'anglais. | Est-ce que ton frère apprend l'anglais ?",
        "I write a letter. | I don't write a letter. | Do you write a letter? || J'écris une lettre. | Je n'écris pas de lettre. | Est-ce que tu écris une lettre ?"
      ],
      "tenses": {
        "t1": [
          "I am speaking to my friend. | I am not speaking to my friend. | Are you speaking to your friend? || Je parle à mon ami. | Je ne parle pas à mon ami. | Est-ce que tu parles à ton ami ?",
          "She is writing a letter. | She is not writing a letter. | Is she writing a letter? || Elle écrit une lettre. | Elle n'écrit pas de lettre. | Est-ce qu'elle écrit une lettre ?",
          "We are learning French. | We are not learning French. | Are you learning French? || Nous apprenons le français. | Nous n'apprenons pas le français. | Est-ce que vous apprenez le français ?",
          "He is telling a story to the children. | He is not telling a story to the children. | Is he telling a story to the children? || Il raconte une histoire aux enfants. | Il ne raconte pas d'histoire aux enfants. | Est-ce qu'il raconte une histoire aux enfants ?",
          "They are asking for water. | They are not asking for water. | Are they asking for water? || Ils demandent de l'eau. | Ils ne demandent pas d'eau. | Est-ce qu'ils demandent de l'eau ?",
          "My mother is answering the phone. | My mother is not answering the phone. | Is your mother answering the phone? || Ma mère répond au téléphone. | Ma mère ne répond pas au téléphone. | Est-ce que ta mère répond au téléphone ?"
        ],
        "t2": [
          "She said goodbye. | She didn't say goodbye. | Did she say goodbye? || Elle a dit au revoir. | Elle n'a pas dit au revoir. | Est-ce qu'elle a dit au revoir ?",
          "He told a funny story. | He didn't tell a funny story. | Did he tell a funny story? || Il a raconté une histoire drôle. | Il n'a pas raconté d'histoire drôle. | Est-ce qu'il a raconté une histoire drôle ?",
          "We asked the way. | We didn't ask the way. | Did you ask the way? || Nous avons demandé le chemin. | Nous n'avons pas demandé le chemin. | Est-ce que vous avez demandé le chemin ?",
          "I knew the answer. | I didn't know the answer. | Did you know the answer? || Je savais la réponse. | Je ne savais pas la réponse. | Est-ce que tu savais la réponse ?",
          "They answered my question. | They didn't answer my question. | Did they answer your question? || Ils ont répondu à ma question. | Ils n'ont pas répondu à ma question. | Est-ce qu'ils ont répondu à ta question ?",
          "I understood the lesson. | I didn't understand the lesson. | Did you understand the lesson? || J'ai compris la leçon. | Je n'ai pas compris la leçon. | Est-ce que tu as compris la leçon ?",
          "My brother learned a new word. | My brother didn't learn a new word. | Did your brother learn a new word? || Mon frère a appris un nouveau mot. | Mon frère n'a pas appris de nouveau mot. | Est-ce que ton frère a appris un nouveau mot ?",
          "She wrote a book. | She didn't write a book. | Did she write a book? || Elle a écrit un livre. | Elle n'a pas écrit de livre. | Est-ce qu'elle a écrit un livre ?"
        ],
        "t3": [
          "I will tell a story tonight. | I won't tell a story tonight. | Will you tell a story tonight? || Je raconterai une histoire ce soir. | Je ne raconterai pas d'histoire ce soir. | Est-ce que tu raconteras une histoire ce soir ?",
          "She will write to her grandmother. | She won't write to her grandmother. | Will she write to her grandmother? || Elle écrira à sa grand-mère. | Elle n'écrira pas à sa grand-mère. | Est-ce qu'elle écrira à sa grand-mère ?",
          "We will learn English next year. | We won't learn English next year. | Will you learn English next year? || Nous apprendrons l'anglais l'année prochaine. | Nous n'apprendrons pas l'anglais l'année prochaine. | Est-ce que vous apprendrez l'anglais l'année prochaine ?",
          "They will speak to the children. | They won't speak to the children. | Will they speak to the children? || Ils parleront aux enfants. | Ils ne parleront pas aux enfants. | Est-ce qu'ils parleront aux enfants ?",
          "He will answer tomorrow. | He won't answer tomorrow. | Will he answer tomorrow? || Il répondra demain. | Il ne répondra pas demain. | Est-ce qu'il répondra demain ?",
          "I will ask my father. | I won't ask my father. | Will you ask your father? || Je demanderai à mon père. | Je ne demanderai pas à mon père. | Est-ce que tu demanderas à ton père ?",
          "My friend will understand the lesson. | My friend won't understand the lesson. | Will your friend understand the lesson? || Mon ami comprendra la leçon. | Mon ami ne comprendra pas la leçon. | Est-ce que ton ami comprendra la leçon ?"
        ]
      }
    },
    {
      "id": "qwords",
      "name": "Les mots-questions",
      "icon": "❔",
      "lvl": 2,
      "words": [
        "who=qui",
        "what=que / quoi",
        "where=où",
        "when=quand",
        "why=pourquoi",
        "how=comment",
        "which=quel / quelle",
        "how much=combien",
        "how many=combien (de)",
        "what time=à quelle heure"
      ],
      "sentences": [],
      "oral": [
        "She sees my brother. | She doesn't see my brother. | Who does she see? || Elle voit mon frère. | Elle ne voit pas mon frère. | Qui est-ce qu'elle voit ?",
        "He eats an apple. | He doesn't eat an apple. | What does he eat? || Il mange une pomme. | Il ne mange pas de pomme. | Qu'est-ce qu'il mange ?",
        "She lives in London. | She doesn't live in London. | Where does she live? || Elle habite à Londres. | Elle n'habite pas à Londres. | Où est-ce qu'elle habite ?",
        "They eat in the evening. | They don't eat in the evening. | When do they eat? || Ils mangent le soir. | Ils ne mangent pas le soir. | Quand est-ce qu'ils mangent ?",
        "I learn English. | I don't learn English. | Why do you learn English? || J'apprends l'anglais. | Je n'apprends pas l'anglais. | Pourquoi est-ce que tu apprends l'anglais ?",
        "We go to school by bus. | We don't go to school by bus. | How do you go to school? || Nous allons à l'école en bus. | Nous n'allons pas à l'école en bus. | Comment est-ce que vous allez à l'école ?",
        "She reads this book. | She doesn't read this book. | Which book does she read? || Elle lit ce livre. | Elle ne lit pas ce livre. | Quel livre est-ce qu'elle lit ?",
        "The cake costs ten euros. | The cake doesn't cost ten euros. | How much does the cake cost? || Le gâteau coûte dix euros. | Le gâteau ne coûte pas dix euros. | Combien est-ce que le gâteau coûte ?",
        "They have two cats. | They don't have two cats. | How many cats do they have? || Ils ont deux chats. | Ils n'ont pas deux chats. | Combien de chats est-ce qu'ils ont ?",
        "He leaves at eight. | He doesn't leave at eight. | What time does he leave? || Il part à huit heures. | Il ne part pas à huit heures. | À quelle heure est-ce qu'il part ?"
      ],
      "tenses": {
        "t1": [
          "She is reading a book. | She is not reading a book. | What is she reading? || Elle lit un livre. | Elle ne lit pas de livre. | Qu'est-ce qu'elle lit ?",
          "They are going to the park. | They are not going to the park. | Where are they going? || Ils vont au parc. | Ils ne vont pas au parc. | Où est-ce qu'ils vont ?",
          "I am learning English. | I am not learning English. | Why are you learning English? || J'apprends l'anglais. | Je n'apprends pas l'anglais. | Pourquoi est-ce que tu apprends l'anglais ?",
          "He is speaking to my sister. | He is not speaking to my sister. | Who is he speaking to? || Il parle à ma sœur. | Il ne parle pas à ma sœur. | À qui est-ce qu'il parle ?",
          "We are eating now. | We are not eating now. | When are you eating? || Nous mangeons maintenant. | Nous ne mangeons pas maintenant. | Quand est-ce que vous mangez ?",
          "My mother is making three cakes. | My mother is not making three cakes. | How many cakes is your mother making? || Ma mère fait trois gâteaux. | Ma mère ne fait pas trois gâteaux. | Combien de gâteaux est-ce que ta mère fait ?"
        ],
        "t2": [
          "She saw my brother. | She didn't see my brother. | Who did she see? || Elle a vu mon frère. | Elle n'a pas vu mon frère. | Qui est-ce qu'elle a vu ?",
          "He ate an apple. | He didn't eat an apple. | What did he eat? || Il a mangé une pomme. | Il n'a pas mangé de pomme. | Qu'est-ce qu'il a mangé ?",
          "They went to London. | They didn't go to London. | Where did they go? || Ils sont allés à Londres. | Ils ne sont pas allés à Londres. | Où est-ce qu'ils sont allés ?",
          "She arrived on Monday. | She didn't arrive on Monday. | When did she arrive? || Elle est arrivée lundi. | Elle n'est pas arrivée lundi. | Quand est-ce qu'elle est arrivée ?",
          "I left at nine. | I didn't leave at nine. | What time did you leave? || Je suis parti à neuf heures. | Je ne suis pas parti à neuf heures. | À quelle heure est-ce que tu es parti ?",
          "The cake cost ten euros. | The cake didn't cost ten euros. | How much did the cake cost? || Le gâteau a coûté dix euros. | Le gâteau n'a pas coûté dix euros. | Combien est-ce que le gâteau a coûté ?",
          "He came by train. | He didn't come by train. | How did he come? || Il est venu en train. | Il n'est pas venu en train. | Comment est-ce qu'il est venu ?"
        ],
        "t3": [
          "She will arrive tomorrow. | She won't arrive tomorrow. | When will she arrive? || Elle arrivera demain. | Elle n'arrivera pas demain. | Quand est-ce qu'elle arrivera ?",
          "We will go to Paris. | We won't go to Paris. | Where will you go? || Nous irons à Paris. | Nous n'irons pas à Paris. | Où est-ce que vous irez ?",
          "They will eat chicken. | They won't eat chicken. | What will they eat? || Ils mangeront du poulet. | Ils ne mangeront pas de poulet. | Qu'est-ce qu'ils mangeront ?",
          "I will see my grandmother. | I won't see my grandmother. | Who will you see? || Je verrai ma grand-mère. | Je ne verrai pas ma grand-mère. | Qui est-ce que tu verras ?",
          "He will leave at ten. | He won't leave at ten. | What time will he leave? || Il partira à dix heures. | Il ne partira pas à dix heures. | À quelle heure est-ce qu'il partira ?",
          "I will study on Sunday. | I won't study on Sunday. | Why will you study on Sunday? || J'étudierai dimanche. | Je n'étudierai pas dimanche. | Pourquoi est-ce que tu étudieras dimanche ?",
          "She will read the red book. | She won't read the red book. | Which book will she read? || Elle lira le livre rouge. | Elle ne lira pas le livre rouge. | Quel livre est-ce qu'elle lira ?"
        ]
      }
    },
    {
      "id": "feelings",
      "name": "Comment je me sens",
      "icon": "😴",
      "lvl": 2,
      "words": [
        "tired=fatigué",
        "hungry=(avoir) faim",
        "thirsty=(avoir) soif",
        "angry=en colère",
        "afraid=(avoir) peur",
        "sick=malade",
        "busy=occupé",
        "worried=inquiet",
        "ready=prêt",
        "late=en retard"
      ],
      "sentences": [],
      "oral": [
        "I am tired. | I am not tired. | Are you tired? || Je suis fatigué. | Je ne suis pas fatigué. | Est-ce que tu es fatigué ?",
        "She is hungry. | She is not hungry. | Is she hungry? || Elle a faim. | Elle n'a pas faim. | Est-ce qu'elle a faim ?",
        "We are thirsty. | We are not thirsty. | Are you thirsty? || Nous avons soif. | Nous n'avons pas soif. | Est-ce que vous avez soif ?",
        "My father is angry. | My father is not angry. | Is your father angry? || Mon père est en colère. | Mon père n'est pas en colère. | Est-ce que ton père est en colère ?",
        "The baby is afraid. | The baby is not afraid. | Is the baby afraid? || Le bébé a peur. | Le bébé n'a pas peur. | Est-ce que le bébé a peur ?",
        "He is sick today. | He is not sick today. | Is he sick today? || Il est malade aujourd'hui. | Il n'est pas malade aujourd'hui. | Est-ce qu'il est malade aujourd'hui ?",
        "They are busy. | They are not busy. | Are they busy? || Elles sont occupées. | Elles ne sont pas occupées. | Est-ce qu'elles sont occupées ?",
        "My mother is worried. | My mother is not worried. | Is your mother worried? || Ma mère est inquiète. | Ma mère n'est pas inquiète. | Est-ce que ta mère est inquiète ?",
        "They are ready. | They are not ready. | Are they ready? || Ils sont prêts. | Ils ne sont pas prêts. | Est-ce qu'ils sont prêts ?",
        "The bus is late. | The bus is not late. | Is the bus late? || Le bus est en retard. | Le bus n'est pas en retard. | Est-ce que le bus est en retard ?"
      ],
      "tenses": {
        "t1": [
          "I am getting tired. | I am not getting tired. | Are you getting tired? || Je commence à être fatigué. | Je ne commence pas à être fatigué. | Est-ce que tu commences à être fatigué ?",
          "She is getting hungry. | She is not getting hungry. | Is she getting hungry? || Elle commence à avoir faim. | Elle ne commence pas à avoir faim. | Est-ce qu'elle commence à avoir faim ?",
          "They are getting angry. | They are not getting angry. | Are they getting angry? || Ils commencent à être en colère. | Ils ne commencent pas à être en colère. | Est-ce qu'ils commencent à être en colère ?",
          "We are getting worried. | We are not getting worried. | Are you getting worried? || Nous commençons à être inquiets. | Nous ne commençons pas à être inquiets. | Est-ce que vous commencez à être inquiets ?",
          "He is getting sick. | He is not getting sick. | Is he getting sick? || Il tombe malade. | Il ne tombe pas malade. | Est-ce qu'il tombe malade ?",
          "It is getting late. | It is not getting late. | Is it getting late? || Il se fait tard. | Il ne se fait pas tard. | Est-ce qu'il se fait tard ?"
        ],
        "t2": [
          "I was tired yesterday. | I was not tired yesterday. | Were you tired yesterday? || J'étais fatigué hier. | Je n'étais pas fatigué hier. | Est-ce que tu étais fatigué hier ?",
          "She was afraid last night. | She was not afraid last night. | Was she afraid last night? || Elle avait peur hier soir. | Elle n'avait pas peur hier soir. | Est-ce qu'elle avait peur hier soir ?",
          "He was sick last week. | He was not sick last week. | Was he sick last week? || Il était malade la semaine dernière. | Il n'était pas malade la semaine dernière. | Est-ce qu'il était malade la semaine dernière ?",
          "We arrived late. | We didn't arrive late. | Did you arrive late? || Nous sommes arrivés en retard. | Nous ne sommes pas arrivés en retard. | Est-ce que vous êtes arrivés en retard ?",
          "My brother got sick on Monday. | My brother didn't get sick on Monday. | Did your brother get sick on Monday? || Mon frère est tombé malade lundi. | Mon frère n'est pas tombé malade lundi. | Est-ce que ton frère est tombé malade lundi ?",
          "They were hungry this morning. | They were not hungry this morning. | Were they hungry this morning? || Ils avaient faim ce matin. | Ils n'avaient pas faim ce matin. | Est-ce qu'ils avaient faim ce matin ?",
          "My mother was busy yesterday. | My mother was not busy yesterday. | Was your mother busy yesterday? || Ma mère était occupée hier. | Ma mère n'était pas occupée hier. | Est-ce que ta mère était occupée hier ?",
          "She left late. | She didn't leave late. | Did she leave late? || Elle est partie en retard. | Elle n'est pas partie en retard. | Est-ce qu'elle est partie en retard ?"
        ],
        "t3": [
          "I will be ready at nine. | I won't be ready at nine. | Will you be ready at nine? || Je serai prêt à neuf heures. | Je ne serai pas prêt à neuf heures. | Est-ce que tu seras prêt à neuf heures ?",
          "She will be hungry tonight. | She won't be hungry tonight. | Will she be hungry tonight? || Elle aura faim ce soir. | Elle n'aura pas faim ce soir. | Est-ce qu'elle aura faim ce soir ?",
          "We will be late. | We won't be late. | Will you be late? || Nous serons en retard. | Nous ne serons pas en retard. | Est-ce que vous serez en retard ?",
          "They will be tired tomorrow. | They won't be tired tomorrow. | Will they be tired tomorrow? || Ils seront fatigués demain. | Ils ne seront pas fatigués demain. | Est-ce qu'ils seront fatigués demain ?",
          "My father will be busy on Monday. | My father won't be busy on Monday. | Will your father be busy on Monday? || Mon père sera occupé lundi. | Mon père ne sera pas occupé lundi. | Est-ce que ton père sera occupé lundi ?",
          "He will be thirsty after the game. | He won't be thirsty after the game. | Will he be thirsty after the game? || Il aura soif après le match. | Il n'aura pas soif après le match. | Est-ce qu'il aura soif après le match ?",
          "My mother will be worried. | My mother won't be worried. | Will your mother be worried? || Ma mère sera inquiète. | Ma mère ne sera pas inquiète. | Est-ce que ta mère sera inquiète ?"
        ]
      }
    },
    {
      "id": "weather",
      "name": "Météo & saisons",
      "icon": "☀️",
      "lvl": 2,
      "words": [
        "weather=temps / météo",
        "sun=soleil",
        "rain=pluie / pleuvoir",
        "snow=neige / neiger",
        "wind=vent",
        "cloud=nuage",
        "spring=printemps",
        "summer=été",
        "autumn/fall=automne",
        "winter=hiver"
      ],
      "sentences": [],
      "oral": [
        "The weather is nice today. | The weather is not nice today. | Is the weather nice today? || Le temps est beau aujourd'hui. | Le temps n'est pas beau aujourd'hui. | Est-ce que le temps est beau aujourd'hui ?",
        "The sun is hot. | The sun is not hot. | Is the sun hot? || Le soleil est chaud. | Le soleil n'est pas chaud. | Est-ce que le soleil est chaud ?",
        "I like the rain. | I don't like the rain. | Do you like the rain? || J'aime la pluie. | Je n'aime pas la pluie. | Est-ce que tu aimes la pluie ?",
        "The children play in the snow. | The children don't play in the snow. | Do the children play in the snow? || Les enfants jouent dans la neige. | Les enfants ne jouent pas dans la neige. | Est-ce que les enfants jouent dans la neige ?",
        "The wind is cold. | The wind is not cold. | Is the wind cold? || Le vent est froid. | Le vent n'est pas froid. | Est-ce que le vent est froid ?",
        "I see a big cloud. | I don't see a big cloud. | Do you see a big cloud? || Je vois un gros nuage. | Je ne vois pas de gros nuage. | Est-ce que tu vois un gros nuage ?",
        "The flowers are yellow in spring. | The flowers are not yellow in spring. | Are the flowers yellow in spring? || Les fleurs sont jaunes au printemps. | Les fleurs ne sont pas jaunes au printemps. | Est-ce que les fleurs sont jaunes au printemps ?",
        "We swim in the sea in summer. | We don't swim in the sea in summer. | Do you swim in the sea in summer? || Nous nageons dans la mer en été. | Nous ne nageons pas dans la mer en été. | Est-ce que vous nagez dans la mer en été ?",
        "She loves autumn. | She doesn't love autumn. | Does she love autumn? || Elle adore l'automne. | Elle n'adore pas l'automne. | Est-ce qu'elle adore l'automne ?",
        "It is cold in winter. | It is not cold in winter. | Is it cold in winter? || Il fait froid en hiver. | Il ne fait pas froid en hiver. | Est-ce qu'il fait froid en hiver ?"
      ],
      "tenses": {
        "t1": [
          "It is raining now. | It is not raining now. | Is it raining now? || Il pleut maintenant. | Il ne pleut pas maintenant. | Est-ce qu'il pleut maintenant ?",
          "It is snowing in the mountains. | It is not snowing in the mountains. | Is it snowing in the mountains? || Il neige à la montagne. | Il ne neige pas à la montagne. | Est-ce qu'il neige à la montagne ?",
          "The sun is shining today. | The sun is not shining today. | Is the sun shining today? || Le soleil brille aujourd'hui. | Le soleil ne brille pas aujourd'hui. | Est-ce que le soleil brille aujourd'hui ?",
          "The wind is blowing hard. | The wind is not blowing hard. | Is the wind blowing hard? || Le vent souffle fort. | Le vent ne souffle pas fort. | Est-ce que le vent souffle fort ?",
          "The clouds are coming. | The clouds are not coming. | Are the clouds coming? || Les nuages arrivent. | Les nuages n'arrivent pas. | Est-ce que les nuages arrivent ?",
          "The children are playing in the snow. | The children are not playing in the snow. | Are the children playing in the snow? || Les enfants jouent dans la neige. | Les enfants ne jouent pas dans la neige. | Est-ce que les enfants jouent dans la neige ?"
        ],
        "t2": [
          "It rained yesterday. | It didn't rain yesterday. | Did it rain yesterday? || Il a plu hier. | Il n'a pas plu hier. | Est-ce qu'il a plu hier ?",
          "It snowed last winter. | It didn't snow last winter. | Did it snow last winter? || Il a neigé l'hiver dernier. | Il n'a pas neigé l'hiver dernier. | Est-ce qu'il a neigé l'hiver dernier ?",
          "The wind blew all night. | The wind didn't blow all night. | Did the wind blow all night? || Le vent a soufflé toute la nuit. | Le vent n'a pas soufflé toute la nuit. | Est-ce que le vent a soufflé toute la nuit ?",
          "The weather was nice last weekend. | The weather was not nice last weekend. | Was the weather nice last weekend? || Le temps était beau le week-end dernier. | Le temps n'était pas beau le week-end dernier. | Est-ce que le temps était beau le week-end dernier ?",
          "We swam in the sea last summer. | We didn't swim in the sea last summer. | Did you swim in the sea last summer? || Nous avons nagé dans la mer l'été dernier. | Nous n'avons pas nagé dans la mer l'été dernier. | Est-ce que vous avez nagé dans la mer l'été dernier ?",
          "They went to Spain in the spring. | They didn't go to Spain in the spring. | Did they go to Spain in the spring? || Ils sont allés en Espagne au printemps. | Ils ne sont pas allés en Espagne au printemps. | Est-ce qu'ils sont allés en Espagne au printemps ?",
          "It was cold yesterday. | It was not cold yesterday. | Was it cold yesterday? || Il faisait froid hier. | Il ne faisait pas froid hier. | Est-ce qu'il faisait froid hier ?"
        ],
        "t3": [
          "It will rain tomorrow. | It won't rain tomorrow. | Will it rain tomorrow? || Il pleuvra demain. | Il ne pleuvra pas demain. | Est-ce qu'il pleuvra demain ?",
          "It will snow this winter. | It won't snow this winter. | Will it snow this winter? || Il neigera cet hiver. | Il ne neigera pas cet hiver. | Est-ce qu'il neigera cet hiver ?",
          "The sun will shine this afternoon. | The sun won't shine this afternoon. | Will the sun shine this afternoon? || Le soleil brillera cet après-midi. | Le soleil ne brillera pas cet après-midi. | Est-ce que le soleil brillera cet après-midi ?",
          "We will go to the beach this summer. | We won't go to the beach this summer. | Will you go to the beach this summer? || Nous irons à la plage cet été. | Nous n'irons pas à la plage cet été. | Est-ce que vous irez à la plage cet été ?",
          "It will be hot tomorrow. | It won't be hot tomorrow. | Will it be hot tomorrow? || Il fera chaud demain. | Il ne fera pas chaud demain. | Est-ce qu'il fera chaud demain ?",
          "The weather will be nice on Sunday. | The weather won't be nice on Sunday. | Will the weather be nice on Sunday? || Le temps sera beau dimanche. | Le temps ne sera pas beau dimanche. | Est-ce que le temps sera beau dimanche ?"
        ]
      }
    },
    {
      "id": "city",
      "name": "La ville",
      "icon": "🏙️",
      "lvl": 2,
      "words": [
        "city/town=ville",
        "street=rue",
        "shop=magasin",
        "school=école",
        "park=parc",
        "station=gare",
        "hospital=hôpital",
        "bank=banque",
        "restaurant=restaurant",
        "market=marché"
      ],
      "sentences": [],
      "oral": [
        "I live in a big city. | I don't live in a big city. | Do you live in a big city? || J'habite dans une grande ville. | Je n'habite pas dans une grande ville. | Est-ce que tu habites dans une grande ville ?",
        "My house is in this street. | My house is not in this street. | Is your house in this street? || Ma maison est dans cette rue. | Ma maison n'est pas dans cette rue. | Est-ce que ta maison est dans cette rue ?",
        "She goes to the shop. | She doesn't go to the shop. | Does she go to the shop? || Elle va au magasin. | Elle ne va pas au magasin. | Est-ce qu'elle va au magasin ?",
        "The children go to school. | The children don't go to school. | Do the children go to school? || Les enfants vont à l'école. | Les enfants ne vont pas à l'école. | Est-ce que les enfants vont à l'école ?",
        "We play in the park. | We don't play in the park. | Do you play in the park? || Nous jouons dans le parc. | Nous ne jouons pas dans le parc. | Est-ce que vous jouez dans le parc ?",
        "The station is near here. | The station is not near here. | Is the station near here? || La gare est près d'ici. | La gare n'est pas près d'ici. | Est-ce que la gare est près d'ici ?",
        "My mother works at the hospital. | My mother doesn't work at the hospital. | Does your mother work at the hospital? || Ma mère travaille à l'hôpital. | Ma mère ne travaille pas à l'hôpital. | Est-ce que ta mère travaille à l'hôpital ?",
        "The bank is closed today. | The bank is not closed today. | Is the bank closed today? || La banque est fermée aujourd'hui. | La banque n'est pas fermée aujourd'hui. | Est-ce que la banque est fermée aujourd'hui ?",
        "They eat at the restaurant. | They don't eat at the restaurant. | Do they eat at the restaurant? || Ils mangent au restaurant. | Ils ne mangent pas au restaurant. | Est-ce qu'ils mangent au restaurant ?",
        "He buys fish at the market. | He doesn't buy fish at the market. | Does he buy fish at the market? || Il achète du poisson au marché. | Il n'achète pas de poisson au marché. | Est-ce qu'il achète du poisson au marché ?"
      ],
      "tenses": {
        "t1": [
          "I am walking in the street. | I am not walking in the street. | Are you walking in the street? || Je marche dans la rue. | Je ne marche pas dans la rue. | Est-ce que tu marches dans la rue ?",
          "She is going to the bank. | She is not going to the bank. | Is she going to the bank? || Elle va à la banque. | Elle ne va pas à la banque. | Est-ce qu'elle va à la banque ?",
          "They are eating at the restaurant. | They are not eating at the restaurant. | Are they eating at the restaurant? || Ils mangent au restaurant. | Ils ne mangent pas au restaurant. | Est-ce qu'ils mangent au restaurant ?",
          "We are waiting at the station. | We are not waiting at the station. | Are you waiting at the station? || Nous attendons à la gare. | Nous n'attendons pas à la gare. | Est-ce que vous attendez à la gare ?",
          "The children are playing in the park. | The children are not playing in the park. | Are the children playing in the park? || Les enfants jouent dans le parc. | Les enfants ne jouent pas dans le parc. | Est-ce que les enfants jouent dans le parc ?",
          "He is buying bread at the market. | He is not buying bread at the market. | Is he buying bread at the market? || Il achète du pain au marché. | Il n'achète pas de pain au marché. | Est-ce qu'il achète du pain au marché ?",
          "My father is visiting the city. | My father is not visiting the city. | Is your father visiting the city? || Mon père visite la ville. | Mon père ne visite pas la ville. | Est-ce que ton père visite la ville ?"
        ],
        "t2": [
          "I went to the hospital yesterday. | I didn't go to the hospital yesterday. | Did you go to the hospital yesterday? || Je suis allé à l'hôpital hier. | Je ne suis pas allé à l'hôpital hier. | Est-ce que tu es allé à l'hôpital hier ?",
          "She bought a coat at the shop. | She didn't buy a coat at the shop. | Did she buy a coat at the shop? || Elle a acheté un manteau au magasin. | Elle n'a pas acheté de manteau au magasin. | Est-ce qu'elle a acheté un manteau au magasin ?",
          "We ate at a good restaurant. | We didn't eat at a good restaurant. | Did you eat at a good restaurant? || Nous avons mangé dans un bon restaurant. | Nous n'avons pas mangé dans un bon restaurant. | Est-ce que vous avez mangé dans un bon restaurant ?",
          "The market was big. | The market was not big. | Was the market big? || Le marché était grand. | Le marché n'était pas grand. | Est-ce que le marché était grand ?",
          "They arrived at the station. | They didn't arrive at the station. | Did they arrive at the station? || Ils sont arrivés à la gare. | Ils ne sont pas arrivés à la gare. | Est-ce qu'ils sont arrivés à la gare ?",
          "He walked in the park. | He didn't walk in the park. | Did he walk in the park? || Il a marché dans le parc. | Il n'a pas marché dans le parc. | Est-ce qu'il a marché dans le parc ?",
          "My grandmother visited the city. | My grandmother didn't visit the city. | Did your grandmother visit the city? || Ma grand-mère a visité la ville. | Ma grand-mère n'a pas visité la ville. | Est-ce que ta grand-mère a visité la ville ?"
        ],
        "t3": [
          "I will go to the bank tomorrow. | I won't go to the bank tomorrow. | Will you go to the bank tomorrow? || J'irai à la banque demain. | Je n'irai pas à la banque demain. | Est-ce que tu iras à la banque demain ?",
          "She will visit the old town. | She won't visit the old town. | Will she visit the old town? || Elle visitera la vieille ville. | Elle ne visitera pas la vieille ville. | Est-ce qu'elle visitera la vieille ville ?",
          "We will wait at the station. | We won't wait at the station. | Will you wait at the station? || Nous attendrons à la gare. | Nous n'attendrons pas à la gare. | Est-ce que vous attendrez à la gare ?",
          "They will eat at the restaurant tonight. | They won't eat at the restaurant tonight. | Will they eat at the restaurant tonight? || Ils mangeront au restaurant ce soir. | Ils ne mangeront pas au restaurant ce soir. | Est-ce qu'ils mangeront au restaurant ce soir ?",
          "The children will walk to the park. | The children won't walk to the park. | Will the children walk to the park? || Les enfants marcheront jusqu'au parc. | Les enfants ne marcheront pas jusqu'au parc. | Est-ce que les enfants marcheront jusqu'au parc ?",
          "My mother will buy fruit at the market. | My mother won't buy fruit at the market. | Will your mother buy fruit at the market? || Ma mère achètera des fruits au marché. | Ma mère n'achètera pas de fruits au marché. | Est-ce que ta mère achètera des fruits au marché ?"
        ]
      }
    },
    {
      "id": "transport",
      "name": "Transports & voyage",
      "icon": "🚌",
      "lvl": 2,
      "words": [
        "car=voiture",
        "bus=bus",
        "train=train",
        "plane=avion",
        "bike=vélo",
        "boat=bateau",
        "ticket=billet / ticket",
        "road=route",
        "trip=voyage",
        "suitcase=valise"
      ],
      "sentences": [],
      "oral": [
        "My father drives a red car. | My father doesn't drive a red car. | Does your father drive a red car? || Mon père conduit une voiture rouge. | Mon père ne conduit pas de voiture rouge. | Est-ce que ton père conduit une voiture rouge ?",
        "I go to school by bus. | I don't go to school by bus. | Do you go to school by bus? || Je vais à l'école en bus. | Je ne vais pas à l'école en bus. | Est-ce que tu vas à l'école en bus ?",
        "The train is late. | The train is not late. | Is the train late? || Le train est en retard. | Le train n'est pas en retard. | Est-ce que le train est en retard ?",
        "She takes the plane. | She doesn't take the plane. | Does she take the plane? || Elle prend l'avion. | Elle ne prend pas l'avion. | Est-ce qu'elle prend l'avion ?",
        "We go to the park by bike. | We don't go to the park by bike. | Do you go to the park by bike? || Nous allons au parc à vélo. | Nous n'allons pas au parc à vélo. | Est-ce que vous allez au parc à vélo ?",
        "The boat is big. | The boat is not big. | Is the boat big? || Le bateau est grand. | Le bateau n'est pas grand. | Est-ce que le bateau est grand ?",
        "I have a ticket. | I don't have a ticket. | Do you have a ticket? || J'ai un billet. | Je n'ai pas de billet. | Est-ce que tu as un billet ?",
        "The road is long. | The road is not long. | Is the road long? || La route est longue. | La route n'est pas longue. | Est-ce que la route est longue ?",
        "They love long trips. | They don't love long trips. | Do they love long trips? || Ils adorent les longs voyages. | Ils n'adorent pas les longs voyages. | Est-ce qu'ils adorent les longs voyages ?",
        "She has a big suitcase. | She doesn't have a big suitcase. | Does she have a big suitcase? || Elle a une grande valise. | Elle n'a pas de grande valise. | Est-ce qu'elle a une grande valise ?"
      ],
      "tenses": {
        "t1": [
          "I am waiting for the bus. | I am not waiting for the bus. | Are you waiting for the bus? || J'attends le bus. | Je n'attends pas le bus. | Est-ce que tu attends le bus ?",
          "She is driving her car. | She is not driving her car. | Is she driving her car? || Elle conduit sa voiture. | Elle ne conduit pas sa voiture. | Est-ce qu'elle conduit sa voiture ?",
          "The train is arriving now. | The train is not arriving now. | Is the train arriving now? || Le train arrive maintenant. | Le train n'arrive pas maintenant. | Est-ce que le train arrive maintenant ?",
          "We are taking the boat. | We are not taking the boat. | Are you taking the boat? || Nous prenons le bateau. | Nous ne prenons pas le bateau. | Est-ce que vous prenez le bateau ?",
          "They are riding their bikes. | They are not riding their bikes. | Are they riding their bikes? || Ils font du vélo. | Ils ne font pas de vélo. | Est-ce qu'ils font du vélo ?",
          "He is buying a train ticket. | He is not buying a train ticket. | Is he buying a train ticket? || Il achète un billet de train. | Il n'achète pas de billet de train. | Est-ce qu'il achète un billet de train ?",
          "My parents are packing their suitcases. | My parents are not packing their suitcases. | Are your parents packing their suitcases? || Mes parents préparent leurs valises. | Mes parents ne préparent pas leurs valises. | Est-ce que tes parents préparent leurs valises ?"
        ],
        "t2": [
          "I took the train yesterday. | I didn't take the train yesterday. | Did you take the train yesterday? || J'ai pris le train hier. | Je n'ai pas pris le train hier. | Est-ce que tu as pris le train hier ?",
          "She went to London by plane. | She didn't go to London by plane. | Did she go to London by plane? || Elle est allée à Londres en avion. | Elle n'est pas allée à Londres en avion. | Est-ce qu'elle est allée à Londres en avion ?",
          "We bought two tickets. | We didn't buy two tickets. | Did you buy two tickets? || Nous avons acheté deux billets. | Nous n'avons pas acheté deux billets. | Est-ce que vous avez acheté deux billets ?",
          "The trip was long. | The trip was not long. | Was the trip long? || Le voyage était long. | Le voyage n'était pas long. | Est-ce que le voyage était long ?",
          "They came by boat. | They didn't come by boat. | Did they come by boat? || Ils sont venus en bateau. | Ils ne sont pas venus en bateau. | Est-ce qu'ils sont venus en bateau ?",
          "He rode his bike in the park. | He didn't ride his bike in the park. | Did he ride his bike in the park? || Il a fait du vélo dans le parc. | Il n'a pas fait de vélo dans le parc. | Est-ce qu'il a fait du vélo dans le parc ?",
          "My father drove all night. | My father didn't drive all night. | Did your father drive all night? || Mon père a conduit toute la nuit. | Mon père n'a pas conduit toute la nuit. | Est-ce que ton père a conduit toute la nuit ?",
          "I forgot my suitcase. | I didn't forget my suitcase. | Did you forget your suitcase? || J'ai oublié ma valise. | Je n'ai pas oublié ma valise. | Est-ce que tu as oublié ta valise ?"
        ],
        "t3": [
          "We will take the plane tomorrow. | We won't take the plane tomorrow. | Will you take the plane tomorrow? || Nous prendrons l'avion demain. | Nous ne prendrons pas l'avion demain. | Est-ce que vous prendrez l'avion demain ?",
          "I will buy a new bike. | I won't buy a new bike. | Will you buy a new bike? || J'achèterai un nouveau vélo. | Je n'achèterai pas de nouveau vélo. | Est-ce que tu achèteras un nouveau vélo ?",
          "She will drive on this road. | She won't drive on this road. | Will she drive on this road? || Elle conduira sur cette route. | Elle ne conduira pas sur cette route. | Est-ce qu'elle conduira sur cette route ?",
          "They will go on a trip this summer. | They won't go on a trip this summer. | Will they go on a trip this summer? || Ils iront en voyage cet été. | Ils n'iront pas en voyage cet été. | Est-ce qu'ils iront en voyage cet été ?",
          "The bus will arrive at eight. | The bus won't arrive at eight. | Will the bus arrive at eight? || Le bus arrivera à huit heures. | Le bus n'arrivera pas à huit heures. | Est-ce que le bus arrivera à huit heures ?",
          "He will take the boat on Saturday. | He won't take the boat on Saturday. | Will he take the boat on Saturday? || Il prendra le bateau samedi. | Il ne prendra pas le bateau samedi. | Est-ce qu'il prendra le bateau samedi ?",
          "My mother will pack her suitcase tonight. | My mother won't pack her suitcase tonight. | Will your mother pack her suitcase tonight? || Ma mère préparera sa valise ce soir. | Ma mère ne préparera pas sa valise ce soir. | Est-ce que ta mère préparera sa valise ce soir ?"
        ]
      }
    },
    {
      "id": "hobbies",
      "name": "Loisirs",
      "icon": "⚽",
      "lvl": 2,
      "words": [
        "sport=sport",
        "football/soccer=football / foot",
        "music=musique",
        "game=jeu / match",
        "film/movie=film",
        "book=livre",
        "song=chanson",
        "dance=danser / danse",
        "holiday/vacation=vacances",
        "beach=plage"
      ],
      "sentences": [],
      "oral": [
        "I do sport every day. | I don't do sport every day. | Do you do sport every day? || Je fais du sport tous les jours. | Je ne fais pas de sport tous les jours. | Est-ce que tu fais du sport tous les jours ?",
        "He plays football on Saturdays. | He doesn't play football on Saturdays. | Does he play football on Saturdays? || Il joue au football le samedi. | Il ne joue pas au football le samedi. | Est-ce qu'il joue au football le samedi ?",
        "She listens to music. | She doesn't listen to music. | Does she listen to music? || Elle écoute de la musique. | Elle n'écoute pas de musique. | Est-ce qu'elle écoute de la musique ?",
        "We play a game. | We don't play a game. | Do you play a game? || Nous jouons à un jeu. | Nous ne jouons pas à un jeu. | Est-ce que vous jouez à un jeu ?",
        "They watch a film. | They don't watch a film. | Do they watch a film? || Ils regardent un film. | Ils ne regardent pas de film. | Est-ce qu'ils regardent un film ?",
        "I read a good book. | I don't read a good book. | Do you read a good book? || Je lis un bon livre. | Je ne lis pas de bon livre. | Est-ce que tu lis un bon livre ?",
        "My sister sings a song. | My sister doesn't sing a song. | Does your sister sing a song? || Ma sœur chante une chanson. | Ma sœur ne chante pas de chanson. | Est-ce que ta sœur chante une chanson ?",
        "She dances very well. | She doesn't dance very well. | Does she dance very well? || Elle danse très bien. | Elle ne danse pas très bien. | Est-ce qu'elle danse très bien ?",
        "We are on holiday. | We are not on holiday. | Are you on holiday? || Nous sommes en vacances. | Nous ne sommes pas en vacances. | Est-ce que vous êtes en vacances ?",
        "The children play on the beach. | The children don't play on the beach. | Do the children play on the beach? || Les enfants jouent sur la plage. | Les enfants ne jouent pas sur la plage. | Est-ce que les enfants jouent sur la plage ?"
      ],
      "tenses": {
        "t1": [
          "I am listening to a song. | I am not listening to a song. | Are you listening to a song? || J'écoute une chanson. | Je n'écoute pas de chanson. | Est-ce que tu écoutes une chanson ?",
          "They are watching a football match. | They are not watching a football match. | Are they watching a football match? || Ils regardent un match de football. | Ils ne regardent pas de match de football. | Est-ce qu'ils regardent un match de football ?",
          "She is reading a book on the beach. | She is not reading a book on the beach. | Is she reading a book on the beach? || Elle lit un livre sur la plage. | Elle ne lit pas de livre sur la plage. | Est-ce qu'elle lit un livre sur la plage ?",
          "We are dancing now. | We are not dancing now. | Are you dancing now? || Nous dansons maintenant. | Nous ne dansons pas maintenant. | Est-ce que vous dansez maintenant ?",
          "He is playing a game with his friends. | He is not playing a game with his friends. | Is he playing a game with his friends? || Il joue à un jeu avec ses amis. | Il ne joue pas à un jeu avec ses amis. | Est-ce qu'il joue à un jeu avec ses amis ?",
          "My friends are singing a song. | My friends are not singing a song. | Are your friends singing a song? || Mes amis chantent une chanson. | Mes amis ne chantent pas de chanson. | Est-ce que tes amis chantent une chanson ?",
          "We are having a good holiday. | We are not having a good holiday. | Are you having a good holiday? || Nous passons de bonnes vacances. | Nous ne passons pas de bonnes vacances. | Est-ce que vous passez de bonnes vacances ?"
        ],
        "t2": [
          "I watched a good film last night. | I didn't watch a good film last night. | Did you watch a good film last night? || J'ai regardé un bon film hier soir. | Je n'ai pas regardé de bon film hier soir. | Est-ce que tu as regardé un bon film hier soir ?",
          "She sang a song. | She didn't sing a song. | Did she sing a song? || Elle a chanté une chanson. | Elle n'a pas chanté de chanson. | Est-ce qu'elle a chanté une chanson ?",
          "We won the game. | We didn't win the game. | Did you win the game? || Nous avons gagné le match. | Nous n'avons pas gagné le match. | Est-ce que vous avez gagné le match ?",
          "The music was good. | The music was not good. | Was the music good? || La musique était bonne. | La musique n'était pas bonne. | Est-ce que la musique était bonne ?",
          "They danced all night. | They didn't dance all night. | Did they dance all night? || Ils ont dansé toute la nuit. | Ils n'ont pas dansé toute la nuit. | Est-ce qu'ils ont dansé toute la nuit ?",
          "He read this book on holiday. | He didn't read this book on holiday. | Did he read this book on holiday? || Il a lu ce livre en vacances. | Il n'a pas lu ce livre en vacances. | Est-ce qu'il a lu ce livre en vacances ?",
          "My brother played football yesterday. | My brother didn't play football yesterday. | Did your brother play football yesterday? || Mon frère a joué au football hier. | Mon frère n'a pas joué au football hier. | Est-ce que ton frère a joué au football hier ?",
          "We went to the beach. | We didn't go to the beach. | Did you go to the beach? || Nous sommes allés à la plage. | Nous ne sommes pas allés à la plage. | Est-ce que vous êtes allés à la plage ?"
        ],
        "t3": [
          "I will play football on Sunday. | I won't play football on Sunday. | Will you play football on Sunday? || Je jouerai au football dimanche. | Je ne jouerai pas au football dimanche. | Est-ce que tu joueras au football dimanche ?",
          "She will do sport tomorrow. | She won't do sport tomorrow. | Will she do sport tomorrow? || Elle fera du sport demain. | Elle ne fera pas de sport demain. | Est-ce qu'elle fera du sport demain ?",
          "We will go to the beach this afternoon. | We won't go to the beach this afternoon. | Will you go to the beach this afternoon? || Nous irons à la plage cet après-midi. | Nous n'irons pas à la plage cet après-midi. | Est-ce que vous irez à la plage cet après-midi ?",
          "They will watch a film tonight. | They won't watch a film tonight. | Will they watch a film tonight? || Ils regarderont un film ce soir. | Ils ne regarderont pas de film ce soir. | Est-ce qu'ils regarderont un film ce soir ?",
          "He will listen to music. | He won't listen to music. | Will he listen to music? || Il écoutera de la musique. | Il n'écoutera pas de musique. | Est-ce qu'il écoutera de la musique ?",
          "My sister will dance at the party. | My sister won't dance at the party. | Will your sister dance at the party? || Ma sœur dansera à la fête. | Ma sœur ne dansera pas à la fête. | Est-ce que ta sœur dansera à la fête ?",
          "We will go on holiday next week. | We won't go on holiday next week. | Will you go on holiday next week? || Nous partirons en vacances la semaine prochaine. | Nous ne partirons pas en vacances la semaine prochaine. | Est-ce que vous partirez en vacances la semaine prochaine ?"
        ]
      }
    },
  );
})();
