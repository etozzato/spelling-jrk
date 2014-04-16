export default Ember.Controller.extend({

  word: '',
  dictionary: {b: ["bushwick", "beard", "beer", "batch", "brooklyn", "bit", "blog", "biodiesel", "butcher", "blue", "bottle", "brunch", "banjo", "banh", "bag", "bitters", "banksy", "bicycle", "belly", "bespoke", "bird", "before"], r: ["readymade", "roof", "retro", "raw", "rights"], c: ["cornhole", "carles", "chic", "craft", "cosby", "chips", "chambray", "churchkey", "cred", "cardigan", "cleanse", "chillwave", "chia", "coffeebicycle", "cliche", "cray", "coffee"], h: ["high", "havent", "heard", "hoodie", "hella", "helvetica", "hashtag"], l: ["life", "loko", "lomo", "lokostreet", "locavore", "lofi", "leggings", "letterpress", "level"], u: ["umami", "ugh"], i: ["intelligentsia", "iphone", "it", "irony"], s: ["shabby", "s", "skateboard", "selfies", "small", "shoreditch", "shorts", "slowcarb", "sweater", "schlitz", "seitan", "synth", "selvage", "scenester", "squid", "selvagebanjo", "swag", "salvia", "sustainable", "singleorigin", "semiotics", "street", "sriracha", "stumptown", "sartorial", "sold"], n: ["neutra", "narwhal", "normcore", "next"], a: ["artisan", "anderson", "art", "actually", "asymmetrical", "artisanglutenfree", "american", "apparel", "aesthetic", "austin", "apparelmlkshk", "a", "actuallybitters", "authentic"], g: ["gastropub", "glutenfree", "godard", "gentrifymessenger", "gentrify"], p: ["polaroid", "probably", "pbrb", "pitchfork", "pourover", "pbr", "plaid", "party", "pack", "pickled", "park", "pug", "portland", "paleo", "pinterest", "pork", "put", "popup"], o: ["occupy", "of", "organic", "on", "out"], f: ["fap", "four", "freegan", "fanny", "forage", "fund", "food", "fixie", "farmtotable", "flannel", "flexitarian", "fingerstache"], y: ["you", "yolo", "yr"], t: ["them", "tousled", "trade", "tryhard", "truffaut", "twee", "trust", "truck", "tofu", "tumblr", "thundercats", "tattooed", "typewriter", "tonx", "they"], e: ["ennui", "ethical", "echo", "ethnic", "etsy"], v: ["vice", "viral", "vinegar", "vegan", "v"], j: ["jean"], m: ["marfa", "moon", "mixtape", "master", "mi", "messenger", "meggings", "meh", "mustache", "mumblecore", "mcsweeneys", "mlkshk"], x: ["xoxo"], w: ["wes", "wolf", "whatever", "wayfarers", "williamsburg"], d: ["direct", "distillery", "drinking", "diy", "dreamcatcher", "disrupt", "denim", "deep"], k: ["kale", "keytar", "kitsch", "kogi", "keffiyeh"], q: ["quinoa"]},

  tokenized: function(){
    var tokens;
    tokens =  this.get('word').toLowerCase().replace(/[^a-zA-Z]/g,'').split('');
    var dictionary;
    dictionary = this.get('dictionary');
    var value;
    value = $.map(tokens, function(el) {
      var items;
      items = dictionary[el];
      if (typeof(items) == 'undefined')
        return "" + el.toUpperCase() + ": I am not familiar..."
      return "" + el.toUpperCase() + ": " + items[Math.floor(Math.random() * items.length)];
    });
    return value;
  }.property('word')


});
