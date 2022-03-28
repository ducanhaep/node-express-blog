class SiteController {
  // [Get] /home
  index(req, res) {
    res.render("home");
  }

  // [Get] /search
  search(req, res) {
    res.send("search detail");
  }
}

module.exports = new SiteController();
