(() => {
    var e = new function e() {
        var t, n;
        !function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, e), n = "Violin Charades", (t = "name") in this ? Object.defineProperty(this, t, {value: n, enumerable: !0, configurable: !0, writable: !0}) : this.name = n
    }, t = document.createElement("p");
    t.textContent = "I like ".concat(e.game, ".");
    var n = document.createElement("h1");
    n.textContent = "Как интересно!", document.querySelector("#root").append(n, t)
})();
