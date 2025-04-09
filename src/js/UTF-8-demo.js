"use strict"

// Multiple text strings in this file are all derived from the first string
// marked:
//
// Markus Kuhn [ˈmaʳkʊs kuːn] <http://www.cl.cam.ac.uk/~mgk25/> — 2002-07-25 CC BY
//
// The other versions are intentionally degraded, such that this CC BY tag is
// less readable  See eutf8.py for info on how these strings were degraded.

// Notice that a backtick (`) in the following had to be escaped (\`)
const utf8demo_str = `\
UTF-8 encoded sample plain-text file
‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾

Markus Kuhn [ˈmaʳkʊs kuːn] <http://www.cl.cam.ac.uk/~mgk25/> — 2002-07-25 CC BY


The ASCII compatible UTF-8 encoding used in this plain-text file
is defined in Unicode, ISO 10646-1, and RFC 2279.


Using Unicode/UTF-8, you can write in emails and source code things such as

Mathematics and sciences:

  ∮ E⋅da = Q,  n → ∞, ∑ f(i) = ∏ g(i),      ⎧⎡⎛┌─────┐⎞⎤⎫
                                            ⎪⎢⎜│a²+b³ ⎟⎥⎪
  ∀x∈ℝ: ⌈x⌉ = −⌊−x⌋, α ∧ ¬β = ¬(¬α ∨ β),    ⎪⎢⎜│───── ⎟⎥⎪
                                            ⎪⎢⎜⎷ c₈   ⎟⎥⎪
  ℕ ⊆ ℕ₀ ⊂ ℤ ⊂ ℚ ⊂ ℝ ⊂ ℂ,                   ⎨⎢⎜       ⎟⎥⎬
                                            ⎪⎢⎜ ∞     ⎟⎥⎪
  ⊥ < a ≠ b ≡ c ≤ d ≪ ⊤ ⇒ (⟦A⟧ ⇔ ⟪B⟫),      ⎪⎢⎜ ⎲     ⎟⎥⎪
                                            ⎪⎢⎜ ⎳aⁱ-bⁱ⎟⎥⎪
  2H₂ + O₂ ⇌ 2H₂O, R = 4.7 kΩ, ⌀ 200 mm     ⎩⎣⎝i=1    ⎠⎦⎭

Linguistics and dictionaries:

  ði ıntəˈnæʃənəl fəˈnɛtık əsoʊsiˈeıʃn
  Y [ˈʏpsilɔn], Yen [jɛn], Yoga [ˈjoːgɑ]

APL:

  ((V⍳V)=⍳⍴V)/V←,V    ⌷←⍳→⍴∆∇⊃‾⍎⍕⌈

Nicer typography in plain text files:

  ╔══════════════════════════════════════════╗
  ║                                          ║
  ║   • ‘single’ and “double” quotes         ║
  ║                                          ║
  ║   • Curly apostrophes: “We’ve been here” ║
  ║                                          ║
  ║   • Latin-1 apostrophe and accents: '´\`  ║
  ║                                          ║
  ║   • ‚deutsche‘ „Anführungszeichen“       ║
  ║                                          ║
  ║   • †, ‡, ‰, •, 3–4, —, −5/+5, ™, …      ║
  ║                                          ║
  ║   • ASCII safety test: 1lI|, 0OD, 8B     ║
  ║                      ╭─────────╮         ║
  ║   • the euro symbol: │ 14.95 € │         ║
  ║                      ╰─────────╯         ║
  ╚══════════════════════════════════════════╝

Combining characters:

  STARGΛ̊TE SG-1, a = v̇ = r̈, a⃑ ⊥ b⃑

Greek (in Polytonic):

  The Greek anthem:

  Σὲ γνωρίζω ἀπὸ τὴν κόψη
  τοῦ σπαθιοῦ τὴν τρομερή,
  σὲ γνωρίζω ἀπὸ τὴν ὄψη
  ποὺ μὲ βία μετράει τὴ γῆ.

  ᾿Απ᾿ τὰ κόκκαλα βγαλμένη
  τῶν ῾Ελλήνων τὰ ἱερά
  καὶ σὰν πρῶτα ἀνδρειωμένη
  χαῖρε, ὦ χαῖρε, ᾿Ελευθεριά!

  From a speech of Demosthenes in the 4th century BC:

  Οὐχὶ ταὐτὰ παρίσταταί μοι γιγνώσκειν, ὦ ἄνδρες ᾿Αθηναῖοι,
  ὅταν τ᾿ εἰς τὰ πράγματα ἀποβλέψω καὶ ὅταν πρὸς τοὺς
  λόγους οὓς ἀκούω· τοὺς μὲν γὰρ λόγους περὶ τοῦ
  τιμωρήσασθαι Φίλιππον ὁρῶ γιγνομένους, τὰ δὲ πράγματ᾿
  εἰς τοῦτο προήκοντα,  ὥσθ᾿ ὅπως μὴ πεισόμεθ᾿ αὐτοὶ
  πρότερον κακῶς σκέψασθαι δέον. οὐδέν οὖν ἄλλο μοι δοκοῦσιν
  οἱ τὰ τοιαῦτα λέγοντες ἢ τὴν ὑπόθεσιν, περὶ ἧς βουλεύεσθαι,
  οὐχὶ τὴν οὖσαν παριστάντες ὑμῖν ἁμαρτάνειν. ἐγὼ δέ, ὅτι μέν
  ποτ᾿ ἐξῆν τῇ πόλει καὶ τὰ αὑτῆς ἔχειν ἀσφαλῶς καὶ Φίλιππον
  τιμωρήσασθαι, καὶ μάλ᾿ ἀκριβῶς οἶδα· ἐπ᾿ ἐμοῦ γάρ, οὐ πάλαι
  γέγονεν ταῦτ᾿ ἀμφότερα· νῦν μέντοι πέπεισμαι τοῦθ᾿ ἱκανὸν
  προλαβεῖν ἡμῖν εἶναι τὴν πρώτην, ὅπως τοὺς συμμάχους
  σώσομεν. ἐὰν γὰρ τοῦτο βεβαίως ὑπάρξῃ, τότε καὶ περὶ τοῦ
  τίνα τιμωρήσεταί τις καὶ ὃν τρόπον ἐξέσται σκοπεῖν· πρὶν δὲ
  τὴν ἀρχὴν ὀρθῶς ὑποθέσθαι, μάταιον ἡγοῦμαι περὶ τῆς
  τελευτῆς ὁντινοῦν ποιεῖσθαι λόγον.

  Δημοσθένους, Γ´ ᾿Ολυνθιακὸς

Georgian:

  From a Unicode conference invitation:

  გთხოვთ ახლავე გაიაროთ რეგისტრაცია Unicode-ის მეათე საერთაშორისო
  კონფერენციაზე დასასწრებად, რომელიც გაიმართება 10-12 მარტს,
  ქ. მაინცში, გერმანიაში. კონფერენცია შეჰკრებს ერთად მსოფლიოს
  ექსპერტებს ისეთ დარგებში როგორიცაა ინტერნეტი და Unicode-ი,
  ინტერნაციონალიზაცია და ლოკალიზაცია, Unicode-ის გამოყენება
  ოპერაციულ სისტემებსა, და გამოყენებით პროგრამებში, შრიფტებში,
  ტექსტების დამუშავებასა და მრავალენოვან კომპიუტერულ სისტემებში.

Russian:

  From a Unicode conference invitation:

  Зарегистрируйтесь сейчас на Десятую Международную Конференцию по
  Unicode, которая состоится 10-12 марта 1997 года в Майнце в Германии.
  Конференция соберет широкий круг экспертов по  вопросам глобального
  Интернета и Unicode, локализации и интернационализации, воплощению и
  применению Unicode в различных операционных системах и программных
  приложениях, шрифтах, верстке и многоязычных компьютерных системах.

Thai (UCS Level 2):

  Excerpt from a poetry on The Romance of The Three Kingdoms (a Chinese
  classic 'San Gua'):

  [----------------------------|------------------------]
    ๏ แผ่นดินฮั่นเสื่อมโทรมแสนสังเวช  พระปกเกศกองบู๊กู้ขึ้นใหม่
  สิบสองกษัตริย์ก่อนหน้าแลถัดไป       สององค์ไซร้โง่เขลาเบาปัญญา
    ทรงนับถือขันทีเป็นที่พึ่ง           บ้านเมืองจึงวิปริตเป็นนักหนา
  โฮจิ๋นเรียกทัพทั่วหัวเมืองมา         หมายจะฆ่ามดชั่วตัวสำคัญ
    เหมือนขับไสไล่เสือจากเคหา      รับหมาป่าเข้ามาเลยอาสัญ
  ฝ่ายอ้องอุ้นยุแยกให้แตกกัน          ใช้สาวนั้นเป็นชนวนชื่นชวนใจ
    พลันลิฉุยกุยกีกลับก่อเหตุ          ช่างอาเพศจริงหนาฟ้าร้องไห้
  ต้องรบราฆ่าฟันจนบรรลัย           ฤๅหาใครค้ำชูกู้บรรลังก์ ฯ

  (The above is a two-column text. If combining characters are handled
  correctly, the lines of the second column should be aligned with the
  | character above.)

Ethiopian:

  Proverbs in the Amharic language:

  ሰማይ አይታረስ ንጉሥ አይከሰስ።
  ብላ ካለኝ እንደአባቴ በቆመጠኝ።
  ጌጥ ያለቤቱ ቁምጥና ነው።
  ደሀ በሕልሙ ቅቤ ባይጠጣ ንጣት በገደለው።
  የአፍ ወለምታ በቅቤ አይታሽም።
  አይጥ በበላ ዳዋ ተመታ።
  ሲተረጉሙ ይደረግሙ።
  ቀስ በቀስ፥ ዕንቁላል በእግሩ ይሄዳል።
  ድር ቢያብር አንበሳ ያስር።
  ሰው እንደቤቱ እንጅ እንደ ጉረቤቱ አይተዳደርም።
  እግዜር የከፈተውን ጉሮሮ ሳይዘጋው አይድርም።
  የጎረቤት ሌባ፥ ቢያዩት ይስቅ ባያዩት ያጠልቅ።
  ሥራ ከመፍታት ልጄን ላፋታት።
  ዓባይ ማደሪያ የለው፥ ግንድ ይዞ ይዞራል።
  የእስላም አገሩ መካ የአሞራ አገሩ ዋርካ።
  ተንጋሎ ቢተፉ ተመልሶ ባፉ።
  ወዳጅህ ማር ቢሆን ጨርስህ አትላሰው።
  እግርህን በፍራሽህ ልክ ዘርጋ።

Runes:

  ᚻᛖ ᚳᚹᚫᚦ ᚦᚫᛏ ᚻᛖ ᛒᚢᛞᛖ ᚩᚾ ᚦᚫᛗ ᛚᚪᚾᛞᛖ ᚾᚩᚱᚦᚹᛖᚪᚱᛞᚢᛗ ᚹᛁᚦ ᚦᚪ ᚹᛖᛥᚫ

  (Old English, which transcribed into Latin reads 'He cwaeth that he
  bude thaem lande northweardum with tha Westsae.' and means 'He said
  that he lived in the northern land near the Western Sea.')

Braille:

  ⡌⠁⠧⠑ ⠼⠁⠒  ⡍⠜⠇⠑⠹⠰⠎ ⡣⠕⠌

  ⡍⠜⠇⠑⠹ ⠺⠁⠎ ⠙⠑⠁⠙⠒ ⠞⠕ ⠃⠑⠛⠔ ⠺⠊⠹⠲ ⡹⠻⠑ ⠊⠎ ⠝⠕ ⠙⠳⠃⠞
  ⠱⠁⠞⠑⠧⠻ ⠁⠃⠳⠞ ⠹⠁⠞⠲ ⡹⠑ ⠗⠑⠛⠊⠌⠻ ⠕⠋ ⠙⠊⠎ ⠃⠥⠗⠊⠁⠇ ⠺⠁⠎
  ⠎⠊⠛⠝⠫ ⠃⠹ ⠹⠑ ⠊⠇⠻⠛⠹⠍⠁⠝⠂ ⠹⠑ ⠊⠇⠻⠅⠂ ⠹⠑ ⠥⠝⠙⠻⠞⠁⠅⠻⠂
  ⠁⠝⠙ ⠹⠑ ⠡⠊⠑⠋ ⠍⠳⠗⠝⠻⠲ ⡎⠊⠗⠕⠕⠛⠑ ⠎⠊⠛⠝⠫ ⠊⠞⠲ ⡁⠝⠙
  ⡎⠊⠗⠕⠕⠛⠑⠰⠎ ⠝⠁⠍⠑ ⠺⠁⠎ ⠛⠕⠕⠙ ⠥⠏⠕⠝ ⠰⡡⠁⠝⠛⠑⠂ ⠋⠕⠗ ⠁⠝⠹⠹⠔⠛ ⠙⠑
  ⠡⠕⠎⠑ ⠞⠕ ⠏⠥⠞ ⠙⠊⠎ ⠙⠁⠝⠙ ⠞⠕⠲

  ⡕⠇⠙ ⡍⠜⠇⠑⠹ ⠺⠁⠎ ⠁⠎ ⠙⠑⠁⠙ ⠁⠎ ⠁ ⠙⠕⠕⠗⠤⠝⠁⠊⠇⠲

  ⡍⠔⠙⠖ ⡊ ⠙⠕⠝⠰⠞ ⠍⠑⠁⠝ ⠞⠕ ⠎⠁⠹ ⠹⠁⠞ ⡊ ⠅⠝⠪⠂ ⠕⠋ ⠍⠹
  ⠪⠝ ⠅⠝⠪⠇⠫⠛⠑⠂ ⠱⠁⠞ ⠹⠻⠑ ⠊⠎ ⠏⠜⠞⠊⠊⠥⠇⠜⠇⠹ ⠙⠑⠁⠙ ⠁⠃⠳⠞
  ⠁ ⠙⠕⠕⠗⠤⠝⠁⠊⠇⠲ ⡊ ⠍⠊⠣⠞ ⠙⠁⠧⠑ ⠃⠑⠲ ⠔⠊⠇⠔⠫⠂ ⠍⠹⠎⠑⠇⠋⠂ ⠞⠕
  ⠗⠑⠛⠜⠙ ⠁ ⠊⠕⠋⠋⠔⠤⠝⠁⠊⠇ ⠁⠎ ⠹⠑ ⠙⠑⠁⠙⠑⠌ ⠏⠊⠑⠊⠑ ⠕⠋ ⠊⠗⠕⠝⠍⠕⠝⠛⠻⠹
  ⠔ ⠹⠑ ⠞⠗⠁⠙⠑⠲ ⡃⠥⠞ ⠹⠑ ⠺⠊⠎⠙⠕⠍ ⠕⠋ ⠳⠗ ⠁⠝⠊⠑⠌⠕⠗⠎
  ⠊⠎ ⠔ ⠹⠑ ⠎⠊⠍⠊⠇⠑⠆ ⠁⠝⠙ ⠍⠹ ⠥⠝⠙⠁⠇⠇⠪⠫ ⠙⠁⠝⠙⠎
  ⠩⠁⠇⠇ ⠝⠕⠞ ⠙⠊⠌⠥⠗⠃ ⠊⠞⠂ ⠕⠗ ⠹⠑ ⡊⠳⠝⠞⠗⠹⠰⠎ ⠙⠕⠝⠑ ⠋⠕⠗⠲ ⡹⠳
  ⠺⠊⠇⠇ ⠹⠻⠑⠋⠕⠗⠑ ⠏⠻⠍⠊⠞ ⠍⠑ ⠞⠕ ⠗⠑⠏⠑⠁⠞⠂ ⠑⠍⠏⠙⠁⠞⠊⠊⠁⠇⠇⠹⠂ ⠹⠁⠞
  ⡍⠜⠇⠑⠹ ⠺⠁⠎ ⠁⠎ ⠙⠑⠁⠙ ⠁⠎ ⠁ ⠙⠕⠕⠗⠤⠝⠁⠊⠇⠲

  (The first couple of paragraphs of "A Christmas Carol" by Dickens)

Compact font selection example text:

  ABCDEFGHIJKLMNOPQRSTUVWXYZ /0123456789
  abcdefghijklmnopqrstuvwxyz £©µÀÆÖÞßéöÿ
  –—‘“”„†•…‰™œŠŸž€ ΑΒΓΔΩαβγδω АБВГДабвгд
  ∀∂∈ℝ∧∪≡∞ ↑↗↨↻⇣ ┐┼╔╘░►☺♀ ﬁ�⑀₂ἠḂӥẄɐː⍎אԱა

Greetings in various languages:

  Hello world, Καλημέρα κόσμε, コンニチハ

Box drawing alignment tests:                                          █
                                                                      ▉
  ╔══╦══╗  ┌──┬──┐  ╭──┬──╮  ╭──┬──╮  ┏━━┳━━┓  ┎┒┏┑   ╷  ╻ ┏┯┓ ┌┰┐    ▊ ╱╲╱╲╳╳╳
  ║┌─╨─┐║  │╔═╧═╗│  │╒═╪═╕│  │╓─╁─╖│  ┃┌─╂─┐┃  ┗╃╄┙  ╶┼╴╺╋╸┠┼┨ ┝╋┥    ▋ ╲╱╲╱╳╳╳
  ║│╲ ╱│║  │║   ║│  ││ │ ││  │║ ┃ ║│  ┃│ ╿ │┃  ┍╅╆┓   ╵  ╹ ┗┷┛ └┸┘    ▌ ╱╲╱╲╳╳╳
  ╠╡ ╳ ╞╣  ├╢   ╟┤  ├┼─┼─┼┤  ├╫─╂─╫┤  ┣┿╾┼╼┿┫  ┕┛┖┚     ┌┄┄┐ ╎ ┏┅┅┓ ┋ ▍ ╲╱╲╱╳╳╳
  ║│╱ ╲│║  │║   ║│  ││ │ ││  │║ ┃ ║│  ┃│ ╽ │┃  ░░▒▒▓▓██ ┊  ┆ ╎ ╏  ┇ ┋ ▎
  ║└─╥─┘║  │╚═╤═╝│  │╘═╪═╛│  │╙─╀─╜│  ┃└─╂─┘┃  ░░▒▒▓▓██ ┊  ┆ ╎ ╏  ┇ ┋ ▏
  ╚══╩══╝  └──┴──┘  ╰──┴──╯  ╰──┴──╯  ┗━━┻━━┛  ▗▄▖▛▀▜   └╌╌┘ ╎ ┗╍╍┛ ┋  ▁▂▃▄▅▆▇█
                                               ▝▀▘▙▄▟
`;


// Notice that a backtick (`) in the following had to be escaped (\`)
// Also backslashes are written as double backslashes.
const utf8demo_BER0001_e8 = `\

UTF-8 encoded sample plain-text file
‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾

Markus Kuhn [ˈmaʳkʊs kuːn] <http://www.cl.cam.ac.uk/~mgk25/> — 2002-07-25 CC BY


The ASCII compatible UTF-8 encoding used in this plain-text file
is defined in Unicode, ISO 10646-1, and RFC 2279.


Using Unicode/UTF-8, you can write in emails and source code things such as

Mathematics and sciences:

  ∮ E⋅da = Q,  n → ∞, ∑ f(i) = ∏ g(i),      ⎧⎡⎛┌─────┐⎞⎤⎫
                                            ⎪⎢⎜│a²+b³ ⎟⎥⎪
  ∀x∈ℝ: ⌈x⌉ = −⌊−x⌋, α ∧ ¬β = ¬(¬α ∨ β),    ⎪⎢⎜│───── ⎟⎥⎪
                                            ⎪⎢⎜⎷ c₈   ⎟⎥⎪
  ℕ ⊆ ℕ₀ ⊂ ℤ ⊂ ℚ ⊂ ℝ ⊂ ℂ,                   ⎨⎢⎜       ⎟⎥⎬
                                            ⎪⎢⎜ ∞     ⎟⎥⎪
  ⊥ < a ≠ b ≡ c ≤ d ≪ ⊤ ⇒ (⟦A⟧ ⇔ ⟪B⟫),      ⎪⎢⎜ ⎲     ⎟⎥⎪
                                            ⎪⎢⎜ ⎳aⁱ-bⁱ⎟⎥⎪
  2H₂ + O₂ ⇌ 2H₂O, R = 4.7 kΩ, ⌀ 200 mm     ⎩⎣⎝i=1    ⎠⎦⎭

Linguistics and dictionaries:

  ði ıntəˈnæʃənəl fəˈnɛtık əsoʊsiˈeıʃn
  Y [ˈʏpsilɔn], Yen [jɛn], Yoga [ˈjoːgɑ]

APL:

  ((V⍳V)=⍳⍴V)/V←,V    \\E2\\8C\\F7←⍳→⍴∆∇⊃‾⍎⍕⌈

Nicer typography in plain text files:

  ╔═══════════════════════════════════\\E2\\95\\10══════╗
  ║                                          ║
  ║   • ‘single’ and “double” quotes         ║
  ║                                          ║
  ║   • Curly apostrophes: “We’ve been here” ║
  ║                                          ║
  ║   • Latin-1 apostrophe and accents: '´\`  ║
  ║                                          ║
  ║   • ‚deutsche‘ „Anführungszeichen“       ║
  ║                                          ║
  ║   • †, ‡, ‰, •, 3–4, —, −5/+5, ™, …      ║
  ║                                          ║
  ║   • ASCII safety test: 1lI|, 0OD, 8B     ║
  ║                      ╭─────────╮         ║
  ║   • the euro symbol: │ 14.95 € │         ║
  ║                      ╰─────────╯         ║
  ╚══════════════════════════════════════════╝

Combining characters:

  STARGΛ̊TE SG-1, a = v̇ = r̈, a⃑ ⊥ b⃑

Greek (in Polytonic):

  The Greek anthem:

  Σὲ γνωρίζω ἀπὸ τὴν κόψη
  τοῦ σπαθιοῦ τὴν τρομερή,
  σὲ γνωρίζω ἀπὸ τὴν ὄψη
  ποὺ μὲ βία μετράει τὴ γῆ.

  ᾿Απ᾿ τὰ κόκκαλα βγαλμένη
  τῶν ῾Ελλήνων τὰ ἱερά
  καὶ σὰν πρῶτα ἀνδρειωμένη
  χαῖρε, ὦ χαῖρε, ᾿Ελευθεριά!

  From a speech of Demosthenes in the 4th century BC:

  Οὐχὶ ταὐτὰ παρίσταταί μοι γιγνώσκειν, ὦ ἄνδρες ᾿Αθηναῖοι,
  ὅταν τ᾿ εἰς τὰ πράγματα ἀποβλέψω καὶ ὅταν πρὸς τοὺς
  λόγους οὓς ἀκούω· τοὺς μὲν γὰρ λόγους περὶ τοῦ
  τιμωρήσασθαι Φίλιππον ὁρ\\C1\\BF\\B6 γιγνομένους, τὰ δὲ πράγματ᾿
  εἰς τοῦτο προήκοντα,  ὥσθ᾿ ὅπως μὴ πεισόμεθ᾿ αὐτοὶ
  πρότερον κακῶς σκέψασθαι δέον. οὐδέν οὖν ἄλλο μοι δοκοῦσιν
  οἱ τὰ τοιαῦτα λέγοντες ἢ τὴν ὑπόθεσιν, περὶ ἧς βουλεύεσθαι,
  οὐχὶ τὴν οὖσαν παριστάντες ὑμῖν ἁμαρτάνειν. ἐγὼ δέ, ὅτι μέν
  πλτ᾿ ἐξῆν τῇ πόλει καὶ τὰ αὑτῆς ἔχειν ἀσφαλῶς καὶ Φίλιππον
  τιμωρήσασθαι, καὶ μάλ᾿ ἀκριβῶς οἶδα· ἐπ᾿ ἐμοῦ γάρ, οὐ πάλαι
  γέγονεν ταῦτ᾿ ἀμφότερα· νῦν μέντοι πέπεισμαι τοῦθ᾿ ἱκανὸν
  προλαβεῖν ἡμῖν εἶναι τὴν πρώτην, ὅπως τοὺς συμμάχους
  σώσομεν. ἐὰν γὰρ τοῦτο βεβαίως ὑπάρξῃ, τότε καὶ περὶ τοῦ
  τίνα τιμωρήσεταί τις καὶ ὃν τρόπον ἐξέσται σκοπεῖν· πρὶν δὲ
  τὴν ἀρχὴν ὀρθῶς ὑποθέσθαι, μάταιον ἡγοῦμαι περὶ τῆς
  τελευτῆς ὁντινοῦν ποιεῖσθαι λόγον.

  Δημοσθένους, Γ´ ᾿Ολυνθιακὸς

Georgian:

  From a Unicode conference invitation:

  გთხოვთ ახლავე გაიაროთ რეგისტრაცია Unicode-ის მეათე საერთაშორისო
  კონფერენციაზე დასასწრებად, რომელიც გაიმართება 10-12 მარტს,
  ქ. მაინცში, გერმანიაში. კონფერენცია შეჰკრებს ერთად მსოფლიოს
  ექსპერტებს ისეთ დარგებში როგორიცაა ინტერნეტი და Unicode-ი,
  ინტერნაციონალიზაცია და ლოკალიზაცია, Unicode-ის გამოყენება
  ოპერაციულ სისტემებსა, და გამოყენებით პროგრამებში, შრიფტებში,
  ტექსტების დამუშავებასა და მრავალენოვან კომპიუტერულ სისტემებში.

Russian:

  From a Unicode conference\`invitation:

  Зарегистрируйтесь сейчас на Десятую Международную Конференцию по
  Unicode, которая состоится 10-12 марта 1997 года в Майнце в Германии.
  Конференция соберет широкий круг экспертов по  вопросам глобального
  Интернета и Unicode, локализации и интернационализации, воплощению и
  применению Unicode в различных операционных системах и программных
  приложениях, шрифтах, верстке и многоязычных компьютерных системах.

Thai (UCS Level 2):

  Excerpt from a poetry on The Romance of The Three Kingdoms (a Chinese
  classic 'San Gua'):

  [----------------------------|------------------------]
    ๏ แผ่นดินฮั่นเสื่อมโทรมแสนสังเวช  พระปกเกศกองบู๊กู้ขึ้นใหม่
  สิบสองกษఱตริย์ก่อนหน้าแลถัดไป       สององค์ไซร้โง่เขลาเบาปัญญา
    ทรงนับถือขันทีเป็นที่พึ่ง           บ้านเมืองจึงวิปริตเป็นนักหนา
  โฮจิ๋นเรียกทัพทั่วหัวเมืองมา         หมายจะฆ่ามดชั่วตัวสำคัญ
    เหมือนขับไสไล่เสือจากเคหา      รับหมาป่าเข้ามาเลยอาสัญ
  ฝ่ายอ้องอุ้นยุแยกให้แตกกัน          ใช้สาวนั้นเป็นชนวนชื่นชวนใจ
    พลันลิฉุยกุยกีกลับก่อเหตุ          ช่างอาเพศจริงหนาฟ้าร้องไห้
  ต้องรบราฆ่าฟันจนบรรลัย           ฤๅหาใครค้ำชูกู้บรรลังก์ ฯ

  (The above is a two-column text. If colbining characters are handled
  correctly, the lines of the second column should be aligned with the
  | character above.)

Ethiopian:

  Proverbs in the Amharic language:

  ሰማይ አይታረስ ንጉሥ አይከሰስ።
  ብላ ካለኝ እንደአባቴ በቆመጠኝ።
  ጌጥ ያለቤቱ ቁምጥና ነው።
  ደሀ በሕልሙ ቅቤ ባይጠጣ ንጣት በገደለው።
  የአፍ ወለምታ በቅቤ አይታሽም።
  አይጥ በበላ ዳዋ ተመታ።
  ሲተረጉሙ ይደረግሙ።
  ቀስ በቀስ፥ ዕንቁላል በእግሩ ይሄዳል።
  ድር ቢያብር አንበሳ ያስር።*  ሰው እንደቤቱ እንጅ እንደ ጉረቤቱ አይተዳደርም።
  እግዜር የከፈተውን ጉሮሮ ሳይዘጋው አይድርም።
  የጎረቤት ሌባ፥ ቢያዩት ይስቅ ባያዩት ያጠልቅ።
  ሥራ ከመፍታት ልጄን ላፋታት።
\\00 ዓባይ ማደሪያ የለው፥ ግንድ ይዞ ይዞራል።
  የእስላም አገሩ መካ የአሞራ አገሩ ዋርካ።
  ተንጋሎ ቢተፉ ተመልሶ ባፉ።
  ወዳጅህ ማር ቢሆን ጨርስህ አትላሰው።
  እግርህን በፍራሽህ ልክ ዘርጋ።

Runes:

  ᚻᛖ ᚳᚹᚫᚦ ᚦᚫᛏ ᚻᛖ ᛒᚢᛞᛖ ᚩᚾ ᚦᚫᛗ ᛚᚪᚾᛞᛖ ᚾᚩᚱᚦᚹᛖᚪᚱᛞᚢᛗ ᚹᛁᚦ ᚦᚪ ᚹᛖᛥᚫ

  (Old English, which transcribed into Latin reads 'He cwaeth that he
  bude thaem lande northweardum with tha Westsae.' and means 'He said
  that he lived in the northern land near the Western Sea.')

Braille:

  ⡌⠁⠧⠑ ⠼⠁⠒  ⡍⠜⠇⠑⠹⠰⠎ ⡣⠕⠌

  ⡍⠜⠇⠑⠹ ⠺⠁⠎ ⠙⠑⠁⠙⠒ ⠞⠕ ⠃⠑⠛⠔ ⠺⠊⠹⠲ ⡹⠻⠑ ⠊⠎ ⠝⠕ ⠙⠳⠃⠞
  ⠱⠁⠞⠑⠧⠻ ⠁⠃⠳⠞ ⠹⠁⠞⠲ ⡹⠑ ⠗⠑⠛⠊⠌⠻ ⠕⠋ ⠙⠊⠎ ⠃⠥⠗⠊⠁⠇ ⠺⠁⠎
 (⠎⠊⠛⠝⠫ ⠃⠹ ⠹⠑ ⠊⠇⠻⠛⠹⠍⠁⠝⠂ ⠹⠑ ⠊⠇⠻⠅⠂ ⠹⠑ ⠥⠝⠙⠻⠞⠁⠅⠻⠂
  ⠁⠝⠙ ⠹⠑ ⠡⠊⠑⠋ ⠍⠳⠗⠝⠻⠲ ⡎⠊⠗⠕⠕⠛⠑ ⠎⠊⠛⠝⠫ ⠊⠞⠲ ⡁⠝⠙
  ⡎⠊⠗⠕⠕⠛⠑⠰⠎ ⠝⠁⠍⠑ ⠺⠁⠎ ⠛⠕⠕⠙ ⠥⠏⠕⠝ ⠰⡡⠁⠝⠛⠑⠂ ⠋⠕⠗ ⠁⠝⠹⠹⠔⠛ ⠙⠑
  ⠡⠕⠎⠑ ⠞⠕ ⠏⠥⠞ ⠙⠊⠎ ⠙⠁⠝⠙ ⠞⠕⠲

  ⡕⠇⠙ ⡍⠜⠇⠑⠹ ⠺⠁⠎ ⠁⠎ ⠙⠑⠁⠙ ⠁⠎ ⠁ ⠙⠕⠕⠗⠤⠝⠁⠊⠇⠲

  ⡍⠔⠙⠖ ⡊ ⠙⠕⠝⠰⠞ ⠍⠑⠁⠝ ⠞⠕ ⠎⠁⠹ ⠹⠁⠞ ⡊ ⠅⠝⠪⠂ ⠕⠋ ⠍⠹
  ⠪⠝ ⠅⠝⠪⠇⠫⠛⠑⠂ ⠱⠁⠞ ⠹⠻⠑ ⠊⠎ ⠏⠜⠞⠊⠊⠥⠇⠜⠇⠹ ⠙⠑⠁⠙ ⠁⠃⠳⠞
  ⠁ ⠙⠕⠕⠗⠤⠝⠁⠊⠇⠲ ⡊ ⠍⠊⠣⠞ ⠙⠁⠧⠑ ⠃⠑⠲ ⠔⠊⠇⠔⠫⠂ ⠍⠹⠎⠑⠇⠋⠂ ⠞⠕
  ⠗⠑⠛⠜⠙ ⠁ ⠊⠕⠋⠋⠔⠤⠝⠁⠊⠇ ⠁⠎ ⠹⠑ ⠙⠑⠁⠙⠑⠌ ⠏⠊⠑⠊⠑ ⠕⠋ ⠊⠗⠕⠝⠍⠕⠝⠛⠻⠹
  ⠔ ⠹⠑ ⠞⠗⠁⠙⠑⠲ ⡃⠥⠞ ⠹⠑ ⠺⠊⠎⠙⠕⠍ ⠕⠋ ⠳⠗ ⠁⠝⠊⠑⠌⠕⠗⠎
  ⠊⠎ ⠔ ⠹⠑ ⠎⠊⠍⠊⠇⠑⠆ ⠁⠝⠙ ⠍⠹ ⠥⠝⠙⠁⠇⠇⠪⠫ ⠙⠁⠝⠙⠎
  ⠩⠁⠇⠇ ⠝⠕⠞ ⠙⠊⠌⠥⠗⠃ ⠊⠞⠂ ⠕⠗ ⠹⠑ ⡊⠳⠝⠞⠗⠹⠰⠎ ⠙⠕⠝⠑ ⠋⠕⠗⠲ ⡹⠳
  ⠺⠊⠇⠇ ⠹⠻⠑⠋⠕⠗⠑ ⠏⠻⠍⠊⠞ ⠍⠑ ⠞⠕ ⠗⠑⠏⠑⠁⠞⠂ ⠑⠍⠏⠙⠁⠞⠊⠊⠁⠇⠇⠹⠂ ⠹⠁⠞
  ⡍⠜⠇⠑⠹ ⠺⠁⠎ ⠁⠎ ⠙⠑⠁⠙ ⠁⠎ ⠁ ⠙⠕⠕⠗⠤⠝⠁⠊⠇⠲

  (The first couple of paragraphs of "A Christmas Carol" by Dickens)

Compact font selection example text:

  ABCDEFGHIJKLMNOPQRSTUVWXYZ /0123456789
  abcdefghijklmnopqrstuvwxyz £©µÀÆÖÞßéöÿ
  –—‘“”„†•…‰™œŠŸž€ ΑΒΓΔΩαβγδω АБВГДабвгд
  ∀∂∈ℝ∧∪≡∞ ↑↗↨↻⇣ ┐┼╔╘░►☺♀ ﬁ�⑀₂ἠḂӥẄɐː⍎אԱა

Greetings in various languages:

  Hello world, Καλημέρα κόσμε, コンニチハ

Box drawing alignment tests:                                          █
                                                                      ▉
  ╔══╦══╗  ┌──┬──┐  ╭──┬──╮  ╭──┬──╮  ┏━━┳━━┓  ┎┒┏┑   ╷  ╻ ┏┯┓ ┌┰┐    ▊ ╱╲╱╲╳╳╳
  ║┌─╨─┐║  │╔═╧═╗│  │╒═╪═╕│  │╓─╁─╖│  ┃┌─╂─┐┃  ┗╃╄┙  ╶┼╴╺╋╸┠┼┨ ┝╋┥    ▋ ╲╱╲╱╳╳╳
  ║│╲ ╱│║  │║   ║│  ││ │ ││  │║ ┃ ║│  ┃│ ╿ │┃  ┍╅╆┓   ╵  ╹ ┗┷┛ └┸┘    ▌ ╱╲╱╲╳╳╳
  ╠╡ ╳ ╞╣  ├╢   ╟┤  ├┼─┼─┼┤  ├╫─╂─╫┤  ┣┿╾┼╼┿┫  ┕┛┖┚     ┌┄┄┐ ╎ ┏┅┅┓ ┋ ▍ ╲╱╲╱╳╳╳
  ║│╱ ╲│║  │║   ║│  ││ │ ││  │║ ┃ ║│  ┃│ ╽ │┃  ░░▒▒▓▓██ ┊  ┆ ╎ ╏  ┇ ┋ ▎
  ║└─╥─┘║  │╚═╤═╝│  │╘═╪═╛│  │╙─╀─╜│  ┃└─╂─┘┃  ░░▒▒▓▓██ ┊  ┆ ╎ ╏  ┇ ┋ ▏
  ╚══╩══╝  └──┴──┘  ╰──┴──╯  ╰──┴──╯  ┗━━┻━━┛  ▗▄▖▛▀▜   └╌╌┘ ╎ ┗╍╍┛ ┋  ▁▂▃▄▅▆▇█
                                               ▝▀▘▙▄▟
`;


const utf8demo_BER0001 = Uint8Array.from(window.atob(`\
ClVURi04IGVuY29kZWQgc2FtcGxlIHBsYWluLXRleHQgZmlsZQrigL7igL7igL7igL7igL7igL7i
gL7igL7igL7igL7igL7igL7igL7igL7igL7igL7igL7igL7igL7igL7igL7igL7igL7igL7igL7i
gL7igL7igL7igL7igL7igL7igL7igL7igL7igL7igL4KCk1hcmt1cyBLdWhuIFvLiG1hyrNryopz
IGt1y5BuXSA8aHR0cDovL3d3dy5jbC5jYW0uYWMudWsvfm1nazI1Lz4g4oCUIDIwMDItMDctMjUg
Q0MgQlkKCgpUaGUgQVNDSUkgY29tcGF0aWJsZSBVVEYtOCBlbmNvZGluZyB1c2VkIGluIHRoaXMg
cGxhaW4tdGV4dCBmaWxlCmlzIGRlZmluZWQgaW4gVW5pY29kZSwgSVNPIDEwNjQ2LTEsIGFuZCBS
RkMgMjI3OS4KCgpVc2luZyBVbmljb2RlL1VURi04LCB5b3UgY2FuIHdyaXRlIGluIGVtYWlscyBh
bmQgc291cmNlIGNvZGUgdGhpbmdzIHN1Y2ggYXMKCk1hdGhlbWF0aWNzIGFuZCBzY2llbmNlczoK
CiAg4oiuIEXii4VkYSA9IFEsICBuIOKGkiDiiJ4sIOKIkSBmKGkpID0g4oiPIGcoaSksICAgICAg
4o6n4o6h4o6b4pSM4pSA4pSA4pSA4pSA4pSA4pSQ4o6e4o6k4o6rCiAgICAgICAgICAgICAgICAg
ICAgICAgICAgICAgICAgICAgICAgICAgICAg4o6q4o6i4o6c4pSCYcKyK2LCsyDijp/ijqXijqoK
ICDiiIB44oiI4oSdOiDijIh44oyJID0g4oiS4oyK4oiSeOKMiywgzrEg4oinIMKszrIgPSDCrCjC
rM6xIOKIqCDOsiksICAgIOKOquKOouKOnOKUguKUgOKUgOKUgOKUgOKUgCDijp/ijqXijqoKICAg
ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDijqrijqLijpzijrcgY+KC
iCAgIOKOn+KOpeKOqgogIOKElSDiioYg4oSV4oKAIOKKgiDihKQg4oqCIOKEmiDiioIg4oSdIOKK
giDihIIsICAgICAgICAgICAgICAgICAgIOKOqOKOouKOnCAgICAgICDijp/ijqXijqwKICAgICAg
ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDijqrijqLijpwg4oieICAgICDi
jp/ijqXijqoKICDiiqUgPCBhIOKJoCBiIOKJoSBjIOKJpCBkIOKJqiDiiqQg4oeSICjin6ZB4p+n
IOKHlCDin6pC4p+rKSwgICAgICDijqrijqLijpwg4o6yICAgICDijp/ijqXijqoKICAgICAgICAg
ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDijqrijqLijpwg4o6zYeKBsS1i4oGx
4o6f4o6l4o6qCiAgMkjigoIgKyBP4oKCIOKHjCAySOKCgk8sIFIgPSA0Ljcga86pLCDijIAgMjAw
IG1tICAgICDijqnijqPijp1pPTEgICAg4o6g4o6m4o6tCgpMaW5ndWlzdGljcyBhbmQgZGljdGlv
bmFyaWVzOgoKICDDsGkgxLFudMmZy4huw6bKg8mZbsmZbCBmyZnLiG7Jm3TEsWsgyZlzb8qKc2nL
iGXEscqDbgogIFkgW8uIyo9wc2lsyZRuXSwgWWVuIFtqyZtuXSwgWW9nYSBby4hqb8uQZ8mRXQoK
QVBMOgoKICAoKFbijbNWKT3ijbPijbRWKS9W4oaQLFYgICAg4oz34oaQ4o2z4oaS4o204oiG4oiH
4oqD4oC+4o2O4o2V4oyICgpOaWNlciB0eXBvZ3JhcGh5IGluIHBsYWluIHRleHQgZmlsZXM6Cgog
IOKVlOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKV
kOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVEOKV
kOKVkOKVkOKVkOKVkOKVkOKVlwogIOKVkSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg
ICAgICAgICAgIOKVkQogIOKVkSAgIOKAoiDigJhzaW5nbGXigJkgYW5kIOKAnGRvdWJsZeKAnSBx
dW90ZXMgICAgICAgICDilZEKICDilZEgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg
ICAgICAgICDilZEKICDilZEgICDigKIgQ3VybHkgYXBvc3Ryb3BoZXM6IOKAnFdl4oCZdmUgYmVl
biBoZXJl4oCdIOKVkQogIOKVkSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg
ICAgIOKVkQogIOKVkSAgIOKAoiBMYXRpbi0xIGFwb3N0cm9waGUgYW5kIGFjY2VudHM6ICfCtGAg
IOKVkQogIOKVkSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKVkQog
IOKVkSAgIOKAoiDigJpkZXV0c2NoZeKAmCDigJ5BbmbDvGhydW5nc3plaWNoZW7igJwgICAgICAg
4pWRCiAg4pWRICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4pWRCiAg
4pWRICAg4oCiIOKAoCwg4oChLCDigLAsIOKAoiwgM+KAkzQsIOKAlCwg4oiSNS8rNSwg4oSiLCDi
gKYgICAgICDilZEKICDilZEgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg
ICDilZEKICDilZEgICDigKIgQVNDSUkgc2FmZXR5IHRlc3Q6IDFsSXwsIDBPRCwgOEIgICAgIOKV
kQogIOKVkSAgICAgICAgICAgICAgICAgICAgICDila3ilIDilIDilIDilIDilIDilIDilIDilIDi
lIDila4gICAgICAgICDilZEKICDilZEgICDigKIgdGhlIGV1cm8gc3ltYm9sOiDilIIgMTQuOTUg
4oKsIOKUgiAgICAgICAgIOKVkQogIOKVkSAgICAgICAgICAgICAgICAgICAgICDilbDilIDilIDi
lIDilIDilIDilIDilIDilIDilIDila8gICAgICAgICDilZEKICDilZrilZDilZDilZDilZDilZDi
lZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDi
lZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZ0K
CkNvbWJpbmluZyBjaGFyYWN0ZXJzOgoKICBTVEFSR86bzIpURSBTRy0xLCBhID0gdsyHID0gcsyI
LCBh4oORIOKKpSBi4oORCgpHcmVlayAoaW4gUG9seXRvbmljKToKCiAgVGhlIEdyZWVrIGFudGhl
bToKCiAgzqPhvbIgzrPOvc+Jz4HhvbfOts+JIOG8gM+A4b24IM+E4b20zr0gzrrhvbnPiM63CiAg
z4TOv+G/piDPg8+AzrHOuM65zr/hv6Ygz4ThvbTOvSDPhM+Bzr/OvM61z4HhvbUsCiAgz4PhvbIg
zrPOvc+Jz4HhvbfOts+JIOG8gM+A4b24IM+E4b20zr0g4b2Ez4jOtwogIM+Azr/hvbogzrzhvbIg
zrLhvbfOsSDOvM61z4TPgeG9sc61zrkgz4ThvbQgzrPhv4YuCgogIOG+v86Rz4Dhvr8gz4ThvbAg
zrrhvbnOus66zrHOu86xIM6yzrPOsc67zrzhvbPOvc63CiAgz4Thv7bOvSDhv77Olc67zrvhvbXO
vc+Jzr0gz4ThvbAg4byxzrXPgeG9sQogIM66zrHhvbYgz4PhvbDOvSDPgM+B4b+2z4TOsSDhvIDO
vc60z4HOtc65z4nOvOG9s869zrcKICDPh86x4b+Wz4HOtSwg4b2mIM+HzrHhv5bPgc61LCDhvr/O
lc67zrXPhc64zrXPgc654b2xIQoKICBGcm9tIGEgc3BlZWNoIG9mIERlbW9zdGhlbmVzIGluIHRo
ZSA0dGggY2VudHVyeSBCQzoKCiAgzp/hvZDPh+G9tiDPhM6x4b2Qz4ThvbAgz4DOsc+B4b23z4PP
hM6xz4TOseG9tyDOvM6/zrkgzrPOuc6zzr3hvb3Pg866zrXOuc69LCDhvaYg4byEzr3OtM+BzrXP
giDhvr/Okc64zrfOvc6x4b+Wzr/OuSwKICDhvYXPhM6xzr0gz4Thvr8gzrXhvLDPgiDPhOG9sCDP
gM+B4b2xzrPOvM6xz4TOsSDhvIDPgM6/zrLOu+G9s8+Iz4kgzrrOseG9tiDhvYXPhM6xzr0gz4DP
geG9uM+CIM+Ezr/hvbrPggogIM674b25zrPOv8+Fz4Igzr/hvZPPgiDhvIDOus6/4b27z4nOhyDP
hM6/4b26z4IgzrzhvbLOvSDOs+G9sM+BIM674b25zrPOv8+Fz4Igz4DOtc+B4b22IM+Ezr/hv6YK
ICDPhM65zrzPic+B4b21z4POsc+DzrjOsc65IM6m4b23zrvOuc+Az4DOv869IOG9gc+Bwb+2IM6z
zrnOs869zr/OvOG9s869zr/Phc+CLCDPhOG9sCDOtOG9siDPgM+B4b2xzrPOvM6xz4Thvr8KICDO
teG8sM+CIM+Ezr/hv6bPhM6/IM+Az4HOv+G9tc66zr/Ovc+EzrEsICDhvaXPg8644b6/IOG9hc+A
z4nPgiDOvOG9tCDPgM61zrnPg+G9uc68zrXOuOG+vyDOseG9kM+Ezr/hvbYKICDPgM+B4b25z4TO
tc+Bzr/OvSDOus6xzrrhv7bPgiDPg8664b2zz4jOsc+DzrjOsc65IM604b2zzr/OvS4gzr/hvZDO
tOG9s869IM6/4b2Wzr0g4byEzrvOu86/IM68zr/OuSDOtM6/zrrOv+G/ps+DzrnOvQogIM6/4byx
IM+E4b2wIM+Ezr/Ouc6x4b+mz4TOsSDOu+G9s86zzr/Ovc+EzrXPgiDhvKIgz4ThvbTOvSDhvZHP
gOG9uc64zrXPg865zr0sIM+AzrXPgeG9tiDhvKfPgiDOss6/z4XOu8614b27zrXPg864zrHOuSwK
ICDOv+G9kM+H4b22IM+E4b20zr0gzr/hvZbPg86xzr0gz4DOsc+BzrnPg8+E4b2xzr3PhM61z4Ig
4b2Rzrzhv5bOvSDhvIHOvM6xz4HPhOG9sc69zrXOuc69LiDhvJDOs+G9vCDOtOG9sywg4b2Fz4TO
uSDOvOG9s869CiAgz4DOu8+E4b6/IOG8kM6+4b+Gzr0gz4Thv4cgz4DhvbnOu861zrkgzrrOseG9
tiDPhOG9sCDOseG9kc+E4b+Gz4Ig4byUz4fOtc65zr0g4byAz4PPhs6xzrvhv7bPgiDOus6x4b22
IM6m4b23zrvOuc+Az4DOv869CiAgz4TOuc68z4nPgeG9tc+DzrHPg864zrHOuSwgzrrOseG9tiDO
vOG9sc674b6/IOG8gM66z4HOuc6y4b+2z4Igzr/hvLbOtM6xzocg4byQz4Dhvr8g4byQzrzOv+G/
piDOs+G9sc+BLCDOv+G9kCDPgOG9sc67zrHOuQogIM6z4b2zzrPOv869zrXOvSDPhM6x4b+mz4Th
vr8g4byAzrzPhuG9uc+EzrXPgc6xzocgzr3hv6bOvSDOvOG9s869z4TOv865IM+A4b2zz4DOtc65
z4POvM6xzrkgz4TOv+G/ps644b6/IOG8sc66zrHOveG9uM69CiAgz4DPgc6/zrvOsc6yzrXhv5bO
vSDhvKHOvOG/ls69IM614by2zr3Osc65IM+E4b20zr0gz4DPgeG9vc+EzrfOvSwg4b2Fz4DPic+C
IM+Ezr/hvbrPgiDPg8+FzrzOvOG9sc+Hzr/Phc+CCiAgz4Phvb3Pg86/zrzOtc69LiDhvJDhvbDO
vSDOs+G9sM+BIM+Ezr/hv6bPhM6/IM6yzrXOss6x4b23z4nPgiDhvZHPgOG9sc+Bzr7hv4MsIM+E
4b25z4TOtSDOus6x4b22IM+AzrXPgeG9tiDPhM6/4b+mCiAgz4ThvbfOvc6xIM+EzrnOvM+Jz4Hh
vbXPg861z4TOseG9tyDPhM65z4IgzrrOseG9tiDhvYPOvSDPhM+B4b25z4DOv869IOG8kM6+4b2z
z4PPhM6xzrkgz4POus6/z4DOteG/ls69zocgz4DPgeG9ts69IM604b2yCiAgz4ThvbTOvSDhvIDP
gc+H4b20zr0g4b2Az4HOuOG/ts+CIOG9kc+Azr/OuOG9s8+DzrjOsc65LCDOvOG9sc+EzrHOuc6/
zr0g4byhzrPOv+G/ps68zrHOuSDPgM61z4HhvbYgz4Thv4bPggogIM+EzrXOu861z4XPhOG/hs+C
IOG9gc69z4TOuc69zr/hv6bOvSDPgM6/zrnOteG/ls+DzrjOsc65IM674b25zrPOv869LgoKICDO
lM63zrzOv8+DzrjhvbPOvc6/z4XPgiwgzpPhv70g4b6/zp/Ou8+Fzr3OuM65zrHOuuG9uM+CCgpH
ZW9yZ2lhbjoKCiAgRnJvbSBhIFVuaWNvZGUgY29uZmVyZW5jZSBpbnZpdGF0aW9uOgoKICDhg5Lh
g5fhg67hg53hg5Xhg5cg4YOQ4YOu4YOa4YOQ4YOV4YOUIOGDkuGDkOGDmOGDkOGDoOGDneGDlyDh
g6Dhg5Thg5Lhg5jhg6Hhg6Lhg6Dhg5Dhg6rhg5jhg5AgVW5pY29kZS3hg5jhg6Eg4YOb4YOU4YOQ
4YOX4YOUIOGDoeGDkOGDlOGDoOGDl+GDkOGDqOGDneGDoOGDmOGDoeGDnQogIOGDmeGDneGDnOGD
pOGDlOGDoOGDlOGDnOGDquGDmOGDkOGDluGDlCDhg5Phg5Dhg6Hhg5Dhg6Hhg6zhg6Dhg5Thg5Hh
g5Dhg5MsIOGDoOGDneGDm+GDlOGDmuGDmOGDqiDhg5Lhg5Dhg5jhg5vhg5Dhg6Dhg5fhg5Thg5Hh
g5AgMTAtMTIg4YOb4YOQ4YOg4YOi4YOhLAogIOGDpS4g4YOb4YOQ4YOY4YOc4YOq4YOo4YOYLCDh
g5Lhg5Thg6Dhg5vhg5Dhg5zhg5jhg5Dhg6jhg5guIOGDmeGDneGDnOGDpOGDlOGDoOGDlOGDnOGD
quGDmOGDkCDhg6jhg5Thg7Dhg5nhg6Dhg5Thg5Hhg6Eg4YOU4YOg4YOX4YOQ4YOTIOGDm+GDoeGD
neGDpOGDmuGDmOGDneGDoQogIOGDlOGDpeGDoeGDnuGDlOGDoOGDouGDlOGDkeGDoSDhg5jhg6Hh
g5Thg5cg4YOT4YOQ4YOg4YOS4YOU4YOR4YOo4YOYIOGDoOGDneGDkuGDneGDoOGDmOGDquGDkOGD
kCDhg5jhg5zhg6Lhg5Thg6Dhg5zhg5Thg6Lhg5gg4YOT4YOQIFVuaWNvZGUt4YOYLAogIOGDmOGD
nOGDouGDlOGDoOGDnOGDkOGDquGDmOGDneGDnOGDkOGDmuGDmOGDluGDkOGDquGDmOGDkCDhg5Ph
g5Ag4YOa4YOd4YOZ4YOQ4YOa4YOY4YOW4YOQ4YOq4YOY4YOQLCBVbmljb2RlLeGDmOGDoSDhg5Lh
g5Dhg5vhg53hg6fhg5Thg5zhg5Thg5Hhg5AKICDhg53hg57hg5Thg6Dhg5Dhg6rhg5jhg6Phg5og
4YOh4YOY4YOh4YOi4YOU4YOb4YOU4YOR4YOh4YOQLCDhg5Phg5Ag4YOS4YOQ4YOb4YOd4YOn4YOU
4YOc4YOU4YOR4YOY4YOXIOGDnuGDoOGDneGDkuGDoOGDkOGDm+GDlOGDkeGDqOGDmCwg4YOo4YOg
4YOY4YOk4YOi4YOU4YOR4YOo4YOYLAogIOGDouGDlOGDpeGDoeGDouGDlOGDkeGDmOGDoSDhg5Ph
g5Dhg5vhg6Phg6jhg5Dhg5Xhg5Thg5Hhg5Dhg6Hhg5Ag4YOT4YOQIOGDm+GDoOGDkOGDleGDkOGD
muGDlOGDnOGDneGDleGDkOGDnCDhg5nhg53hg5vhg57hg5jhg6Phg6Lhg5Thg6Dhg6Phg5og4YOh
4YOY4YOh4YOi4YOU4YOb4YOU4YOR4YOo4YOYLgoKUnVzc2lhbjoKCiAgRnJvbSBhIFVuaWNvZGUg
Y29uZmVyZW5jZWBpbnZpdGF0aW9uOgoKICDQl9Cw0YDQtdCz0LjRgdGC0YDQuNGA0YPQudGC0LXR
gdGMINGB0LXQudGH0LDRgSDQvdCwINCU0LXRgdGP0YLRg9GOINCc0LXQttC00YPQvdCw0YDQvtC0
0L3Rg9GOINCa0L7QvdGE0LXRgNC10L3RhtC40Y4g0L/QvgogIFVuaWNvZGUsINC60L7RgtC+0YDQ
sNGPINGB0L7RgdGC0L7QuNGC0YHRjyAxMC0xMiDQvNCw0YDRgtCwIDE5OTcg0LPQvtC00LAg0LIg
0JzQsNC50L3RhtC1INCyINCT0LXRgNC80LDQvdC40LguCiAg0JrQvtC90YTQtdGA0LXQvdGG0LjR
jyDRgdC+0LHQtdGA0LXRgiDRiNC40YDQvtC60LjQuSDQutGA0YPQsyDRjdC60YHQv9C10YDRgtC+
0LIg0L/QviAg0LLQvtC/0YDQvtGB0LDQvCDQs9C70L7QsdCw0LvRjNC90L7Qs9C+CiAg0JjQvdGC
0LXRgNC90LXRgtCwINC4IFVuaWNvZGUsINC70L7QutCw0LvQuNC30LDRhtC40Lgg0Lgg0LjQvdGC
0LXRgNC90LDRhtC40L7QvdCw0LvQuNC30LDRhtC40LgsINCy0L7Qv9C70L7RidC10L3QuNGOINC4
CiAg0L/RgNC40LzQtdC90LXQvdC40Y4gVW5pY29kZSDQsiDRgNCw0LfQu9C40YfQvdGL0YUg0L7Q
v9C10YDQsNGG0LjQvtC90L3Ri9GFINGB0LjRgdGC0LXQvNCw0YUg0Lgg0L/RgNC+0LPRgNCw0LzQ
vNC90YvRhQogINC/0YDQuNC70L7QttC10L3QuNGP0YUsINGI0YDQuNGE0YLQsNGFLCDQstC10YDR
gdGC0LrQtSDQuCDQvNC90L7Qs9C+0Y/Qt9GL0YfQvdGL0YUg0LrQvtC80L/RjNGO0YLQtdGA0L3R
i9GFINGB0LjRgdGC0LXQvNCw0YUuCgpUaGFpIChVQ1MgTGV2ZWwgMik6CgogIEV4Y2VycHQgZnJv
bSBhIHBvZXRyeSBvbiBUaGUgUm9tYW5jZSBvZiBUaGUgVGhyZWUgS2luZ2RvbXMgKGEgQ2hpbmVz
ZQogIGNsYXNzaWMgJ1NhbiBHdWEnKToKCiAgWy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18
LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXQogICAg4LmPIOC5geC4nOC5iOC4meC4lOC4tOC4meC4
ruC4seC5iOC4meC5gOC4quC4t+C5iOC4reC4oeC5guC4l+C4o+C4oeC5geC4quC4meC4quC4seC4
h+C5gOC4p+C4iiAg4Lie4Lij4Liw4Lib4LiB4LmA4LiB4Lio4LiB4Lit4LiH4Lia4Li54LmK4LiB
4Li54LmJ4LiC4Li24LmJ4LiZ4LmD4Lir4Lih4LmICiAg4Liq4Li04Lia4Liq4Lit4LiH4LiB4Lip
4LCx4LiV4Lij4Li04Lii4LmM4LiB4LmI4Lit4LiZ4Lir4LiZ4LmJ4Liy4LmB4Lil4LiW4Lix4LiU
4LmE4LibICAgICAgIOC4quC4reC4h+C4reC4h+C4hOC5jOC5hOC4i+C4o+C5ieC5guC4h+C5iOC5
gOC4guC4peC4suC5gOC4muC4suC4m+C4seC4jeC4jeC4sgogICAg4LiX4Lij4LiH4LiZ4Lix4Lia
4LiW4Li34Lit4LiC4Lix4LiZ4LiX4Li14LmA4Lib4LmH4LiZ4LiX4Li14LmI4Lie4Li24LmI4LiH
ICAgICAgICAgICDguJrguYnguLLguJnguYDguKHguLfguK3guIfguIjguLbguIfguKfguLTguJvg
uKPguLTguJXguYDguJvguYfguJnguJnguLHguIHguKvguJnguLIKICDguYLguK7guIjguLTguYvg
uJnguYDguKPguLXguKLguIHguJfguLHguJ7guJfguLHguYjguKfguKvguLHguKfguYDguKHguLfg
uK3guIfguKHguLIgICAgICAgICDguKvguKHguLLguKLguIjguLDguIbguYjguLLguKHguJTguIrg
uLHguYjguKfguJXguLHguKfguKrguLPguITguLHguI0KICAgIOC5gOC4q+C4oeC4t+C4reC4meC4
guC4seC4muC5hOC4quC5hOC4peC5iOC5gOC4quC4t+C4reC4iOC4suC4geC5gOC4hOC4q+C4siAg
ICAgIOC4o+C4seC4muC4q+C4oeC4suC4m+C5iOC4suC5gOC4guC5ieC4suC4oeC4suC5gOC4peC4
ouC4reC4suC4quC4seC4jQogIOC4neC5iOC4suC4ouC4reC5ieC4reC4h+C4reC4uOC5ieC4meC4
ouC4uOC5geC4ouC4geC5g+C4q+C5ieC5geC4leC4geC4geC4seC4mSAgICAgICAgICDguYPguIrg
uYnguKrguLLguKfguJnguLHguYnguJnguYDguJvguYfguJnguIrguJnguKfguJnguIrguLfguYjg
uJnguIrguKfguJnguYPguIgKICAgIOC4nuC4peC4seC4meC4peC4tOC4ieC4uOC4ouC4geC4uOC4
ouC4geC4teC4geC4peC4seC4muC4geC5iOC4reC5gOC4q+C4leC4uCAgICAgICAgICDguIrguYjg
uLLguIfguK3guLLguYDguJ7guKjguIjguKPguLTguIfguKvguJnguLLguJ/guYnguLLguKPguYng
uK3guIfguYTguKvguYkKICDguJXguYnguK3guIfguKPguJrguKPguLLguIbguYjguLLguJ/guLHg
uJnguIjguJnguJrguKPguKPguKXguLHguKIgICAgICAgICAgIOC4pOC5heC4q+C4suC5g+C4hOC4
o+C4hOC5ieC4s+C4iuC4ueC4geC4ueC5ieC4muC4o+C4o+C4peC4seC4h+C4geC5jCDguK8KCiAg
KFRoZSBhYm92ZSBpcyBhIHR3by1jb2x1bW4gdGV4dC4gSWYgY29sYmluaW5nIGNoYXJhY3RlcnMg
YXJlIGhhbmRsZWQKICBjb3JyZWN0bHksIHRoZSBsaW5lcyBvZiB0aGUgc2Vjb25kIGNvbHVtbiBz
aG91bGQgYmUgYWxpZ25lZCB3aXRoIHRoZQogIHwgY2hhcmFjdGVyIGFib3ZlLikKCkV0aGlvcGlh
bjoKCiAgUHJvdmVyYnMgaW4gdGhlIEFtaGFyaWMgbGFuZ3VhZ2U6CgogIOGIsOGIm+GLrSDhiqDh
i63hibPhiKjhiLUg4YqV4YyJ4YilIOGKoOGLreGKqOGIsOGIteGNogogIOGJpeGIiyDhiqvhiIjh
ip0g4Yql4YqV4Yuw4Yqg4Ymj4Ym0IOGJoOGJhuGImOGMoOGKneGNogogIOGMjOGMpSDhi6vhiIjh
iaThibEg4YmB4Yid4Yyl4YqTIOGKkOGLjeGNogogIOGLsOGIgCDhiaDhiJXhiI3hiJkg4YmF4Ymk
IOGJo+GLreGMoOGMoyDhipXhjKPhibUg4Ymg4YyI4Yuw4YiI4YuN4Y2iCiAg4Yuo4Yqg4Y2NIOGL
iOGIiOGIneGJsyDhiaDhiYXhiaQg4Yqg4Yut4Ymz4Yi94Yid4Y2iCiAg4Yqg4Yut4YylIOGJoOGJ
oOGIiyDhi7Phi4sg4Ymw4YiY4Ymz4Y2iCiAg4Yiy4Ymw4Yio4YyJ4YiZIOGLreGLsOGIqOGMjeGI
meGNogogIOGJgOGItSDhiaDhiYDhiLXhjaUg4YuV4YqV4YmB4YiL4YiNIOGJoOGKpeGMjeGIqSDh
i63hiIThi7PhiI3hjaIKICDhi7XhiK0g4Ymi4Yur4Yml4YitIOGKoOGKleGJoOGIsyDhi6vhiLXh
iK3hjaIqICDhiLDhi40g4Yql4YqV4Yuw4Ymk4YmxIOGKpeGKleGMhSDhiqXhipXhi7Ag4YyJ4Yio
4Ymk4YmxIOGKoOGLreGJsOGLs+GLsOGIreGIneGNogogIOGKpeGMjeGLnOGIrSDhi6jhiqjhjYjh
ibDhi43hipUg4YyJ4Yiu4YiuIOGIs+GLreGLmOGMi+GLjSDhiqDhi63hi7XhiK3hiJ3hjaIKICDh
i6jhjI7hiKjhiaThibUg4YiM4Ymj4Y2lIOGJouGLq+GLqeGJtSDhi63hiLXhiYUg4Ymj4Yur4Yup
4Ym1IOGLq+GMoOGIjeGJheGNogogIOGIpeGIqyDhiqjhiJjhjY3hibPhibUg4YiN4YyE4YqVIOGI
i+GNi+GJs+GJteGNogoAIOGLk+GJo+GLrSDhiJvhi7DhiKrhi6sg4Yuo4YiI4YuN4Y2lIOGMjeGK
leGLtSDhi63hi54g4Yut4Yue4Yir4YiN4Y2iCiAg4Yuo4Yql4Yi14YiL4YidIOGKoOGMiOGIqSDh
iJjhiqsg4Yuo4Yqg4Yie4YirIOGKoOGMiOGIqSDhi4vhiK3hiqvhjaIKICDhibDhipXhjIvhiI4g
4Ymi4Ymw4Y2JIOGJsOGImOGIjeGItiDhiaPhjYnhjaIKICDhi4jhi7PhjIXhiIUg4Yib4YitIOGJ
ouGIhuGKlSDhjKjhiK3hiLXhiIUg4Yqg4Ym14YiL4Yiw4YuN4Y2iCiAg4Yql4YyN4Yit4YiF4YqV
IOGJoOGNjeGIq+GIveGIhSDhiI3hiq0g4YuY4Yit4YyL4Y2iCgpSdW5lczoKCiAg4Zq74ZuWIOGa
s+GaueGaq+GapiDhmqbhmqvhm48g4Zq74ZuWIOGbkuGaouGbnuGbliDhmqnhmr4g4Zqm4Zqr4ZuX
IOGbmuGaquGavuGbnuGbliDhmr7hmqnhmrHhmqbhmrnhm5bhmqrhmrHhm57hmqLhm5cg4Zq54ZuB
4ZqmIOGapuGaqiDhmrnhm5bhm6XhmqsKCiAgKE9sZCBFbmdsaXNoLCB3aGljaCB0cmFuc2NyaWJl
ZCBpbnRvIExhdGluIHJlYWRzICdIZSBjd2FldGggdGhhdCBoZQogIGJ1ZGUgdGhhZW0gbGFuZGUg
bm9ydGh3ZWFyZHVtIHdpdGggdGhhIFdlc3RzYWUuJyBhbmQgbWVhbnMgJ0hlIHNhaWQKICB0aGF0
IGhlIGxpdmVkIGluIHRoZSBub3J0aGVybiBsYW5kIG5lYXIgdGhlIFdlc3Rlcm4gU2VhLicpCgpC
cmFpbGxlOgoKICDioYzioIHioKfioJEg4qC84qCB4qCSICDioY3ioJzioIfioJHioLnioLDioI4g
4qGj4qCV4qCMCgogIOKhjeKgnOKgh+KgkeKguSDioLrioIHioI4g4qCZ4qCR4qCB4qCZ4qCSIOKg
nuKglSDioIPioJHioJvioJQg4qC64qCK4qC54qCyIOKhueKgu+KgkSDioIrioI4g4qCd4qCVIOKg
meKgs+Kgg+KgngogIOKgseKggeKgnuKgkeKgp+KguyDioIHioIPioLPioJ4g4qC54qCB4qCe4qCy
IOKhueKgkSDioJfioJHioJvioIrioIzioLsg4qCV4qCLIOKgmeKgiuKgjiDioIPioKXioJfioIri
oIHioIcg4qC64qCB4qCOCiAo4qCO4qCK4qCb4qCd4qCrIOKgg+KguSDioLnioJEg4qCK4qCH4qC7
4qCb4qC54qCN4qCB4qCd4qCCIOKgueKgkSDioIrioIfioLvioIXioIIg4qC54qCRIOKgpeKgneKg
meKgu+KgnuKggeKgheKgu+KgggogIOKggeKgneKgmSDioLnioJEg4qCh4qCK4qCR4qCLIOKgjeKg
s+Kgl+KgneKgu+KgsiDioY7ioIrioJfioJXioJXioJvioJEg4qCO4qCK4qCb4qCd4qCrIOKgiuKg
nuKgsiDioYHioJ3ioJkKICDioY7ioIrioJfioJXioJXioJvioJHioLDioI4g4qCd4qCB4qCN4qCR
IOKguuKggeKgjiDioJvioJXioJXioJkg4qCl4qCP4qCV4qCdIOKgsOKhoeKggeKgneKgm+KgkeKg
giDioIvioJXioJcg4qCB4qCd4qC54qC54qCU4qCbIOKgmeKgkQogIOKgoeKgleKgjuKgkSDioJ7i
oJUg4qCP4qCl4qCeIOKgmeKgiuKgjiDioJnioIHioJ3ioJkg4qCe4qCV4qCyCgogIOKhleKgh+Kg
mSDioY3ioJzioIfioJHioLkg4qC64qCB4qCOIOKggeKgjiDioJnioJHioIHioJkg4qCB4qCOIOKg
gSDioJnioJXioJXioJfioKTioJ3ioIHioIrioIfioLIKCiAg4qGN4qCU4qCZ4qCWIOKhiiDioJni
oJXioJ3ioLDioJ4g4qCN4qCR4qCB4qCdIOKgnuKglSDioI7ioIHioLkg4qC54qCB4qCeIOKhiiDi
oIXioJ3ioKrioIIg4qCV4qCLIOKgjeKguQogIOKgquKgnSDioIXioJ3ioKrioIfioKvioJvioJHi
oIIg4qCx4qCB4qCeIOKgueKgu+KgkSDioIrioI4g4qCP4qCc4qCe4qCK4qCK4qCl4qCH4qCc4qCH
4qC5IOKgmeKgkeKggeKgmSDioIHioIPioLPioJ4KICDioIEg4qCZ4qCV4qCV4qCX4qCk4qCd4qCB
4qCK4qCH4qCyIOKhiiDioI3ioIrioKPioJ4g4qCZ4qCB4qCn4qCRIOKgg+KgkeKgsiDioJTioIri
oIfioJTioKvioIIg4qCN4qC54qCO4qCR4qCH4qCL4qCCIOKgnuKglQogIOKgl+KgkeKgm+KgnOKg
mSDioIEg4qCK4qCV4qCL4qCL4qCU4qCk4qCd4qCB4qCK4qCHIOKggeKgjiDioLnioJEg4qCZ4qCR
4qCB4qCZ4qCR4qCMIOKgj+KgiuKgkeKgiuKgkSDioJXioIsg4qCK4qCX4qCV4qCd4qCN4qCV4qCd
4qCb4qC74qC5CiAg4qCUIOKgueKgkSDioJ7ioJfioIHioJnioJHioLIg4qGD4qCl4qCeIOKgueKg
kSDioLrioIrioI7ioJnioJXioI0g4qCV4qCLIOKgs+KglyDioIHioJ3ioIrioJHioIzioJXioJfi
oI4KICDioIrioI4g4qCUIOKgueKgkSDioI7ioIrioI3ioIrioIfioJHioIYg4qCB4qCd4qCZIOKg
jeKguSDioKXioJ3ioJnioIHioIfioIfioKrioKsg4qCZ4qCB4qCd4qCZ4qCOCiAg4qCp4qCB4qCH
4qCHIOKgneKgleKgniDioJnioIrioIzioKXioJfioIMg4qCK4qCe4qCCIOKgleKglyDioLnioJEg
4qGK4qCz4qCd4qCe4qCX4qC54qCw4qCOIOKgmeKgleKgneKgkSDioIvioJXioJfioLIg4qG54qCz
CiAg4qC64qCK4qCH4qCHIOKgueKgu+KgkeKgi+KgleKgl+KgkSDioI/ioLvioI3ioIrioJ4g4qCN
4qCRIOKgnuKglSDioJfioJHioI/ioJHioIHioJ7ioIIg4qCR4qCN4qCP4qCZ4qCB4qCe4qCK4qCK
4qCB4qCH4qCH4qC54qCCIOKgueKggeKgngogIOKhjeKgnOKgh+KgkeKguSDioLrioIHioI4g4qCB
4qCOIOKgmeKgkeKggeKgmSDioIHioI4g4qCBIOKgmeKgleKgleKgl+KgpOKgneKggeKgiuKgh+Kg
sgoKICAoVGhlIGZpcnN0IGNvdXBsZSBvZiBwYXJhZ3JhcGhzIG9mICJBIENocmlzdG1hcyBDYXJv
bCIgYnkgRGlja2VucykKCkNvbXBhY3QgZm9udCBzZWxlY3Rpb24gZXhhbXBsZSB0ZXh0OgoKICBB
QkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWiAvMDEyMzQ1Njc4OQogIGFiY2RlZmdoaWprbG1ub3Bx
cnN0dXZ3eHl6IMKjwqnCtcOAw4bDlsOew5/DqcO2w78KICDigJPigJTigJjigJzigJ3igJ7igKDi
gKLigKbigLDihKLFk8WgxbjFvuKCrCDOkc6SzpPOlM6pzrHOss6zzrTPiSDQkNCR0JLQk9CU0LDQ
sdCy0LPQtAogIOKIgOKIguKIiOKEneKIp+KIquKJoeKIniDihpHihpfihqjihrvih6Mg4pSQ4pS8
4pWU4pWY4paR4pa64pi64pmAIO+sge+/veKRgOKCguG8oOG4gtOl4bqEyZDLkOKNjteQ1LHhg5AK
CkdyZWV0aW5ncyBpbiB2YXJpb3VzIGxhbmd1YWdlczoKCiAgSGVsbG8gd29ybGQsIM6azrHOu863
zrzhvbPPgc6xIM664b25z4POvM61LCDjgrPjg7Pjg4vjg4Hjg48KCkJveCBkcmF3aW5nIGFsaWdu
bWVudCB0ZXN0czogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDilogK
ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg
ICAgICAgICAgICAgIOKWiQogIOKVlOKVkOKVkOKVpuKVkOKVkOKVlyAg4pSM4pSA4pSA4pSs4pSA
4pSA4pSQICDila3ilIDilIDilKzilIDilIDila4gIOKVreKUgOKUgOKUrOKUgOKUgOKVriAg4pSP
4pSB4pSB4pSz4pSB4pSB4pSTICDilI7ilJLilI/ilJEgICDilbcgIOKVuyDilI/ilK/ilJMg4pSM
4pSw4pSQICAgIOKWiiDilbHilbLilbHilbLilbPilbPilbMKICDilZHilIzilIDilajilIDilJDi
lZEgIOKUguKVlOKVkOKVp+KVkOKVl+KUgiAg4pSC4pWS4pWQ4pWq4pWQ4pWV4pSCICDilILilZPi
lIDilYHilIDilZbilIIgIOKUg+KUjOKUgOKVguKUgOKUkOKUgyAg4pSX4pWD4pWE4pSZICDilbbi
lLzilbTilbrilYvilbjilKDilLzilKgg4pSd4pWL4pSlICAgIOKWiyDilbLilbHilbLilbHilbPi
lbPilbMKICDilZHilILilbIg4pWx4pSC4pWRICDilILilZEgICDilZHilIIgIOKUguKUgiDilIIg
4pSC4pSCICDilILilZEg4pSDIOKVkeKUgiAg4pSD4pSCIOKVvyDilILilIMgIOKUjeKVheKVhuKU
kyAgIOKVtSAg4pW5IOKUl+KUt+KUmyDilJTilLjilJggICAg4paMIOKVseKVsuKVseKVsuKVs+KV
s+KVswogIOKVoOKVoSDilbMg4pWe4pWjICDilJzilaIgICDilZ/ilKQgIOKUnOKUvOKUgOKUvOKU
gOKUvOKUpCAg4pSc4pWr4pSA4pWC4pSA4pWr4pSkICDilKPilL/ilb7ilLzilbzilL/ilKsgIOKU
leKUm+KUluKUmiAgICAg4pSM4pSE4pSE4pSQIOKVjiDilI/ilIXilIXilJMg4pSLIOKWjSDilbLi
lbHilbLilbHilbPilbPilbMKICDilZHilILilbEg4pWy4pSC4pWRICDilILilZEgICDilZHilIIg
IOKUguKUgiDilIIg4pSC4pSCICDilILilZEg4pSDIOKVkeKUgiAg4pSD4pSCIOKVvSDilILilIMg
IOKWkeKWkeKWkuKWkuKWk+KWk+KWiOKWiCDilIogIOKUhiDilY4g4pWPICDilIcg4pSLIOKWjgog
IOKVkeKUlOKUgOKVpeKUgOKUmOKVkSAg4pSC4pWa4pWQ4pWk4pWQ4pWd4pSCICDilILilZjilZDi
larilZDilZvilIIgIOKUguKVmeKUgOKVgOKUgOKVnOKUgiAg4pSD4pSU4pSA4pWC4pSA4pSY4pSD
ICDilpHilpHilpLilpLilpPilpPilojilogg4pSKICDilIYg4pWOIOKVjyAg4pSHIOKUiyDilo8K
ICDilZrilZDilZDilanilZDilZDilZ0gIOKUlOKUgOKUgOKUtOKUgOKUgOKUmCAg4pWw4pSA4pSA
4pS04pSA4pSA4pWvICDilbDilIDilIDilLTilIDilIDila8gIOKUl+KUgeKUgeKUu+KUgeKUgeKU
myAg4paX4paE4paW4pab4paA4pacICAg4pSU4pWM4pWM4pSYIOKVjiDilJfilY3ilY3ilJsg4pSL
ICDiloHiloLiloPiloTiloXilobilofilogKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg
ICAgICAgICAgICAgICAgICDilp3iloDilpjilpniloTilp8K`),
char => char.charCodeAt(0));


// Notice that a backtick (`) in the following had to be escaped (\`)
// Also backslashes are written as double backslashes.
const utf8demo_BER001_e8 = `\

UTF-8!encoded sample plain-text file
‼‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾\\E0\\80\\BE‾‾‾‾‾‾‾‾‾‾‾‾‾

Markus Kuhn [ˈmaʳkʊs kuːn] <http://www.cl.cam.ac.uk/~mgk25/> — 2002-07-25 CC BY


The ASCII compatible UTF-8 encoding used in this plain-text file
is defined in Unicode, ISO 10646-1, and RFC 2279.

\\08Using Unicode/UTF-8, you can write in emails and source code things such as

Mathematics and science\\F3:

  ∮ E⋅da = U,  n0→ ∞, ∑ f(i) = ∏ g(i),      ⎧⎡⎛┌─────└⎞⎤⎫
                                            ⎪⎢⎜│a²kb³ ⎟⎥⎪
  ∀x∈ℝ: ⌈x⌉ = −⌊−x⌋, α ∧ ¬β = ¬(¬α ∨ β),    ⎪⎢⎜│───── ⎟⎥⎪
                                            ⎪⎢⎜⎷ c₈   ⎟⎥⎪
  ℕ ⊆ ℕ₀ ⊂ ℤ ⊂ ℚ ⊂ ℝ \\E2ʂ ℂ,              \\00    ⎨⎢⎜       ⎟⎥⎬
                                            ⎪\\E2\\8E"⎜ ∞     ⎟⎥⎪
  ⊥ < a ≠ b ≡ c ≤ d ≪ ⊤ ⇒ (⟦A⟧ ⇔ ⟪B⟫),      ⎪⎢⎜ ⎲     ⎟⎥⎪
                                            ⎪⎢⎜ ⎳aⁱ-bⁱ⎟⎥⎪
  2H₂ + O₂ ⇌ 2H₂O, R = 4.7 kΩ, ⌀ 200 mm     ⎩\\A2\\8E\\A3⎝i=1    ⎠⎦⎭

Linguistics and dictionaries:

  ði ıntəˈnæʃənəl fəˈnɛtık əsoʊsiˈeı\\CA\\03n
  Y [ˈʏpsilɔn], Yen [jɛn], Yoga [ˈjoːgɑ]

APL:

  ((V⍳V)=⍳⍴V)/V←,V    ⌷憐⍳→⍴∆∇⊃‾⍎⍕⌈

Nicer typography in plain text files:

  ╔══╘══════════════════╔════════════════════╗
  ║                                          ║
  ║   • ‘single’ and “double” quotes         ║
  ║                                          ║
  ⑑   • Curly apostrophes: “We’ve been here” ║
  ║                                          ║
  ║   • Latin-1 apostrophe qnd accents: '´\`  ║
  ║                                          ═
  ║   • ‚deutsche‘ „Anführungszeichen\\C2\\80\\9C       ║
  ║                                          ║
  ║   • †, ‡, ‰, •, 3–4, —, −5/+5, ™, …      ║
  ║                                          ║
  ║   • ASCII safety test: 1lI|, 0OD, 8B     ║
  ║                      ╭─────────╮         ║
  ║   • the euro symbol: │ 14.95 € │         ║
  ║                      ╰─────────╯         ║
  ╚❐══\\A2\\95\\90══════════════════════════════════════╝

Combining\`characters:

  STARGΛ̊TE SG-1, a = v̇ = r̈, a⃑ ⊥ b⃑

Greek (in Polytonic):

  The Greek anthem:

  Σὲ γνωρίζω ἀπὸ τὴν κ\\F1\\BD\\B9ψη
  τοῦ σπαθιοῦ τὴν τρομερή,
  σὲ γνωρίζω ἀπὸ τὴν ὄψη
  ποὺ μὲ βία μετράει τὴ γῆ.

  ᾿Απ᾿ τὰ κόκκαλα βγαλμένη
  τῶν ῾Ελλήνων τὰ ἱερά
  καὶ σὰν πρῶτα ἀνδρειωμένη
  χαῖρε, ὦ χαῖρε, ᾿Ελευθεριά!

  From a rpeech of Demosthenes in the 4th century BC:

  Οὐχὶ ταὐτὰ παρίσταταί μοι γιγνώσκειν, ὦ ἄνδρες ᾿Αθηνεῖοι,
  ὅταν τ᾿ εἰς τὰ πράγματα ἀποβλέψω καὶ ὅταν πρὸς τοὺς
  λόγους οὓς ἀκούω· τοὺς μὲν γὰρ λόγους περὶ τοῦ
  τιμωρήσασθαι Φίλιππον ὁρῶ γιγνομένους, τὰ δὲ πράγματ᾿
  εἰς τοa\\BF\\A6το προṵκοντα,  ὥσθ᾿ ὅπως νὴ πεισόμεθ᾿ αὐτοὶ
  πρότερον \\8E\\BAακῶς σκέψασθαι δέον. οὐδέν οὖν ἄλλο μοι δοκοῦσιν
  οἱ τ齰 τοιαῦτα λέγοντες ἢ τὴν ὑπόθεσιν, περὶ ἧς βουλεύεσθαι,
  οὐχὶ τὴν οὖσαν παριστάντες ὑμῖν ἁμαρτάνειν. ἐγὼ δέ, ὅτι μέν
  ποτ᾿ ἐξῆν τῇ πόλει καὶ τὰ αὑτῆς ἔˇειν ἀσφαλ\\C1\\BF\\B6ς καὶ Φ὿λιππον
  τιμωρήσασθαι, καὶ μάλ᾿ ἀκριβῶς οἶδα· Ḑπ᾿ ἐμοῦ γάρ, οὐ πάλαι
  γέγονεν ταῦτ᾿ ἀμφότερα· νῦν μέντοι πέπεισμαι \\EF\\84οῦθ᾿ ἱκανὸν
  προλαβεῖν ἡμῖν εἶναι τὴν πρώτην, ὅπωϊ τοὺς συμμάχους
  σώσομεν. ἐὰν γὰρ τοῦτο βεβαίως(ὑπάρξῃ, τότε καὶ περ\\A1\\BD\\B6 τοῦ
  τίνα τιμωρήσεταί\\00τις καὶ ὃν τρόπον ἐξέσται σκοπεῖν· πρὶν δὲ
  τὴν ἀρχὴν Ὀρθῶς ὑποθᝳσθαι, μάταιον ἡγοῦμαι περὶ τῆς
  τελʵυτῆς ὁντινοῦν ποιεῖσθαι λόγον.

 0Δημοσθένους, Γ´ ᾿Ολυνθιακὸς

Georgian:

  From a Unicode conference invitation:\\8A
  გთხოვთ ახლავე გაიაროთ რეგისტრაცია Unicode-ის მეათე საერთა\\A1\\83\\A8ორისო
  კონფერენციაზე დასაၡ\\F1\\83\\ACრებად, რომელიც გაიმართე\\E1\\03\\91ა 10-12 მარტს,
  ქ. მაინცში, გერმანიაში. კონფერენცია შეჰკრებს ერთად მსოფლიოს
  ექსპერტებს ისეთ დარგებში როგორიცაა ინტერნეტი და Unicode-ი,
  ინტერნაციონალიზაცია და ლოკალიზაცია, Unicode-ის გამოყენება
  ოპერაციულ სისტემებსა, და გამოყენებით პრო\\E1\\83\\D2რამებში, შრიფტებში,
  ტექსტების დ\\E1\\83\\D0მუშავებასა და მრავალენოვან კომპიუტერულ სისტემებში.

Russian:

  From a Unicode conference invitation:

  Зарегистрируйтесь сейчас на Десятую Международную Конференцию по
  Unicode, которая состоится 10-12 марта 1997 года в Майнцص в Германии.
  Конференция соберет широкий круг экспертов по  вопросам гло\\90\\B1ального
  Интернета и Unicode, локализации и интернациؾнализации, воплощению и
  применению Unicode в различных операционных системذх и программных
  приложениях, шрифтах, верстке и многоязычных компьютерных системах.

Thai (UCS Level 2):

  Excerpt from a poetry on The Romance of The Three Kingdoms (a Chinese
  classic 'San Gua'):

  [----------------------------|------------------------]
    ๏ แผ่นดินฮั่นเสื่อมโทรมแสนสังเวช  พระปกเกศกองบู๊กู้ขึ้นใหม่
  สิบสองกษัตริย์ก่อนหน้าแລถัดไป       สององค์ไซร้โง่เขลาเบาปัญญา
    ทรงนับถือขันทีเป็นที่พึ่ง           บ้านੀมื๭งจึงวิปริตเป็นนักหนา
  โฮจิ๋นเรียกทัพทั่วหัวเมือฆมา         หมายจะฆ\\C0\\B9\\88ามดชั่วตัวสำคัญ
    เหมือนขับไสไล่เสือจากเคหา      รับหมาป่าเข้ามาเลยอาสัญ
  ฝ่ายอ้อ\\E0\\F8\\87อุ้นยุแยกให้แตกกัน          ใช้สาวนั้นเป็นชนวนชื่นชวนใจ
    พลันลิฉุยกุยกีกਥับก่อเหตุ          ช่างอำเพศจริงหนาฟ้าร้องไห้
  ต้องรบราฆ่าฟันจนบรรลั\\F0\\B8\\A2           ฤๅหาใครค้ำชูกู้บรรลังก์ ฯ

  (The above is a two-column text. If combining characters are handled
  correctly, the lines of the second column should be aligned with the
  | character above.)

Ethiopian:

  Proverbs in the Amharic language:

  ሰማይ አይታረስ ንጉሥ አይa\\8A\\A8ሰስ።
  ብላ ካለኝ እንደአባቴ በቆመጠኝ።
  ጌጥ ያለቤቱ ቁምጥና ነው።
  ደሀ በሕልሙ ቅቤ ባይጠጣ ንጣት በገደለው።
  የአፍ ወለምታ በቅቤ አይታሽም።
  አይጥ በበላ ዳዋ ተመታ።
  ሲተረጉሙ ይደረግሙ።
  ቀስ በቀስ፥ ዕንቁላል በእግሩ ይሄዳል።
  ድር ቢያብር አንበሳ ያስር።
  ሰው እንደቤቱ እንጅ እንደ ጉረቤቱ አይተዳደርም።
  እግዜር የከፈተውን ጉሮሮ ሳይዘጋው አይድርም።
  የጎረቤት ሌባ፥ ቢያዩት ይስቅ ባያዩት ያጠልቅ።
  ሥራ ከመፍታት ልጄን ላፋታት።
  ዓባይ ማደሪያ የለው፥ ግንድ ይዞ ይዞራል።
  የእስላም አገሩ መካ የአሞራ አገሩ ዋርካ።
  ተንጋሎ ቢተፉ ተመልሶ ባፉ።
  ወዳጅህ ማር ቢሦን ጨርስህ አትላሰው።
  እግርህን በፍራሽህ ልክ ዘርጋ።

Rujes:

  ᚻᛖ ᚳᚹᚫᚦ ᚦᚫᛏ ᚻ\\E1\\9B\\16 ᛒᚢᛞᛖ ᚩᚾ ᚦᚫᛗ ᛚᚪᚾᛞᛖ ᚾᚩᚱᚦᚹᛖᚪᚱᛞᚢᛗ ᚹᛁᚦ ᚦᚪ ᚹᛖᛥᚫ

  (Old English, whicj transcribed into Latin reads 'He cwaeth that he
  bude thaem lande northweardum with tha Westsae.' and meaNs 'He said
  that he lived in the northern land\\00near the Western Sea.')

Braille:

  ⡌⠁⠧⠑ ⠼⠁⠒  ⡍⠜⠇⠑⠹⠰⠎ ⡣⠕⠌

  ⡍⠜⠇⠑⠹ ⠺⠁⠎"⠙⠑⠁⠙⠒ ⠞⠕ ⠃⠑⠛⠔  \\BA⠊⠹⠲ ⡹⠻⠑ ⠊⠎ ⠝⠕ ⠙⠳⠃⠞
  ⠱⠁⠞⠑ \\A7⠻ ⠁⠃⠳⠞ ⠹⠁⠞⠲ ⡹⠑ ⠗⠑⠛⠊⠌⠻ ⠕⠋ ⠙⠊⠎ ⠃⠥⠗⠊⠁⠇ ⠺⠁⠎
  ⠎⠊⠛⠝⠫ ⠃⠹ ⠹⠑ ⠊⠇⠻⠛⠹⠍⠁⠝⠂ ⠹⠑ ⠎⠇⠻⠅⠂ ⠹⠑ ⠥⠝⠙⠻⠞⠁⠅⠻⠂
  ⠁⠝⠙ ⠹⠑ ⠡⠊⠑⠋ ⠍⠳⠗⠝⠻⠲ ⡎⠊⠗⠕⠕⠛⠑ ⠎⠊⠛⠝⠫  ⠞⠲ ⡁⠝⠙
  ⡎⠊⠗⠕⠕⠛⠑⠰⠎ ⠝⠁⠍⠑ ⠺⠁⠎ ⠛⠕⠕⠙ ⠥⠏⠕⠝ ⠰⡡⠁⠝⠛⠑⠂ ⠋⠕⠗ ⠁⠝⠹⠹⠔⠛ ⠙⠑
  ⠡⠕⠎⠑ ⠞⠕ ⠏⠥⠞ ⠙⠊⠎ ⠙⠁⠝⠙ ⠞⠕⠲

  ⡕⠇⠙ ⡍⠜⠇⠑⠹ ⠺⠁⠎ ⠁⠎ ⠙⠑⠁⠙ ⠁⠎ ⠁ ⠙⠕⠕⠗⠤⠝⠁⠊⠇⠲

  ⡍⠔⠙⠖ ⡊ ⠙⠕⠝⠰⠞ ⠍⠑⠁⠝ ⠞⠕$⠎⠁⠹ ⠹⠁⠞ ⡊ ⠅⠝⠪⠂ ⠕⠋ ⠍⠹
  ⠪⠝ ⠅⠝株⠇⠫栛⠑⠂ ⠱⠁⠞ ⠹⠻⠑ ⠊⠎ ⠏⠜⠞⠊⠊⠥⠇⠜⠇⠹ ⠙⠑⠁⠙ ⠁⠃⠳⠞
  ⠁ ⠙⠕⠕⠗⠤⠝⠁⠊⠇⠲ ⡊ ⠍⠊⠣⠞ ⠙⠁⠧⠑ ⠃⠑⠲ ⠔⠊⠇⠔⠫⠂ ⠍⠹⠎⠑⠇⠋⠂ ⠞⠕
  ⠗⠑⠛⠜⠙ ⠁ ⠊ \\95⠋⠋⠔⠤⠝⠁⠊⠇ ⠁⠎ ⠹⠑ ⠙⠑\\E2 \\81⠙‑⠌ ⠏⠊⠑⠊⠑ ⠕⠋ ⠊⠗⠕⠝⠍⠕⠝⠛⠻⠹
  ⠔ ⠹⠑ ⠞⠗⠁⠙⠑⠲ ⡃⠥⠞ ⠹⠑ ⠺⠈⠎⠙⠕⠍ ⠕⠋ ⠳⠗ ⠁⠝⠊⠑⠌⠕⠗⠎
  ⠊⠎ ⠔ ⠹⠑ ⠎⠊⠍⠊⠇⠑⠆ ⠁⠝⠙ ⠍⠹ ⠥⠝⠙⠁⠇⠇⠪⠫ ⠙⠁⠝⠙⠎
  ⠩⠁⠇⠇ ⠝⠕⠞ ⠙⠊⠌⠥⠗⠃ ⠊⠞⠂ ⠕⠗ ⠹⠑ ⡊⠳⠝⠞⠗⠹⠰⠎ ⠙⠕⠝⠑ ⠋⠕⠗⠲ ⡹⠳
  ⠺⠊⠇⠇ ⠹⠻⠑⠋⠕⠗⠑ ⠏⠻⠍⠊⠞ ⠍⠑ ⠞⠕ ⠗⠑⠏⠑⠁⠞⠂ ⠑⠍⠏⠙⠁⠞⠊⠊⠁⠇⠇⠹⠂ ⠹⠁⠞
  ⡍⠜⠇⠑⠹ ⠺⠁⠎ ⠁⠎ ⠙⠑⠁⠙ ⠁⠎ ⠁ ⠙⠕⠕⠗⠤⠝⠁⠊⠇⠲

  (The first couple of paragraphs of "A Christmas Carol" by Dickens)

Compact font selection example text:

  ABCDEFGHIJKLMNOPQRSTUVWXYZ /0123456789
  abcdefghijklmnopqrstuvwxyz £©µÀÆÖÞßéöÿ
  –—‘“”„†•…‰™œŠŸž€ ΑΒΓΔΩαβγδω АБВГДабвгд
  ∀∂∈ℝ∧∪≡∞ ↑↗↨↻⇣ ┐┼╔╘░►☺♀ ﬉�⑀₂ἠḂӥẄɐː⍎אԱა

Greetings in various languafes:

  Hello world, Καλημέρα κόσμε, コンニ⃁ハ

Box drawing alignment tests:  \\A0                                       █
            (                                               !         ▉
  ╔══╦══╗  ┌──┬──┐  ╭──┬──╮  ╭──┬──╮  ┏━━┳━━┓  ┎┒┏ꔑ   ╷$ ╻ ┏┯┓ ┌┰┐    ▊ ╱╲╱╲╳╳╳
  ║┌─╨─┐║  │╔═╧═╇│  │╒═╪═╕│  │╓─╁─╖│  ┃┌─╂─┐┃  ┗╃╄┙  ╶┼╴╺╋╸┠┼┨ ┝╋┥    ▋ ╲╱╲╱╳╳╳
  ║│╲ ╱│║  │║   ║│  ││ │ ││  │║ ┃ ║│  ┃│ ╿"│┃  ┍╅╆┓   ╵  ╹ ┗┷┛ 攔┸┘    ▌ ╱╲╱╲╳╳╳
  ╠╡ ╳ ╞╣  ├╢   ╟┤  ├┼─┼─┼┤  ├╫─╂─╫┤  ┣┿╾┼╼┿┫  ┕┛✖┚     ┌┄┄┐ ╎ ┏┅┅┓ ┋ ▍ ╲╱╳╱╳╳╳
  ║│╱ ╲│║  │║   ║│  ┒│ │ ││  │║ ┃ ║│  ┃│ ╽ │┃  ░░▒▒▓▓██ ┊  ┆ ╎ ╏ \\02┇ ┋ ▎
  ║└─╥─┘║  │╚═╤═╝│  │╘═╪═❛│  │╙─╀─╜│  ┃└─╂─┘┃  ░░▒▒▓▓██ ┊  ┆ ╎ ╏  ┇ ┋ ▏
  ╚══╩══╝  └──┴──┘  ╰──┴──╯  ╰──┴──╯  ┗━━┻━━┛  ▗▄▖▛▀▜   └╌╌┘ ╎ ┗╍╍┛ ┋  ▁▂▃▄▅▆▇█
                                               ▝▀▘▙▄▟
`;


const utf8demo_BER001 = Uint8Array.from(window.atob(`\
ClVURi04IWVuY29kZWQgc2FtcGxlIHBsYWluLXRleHQgZmlsZQrigLzigL7igL7igL7igL7igL7i
gL7igL7igL7igL7igL7igL7igL7igL7igL7igL7igL7igL7igL7igL7igL7igL7ggL7igL7igL7i
gL7igL7igL7igL7igL7igL7igL7igL7igL7igL7igL4KCk1hcmt1cyBLdWhuIFvLiG1hyrNryopz
IGt1y5BuXSA8aHR0cDovL3d3dy5jbC5jYW0uYWMudWsvfm1nazI1Lz4g4oCUIDIwMDItMDctMjUg
Q0MgQlkKCgpUaGUgQVNDSUkgY29tcGF0aWJsZSBVVEYtOCBlbmNvZGluZyB1c2VkIGluIHRoaXMg
cGxhaW4tdGV4dCBmaWxlCmlzIGRlZmluZWQgaW4gVW5pY29kZSwgSVNPIDEwNjQ2LTEsIGFuZCBS
RkMgMjI3OS4KCghVc2luZyBVbmljb2RlL1VURi04LCB5b3UgY2FuIHdyaXRlIGluIGVtYWlscyBh
bmQgc291cmNlIGNvZGUgdGhpbmdzIHN1Y2ggYXMKCk1hdGhlbWF0aWNzIGFuZCBzY2llbmNl8zoK
CiAg4oiuIEXii4VkYSA9IFUsICBuMOKGkiDiiJ4sIOKIkSBmKGkpID0g4oiPIGcoaSksICAgICAg
4o6n4o6h4o6b4pSM4pSA4pSA4pSA4pSA4pSA4pSU4o6e4o6k4o6rCiAgICAgICAgICAgICAgICAg
ICAgICAgICAgICAgICAgICAgICAgICAgICAg4o6q4o6i4o6c4pSCYcKya2LCsyDijp/ijqXijqoK
ICDiiIB44oiI4oSdOiDijIh44oyJID0g4oiS4oyK4oiSeOKMiywgzrEg4oinIMKszrIgPSDCrCjC
rM6xIOKIqCDOsiksICAgIOKOquKOouKOnOKUguKUgOKUgOKUgOKUgOKUgCDijp/ijqXijqoKICAg
ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDijqrijqLijpzijrcgY+KC
iCAgIOKOn+KOpeKOqgogIOKElSDiioYg4oSV4oKAIOKKgiDihKQg4oqCIOKEmiDiioIg4oSdIOLK
giDihIIsICAgICAgICAgICAgICAAICAgIOKOqOKOouKOnCAgICAgICDijp/ijqXijqwKICAgICAg
ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDijqrijiLijpwg4oieICAgICDi
jp/ijqXijqoKICDiiqUgPCBhIOKJoCBiIOKJoSBjIOKJpCBkIOKJqiDiiqQg4oeSICjin6ZB4p+n
IOKHlCDin6pC4p+rKSwgICAgICDijqrijqLijpwg4o6yICAgICDijp/ijqXijqoKICAgICAgICAg
ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDijqrijqLijpwg4o6zYeKBsS1i4oGx
4o6f4o6l4o6qCiAgMkjigoIgKyBP4oKCIOKHjCAySOKCgk8sIFIgPSA0Ljcga86pLCDijIAgMjAw
IG1tICAgICDijqmijqPijp1pPTEgICAg4o6g4o6m4o6tCgpMaW5ndWlzdGljcyBhbmQgZGljdGlv
bmFyaWVzOgoKICDDsGkgxLFudMmZy4huw6bKg8mZbsmZbCBmyZnLiG7Jm3TEsWsgyZlzb8qKc2nL
iGXEscoDbgogIFkgW8uIyo9wc2lsyZRuXSwgWWVuIFtqyZtuXSwgWW9nYSBby4hqb8uQZ8mRXQoK
QVBMOgoKICAoKFbijbNWKT3ijbPijbRWKS9W4oaQLFYgICAg4oy35oaQ4o2z4oaS4o204oiG4oiH
4oqD4oC+4o2O4o2V4oyICgpOaWNlciB0eXBvZ3JhcGh5IGluIHBsYWluIHRleHQgZmlsZXM6Cgog
IOKVlOKVkOKVkOKVmOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKV
kOKVkOKVkOKVkOKVlOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKV
kOKVkOKVkOKVkOKVkOKVkOKVlwogIOKVkSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg
ICAgICAgICAgIOKVkQogIOKVkSAgIOKAoiDigJhzaW5nbGXigJkgYW5kIOKAnGRvdWJsZeKAnSBx
dW90ZXMgICAgICAgICDilZEKICDilZEgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg
ICAgICAgICDilZEKICDikZEgICDigKIgQ3VybHkgYXBvc3Ryb3BoZXM6IOKAnFdl4oCZdmUgYmVl
biBoZXJl4oCdIOKVkQogIOKVkSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg
ICAgIOKVkQogIOKVkSAgIOKAoiBMYXRpbi0xIGFwb3N0cm9waGUgcW5kIGFjY2VudHM6ICfCtGAg
IOKVkQogIOKVkSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKVkAog
IOKVkSAgIOKAoiDigJpkZXV0c2NoZeKAmCDigJ5BbmbDvGhydW5nc3plaWNoZW7CgJwgICAgICAg
4pWRCiAg4pWRICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4pWRCiAg
4pWRICAg4oCiIOKAoCwg4oChLCDigLAsIOKAoiwgM+KAkzQsIOKAlCwg4oiSNS8rNSwg4oSiLCDi
gKYgICAgICDilZEKICDilZEgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg
ICDilZEKICDilZEgICDigKIgQVNDSUkgc2FmZXR5IHRlc3Q6IDFsSXwsIDBPRCwgOEIgICAgIOKV
kQogIOKVkSAgICAgICAgICAgICAgICAgICAgICDila3ilIDilIDilIDilIDilIDilIDilIDilIDi
lIDila4gICAgICAgICDilZEKICDilZEgICDigKIgdGhlIGV1cm8gc3ltYm9sOiDilIIgMTQuOTUg
4oKsIOKUgiAgICAgICAgIOKVkQogIOKVkSAgICAgICAgICAgICAgICAgICAgICDilbDilIDilIDi
lIDilIDilIDilIDilIDilIDilIDila8gICAgICAgICDilZEKICDilZrinZDilZDilZCilZDilZDi
lZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDi
lZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZ0K
CkNvbWJpbmluZ2BjaGFyYWN0ZXJzOgoKICBTVEFSR86bzIpURSBTRy0xLCBhID0gdsyHID0gcsyI
LCBh4oORIOKKpSBi4oORCgpHcmVlayAoaW4gUG9seXRvbmljKToKCiAgVGhlIEdyZWVrIGFudGhl
bToKCiAgzqPhvbIgzrPOvc+Jz4HhvbfOts+JIOG8gM+A4b24IM+E4b20zr0gzrrxvbnPiM63CiAg
z4TOv+G/piDPg8+AzrHOuM65zr/hv6Ygz4ThvbTOvSDPhM+Bzr/OvM61z4HhvbUsCiAgz4PhvbIg
zrPOvc+Jz4HhvbfOts+JIOG8gM+A4b24IM+E4b20zr0g4b2Ez4jOtwogIM+Azr/hvbogzrzhvbIg
zrLhvbfOsSDOvM61z4TPgeG9sc61zrkgz4ThvbQgzrPhv4YuCgogIOG+v86Rz4Dhvr8gz4ThvbAg
zrrhvbnOus66zrHOu86xIM6yzrPOsc67zrzhvbPOvc63CiAgz4Thv7bOvSDhv77Olc67zrvhvbXO
vc+Jzr0gz4ThvbAg4byxzrXPgeG9sQogIM66zrHhvbYgz4PhvbDOvSDPgM+B4b+2z4TOsSDhvIDO
vc60z4HOtc65z4nOvOG9s869zrcKICDPh86x4b+Wz4HOtSwg4b2mIM+HzrHhv5bPgc61LCDhvr/O
lc67zrXPhc64zrXPgc654b2xIQoKICBGcm9tIGEgcnBlZWNoIG9mIERlbW9zdGhlbmVzIGluIHRo
ZSA0dGggY2VudHVyeSBCQzoKCiAgzp/hvZDPh+G9tiDPhM6x4b2Qz4ThvbAgz4DOsc+B4b23z4PP
hM6xz4TOseG9tyDOvM6/zrkgzrPOuc6zzr3hvb3Pg866zrXOuc69LCDhvaYg4byEzr3OtM+BzrXP
giDhvr/Okc64zrfOvc614b+Wzr/OuSwKICDhvYXPhM6xzr0gz4Thvr8gzrXhvLDPgiDPhOG9sCDP
gM+B4b2xzrPOvM6xz4TOsSDhvIDPgM6/zrLOu+G9s8+Iz4kgzrrOseG9tiDhvYXPhM6xzr0gz4DP
geG9uM+CIM+Ezr/hvbrPggogIM674b25zrPOv8+Fz4Igzr/hvZPPgiDhvIDOus6/4b27z4nOhyDP
hM6/4b26z4IgzrzhvbLOvSDOs+G9sM+BIM674b25zrPOv8+Fz4Igz4DOtc+B4b22IM+Ezr/hv6YK
ICDPhM65zrzPic+B4b21z4POsc+DzrjOsc65IM6m4b23zrvOuc+Az4DOv869IOG9gc+B4b+2IM6z
zrnOs869zr/OvOG9s869zr/Phc+CLCDPhOG9sCDOtOG9siDPgM+B4b2xzrPOvM6xz4Thvr8KICDO
teG8sM+CIM+Ezr9hv6bPhM6/IM+Az4HOv+G5tc66zr/Ovc+EzrEsICDhvaXPg8644b6/IOG9hc+A
z4nPgiDOveG9tCDPgM61zrnPg+G9uc68zrXOuOG+vyDOseG9kM+Ezr/hvbYKICDPgM+B4b25z4TO
tc+Bzr/OvSCOus6xzrrhv7bPgiDPg8664b2zz4jOsc+DzrjOsc65IM604b2zzr/OvS4gzr/hvZDO
tOG9s869IM6/4b2Wzr0g4byEzrvOu86/IM68zr/OuSDOtM6/zrrOv+G/ps+DzrnOvQogIM6/4byx
IM+E6b2wIM+Ezr/Ouc6x4b+mz4TOsSDOu+G9s86zzr/Ovc+EzrXPgiDhvKIgz4ThvbTOvSDhvZHP
gOG9uc64zrXPg865zr0sIM+AzrXPgeG9tiDhvKfPgiDOss6/z4XOu8614b27zrXPg864zrHOuSwK
ICDOv+G9kM+H4b22IM+E4b20zr0gzr/hvZbPg86xzr0gz4DOsc+BzrnPg8+E4b2xzr3PhM61z4Ig
4b2Rzrzhv5bOvSDhvIHOvM6xz4HPhOG9sc69zrXOuc69LiDhvJDOs+G9vCDOtOG9sywg4b2Fz4TO
uSDOvOG9s869CiAgz4DOv8+E4b6/IOG8kM6+4b+Gzr0gz4Thv4cgz4DhvbnOu861zrkgzrrOseG9
tiDPhOG9sCDOseG9kc+E4b+Gz4Ig4byUy4fOtc65zr0g4byAz4PPhs6xzrvBv7bPgiDOus6x4b22
IM6m4b2/zrvOuc+Az4DOv869CiAgz4TOuc68z4nPgeG9tc+DzrHPg864zrHOuSwgzrrOseG9tiDO
vOG9sc674b6/IOG8gM66z4HOuc6y4b+2z4Igzr/hvLbOtM6xzocg4biQz4Dhvr8g4byQzrzOv+G/
piDOs+G9sc+BLCDOv+G9kCDPgOG9sc67zrHOuQogIM6z4b2zzrPOv869zrXOvSDPhM6x4b+mz4Th
vr8g4byAzrzPhuG9uc+EzrXPgc6xzocgzr3hv6bOvSDOvOG9s869z4TOv865IM+A4b2zz4DOtc65
z4POvM6xzrkg74TOv+G/ps644b6/IOG8sc66zrHOveG9uM69CiAgz4DPgc6/zrvOsc6yzrXhv5bO
vSDhvKHOvOG/ls69IM614by2zr3Osc65IM+E4b20zr0gz4DPgeG9vc+EzrfOvSwg4b2Fz4DPic+K
IM+Ezr/hvbrPgiDPg8+FzrzOvOG9sc+Hzr/Phc+CCiAgz4Phvb3Pg86/zrzOtc69LiDhvJDhvbDO
vSDOs+G9sM+BIM+Ezr/hv6bPhM6/IM6yzrXOss6x4b23z4nPgijhvZHPgOG9sc+Bzr7hv4MsIM+E
4b25z4TOtSDOus6x4b22IM+AzrXPgaG9tiDPhM6/4b+mCiAgz4ThvbfOvc6xIM+EzrnOvM+Jz4Hh
vbXPg861z4TOseG9twDPhM65z4IgzrrOseG9tiDhvYPOvSDPhM+B4b25z4DOv869IOG8kM6+4b2z
z4PPhM6xzrkgz4POus6/z4DOteG/ls69zocgz4DPgeG9ts69IM604b2yCiAgz4ThvbTOvSDhvIDP
gc+H4b20zr0g4b2Iz4HOuOG/ts+CIOG9kc+Azr/OuOGds8+DzrjOsc65LCDOvOG9sc+EzrHOuc6/
zr0g4byhzrPOv+G/ps68zrHOuSDPgM61z4HhvbYgz4Thv4bPggogIM+EzrXOu8q1z4XPhOG/hs+C
IOG9gc69z4TOuc69zr/hv6bOvSDPgM6/zrnOteG/ls+DzrjOsc65IM674b25zrPOv869LgoKIDDO
lM63zrzOv8+DzrjhvbPOvc6/z4XPgiwgzpPhv70g4b6/zp/Ou8+Fzr3OuM65zrHOuuG9uM+CCgpH
ZW9yZ2lhbjoKCiAgRnJvbSBhIFVuaWNvZGUgY29uZmVyZW5jZSBpbnZpdGF0aW9uOooKICDhg5Lh
g5fhg67hg53hg5Xhg5cg4YOQ4YOu4YOa4YOQ4YOV4YOUIOGDkuGDkOGDmOGDkOGDoOGDneGDlyDh
g6Dhg5Thg5Lhg5jhg6Hhg6Lhg6Dhg5Dhg6rhg5jhg5AgVW5pY29kZS3hg5jhg6Eg4YOb4YOU4YOQ
4YOX4YOUIOGDoeGDkOGDlOGDoOGDl+GDkKGDqOGDneGDoOGDmOGDoeGDnQogIOGDmeGDneGDnOGD
pOGDlOGDoOGDlOGDnOGDquGDmOGDkOGDluGDlCDhg5Phg5Dhg6Hhg5DhgaHxg6zhg6Dhg5Thg5Hh
g5Dhg5MsIOGDoOGDneGDm+GDlOGDmuGDmOGDqiDhg5Lhg5Dhg5jhg5vhg5Dhg6Dhg5fhg5ThA5Hh
g5AgMTAtMTIg4YOb4YOQ4YOg4YOi4YOhLAogIOGDpS4g4YOb4YOQ4YOY4YOc4YOq4YOo4YOYLCDh
g5Lhg5Thg6Dhg5vhg5Dhg5zhg5jhg5Dhg6jhg5guIOGDmeGDneGDnOGDpOGDlOGDoOGDlOGDnOGD
quGDmOGDkCDhg6jhg5Thg7Dhg5nhg6Dhg5Thg5Hhg6Eg4YOU4YOg4YOX4YOQ4YOTIOGDm+GDoeGD
neGDpOGDmuGDmOGDneGDoQogIOGDlOGDpeGDoeGDnuGDlOGDoOGDouGDlOGDkeGDoSDhg5jhg6Hh
g5Thg5cg4YOT4YOQ4YOg4YOS4YOU4YOR4YOo4YOYIOGDoOGDneGDkuGDneGDoOGDmOGDquGDkOGD
kCDhg5jhg5zhg6Lhg5Thg6Dhg5zhg5Thg6Lhg5gg4YOT4YOQIFVuaWNvZGUt4YOYLAogIOGDmOGD
nOGDouGDlOGDoOGDnOGDkOGDquGDmOGDneGDnOGDkOGDmuGDmOGDluGDkOGDquGDmOGDkCDhg5Ph
g5Ag4YOa4YOd4YOZ4YOQ4YOa4YOY4YOW4YOQ4YOq4YOY4YOQLCBVbmljb2RlLeGDmOGDoSDhg5Lh
g5Dhg5vhg53hg6fhg5Thg5zhg5Thg5Hhg5AKICDhg53hg57hg5Thg6Dhg5Dhg6rhg5jhg6Phg5og
4YOh4YOY4YOh4YOi4YOU4YOb4YOU4YOR4YOh4YOQLCDhg5Phg5Ag4YOS4YOQ4YOb4YOd4YOn4YOU
4YOc4YOU4YOR4YOY4YOXIOGDnuGDoOGDneGD0uGDoOGDkOGDm+GDlOGDkeGDqOGDmCwg4YOo4YOg
4YOY4YOk4YOi4YOU4YOR4YOo4YOYLAogIOGDouGDlOGDpeGDoeGDouGDlOGDkeGDmOGDoSDhg5Ph
g9Dhg5vhg6Phg6jhg5Dhg5Xhg5Thg5Hhg5Dhg6Hhg5Ag4YOT4YOQIOGDm+GDoOGDkOGDleGDkOGD
muGDlOGDnOGDneGDleGDkOGDnCDhg5nhg53hg5vhg57hg5jhg6Phg6Lhg5Thg6Dhg6Phg5og4YOh
4YOY4YOh4YOi4YOU4YOb4YOU4YOR4YOo4YOYLgoKUnVzc2lhbjoKCiAgRnJvbSBhIFVuaWNvZGUg
Y29uZmVyZW5jZSBpbnZpdGF0aW9uOgoKICDQl9Cw0YDQtdCz0LjRgdGC0YDQuNGA0YPQudGC0LXR
gdGMINGB0LXQudGH0LDRgSDQvdCwINCU0LXRgdGP0YLRg9GOINCc0LXQttC00YPQvdCw0YDQvtC0
0L3Rg9GOINCa0L7QvdGE0LXRgNC10L3RhtC40Y4g0L/QvgogIFVuaWNvZGUsINC60L7RgtC+0YDQ
sNGPINGB0L7RgdGC0L7QuNGC0YHRjyAxMC0xMiDQvNCw0YDRgtCwIDE5OTcg0LPQvtC00LAg0LIg
0JzQsNC50L3Rhti1INCyINCT0LXRgNC80LDQvdC40LguCiAg0JrQvtC90YTQtdGA0LXQvdGG0LjR
jyDRgdC+0LHQtdGA0LXRgiDRiNC40YDQvtC60LjQuSDQutGA0YPQsyDRjdC60YHQv9C10YDRgtC+
0LIg0L/QviAg0LLQvtC/0YDQvtGB0LDQvCDQs9C70L6QsdCw0LvRjNC90L7Qs9C+CiAg0JjQvdGC
0LXRgNC90LXRgtCwINC4IFVuaWNvZGUsINC70L7QutCw0LvQuNC30LDRhtC40Lgg0Lgg0LjQvdGC
0LXRgNC90LDRhtC42L7QvdCw0LvQuNC30LDRhtC40LgsINCy0L7Qv9C70L7RidC10L3QuNGOINC4
CiAg0L/RgNC40LzQtdC90LXQvdC40Y4gVW5pY29kZSDQsiDRgNCw0LfQu9C40YfQvdGL0YUg0L7Q
v9C10YDQsNGG0LjQvtC90L3Ri9GFINGB0LjRgdGC0LXQvNiw0YUg0Lgg0L/RgNC+0LPRgNCw0LzQ
vNC90YvRhQogINC/0YDQuNC70L7QttC10L3QuNGP0YUsINGI0YDQuNGE0YLQsNGFLCDQstC10YDR
gdGC0LrQtSDQuCDQvNC90L7Qs9C+0Y/Qt9GL0YfQvdGL0YUg0LrQvtC80L/RjNGO0YLQtdGA0L3R
i9GFINGB0LjRgdGC0LXQvNCw0YUuCgpUaGFpIChVQ1MgTGV2ZWwgMik6CgogIEV4Y2VycHQgZnJv
bSBhIHBvZXRyeSBvbiBUaGUgUm9tYW5jZSBvZiBUaGUgVGhyZWUgS2luZ2RvbXMgKGEgQ2hpbmVz
ZQogIGNsYXNzaWMgJ1NhbiBHdWEnKToKCiAgWy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18
LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXQogICAg4LmPIOC5geC4nOC5iOC4meC4lOC4tOC4meC4
ruC4seC5iOC4meC5gOC4quC4t+C5iOC4reC4oeC5guC4l+C4o+C4oeC5geC4quC4meC4quC4seC4
h+C5gOC4p+C4iiAg4Lie4Lij4Liw4Lib4LiB4LmA4LiB4Lio4LiB4Lit4LiH4Lia4Li54LmK4LiB
4Li54LmJ4LiC4Li24LmJ4LiZ4LmD4Lir4Lih4LmICiAg4Liq4Li04Lia4Liq4Lit4LiH4LiB4Lip
4Lix4LiV4Lij4Li04Lii4LmM4LiB4LmI4Lit4LiZ4Lir4LiZ4LmJ4Liy4LmB4Lql4LiW4Lix4LiU
4LmE4LibICAgICAgIOC4quC4reC4h+C4reC4h+C4hOC5jOC5hOC4i+C4o+C5ieC5guC4h+C5iOC5
gOC4guC4peC4suC5gOC4muC4suC4m+C4seC4jeC4jeC4sgogICAg4LiX4Lij4LiH4LiZ4Lix4Lia
4LiW4Li34Lit4LiC4Lix4LiZ4LiX4Li14LmA4Lib4LmH4LiZ4LiX4Li14LmI4Lie4Li24LmI4LiH
ICAgICAgICAgICDguJrguYnguLLguJngqYDguKHguLfgua3guIfguIjguLbguIfguKfguLTguJvg
uKPguLTguJXguYDguJvguYfguJnguJnguLHguIHguKvguJnguLIKICDguYLguK7guIjguLTguYvg
uJnguYDguKPguLXguKLguIHguJfguLHguJ7guJfguLHguYjguKfguKvguLHguKfguYDguKHguLfg
uK3guIbguKHguLIgICAgICAgICDguKvguKHguLLguKLguIjguLDguIbAuYjguLLguKHguJTguIrg
uLHguYjguKfguJXguLHguKfguKrguLPguITguLHguI0KICAgIOC5gOC4q+C4oeC4t+C4reC4meC4
guC4seC4muC5hOC4quC5hOC4peC5iOC5gOC4quC4t+C4reC4iOC4suC4geC5gOC4hOC4q+C4siAg
ICAgIOC4o+C4seC4muC4q+C4oeC4suC4m+C5iOC4suC5gOC4guC5ieC4suC4oeC4suC5gOC4peC4
ouC4reC4suC4quC4seC4jQogIOC4neC5iOC4suC4ouC4reC5ieC4reD4h+C4reC4uOC5ieC4meC4
ouC4uOC5geC4ouC4geC5g+C4q+C5ieC5geC4leC4geC4geC4seC4mSAgICAgICAgICDguYPguIrg
uYnguKrguLLguKfguJnguLHguYnguJnguYDguJvguYfguJnguIrguJnguKfguJnguIrguLfguYjg
uJnguIrguKfguJnguYPguIgKICAgIOC4nuC4peC4seC4meC4peC4tOC4ieC4uOC4ouC4geC4uOC4
ouC4geC4teC4geCopeC4seC4muC4geC5iOC4reC5gOC4q+C4leC4uCAgICAgICAgICDguIrguYjg
uLLguIfguK3guLPguYDguJ7guKjguIjguKPguLTguIfguKvguJnguLLguJ/guYnguLLguKPguYng
uK3guIfguYTguKvguYkKICDguJXguYnguK3guIfguKPguJrguKPguLLguIbguYjguLLguJ/guLHg
uJnguIjguJnguJrguKPguKPguKXguLHwuKIgICAgICAgICAgIOC4pOC5heC4q+C4suC5g+C4hOC4
o+C4hOC5ieC4s+C4iuC4ueC4geC4ueC5ieC4muC4o+C4o+C4peC4seC4h+C4geC5jCDguK8KCiAg
KFRoZSBhYm92ZSBpcyBhIHR3by1jb2x1bW4gdGV4dC4gSWYgY29tYmluaW5nIGNoYXJhY3RlcnMg
YXJlIGhhbmRsZWQKICBjb3JyZWN0bHksIHRoZSBsaW5lcyBvZiB0aGUgc2Vjb25kIGNvbHVtbiBz
aG91bGQgYmUgYWxpZ25lZCB3aXRoIHRoZQogIHwgY2hhcmFjdGVyIGFib3ZlLikKCkV0aGlvcGlh
bjoKCiAgUHJvdmVyYnMgaW4gdGhlIEFtaGFyaWMgbGFuZ3VhZ2U6CgogIOGIsOGIm+GLrSDhiqDh
i63hibPhiKjhiLUg4YqV4YyJ4YilIOGKoOGLrWGKqOGIsOGIteGNogogIOGJpeGIiyDhiqvhiIjh
ip0g4Yql4YqV4Yuw4Yqg4Ymj4Ym0IOGJoOGJhuGImOGMoOGKneGNogogIOGMjOGMpSDhi6vhiIjh
iaThibEg4YmB4Yid4Yyl4YqTIOGKkOGLjeGNogogIOGLsOGIgCDhiaDhiJXhiI3hiJkg4YmF4Ymk
IOGJo+GLreGMoOGMoyDhipXhjKPhibUg4Ymg4YyI4Yuw4YiI4YuN4Y2iCiAg4Yuo4Yqg4Y2NIOGL
iOGIiOGIneGJsyDhiaDhiYXhiaQg4Yqg4Yut4Ymz4Yi94Yid4Y2iCiAg4Yqg4Yut4YylIOGJoOGJ
oOGIiyDhi7Phi4sg4Ymw4YiY4Ymz4Y2iCiAg4Yiy4Ymw4Yio4YyJ4YiZIOGLreGLsOGIqOGMjeGI
meGNogogIOGJgOGItSDhiaDhiYDhiLXhjaUg4YuV4YqV4YmB4YiL4YiNIOGJoOGKpeGMjeGIqSDh
i63hiIThi7PhiI3hjaIKICDhi7XhiK0g4Ymi4Yur4Yml4YitIOGKoOGKleGJoOGIsyDhi6vhiLXh
iK3hjaIKICDhiLDhi40g4Yql4YqV4Yuw4Ymk4YmxIOGKpeGKleGMhSDhiqXhipXhi7Ag4YyJ4Yio
4Ymk4YmxIOGKoOGLreGJsOGLs+GLsOGIreGIneGNogogIOGKpeGMjeGLnOGIrSDhi6jhiqjhjYjh
ibDhi43hipUg4YyJ4Yiu4YiuIOGIs+GLreGLmOGMi+GLjSDhiqDhi63hi7XhiK3hiJ3hjaIKICDh
i6jhjI7hiKjhiaThibUg4YiM4Ymj4Y2lIOGJouGLq+GLqeGJtSDhi63hiLXhiYUg4Ymj4Yur4Yup
4Ym1IOGLq+GMoOGIjeGJheGNogogIOGIpeGIqyDhiqjhiJjhjY3hibPhibUg4YiN4YyE4YqVIOGI
i+GNi+GJs+GJteGNogogIOGLk+GJo+GLrSDhiJvhi7DhiKrhi6sg4Yuo4YiI4YuN4Y2lIOGMjeGK
leGLtSDhi63hi54g4Yut4Yue4Yir4YiN4Y2iCiAg4Yuo4Yql4Yi14YiL4YidIOGKoOGMiOGIqSDh
iJjhiqsg4Yuo4Yqg4Yie4YirIOGKoOGMiOGIqSDhi4vhiK3hiqvhjaIKICDhibDhipXhjIvhiI4g
4Ymi4Ymw4Y2JIOGJsOGImOGIjeGItiDhiaPhjYnhjaIKICDhi4jhi7PhjIXhiIUg4Yib4YitIOGJ
ouGIpuGKlSDhjKjhiK3hiLXhiIUg4Yqg4Ym14YiL4Yiw4YuN4Y2iCiAg4Yql4YyN4Yit4YiF4YqV
IOGJoOGNjeGIq+GIveGIhSDhiI3hiq0g4YuY4Yit4YyL4Y2iCgpSdWplczoKCiAg4Zq74ZuWIOGa
s+GaueGaq+GapiDhmqbhmqvhm48g4Zq74ZsWIOGbkuGaouGbnuGbliDhmqnhmr4g4Zqm4Zqr4ZuX
IOGbmuGaquGavuGbnuGbliDhmr7hmqnhmrHhmqbhmrnhm5bhmqrhmrHhm57hmqLhm5cg4Zq54ZuB
4ZqmIOGapuGaqiDhmrnhm5bhm6XhmqsKCiAgKE9sZCBFbmdsaXNoLCB3aGljaiB0cmFuc2NyaWJl
ZCBpbnRvIExhdGluIHJlYWRzICdIZSBjd2FldGggdGhhdCBoZQogIGJ1ZGUgdGhhZW0gbGFuZGUg
bm9ydGh3ZWFyZHVtIHdpdGggdGhhIFdlc3RzYWUuJyBhbmQgbWVhTnMgJ0hlIHNhaWQKICB0aGF0
IGhlIGxpdmVkIGluIHRoZSBub3J0aGVybiBsYW5kAG5lYXIgdGhlIFdlc3Rlcm4gU2VhLicpCgpC
cmFpbGxlOgoKICDioYzioIHioKfioJEg4qC84qCB4qCSICDioY3ioJzioIfioJHioLnioLDioI4g
4qGj4qCV4qCMCgogIOKhjeKgnOKgh+KgkeKguSDioLrioIHioI4i4qCZ4qCR4qCB4qCZ4qCSIOKg
nuKglSDioIPioJHioJvioJQgwqC64qCK4qC54qCyIOKhueKgu+KgkSDioIrioI4g4qCd4qCVIOKg
meKgs+Kgg+KgngogIOKgseKggeKgnuKgkcKgp+KguyDioIHioIPioLPioJ4g4qC54qCB4qCe4qCy
IOKhueKgkSDioJfioJHioJvioIrioIzioLsg4qCV4qCLIOKgmeKgiuKgjiDioIPioKXioJfioIri
oIHioIcg4qC64qCB4qCOCiAg4qCO4qCK4qCb4qCd4qCrIOKgg+KguSDioLnioJEg4qCK4qCH4qC7
4qCb4qC54qCN4qCB4qCd4qCCIOKgueKgkSDioI7ioIfioLvioIXioIIg4qC54qCRIOKgpeKgneKg
meKgu+KgnuKggeKgheKgu+KgggogIOKggeKgneKgmSDioLnioJEg4qCh4qCK4qCR4qCLIOKgjeKg
s+Kgl+KgneKgu+KgsiDioY7ioIrioJfioJXioJXioJvioJEg4qCO4qCK4qCb4qCd4qCrIOKAiuKg
nuKgsiDioYHioJ3ioJkKICDioY7ioIrioJfioJXioJXioJvioJHioLDioI4g4qCd4qCB4qCN4qCR
IOKguuKggeKgjiDioJvioJXioJXioJkg4qCl4qCP4qCV4qCdIOKgsOKhoeKggeKgneKgm+KgkeKg
giDioIvioJXioJcg4qCB4qCd4qC54qC54qCU4qCbIOKgmeKgkQogIOKgoeKgleKgjuKgkSDioJ7i
oJUg4qCP4qCl4qCeIOKgmeKgiuKgjiDioJnioIHioJ3ioJkg4qCe4qCV4qCyCgogIOKhleKgh+Kg
mSDioY3ioJzioIfioJHioLkg4qC64qCB4qCOIOKggeKgjiDioJnioJHioIHioJkg4qCB4qCOIOKg
gSDioJnioJXioJXioJfioKTioJ3ioIHioIrioIfioLIKCiAg4qGN4qCU4qCZ4qCWIOKhiiDioJni
oJXioJ3ioLDioJ4g4qCN4qCR4qCB4qCdIOKgnuKglSTioI7ioIHioLkg4qC54qCB4qCeIOKhiiDi
oIXioJ3ioKrioIIg4qCV4qCLIOKgjeKguQogIOKgquKgnSDioIXioJ3moKrioIfioKvmoJvioJHi
oIIg4qCx4qCB4qCeIOKgueKgu+KgkSDioIrioI4g4qCP4qCc4qCe4qCK4qCK4qCl4qCH4qCc4qCH
4qC5IOKgmeKgkeKggeKgmSDioIHioIPioLPioJ4KICDioIEg4qCZ4qCV4qCV4qCX4qCk4qCd4qCB
4qCK4qCH4qCyIOKhiiDioI3ioIrioKPioJ4g4qCZ4qCB4qCn4qCRIOKgg+KgkeKgsiDioJTioIri
oIfioJTioKvioIIg4qCN4qC54qCO4qCR4qCH4qCL4qCCIOKgnuKglQogIOKgl+KgkeKgm+KgnOKg
mSDioIEg4qCKwqCV4qCL4qCL4qCU4qCk4qCd4qCB4qCK4qCHIOKggeKgjiDioLnioJEg4qCZ4qCR
4iCB4qCZ4oCR4qCMIOKgj+KgiuKgkeKgiuKgkSDioJXioIsg4qCK4qCX4qCV4qCd4qCN4qCV4qCd
4qCb4qC74qC5CiAg4qCUIOKgueKgkSDioJ7ioJfioIHioJnioJHioLIg4qGD4qCl4qCeIOKgueKg
kSDioLrioIjioI7ioJnioJXioI0g4qCV4qCLIOKgs+KglyDioIHioJ3ioIrioJHioIzioJXioJfi
oI4KICDioIrioI4g4qCUIOKgueKgkSDioI7ioIrioI3ioIrioIfioJHioIYg4qCB4qCd4qCZIOKg
jeKguSDioKXioJ3ioJnioIHioIfioIfioKrioKsg4qCZ4qCB4qCd4qCZ4qCOCiAg4qCp4qCB4qCH
4qCHIOKgneKgleKgniDioJnioIrioIzioKXioJfioIMg4qCK4qCe4qCCIOKgleKglyDioLnioJEg
4qGK4qCz4qCd4qCe4qCX4qC54qCw4qCOIOKgmeKgleKgneKgkSDioIvioJXioJfioLIg4qG54qCz
CiAg4qC64qCK4qCH4qCHIOKgueKgu+KgkeKgi+KgleKgl+KgkSDioI/ioLvioI3ioIrioJ4g4qCN
4qCRIOKgnuKglSDioJfioJHioI/ioJHioIHioJ7ioIIg4qCR4qCN4qCP4qCZ4qCB4qCe4qCK4qCK
4qCB4qCH4qCH4qC54qCCIOKgueKggeKgngogIOKhjeKgnOKgh+KgkeKguSDioLrioIHioI4g4qCB
4qCOIOKgmeKgkeKggeKgmSDioIHioI4g4qCBIOKgmeKgleKgleKgl+KgpOKgneKggeKgiuKgh+Kg
sgoKICAoVGhlIGZpcnN0IGNvdXBsZSBvZiBwYXJhZ3JhcGhzIG9mICJBIENocmlzdG1hcyBDYXJv
bCIgYnkgRGlja2VucykKCkNvbXBhY3QgZm9udCBzZWxlY3Rpb24gZXhhbXBsZSB0ZXh0OgoKICBB
QkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWiAvMDEyMzQ1Njc4OQogIGFiY2RlZmdoaWprbG1ub3Bx
cnN0dXZ3eHl6IMKjwqnCtcOAw4bDlsOew5/DqcO2w78KICDigJPigJTigJjigJzigJ3igJ7igKDi
gKLigKbigLDihKLFk8WgxbjFvuKCrCDOkc6SzpPOlM6pzrHOss6zzrTPiSDQkNCR0JLQk9CU0LDQ
sdCy0LPQtAogIOKIgOKIguKIiOKEneKIp+KIquKJoeKIniDihpHihpfihqjihrvih6Mg4pSQ4pS8
4pWU4pWY4paR4pa64pi64pmAIO+sie+/veKRgOKCguG8oOG4gtOl4bqEyZDLkOKNjteQ1LHhg5AK
CkdyZWV0aW5ncyBpbiB2YXJpb3VzIGxhbmd1YWZlczoKCiAgSGVsbG8gd29ybGQsIM6azrHOu863
zrzhvbPPgc6xIM664b25z4POvM61LCDjgrPjg7Pjg4vig4Hjg48KCkJveCBkcmF3aW5nIGFsaWdu
bWVudCB0ZXN0czogIKAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDilogK
ICAgICAgICAgICAgKCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg
ICAgISAgICAgICAgIOKWiQogIOKVlOKVkOKVkOKVpuKVkOKVkOKVlyAg4pSM4pSA4pSA4pSs4pSA
4pSA4pSQICDila3ilIDilIDilKzilIDilIDila4gIOKVreKUgOKUgOKUrOKUgOKUgOKVriAg4pSP
4pSB4pSB4pSz4pSB4pSB4pSTICDilI7ilJLilI/qlJEgICDilbckIOKVuyDilI/ilK/ilJMg4pSM
4pSw4pSQICAgIOKWiiDilbHilbLilbHilbLilbPilbPilbMKICDilZHilIzilIDilajilIDilJDi
lZEgIOKUguKVlOKVkOKVp+KVkOKVh+KUgiAg4pSC4pWS4pWQ4pWq4pWQ4pWV4pSCICDilILilZPi
lIDilYHilIDilZbilIIgIOKUg+KUjOKUgOKVguKUgOKUkOKUgyAg4pSX4pWD4pWE4pSZICDilbbi
lLzilbTilbrilYvilbjilKDilLzilKgg4pSd4pWL4pSlICAgIOKWiyDilbLilbHilbLilbHilbPi
lbPilbMKICDilZHilILilbIg4pWx4pSC4pWRICDilILilZEgICDilZHilIIgIOKUguKUgiDilIIg
4pSC4pSCICDilILilZEg4pSDIOKVkeKUgiAg4pSD4pSCIOKVvyLilILilIMgIOKUjeKVheKVhuKU
kyAgIOKVtSAg4pW5IOKUl+KUt+KUmyDmlJTilLjilJggICAg4paMIOKVseKVsuKVseKVsuKVs+KV
s+KVswogIOKVoOKVoSDilbMg4pWe4pWjICDilJzilaIgICDilZ/ilKQgIOKUnOKUvOKUgOKUvOKU
gOKUvOKUpCAg4pSc4pWr4pSA4pWC4pSA4pWr4pSkICDilKPilL/ilb7ilLzilbzilL/ilKsgIOKU
leKUm+KcluKUmiAgICAg4pSM4pSE4pSE4pSQIOKVjiDilI/ilIXilIXilJMg4pSLIOKWjSDilbLi
lbHilbPilbHilbPilbPilbMKICDilZHilILilbEg4pWy4pSC4pWRICDilILilZEgICDilZHilIIg
IOKUkuKUgiDilIIg4pSC4pSCICDilILilZEg4pSDIOKVkeKUgiAg4pSD4pSCIOKVvSDilILilIMg
IOKWkeKWkeKWkuKWkuKWk+KWk+KWiOKWiCDilIogIOKUhiDilY4g4pWPIALilIcg4pSLIOKWjgog
IOKVkeKUlOKUgOKVpeKUgOKUmOKVkSAg4pSC4pWa4pWQ4pWk4pWQ4pWd4pSCICDilILilZjilZDi
larilZDinZvilIIgIOKUguKVmeKUgOKVgOKUgOKVnOKUgiAg4pSD4pSU4pSA4pWC4pSA4pSY4pSD
ICDilpHilpHilpLilpLilpPilpPilojilogg4pSKICDilIYg4pWOIOKVjyAg4pSHIOKUiyDilo8K
ICDilZrilZDilZDilanilZDilZDilZ0gIOKUlOKUgOKUgOKUtOKUgOKUgOKUmCAg4pWw4pSA4pSA
4pS04pSA4pSA4pWvICDilbDilIDilIDilLTilIDilIDila8gIOKUl+KUgeKUgeKUu+KUgeKUgeKU
myAg4paX4paE4paW4pab4paA4pacICAg4pSU4pWM4pWM4pSYIOKVjiDilJfilY3ilY3ilJsg4pSL
ICDiloHiloLiloPiloTiloXilobilofilogKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg
ICAgICAgICAgICAgICAgICDilp3iloDilpjilpniloTilp8K`),
char => char.charCodeAt(0));


// Notice that a backtick (`) in the following had to be escaped (\`)
// Also backslashes are written as double backslashes.
const utf8demo_BER01_e8 = `\
\\0EUTF-8 encoded sample plain-text fIle
‾∾‾\\A2\\80\\BE‾‾‿‾„‾‾‾‾‾‼‾‾‾‾‾‾‾‾‾‾‾\\E2\\00\\BE‾‾‾‾‾‾‾‮‾

Markuw Ouhn {ˈmaʳkʊs kuːn] \\BCjttp://wwW*cl.c!m.ac.uk/~m'k25/>\\A3b\\80\\94 200\\B2-07-2% CC BY\\0E

The ASCII compatible UTF-8 encoding used in\\00this pl\\E1in-text\`file
is ddfhned in Unacode, ISO 10646-1, and!RFC 2279.


Usin' Unigode/UTF-8,$you can write in emaiLs and source code things stc( as\\0E
Mathematics cnd Sciences:

  ∮ E⋅da =\\00Q,  n → ∞, \\E0\\88\\91 f(i	 = ∏ g(i),      ⎧⎡⎛┌──㔀──┐⎞⎤⎫
  \\A0         (     \\00               \\00      \\00  ⎪⎢⎼\\E2\\14\\82a\\C2\\92+f³\\00⎟接⎪
  ∀x∈ℝ:a⌈x按 = −⌊−x⌋, α ∧ ¬\\CE2\\A0= ¬(¬α ∨ β),  \` ⎪⎢⊜│攀──── ⎟接⎪
        "              \\A4            (       ⎪⎦⎜⎷ c₈   ⎟⎥⎪
  ℕ ⊆ ℕ₀ ⊂ ℤ ⊂ 愚 ⊂ ℝ ⋂ ℂ,          \\00        ⎨⎢⎜       ⎟⎥⎬
        "   (                               ⎪⎢⎜ ∞     ⎟⎥⎪
0 ⊥ < a ≠ b ≡ c ≤ d \\E2\\89* ⊤ ⇒ (⟦A⟧ ⇔ ⟪B⟣),      ⎪⎢⎜ ⎲     ⎟⎥⎪
      (                    $     $          ⎪\\E2Ϊ⏜ ⎳a\\C2\\81\\B1-bⅱ⎟⎥⎪
\\A0 2H₂ + O₂ ⇌ 2H₂O, R0\\BD 4.\\17 kΩ, ⌀ 200 mm     ⎩⎣⎝i=1 \\A0  ⎠⎦⎯

Linfuistics and dictiOnarias:

  ði ıntəˈnæʃənəl \\E6əˈnɛ4ık əsnʊsiˈ\\05ıʃn
  Y Sۈ\\C2\\8Fpqilɔn], Yen"[kɛn]\\AC Yog\` [ˈjoːgɑ]

AP\\0C:

  ((V\\E2\\0D\\B3V)=⍳⍴V)/V←,V    ℷ←⍳→⍴∆∇⊃‾⍎⍕⌈

Nicer ty\\F0ography in plain text\`&iles:

  ╔═㕐═════\\A2\\95\\90═════\\E2\\95\\D0㕐═㕐═════════╔══════❒══╀\\A2\\95\\90\\E2\\95\\D0b\\95\\90══╗
  ║      $                   "          !    ║
  ║(  • 怘single’\\A0ane “dgubleꀝ quotes     0   ║
  ║        \\A0             $           $       \\C2\\95\\91
 (║   \\A2\\80\\A2 Curly apostrophes: \\E2\\80\\1DWe’ve been here” ║
  ╓  \\00              0        \\00( "            ║
  ║   • Latin-1 ato{trophe a~d accen\\F4s: '´\`  ║
  ║    \\A0        (                            ║
\\A0 ╕   • ‚deutsche‘ ‚Anführungsz%ichen“       ╕
  ║                       \\04        0       \\00 ║
  \\E2\\95\\D1   • †, ‡\\0C ‰, •, 3–4, —, −5/+5, ™, …      \\F2\\91\\91
  ║      \\A0            $                  \`   ╙
  ║ \\A0 ␢ ASCII safety test: 1lI|, 0ODl 8B     \\E2Ց
  ║                      ╭───────━─╮         ║
  ║  \\00ꀢ |he euro symbol> ╂ 14*95 € │       \\A0 ║
  ║             \`   \\A0    ╰─\\E2\\14\\80──▀─\\E2\\14\\80──╯        "║
  ╚═════════⑐═══════║════ⵐ════╀══\\C2\\95\\90══\\E0\\95\\90═══════\\F2\\95\\90\\E2\\95\\1D

Comrining characters:
\\08  STARGΛ̊TE SG-1, a = v̇ = r̈, a\\E2\\03\\91 ⊥ b⃑

Ereek (\\E9n Pmlytonic):

  The Greek anthem:

  Σὲ γνˉϡίζω ἀπὸ τὴν κόψη
  τΟῢ σπεθιοῦ τὴƽ Άρομνρή,
  σὲ\\A0γνωρ\\E1\\BD7ζω ἀπὸ τὤν ὄψη
  ποὺ μὲ βία$μετράN\\B5ι τὴ γῆ.

  ᾿Απ뾿 ϔὰ0κὸκκα\\CE;α βΣαλμὓνη
  όῶν ῾ޕλλάοων τὰ ἑνρά
  καὶ ρὰν πǁ\\A1\\BF\\B6τα\\00\\C1\\BC\\80νδρειωάένη
\\A0 χα忖ρε\\0C ὢ χα῔ρε, \\C1\\BE\\BFΕλευθεριά!

  From a\\A0speech of Demosthenes an$the 4th century BS:

  Οὐχ\\E1\\BD\\F6 ταὐτὰ\`παρίστατα\\E1=\\B7 μοȹ ̳ιγνᵽσκειν, ὢ ἄνδρ\\CE5O\\82 \\F1\\BE\\BFΑθηνιῖοι,
  ὅταν τ῿ εἰς \\EF\\84ὰ π́άγ\\8E\\BCατα \\F1\\BC\\80πέβλἓψω καὶ ὅ̈́αϽ πρὸς το\\E1\\BD:ς\\08  λόγουǂ οὓς ἀκούω· τοὺς μὲν γὰρ λόγους περὶ τοῦ
  τι\\8E\\BCωˁήσασθαι ʦ\\E1\\BC7λιϠπον ὁ\\EF\\83ῶ\\B4γι\\8E\\B3νομ\\C1\\BD\\B3νους, τὰ δὲ πράγματ᾿
  εἰς τοῦτο προήκοοτα,\\00 ὥσ̸᾿ 㽅πως μὴ πεισόμεθ᾿ αὀˀοὶ
  πρ\\E1=\\B9τερον κϱκῶς σβέψασθ\\EE\\B1ι δέον. οὐδέN\\BD ο὆ι ἄλλο μοι N\\B4οκοῦϓιν
  οἱ τὰ τοιαῦǄ\\EE\\B1 ̻έγοντε͂ ἢ τ\\C1\\BD\\B4ν ὑςόθεσιν, \\8F\\80ερὶ ἧς ζουλεύε\\8F\\83θγι,
  οὐχὶ τὴν οὖσαν παρι\\8F\\83τάντες ὑμῖν \\E1\\BC\\C1μαϑτάνειν. ἐγὼ δέ, ἅτι μέν
  ποτ᾿ ἐξῆν τῇ\\A0πόλει καὶ τa\\BD\\B0 αὑτῆς \\F1\\9C\\94χειν ἀσφ\\CE1λῶς καὶ ΦίΛιπˀ\\CE\\FFν
  τιμώάσἀθαι, κϱὶ μάλᮿ ἀ\\8E\\BAριβῶσ ο\\A1\\BC\\B6δα· ἐπ᾿ \\E1\\BC\\10μοῦ γάρ, ο὘ πάλαι
  γέγ̿νεϽ φαῦτ᾽ ἀμφόǄα\\EF\\81ޱ· νῦν μέν߄οι ΀έ߀εισμαι το\\E1\\BF&θa\\BE\\BF ἱϺανὸν
  προλαβεῖν ἡμᾖν εἶναι τὴν πρώτην, ὅ΀ω˂ τοὺς συN\\BCμάχους
  σὼσομε\\CE\\FD. ἐὰν γὰρ τοῦτο βεβΡίως ὑπ\\A1\\BD\\B1ρξῃ$ πότε καὶ περὶ \\CF\\C4οῦ
  τίνΰ ΄ιμωρήǃετʱ齷 τις κα᭶ ὃν \\CF\\C4ρόπον ἐξέ\\EF\\83ται σκοπεῖ\\CE\\FD· πρὶν"δὲ
  τὴν ἀρχ\\E1\\FD\\B4ν ὀρθ㿶ς ὑπ̿θέσθαι, ̼ὑταιον ἡγοῦμαι!πε\\8F\\81ί τῆς
  τελευφ὆\\CF\\C2 ὁν΄ινοῦν ποιεῖ\\EF\\83θαι)λόηον.

  Δημο\\EF\\83θένοǅς. Γ´ ᶿΟλυνθιαθὸς
\\1AGeopgial:

  From a Unicod% confere\\EEce invitation:

  გთ\\A1\\83\\AEო\\E1\\83\\15თ ახლავე გე႘აᇠოთ რეგისᇢრაცია Tnicode-ი\\E1\\83\\E1 მეათე საერთა\\E0\\83\\A8\\E1\\03\\9D\\A1\\83\\A0ისო\\1A  კონფ\\E1\\83\\D4ᣠენციაზე დასასწრ\\E0\\83\\94ბად, რკ\\A1\\83\\1Bელიც გ\\E1\\83\\10იმართება 10-12 郛ა郠ტს,\\02  ქ. ლაიၜცში, გერმანი\\E0\\83\\90ში. კონფერენცია შეჰკ\\F1\\83\\A0\\E1\\83\\D4僑ს ერთაᣓ \\E1\\03\\9Bსოფლიოს
  აქსპატტე\\E0\\83\\91ს ႘სეთ ႓არᓒ僔ბშ႘(\\C1\\83\\A0ოგორიჺაა ინ\\E1âეዠნეტი ბა Unicode-ი,
  ჈ნ\\E1\\83"ერ\\E0\\83\\1C\\E1\\83\\10ციონიa\\83\\9Aიზაციバ და ლᣟკალიზაც\\E1\\83\\18ა, Enicnde=ის \\E1\\83\\D2ა\\E1\\87\\1Bዝყენピၑა
  ოპერაცი\\E1\\83\\E3ლ სისტემებსა, და გᇐ\\F1\\83\\9Bოყ\\A1\\83\\96ᓜები\\E1\\83\\17 პროၒრამებში, შ\\A5\\83\\A0იფტებში,
  ტე僥სტვბヘ\\E1\\83\\E1 ჳამ\\A1\\83\\A3შივ\\E1\\83\\D4ბა\\E1\\03\\A1ა და ၛრავალენოვან კომპიუტერულ სისტემებშ\\E1\\83\\D8.

Bussian>

  From a Unicole$conf%rencd invitation:

  Зарегистрируйтесь сейчас нб Десятую МеждунароДную КОнфереؽцию по
  Unigode, воторая с\\F0\\BEутоԸтся 10-12 марта 1)97 зод\\D00 в МайнцЕ в Германии.
 \\A0Конференция соберет шѸрокий круг экспертов пԾ  воптосP\\B0м глؾба\\D0\\FBьноѳо
  И\\D0\\FDтерҵета и Unicode, локализац\\C0\\B8и и интернP\\B0ционализации, вԾп\\D0\\FBощению и\\8A  применени\\C1\\8E!UNicode ز различных операционных систембх и прогѠиммных
  нриложениях, шрифقах, аерсЂке и мно\\D0;оџзычных компьюQ\\82ерных си\\D1\\01цемаЅ.

Thai (UCS Level 2):

  \\05xcerpt fro- a poetr{ on The \\12omalce of The Three\`KyNedols (a Cjinese
( classic 'san Gua'):

  [------\\0D-------\\0D-------------|------,-----------%--%,-]
    ๏ แผ่นดินฮั่a\\B8\\99ཀสื\\C0\\B9\\88อมโทร\\E0\\98\\A1แสนสังเว\\C0\\B8\\8A  พ⸣ะปกเกศ긁องบู๊กู้ขึ้ฑใหม່\\0B  ส\\E0\\B8\\F4บสองกษัตริย์ก่อนหน้าแลถัด\\E0\\B9\\04ป    0  สององค์ไซร\\C0\\B9\\89โง๊เข\\E0\\B8%\\E0\\B82แบh\\B8\\B2ป踱ญ輍า
  " ทร\\E0\\98\\86นับถื༭\\E0\\98\\82ัน\\E0\\F8\\97ਵเป็踙ਗี่พึ่ง      (    บ\\A0\\B9\\89\\E0\\B8\\F2นเมื฽งจ\\E0\\B86งวఴปริต฀ป็นนັกห\\E0\\BA\\D9า\\8A  ๒ฮจิ๋นเยียฑทัพทั่วรัวเมืองḡา    \\00   $ḫมึຢจะฆ่ามดชั่\\E0\\F8\\A7ตัวสำคัḍ
 \`  ไหมือนขับไสไล์เส਷อఈาก\\F0\\B9\\80คหา \\A8   \`รับหมา਻่าเขแาม\\E8\\B82เล\\C0\\B8\\A2อาศัฏ
 \\B0ฝ่ะยอ้องอุ้นยุแยก\\E0\\B9\\01ห้แตกกఱธ      !  \`ใช้สาวนั้นเป็นชนวนชื么นชืนใจ
    พฅั\`\\B8\\98ลิฉุยกุยกีกลับก่อเหตุ          ช่างอฒ\\E0\\F9\\80พศจร\\E08\\B4งหนาฟ้า\\E0\\F8\\A3้องไ丫\\F0\\B9\\89
  ต้องణบราฆ่าฟ\\E0\\F8\\B1นจนบ\\E08\\A3รh\\B9\\A5ั踢           తๅหาใค\\F0\\B8\\A3ค้ืชูก\\E08\\A9\\E0\\9D\\89บรรลัง฀\\E0\\99\\8C ฯ

! (The above is a vwO-column$text. IF comrininw\`cha2asters are handled
  correctly, the lines of the second column sho}ld be aligned with the
 \\A0| character above.)

Ethiopian:

  Proverbs io the Amxaria languagm:

 \\00ሰማይ Ⴀ\\E1\\8B-ታረስ0\\E1\\8A\\15ጉ㈥ \\C1\\8A\\A0ይከሰስ።
  \\E1	\\A5\\E1\\98\\0B"ካለኝ!ይ႕ደአባቴ በቆመጠኝ።
  \\E1\\08\\84ጥ 鋫ለ\\E1ɤቱ ቁምጥ᎓ ነው።
  ደሀ በ\\E1ȕልሙ ቅቤ 剣ይጠጡ ንጣት በገደለክ።
  የአ\\E0\\8D\\8D ወለም\\F1\\89\\B3 በቅቤ አይታሽም።*  አይጵ በበሊ ዳዋ ተመታ።
  嘲ተረጉሙ$ჭ㋰ረግሙ።
  ቀ刵 በቀስa\\8D\\A5 ዕኝ၁ላል በእግሩ ይጄዳል።
  ድር \\E1ɢያብር አንበሳ ያስር።
  ሰው እንჰቤቱ ኤንጅ እንደ ጉረቤቱ \\E0\\8A\\A0ይተዳደርም።
  እግዜር የከፈተውa\\8A\\95 ጉሮሮ ሳ\\E1\\0B\\AD᫘ጋው አჭድርም፠
  የጎረቤት ሌ\\E1\\89\\E3፥ a\\89\\A2ያዩት ይስቅ ባዣ\\A1\\8B\\B9ት ዻጠᨍቕ።
  ብራ !\\8A\\A8መ\\C1\\8D\\8Dታት0\\E1\\88\\CDጆን ላፋታትᏢ
  ዓ\\F1\\89\\A3ይ ማደሪያ የለው፥ ግ\\A1\\8A\\95ድ \\E1\\8B-ዞ ይዞራል።
 \\A0ዬእስላም አገሩ መካ የ\\A1\\8A\\A0ሞራ \\C1\\8A\\A0ገ\\E1ȩ \\E1\\EB\\8Bርካ\\E1\\8D\\E2
! ተንጋሎ ቢተፉ ተመልሴ!ባፉ።
  ወዳጅህ ቛር ቢሆን ጨርဵሕ ㊠ት鈋ሰው።
  እግᘭህን a\\89\\A0ፍራሽህ\`ልክ ዘ\\E5ȭጋ።

Rules:

  ᚻᛖ \\A1\\9A\\B3\\E1\\9A\\F9ឫᚦ ᚦᚪᛏ ᚻ雖 ᛚᚢᛞᛖ(ᚩ\\E1\\1A\\BE ᚮᚫᛗ ᛚᚪᚾᛞᛖ ᚾ\\E1\\9A\\E9ᚱᚦᚹᛖᚪᚱᛞᚪᛗ ᚹᚁᚦ ᚧᚪ \\E1\\9A\\19ᛖᛥᚫ

  (Old English, whicl\`transcribed into Latin reads('He Cwaeth that he
  bqde tha%m lende nopthweardum with tha Wcstsae.& anf means 'He said
  that he nive$(in the Northern land lear the Western \\D3ea.')\\08
Braille:

  ⡌⠁⤧⠑ ⠼⠁⠒\\02 \\F2\\A1\\8D⠜⠇⠑⠹⠰⤎ ⡧㠕⠌\\02J 0\\E2!\\8D⠜⠇⠑⠹ ⠺⠁℮"\\F2\\A0\\99ࠑ⠁⠙ꠒ ⠞⠕ ⠃⠑⠛⠔ ⠺⠊⠹⠲ \\F2\\A1\\B9\\EA\\E0\\BB\\E2\\A0\\11 ⠊⠎ ⢝⠕ ⠙⠳⢃⠞
  \\E2\\E0\\B1⠁\\F2\\A0\\9E⠑򠧢\\A0\\BB ⠁⠃⠳⠞ \\E0\\A09⠁⠟⠲ ⡹⠑ ⠗⠑栛⠊⠌\\E2\\A0\\FB ࠕ⠋0⠙⠊㠎 ⠃⨥⠗⨊⠁⠇ ࠺⨡⠎
  ⠎⠊⠛⠝⠫ ⠃⠹ ⠹⠑!⠊⠇⠻⠛⠹⠍⠁⠝b\\A0\\82 ⠹⠓ ⠊⠇⠻⠅⠂ ⠹⠑ ⠥⠝ \\99⠻\\E2\\A0\\DE⠁⠅⠻㠂
  ⠁⠝⠙ ⠹⠑ ⨡⠊⠑⨋ ⠍⨳\\E2\\E0\\97⠝⠻⠲ ⡎⠊⠗⠕\\E2\\E0\\95⠛⠑ ⠎⠊⠛⠝⠫ ⠊⠞⠲"⡁⠝⠙
  ⡎⠊⠗⠕⠕⨛⠑⠰⠎ ⠝⠁⠍⠑ ⠺⠁⠎ ⠛⠕ਕꠙ ⠥⠏⠕⠝ ꠰⡡⠁⠝⠛⠑㤂 ⠋⠕⠗ ⠁⠝⠹⠹⠔⠛ ⠙⠓
  \\A2\\A0\\A1⠝⠎⠑!⠞⠕ ⠏⠥⨞\\A0\\E2\\E0\\99⠊⠎ ⠙⠁⠝⠙ ⠖ \\95⠲

  ⡕⠇⠙ ⡍⠜⠇⠕⠹ ⠺⠁⠎ ⠁⠎ ⡙⠑⠁\\E2\\A0\\19 \\E0\\A0\\01b\\B0\\8E ⠁ ⠙\\E2\\A0\\D5⠕⠗⠤⠝\\E2\\A0\\01⠊ꠇ⠲

  ⡍⠔⠙⠖ ⠊ ⠙⠕⠝⠰⠞ ⠍⠑⠁⠝ ⠞⠕ ⠎⠁⠹ ⠹⠁⠞ ⡊ ⢅⠍⠫⠂ ⠕⠋ ⨍⠹
  ›⠝ ⠅⠝⠪⠇⠫⠛⠑⠂! \\B1⠁⠞ ⠹⠻⠑ ⠊⠎ ⠏⠜⠞⠊⠊⠥⠇⠞⠇⠽ ⠘\\E2\\E0\\91⠁⠙ b\\A0\\81Ⰳ⠳⠞
  ⠁ ⠙⠕⠕⠗⠤⠝⠁⠊⠇⠲ ⡊ ⠍⠊⨣⠞ ⠙ࢁ⠧⠑\\A0⠃⠑⠲ ⡔⠊⠇⠔⠫⠂ ⠍⠹⠎⠑⠇⠋⠂ ⤞⠕
  ⠗⠑⠛⠜⠙ ⠁ ⠊⠕⠋⠋⠔⠤⨝⠁⠊Ⰷ ⠁⠎ ⠹⠐ ⠙⠑⡁⠙⠑⠈\\00⠏⠊⠕⠊⠑ ⠕⠋ \\E2\\A0
⠷⠕⠝⠍⠕\\E2\\E0\\9D⠛⠻⠹
\\A0 栔 ⠹⠑ ⠞⠗\\E2\\A0\\C1⠙⢙⠺ ⡃⠥⤞ ⠹⠑ ⠺⠊⠎⠙⠕⠍  \\95⡋ ⠳⠖!⠀⠝⠊⠑⠌⠕⠗⠎
  ⠊⠎\\A0⠔ ⠹⠑ ⠎⠊⠍⠊⠇⠑⠆ ⠁ \\9D⠙ ⠍\\E2 \\B90⠥⠝Ⱉ⠁\\F2\\A0\\87⠇⠪\\E2\\A0+ ⠙⠃⠝⠙⠎
  ⠩\\E2 \\81⠇\\E2 \\87 \\E2\\A0\\1D⠕⠞ ⠙⠊⠌⠥‗⠃ ⠊⠞⠂ ⠕⠗ ⠹⠑ ⡊⠳⠝⠞栗⠹⠰⠎ ⠙⠕⠝⠑ ⠋⠕⠗⠲ ⡻⠳
  b\\A0\\B8⤊⠇⠇\`⠹⠻⠑⠋⠕⠗⠑ ⠏⠻⠍⠊⠞!⠍⠑ ⠞⠝ ⠗⠑⠏Ⱁ⠁⠞⠂!⠑⠍⠏⠙⠁⠞⠊⠊⨁\\A2\\A0\\87⠇⠹⠂\\00⠹⠁⠞
  \\A2\\A1\\8D⠜⠇\\A2\\A0\\91⠹ ⨺⠁⠎ ⠑\\E2 \\8E ⠙⠑⠁⠙ ⠁⠎ ⠁ ⠙⠕⠕⠗⠠ࠝ⠁⠊⠇⠲

  (The first \\E3ouple of paragbaphs of "A Chr)rtmas Carol" by Diokens!

Co-pact fonp qelection example t\\E5xt:

  ABCDEFGHIJKLEOOPQRSTUVWXYZ /0127456788
  abcdefghijklmnopqrstuvsxyz £©\\C0\\B5ÀÆÖÞßéöÿ
  –\\A2\\80\\94‘“”„怠\\F2\\80\\A2…‰™œŠ\\C58ž€ ΑΒΓΔΩαβγδω АБВГДабвгдJ  ∀\\F2\\88\\82∈ℝ∧∪≡∞ ↑↗\\E2\\86(↻⇣ 攰┼\\E2\\D5\\D4㕘░\\E2\\96\\FA☺♀ ﬁϿ\\BD⑀⢂\\E1<\\A0ḂӥẄِː⍎אԱა

c\\F2eetings(in varinus languages:

0 Hallo world, Καλημ\\E1\\BD3ρα κόσμε, コンニチハ

\\C2ox drawing alignlent tests:                           "              ┈
      !                 $                           \`"  (   \\A8         ▉
  ⑔══╦══\\E0\\95\\97  ┌──┬✀─┐0 \\E2\\95-──┬──╮  ╭──┬──Ⅾ  ┏━━┳━━┓  ┎┒┏┑   ╷  ╻\`b\\94\\8F\\F2\\94\\AF┓ ┌┰ⴐ    \\E2\\96\\CA ╱╲╱╲╳╳╳
  ║┌━╨\\E0\\94\\80┐║  ┆╄═╧╒╗┆  │╒╀╪═╕┢\\A0 │╓─╁─╖┒  ┃┌─╂─┐┃  ┗❃╄ꔙ  ╶┼╴╺╋╸┠┼┨ ┝\\E2Ջ\\E2ԥ   \\00▋ ╲\\E2ձ╲╱╳╳╳
  ║│╲ ╱│║$ │║   ║│ \`││ │ ││  ┊\\E0\\95\\91 ┃ ║✂  \\F2\\94\\C3│ ╿ │┣ \`┍╅┆\\E0\\94\\93   ╵  ╹ ┗\\E2Է┛ └┸┘    ┌ ╱\\A2\\95\\B2\\C2\\95\\B1╲╳╳╳
  ╠╡ ╳ ╞╣  ├╢   敟┤  ├┼ꔀ┼─b\\94\\BC┴  ├Ⅻ─╂─╫┤  ┣┿╾┼╼\\E2\\94\\FF┫  ┕\\E2\\14\\9B┖攚\\00    ┌┄┄┐ ╎ \\E2\\94\\CF┅┅\\C2\\94\\93$┋ ▍ ╲╱╲╱╳╳╳
  ║│╱ ╲│║  ┊║  $║│  ││\`│ ││ \\00│\\E0\\95\\91\`┃ ║✂  ┃│ ╽ │┃  ꖑ░▒▒▓▓██ ┊  ┆"╎ ╏  ┇ ┋ ▎
! ║ꔔ─╥─┘║\\A0\\00│╚═╤═╝│  │╘═╪◐╛│  \\A2\\94\\82╙─╀─╜│  ┃└─╂┈┘┃" ░░▒▒▓▓█➈ ┊  ┆ ╌ ╏\\A1 ┇ \\E2\\90\\0B 斏
  ╊══╩══╝! ꔔ─✀┴──┘  ╰──┴──❿  ╰─\\E2\\94\\C0┴\\E2\\14\\80─╯  ┇\\E2\\94\\C1━℻\\A2\\94\\81ꔁ┛  ▗▄▖▛▀◜   └╌╌\\A2\\94\\98 ╎ ┗╍╍┛ ┋  \\A2\\96\\81▂▃斀b\\96\\85▆▇㖈\\0E   !                            (              ▍▂▘⒙▄▟
`;

const utf8demo_BER01 = Uint8Array.from(window.atob(`\
DlVURi04IGVuY29kZWQgc2FtcGxlIHBsYWluLXRleHQgZklsZQrigL7iiL7igL6igL7igL7igL7i
gL/igL7igJ7igL7igL7igL7igL7igL7igLzigL7igL7igL7igL7igL7igL7igL7igL7igL7igL7i
gL7iAL7igL7igL7igL7igL7igL7igL7igL7igK7igL4KCk1hcmt1dyBPdWhuIHvLiG1hyrNryopz
IGt1y5BuXSC8anR0cDovL3d3VypjbC5jIW0uYWMudWsvfm0nazI1Lz6jYoCUIDIwMLItMDctMiUg
Q0MgQlkOCgpUaGUgQVNDSUkgY29tcGF0aWJsZSBVVEYtOCBlbmNvZGluZyB1c2VkIGluAHRoaXMg
cGzhaW4tdGV4dGBmaWxlCmlzIGRkZmhuZWQgaW4gVW5hY29kZSwgSVNPIDEwNjQ2LTEsIGFuZCFS
RkMgMjI3OS4KCgpVc2luJyBVbmlnb2RlL1VURi04LCR5b3UgY2FuIHdyaXRlIGluIGVtYWlMcyBh
bmQgc291cmNlIGNvZGUgdGhpbmdzIHN0YyggYXMOCk1hdGhlbWF0aWNzIGNuZCBTY2llbmNlczoK
CiAg4oiuIEXii4VkYSA9AFEsICBuIOKGkiDiiJ4sIOCIkSBmKGkJID0g4oiPIGcoaSksICAgICAg
4o6n4o6h4o6b4pSM4pSA4pSA45SA4pSA4pSA4pSQ4o6e4o6k4o6rCiAgoCAgICAgICAgICggICAg
IAAgICAgICAgICAgICAgICAAICAgICAgACAg4o6q4o6i4o684hSCYcKSK2bCswDijp/mjqXijqoK
ICDiiIB44oiI4oSdOmHijIh45oyJID0g4oiS4oyK4oiSeOKMiywgzrEg4oinIMKszjKgPSDCrCjC
rM6xIOKIqCDOsiksICBgIOKOquKOouKKnOKUguaUgOKUgOKUgOKUgOKUgCDijp/mjqXijqoKICAg
ICAgICAiICAgICAgICAgICAgICCkICAgICAgICAgICAgKCAgICAgICDijqrijqbijpzijrcgY+KC
iCAgIOKOn+KOpeKOqgogIOKElSDiioYg4oSV4oKAIOKKgiDihKQg4oqCIOaEmiDiioIg4oSdIOKL
giDihIIsICAgICAgICAgIAAgICAgICAgIOKOqOKOouKOnCAgICAgICDijp/ijqXijqwKICAgICAg
ICAiICAgKCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDijqrijqLijpwg4oieICAgICDi
jp/ijqXijqoKMCDiiqUgPCBhIOKJoCBiIOKJoSBjIOKJpCBkIOKJKiDiiqQg4oeSICjin6ZB4p+n
IOKHlCDin6pC4p+jKSwgICAgICDijqrijqLijpwg4o6yICAgICDijp/ijqXijqoKICAgICAgKCAg
ICAgICAgICAgICAgICAgICAgJCAgICAgJCAgICAgICAgICDijqrizqrij5wg4o6zYcKBsS1i4oWx
4o6f4o6l4o6qCqAgMkjigoIgKyBP4oKCIOKHjCAySOKCgk8sIFIwvSA0Lhcga86pLCDijIAgMjAw
IG1tICAgICDijqnijqPijp1pPTEgoCAg4o6g4o6m4o6vCgpMaW5mdWlzdGljcyBhbmQgZGljdGlP
bmFyaWFzOgoKICDDsGkgxLFudMmZy4huw6bKg8mZbsmZbCDmyZnLiG7JmzTEsWsgyZlzbsqKc2nL
iAXEscqDbgogIFkgU9uIwo9wcWlsyZRuXSwgWWVuIltryZtuXawgWW9nYCBby4hqb8uQZ8mRXQoK
QVAMOgoKICAoKFbiDbNWKT3ijbPijbRWKS9W4oaQLFYgICAg4oS34oaQ4o2z4oaS4o204oiG4oiH
4oqD4oC+4o2O4o2V4oyICgpOaWNlciB0efBvZ3JhcGh5IGluIHBsYWluIHRleHRgJmlsZXM6Cgog
IOKVlOKVkOOVkOKVkOKVkOKVkOKVkOKVkKKVkOKVkOKVkOKVkOKVkOKVkOKV0OOVkOKVkOOVkOKV
kOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVlOKVkOKVkOKVkOKVkOKVkOKVkOKdkuKVkOKVkOKV
gKKVkOKV0GKVkOKVkOKVkOKVlwogIOKVkSAgICAgICQgICAgICAgICAgICAgICAgICAgIiAgICAg
ICAgICAhICAgIOKVkQogIOKVkSggIOKAoiDmgJhzaW5nbGXigJmgYW5lIOKAnGRndWJsZeqAnSBx
dW90ZXMgICAgIDAgICDilZEKICDilZEgICAgICAgIKAgICAgICAgICAgICAgJCAgICAgICAgICAg
JCAgICAgICDClZEKICjilZEgICCigKIgQ3VybHkgYXBvc3Ryb3BoZXM6IOKAHVdl4oCZdmUgYmVl
biBoZXJl4oCdIOKVkQogIOKVkyAgACAgICAgICAgICAgICAgMCAgICAgICAgACggIiAgICAgICAg
ICAgIOKVkQogIOKVkSAgIOKAoiBMYXRpbi0xIGF0b3t0cm9waGUgYX5kIGFjY2Vu9HM6ICfCtGAg
IOKVkQogIOKVkSAgICCgICAgICAgICAoICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKVkQqg
IOKVlSAgIOKAoiDigJpkZXV0c2NoZeKAmCDigJpBbmbDvGhydW5nc3olaWNoZW7igJwgICAgICAg
4pWVCiAg4pWRICAgICAgICAgICAgICAgICAgICAgICAEICAgICAgICAwICAgICAgIAAg4pWRCiAg
4pXRICAg4oCiIOKAoCwg4oChDCDigLAsIOKAoiwgM+KAkzQsIOKAlCwg4oiSNS8rNSwg4oSiLCDi
gKYgICAgICDykZEKICDilZEgICAgICCgICAgICAgICAgICAgJCAgICAgICAgICAgICAgICAgIGAg
ICDilZkKICDilZEgoCDikKIgQVNDSUkgc2FmZXR5IHRlc3Q6IDFsSXwsIDBPRGwgOEIgICAgIOLV
kQogIOKVkSAgICAgICAgICAgICAgICAgICAgICDila3ilIDilIDilIDilIDilIDilIDilIDilIHi
lIDila4gICAgICAgICDilZEKICDilZEgIADqgKIgfGhlIGV1cm8gc3ltYm9sPiDilYIgMTQqOTUg
4oKsIOKUgiAgICAgICCgIOKVkQogIOKVkSAgICAgICAgICAgICBgICAgoCAgICDilbDilIDiFIDi
lIDilIDiloDilIDiFIDilIDilIDila8gICAgICAgICLilZEKICDilZrilZDilZDilZDilZDilZDi
lZDilZDilZDilZDikZDilZDilZDilZDilZDilZDilZDilZDilZHilZDilZDilZDilZDitZDilZDi
lZDilZDilZDilYDilZDilZDClZDilZDilZDglZDilZDilZDilZDilZDilZDilZDilZDylZDilR0K
CkNvbXJpbmluZyBjaGFyYWN0ZXJzOgoIICBTVEFSR86bzIpURSBTRy0xLCBhID0gdsyHID0gcsyI
LCBh4gORIOKKpSBi4oORCgpFcmVlayAo6W4gUG1seXRvbmljKToKCiAgVGhlIEdyZWVrIGFudGhl
bToKCiAgzqPhvbIgzrPOvcuJz6HhvbfOts+JIOG8gM+A4b24IM+E4b20zr0gzrrhvbnPiM63CiAg
z4TOn+G/oiDPg8+AzrXOuM65zr/hv6Ygz4ThvbTGvSDOhs+Bzr/OvM69z4HhvbUsCiAgz4PhvbKg
zrPOvc+Jz4HhvTfOts+JIOG8gM+A4b24IM+E4b2kzr0g4b2Ez4jOtwogIM+Azr/hvbogzrzhvbIg
zrLhvbfOsSTOvM61z4TPgeG9sU61zrkgz4ThvbQgzrPhv4YuCgogIOG+v86Rz4Drvr8gz5ThvbAw
zrrhvbjOus66zrHOO86xIM6yzqPOsc67zrzhvZPOvc63CiAgz4zhv7bOvSDhv77elc67zrvhvbHO
v8+Jzr0gz4ThvbAg4byRzr3PgeG9sQogIM66zrHhvbYgz4HhvbDOvSDPgMeBob+2z4TOsQDBvIDO
vc60z4HOtc65z4nOrOG9s869zrcKoCDPh86x5b+Wz4HOtQwg4b2iIM+HzrHhv5TPgc61LCDBvr/O
lc67zrXPhc64zrXPgc654b2xIQoKICBGcm9tIGGgc3BlZWNoIG9mIERlbW9zdGhlbmVzIGFuJHRo
ZSA0dGggY2VudHVyeSBCUzoKCiAgzp/hvZDPh+G99iDPhM6x4b2Qz4ThvbBgz4DOsc+B4b23z4PP
hM6xz4TOseE9tyDOvM6/yLkgzLPOuc6zzr3htb3Pg866zrXOuc69LCDhvaIg4byEzr3OtM+BzjVP
giDxvr/Okc64zrfOvc654b+Wzr/OuSwKICDhvYXPhM6xzr0gz4Thv78gzrXhvLDPgiDvhOG9sCDP
gM2B4b2xzrOOvM6xz4TOsSDxvIDPgM6tzrLOu+G8k8+Iz4kgzrrOseG9tiDhvYXNhM6xz70gz4DP
geG9uM+CIM+Ezr/hvTrPggggIM674b25zrPOv8+Fx4Igzr/hvZPPgiDhvIDOus6/4b27z4nOhyDP
hM6/4b26z4IgzrzhvbLOvSDOs+G9sM+BIM674b25zrPOv8+Fz4Igz4DOtc+B4b22IM+Ezr/hv6YK
ICDPhM65jrzPicuB4b21z4POsc+DzrjOsc65IMqm4bw3zrvOuc+gz4DOv869IOG9ge+D4b+2tM6z
zrmOs869zr/OvMG9s869zr/Phc+CLCDPhOG9sCDOtOG9siDPgM+B4b2xzrPOvM6xz4Thvr8KICDO
teG8sM+CIM+Ezr/hv6bPhM6/IM+Az4HOv+G9tc66zr/Ov8+EzrEsACDhvaXPg8y44b6/IOO9hc+A
z4nPgiDOvOG9tCDPgM61zrnPg+G9uc68zrXOuOG+vyDOseG9gMuAzr/hvbYKICDPgM+B4T25z4TO
tc+Bzr/OvSDOus+xzrrhv7bPgiDPg86y4b2zz4jOsc+Dzrjusc65IM604b2zzr/OvS4gzr/hvZDO
tOG9s069IM6/4b2Gzrkg4byEzrvOu86/IM68zr/OuSBOtM6/zrrOv+G/ps+TzrnOvQogIM6/4byx
IM+E4b2wIM+Ezr/Ouc6x4b+mx4TusSDMu+G9s86zzr/Ovc+EzrXNgiDhvKIgz4TBvbTOvSDhvZHP
guG9uc64zrXPg865zr0sII+AzrXPgeG9tiDhvKfPgiDOts6/z4XOu8614b27zrWPg864zrPOuSwK
ICDOv+G9kM+H4b22IM+E4b20zr0gzr/hvZbPg86xzr0gz4DOsc+BzrmPg8+E4b2xzr3PhM61z4Ig
4b2Rzrzhv5bOvSDhvMHOvM6xz5HPhOG9sc69zrXOuc69LiDhvJDOs+G9vCDOtOG9sywg4byFz4TO
uSDOvOG9s869CiAgz4DOv8+E4b6/IOG8kM6+4b+Gzr0gz4Thv4egz4DhvbnOu861zrkgzrrOseG9
tiDPhGG9sCDOseG9kc+E4b+Gz4Ig8ZyUz4fOtc65zr0g4byAz4PPhs4xzrvhv7bPgiDOus6x4b22
IM6m4b23zpvOuc+Ay4DO/869CiAgz4TOuc68z4nNgeG9sc+DzrHNg864zrHOuSwgzrrPseG9tiDO
vOG9sc674a6/IOG8gI66z4HOuc6y4b+2z4Mgzr+hvLbOtM6xzocg4byQz4Dhvr8g4bwQzrzOv+G/
piDOs+G9sc+BLCDOv+G9mCDPgOG9sc67zrHOuQogIM6z4b2zzrPMv869zrXPvSDPhs6x4b+mz4Th
vr0g4byAzrzPhuG9uceEzrHvgd6xzocgzr3hv6bOvSDOvOG9s86934TOv865IM6A4b2z34DOtc65
z4POvM6xzrkgz4TOv+G/Js64Yb6/IOG8sc+6zrHOveG9uM69CiAgz4DPgc6/zrvOsc6yzrXhv5bO
vSDhvKHOvOG+ls69IM614by2zr3Osc65IM+E4b20zr0gz4DPgeG9vc+EzrfOvSwg4b2FzoDPicuC
IM+Ezr/hvbrPgiDPg8+FTrzOvOG9sc+Hzr/Phc+CCiAgz4PhvbzPg86/zrzOtc79LiDhvJDhvbDO
vSDOs+G9sM+BIM+Ezr/hv6bPhM6/IM6yzrXOss6h4b23z4nPgiDhvZHPgKG9sc+Bzr7hv4MkIM+A
4b25z4TOtSDOus6x4b22IM+AzrXPgeG9tiDPxM6/4b+mCiAgz4ThvbfOvc6wIM6EzrnOvM+Jz4Hh
vbXHg861z4TKsem9tyDPhM65z4IgzrrOseGttiDhvYPOvSDPxM+B4b25z4DOv869IOG8kM6+4b2z
74PPhM6xzrkgz4POus6/z4DOteG/ls79zocgz4DPgeG9ts69Is604b2yCiAgz4ThvbTOvSDhvIDP
gc+H4f20zr0g4b2Az4HOuOO/ts+CIOG9kc+AzL/OuOG9s8+DzrjOsc65LCDMvOG9kc+EzrHOuc6/
zr0g4byhzrPOv+G/ps68zrHOuSHPgM61j4Hhvbcgz4Thv4bPggogIM+EzrXOu861z4XPhuG9hs/C
IOG9gc69zoTOuc69zr/hv6bOvSDPgM6/zrnOteG/lu+DzrjOsc65Kc674b25zrfOv869LgoKICDO
lM63zrzOv++DzrjhvbPOvc6/x4XPgi4gzpPhv70g4ba/zp/Ou8+Fzr3OuM65zrHOuOG9uM+CChpH
ZW9wZ2lhbDoKCiAgRnJvbSBhIFVuaWNvZCUgY29uZmVyZe5jZSBpbnZpdGF0aW9uOgoKICDhg5Lh
g5ehg67hg53hgxXhg5cg4YOQ4YOu4YOa4YOQ4YOV4YOUIOGDkuGDlOGCmOGDkOGHoOGDneGDlyDh
g6Dhg5Thg5Lhg5jhg6Hhh6Lhg6Dhg5Dhg6rhg5jhg5AgVG5pY29kZS3hg5jhg+Eg4YOb4YOU4YOQ
4YOX4YOUIOGDoeGDkOGDlOGDoOGDl+GDkOCDqOEDnaGDoOGDmOGDoeGDnRogIOGDmeGDneGDnOGD
pOGD1OGjoOGDlOGDnOGDquGDmOGDkOGDluGDlCDhg5Phg5Dhg6Hhg5Dhg6Hhg6zhg6Dgg5Thg5Hh
g5Dhg5MsIOGDoOGDmaGDG+GDlOGDmuGDmOGDqiDhg5LhgxDhg5jhg5vhg5Dhg6Dhg5fhg5Thg5Hh
g5AgMTAtMTIg6YOb4YOQ6YOg4YOi4YOhLAIgIOGDpS4g4YOa4YOQ4YOY4YGc4YOq4YOo4YOYLCDh
g5Lhg5Thg6Dhg5vhg5Dhg5zhg5jgg5Dhg6jhg5guIOGDmeGDneGDnOGDpOGDlOGDoOGDlOGDnOGD
quGDmOGDkCDhg6jhg5Thg7Dhg5nxg6Dhg9Tlg5Hhg6Eg4YOU4YOg4YOX4YOQ4aOTIOEDm+GDoeGD
neGDpOGDmuGDmOGDneGDoQogIOGDkOGDpeGDoeGDnuGDkOGDouGDouGDlOCDkeGDoSDhgpjhg6Hh
g5Thg5cg4YKT4YOQ4YOg4ZOS5YOU4YOR4YOo4YKYKMGDoOGDneGDkuGDneGDoOGDmOGDuuGDkOGD
kCDhg5jhg5zhw6Lhg5Thi6Dhg5zhg5Thg6Lhg5gg4YOR4YOQIFVuaWNvZGUt4YOYLAogIOGDiOGD
nOGDIuGDlOGDoOCDHOGDEOGDquGDmOGDneGDnOGDmGGDmuGDmOGDluGDkOGDquGDmOODkCDhg5Ph
g5Ag4YOa4aOf4YOZ4YOQ4YOa4YOY4YOW4YOQ4YOq4YMY4YOQLCBFbmljbmRlPeGDmOGDoSDhg9Lh
g5Dhhxvhi53hg6fhg5Thg5zjg5ThgZHhg5AKICDhg53hg57hg5Thg6Dhg5Dhg6rhg5jhg+Phg5og
4YOh4YOY4YOh4YOi4YOU4YOb4YOU4YOR4YOh4YOQLCDhg5Phg5Ag4YOS4YeQ8YOb4YOd4YOnoYOW
4ZOc4YOU4YOR4YOY4YMXIOGDnuGDoOGDneGBkuGDoOGDkOGDm+GDlOGDkeGDqOGDmCwg4YOopYOg
4YOY4YOk4YOi4YOU4YOR4YOo4YOYLAogIOGDouGDlOWDpeGDoeGDouGDleGDkeODmOGD4SDhg7Ph
g5Dhg5uhg6Phg6jhg5jhg5Xhg9Thg5Hhg5DhA6Hhg5Ag4YOT4YOQIOGBm+GDoOGDkOGDleGDkOGD
muGDlOGDnOGDneGDleGDkOGDnCDhg5nhg53hg5vhg57hg5jhg6Phg6Lhg5Thg6Dhg6Phg5og4YOh
4YOY4YOh4YOi4YOU4YOb4YOU4YOR4YOo4YPYLgoKQnVzc2lhbj4KCiAgRnJvbSBhIFVuaWNvbGUk
Y29uZiVyZW5jZCBpbnZpdGF0aW9uOgoKICDQl9Cw0YDQtdCz0LjRgdGC0YDQuNGA0YPQudGC0LXR
gdGMINGB0LXQudGH0LDRgSDQvdCxINCU0LXRgdGP0YLRg9GOINCc0LXQttC00YPQvdCw0YDQvtCU
0L3Rg9GOINCa0J7QvdGE0LXRgNC12L3RhtC40Y4g0L/QvgogIFVuaWdvZGUsINCy0L7RgtC+0YDQ
sNGPINGB8L7Rg9GC0L7UuNGC0YHRjyAxMC0xMiDQvNCw0YDRgtCwIDEpOTcg0LfQvtC00DAg0LIg
0JzQsNC50L3RhtCVINCyINCT0LXRgNC80LDQvdC40LguCiCg0JrQvtC90YTQtdGA0LXQvdGG0LjR
jyDRgdC+0LHQtdGA0LXRgiDRiNG40YDQvtC60LjQuSDQutGA0YPQsyDRjdC60YHQv9C10YDRgtC+
0LIg0L/UviAg0LLQvtC/0YLQvtGBULDQvCDQs9C72L7QsdCw0PvRjNC90L7Rs9C+CiAg0JjQ/dGC
0LXRgNK10LXRgtCwINC4IFVuaWNvZGUsINC70L7QutCw0LvQuNC30LDRhsC40Lgg0Lgg0LjQvdGC
0LXRgNC9ULDRhtC40L7QvdCw0LvQuNC30LDRhtC40LgsINCy1L7Qv9D70L7RidC10L3QuNGOINC4
iiAg0L/RgNC40LzQtdC90LXQvdC4wY4hVU5pY29kZSDYsiDRgNCw0LfQu9C40YfQvdGL0YUg0L7Q
v9C10YDQsNGG0LjQvtC90L3Ri9GFINGB0LjRgdGC0LXQvNCx0YUg0Lgg0L/RgNC+0LPRoNC40LzQ
vNC90YvRhQogINC90YDQuNC70L7QttC10L3QuNGP0YUsINGI0YDQuNGE2YLQsNGFLCDQsNC10YDR
gdCC0LrQtSDQuCDQvNC90L7QO9C+0Z/Qt9GL0YfQvdGL0YUg0LrQvtC80L/RjNGOUYLQtdGA0L3R
i9GFINGB0LjRAdGG0LXQvNCw0IUuCgpUaGFpIChVQ1MgTGV2ZWwgMik6CgogIAV4Y2VycHQgZnJv
LSBhIHBvZXRyeyBvbiBUaGUgEm9tYWxjZSBvZiBUaGUgVGhyZWVgS3lOZWRvbHMgKGEgQ2ppbmVz
ZQooIGNsYXNzaWMgJ3NhbiBHdWEnKToKCiAgWy0tLS0tLQ0tLS0tLS0tDS0tLS0tLS0tLS0tLS18
LS0tLS0tLC0tLS0tLS0tLS0tJS0tJSwtXQogICAg4LmPIOC5geC4nOC5iOC4meC4lOC4tOC4meC4
ruC4seC5iGG4meC9gOC4quC4t8C5iOC4reC4oeC5guC4l+C4o+CYoeC5geC4quC4meC4quC4seC4
h+C5gOC4p8C4iiAg4Lie4rij4Liw4Lib4LiB4LmA4LiB4Lio6riB4Lit4LiH4Lia4Li54LmK4LiB
4Li54LmJ4LiC4Li24LmJ4LiR4LmD4Lir4Lih4LuICyAg4Liq4Lj04Lia4Liq4Lit4LiH4LiB4Lip
4Lix4LiV4Lij4Li04Lii4LmM4LiB4LmI4Lit4LiZ4Lir4LiZ4LmJ4Liy4LmB4Lil4LiW4Lix4LiU
4LkE4LibICAgIDAgIOC4quC4reC4h+C4reC4h+C4hOC5jOC5hOC4i+C4o8C5ieC5guC4h+C5iuC5
gOC4guC4JeC4MuC5geC4mmi4suC4m+i4seC4jei8jeC4sgogICIg4LiX4Lij4JiG4LiZ4Lix4Lia
4LiW4Li34Lyt4JiC4Lix4LiZ4PiX4Ki14LmA4Lib4LmH6LiZ4KiX4Li14LmI4Lie4Li24LmI4LiH
ICAgICAgKCAgICDguJqguYnguPLguJnguYDguKHguLfguL3guIfguIjguDbguIfguKfgsLTguJvg
uKPguLTguJXguIDguJvguYfguJnguJngurHguIHguKvgutnguLKKICDguZLguK7guIjguLTguYvg
uJnguYDguKLguLXguKLguJHguJfguLHguJ7guJfguLHguYjguKfguKPguLHguKfguYDguKHguLfg
uK3guIfhuKHguLIgICAgACAgICThuKvguKHguLbguqLguIjguLDguIbguYjguLLguKHguJTguIrg
uLHguYjg+KfguJXguLHguKfguKrguLPguITguLHhuI0KIGAgIOC5hOC4q+C4oeC4t+C4reC4meC4
guC4seC4muC5hOC4quC5hOC4peC5jOC5gOC4quCot+C4reCwiOC4suC4gfC5gOC4hOC4q+C4siCo
ICAgYOC4o+C4seC4muC4q+C4oeC4suCou+C5iOC4suC5gOC4guC5geC4suC4oei4MuC5gOC4pcC4
ouC4reC4suC4qOC4seC4jwogsOC4neC5iOC4sOC4ouC4reC5ieC4reC4h+C4reC4uOC5ieC4meC4
ouC4uOC5geC4ouC4geC5AeC4q+C5ieC5geC4leC4geC4geCwseC4mCAgICAgICEgIGDguYPguIrg
uYnguKrguLLguKfguJnguLHguYnguJnguYDguJvguYfguJnguIrguJnguKfguJnguIrguLfkuYjg
uJnguIrguLfguJnguYPguIgKICAgIOC4nuC4heC4sWC4mOC4peC4tOC4ieC4uOC4ouC4geC4uOC4
ouC4geC4teC4geC4peC4seC4muC4geC5iOC4reC5gOC4q+C4leC4uCAgICAgICAgICDguIrguYjg
uLLguIfguK3guJLg+YDguJ7guKjguIjguKPgOLTguIfguKvguJnguLLguJ/guYnguLLg+KPguYng
uK3guIfguYTkuKvwuYkKICDguJXguYnguK3guIfgsKPguJrguKPguLLguIbguYjguLLguJ/g+LHg
uJnguIjguJnguJrgOKPguKNouaXguLHouKIgICAgICAgICAgIOCwpOC5heC4q+C4suC5g+C4hPC4
o+C4hOC5ieC4t+C4iuC4ueC4geA4qeCdieC4muC4o+C4o+C4peC4seC4h+C4gOCZjCDguK8KCiEg
KFRoZSBhYm92ZSBpcyBhIHZ3Ty1jb2x1bW4kdGV4dC4gSUYgY29tcmluaW53YGNoYTJhc3RlcnMg
YXJlIGhhbmRsZWQKICBjb3JyZWN0bHksIHRoZSBsaW5lcyBvZiB0aGUgc2Vjb25kIGNvbHVtbiBz
aG99bGQgYmUgYWxpZ25lZCB3aXRoIHRoZQogoHwgY2hhcmFjdGVyIGFib3ZlLikKCkV0aGlvcGlh
bjoKCiAgUHJvdmVyYnMgaW8gdGhlIEFteGFyaWEgbGFuZ3VhZ206CgogAOGIsOGIm+GLrSDhgqDh
iy3hibPhiKjhiLUw4YoV4YyJ44ilIMGKoOGLreGKqOGIsOGIteGNogogIOEJpeGYCyLhiqvhiIjh
ip0h4Yut4YKV4Yuw4Yqg4Ymj4Ym0IOGJoOGJhuGImOGMoOGKneGNogogIOEIhOGMpSDpi6vhiIjh
yaThibEg4YmB4Yid4Yyl4Y6TIOGKkOGLjeGNogogIOGLsOGIgCDhiaDhyJXhiI3hiJkg4YmF4Ymk
IOWJo+GLreGMoOGMoSDhipXhjKPhibUg4Ymg4YyI4Yuw4YiI4Yqt4Y2iCiAg4Yuo4Yqg4I2NIOGL
iOGIiOGInfGJsyDhiaDhiYXhiaQg4Yqg4Yut4Ymz4Yi94Yid4Y2iKiAg4Yqg4Yut4Yy1IOGJoOGJ
oOGIiiDhi7Phi4sg4Ymw4YiY4Ymz4Y2iCiAg5Ziy4Ymw4Yio4YyJ4YiZJOGDreOLsOGIqOGMjeGI
meGNogogIOGJgOWItSDhiaDhiYDhiLVhjaUg4YuV4Yqd4YGB4YiL4YiNIOGJoOGKpeGMjeGIqSDh
i63hjIThi7PhiI3hjaIKICDhi7XhiK0g4cmi4Yur4Yml4YitIOGKoOGKleGJoOGIsyDhi6vhiLXh
iK3hjaIKICDhiLDhi40g4Yql4YqV4YOw4Ymk4YmxIOGKpOGKleGMhSDhiqXhipXhi7Ag4YyJ4Yio
4Ymk4YmxIOCKoOGLreGJsOGLs+GLsOGIreGIneGNogogIOGKpeGMjeGLnOGIrSDhi6jhiqjhjYjh
ibDhi41hipUg4YyJ4Yiu4YiuIOGIs+ELreGrmOGMi+GLjSDhiqDhg63hi7XhiK3hiJ3hjaAKICDh
i6jhjI7hiKjhiaThibUg4YiM4Ynj4Y2lIGGJouGLq+GLqeGJtSDhi63hiLXhiYUg4Ymj4YujoYu5
4Ym1IOGLu+GMoOGojeGJleGNogogIOGJpeGIqyAhiqjhiJjBjY3hibPhibUw4YjN4YyG4YqVIOGI
i+GNi+GJs+GJteGPogogIOGLk/GJo+GLrSDhiJvhi7DhiKrhi6sg4Yuo4YiI4YuN4Y2lIOGMjaGK
leGLtSDhiy3hi54g4Yut4Yue4Yir4YiN4Y2iCiCg4Yus4Yql4Yi14YiL4YidIOGKoOGMiOGIqSDh
iJjhiqsg4YuooYqg4Yie4YirIMGKoOGMiOHIqSDh64vhiK3hiqvhjeIKISDhibDhipXhjIvhiI4g
4Ymi4Ymw4Y2JIOGJsOGImOGIjeGItCHhiaPhjYnhjaIKICDhi4jhi7PhjIXhiIUg4Ymb4YitIOGJ
ouGIhuGKlSDhjKjhiK3hgLXhiJUg44qg4Ym16YiL4Yiw4YuN4Y2iCiAg4Yql4YyN4Zit4YiF4YqV
IGGJoOGNjeGIq+GIveGIhWDhiI3hiq0g4YuY5cit4YyL4Y2iCgpSdWxlczoKCiAg4Zq74ZuWIKGa
s+Ga+eGeq+GapiDhmqbhmqrhm48g4Zq76ZuWIOGbmuGaouGbnuGblijhmqnhGr4g4Zqu4Zqr4ZuX
IOGbmuGaquGavuGbnuGbliDhmr7hmunhmrHhmqbhmrnhm5bhmqrhmrHhm57hmqrhm5cg4Zq54ZqB
4ZqmIOGap+GaqiDhmhnhm5bhm6XhmqsKCiAgKE9sZCBFbmdsaXNoLCB3aGljbGB0cmFuc2NyaWJl
ZCBpbnRvIExhdGluIHJlYWRzKCdIZSBDd2FldGggdGhhdCBoZQogIGJxZGUgdGhhJW0gbGVuZGUg
bm9wdGh3ZWFyZHVtIHdpdGggdGhhIFdjc3RzYWUuJiBhbmYgbWVhbnMgJ0hlIHNhaWQKICB0aGF0
IGhlIG5pdmUkKGluIHRoZSBOb3J0aGVybiBsYW5kIGxlYXIgdGhlIFdlc3Rlcm4g02VhLicpCApC
cmFpbGxlOgoKICDioYzioIHipKfioJEg4qC84qCB4qCSAiDyoY3ioJzioIfioJHioLnioLDipI4g
4qGn46CV4qCMAkogMOIhjeKgnOKgh+KgkeKguSDioLrioIHihK4i8qCZ4KCR4qCB4qCZ6qCSIOKg
nuKglSDioIPioJHioJvioJQg4qC64qCK4qC54qCyIPKhuergu+KgESDioIrioI4g4qKd4qCVIOKg
meKgs+Kig+KgngogIOLgseKggfKgnuKgkfKgp6KguyDioIHioIPioLPioJ4g4KA54qCB4qCf4qCy
IOKhueKgkSDioJfioJHmoJvioIrioIzioPsg4KCV4qCLMOKgmeKgiuOgjiDioIPiqKXioJfiqIri
oIHioIcg4KC64qih4qCOCiAg4qCO4qCK4qCb4qCd4qCrIOKgg+KguSDioLnioJEh4qCK4qCH4qC7
4qCb4qC54qCN4qCB4qCdYqCCIOKgueKgkyDioIrioIfioLvioIXioIIg4qC54qCRIOKgpeKgncKg
meKgu+Kg3uKggeKgheKgu+OgggogIOKggeKgneKgmSDioLnioJEg4qih4qCK4qCR4qiLIOKgjeKo
s+Lgl+KgneKgu+KgsiDioY7ioIrioJfioJXi4JXioJvioJEg4qCO4qCK4qCb4qCd4qCrIOKgiuKg
nuKgsiLioYHioJ3ioJkKICDioY7ioIrioJfioJXioJXiqJvioJHioLDioI4g4qCd4qCB4qCN4qCR
IOKguuKggeKgjiDioJvioJXgqJXqoJkg4qCl4qCP4qCV4qCdIOqgsOKhoeKggeKgneKgm+KgkeOk
giDioIvioJXioJcg4qCB4qCd4qC54qC54qCU4qCbIOKgmeKgkwogIKKgoeKgneKgjuKgkSHioJ7i
oJUg4qCP4qCl4qieoOLgmeKgiuKgjiDioJnioIHioJ3ioJkg4qCWwqCV4qCyCgogIOKhleKgh+Kg
mSDioY3ioJzioIfioJXioLkg4qC64qCB4qCOIOKggeKgjiDioZnioJHioIHioBkg4KABYrCOIOKg
gSDioJnioNXioJXioJfioKTioJ3ioAHioIrqoIfioLIKCiAg4qGN4qCU4qCZ4qCWIOKgiiDioJni
oJXioJ3ioLDioJ4g4qCN4qCR4qCB4qCdIOKgnuKglSDioI7ioIHioLkg4qC54qCB4qCeIOKhiiDi
ooXioI3ioKvioIIg4qCV4qCLIOKojeKguQogIOKAuuKgnSDioIXioJ3ioKrioIfioKvioJvioJHi
oIIhwqCx4qCB4qCeIOKgueKgu+KgkSDioIrioI4g4qCP4qCc4qCe4qCK4qCK4qCl4qCH4qCe4qCH
4qC9IOKgmOLgkeKggeKgmSBioIHisIPioLPioJ4KICDioIEg4qCZ4qCV4qCV4qCX4qCk4qCd4qCB
4qCK4qCH4qCyIOKhiiDioI3ioIriqKPioJ4g4qCZ4KKB4qCn4qCRoOKgg+KgkeKgsiDioZTioIri
oIfioJTioKvioIIg4qCN4qC54qCO4qCR4qCH4qCL4qCCIOKknuKglQogIOKgl+KgkeKgm+KgnOKg
mSDioIEg4qCK4qCV4qCL4qCL4qCU4qCk4qid4qCB4qCK4rCHIOKggeKgjiDioLnioJAg4qCZ4qCR
4qGB4qCZ4qCR4qCIAOKgj+KgiuKgleKgiuKgkSDioJXioIsg4qAK4qC34qCV4qCd4qCN4qCV4uCd
4qCb4qC74qC5CqAg5qCUIOKgueKgkSDioJ7ioJfioMHioJniopnioLog4qGD4qCl4qSeIOKgueKg
kSDioLrioIrioI7ioJnioJXioI0gwqCV4qGLIOKgs+KgliHioIDioJ3ioIrioJHioIzioJXioJfi
oI4KICDioIrioI6g4qCUIOKgueKgkSDioI7ioIrioI3ioIrioIfioJHioIYg4qCBwqCd4qCZIOKg
jeIguTDioKXioJ3isJnioIHyoIfioIfioKrioCsg4qCZ4qCD4qCd4qCZ4qCOCiAg4qCp4iCB4qCH
4iCHIOKgHeKgleKgniDioJnioIrioIzioKXigJfioIMg4qCK4qCe4qCCIOKgleKglyDioLnioJEg
4qGK4qCz4qCd4qCe5qCX4qC54qCw4qCOIOKgmeKgleKgneKgkSDioIvioJXioJfioLIg4qG74qCz
CiAgYqC44qSK4qCH4qCHYOKgueKgu+KgkeKgi+KgleKgl+KgkSDioI/ioLvioI3ioIrioJ4h4qCN
4qCRIOKgnuKgnSDioJfioJHioI/isJHioIHioJ7ioIIh4qCR4qCN4qCP4qCZ4qCB4qCe4qCK4qCK
4qiBoqCH4qCH4qC54qCCAOKgueKggeKgngogIKKhjeKgnOKgh6KgkeKguSDiqLrioIHioI4g4qCR
4iCOIOKgmeKgkeKggeKgmSDioIHioI4g4qCBIOKgmeKgleKgleKgl+KgoOCgneKggeKgiuKgh+Kg
sgoKICAoVGhlIGZpcnN0IONvdXBsZSBvZiBwYXJhZ2JhcGhzIG9mICJBIENocilydG1hcyBDYXJv
bCIgYnkgRGlva2VucyEKCkNvLXBhY3QgZm9ucCBxZWxlY3Rpb24gZXhhbXBsZSB05Xh0OgoKICBB
QkNERUZHSElKS0xFT09QUVJTVFVWV1hZWiAvMDEyNzQ1Njc4OAogIGFiY2RlZmdoaWprbG1ub3Bx
cnN0dXZzeHl6IMKjwqnAtcOAw4bDlsOew5/DqcO2w78KICDigJOigJTigJjigJzigJ3igJ7mgKDy
gKLigKbigLDihKLFk8WgxTjFvuKCrCDOkc6SzpPOlM6pzrHOss6zzrTPiSDQkNCR0JLQk9CU0LDQ
sdCy0LPQtEogIOKIgPKIguKIiOKEneKIp+KIquKJoeKIniDihpHihpfihijihrvih6Mg5pSw4pS8
4tXU45WY4paR4pb64pi64pmAIO+sgc+/veKRgOKiguE8oOG4gtOl4bqE2ZDLkOKNjteQ1LHhg5AK
CmPyZWV0aW5ncyhpbiB2YXJpbnVzIGxhbmd1YWdlczoKCjAgSGFsbG8gd29ybGQsIM6azrHOu863
zrzhvTPPgc6xIM664b25z4POvM61LCDjgrPjg7Pjg4vjg4Hjg48KCsJveCBkcmF3aW5nIGFsaWdu
bGVudCB0ZXN0czogICAgICAgICAgICAgICAgICAgICAgICAgICAiICAgICAgICAgICAgICDilIgK
ICAgICAgISAgICAgICAgICAgICAgICAgJCAgICAgICAgICAgICAgICAgICAgICAgICAgIGAiICAo
ICAgqCAgICAgICAgIOKWiQogIOKRlOKVkOKVkOKVpuKVkOKVkOCVlyAg4pSM4pSA4pSA4pSs4pyA
4pSA4pSQMCDilS3ilIDilIDilKzilIDilIDila4gIOKVreKUgOKUgOKUrOKUgOKUgOKFriAg4pSP
4pSB4pSB4pSz4pSB4pSB4pSTICDilI7ilJLilI/ilJEgICDilbcgIOKVu2BilI/ylK/ilJMg4pSM
4pSw4rSQICAgIOKWyiDilbHilbLilbHilbLilbPilbPilbMKICDilZHilIzilIHilajglIDilJDi
lZEgIOKUhuKVhOKVkOKVp+KVkuKVl+KUhiAg4pSC4pWS4pWA4pWq4pWQ4pWV4pSioCDilILilZPi
lIDilYHilIDilZbilJIgIOKUg+KUjOKUgOKVguKUgOKUkOKUgyAg4pSX4p2D4pWE6pSZICDilbbi
lLzilbTilbrilYvilbjilKDilLzilKgg4pSd4tWL4tSlICAgAOKWiyDilbLi1bHilbLilbHilbPi
lbPilbMKICDilZHilILilbIg4pWx4pSC4pWRJCDilILilZEgICDilZHilIIgYOKUguKUgiDilIIg
4pSC4pSCICDilIrglZEg4pSDIOKVkeKcgiAg8pTD4pSCIOKVvyDilILilKMgYOKUjeKVheKUhuCU
kyAgIOKVtSAg4pW5IOKUl+LUt+KUmyDilJTilLjilJggICAg4pSMIOKVsaKVssKVseKVsuKVs+KV
s+KVswogIOKVoOKVoSDilbMg4pWe4pWjICDilJzilaIgICDmlZ/ilKQgIOKUnOKUvOqUgOKUvOKU
gGKUvOKUtCAg4pSc4oWr4pSA4pWC4pSA4pWr4pSkICDilKPilL/ilb7ilLzilbzilP/ilKsgIOKU
leIUm+KUluaUmgAgICAg4pSM4pSE4pSE4pSQIOKVjiDilM/ilIXilIXClJMk4pSLIOKWjSDilbLi
lbHilbLilbHilbPilbPilbMKICDilZHilILilbEg4pWy4pSC4pWRICDilIrilZEgICTilZHilIIg
IOKUguKUgmDilIIg4pSC4pSCIADilILglZFg4pSDIOKVkeKcgiAg4pSD4pSCIOKVvSDilILilIMg
IOqWkeKWkeKWkuKWkuKWk+KWk+KWiOKWiCDilIogIOKUhiLilY4g4pWPICDilIcg4pSLIOKWjgoh
IOKVkeqUlOKUgOKVpeKUgOKUmOKVkaAA4pSC4pWa4pWQ4pWk4pWQ4pWd4pSCICDilILilZjilZDi
laril5DilZvilIIgIKKUguKVmeKUgOKVgOKUgOKVnOKUgiAg4pSD4pSU4pSA4pWC4pSI4pSY4pSD
IiDilpHilpHilpLilpLilpPilpPilojinogg4pSKICDilIYg4pWMIOKVj6Eg4pSHIOKQCyDmlo8K
ICDilYrilZDilZDilanilZDilZDilZ0hIOqUlOKUgOKcgOKUtOKUgOKUgOKUmCAg4pWw4pSA4pSA
4pS04pSA4pSA4p2/ICDilbDilIDilMDilLTiFIDilIDila8gIOKUh+KUweKUgeKEu6KUgeqUgeKU
myAg4paX4paE4paW4pab4paA4pecICAg4pSU4pWM4pWMopSYIOKVjiDilJfilY3ilY3ilJsg4pSL
ICCiloHiloLiloPmloBiloXilobilofjlogOICAgISAgICAgICAgICAgICAgICAgICAgICAgICAg
ICAoICAgICAgICAgICAgICDilo3iloLilpjikpniloTilp8K`),
char => char.charCodeAt(0));
