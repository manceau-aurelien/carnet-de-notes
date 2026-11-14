"use strict";
// =====================================================================
//  BRICKS — NIVEAU 2 du parcours « français » : les temps (après le Dragon des Mots)
// Fichier généré automatiquement (outils/niveau2) : ne pas modifier à la main.
// =====================================================================
(function () {
  const c = COURSES.fr;
  c.tenses = {
    "t1": {
      "icon": "⏪",
      "name": "Passé composé",
      "desc": "Tell about the past with the passé composé, in all 3 forms, with the brick's words."
    },
    "t2": {
      "icon": "⏩",
      "name": "Futur proche",
      "desc": "Talk about the future with aller + infinitive, in all 3 forms, with the brick's words."
    },
    "t3": {
      "icon": "⏳",
      "name": "Imparfait",
      "desc": "Describe the past and old habits with the imparfait, in all 3 forms, with the brick's words."
    }
  };
  Object.assign(c.skills, {
    "t1": {
      "name": "Passé composé",
      "icon": "⏪",
      "lesson": [
        "The <b>passé composé</b> tells about a <b>finished</b> action:<br><i>J'ai mangé une pomme.</i> — I ate an apple.",
        "Form: <b>avoir</b> (present) + <b>past participle</b>: <i>j'ai mangé, tu as fini, il a vu, nous avons pris</i>.<br>-er verbs → <b>-é</b>: <i>manger → mangé, jouer → joué</i>. Many common verbs are irregular: <i>voir → vu, prendre → pris, faire → fait</i>.",
        "Some verbs (mostly about moving) use <b>être</b> instead: <i>aller, venir, partir, arriver, tomber, rester, monter, rentrer</i>…<br>Then the participle <b>agrees</b> with the subject: <i>Elle est allé<b>e</b>. — Ils sont parti<b>s</b>.</i>",
        "Negation wraps the <b>helper verb</b>: <i>Je <b>n'</b>ai <b>pas</b> mangé.</i><br>Question: <i>Est-ce que tu as mangé ?</i>"
      ]
    },
    "t2": {
      "name": "Futur proche",
      "icon": "⏩",
      "lesson": [
        "The <b>futur proche</b> works like English <i>going to</i>:<br><i>Je <b>vais manger</b>.</i> — I'm going to eat.",
        "Form: <b>aller</b> (present) + <b>infinitive</b>: <i>je vais, tu vas, il va, nous allons, vous allez, ils vont</i> + <i>manger, partir, voir</i>…",
        "Negation wraps <b>aller</b>: <i>Je <b>ne</b> vais <b>pas</b> partir.</i><br>Question: <i>Est-ce que tu vas venir ?</i>"
      ]
    },
    "t3": {
      "name": "Imparfait",
      "icon": "⏳",
      "lesson": [
        "The <b>imparfait</b> describes the past: old habits (<i>used to</i>), states and background (<i>was …-ing</i>):<br><i>Avant, je jouais au foot.</i> — I used to play soccer.",
        "Form: take the <b>nous</b> form of the present, remove <b>-ons</b>, add <b>-ais, -ais, -ait, -ions, -iez, -aient</b>:<br><i>nous jouons → je jou<b>ais</b>, il jou<b>ait</b>, ils jou<b>aient</b></i>. One exception: <b>être → j'étais</b>.",
        "Use it for descriptions: <i>Il faisait froid. — J'étais fatigué. — Il pleuvait.</i><br>For one finished action, use the <b>passé composé</b>: <i>Il a plu hier.</i>",
        "Negation and questions work as usual: <i>Je <b>ne</b> jouais <b>pas</b>. — Est-ce que tu jouais ?</i>"
      ]
    }
  });
  c.tenseForms = [["achète", "achètes", "achetons", "achetez", "achètent"], ["achetais", "achetait", "achetions", "achetiez", "achetaient"], ["acheté", "achetée", "achetés", "achetées"], ["acheter", "acheté", "achète"], ["aide", "aides", "aidons", "aidez", "aident"], ["aidais", "aidait", "aidions", "aidiez", "aidaient"], ["aidé", "aidée", "aidés", "aidées"], ["aider", "aidé", "aide"], ["vais", "vas", "va", "allons", "allez", "vont"], ["allais", "allait", "allions", "alliez", "allaient"], ["allé", "allée", "allés", "allées"], ["aller", "allé", "va"], ["apprends", "apprend", "apprenons", "apprenez", "apprennent"], ["apprenais", "apprenait", "apprenions", "appreniez", "apprenaient"], ["appris", "apprise", "apprises"], ["apprendre", "appris", "apprend"], ["arrive", "arrives", "arrivons", "arrivez", "arrivent"], ["arrivais", "arrivait", "arrivions", "arriviez", "arrivaient"], ["arrivé", "arrivée", "arrivés", "arrivées"], ["arriver", "arrivé", "arrive"], ["attends", "attend", "attendons", "attendez", "attendent"], ["attendais", "attendait", "attendions", "attendiez", "attendaient"], ["attendu", "attendue", "attendus", "attendues"], ["attendre", "attendu", "attend"], ["ai", "as", "a", "avons", "avez", "ont"], ["avais", "avait", "avions", "aviez", "avaient"], ["eu", "eue", "eus", "eues"], ["avoir", "eu", "a"], ["bois", "boit", "buvons", "buvez", "boivent"], ["buvais", "buvait", "buvions", "buviez", "buvaient"], ["bu", "bue", "bus", "bues"], ["boire", "bu", "boit"], ["brille", "brilles", "brillons", "brillez", "brillent"], ["brillais", "brillait", "brillions", "brilliez", "brillaient"], ["brillé", "brillée", "brillés", "brillées"], ["briller", "brillé", "brille"], ["chante", "chantes", "chantons", "chantez", "chantent"], ["chantais", "chantait", "chantions", "chantiez", "chantaient"], ["chanté", "chantée", "chantés", "chantées"], ["chanter", "chanté", "chante"], ["comprends", "comprend", "comprenons", "comprenez", "comprennent"], ["comprenais", "comprenait", "comprenions", "compreniez", "comprenaient"], ["compris", "comprise", "comprises"], ["comprendre", "compris", "comprend"], ["compte", "comptes", "comptons", "comptez", "comptent"], ["comptais", "comptait", "comptions", "comptiez", "comptaient"], ["compté", "comptée", "comptés", "comptées"], ["compter", "compté", "compte"], ["conduis", "conduit", "conduisons", "conduisez", "conduisent"], ["conduisais", "conduisait", "conduisions", "conduisiez", "conduisaient"], ["conduit", "conduite", "conduits", "conduites"], ["conduire", "conduit"], ["cours", "court", "courons", "courez", "courent"], ["courais", "courait", "courions", "couriez", "couraient"], ["couru", "courue", "courus", "courues"], ["courir", "couru", "court"], ["coûte", "coûtes", "coûtons", "coûtez", "coûtent"], ["coûtais", "coûtait", "coûtions", "coûtiez", "coûtaient"], ["coûté", "coûtée", "coûtés", "coûtées"], ["coûter", "coûté", "coûte"], ["cuisine", "cuisines", "cuisinons", "cuisinez", "cuisinent"], ["cuisinais", "cuisinait", "cuisinions", "cuisiniez", "cuisinaient"], ["cuisiné", "cuisinée", "cuisinés", "cuisinées"], ["cuisiner", "cuisiné", "cuisine"], ["danse", "danses", "dansons", "dansez", "dansent"], ["dansais", "dansait", "dansions", "dansiez", "dansaient"], ["dansé", "dansée", "dansés", "dansées"], ["danser", "dansé", "danse"], ["demande", "demandes", "demandons", "demandez", "demandent"], ["demandais", "demandait", "demandions", "demandiez", "demandaient"], ["demandé", "demandée", "demandés", "demandées"], ["demander", "demandé", "demande"], ["dis", "dit", "disons", "dites", "disent"], ["disais", "disait", "disions", "disiez", "disaient"], ["dit", "dite", "dits", "dites"], ["dire", "dit"], ["dors", "dort", "dormons", "dormez", "dorment"], ["dormais", "dormait", "dormions", "dormiez", "dormaient"], ["dormi", "dormie", "dormis", "dormies"], ["dormir", "dormi", "dort"], ["fais", "fait", "faisons", "faites", "font"], ["faisais", "faisait", "faisions", "faisiez", "faisaient"], ["fait", "faite", "faits", "faites"], ["faire", "fait"], ["ferme", "fermes", "fermons", "fermez", "ferment"], ["fermais", "fermait", "fermions", "fermiez", "fermaient"], ["fermé", "fermée", "fermés", "fermées"], ["fermer", "fermé", "ferme"], ["gagne", "gagnes", "gagnons", "gagnez", "gagnent"], ["gagnais", "gagnait", "gagnions", "gagniez", "gagnaient"], ["gagné", "gagnée", "gagnés", "gagnées"], ["gagner", "gagné", "gagne"], ["habite", "habites", "habitons", "habitez", "habitent"], ["habitais", "habitait", "habitions", "habitiez", "habitaient"], ["habité", "habitée", "habités", "habitées"], ["habiter", "habité", "habite"], ["joue", "joues", "jouons", "jouez", "jouent"], ["jouais", "jouait", "jouions", "jouiez", "jouaient"], ["joué", "jouée", "joués", "jouées"], ["jouer", "joué", "joue"], ["lave", "laves", "lavons", "lavez", "lavent"], ["lavais", "lavait", "lavions", "laviez", "lavaient"], ["lavé", "lavée", "lavés", "lavées"], ["laver", "lavé", "lave"], ["lis", "lit", "lisons", "lisez", "lisent"], ["lisais", "lisait", "lisions", "lisiez", "lisaient"], ["lu", "lue", "lus", "lues"], ["lire", "lu", "lit"], ["mange", "manges", "mangeons", "mangez", "mangent"], ["mangeais", "mangeait", "mangions", "mangiez", "mangeaient"], ["mangé", "mangée", "mangés", "mangées"], ["manger", "mangé", "mange"], ["marche", "marches", "marchons", "marchez", "marchent"], ["marchais", "marchait", "marchions", "marchiez", "marchaient"], ["marché", "marchée", "marchés", "marchées"], ["marcher", "marché", "marche"], ["monte", "montes", "montons", "montez", "montent"], ["montais", "montait", "montions", "montiez", "montaient"], ["monté", "montée", "montés", "montées"], ["monter", "monté", "monte"], ["nage", "nages", "nageons", "nagez", "nagent"], ["nageais", "nageait", "nagions", "nagiez", "nageaient"], ["nagé", "nagée", "nagés", "nagées"], ["nager", "nagé", "nage"], ["neige", "neiges", "neigeons", "neigez", "neigent"], ["neigeais", "neigeait", "neigions", "neigiez", "neigeaient"], ["neigé", "neigée", "neigés", "neigées"], ["neiger", "neigé", "neige"], ["oublie", "oublies", "oublions", "oubliez", "oublient"], ["oubliais", "oubliait", "oubliions", "oubliiez", "oubliaient"], ["oublié", "oubliée", "oubliés", "oubliées"], ["oublier", "oublié", "oublie"], ["ouvre", "ouvres", "ouvrons", "ouvrez", "ouvrent"], ["ouvrais", "ouvrait", "ouvrions", "ouvriez", "ouvraient"], ["ouvert", "ouverte", "ouverts", "ouvertes"], ["ouvrir", "ouvert", "ouvre"], ["parle", "parles", "parlons", "parlez", "parlent"], ["parlais", "parlait", "parlions", "parliez", "parlaient"], ["parlé", "parlée", "parlés", "parlées"], ["parler", "parlé", "parle"], ["pars", "part", "partons", "partez", "partent"], ["partais", "partait", "partions", "partiez", "partaient"], ["parti", "partie", "partis", "parties"], ["partir", "parti", "part"], ["pense", "penses", "pensons", "pensez", "pensent"], ["pensais", "pensait", "pensions", "pensiez", "pensaient"], ["pensé", "pensée", "pensés", "pensées"], ["penser", "pensé", "pense"], ["pleuvais", "pleuvait", "pleuvions", "pleuviez", "pleuvaient"], ["plu", "plue", "plus", "plues"], ["pleuvoir", "plu", "pleut"], ["prends", "prend", "prenons", "prenez", "prennent"], ["prenais", "prenait", "prenions", "preniez", "prenaient"], ["pris", "prise", "prises"], ["prendre", "pris", "prend"], ["prépare", "prépares", "préparons", "préparez", "préparent"], ["préparais", "préparait", "préparions", "prépariez", "préparaient"], ["préparé", "préparée", "préparés", "préparées"], ["préparer", "préparé", "prépare"], ["raconte", "racontes", "racontons", "racontez", "racontent"], ["racontais", "racontait", "racontions", "racontiez", "racontaient"], ["raconté", "racontée", "racontés", "racontées"], ["raconter", "raconté", "raconte"], ["regarde", "regardes", "regardons", "regardez", "regardent"], ["regardais", "regardait", "regardions", "regardiez", "regardaient"], ["regardé", "regardée", "regardés", "regardées"], ["regarder", "regardé", "regarde"], ["rentre", "rentres", "rentrons", "rentrez", "rentrent"], ["rentrais", "rentrait", "rentrions", "rentriez", "rentraient"], ["rentré", "rentrée", "rentrés", "rentrées"], ["rentrer", "rentré", "rentre"], ["reste", "restes", "restons", "restez", "restent"], ["restais", "restait", "restions", "restiez", "restaient"], ["resté", "restée", "restés", "restées"], ["rester", "resté", "reste"], ["réponds", "répond", "répondons", "répondez", "répondent"], ["répondais", "répondait", "répondions", "répondiez", "répondaient"], ["répondu", "répondue", "répondus", "répondues"], ["répondre", "répondu", "répond"], ["sais", "sait", "savons", "savez", "savent"], ["savais", "savait", "savions", "saviez", "savaient"], ["su", "sue", "sus", "sues"], ["savoir", "su", "sait"], ["souffle", "souffles", "soufflons", "soufflez", "soufflent"], ["soufflais", "soufflait", "soufflions", "souffliez", "soufflaient"], ["soufflé", "soufflée", "soufflés", "soufflées"], ["souffler", "soufflé", "souffle"], ["tombe", "tombes", "tombons", "tombez", "tombent"], ["tombais", "tombait", "tombions", "tombiez", "tombaient"], ["tombé", "tombée", "tombés", "tombées"], ["tomber", "tombé", "tombe"], ["travaille", "travailles", "travaillons", "travaillez", "travaillent"], ["travaillais", "travaillait", "travaillions", "travailliez", "travaillaient"], ["travaillé", "travaillée", "travaillés", "travaillées"], ["travailler", "travaillé", "travaille"], ["viens", "vient", "venons", "venez", "viennent"], ["venais", "venait", "venions", "veniez", "venaient"], ["venu", "venue", "venus", "venues"], ["venir", "venu", "vient"], ["visite", "visites", "visitons", "visitez", "visitent"], ["visitais", "visitait", "visitions", "visitiez", "visitaient"], ["visité", "visitée", "visités", "visitées"], ["visiter", "visité", "visite"], ["vois", "voit", "voyons", "voyez", "voient"], ["voyais", "voyait", "voyions", "voyiez", "voyaient"], ["vu", "vue", "vus", "vues"], ["voir", "vu", "voit"], ["écoute", "écoutes", "écoutons", "écoutez", "écoutent"], ["écoutais", "écoutait", "écoutions", "écoutiez", "écoutaient"], ["écouté", "écoutée", "écoutés", "écoutées"], ["écouter", "écouté", "écoute"], ["écris", "écrit", "écrivons", "écrivez", "écrivent"], ["écrivais", "écrivait", "écrivions", "écriviez", "écrivaient"], ["écrit", "écrite", "écrits", "écrites"], ["écrire", "écrit"], ["étudie", "étudies", "étudions", "étudiez", "étudient"], ["étudiais", "étudiait", "étudiions", "étudiiez", "étudiaient"], ["étudié", "étudiée", "étudiés", "étudiées"], ["étudier", "étudié", "étudie"], ["suis", "es", "est", "sommes", "êtes", "sont"], ["étais", "était", "étions", "étiez", "étaient"], ["été", "étée", "étés", "étées"], ["être", "été", "est"]];
  c.bricks.push(
    {
      "id": "time",
      "name": "Time words",
      "icon": "⏰",
      "lvl": 2,
      "words": [
        "aujourd'hui=today",
        "hier=yesterday",
        "demain=tomorrow",
        "maintenant=now",
        "le matin=the morning / in the morning",
        "l'après-midi=the afternoon / in the afternoon",
        "le soir=the evening / in the evening",
        "la nuit=the night / at night",
        "une semaine=a week",
        "une année/un an=a year"
      ],
      "sentences": [],
      "oral": [
        "Je bois du thé le matin. | Je ne bois pas de thé le matin. | Est-ce que tu bois du thé le matin ? || I drink tea in the morning. | I don't drink tea in the morning. | Do you drink tea in the morning?",
        "Nous jouons au football l'après-midi. | Nous ne jouons pas au football l'après-midi. | Est-ce que vous jouez au football l'après-midi ? || We play soccer in the afternoon. | We don't play soccer in the afternoon. | Do you play soccer in the afternoon?",
        "Il lit un livre le soir. | Il ne lit pas de livre le soir. | Est-ce qu'il lit un livre le soir ? || He reads a book in the evening. | He doesn't read a book in the evening. | Does he read a book in the evening?",
        "Le chat dort la nuit. | Le chat ne dort pas la nuit. | Est-ce que le chat dort la nuit ? || The cat sleeps at night. | The cat doesn't sleep at night. | Does the cat sleep at night?",
        "Elle est ici aujourd'hui. | Elle n'est pas ici aujourd'hui. | Est-ce qu'elle est ici aujourd'hui ? || She is here today. | She is not here today. | Is she here today?",
        "Je suis heureux maintenant. | Je ne suis pas heureux maintenant. | Est-ce que tu es heureux maintenant ? || I am happy now. | I am not happy now. | Are you happy now?",
        "Nous allons à l'école demain. | Nous n'allons pas à l'école demain. | Est-ce que vous allez à l'école demain ? || We go to school tomorrow. | We don't go to school tomorrow. | Do you go to school tomorrow?",
        "Mon frère joue au football chaque semaine. | Mon frère ne joue pas au football chaque semaine. | Est-ce que ton frère joue au football chaque semaine ? || My brother plays soccer every week. | My brother doesn't play soccer every week. | Does your brother play soccer every week?",
        "Ma sœur a dix ans cette année. | Ma sœur n'a pas dix ans cette année. | Est-ce que ta sœur a dix ans cette année ? || My sister is ten this year. | My sister is not ten this year. | Is your sister ten this year?",
        "Mes amis sont ici cette semaine. | Mes amis ne sont pas ici cette semaine. | Est-ce que tes amis sont ici cette semaine ? || My friends are here this week. | My friends are not here this week. | Are your friends here this week?"
      ],
      "tenses": {
        "t1": [
          "J'ai mangé une pomme hier. | Je n'ai pas mangé de pomme hier. | Est-ce que tu as mangé une pomme hier ? || I ate an apple yesterday. | I didn't eat an apple yesterday. | Did you eat an apple yesterday?",
          "Elle a lu un livre hier soir. | Elle n'a pas lu de livre hier soir. | Est-ce qu'elle a lu un livre hier soir ? || She read a book last night. | She didn't read a book last night. | Did she read a book last night?",
          "Nous avons joué au football hier après-midi. | Nous n'avons pas joué au football hier après-midi. | Est-ce que vous avez joué au football hier après-midi ? || We played soccer yesterday afternoon. | We didn't play soccer yesterday afternoon. | Did you play soccer yesterday afternoon?",
          "Ils sont allés à l'école ce matin. | Ils ne sont pas allés à l'école ce matin. | Est-ce qu'ils sont allés à l'école ce matin ? || They went to school this morning. | They didn't go to school this morning. | Did they go to school this morning?",
          "Ma sœur a vu ses amis la semaine dernière. | Ma sœur n'a pas vu ses amis la semaine dernière. | Est-ce que ta sœur a vu ses amis la semaine dernière ? || My sister saw her friends last week. | My sister didn't see her friends last week. | Did your sister see her friends last week?",
          "Mon grand-père est allé à Londres l'année dernière. | Mon grand-père n'est pas allé à Londres l'année dernière. | Est-ce que ton grand-père est allé à Londres l'année dernière ? || My grandfather went to London last year. | My grandfather didn't go to London last year. | Did your grandfather go to London last year?"
        ],
        "t2": [
          "Je vais manger du poulet demain. | Je ne vais pas manger de poulet demain. | Est-ce que tu vas manger du poulet demain ? || I am going to eat chicken tomorrow. | I am not going to eat chicken tomorrow. | Are you going to eat chicken tomorrow?",
          "Nous allons voir notre grand-mère la semaine prochaine. | Nous n'allons pas voir notre grand-mère la semaine prochaine. | Est-ce que vous allez voir votre grand-mère la semaine prochaine ? || We are going to see our grandmother next week. | We are not going to see our grandmother next week. | Are you going to see your grandmother next week?",
          "Elle va lire ce livre ce soir. | Elle ne va pas lire ce livre ce soir. | Est-ce qu'elle va lire ce livre ce soir ? || She is going to read this book tonight. | She is not going to read this book tonight. | Is she going to read this book tonight?",
          "Ils vont jouer au football demain matin. | Ils ne vont pas jouer au football demain matin. | Est-ce qu'ils vont jouer au football demain matin ? || They are going to play soccer tomorrow morning. | They are not going to play soccer tomorrow morning. | Are they going to play soccer tomorrow morning?",
          "Mon frère va avoir dix ans l'année prochaine. | Mon frère ne va pas avoir dix ans l'année prochaine. | Est-ce que ton frère va avoir dix ans l'année prochaine ? || My brother is going to be ten next year. | My brother is not going to be ten next year. | Is your brother going to be ten next year?",
          "Je vais boire du thé cet après-midi. | Je ne vais pas boire de thé cet après-midi. | Est-ce que tu vas boire du thé cet après-midi ? || I am going to drink tea this afternoon. | I am not going to drink tea this afternoon. | Are you going to drink tea this afternoon?"
        ],
        "t3": [
          "Avant, je jouais au football tous les après-midi. | Avant, je ne jouais pas au football tous les après-midi. | Avant, est-ce que tu jouais au football tous les après-midi ? || I used to play soccer every afternoon. | I didn't use to play soccer every afternoon. | Did you use to play soccer every afternoon?",
          "Avant, elle lisait un livre chaque soir. | Avant, elle ne lisait pas de livre chaque soir. | Avant, est-ce qu'elle lisait un livre chaque soir ? || She used to read a book every evening. | She didn't use to read a book every evening. | Did she use to read a book every evening?",
          "Avant, ils buvaient du thé le matin. | Avant, ils ne buvaient pas de thé le matin. | Avant, est-ce qu'ils buvaient du thé le matin ? || They used to drink tea in the morning. | They didn't use to drink tea in the morning. | Did they use to drink tea in the morning?",
          "Avant, le bébé dormait beaucoup la nuit. | Avant, le bébé ne dormait pas beaucoup la nuit. | Avant, est-ce que le bébé dormait beaucoup la nuit ? || The baby used to sleep a lot at night. | The baby didn't use to sleep a lot at night. | Did the baby use to sleep a lot at night?",
          "J'étais triste hier. | Je n'étais pas triste hier. | Est-ce que tu étais triste hier ? || I was sad yesterday. | I was not sad yesterday. | Were you sad yesterday?",
          "Nous étions heureux l'année dernière. | Nous n'étions pas heureux l'année dernière. | Est-ce que vous étiez heureux l'année dernière ? || We were happy last year. | We were not happy last year. | Were you happy last year?"
        ]
      }
    },
    {
      "id": "days",
      "name": "Days of the week",
      "icon": "📅",
      "lvl": 2,
      "words": [
        "lundi=Monday",
        "mardi=Tuesday",
        "mercredi=Wednesday",
        "jeudi=Thursday",
        "vendredi=Friday",
        "samedi=Saturday",
        "dimanche=Sunday",
        "le week-end=the weekend",
        "un jour=a day",
        "un mois=a month"
      ],
      "sentences": [],
      "oral": [
        "Je vais à l'école le lundi. | Je ne vais pas à l'école le lundi. | Est-ce que tu vas à l'école le lundi ? || I go to school on Mondays. | I don't go to school on Mondays. | Do you go to school on Mondays?",
        "Elle joue au football le mardi. | Elle ne joue pas au football le mardi. | Est-ce qu'elle joue au football le mardi ? || She plays soccer on Tuesdays. | She doesn't play soccer on Tuesdays. | Does she play soccer on Tuesdays?",
        "Nous mangeons du poisson le mercredi. | Nous ne mangeons pas de poisson le mercredi. | Est-ce que vous mangez du poisson le mercredi ? || We eat fish on Wednesdays. | We don't eat fish on Wednesdays. | Do you eat fish on Wednesdays?",
        "Il lit un livre le jeudi. | Il ne lit pas de livre le jeudi. | Est-ce qu'il lit un livre le jeudi ? || He reads a book on Thursdays. | He doesn't read a book on Thursdays. | Does he read a book on Thursdays?",
        "Ils voient leur grand-mère le vendredi. | Ils ne voient pas leur grand-mère le vendredi. | Est-ce qu'ils voient leur grand-mère le vendredi ? || They see their grandmother on Fridays. | They don't see their grandmother on Fridays. | Do they see their grandmother on Fridays?",
        "Mon père boit du thé le samedi. | Mon père ne boit pas de thé le samedi. | Est-ce que ton père boit du thé le samedi ? || My father drinks tea on Saturdays. | My father doesn't drink tea on Saturdays. | Does your father drink tea on Saturdays?",
        "Je suis à la maison le dimanche. | Je ne suis pas à la maison le dimanche. | Est-ce que tu es à la maison le dimanche ? || I am at home on Sundays. | I am not at home on Sundays. | Are you at home on Sundays?",
        "Nous jouons avec nos amis le week-end. | Nous ne jouons pas avec nos amis le week-end. | Est-ce que vous jouez avec vos amis le week-end ? || We play with our friends on the weekend. | We don't play with our friends on the weekend. | Do you play with your friends on the weekend?",
        "Une semaine a sept jours. | Une semaine n'a pas sept jours. | Est-ce qu'une semaine a sept jours ? || A week has seven days. | A week doesn't have seven days. | Does a week have seven days?",
        "Mon anniversaire est ce mois-ci. | Mon anniversaire n'est pas ce mois-ci. | Est-ce que ton anniversaire est ce mois-ci ? || My birthday is this month. | My birthday is not this month. | Is your birthday this month?"
      ],
      "tenses": {
        "t1": [
          "Je suis allé à l'école lundi. | Je ne suis pas allé à l'école lundi. | Est-ce que tu es allé à l'école lundi ? || I went to school on Monday. | I didn't go to school on Monday. | Did you go to school on Monday?",
          "Elle a vu ses amis mardi. | Elle n'a pas vu ses amis mardi. | Est-ce qu'elle a vu ses amis mardi ? || She saw her friends on Tuesday. | She didn't see her friends on Tuesday. | Did she see her friends on Tuesday?",
          "Nous avons mangé du poisson mercredi. | Nous n'avons pas mangé de poisson mercredi. | Est-ce que vous avez mangé du poisson mercredi ? || We ate fish on Wednesday. | We didn't eat fish on Wednesday. | Did you eat fish on Wednesday?",
          "Ils ont joué au football jeudi. | Ils n'ont pas joué au football jeudi. | Est-ce qu'ils ont joué au football jeudi ? || They played soccer on Thursday. | They didn't play soccer on Thursday. | Did they play soccer on Thursday?",
          "Il a lu trois livres le mois dernier. | Il n'a pas lu trois livres le mois dernier. | Est-ce qu'il a lu trois livres le mois dernier ? || He read three books last month. | He didn't read three books last month. | Did he read three books last month?",
          "Nous avons bu du thé vendredi. | Nous n'avons pas bu de thé vendredi. | Est-ce que vous avez bu du thé vendredi ? || We drank tea on Friday. | We didn't drink tea on Friday. | Did you drink tea on Friday?"
        ],
        "t2": [
          "Je vais aller à l'école lundi. | Je ne vais pas aller à l'école lundi. | Est-ce que tu vas aller à l'école lundi ? || I am going to go to school on Monday. | I am not going to go to school on Monday. | Are you going to go to school on Monday?",
          "Nous allons voir nos amis samedi. | Nous n'allons pas voir nos amis samedi. | Est-ce que vous allez voir vos amis samedi ? || We are going to see our friends on Saturday. | We are not going to see our friends on Saturday. | Are you going to see your friends on Saturday?",
          "Elle va jouer au football dimanche. | Elle ne va pas jouer au football dimanche. | Est-ce qu'elle va jouer au football dimanche ? || She is going to play soccer on Sunday. | She is not going to play soccer on Sunday. | Is she going to play soccer on Sunday?",
          "Ils vont manger du poisson vendredi. | Ils ne vont pas manger de poisson vendredi. | Est-ce qu'ils vont manger du poisson vendredi ? || They are going to eat fish on Friday. | They are not going to eat fish on Friday. | Are they going to eat fish on Friday?",
          "Il va lire un livre ce week-end. | Il ne va pas lire de livre ce week-end. | Est-ce qu'il va lire un livre ce week-end ? || He is going to read a book this weekend. | He is not going to read a book this weekend. | Is he going to read a book this weekend?",
          "Ma sœur va être ici mercredi. | Ma sœur ne va pas être ici mercredi. | Est-ce que ta sœur va être ici mercredi ? || My sister is going to be here on Wednesday. | My sister is not going to be here on Wednesday. | Is your sister going to be here on Wednesday?"
        ],
        "t3": [
          "Avant, j'allais à l'école le samedi. | Avant, je n'allais pas à l'école le samedi. | Avant, est-ce que tu allais à l'école le samedi ? || I used to go to school on Saturdays. | I didn't use to go to school on Saturdays. | Did you use to go to school on Saturdays?",
          "Avant, nous mangions du poisson le vendredi. | Avant, nous ne mangions pas de poisson le vendredi. | Avant, est-ce que vous mangiez du poisson le vendredi ? || We used to eat fish on Fridays. | We didn't use to eat fish on Fridays. | Did you use to eat fish on Fridays?",
          "Avant, elle jouait au football le mercredi. | Avant, elle ne jouait pas au football le mercredi. | Avant, est-ce qu'elle jouait au football le mercredi ? || She used to play soccer on Wednesdays. | She didn't use to play soccer on Wednesdays. | Did she use to play soccer on Wednesdays?",
          "Avant, ils voyaient leur grand-mère le dimanche. | Avant, ils ne voyaient pas leur grand-mère le dimanche. | Avant, est-ce qu'ils voyaient leur grand-mère le dimanche ? || They used to see their grandmother on Sundays. | They didn't use to see their grandmother on Sundays. | Did they use to see their grandmother on Sundays?",
          "Le week-end était long. | Le week-end n'était pas long. | Est-ce que le week-end était long ? || The weekend was long. | The weekend was not long. | Was the weekend long?",
          "Avant, il lisait un livre chaque mois. | Avant, il ne lisait pas de livre chaque mois. | Avant, est-ce qu'il lisait un livre chaque mois ? || He used to read a book every month. | He didn't use to read a book every month. | Did he use to read a book every month?"
        ]
      }
    },
    {
      "id": "numbers2",
      "name": "Numbers 11 to 20",
      "icon": "🔢",
      "lvl": 2,
      "words": [
        "onze=eleven",
        "douze=twelve",
        "treize=thirteen",
        "quatorze=fourteen",
        "quinze=fifteen",
        "seize=sixteen",
        "dix-sept=seventeen",
        "dix-huit=eighteen",
        "dix-neuf=nineteen",
        "vingt=twenty"
      ],
      "sentences": [],
      "oral": [
        "J'ai onze livres. | Je n'ai pas onze livres. | Est-ce que tu as onze livres ? || I have eleven books. | I don't have eleven books. | Do you have eleven books?",
        "Elle a douze ans. | Elle n'a pas douze ans. | Est-ce qu'elle a douze ans ? || She is twelve. | She is not twelve. | Is she twelve?",
        "Nous avons treize œufs. | Nous n'avons pas treize œufs. | Est-ce que vous avez treize œufs ? || We have thirteen eggs. | We don't have thirteen eggs. | Do you have thirteen eggs?",
        "Mon frère a quatorze ans. | Mon frère n'a pas quatorze ans. | Est-ce que ton frère a quatorze ans ? || My brother is fourteen. | My brother is not fourteen. | Is your brother fourteen?",
        "Ils veulent quinze pommes. | Ils ne veulent pas quinze pommes. | Est-ce qu'ils veulent quinze pommes ? || They want fifteen apples. | They don't want fifteen apples. | Do they want fifteen apples?",
        "Ma grand-mère a seize poules. | Ma grand-mère n'a pas seize poules. | Est-ce que ta grand-mère a seize poules ? || My grandmother has sixteen chickens. | My grandmother doesn't have sixteen chickens. | Does your grandmother have sixteen chickens?",
        "Il a dix-sept ans. | Il n'a pas dix-sept ans. | Est-ce qu'il a dix-sept ans ? || He is seventeen. | He is not seventeen. | Is he seventeen?",
        "Je vois dix-huit oiseaux. | Je ne vois pas dix-huit oiseaux. | Est-ce que tu vois dix-huit oiseaux ? || I see eighteen birds. | I don't see eighteen birds. | Do you see eighteen birds?",
        "La maison a dix-neuf fenêtres. | La maison n'a pas dix-neuf fenêtres. | Est-ce que la maison a dix-neuf fenêtres ? || The house has nineteen windows. | The house doesn't have nineteen windows. | Does the house have nineteen windows?",
        "Mon père lit vingt livres par an. | Mon père ne lit pas vingt livres par an. | Est-ce que ton père lit vingt livres par an ? || My father reads twenty books a year. | My father doesn't read twenty books a year. | Does your father read twenty books a year?"
      ],
      "tenses": {
        "t1": [
          "J'ai acheté onze pommes. | Je n'ai pas acheté onze pommes. | Est-ce que tu as acheté onze pommes ? || I bought eleven apples. | I didn't buy eleven apples. | Did you buy eleven apples?",
          "Elle a lu douze livres l'année dernière. | Elle n'a pas lu douze livres l'année dernière. | Est-ce qu'elle a lu douze livres l'année dernière ? || She read twelve books last year. | She didn't read twelve books last year. | Did she read twelve books last year?",
          "Nous avons vu treize canards. | Nous n'avons pas vu treize canards. | Est-ce que vous avez vu treize canards ? || We saw thirteen ducks. | We didn't see thirteen ducks. | Did you see thirteen ducks?",
          "Ils ont mangé quatorze œufs. | Ils n'ont pas mangé quatorze œufs. | Est-ce qu'ils ont mangé quatorze œufs ? || They ate fourteen eggs. | They didn't eat fourteen eggs. | Did they eat fourteen eggs?",
          "Mon frère a bu seize verres d'eau. | Mon frère n'a pas bu seize verres d'eau. | Est-ce que ton frère a bu seize verres d'eau ? || My brother drank sixteen glasses of water. | My brother didn't drink sixteen glasses of water. | Did your brother drink sixteen glasses of water?",
          "Les enfants ont compté jusqu'à vingt. | Les enfants n'ont pas compté jusqu'à vingt. | Est-ce que les enfants ont compté jusqu'à vingt ? || The children counted to twenty. | The children didn't count to twenty. | Did the children count to twenty?"
        ],
        "t2": [
          "Je vais avoir onze ans demain. | Je ne vais pas avoir onze ans demain. | Est-ce que tu vas avoir onze ans demain ? || I am going to be eleven tomorrow. | I am not going to be eleven tomorrow. | Are you going to be eleven tomorrow?",
          "Elle va acheter douze œufs. | Elle ne va pas acheter douze œufs. | Est-ce qu'elle va acheter douze œufs ? || She is going to buy twelve eggs. | She is not going to buy twelve eggs. | Is she going to buy twelve eggs?",
          "Nous allons voir treize chevaux. | Nous n'allons pas voir treize chevaux. | Est-ce que vous allez voir treize chevaux ? || We are going to see thirteen horses. | We are not going to see thirteen horses. | Are you going to see thirteen horses?",
          "Ils vont manger dix-sept gâteaux. | Ils ne vont pas manger dix-sept gâteaux. | Est-ce qu'ils vont manger dix-sept gâteaux ? || They are going to eat seventeen cakes. | They are not going to eat seventeen cakes. | Are they going to eat seventeen cakes?",
          "Il va lire dix-huit livres l'année prochaine. | Il ne va pas lire dix-huit livres l'année prochaine. | Est-ce qu'il va lire dix-huit livres l'année prochaine ? || He is going to read eighteen books next year. | He is not going to read eighteen books next year. | Is he going to read eighteen books next year?",
          "Ma sœur va avoir dix-neuf ans le mois prochain. | Ma sœur ne va pas avoir dix-neuf ans le mois prochain. | Est-ce que ta sœur va avoir dix-neuf ans le mois prochain ? || My sister is going to be nineteen next month. | My sister is not going to be nineteen next month. | Is your sister going to be nineteen next month?"
        ],
        "t3": [
          "J'avais douze ans l'année dernière. | Je n'avais pas douze ans l'année dernière. | Est-ce que tu avais douze ans l'année dernière ? || I was twelve last year. | I was not twelve last year. | Were you twelve last year?",
          "Elle avait quatorze chats. | Elle n'avait pas quatorze chats. | Est-ce qu'elle avait quatorze chats ? || She had fourteen cats. | She didn't have fourteen cats. | Did she have fourteen cats?",
          "Avant, nous lisions quinze livres par an. | Avant, nous ne lisions pas quinze livres par an. | Avant, est-ce que vous lisiez quinze livres par an ? || We used to read fifteen books a year. | We didn't use to read fifteen books a year. | Did you use to read fifteen books a year?",
          "Avant, ils mangeaient seize œufs par semaine. | Avant, ils ne mangeaient pas seize œufs par semaine. | Avant, est-ce qu'ils mangeaient seize œufs par semaine ? || They used to eat sixteen eggs a week. | They didn't use to eat sixteen eggs a week. | Did they use to eat sixteen eggs a week?",
          "Mon grand-père avait dix-huit chevaux. | Mon grand-père n'avait pas dix-huit chevaux. | Est-ce que ton grand-père avait dix-huit chevaux ? || My grandfather had eighteen horses. | My grandfather didn't have eighteen horses. | Did your grandfather have eighteen horses?",
          "Avant, je buvais treize verres d'eau par jour. | Avant, je ne buvais pas treize verres d'eau par jour. | Avant, est-ce que tu buvais treize verres d'eau par jour ? || I used to drink thirteen glasses of water a day. | I didn't use to drink thirteen glasses of water a day. | Did you use to drink thirteen glasses of water a day?"
        ]
      }
    },
    {
      "id": "actions",
      "name": "Everyday actions",
      "icon": "🧹",
      "lvl": 2,
      "words": [
        "travailler=to work",
        "marcher=to walk",
        "cuisiner=to cook",
        "regarder=to watch / to look at",
        "écouter=to listen (to)",
        "aider=to help",
        "ouvrir=to open",
        "fermer=to close",
        "laver=to wash",
        "étudier=to study"
      ],
      "sentences": [],
      "oral": [
        "Je travaille le matin. | Je ne travaille pas le matin. | Est-ce que tu travailles le matin ? || I work in the morning. | I don't work in the morning. | Do you work in the morning?",
        "Elle marche jusqu'à l'école. | Elle ne marche pas jusqu'à l'école. | Est-ce qu'elle marche jusqu'à l'école ? || She walks to school. | She doesn't walk to school. | Does she walk to school?",
        "Nous cuisinons le soir. | Nous ne cuisinons pas le soir. | Est-ce que vous cuisinez le soir ? || We cook in the evening. | We don't cook in the evening. | Do you cook in the evening?",
        "Ils regardent la télé. | Ils ne regardent pas la télé. | Est-ce qu'ils regardent la télé ? || They watch TV. | They don't watch TV. | Do they watch TV?",
        "Il écoute de la musique. | Il n'écoute pas de musique. | Est-ce qu'il écoute de la musique ? || He listens to music. | He doesn't listen to music. | Does he listen to music?",
        "Mon frère aide ma mère. | Mon frère n'aide pas ma mère. | Est-ce que ton frère aide ta mère ? || My brother helps my mother. | My brother doesn't help my mother. | Does your brother help your mother?",
        "J'ouvre la fenêtre. | Je n'ouvre pas la fenêtre. | Est-ce que tu ouvres la fenêtre ? || I open the window. | I don't open the window. | Do you open the window?",
        "Elle ferme la porte. | Elle ne ferme pas la porte. | Est-ce qu'elle ferme la porte ? || She closes the door. | She doesn't close the door. | Does she close the door?",
        "Nous lavons la voiture. | Nous ne lavons pas la voiture. | Est-ce que vous lavez la voiture ? || We wash the car. | We don't wash the car. | Do you wash the car?",
        "Ma sœur étudie l'anglais. | Ma sœur n'étudie pas l'anglais. | Est-ce que ta sœur étudie l'anglais ? || My sister studies English. | My sister doesn't study English. | Does your sister study English?"
      ],
      "tenses": {
        "t1": [
          "J'ai travaillé hier. | Je n'ai pas travaillé hier. | Est-ce que tu as travaillé hier ? || I worked yesterday. | I didn't work yesterday. | Did you work yesterday?",
          "Elle a marché dans le parc. | Elle n'a pas marché dans le parc. | Est-ce qu'elle a marché dans le parc ? || She walked in the park. | She didn't walk in the park. | Did she walk in the park?",
          "Nous avons cuisiné du poulet hier soir. | Nous n'avons pas cuisiné de poulet hier soir. | Est-ce que vous avez cuisiné du poulet hier soir ? || We cooked chicken last night. | We didn't cook chicken last night. | Did you cook chicken last night?",
          "Ils ont regardé un film samedi. | Ils n'ont pas regardé de film samedi. | Est-ce qu'ils ont regardé un film samedi ? || They watched a movie on Saturday. | They didn't watch a movie on Saturday. | Did they watch a movie on Saturday?",
          "Il a ouvert la porte. | Il n'a pas ouvert la porte. | Est-ce qu'il a ouvert la porte ? || He opened the door. | He didn't open the door. | Did he open the door?",
          "Ma mère a fermé les fenêtres. | Ma mère n'a pas fermé les fenêtres. | Est-ce que ta mère a fermé les fenêtres ? || My mother closed the windows. | My mother didn't close the windows. | Did your mother close the windows?",
          "J'ai aidé mon ami. | Je n'ai pas aidé mon ami. | Est-ce que tu as aidé ton ami ? || I helped my friend. | I didn't help my friend. | Did you help your friend?"
        ],
        "t2": [
          "Je vais étudier demain. | Je ne vais pas étudier demain. | Est-ce que tu vas étudier demain ? || I am going to study tomorrow. | I am not going to study tomorrow. | Are you going to study tomorrow?",
          "Elle va laver la voiture dimanche. | Elle ne va pas laver la voiture dimanche. | Est-ce qu'elle va laver la voiture dimanche ? || She is going to wash the car on Sunday. | She is not going to wash the car on Sunday. | Is she going to wash the car on Sunday?",
          "Nous allons écouter de la musique ce soir. | Nous n'allons pas écouter de musique ce soir. | Est-ce que vous allez écouter de la musique ce soir ? || We are going to listen to music tonight. | We are not going to listen to music tonight. | Are you going to listen to music tonight?",
          "Ils vont aider leur grand-père. | Ils ne vont pas aider leur grand-père. | Est-ce qu'ils vont aider leur grand-père ? || They are going to help their grandfather. | They are not going to help their grandfather. | Are they going to help their grandfather?",
          "Il va travailler samedi. | Il ne va pas travailler samedi. | Est-ce qu'il va travailler samedi ? || He is going to work on Saturday. | He is not going to work on Saturday. | Is he going to work on Saturday?",
          "Mon père va cuisiner ce soir. | Mon père ne va pas cuisiner ce soir. | Est-ce que ton père va cuisiner ce soir ? || My father is going to cook this evening. | My father is not going to cook this evening. | Is your father going to cook this evening?"
        ],
        "t3": [
          "Avant, je marchais jusqu'à l'école. | Avant, je ne marchais pas jusqu'à l'école. | Avant, est-ce que tu marchais jusqu'à l'école ? || I used to walk to school. | I didn't use to walk to school. | Did you use to walk to school?",
          "Avant, elle étudiait la nuit. | Avant, elle n'étudiait pas la nuit. | Avant, est-ce qu'elle étudiait la nuit ? || She used to study at night. | She didn't use to study at night. | Did she use to study at night?",
          "Avant, nous regardions la télé le soir. | Avant, nous ne regardions pas la télé le soir. | Avant, est-ce que vous regardiez la télé le soir ? || We used to watch TV in the evening. | We didn't use to watch TV in the evening. | Did you use to watch TV in the evening?",
          "Avant, ils travaillaient le dimanche. | Avant, ils ne travaillaient pas le dimanche. | Avant, est-ce qu'ils travaillaient le dimanche ? || They used to work on Sundays. | They didn't use to work on Sundays. | Did they use to work on Sundays?",
          "Avant, il écoutait de la musique dans sa chambre. | Avant, il n'écoutait pas de musique dans sa chambre. | Avant, est-ce qu'il écoutait de la musique dans sa chambre ? || He used to listen to music in his bedroom. | He didn't use to listen to music in his bedroom. | Did he use to listen to music in his bedroom?",
          "Avant, ma grand-mère cuisinait tous les jours. | Avant, ma grand-mère ne cuisinait pas tous les jours. | Avant, est-ce que ta grand-mère cuisinait tous les jours ? || My grandmother used to cook every day. | My grandmother didn't use to cook every day. | Did your grandmother use to cook every day?"
        ]
      }
    },
    {
      "id": "moves",
      "name": "Getting around",
      "icon": "🚶",
      "lvl": 2,
      "words": [
        "venir=to come",
        "partir=to leave",
        "arriver=to arrive",
        "courir=to run",
        "nager=to swim",
        "conduire=to drive",
        "tomber=to fall",
        "rester=to stay",
        "monter=to go up",
        "rentrer=to come back / to go home"
      ],
      "sentences": [],
      "oral": [
        "Elle vient chez moi. | Elle ne vient pas chez moi. | Est-ce qu'elle vient chez toi ? || She comes to my house. | She doesn't come to my house. | Does she come to your house?",
        "Je pars le matin. | Je ne pars pas le matin. | Est-ce que tu pars le matin ? || I leave in the morning. | I don't leave in the morning. | Do you leave in the morning?",
        "Nous arrivons à l'école. | Nous n'arrivons pas à l'école. | Est-ce que vous arrivez à l'école ? || We arrive at school. | We don't arrive at school. | Do you arrive at school?",
        "Il court dans le parc. | Il ne court pas dans le parc. | Est-ce qu'il court dans le parc ? || He runs in the park. | He doesn't run in the park. | Does he run in the park?",
        "Ils nagent dans la mer. | Ils ne nagent pas dans la mer. | Est-ce qu'ils nagent dans la mer ? || They swim in the sea. | They don't swim in the sea. | Do they swim in the sea?",
        "Mon père conduit une grande voiture. | Mon père ne conduit pas de grande voiture. | Est-ce que ton père conduit une grande voiture ? || My father drives a big car. | My father doesn't drive a big car. | Does your father drive a big car?",
        "Le bébé tombe beaucoup. | Le bébé ne tombe pas beaucoup. | Est-ce que le bébé tombe beaucoup ? || The baby falls a lot. | The baby doesn't fall a lot. | Does the baby fall a lot?",
        "Je reste à la maison. | Je ne reste pas à la maison. | Est-ce que tu restes à la maison ? || I stay at home. | I don't stay at home. | Do you stay at home?",
        "Elle monte dans sa chambre. | Elle ne monte pas dans sa chambre. | Est-ce qu'elle monte dans sa chambre ? || She goes up to her bedroom. | She doesn't go up to her bedroom. | Does she go up to her bedroom?",
        "Nous rentrons à la maison le soir. | Nous ne rentrons pas à la maison le soir. | Est-ce que vous rentrez à la maison le soir ? || We come back home in the evening. | We don't come back home in the evening. | Do you come back home in the evening?"
      ],
      "tenses": {
        "t1": [
          "Elle est venue chez moi hier. | Elle n'est pas venue chez moi hier. | Est-ce qu'elle est venue chez toi hier ? || She came to my house yesterday. | She didn't come to my house yesterday. | Did she come to your house yesterday?",
          "Nous sommes partis lundi. | Nous ne sommes pas partis lundi. | Est-ce que vous êtes partis lundi ? || We left on Monday. | We didn't leave on Monday. | Did you leave on Monday?",
          "Elles sont arrivées à l'école ce matin. | Elles ne sont pas arrivées à l'école ce matin. | Est-ce qu'elles sont arrivées à l'école ce matin ? || They arrived at school this morning. | They didn't arrive at school this morning. | Did they arrive at school this morning?",
          "Il a couru dans le parc. | Il n'a pas couru dans le parc. | Est-ce qu'il a couru dans le parc ? || He ran in the park. | He didn't run in the park. | Did he run in the park?",
          "Le bébé est tombé hier. | Le bébé n'est pas tombé hier. | Est-ce que le bébé est tombé hier ? || The baby fell yesterday. | The baby didn't fall yesterday. | Did the baby fall yesterday?",
          "Je suis restée à la maison dimanche. | Je ne suis pas restée à la maison dimanche. | Est-ce que tu es restée à la maison dimanche ? || I stayed at home on Sunday. | I didn't stay at home on Sunday. | Did you stay at home on Sunday?",
          "Ma sœur est montée dans sa chambre. | Ma sœur n'est pas montée dans sa chambre. | Est-ce que ta sœur est montée dans sa chambre ? || My sister went up to her bedroom. | My sister didn't go up to her bedroom. | Did your sister go up to her bedroom?",
          "Ils sont rentrés à la maison tard. | Ils ne sont pas rentrés à la maison tard. | Est-ce qu'ils sont rentrés à la maison tard ? || They came back home late. | They didn't come back home late. | Did they come back home late?"
        ],
        "t2": [
          "Je vais venir demain. | Je ne vais pas venir demain. | Est-ce que tu vas venir demain ? || I am going to come tomorrow. | I am not going to come tomorrow. | Are you going to come tomorrow?",
          "Nous allons partir vendredi. | Nous n'allons pas partir vendredi. | Est-ce que vous allez partir vendredi ? || We are going to leave on Friday. | We are not going to leave on Friday. | Are you going to leave on Friday?",
          "Ils vont arriver ce soir. | Ils ne vont pas arriver ce soir. | Est-ce qu'ils vont arriver ce soir ? || They are going to arrive tonight. | They are not going to arrive tonight. | Are they going to arrive tonight?",
          "Elle va nager dans la mer cet été. | Elle ne va pas nager dans la mer cet été. | Est-ce qu'elle va nager dans la mer cet été ? || She is going to swim in the sea this summer. | She is not going to swim in the sea this summer. | Is she going to swim in the sea this summer?",
          "Il va conduire sa nouvelle voiture. | Il ne va pas conduire sa nouvelle voiture. | Est-ce qu'il va conduire sa nouvelle voiture ? || He is going to drive his new car. | He is not going to drive his new car. | Is he going to drive his new car?",
          "Je vais rester à la maison ce week-end. | Je ne vais pas rester à la maison ce week-end. | Est-ce que tu vas rester à la maison ce week-end ? || I am going to stay at home this weekend. | I am not going to stay at home this weekend. | Are you going to stay at home this weekend?",
          "Mes parents vont rentrer à la maison dimanche. | Mes parents ne vont pas rentrer à la maison dimanche. | Est-ce que tes parents vont rentrer à la maison dimanche ? || My parents are going to come back home on Sunday. | My parents are not going to come back home on Sunday. | Are your parents going to come back home on Sunday?"
        ],
        "t3": [
          "Avant, je courais dans le parc. | Avant, je ne courais pas dans le parc. | Avant, est-ce que tu courais dans le parc ? || I used to run in the park. | I didn't use to run in the park. | Did you use to run in the park?",
          "Avant, elle nageait tous les jours. | Avant, elle ne nageait pas tous les jours. | Avant, est-ce qu'elle nageait tous les jours ? || She used to swim every day. | She didn't use to swim every day. | Did she use to swim every day?",
          "Avant, nous restions à la maison le dimanche. | Avant, nous ne restions pas à la maison le dimanche. | Avant, est-ce que vous restiez à la maison le dimanche ? || We used to stay at home on Sundays. | We didn't use to stay at home on Sundays. | Did you use to stay at home on Sundays?",
          "Avant, mon père conduisait une voiture rouge. | Avant, mon père ne conduisait pas de voiture rouge. | Avant, est-ce que ton père conduisait une voiture rouge ? || My father used to drive a red car. | My father didn't use to drive a red car. | Did your father use to drive a red car?",
          "Avant, ils venaient chez moi le samedi. | Avant, ils ne venaient pas chez moi le samedi. | Avant, est-ce qu'ils venaient chez toi le samedi ? || They used to come to my house on Saturdays. | They didn't use to come to my house on Saturdays. | Did they use to come to your house on Saturdays?",
          "Avant, il rentrait à la maison tard. | Avant, il ne rentrait pas à la maison tard. | Avant, est-ce qu'il rentrait à la maison tard ? || He used to come back home late. | He didn't use to come back home late. | Did he use to come back home late?"
        ]
      }
    },
    {
      "id": "talk",
      "name": "Talking & thinking",
      "icon": "💬",
      "lvl": 2,
      "words": [
        "dire=to say / to tell",
        "parler=to speak / to talk",
        "raconter=to tell (a story)",
        "demander=to ask",
        "répondre=to answer",
        "savoir=to know",
        "penser=to think",
        "comprendre=to understand",
        "apprendre=to learn",
        "écrire=to write"
      ],
      "sentences": [],
      "oral": [
        "Elle dit bonjour à ma mère. | Elle ne dit pas bonjour à ma mère. | Est-ce qu'elle dit bonjour à ta mère ? || She says hello to my mother. | She doesn't say hello to my mother. | Does she say hello to your mother?",
        "Je parle anglais. | Je ne parle pas anglais. | Est-ce que tu parles anglais ? || I speak English. | I don't speak English. | Do you speak English?",
        "Mon grand-père raconte une histoire. | Mon grand-père ne raconte pas d'histoire. | Est-ce que ton grand-père raconte une histoire ? || My grandfather tells a story. | My grandfather doesn't tell a story. | Does your grandfather tell a story?",
        "Il demande de l'eau. | Il ne demande pas d'eau. | Est-ce qu'il demande de l'eau ? || He asks for water. | He doesn't ask for water. | Does he ask for water?",
        "Ils répondent à ma question. | Ils ne répondent pas à ma question. | Est-ce qu'ils répondent à ta question ? || They answer my question. | They don't answer my question. | Do they answer your question?",
        "Je sais la réponse. | Je ne sais pas la réponse. | Est-ce que tu sais la réponse ? || I know the answer. | I don't know the answer. | Do you know the answer?",
        "Nous pensons à nos amis. | Nous ne pensons pas à nos amis. | Est-ce que vous pensez à vos amis ? || We think about our friends. | We don't think about our friends. | Do you think about your friends?",
        "Elle comprend le français. | Elle ne comprend pas le français. | Est-ce qu'elle comprend le français ? || She understands French. | She doesn't understand French. | Does she understand French?",
        "Mon frère apprend l'anglais. | Mon frère n'apprend pas l'anglais. | Est-ce que ton frère apprend l'anglais ? || My brother learns English. | My brother doesn't learn English. | Does your brother learn English?",
        "J'écris une lettre. | Je n'écris pas de lettre. | Est-ce que tu écris une lettre ? || I write a letter. | I don't write a letter. | Do you write a letter?"
      ],
      "tenses": {
        "t1": [
          "Elle a dit au revoir. | Elle n'a pas dit au revoir. | Est-ce qu'elle a dit au revoir ? || She said goodbye. | She didn't say goodbye. | Did she say goodbye?",
          "Il a raconté une histoire drôle. | Il n'a pas raconté d'histoire drôle. | Est-ce qu'il a raconté une histoire drôle ? || He told a funny story. | He didn't tell a funny story. | Did he tell a funny story?",
          "Nous avons demandé le chemin. | Nous n'avons pas demandé le chemin. | Est-ce que vous avez demandé le chemin ? || We asked the way. | We didn't ask the way. | Did you ask the way?",
          "Ils ont répondu à ma question. | Ils n'ont pas répondu à ma question. | Est-ce qu'ils ont répondu à ta question ? || They answered my question. | They didn't answer my question. | Did they answer your question?",
          "J'ai compris la leçon. | Je n'ai pas compris la leçon. | Est-ce que tu as compris la leçon ? || I understood the lesson. | I didn't understand the lesson. | Did you understand the lesson?",
          "Mon frère a appris un nouveau mot. | Mon frère n'a pas appris de nouveau mot. | Est-ce que ton frère a appris un nouveau mot ? || My brother learned a new word. | My brother didn't learn a new word. | Did your brother learn a new word?",
          "Elle a écrit un livre. | Elle n'a pas écrit de livre. | Est-ce qu'elle a écrit un livre ? || She wrote a book. | She didn't write a book. | Did she write a book?"
        ],
        "t2": [
          "Je vais raconter une histoire ce soir. | Je ne vais pas raconter d'histoire ce soir. | Est-ce que tu vas raconter une histoire ce soir ? || I am going to tell a story tonight. | I am not going to tell a story tonight. | Are you going to tell a story tonight?",
          "Elle va écrire à sa grand-mère. | Elle ne va pas écrire à sa grand-mère. | Est-ce qu'elle va écrire à sa grand-mère ? || She is going to write to her grandmother. | She is not going to write to her grandmother. | Is she going to write to her grandmother?",
          "Nous allons apprendre l'anglais l'année prochaine. | Nous n'allons pas apprendre l'anglais l'année prochaine. | Est-ce que vous allez apprendre l'anglais l'année prochaine ? || We are going to learn English next year. | We are not going to learn English next year. | Are you going to learn English next year?",
          "Ils vont parler aux enfants. | Ils ne vont pas parler aux enfants. | Est-ce qu'ils vont parler aux enfants ? || They are going to speak to the children. | They are not going to speak to the children. | Are they going to speak to the children?",
          "Il va répondre demain. | Il ne va pas répondre demain. | Est-ce qu'il va répondre demain ? || He is going to answer tomorrow. | He is not going to answer tomorrow. | Is he going to answer tomorrow?",
          "Je vais demander à mon père. | Je ne vais pas demander à mon père. | Est-ce que tu vas demander à ton père ? || I am going to ask my father. | I am not going to ask my father. | Are you going to ask your father?",
          "Mon ami va comprendre la leçon. | Mon ami ne va pas comprendre la leçon. | Est-ce que ton ami va comprendre la leçon ? || My friend is going to understand the lesson. | My friend is not going to understand the lesson. | Is your friend going to understand the lesson?"
        ],
        "t3": [
          "Avant, je parlais français. | Avant, je ne parlais pas français. | Avant, est-ce que tu parlais français ? || I used to speak French. | I didn't use to speak French. | Did you use to speak French?",
          "Avant, elle écrivait à son ami chaque semaine. | Avant, elle n'écrivait pas à son ami chaque semaine. | Avant, est-ce qu'elle écrivait à son ami chaque semaine ? || She used to write to her friend every week. | She didn't use to write to her friend every week. | Did she use to write to her friend every week?",
          "Il savait la réponse. | Il ne savait pas la réponse. | Est-ce qu'il savait la réponse ? || He knew the answer. | He didn't know the answer. | Did he know the answer?",
          "Nous pensions à nos vacances. | Nous ne pensions pas à nos vacances. | Est-ce que vous pensiez à vos vacances ? || We were thinking about our vacation. | We were not thinking about our vacation. | Were you thinking about your vacation?",
          "Avant, ils racontaient des histoires. | Avant, ils ne racontaient pas d'histoires. | Avant, est-ce qu'ils racontaient des histoires ? || They used to tell stories. | They didn't use to tell stories. | Did they use to tell stories?",
          "Avant, mon grand-père comprenait l'anglais. | Avant, mon grand-père ne comprenait pas l'anglais. | Avant, est-ce que ton grand-père comprenait l'anglais ? || My grandfather used to understand English. | My grandfather didn't use to understand English. | Did your grandfather use to understand English?"
        ]
      }
    },
    {
      "id": "qwords",
      "name": "Question words",
      "icon": "❔",
      "lvl": 2,
      "words": [
        "qui=who",
        "qu'est-ce que=what",
        "où=where",
        "quand=when",
        "pourquoi=why",
        "comment=how",
        "quel/quelle=which / what",
        "combien=how much / how many",
        "à quelle heure=what time / at what time",
        "d'où=where … from"
      ],
      "sentences": [],
      "oral": [
        "Elle voit mon frère. | Elle ne voit pas mon frère. | Qui est-ce qu'elle voit ? || She sees my brother. | She doesn't see my brother. | Who does she see?",
        "Il mange une pomme. | Il ne mange pas de pomme. | Qu'est-ce qu'il mange ? || He eats an apple. | He doesn't eat an apple. | What does he eat?",
        "Elle habite à Londres. | Elle n'habite pas à Londres. | Où est-ce qu'elle habite ? || She lives in London. | She doesn't live in London. | Where does she live?",
        "Ils mangent le soir. | Ils ne mangent pas le soir. | Quand est-ce qu'ils mangent ? || They eat in the evening. | They don't eat in the evening. | When do they eat?",
        "J'apprends l'anglais. | Je n'apprends pas l'anglais. | Pourquoi est-ce que tu apprends l'anglais ? || I learn English. | I don't learn English. | Why do you learn English?",
        "Nous allons à l'école en bus. | Nous n'allons pas à l'école en bus. | Comment est-ce que vous allez à l'école ? || We go to school by bus. | We don't go to school by bus. | How do you go to school?",
        "Elle lit ce livre. | Elle ne lit pas ce livre. | Quel livre est-ce qu'elle lit ? || She reads this book. | She doesn't read this book. | Which book does she read?",
        "Le gâteau coûte dix euros. | Le gâteau ne coûte pas dix euros. | Combien est-ce que le gâteau coûte ? || The cake costs ten euros. | The cake doesn't cost ten euros. | How much does the cake cost?",
        "Ils ont deux chats. | Ils n'ont pas deux chats. | Combien de chats est-ce qu'ils ont ? || They have two cats. | They don't have two cats. | How many cats do they have?",
        "Il part à huit heures. | Il ne part pas à huit heures. | À quelle heure est-ce qu'il part ? || He leaves at eight. | He doesn't leave at eight. | What time does he leave?",
        "Elle vient de Londres. | Elle ne vient pas de Londres. | D'où est-ce qu'elle vient ? || She comes from London. | She doesn't come from London. | Where does she come from?"
      ],
      "tenses": {
        "t1": [
          "Elle a vu mon frère. | Elle n'a pas vu mon frère. | Qui est-ce qu'elle a vu ? || She saw my brother. | She didn't see my brother. | Who did she see?",
          "Il a mangé une pomme. | Il n'a pas mangé de pomme. | Qu'est-ce qu'il a mangé ? || He ate an apple. | He didn't eat an apple. | What did he eat?",
          "Ils sont allés à Londres. | Ils ne sont pas allés à Londres. | Où est-ce qu'ils sont allés ? || They went to London. | They didn't go to London. | Where did they go?",
          "Elle est arrivée lundi. | Elle n'est pas arrivée lundi. | Quand est-ce qu'elle est arrivée ? || She arrived on Monday. | She didn't arrive on Monday. | When did she arrive?",
          "Je suis parti à neuf heures. | Je ne suis pas parti à neuf heures. | À quelle heure est-ce que tu es parti ? || I left at nine. | I didn't leave at nine. | What time did you leave?",
          "Le gâteau a coûté dix euros. | Le gâteau n'a pas coûté dix euros. | Combien est-ce que le gâteau a coûté ? || The cake cost ten euros. | The cake didn't cost ten euros. | How much did the cake cost?",
          "Il est venu en train. | Il n'est pas venu en train. | Comment est-ce qu'il est venu ? || He came by train. | He didn't come by train. | How did he come?"
        ],
        "t2": [
          "Elle va arriver demain. | Elle ne va pas arriver demain. | Quand est-ce qu'elle va arriver ? || She is going to arrive tomorrow. | She is not going to arrive tomorrow. | When is she going to arrive?",
          "Nous allons aller à Paris. | Nous n'allons pas aller à Paris. | Où est-ce que vous allez aller ? || We are going to go to Paris. | We are not going to go to Paris. | Where are you going to go?",
          "Ils vont manger du poulet. | Ils ne vont pas manger de poulet. | Qu'est-ce qu'ils vont manger ? || They are going to eat chicken. | They are not going to eat chicken. | What are they going to eat?",
          "Je vais voir ma grand-mère. | Je ne vais pas voir ma grand-mère. | Qui est-ce que tu vas voir ? || I am going to see my grandmother. | I am not going to see my grandmother. | Who are you going to see?",
          "Il va partir à dix heures. | Il ne va pas partir à dix heures. | À quelle heure est-ce qu'il va partir ? || He is going to leave at ten. | He is not going to leave at ten. | What time is he going to leave?",
          "Je vais étudier dimanche. | Je ne vais pas étudier dimanche. | Pourquoi est-ce que tu vas étudier dimanche ? || I am going to study on Sunday. | I am not going to study on Sunday. | Why are you going to study on Sunday?",
          "Elle va lire le livre rouge. | Elle ne va pas lire le livre rouge. | Quel livre est-ce qu'elle va lire ? || She is going to read the red book. | She is not going to read the red book. | Which book is she going to read?"
        ],
        "t3": [
          "Avant, j'habitais à Paris. | Avant, je n'habitais pas à Paris. | Avant, Où est-ce que tu habitais ? || I used to live in Paris. | I didn't use to live in Paris. | Where did you use to live?",
          "Il était triste. | Il n'était pas triste. | Pourquoi est-ce qu'il était triste ? || He was sad. | He was not sad. | Why was he sad?",
          "Avant, ils jouaient dans le parc. | Avant, ils ne jouaient pas dans le parc. | Avant, Où est-ce qu'ils jouaient ? || They used to play in the park. | They didn't use to play in the park. | Where did they use to play?",
          "Avant, elle mangeait du poisson. | Avant, elle ne mangeait pas de poisson. | Avant, Qu'est-ce qu'elle mangeait ? || She used to eat fish. | She didn't use to eat fish. | What did she use to eat?",
          "Nous avions trois chiens. | Nous n'avions pas trois chiens. | Combien de chiens est-ce que vous aviez ? || We had three dogs. | We didn't have three dogs. | How many dogs did you have?",
          "Avant, il allait à l'école à vélo. | Avant, il n'allait pas à l'école à vélo. | Avant, Comment est-ce qu'il allait à l'école ? || He used to go to school by bike. | He didn't use to go to school by bike. | How did he use to go to school?"
        ]
      }
    },
    {
      "id": "feelings",
      "name": "How I feel",
      "icon": "😴",
      "lvl": 2,
      "words": [
        "fatigué=tired",
        "avoir faim=to be hungry",
        "avoir soif=to be thirsty",
        "en colère=angry",
        "avoir peur=to be afraid",
        "malade=sick",
        "occupé=busy",
        "inquiet=worried",
        "prêt=ready",
        "en retard=late"
      ],
      "sentences": [],
      "oral": [
        "Je suis fatigué. | Je ne suis pas fatigué. | Est-ce que tu es fatigué ? || I am tired. | I am not tired. | Are you tired?",
        "Elle a faim. | Elle n'a pas faim. | Est-ce qu'elle a faim ? || She is hungry. | She is not hungry. | Is she hungry?",
        "Nous avons soif. | Nous n'avons pas soif. | Est-ce que vous avez soif ? || We are thirsty. | We are not thirsty. | Are you thirsty?",
        "Mon père est en colère. | Mon père n'est pas en colère. | Est-ce que ton père est en colère ? || My father is angry. | My father is not angry. | Is your father angry?",
        "Le bébé a peur. | Le bébé n'a pas peur. | Est-ce que le bébé a peur ? || The baby is afraid. | The baby is not afraid. | Is the baby afraid?",
        "Il est malade aujourd'hui. | Il n'est pas malade aujourd'hui. | Est-ce qu'il est malade aujourd'hui ? || He is sick today. | He is not sick today. | Is he sick today?",
        "Elles sont occupées. | Elles ne sont pas occupées. | Est-ce qu'elles sont occupées ? || They are busy. | They are not busy. | Are they busy?",
        "Ma mère est inquiète. | Ma mère n'est pas inquiète. | Est-ce que ta mère est inquiète ? || My mother is worried. | My mother is not worried. | Is your mother worried?",
        "Ils sont prêts. | Ils ne sont pas prêts. | Est-ce qu'ils sont prêts ? || They are ready. | They are not ready. | Are they ready?",
        "Le bus est en retard. | Le bus n'est pas en retard. | Est-ce que le bus est en retard ? || The bus is late. | The bus is not late. | Is the bus late?"
      ],
      "tenses": {
        "t1": [
          "Elle a eu peur hier soir. | Elle n'a pas eu peur hier soir. | Est-ce qu'elle a eu peur hier soir ? || She was afraid last night. | She was not afraid last night. | Was she afraid last night?",
          "Il a été malade la semaine dernière. | Il n'a pas été malade la semaine dernière. | Est-ce qu'il a été malade la semaine dernière ? || He was sick last week. | He was not sick last week. | Was he sick last week?",
          "Nous sommes arrivés en retard. | Nous ne sommes pas arrivés en retard. | Est-ce que vous êtes arrivés en retard ? || We arrived late. | We didn't arrive late. | Did you arrive late?",
          "Mon frère est tombé malade lundi. | Mon frère n'est pas tombé malade lundi. | Est-ce que ton frère est tombé malade lundi ? || My brother got sick on Monday. | My brother didn't get sick on Monday. | Did your brother get sick on Monday?",
          "Ils ont eu faim ce matin. | Ils n'ont pas eu faim ce matin. | Est-ce qu'ils ont eu faim ce matin ? || They were hungry this morning. | They were not hungry this morning. | Were they hungry this morning?",
          "Elle est partie en retard. | Elle n'est pas partie en retard. | Est-ce qu'elle est partie en retard ? || She left late. | She didn't leave late. | Did she leave late?"
        ],
        "t2": [
          "Je vais être prêt à neuf heures. | Je ne vais pas être prêt à neuf heures. | Est-ce que tu vas être prêt à neuf heures ? || I am going to be ready at nine. | I am not going to be ready at nine. | Are you going to be ready at nine?",
          "Elle va avoir faim ce soir. | Elle ne va pas avoir faim ce soir. | Est-ce qu'elle va avoir faim ce soir ? || She is going to be hungry tonight. | She is not going to be hungry tonight. | Is she going to be hungry tonight?",
          "Nous allons être en retard. | Nous n'allons pas être en retard. | Est-ce que vous allez être en retard ? || We are going to be late. | We are not going to be late. | Are you going to be late?",
          "Ils vont être fatigués demain. | Ils ne vont pas être fatigués demain. | Est-ce qu'ils vont être fatigués demain ? || They are going to be tired tomorrow. | They are not going to be tired tomorrow. | Are they going to be tired tomorrow?",
          "Mon père va être occupé lundi. | Mon père ne va pas être occupé lundi. | Est-ce que ton père va être occupé lundi ? || My father is going to be busy on Monday. | My father is not going to be busy on Monday. | Is your father going to be busy on Monday?",
          "Il va avoir soif après le match. | Il ne va pas avoir soif après le match. | Est-ce qu'il va avoir soif après le match ? || He is going to be thirsty after the game. | He is not going to be thirsty after the game. | Is he going to be thirsty after the game?",
          "Ma mère va être inquiète. | Ma mère ne va pas être inquiète. | Est-ce que ta mère va être inquiète ? || My mother is going to be worried. | My mother is not going to be worried. | Is your mother going to be worried?"
        ],
        "t3": [
          "J'avais peur des chiens. | Je n'avais pas peur des chiens. | Est-ce que tu avais peur des chiens ? || I was afraid of dogs. | I was not afraid of dogs. | Were you afraid of dogs?",
          "Elle était souvent malade. | Elle n'était pas souvent malade. | Est-ce qu'elle était souvent malade ? || She was often sick. | She was not often sick. | Was she often sick?",
          "Nous étions fatigués le soir. | Nous n'étions pas fatigués le soir. | Est-ce que vous étiez fatigués le soir ? || We were tired in the evening. | We were not tired in the evening. | Were you tired in the evening?",
          "Ils étaient en colère. | Ils n'étaient pas en colère. | Est-ce qu'ils étaient en colère ? || They were angry. | They were not angry. | Were they angry?",
          "Il était toujours en retard. | Il n'était pas toujours en retard. | Est-ce qu'il était toujours en retard ? || He was always late. | He was not always late. | Was he always late?",
          "Ma grand-mère était inquiète. | Ma grand-mère n'était pas inquiète. | Est-ce que ta grand-mère était inquiète ? || My grandmother was worried. | My grandmother was not worried. | Was your grandmother worried?",
          "Les enfants avaient faim. | Les enfants n'avaient pas faim. | Est-ce que les enfants avaient faim ? || The children were hungry. | The children were not hungry. | Were the children hungry?"
        ]
      }
    },
    {
      "id": "weather",
      "name": "Weather & seasons",
      "icon": "☀️",
      "lvl": 2,
      "words": [
        "le temps=the weather",
        "le soleil=the sun",
        "la pluie=the rain",
        "la neige=the snow",
        "le vent=the wind",
        "un nuage=a cloud",
        "le printemps=spring",
        "l'été=summer",
        "l'automne=fall / autumn",
        "l'hiver=winter"
      ],
      "sentences": [],
      "oral": [
        "Le temps est beau aujourd'hui. | Le temps n'est pas beau aujourd'hui. | Est-ce que le temps est beau aujourd'hui ? || The weather is nice today. | The weather is not nice today. | Is the weather nice today?",
        "Le soleil est chaud. | Le soleil n'est pas chaud. | Est-ce que le soleil est chaud ? || The sun is hot. | The sun is not hot. | Is the sun hot?",
        "J'aime la pluie. | Je n'aime pas la pluie. | Est-ce que tu aimes la pluie ? || I like the rain. | I don't like the rain. | Do you like the rain?",
        "Les enfants jouent dans la neige. | Les enfants ne jouent pas dans la neige. | Est-ce que les enfants jouent dans la neige ? || The children play in the snow. | The children don't play in the snow. | Do the children play in the snow?",
        "Le vent est froid. | Le vent n'est pas froid. | Est-ce que le vent est froid ? || The wind is cold. | The wind is not cold. | Is the wind cold?",
        "Je vois un gros nuage. | Je ne vois pas de gros nuage. | Est-ce que tu vois un gros nuage ? || I see a big cloud. | I don't see a big cloud. | Do you see a big cloud?",
        "Les fleurs sont jaunes au printemps. | Les fleurs ne sont pas jaunes au printemps. | Est-ce que les fleurs sont jaunes au printemps ? || The flowers are yellow in spring. | The flowers are not yellow in spring. | Are the flowers yellow in spring?",
        "Nous nageons dans la mer en été. | Nous ne nageons pas dans la mer en été. | Est-ce que vous nagez dans la mer en été ? || We swim in the sea in summer. | We don't swim in the sea in summer. | Do you swim in the sea in summer?",
        "Elle adore l'automne. | Elle n'adore pas l'automne. | Est-ce qu'elle adore l'automne ? || She loves fall. | She doesn't love fall. | Does she love fall?",
        "Il fait froid en hiver. | Il ne fait pas froid en hiver. | Est-ce qu'il fait froid en hiver ? || It is cold in winter. | It is not cold in winter. | Is it cold in winter?"
      ],
      "tenses": {
        "t1": [
          "Il a plu hier. | Il n'a pas plu hier. | Est-ce qu'il a plu hier ? || It rained yesterday. | It didn't rain yesterday. | Did it rain yesterday?",
          "Il a neigé l'hiver dernier. | Il n'a pas neigé l'hiver dernier. | Est-ce qu'il a neigé l'hiver dernier ? || It snowed last winter. | It didn't snow last winter. | Did it snow last winter?",
          "Le vent a soufflé toute la nuit. | Le vent n'a pas soufflé toute la nuit. | Est-ce que le vent a soufflé toute la nuit ? || The wind blew all night. | The wind didn't blow all night. | Did the wind blow all night?",
          "Nous avons nagé dans la mer l'été dernier. | Nous n'avons pas nagé dans la mer l'été dernier. | Est-ce que vous avez nagé dans la mer l'été dernier ? || We swam in the sea last summer. | We didn't swim in the sea last summer. | Did you swim in the sea last summer?",
          "Ils sont allés en Espagne au printemps. | Ils ne sont pas allés en Espagne au printemps. | Est-ce qu'ils sont allés en Espagne au printemps ? || They went to Spain in the spring. | They didn't go to Spain in the spring. | Did they go to Spain in the spring?",
          "Il a fait froid hier. | Il n'a pas fait froid hier. | Est-ce qu'il a fait froid hier ? || It was cold yesterday. | It was not cold yesterday. | Was it cold yesterday?"
        ],
        "t2": [
          "Il va pleuvoir demain. | Il ne va pas pleuvoir demain. | Est-ce qu'il va pleuvoir demain ? || It is going to rain tomorrow. | It is not going to rain tomorrow. | Is it going to rain tomorrow?",
          "Il va neiger cet hiver. | Il ne va pas neiger cet hiver. | Est-ce qu'il va neiger cet hiver ? || It is going to snow this winter. | It is not going to snow this winter. | Is it going to snow this winter?",
          "Le soleil va briller cet après-midi. | Le soleil ne va pas briller cet après-midi. | Est-ce que le soleil va briller cet après-midi ? || The sun is going to shine this afternoon. | The sun is not going to shine this afternoon. | Is the sun going to shine this afternoon?",
          "Nous allons aller à la plage cet été. | Nous n'allons pas aller à la plage cet été. | Est-ce que vous allez aller à la plage cet été ? || We are going to go to the beach this summer. | We are not going to go to the beach this summer. | Are you going to go to the beach this summer?",
          "Il va faire chaud demain. | Il ne va pas faire chaud demain. | Est-ce qu'il va faire chaud demain ? || It is going to be hot tomorrow. | It is not going to be hot tomorrow. | Is it going to be hot tomorrow?",
          "Le temps va être beau dimanche. | Le temps ne va pas être beau dimanche. | Est-ce que le temps va être beau dimanche ? || The weather is going to be nice on Sunday. | The weather is not going to be nice on Sunday. | Is the weather going to be nice on Sunday?"
        ],
        "t3": [
          "Avant, il neigeait beaucoup en hiver. | Avant, il ne neigeait pas beaucoup en hiver. | Avant, est-ce qu'il neigeait beaucoup en hiver ? || It used to snow a lot in winter. | It didn't use to snow a lot in winter. | Did it use to snow a lot in winter?",
          "Il pleuvait hier soir. | Il ne pleuvait pas hier soir. | Est-ce qu'il pleuvait hier soir ? || It was raining last night. | It was not raining last night. | Was it raining last night?",
          "Il faisait froid ce matin. | Il ne faisait pas froid ce matin. | Est-ce qu'il faisait froid ce matin ? || It was cold this morning. | It was not cold this morning. | Was it cold this morning?",
          "Le soleil brillait toute la journée. | Le soleil ne brillait pas toute la journée. | Est-ce que le soleil brillait toute la journée ? || The sun was shining all day. | The sun was not shining all day. | Was the sun shining all day?",
          "Avant, nous nagions dans la mer en été. | Avant, nous ne nagions pas dans la mer en été. | Avant, est-ce que vous nagiez dans la mer en été ? || We used to swim in the sea in summer. | We didn't use to swim in the sea in summer. | Did you use to swim in the sea in summer?",
          "Le vent soufflait fort. | Le vent ne soufflait pas fort. | Est-ce que le vent soufflait fort ? || The wind was blowing hard. | The wind was not blowing hard. | Was the wind blowing hard?",
          "Le temps était beau. | Le temps n'était pas beau. | Est-ce que le temps était beau ? || The weather was nice. | The weather was not nice. | Was the weather nice?"
        ]
      }
    },
    {
      "id": "city",
      "name": "In town",
      "icon": "🏙️",
      "lvl": 2,
      "words": [
        "une ville=a city / a town",
        "une rue=a street",
        "un magasin=a store / a shop",
        "une école=a school",
        "un parc=a park",
        "une gare=a train station",
        "un hôpital=a hospital",
        "une banque=a bank",
        "un restaurant=a restaurant",
        "un marché=a market"
      ],
      "sentences": [],
      "oral": [
        "J'habite dans une grande ville. | Je n'habite pas dans une grande ville. | Est-ce que tu habites dans une grande ville ? || I live in a big city. | I don't live in a big city. | Do you live in a big city?",
        "Ma maison est dans cette rue. | Ma maison n'est pas dans cette rue. | Est-ce que ta maison est dans cette rue ? || My house is in this street. | My house is not in this street. | Is your house in this street?",
        "Elle va au magasin. | Elle ne va pas au magasin. | Est-ce qu'elle va au magasin ? || She goes to the store. | She doesn't go to the store. | Does she go to the store?",
        "Les enfants vont à l'école. | Les enfants ne vont pas à l'école. | Est-ce que les enfants vont à l'école ? || The children go to school. | The children don't go to school. | Do the children go to school?",
        "Nous jouons dans le parc. | Nous ne jouons pas dans le parc. | Est-ce que vous jouez dans le parc ? || We play in the park. | We don't play in the park. | Do you play in the park?",
        "La gare est près d'ici. | La gare n'est pas près d'ici. | Est-ce que la gare est près d'ici ? || The station is near here. | The station is not near here. | Is the station near here?",
        "Ma mère travaille à l'hôpital. | Ma mère ne travaille pas à l'hôpital. | Est-ce que ta mère travaille à l'hôpital ? || My mother works at the hospital. | My mother doesn't work at the hospital. | Does your mother work at the hospital?",
        "La banque est fermée aujourd'hui. | La banque n'est pas fermée aujourd'hui. | Est-ce que la banque est fermée aujourd'hui ? || The bank is closed today. | The bank is not closed today. | Is the bank closed today?",
        "Ils mangent au restaurant. | Ils ne mangent pas au restaurant. | Est-ce qu'ils mangent au restaurant ? || They eat at the restaurant. | They don't eat at the restaurant. | Do they eat at the restaurant?",
        "Il achète du poisson au marché. | Il n'achète pas de poisson au marché. | Est-ce qu'il achète du poisson au marché ? || He buys fish at the market. | He doesn't buy fish at the market. | Does he buy fish at the market?"
      ],
      "tenses": {
        "t1": [
          "Je suis allé à l'hôpital hier. | Je ne suis pas allé à l'hôpital hier. | Est-ce que tu es allé à l'hôpital hier ? || I went to the hospital yesterday. | I didn't go to the hospital yesterday. | Did you go to the hospital yesterday?",
          "Elle a acheté un manteau au magasin. | Elle n'a pas acheté de manteau au magasin. | Est-ce qu'elle a acheté un manteau au magasin ? || She bought a coat at the store. | She didn't buy a coat at the store. | Did she buy a coat at the store?",
          "Nous avons mangé dans un bon restaurant. | Nous n'avons pas mangé dans un bon restaurant. | Est-ce que vous avez mangé dans un bon restaurant ? || We ate at a good restaurant. | We didn't eat at a good restaurant. | Did you eat at a good restaurant?",
          "Ils sont arrivés à la gare. | Ils ne sont pas arrivés à la gare. | Est-ce qu'ils sont arrivés à la gare ? || They arrived at the station. | They didn't arrive at the station. | Did they arrive at the station?",
          "Il a marché dans le parc. | Il n'a pas marché dans le parc. | Est-ce qu'il a marché dans le parc ? || He walked in the park. | He didn't walk in the park. | Did he walk in the park?",
          "Ma grand-mère a visité la ville. | Ma grand-mère n'a pas visité la ville. | Est-ce que ta grand-mère a visité la ville ? || My grandmother visited the city. | My grandmother didn't visit the city. | Did your grandmother visit the city?"
        ],
        "t2": [
          "Je vais aller à la banque demain. | Je ne vais pas aller à la banque demain. | Est-ce que tu vas aller à la banque demain ? || I am going to go to the bank tomorrow. | I am not going to go to the bank tomorrow. | Are you going to go to the bank tomorrow?",
          "Elle va visiter la vieille ville. | Elle ne va pas visiter la vieille ville. | Est-ce qu'elle va visiter la vieille ville ? || She is going to visit the old town. | She is not going to visit the old town. | Is she going to visit the old town?",
          "Nous allons attendre à la gare. | Nous n'allons pas attendre à la gare. | Est-ce que vous allez attendre à la gare ? || We are going to wait at the station. | We are not going to wait at the station. | Are you going to wait at the station?",
          "Ils vont manger au restaurant ce soir. | Ils ne vont pas manger au restaurant ce soir. | Est-ce qu'ils vont manger au restaurant ce soir ? || They are going to eat at the restaurant tonight. | They are not going to eat at the restaurant tonight. | Are they going to eat at the restaurant tonight?",
          "Les enfants vont marcher jusqu'au parc. | Les enfants ne vont pas marcher jusqu'au parc. | Est-ce que les enfants vont marcher jusqu'au parc ? || The children are going to walk to the park. | The children are not going to walk to the park. | Are the children going to walk to the park?",
          "Ma mère va acheter des fruits au marché. | Ma mère ne va pas acheter de fruits au marché. | Est-ce que ta mère va acheter des fruits au marché ? || My mother is going to buy fruit at the market. | My mother is not going to buy fruit at the market. | Is your mother going to buy fruit at the market?"
        ],
        "t3": [
          "Avant, j'habitais dans une petite ville. | Avant, je n'habitais pas dans une petite ville. | Avant, est-ce que tu habitais dans une petite ville ? || I used to live in a small town. | I didn't use to live in a small town. | Did you use to live in a small town?",
          "Avant, elle travaillait à la banque. | Avant, elle ne travaillait pas à la banque. | Avant, est-ce qu'elle travaillait à la banque ? || She used to work at the bank. | She didn't use to work at the bank. | Did she use to work at the bank?",
          "Avant, nous jouions dans cette rue. | Avant, nous ne jouions pas dans cette rue. | Avant, est-ce que vous jouiez dans cette rue ? || We used to play in this street. | We didn't use to play in this street. | Did you use to play in this street?",
          "Avant, ils allaient au marché le samedi. | Avant, ils n'allaient pas au marché le samedi. | Avant, est-ce qu'ils allaient au marché le samedi ? || They used to go to the market on Saturdays. | They didn't use to go to the market on Saturdays. | Did they use to go to the market on Saturdays?",
          "L'école était petite. | L'école n'était pas petite. | Est-ce que l'école était petite ? || The school was small. | The school was not small. | Was the school small?",
          "L'hôpital était près de la gare. | L'hôpital n'était pas près de la gare. | Est-ce que l'hôpital était près de la gare ? || The hospital was near the station. | The hospital was not near the station. | Was the hospital near the station?"
        ]
      }
    },
    {
      "id": "transport",
      "name": "Getting around town and away",
      "icon": "🚌",
      "lvl": 2,
      "words": [
        "une voiture=a car",
        "un bus=a bus",
        "un train=a train",
        "un avion=a plane",
        "un vélo=a bike",
        "un bateau=a boat",
        "un billet=a ticket",
        "une route=a road",
        "un voyage=a trip",
        "une valise=a suitcase"
      ],
      "sentences": [],
      "oral": [
        "Mon père conduit une voiture rouge. | Mon père ne conduit pas de voiture rouge. | Est-ce que ton père conduit une voiture rouge ? || My father drives a red car. | My father doesn't drive a red car. | Does your father drive a red car?",
        "Je vais à l'école en bus. | Je ne vais pas à l'école en bus. | Est-ce que tu vas à l'école en bus ? || I go to school by bus. | I don't go to school by bus. | Do you go to school by bus?",
        "Le train est en retard. | Le train n'est pas en retard. | Est-ce que le train est en retard ? || The train is late. | The train is not late. | Is the train late?",
        "Elle prend l'avion. | Elle ne prend pas l'avion. | Est-ce qu'elle prend l'avion ? || She takes the plane. | She doesn't take the plane. | Does she take the plane?",
        "Nous allons au parc à vélo. | Nous n'allons pas au parc à vélo. | Est-ce que vous allez au parc à vélo ? || We go to the park by bike. | We don't go to the park by bike. | Do you go to the park by bike?",
        "Le bateau est grand. | Le bateau n'est pas grand. | Est-ce que le bateau est grand ? || The boat is big. | The boat is not big. | Is the boat big?",
        "J'ai un billet. | Je n'ai pas de billet. | Est-ce que tu as un billet ? || I have a ticket. | I don't have a ticket. | Do you have a ticket?",
        "La route est longue. | La route n'est pas longue. | Est-ce que la route est longue ? || The road is long. | The road is not long. | Is the road long?",
        "Ils adorent les longs voyages. | Ils n'adorent pas les longs voyages. | Est-ce qu'ils adorent les longs voyages ? || They love long trips. | They don't love long trips. | Do they love long trips?",
        "Elle a une grande valise. | Elle n'a pas de grande valise. | Est-ce qu'elle a une grande valise ? || She has a big suitcase. | She doesn't have a big suitcase. | Does she have a big suitcase?"
      ],
      "tenses": {
        "t1": [
          "J'ai pris le train hier. | Je n'ai pas pris le train hier. | Est-ce que tu as pris le train hier ? || I took the train yesterday. | I didn't take the train yesterday. | Did you take the train yesterday?",
          "Elle est allée à Londres en avion. | Elle n'est pas allée à Londres en avion. | Est-ce qu'elle est allée à Londres en avion ? || She went to London by plane. | She didn't go to London by plane. | Did she go to London by plane?",
          "Nous avons acheté deux billets. | Nous n'avons pas acheté deux billets. | Est-ce que vous avez acheté deux billets ? || We bought two tickets. | We didn't buy two tickets. | Did you buy two tickets?",
          "Ils sont venus en bateau. | Ils ne sont pas venus en bateau. | Est-ce qu'ils sont venus en bateau ? || They came by boat. | They didn't come by boat. | Did they come by boat?",
          "Il a fait du vélo dans le parc. | Il n'a pas fait de vélo dans le parc. | Est-ce qu'il a fait du vélo dans le parc ? || He rode his bike in the park. | He didn't ride his bike in the park. | Did he ride his bike in the park?",
          "Mon père a conduit toute la nuit. | Mon père n'a pas conduit toute la nuit. | Est-ce que ton père a conduit toute la nuit ? || My father drove all night. | My father didn't drive all night. | Did your father drive all night?",
          "J'ai oublié ma valise. | Je n'ai pas oublié ma valise. | Est-ce que tu as oublié ta valise ? || I forgot my suitcase. | I didn't forget my suitcase. | Did you forget your suitcase?"
        ],
        "t2": [
          "Nous allons prendre l'avion demain. | Nous n'allons pas prendre l'avion demain. | Est-ce que vous allez prendre l'avion demain ? || We are going to take the plane tomorrow. | We are not going to take the plane tomorrow. | Are you going to take the plane tomorrow?",
          "Je vais acheter un nouveau vélo. | Je ne vais pas acheter de nouveau vélo. | Est-ce que tu vas acheter un nouveau vélo ? || I am going to buy a new bike. | I am not going to buy a new bike. | Are you going to buy a new bike?",
          "Elle va conduire sur cette route. | Elle ne va pas conduire sur cette route. | Est-ce qu'elle va conduire sur cette route ? || She is going to drive on this road. | She is not going to drive on this road. | Is she going to drive on this road?",
          "Ils vont aller en voyage cet été. | Ils ne vont pas aller en voyage cet été. | Est-ce qu'ils vont aller en voyage cet été ? || They are going to go on a trip this summer. | They are not going to go on a trip this summer. | Are they going to go on a trip this summer?",
          "Le bus va arriver à huit heures. | Le bus ne va pas arriver à huit heures. | Est-ce que le bus va arriver à huit heures ? || The bus is going to arrive at eight. | The bus is not going to arrive at eight. | Is the bus going to arrive at eight?",
          "Il va prendre le bateau samedi. | Il ne va pas prendre le bateau samedi. | Est-ce qu'il va prendre le bateau samedi ? || He is going to take the boat on Saturday. | He is not going to take the boat on Saturday. | Is he going to take the boat on Saturday?",
          "Ma mère va préparer sa valise ce soir. | Ma mère ne va pas préparer sa valise ce soir. | Est-ce que ta mère va préparer sa valise ce soir ? || My mother is going to pack her suitcase tonight. | My mother is not going to pack her suitcase tonight. | Is your mother going to pack her suitcase tonight?"
        ],
        "t3": [
          "Avant, j'allais à l'école à vélo. | Avant, je n'allais pas à l'école à vélo. | Avant, est-ce que tu allais à l'école à vélo ? || I used to go to school by bike. | I didn't use to go to school by bike. | Did you use to go to school by bike?",
          "Mon grand-père avait une vieille voiture. | Mon grand-père n'avait pas de vieille voiture. | Est-ce que ton grand-père avait une vieille voiture ? || My grandfather had an old car. | My grandfather didn't have an old car. | Did your grandfather have an old car?",
          "Avant, nous prenions le train chaque semaine. | Avant, nous ne prenions pas le train chaque semaine. | Avant, est-ce que vous preniez le train chaque semaine ? || We used to take the train every week. | We didn't use to take the train every week. | Did you use to take the train every week?",
          "Avant, ils allaient en voyage chaque été. | Avant, ils n'allaient pas en voyage chaque été. | Avant, est-ce qu'ils allaient en voyage chaque été ? || They used to go on a trip every summer. | They didn't use to go on a trip every summer. | Did they use to go on a trip every summer?",
          "La route était petite. | La route n'était pas petite. | Est-ce que la route était petite ? || The road was small. | The road was not small. | Was the road small?",
          "Le bus était toujours en retard. | Le bus n'était pas toujours en retard. | Est-ce que le bus était toujours en retard ? || The bus was always late. | The bus was not always late. | Was the bus always late?"
        ]
      }
    },
    {
      "id": "hobbies",
      "name": "Free time",
      "icon": "⚽",
      "lvl": 2,
      "words": [
        "le sport=sports / sport",
        "le football=soccer",
        "la musique=music",
        "un jeu=a game",
        "un film=a movie",
        "un livre=a book",
        "une chanson=a song",
        "danser=to dance",
        "les vacances=vacation / the holidays",
        "une plage=a beach"
      ],
      "sentences": [],
      "oral": [
        "Je fais du sport tous les jours. | Je ne fais pas de sport tous les jours. | Est-ce que tu fais du sport tous les jours ? || I do sports every day. | I don't do sports every day. | Do you do sports every day?",
        "Il joue au football le samedi. | Il ne joue pas au football le samedi. | Est-ce qu'il joue au football le samedi ? || He plays soccer on Saturdays. | He doesn't play soccer on Saturdays. | Does he play soccer on Saturdays?",
        "Elle écoute de la musique. | Elle n'écoute pas de musique. | Est-ce qu'elle écoute de la musique ? || She listens to music. | She doesn't listen to music. | Does she listen to music?",
        "Nous jouons à un jeu. | Nous ne jouons pas à un jeu. | Est-ce que vous jouez à un jeu ? || We play a game. | We don't play a game. | Do you play a game?",
        "Ils regardent un film. | Ils ne regardent pas de film. | Est-ce qu'ils regardent un film ? || They watch a movie. | They don't watch a movie. | Do they watch a movie?",
        "Je lis un bon livre. | Je ne lis pas de bon livre. | Est-ce que tu lis un bon livre ? || I read a good book. | I don't read a good book. | Do you read a good book?",
        "Ma sœur chante une chanson. | Ma sœur ne chante pas de chanson. | Est-ce que ta sœur chante une chanson ? || My sister sings a song. | My sister doesn't sing a song. | Does your sister sing a song?",
        "Elle danse très bien. | Elle ne danse pas très bien. | Est-ce qu'elle danse très bien ? || She dances very well. | She doesn't dance very well. | Does she dance very well?",
        "Nous sommes en vacances. | Nous ne sommes pas en vacances. | Est-ce que vous êtes en vacances ? || We are on vacation. | We are not on vacation. | Are you on vacation?",
        "Les enfants jouent sur la plage. | Les enfants ne jouent pas sur la plage. | Est-ce que les enfants jouent sur la plage ? || The children play on the beach. | The children don't play on the beach. | Do the children play on the beach?"
      ],
      "tenses": {
        "t1": [
          "J'ai regardé un bon film hier soir. | Je n'ai pas regardé de bon film hier soir. | Est-ce que tu as regardé un bon film hier soir ? || I watched a good movie last night. | I didn't watch a good movie last night. | Did you watch a good movie last night?",
          "Elle a chanté une chanson. | Elle n'a pas chanté de chanson. | Est-ce qu'elle a chanté une chanson ? || She sang a song. | She didn't sing a song. | Did she sing a song?",
          "Nous avons gagné le match. | Nous n'avons pas gagné le match. | Est-ce que vous avez gagné le match ? || We won the game. | We didn't win the game. | Did you win the game?",
          "Ils ont dansé toute la nuit. | Ils n'ont pas dansé toute la nuit. | Est-ce qu'ils ont dansé toute la nuit ? || They danced all night. | They didn't dance all night. | Did they dance all night?",
          "Il a lu ce livre en vacances. | Il n'a pas lu ce livre en vacances. | Est-ce qu'il a lu ce livre en vacances ? || He read this book on vacation. | He didn't read this book on vacation. | Did he read this book on vacation?",
          "Mon frère a joué au football hier. | Mon frère n'a pas joué au football hier. | Est-ce que ton frère a joué au football hier ? || My brother played soccer yesterday. | My brother didn't play soccer yesterday. | Did your brother play soccer yesterday?",
          "Nous sommes allés à la plage. | Nous ne sommes pas allés à la plage. | Est-ce que vous êtes allés à la plage ? || We went to the beach. | We didn't go to the beach. | Did you go to the beach?"
        ],
        "t2": [
          "Je vais jouer au football dimanche. | Je ne vais pas jouer au football dimanche. | Est-ce que tu vas jouer au football dimanche ? || I am going to play soccer on Sunday. | I am not going to play soccer on Sunday. | Are you going to play soccer on Sunday?",
          "Elle va faire du sport demain. | Elle ne va pas faire de sport demain. | Est-ce qu'elle va faire du sport demain ? || She is going to do sports tomorrow. | She is not going to do sports tomorrow. | Is she going to do sports tomorrow?",
          "Nous allons aller à la plage cet après-midi. | Nous n'allons pas aller à la plage cet après-midi. | Est-ce que vous allez aller à la plage cet après-midi ? || We are going to go to the beach this afternoon. | We are not going to go to the beach this afternoon. | Are you going to go to the beach this afternoon?",
          "Ils vont regarder un film ce soir. | Ils ne vont pas regarder de film ce soir. | Est-ce qu'ils vont regarder un film ce soir ? || They are going to watch a movie tonight. | They are not going to watch a movie tonight. | Are they going to watch a movie tonight?",
          "Il va écouter de la musique. | Il ne va pas écouter de musique. | Est-ce qu'il va écouter de la musique ? || He is going to listen to music. | He is not going to listen to music. | Is he going to listen to music?",
          "Ma sœur va danser à la fête. | Ma sœur ne va pas danser à la fête. | Est-ce que ta sœur va danser à la fête ? || My sister is going to dance at the party. | My sister is not going to dance at the party. | Is your sister going to dance at the party?",
          "Nous allons partir en vacances la semaine prochaine. | Nous n'allons pas partir en vacances la semaine prochaine. | Est-ce que vous allez partir en vacances la semaine prochaine ? || We are going to go on vacation next week. | We are not going to go on vacation next week. | Are you going to go on vacation next week?"
        ],
        "t3": [
          "Avant, je jouais au football tous les samedis. | Avant, je ne jouais pas au football tous les samedis. | Avant, est-ce que tu jouais au football tous les samedis ? || I used to play soccer every Saturday. | I didn't use to play soccer every Saturday. | Did you use to play soccer every Saturday?",
          "Avant, elle chantait le soir. | Avant, elle ne chantait pas le soir. | Avant, est-ce qu'elle chantait le soir ? || She used to sing in the evening. | She didn't use to sing in the evening. | Did she use to sing in the evening?",
          "Avant, nous allions à la plage en été. | Avant, nous n'allions pas à la plage en été. | Avant, est-ce que vous alliez à la plage en été ? || We used to go to the beach in summer. | We didn't use to go to the beach in summer. | Did you use to go to the beach in summer?",
          "Avant, ils lisaient beaucoup de livres. | Avant, ils ne lisaient pas beaucoup de livres. | Avant, est-ce qu'ils lisaient beaucoup de livres ? || They used to read a lot of books. | They didn't use to read a lot of books. | Did they use to read a lot of books?",
          "Avant, il dansait très bien. | Avant, il ne dansait pas très bien. | Avant, est-ce qu'il dansait très bien ? || He used to dance very well. | He didn't use to dance very well. | Did he use to dance very well?",
          "Le jeu était facile. | Le jeu n'était pas facile. | Est-ce que le jeu était facile ? || The game was easy. | The game was not easy. | Was the game easy?"
        ]
      }
    },
  );
})();
