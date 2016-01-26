export default Ember.Controller.extend({

  word: '',
  dictionary: {a: ["abashed", "abdicate", "aberrant", "abominate", "abrasive", "abrogate", "abstemious", "abstinent", "abstruse", "accolade", "acerbic", "acme", "acolyte", "acquiesce", "acrimonious", "acronym", "adage", "admonitory", "adroit", "adulation", "adversity", "aegis", "affable", "aficionado", "affinity", "aggrandize", "alacrity", "allay", "allegory", "alleviate", "alliteration", "amanuensis", "ambience", "ambiguous", "ambivalent", "ambulatory", "ameliorate", "amenable", "amenity", "amorous", "amorphous", "anachronism", "anagram", "analogy", "anathema", "ancillary", "animus", "annals", "anomaly", "antecedents", "anthropology", "anthropomorphic", "antic", "antipathy", "antiquity", "antithesis", "aphorism", "aplomb", "apocalypse", "apocryphal", "apogee", "apostate", "apotheosis", "appellation", "apposite", "apprehend", "appropriate", "apt", "arbiter", "arcane", "arch", "arduous", "argot", "arid", "armageddon", "arrant", "arrogate", "arsenal", "artful", "artless", "ascetic", "asperity", "aspersion", "assiduous", "assuage", "atavistic", "atrophy", "attenuate", "augment", "augur", "auspicious", "autonomous", "avuncular", "awry", "axiom"], b: ["badinage", "bailiwick", "baleful", "banal", "bastion", "bathos", "behemoth", "beleaguer", "bellicose", "belligerent", "bemused", "bestow", "bibliophile", "bibulous", "blandishment", "blatant", "bovine", "bravado", "brickbat", "bromide", "brook", "brouhaha", "brusque", "bucolic", "burgeon"], c: ["cabal", "cachet", "cacophony", "cadaverous", "cadge", "cajole", "callow", "calumny", "canard", "candor", "canon", "cant", "cantankerous", "capitulate", "capricious", "captious", "carnal", "carnivorous", "carp", "carrion", "castigate", "casuistry", "cataclysm", "catharsis", "catholic", "caveat", "cavil", "celibacy", "champion", "charlatan", "chary", "chasm", "chicanery", "chide", "chimera", "churlish", "cipher", "circuitous", "circumlocution", "circumspect", "clamorous", "clandestine", "claptrap", "cleave", "clemency", "cloy", "cogent", "cognizant", "collation", "colloquy", "compendium", "complacent", "complaisant", "complement", "compliant", "concomitant", "concrete", "conduit", "congenital", "consensus", "consortium", "consummate", "contentious", "context", "contiguous", "contretemps", "contrite", "contumacious", "conundrum", "co-opt", "copious", "corollary", "corporeal", "correlate", "coruscate", "cosset", "coterie", "craven", "craw", "credible", "creditable", "credulous", "crestfallen", "culpable", "curmudgeon", "cursory", "curt", "cynosure"], d: ["dalliance", "daub", "dauntless", "dearth", "debacle", "debase", "debilitate", "debunk", "decimate", "declasse", "decorous", "decorum", "decry", "deduce", "deem", "deferential", "definitive", "delectation", "deleterious", "demonic", "denigrate", "denizen", "deprecate", "deracinate", "derelict", "deride", "derisive", "derogatory", "descry", "desecrate", "desiccate", "desuetude", "desultory", "detrimental", "detritus", "dexterous", "dextrous", "diaphanous", "diatribe", "dichotomy", "didactic", "diffident", "digress", "dilettante", "diminution", "disaffection", "disconsolate", "discursive", "disdain", "disingenuous", "disparate", "dissemble", "dissertation", "dissimulate", "dissolute", "distraught", "doff", "dogged", "doggerel", "dogmatic", "doleful", "dolt", "don", "dormant", "dossier", "doughty", "dour", "doyen", "draconian", "droll", "dudgeon", "duplicity"], e: ["ebullient", "eclectic", "edify", "effective", "effectual", "effectuate", "efficacious", "efficient", "effrontery", "effulgent", "egregious", "egress", "elegy", "elicit", "elide", "elucidate", "emblazon", "emend", "emeritus", "emote", "empirical", "emulate", "encomium", "endemic", "enervate", "enigmatic", "enmity", "ennui", "entity", "enure", "envisage", "ephemeral", "epicure", "epigram", "epitaph", "epithet", "epitome", "equable", "equanimity", "equitable", "equivocal", "errant", "ersatz", "erudite", "eschew", "esoteric", "ethereal", "etymology", "eulogy", "euphemism", "euphonius", "euphoric", "exacerbate", "excoriate", "excrement", "exculpate", "execrable", "exegesis", "exemplary", "exhort", "exigency", "exonerate", "exorcise", "expatiate", "expiate", "expostulate", "expropriate", "expunge", "extempore", "extenuate", "extirpate", "extrapolate", "exuberant"], f: ["facet", "facile", "facilitate", "fallacious", "fallow", "falter", "farrago", "fatuous", "feasible", "feckless", "fecund", "feisty", "felicitate", "felicitous", "felicity", "feral", "ferret", "festoon", "fetid", "foetid", "fey", "fiasco", "fiat", "fiduciary", "figurative", "finite", "flaccid", "flagellate", "flamboyant", "flatulent", "flay", "fledgling", "flippant", "flout", "foible", "foment", "font", "foray", "force", "forensic", "formidable", "fortuitous", "founder", "fractious", "fruition", "fulminate", "fulsome", "furtive", "fusillade"], m: ["majeure", "macrocosm", "maladroit", "malaise", "malapropism", "malfeasance", "malign", "malleable", "manque", "martinet", "masticate", "matriculate", "maw", "mawkish", "megalomania", "melange", "mellifluous", "mendacious", "mendicant", "mercurial", "meretricious", "messianic", "metamorphosis", "metaphor", "metaphysics", "mete", "miasma", "microcosm", "mien", "milieu", "militate", "minutiae", "misanthrope", "misapprehension", "misappropriate", "miscreant", "misnomer", "misogyny", "mitigate", "mnemonic", "modicum", "molt", "morass", "mordant", "moribund", "motif", "mottled", "mountebank", "mulct", "mundane", "munificent"], g: ["gadfly", "garrulous", "gauche", "generic", "genesis", "genre", "gentry", "germane", "googol", "gormandize", "gossamer", "grandiloquence", "gratuitous", "gratuity", "gravamen", "gregarious", "guise"], h: ["habituate", "hackneyed", "halcyon", "harbinger", "harridan", "hedonist", "hegemony", "hegira", "heinous", "herbivorous", "hermaphrodite", "heterogeneous", "heuristic", "hiatus", "hie", "homily", "homogeneous", "honorarium", "hubris", "hyperbole", "hypothesis"], i: ["iconoclast", "idyllic", "ignominy", "illicit", "illusory", "imbibe", "imbroglio", "immemorial", "immutable", "impassive", "impecunious", "impede", "imperious", "imperturbable", "implacable", "implement", "implicate", "implicit", "imponderable", "importunate", "importune", "impugn", "impute", "inauspicious", "incarnate", "inchoate", "incipient", "inclement", "incognito", "incongruous", "increment", "incredulous", "incubus", "inculcate", "incumbent", "indecorous", "indigenous", "indigent", "indolent", "ineffable", "ineluctable", "ineptitude", "ingenue", "ingenuous", "innate", "innocuous", "innuendo", "inordinate", "inscrutable", "insouciant", "insular", "intangible", "integument", "interdict", "interlocutor", "interpolate", "intractable", "intransigent", "intransigeant", "intrepid", "intuit", "inundate", "inure", "invective", "inviolable", "inviolate", "irascible", "issue", "iterate"], j: ["jejune", "jettison", "jingoism", "jocular", "journeyman", "juxtapose"], k: ["karma", "keen", "ken", "kinetic", "kite", "kitsch", "knell", "kowtow", "kudos"], l: ["lachrymose", "laconic", "lacuna", "lagniappe", "lambent", "lament", "languish", "lascivious", "lassitude", "latent", "laudatory", "lax", "lay", "lethargic", "leviathan", "lexicon", "licentious", "limn", "linchpin", "limpid", "lissome", "lissom", "litany", "lithe", "litigious", "logy", "loquacious", "lothario", "lugubrious", "lurid"], n: ["nadir", "nascent", "nebulous", "nefarious", "nemesis", "neophyte", "nether", "niggardly", "niggling", "nihilism", "nirvana", "nomenclature", "non", "nostrum", "noxious", "nuance", "nubile", "nugatory"], s: ["sequitur", "sacrosanct", "sagacity", "salacious", "salient", "salubrious", "salutary", "salvo", "sanctify", "sanctimonious", "sang-froid", "sanguine", "sapient", "sardonic", "sartorial", "saturnine", "savoir-faire", "savor", "saw", "scabrous", "schism", "scion", "score", "scourge", "scurrilous", "scuttle", "seamy", "secular", "seminal", "sententious", "sentient", "septic", "sequel", "sequester", "serendipity", "serpentine", "servile", "shibboleth", "sibilant", "simile", "simulate", "sinecure", "sinuous", "skeptic", "sceptic", "skittish", "slake", "slew", "slue", "smug", "sobriquet", "sodden", "solecism", "soliloquy", "solipsism", "sop", "sophism", "sophomore", "soporific", "soupcon", "spate", "spleen", "sporadic", "spurious", "squalid", "stentorian", "stolid", "strident", "stultify", "sublimate", "sub", "succor", "succubus", "succulent", "succumb", "sully", "supercilious", "supine", "supplicate", "surfeit", "surmise", "surreptitious", "sybarite", "sycophant", "sylph", "symbiosis", "syntax", "synthesis"], o: ["obdurate", "obeisance", "obfuscate", "oblivion", "obloquy", "obscurantism", "obsequies", "obsequious", "obstreperous", "obtrude", "obtrusive", "obtuse", "obviate", "occlude", "odious", "offal", "olympian", "ombudsman", "omniscient", "omnivorous", "onerous", "onomatopoetic", "opprobrium", "ordure", "ostensible", "ostentatious", "ostracize", "otiose"], p: ["paean", "palliative", "pallid", "palpable", "panacea", "panache", "panegyric", "panoply", "pantheon", "paradox", "paragon", "parameter", "pariah", "parlous", "parochial", "paroxysm", "parsimonious", "parvenu", "pastiche", "pastoral", "patent", "pathological", "pathos", "patrician", "paucity", "peccadillo", "pecuniary", "pedagogue", "pedant", "pedestrian", "pejorative", "penchant", "penultimate", "penurious", "peregrination", "peremptory", "perfidious", "perfunctory", "peripatetic", "peripheral", "pernicious", "peroration", "perquisite", "persiflage", "persona", "perspicacious", "peruse", "pervasive", "petulant", "philistine", "phlegmatic", "piquant", "pithy", "placate", "placebo", "placid", "plaintive", "plangent", "platitude", "plaudits", "plethora", "poignant", "polemic", "polyglot", "ponderous", "pontificate", "portend", "portmanteau", "postulate", "potpourri", "potter", "pragmatic", "prate", "prattle", "precipitate", "precipitous", "precursor", "predilection", "preen", "prehensile", "presage", "prescience", "presentiment", "prestidigitator", "prevaricate", "priapic", "primogeniture", "primordial", "privation", "privy", "probity", "proclivity", "procreate", "prodigal", "prodigious", "prodigy", "profane", "profligate", "prognosis", "prognosticate", "proliferate", "prolific", "prolix", "prone", "propensity", "prophylactic", "propinquity", "propitiate", "propitious", "proprietary", "prosaic", "proselytize", "protean", "protracted", "proviso", "prowess", "prurient", "puckish", "puerile", "pugnacious", "pulchritude", "pummel", "punctilious", "pundit", "purgative", "purloin", "pusillanimous", "putative"], q: ["quaff", "quagmire", "quail", "qualm", "quandary", "quarry", "quash", "quaver", "quay", "quell", "querulous", "query", "queue", "quiescent", "quintessence", "quixotic", "quizzical"], r: ["raconteur", "raffish", "rake", "rambunctious", "rancor", "rankle", "rapacious", "rapt", "recalcitrant", "recant", "recapitulate", "recidivism", "reclusive", "recondite", "reconnoiter", "rectify", "rectitude", "redolent", "redoubtable", "redress", "refractory", "refulgent", "regale", "rejoinder", "remand", "remonstrate", "renegade", "renege", "repartee", "repertoire", "replete", "reprehensible", "reprobate", "reprove", "resolute", "reticent", "retrograde", "retrogress", "retrospective", "rhetoric", "ribald", "rife", "rigors", "riposte", "risible", "roue", "rubicund", "rue", "ruminate", "rosa"], t: ["tacit", "taciturn", "tactile", "tangential", "tangible", "tautology", "tawdry", "tedious", "temerity", "temporal", "tendentious", "tenet", "tenuous", "terse", "testy", "timorous", "titular", "toady", "torpid", "tortuous", "traduce", "transcend", "travesty", "tremulous", "trenchant", "trepidation", "truculent", "truism", "truncate", "turgid", "tyro"], u: ["ubiquitous", "umbrage", "unconscionable", "unctuous", "unfathomable", "unflagging", "unmitigated", "unpropitious", "unseemly", "unsullied", "untenable", "untrammeled", "uxorious"], v: ["vacillate", "vacuous", "vagary", "vapid", "variegated", "vehement", "venal", "veneer", "venerate", "venial", "veracious", "verisimilitude", "veritable", "vertigo", "vicissitude", "vignette", "vilify", "virago", "virtuoso", "virulent", "visage", "visceral", "vitriolic", "vituperative", "vociferous", "voluble", "voracious", "votary", "votive"], w: ["waft", "wag", "wanton", "waspish", "welter", "winnow", "winsome", "wizened", "wont", "wry"], x: ["xenophobia"], y: ["yen"], z: ["zealot", "zenith"]},

  tokenized: function(){
    var tokens;
    tokens =  this.get('word').toLowerCase().replace(/[^a-zA-Z]/g,'').split('');
    var dictionary;
    dictionary = this.get('dictionary');
    var value;
    value = $.map(tokens, function(el) {
      var items;
      items = dictionary[el];
      return "" + el.toUpperCase() + " as in " + items[Math.floor(Math.random() * items.length)];
    });
    return value;
  }.property('word')


});