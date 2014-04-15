export default Ember.ObjectController.extend({

  toSpell: 'this is hipster!',
  dictionary: [5,4,5,4,6,4,8],
  tokens: [],

  dictionarySize: function(){
    return this.get('dictionary').length;
  }.property('dictionary'),

  tokenize: function(){
    this.set('tokens', this.get('toSpell').split('').removeObject(' '));
  }.property('toSpell'),


});
