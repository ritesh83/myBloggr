export default Ember.Handlebars.compile("<div class=\"container-fluid\">\n    <div class=\"row-fluid\">\n        <div class=\"span3\">\n            <table class=\'table\'>\n                <thead>\n                <tr><th>Recent Posts</th></tr>\n                </thead>\n                {{#each model}}\n                    <tr><td>\n                        {{#link-to \'post\' this}}{{title}} <small class=\'muted\'>by {{author.name}}</small>{{/link-to}}\n                    </td></tr>\n                {{/each}}\n            </table>\n        </div>\n        <div class=\"span9\">\n            {{outlet}}\n        </div>\n    </div>\n</div>");
