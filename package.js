Package.describe({
  summary: "Don't subscribe until you need to."
});

Package.on_use(function (api, where) {
	api.add_files("lazy_subscription.js", "client");
});