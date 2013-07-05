(function () {
	var Lazy = function(collection, subscription) {
		this.collection = collection;
		this.subscription = subscription;

		this.lazy = false;

		self = this;

		return function() {
			if (!self.lazy) {
				self.collection = new Meteor.Collection(self.collection);
				self.subscription();
				self.lazy = true;	
			}
			return self.collection;
		}
	}
	Meteor.Lazy = Lazy;
}());