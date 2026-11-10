// =====================================================================
//  PARCOURS « ANGLAIS » — pour un francophone (interface en français)
//  Mots : "anglais=français"   (variantes acceptées séparées par "/")
//  Phrases : "EN aff | EN nég | EN question || FR aff | FR nég | FR question"
// =====================================================================
var COURSES = window.COURSES || (window.COURSES = {});

COURSES.en = {
  id: "en", target: "en", ui: "fr", flag: "🇬🇧",
  tagline: "l'anglais brique par brique",
  bricks: [
    {
      id: "basics", name: "Premiers mots", icon: "👋",
      words: ["hello=bonjour", "goodbye/bye=au revoir", "yes=oui", "no=non", "please=s'il te plaît",
        "thank you/thanks=merci", "sorry=désolé", "friend=ami", "man=homme", "woman=femme"],
      sentences: [
        "He is my friend. | He is not my friend. | Is he my friend? || Il est mon ami. | Il n'est pas mon ami. | Est-ce qu'il est mon ami ?",
        "The woman is my friend. | The woman is not my friend. | Is the woman your friend? || La femme est mon amie. | La femme n'est pas mon amie. | Est-ce que la femme est ton amie ?",
        "I am sorry. | I am not sorry. | Are you sorry? || Je suis désolé. | Je ne suis pas désolé. | Es-tu désolé ?",
        "The man says hello. | The man doesn't say hello. | Does the man say hello? || L'homme dit bonjour. | L'homme ne dit pas bonjour. | Est-ce que l'homme dit bonjour ?",
        "You say thank you. | You don't say thank you. | Do you say thank you? || Tu dis merci. | Tu ne dis pas merci. | Est-ce que tu dis merci ?",
        "She says goodbye. | She doesn't say goodbye. | Does she say goodbye? || Elle dit au revoir. | Elle ne dit pas au revoir. | Est-ce qu'elle dit au revoir ?",
      ],
    },
    {
      id: "pronouns", name: "Pronoms & être", icon: "🧍",
      words: ["I=je", "you=tu / vous", "he=il", "she=elle", "it=il / elle (chose)", "we=nous", "they=ils / elles",
        "am=(je) suis", "is=(il / elle) est", "are=(nous) sommes / (ils) sont"],
      sentences: [
        "We are friends. | We are not friends. | Are we friends? || Nous sommes amis. | Nous ne sommes pas amis. | Sommes-nous amis ?",
        "She is my friend. | She is not my friend. | Is she your friend? || Elle est mon amie. | Elle n'est pas mon amie. | Est-elle ton amie ?",
        "They are here. | They are not here. | Are they here? || Ils sont ici. | Ils ne sont pas ici. | Sont-ils ici ?",
        "You are my friend. | You are not my friend. | Are you my friend? || Tu es mon ami. | Tu n'es pas mon ami. | Es-tu mon ami ?",
        "I am your friend. | I am not your friend. | Am I your friend? || Je suis ton ami. | Je ne suis pas ton ami. | Suis-je ton ami ?",
        "It is here. | It is not here. | Is it here? || C'est ici. | Ce n'est pas ici. | Est-ce que c'est ici ?",
      ],
    },
    {
      id: "colors", name: "Couleurs", icon: "🎨",
      words: ["red=rouge", "blue=bleu", "green=vert", "yellow=jaune", "black=noir", "white=blanc",
        "orange=orange", "pink=rose", "brown=marron", "grey/gray=gris"],
      sentences: [
        "The sky is blue. | The sky is not blue. | Is the sky blue? || Le ciel est bleu. | Le ciel n'est pas bleu. | Est-ce que le ciel est bleu ?",
        "The car is red. | The car is not red. | Is the car red? || La voiture est rouge. | La voiture n'est pas rouge. | Est-ce que la voiture est rouge ?",
        "My bag is black. | My bag is not black. | Is your bag black? || Mon sac est noir. | Mon sac n'est pas noir. | Est-ce que ton sac est noir ?",
        "The flowers are pink. | The flowers are not pink. | Are the flowers pink? || Les fleurs sont roses. | Les fleurs ne sont pas roses. | Est-ce que les fleurs sont roses ?",
        "The grass is green. | The grass is not green. | Is the grass green? || L'herbe est verte. | L'herbe n'est pas verte. | Est-ce que l'herbe est verte ?",
        "I like yellow. | I don't like yellow. | Do you like yellow? || J'aime le jaune. | Je n'aime pas le jaune. | Est-ce que tu aimes le jaune ?",
      ],
    },
    {
      id: "numbers", name: "Nombres", icon: "🔢",
      words: ["one=un", "two=deux", "three=trois", "four=quatre", "five=cinq", "six=six",
        "seven=sept", "eight=huit", "nine=neuf", "ten=dix"],
      sentences: [
        "I have two cats. | I don't have two cats. | Do you have two cats? || J'ai deux chats. | Je n'ai pas deux chats. | Est-ce que tu as deux chats ?",
        "She is ten. | She is not ten. | Is she ten? || Elle a dix ans. | Elle n'a pas dix ans. | Est-ce qu'elle a dix ans ?",
        "He has five friends. | He doesn't have five friends. | Does he have five friends? || Il a cinq amis. | Il n'a pas cinq amis. | Est-ce qu'il a cinq amis ?",
        "My son is six. | My son is not six. | Is your son six? || Mon fils a six ans. | Mon fils n'a pas six ans. | Est-ce que ton fils a six ans ?",
        "We want three apples. | We don't want three apples. | Do you want three apples? || Nous voulons trois pommes. | Nous ne voulons pas trois pommes. | Est-ce que vous voulez trois pommes ?",
        "They have eight books. | They don't have eight books. | Do they have eight books? || Ils ont huit livres. | Ils n'ont pas huit livres. | Est-ce qu'ils ont huit livres ?",
      ],
    },
    {
      id: "family", name: "Famille", icon: "👨‍👩‍👧",
      words: ["mother=mère", "father=père", "brother=frère", "sister=sœur", "son=fils", "daughter=fille (enfant)",
        "baby=bébé", "grandmother=grand-mère", "grandfather=grand-père", "family=famille"],
      sentences: [
        "She is my sister. | She is not my sister. | Is she your sister? || Elle est ma sœur. | Elle n'est pas ma sœur. | Est-ce qu'elle est ta sœur ?",
        "My father is here. | My father is not here. | Is your father here? || Mon père est ici. | Mon père n'est pas ici. | Est-ce que ton père est ici ?",
        "I have a brother. | I don't have a brother. | Do you have a brother? || J'ai un frère. | Je n'ai pas de frère. | Est-ce que tu as un frère ?",
        "My mother likes tea. | My mother doesn't like tea. | Does your mother like tea? || Ma mère aime le thé. | Ma mère n'aime pas le thé. | Est-ce que ta mère aime le thé ?",
        "He is my grandfather. | He is not my grandfather. | Is he your grandfather? || Il est mon grand-père. | Il n'est pas mon grand-père. | Est-ce qu'il est ton grand-père ?",
        "We have a big family. | We don't have a big family. | Do you have a big family? || Nous avons une grande famille. | Nous n'avons pas une grande famille. | Est-ce que vous avez une grande famille ?",
      ],
    },
    {
      id: "verbs", name: "Verbes du quotidien", icon: "🏃",
      words: ["like=aimer (bien)", "love=adorer", "want=vouloir", "have=avoir", "eat=manger", "drink=boire",
        "go=aller", "see=voir", "play=jouer", "read=lire"],
      sentences: [
        "I like tea. | I don't like tea. | Do you like tea? || J'aime le thé. | Je n'aime pas le thé. | Est-ce que tu aimes le thé ?",
        "He plays football. | He doesn't play football. | Does he play football? || Il joue au football. | Il ne joue pas au football. | Est-ce qu'il joue au football ?",
        "They eat bread. | They don't eat bread. | Do they eat bread? || Ils mangent du pain. | Ils ne mangent pas de pain. | Est-ce qu'ils mangent du pain ?",
        "She reads a book. | She doesn't read a book. | Does she read a book? || Elle lit un livre. | Elle ne lit pas de livre. | Est-ce qu'elle lit un livre ?",
        "You want water. | You don't want water. | Do you want water? || Tu veux de l'eau. | Tu ne veux pas d'eau. | Est-ce que tu veux de l'eau ?",
        "I go to school. | I don't go to school. | Do you go to school? || Je vais à l'école. | Je ne vais pas à l'école. | Est-ce que tu vas à l'école ?",
        "We see the sea. | We don't see the sea. | Do you see the sea? || Nous voyons la mer. | Nous ne voyons pas la mer. | Est-ce que vous voyez la mer ?",
      ],
    },
    {
      id: "adjectives", name: "Adjectifs", icon: "✨",
      words: ["big=grand / gros", "small=petit", "good=bon", "bad=mauvais", "happy=heureux", "sad=triste",
        "hot=chaud", "cold=froid", "new=neuf / nouveau", "old=vieux"],
      sentences: [
        "I am happy. | I am not happy. | Are you happy? || Je suis heureux. | Je ne suis pas heureux. | Es-tu heureux ?",
        "The house is big. | The house is not big. | Is the house big? || La maison est grande. | La maison n'est pas grande. | Est-ce que la maison est grande ?",
        "The tea is hot. | The tea is not hot. | Is the tea hot? || Le thé est chaud. | Le thé n'est pas chaud. | Est-ce que le thé est chaud ?",
        "It is cold today. | It is not cold today. | Is it cold today? || Il fait froid aujourd'hui. | Il ne fait pas froid aujourd'hui. | Est-ce qu'il fait froid aujourd'hui ?",
        "My phone is new. | My phone is not new. | Is your phone new? || Mon téléphone est neuf. | Mon téléphone n'est pas neuf. | Est-ce que ton téléphone est neuf ?",
        "They are sad. | They are not sad. | Are they sad? || Ils sont tristes. | Ils ne sont pas tristes. | Est-ce qu'ils sont tristes ?",
      ],
    },
    {
      id: "animals", name: "Animaux", icon: "🐾",
      words: ["cat=chat", "dog=chien", "bird=oiseau", "fish=poisson", "horse=cheval", "cow=vache",
        "mouse=souris", "rabbit=lapin", "lion=lion", "duck=canard"],
      sentences: [
        "The cat is black. | The cat is not black. | Is the cat black? || Le chat est noir. | Le chat n'est pas noir. | Est-ce que le chat est noir ?",
        "I have a dog. | I don't have a dog. | Do you have a dog? || J'ai un chien. | Je n'ai pas de chien. | Est-ce que tu as un chien ?",
        "The bird is blue. | The bird is not blue. | Is the bird blue? || L'oiseau est bleu. | L'oiseau n'est pas bleu. | Est-ce que l'oiseau est bleu ?",
        "The horse is brown. | The horse is not brown. | Is the horse brown? || Le cheval est marron. | Le cheval n'est pas marron. | Est-ce que le cheval est marron ?",
        "She likes rabbits. | She doesn't like rabbits. | Does she like rabbits? || Elle aime les lapins. | Elle n'aime pas les lapins. | Est-ce qu'elle aime les lapins ?",
        "The cows are white. | The cows are not white. | Are the cows white? || Les vaches sont blanches. | Les vaches ne sont pas blanches. | Est-ce que les vaches sont blanches ?",
      ],
    },
    {
      id: "food", name: "Nourriture", icon: "🍎",
      words: ["apple=pomme", "bread=pain", "water=eau", "milk=lait", "cheese=fromage", "egg=œuf",
        "rice=riz", "chicken=poulet", "tea=thé", "cake=gâteau"],
      sentences: [
        "I like cheese. | I don't like cheese. | Do you like cheese? || J'aime le fromage. | Je n'aime pas le fromage. | Est-ce que tu aimes le fromage ?",
        "The apple is red. | The apple is not red. | Is the apple red? || La pomme est rouge. | La pomme n'est pas rouge. | Est-ce que la pomme est rouge ?",
        "He drinks milk. | He doesn't drink milk. | Does he drink milk? || Il boit du lait. | Il ne boit pas de lait. | Est-ce qu'il boit du lait ?",
        "We eat rice. | We don't eat rice. | Do you eat rice? || Nous mangeons du riz. | Nous ne mangeons pas de riz. | Est-ce que vous mangez du riz ?",
        "The cake is good. | The cake is not good. | Is the cake good? || Le gâteau est bon. | Le gâteau n'est pas bon. | Est-ce que le gâteau est bon ?",
        "She wants an egg. | She doesn't want an egg. | Does she want an egg? || Elle veut un œuf. | Elle ne veut pas d'œuf. | Est-ce qu'elle veut un œuf ?",
      ],
    },
    {
      id: "house", name: "Maison", icon: "🏠",
      words: ["house=maison", "bedroom=chambre", "kitchen=cuisine", "bathroom=salle de bain", "door=porte",
        "window=fenêtre", "table=table", "chair=chaise", "bed=lit", "garden=jardin"],
      sentences: [
        "The kitchen is big. | The kitchen is not big. | Is the kitchen big? || La cuisine est grande. | La cuisine n'est pas grande. | Est-ce que la cuisine est grande ?",
        "The door is white. | The door is not white. | Is the door white? || La porte est blanche. | La porte n'est pas blanche. | Est-ce que la porte est blanche ?",
        "I have a garden. | I don't have a garden. | Do you have a garden? || J'ai un jardin. | Je n'ai pas de jardin. | Est-ce que tu as un jardin ?",
        "The cat is on the bed. | The cat is not on the bed. | Is the cat on the bed? || Le chat est sur le lit. | Le chat n'est pas sur le lit. | Est-ce que le chat est sur le lit ?",
        "My bedroom is small. | My bedroom is not small. | Is your bedroom small? || Ma chambre est petite. | Ma chambre n'est pas petite. | Est-ce que ta chambre est petite ?",
        "The chairs are new. | The chairs are not new. | Are the chairs new? || Les chaises sont neuves. | Les chaises ne sont pas neuves. | Est-ce que les chaises sont neuves ?",
      ],
    },
    {
      id: "body", name: "Corps", icon: "🖐️",
      words: ["head=tête", "hand=main", "eye=œil", "ear=oreille", "mouth=bouche", "nose=nez",
        "arm=bras", "leg=jambe", "foot=pied", "hair=cheveux"],
      sentences: [
        "She has blue eyes. | She doesn't have blue eyes. | Does she have blue eyes? || Elle a les yeux bleus. | Elle n'a pas les yeux bleus. | Est-ce qu'elle a les yeux bleus ?",
        "My hands are cold. | My hands are not cold. | Are your hands cold? || Mes mains sont froides. | Mes mains ne sont pas froides. | Est-ce que tes mains sont froides ?",
        "He has black hair. | He doesn't have black hair. | Does he have black hair? || Il a les cheveux noirs. | Il n'a pas les cheveux noirs. | Est-ce qu'il a les cheveux noirs ?",
        "The dog has big ears. | The dog doesn't have big ears. | Does the dog have big ears? || Le chien a de grandes oreilles. | Le chien n'a pas de grandes oreilles. | Est-ce que le chien a de grandes oreilles ?",
        "My foot is small. | My foot is not small. | Is your foot small? || Mon pied est petit. | Mon pied n'est pas petit. | Est-ce que ton pied est petit ?",
        "The horse has long legs. | The horse doesn't have long legs. | Does the horse have long legs? || Le cheval a de longues jambes. | Le cheval n'a pas de longues jambes. | Est-ce que le cheval a de longues jambes ?",
      ],
    },
    {
      id: "clothes", name: "Vêtements", icon: "👕",
      words: ["shirt=chemise", "shoe=chaussure", "hat=chapeau", "dress=robe", "coat=manteau",
        "trousers/pants=pantalon", "skirt=jupe", "sock=chaussette", "jacket=veste", "scarf=écharpe"],
      sentences: [
        "My coat is black. | My coat is not black. | Is your coat black? || Mon manteau est noir. | Mon manteau n'est pas noir. | Est-ce que ton manteau est noir ?",
        "She wears a red dress. | She doesn't wear a red dress. | Does she wear a red dress? || Elle porte une robe rouge. | Elle ne porte pas de robe rouge. | Est-ce qu'elle porte une robe rouge ?",
        "I want new shoes. | I don't want new shoes. | Do you want new shoes? || Je veux de nouvelles chaussures. | Je ne veux pas de nouvelles chaussures. | Est-ce que tu veux de nouvelles chaussures ?",
        "The hat is big. | The hat is not big. | Is the hat big? || Le chapeau est grand. | Le chapeau n'est pas grand. | Est-ce que le chapeau est grand ?",
        "He has a blue jacket. | He doesn't have a blue jacket. | Does he have a blue jacket? || Il a une veste bleue. | Il n'a pas de veste bleue. | Est-ce qu'il a une veste bleue ?",
        "My socks are green. | My socks are not green. | Are your socks green? || Mes chaussettes sont vertes. | Mes chaussettes ne sont pas vertes. | Est-ce que tes chaussettes sont vertes ?",
      ],
    },
  ],

  // Compétences de grammaire (leçons écrites en français)
  skills: {
    spell: { name: "La Plume", icon: "✍️", lesson: [
      "Savoir reconnaître un mot, c'est bien. Savoir l'<b>écrire</b>, c'est le graver.",
      "Pour chaque brique, tu pourras greffer l'attribut <b>✍️ Orthographe</b> : tu taperas les mots en anglais.",
      "Astuce : l'anglais s'écrit souvent très différemment de sa prononciation — écoute <b>et</b> regarde.",
    ] },
    aff: { name: "Phrase affirmative", icon: "✅", lesson: [
      "Une phrase anglaise simple suit presque toujours l'ordre <b>Sujet + Verbe + Complément</b>.",
      "Avec <b>to be</b> (être) : <b>I am</b> · <b>you are</b> · <b>he / she / it is</b> · <b>we / they are</b>.<br><i>The sky <b>is</b> blue. — We <b>are</b> friends.</i>",
      "Avec les autres verbes, on ajoute un <b>-s</b> après <b>he / she / it</b> :<br><i>I like tea → She like<b>s</b> tea.</i> · <i>have → <b>has</b></i>",
    ] },
    neg: { name: "La négation", icon: "🚫", lesson: [
      "Avec <b>to be</b>, on ajoute simplement <b>not</b> après le verbe :<br><i>The sky is <b>not</b> blue. — I am <b>not</b> sorry.</i>",
      "Avec les autres verbes, on utilise l'auxiliaire <b>do</b> : <b>don't</b> + verbe.<br><i>I like tea → I <b>don't</b> like tea.</i>",
      "Après <b>he / she / it</b> : <b>doesn't</b>, et le verbe <b>perd son -s</b> !<br><i>She likes tea → She <b>doesn't</b> like tea.</i>",
    ] },
    q: { name: "La question", icon: "❓", lesson: [
      "Avec <b>to be</b>, on <b>inverse</b> le sujet et le verbe :<br><i>The sky is blue → <b>Is</b> the sky blue?</i>",
      "Avec les autres verbes, on place <b>Do</b> devant le sujet :<br><i>You like tea → <b>Do</b> you like tea?</i>",
      "Après <b>he / she / it</b> : <b>Does</b>, et le verbe perd son -s :<br><i>He plays → <b>Does</b> he play?</i>",
    ] },
  },

  future: [
    { name: "Présent continu", icon: "⏳" },
    { name: "Le passé", icon: "⏪" },
    { name: "Le futur", icon: "⏩" },
  ],

  ranks: [
    [0, "Touriste perdu"], [30, "Curieux"], [90, "Apprenti"], [200, "Baragouineur"],
    [400, "Voyageur"], [700, "Débrouillard"], [1100, "Causeur"], [1700, "Anglophile"],
    [2500, "Presque bilingue"], [3600, "Gentleman / Lady"],
  ],
};
