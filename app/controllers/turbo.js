export default Ember.ObjectController.extend({

  toSpell: 'this is turbo',
  dictionary: [1,2,3],
  tokens: [],

  dictionarySize: function(){
    return this.get('dictionary').length;
  }.property('dictionary'),

  tokenize: function(){
    this.set('tokens', this.get('toSpell').split('').removeObject(' '));
  }.property('toSpell'),


});
