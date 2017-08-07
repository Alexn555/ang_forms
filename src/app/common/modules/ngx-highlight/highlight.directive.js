"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var HighlightDirective = (function () {
    function HighlightDirective(el) {
        this.el = el;
        this.searchTerm = '';
        this.caseSensitive = true;
        this.viewRendered = false;
        this.WRAPPER_TOKEN = "==--==##";
    }
    Object.defineProperty(HighlightDirective.prototype, "caseSensitivity", {
        get: function () { return this.caseSensitive ? '' : 'i'; },
        enumerable: true,
        configurable: true
    });
    HighlightDirective.prototype.ngOnChanges = function (changes) {
        this.highlightSearchTerm();
    };
    HighlightDirective.prototype.ngAfterViewInit = function () {
        this.highlightSearchTerm();
    };
    HighlightDirective.prototype.ngAfterViewChecked = function () {
        this.viewRendered = true;
    };
    HighlightDirective.prototype.highlightSearchTerm = function () {
        // initial ngChage call will result with null \ undefined.
        if (!this.searchTerm) {
            // when user deletes all text the searchTerm is set to '' we need to remove all marks.
            if (this.viewRendered) {
                this.removePreviouslyMarkedTextInNode();
            }
            return;
        }
        ;
        if (this.el.nativeElement) {
            this.removePreviouslyMarkedTextInNode();
            this.markMatchedTextTokens(this.el.nativeElement);
        }
    };
    HighlightDirective.prototype.markMatchedTextTokens = function (htmlNode) {
        var _this = this;
        var _searchTerm = this.getSearchTerm();
        var searchRegex = new RegExp(_searchTerm, 'gmi');
        var _searchTermUniqueTokens = this.getUniqueTokenWrappedSearchTerm();
        var searchRegexUniqueTokens = new RegExp(_searchTermUniqueTokens, 'gmi');
        this.traverseHtmlElementsTree(htmlNode, function (e) {
            _this.traverseNodesInElement(htmlNode.childNodes, function (node) { return _this.wrapUniqueTokensAroundMatchedText(node, searchRegex); });
        });
        this.markMatchedTextAndRemoveUniqueTokens(htmlNode, searchRegexUniqueTokens);
    };
    HighlightDirective.prototype.markMatchedTextAndRemoveUniqueTokens = function (htmlNode, searchRegex) {
        var _this = this;
        if (htmlNode.innerHTML) {
            var innerHtml = htmlNode.innerHTML;
            var newHtml = innerHtml.replace(searchRegex, function (match) {
                var wrapperLength = _this.WRAPPER_TOKEN.length;
                var markedStr = match.substr(wrapperLength, match.length - (wrapperLength * 2));
                return "<mark>" + markedStr + "</mark>";
            });
            htmlNode.innerHTML = newHtml;
        }
    };
    HighlightDirective.prototype.traverseNodesInElement = function (nodes, visitCallback) {
        for (var i = 0; i < nodes.length; i++) {
            var node = nodes[i];
            if (node.nodeType === 3) {
                visitCallback(node);
            }
        }
    };
    HighlightDirective.prototype.wrapUniqueTokensAroundMatchedText = function (htmlNode, searchRegex) {
        var innerText = htmlNode.nodeValue;
        var newText = innerText.replace(searchRegex, this.WRAPPER_TOKEN + "$&" + this.WRAPPER_TOKEN);
        htmlNode.nodeValue = newText;
    };
    HighlightDirective.prototype.traverseHtmlElementsTree = function (currentNode, visitCallback) {
        if (currentNode) {
            visitCallback(currentNode);
        }
        for (var i = 0; i < currentNode.children.length; i++) {
            var childNode = currentNode.children[i];
            this.markMatchedTextTokens(childNode);
        }
    };
    HighlightDirective.prototype.removePreviouslyMarkedTextInNode = function () {
        var node = this.el.nativeElement;
        var markingPattern = new RegExp('<mark>|<\/mark>', 'g');
        var cleanText = node.innerHTML.replace(markingPattern, '');
        node.innerHTML = cleanText;
    };
    HighlightDirective.prototype.getSearchTerm = function () {
        var escapedSearchTerm = "" + this.escapeRegExp(this.searchTerm);
        var spaceToMultiMatchRegex = new RegExp(' ', 'gm');
        escapedSearchTerm = escapedSearchTerm.replace(spaceToMultiMatchRegex, '|');
        return escapedSearchTerm;
    };
    HighlightDirective.prototype.getUniqueTokenWrappedSearchTerm = function () {
        var escapedSearchTerm = this.escapeRegExp(this.searchTerm);
        var spaceToMultiMatchRegex = new RegExp(' ', 'gm');
        escapedSearchTerm = escapedSearchTerm.replace(spaceToMultiMatchRegex, this.WRAPPER_TOKEN + "|" + this.WRAPPER_TOKEN);
        escapedSearchTerm = "" + this.WRAPPER_TOKEN + escapedSearchTerm + this.WRAPPER_TOKEN;
        return escapedSearchTerm;
    };
    HighlightDirective.prototype.escapeRegExp = function (str) {
        return str.replace('/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g', '\\$&');
    };
    return HighlightDirective;
}());
__decorate([
    core_1.Input('highlight'),
    __metadata("design:type", String)
], HighlightDirective.prototype, "searchTerm", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], HighlightDirective.prototype, "caseSensitive", void 0);
HighlightDirective = __decorate([
    core_1.Directive({
        selector: '[highlight]'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], HighlightDirective);
exports.HighlightDirective = HighlightDirective;
//# sourceMappingURL=highlight.directive.js.map