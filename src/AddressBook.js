var AddressBook = function () {
	this.addressBook = [];
	this.initialComplete = false;
};

AddressBook.prototype.getInitialContacts = function(first_argument) {
	var self = this;

	setTimeout(function () {
		self.initialComplete = true;
		if (cb) {
			return cb();
		}
	},3);
};

AddressBook.prototype.addContact = function(contact) {
	this.addressBook.push(contact);
};

AddressBook.prototype.getContact = function(index) {
	return this.addressBook[index];
};

AddressBook.prototype.deleteContact = function(index) {
	this.addressBook.splice(index,1);
};